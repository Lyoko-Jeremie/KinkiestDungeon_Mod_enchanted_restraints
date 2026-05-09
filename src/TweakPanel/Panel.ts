import {Pane} from 'tweakpane';

type BladeApi = ReturnType<Pane['addBlade']>;
type ButtonApi = ReturnType<Pane['addButton']>;
type FolderApi = ReturnType<Pane['addFolder']>;
type TabApi = ReturnType<Pane['addTab']>;
type BindingApi = ReturnType<Pane['addBinding']>;
type PaneUiApi = ButtonApi | FolderApi | TabApi | BindingApi | BladeApi;

export class Panel {

    private pane: Pane;
    private _state: Record<string, any>;
    private _apiRef: Record<string, PaneUiApi | HTMLElement>;

    constructor(title: string) {
        this.pane = new Pane({title: title});

        // 【核心秘诀】：在内部偷偷建一个黑盒对象，外部完全不需要知道它的存在
        this._state = {};
        this._apiRef = {};
    }

    // 封装下拉菜单
    addDropDown(
        key: string,
        label: string,
        options: Array<string | { name: string; id: any }>,
        callback: (value: any) => void,
    ): Panel {
        // Tweakpane 需要的 options 格式是 { '显示名': '值' }
        const optionsMap: Record<string, any> = {};
        options.forEach((opt: string | { name: string; id: any }) => {
            // 支持传入字符串数组 ['剑', '盾']
            // 也支持传入对象数组 [{name: '剑', id: 'w1'}]
            const key: string = typeof opt === 'string' ? opt : opt.name;
            const val: any = typeof opt === 'string' ? opt : opt.id;
            optionsMap[key] = val;
        });

        // 取第一个作为默认值，存入内部黑盒
        this._state[key] = typeof options[0] === 'string' ? options[0] : options[0].id;

        this._apiRef[key] = this.pane.addBinding(this._state, label, {
            label: label,
            options: optionsMap
        }).on('change', (ev: any) => {
            callback(ev.value); // 触发回调，直接把值传出去
        });

        return this; // 支持链式调用
    }

    // 封装单选/复选框
    addBoolean(
        key: string,
        label: string,
        defaultValue: boolean,
        callback: (value: boolean) => void,
    ): Panel {
        this._state[key] = defaultValue;
        this._apiRef[key] = this.pane.addBinding(this._state, label, {
            label: label
        }).on('change', (ev: any) => {
            callback(ev.value);
        });
        return this;
    }

    // 封装普通按钮
    addButton(
        key: string,
        label: string,
        callback: () => void,
    ): Panel {
        this._apiRef[key] = this.pane.addButton({title: label}).on('click', callback);
        return this;
    }

    addTextLabel(
        key: string,
        label: string,
    ): Panel {
        // 1. 创建一个原生的 div 元素
        const hintText = document.createElement('div');
        hintText.textContent = label;

        // 2. 添加一些简单的样式，可以利用 Tweakpane 内置的 CSS 变量保持风格统一
        hintText.style.padding = '8px 12px';
        hintText.style.color = 'var(--tp-label-foreground-color)'; // 跟随面板主题文字颜色
        hintText.style.fontSize = '12px';
        hintText.style.lineHeight = '1.4';
        hintText.style.borderBottom = '1px solid var(--tp-container-background-color)';

        this._state[key] = hintText;
        // 3. 将元素插入到面板内部
        this._apiRef[key] = this.pane.element.appendChild(hintText);
        return this;
    }


}

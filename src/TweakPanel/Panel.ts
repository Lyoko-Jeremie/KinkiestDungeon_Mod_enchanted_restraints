import {Pane} from 'tweakpane';

type BladeApi = ReturnType<Pane['addBlade']>;
type ButtonApi = ReturnType<Pane['addButton']>;
type FolderApi = ReturnType<Pane['addFolder']>;
type TabApi = ReturnType<Pane['addTab']>;
type TabPageApi = ReturnType<Pane['addTab']>['pages'][number];
type BindingApi = ReturnType<Pane['addBinding']>;
type PaneUiApi = ButtonApi | FolderApi | TabApi | BindingApi | BladeApi;
type PaneContainerApi = Pane | FolderApi | TabPageApi;
type OptionItem = string | { name: string; id: any };
type TabItem = string | { id?: string; title: string; build?: (panel: Panel) => void };

export class ProxyTextLabel {
    constructor(
        private el: HTMLDivElement,
        private _value: string,
    ) {
    }

    get value() {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
        this.el.textContent = value;
    }
}

export class ProxyState<T> {
    private ___$value: T;

    get value() {
        return this.___$value;
    }

    set value(value: T) {
        this.___$value = value;
    }

    constructor(
        private label: string,
        value: T,
    ) {
        this.___$value = value;
        return new Proxy(this, {
            get(target, prop) {
                if (prop === target.label) {
                    return target.___$value;
                }
                return (target as any)[prop];
            },
            set(target, prop, val) {
                if (prop === '___$value') {
                    // skip to avoid infinite loop
                    console.error('ProxyState: Attempted to set ___$value directly, which is reserved for internal use.');
                    return true;
                }
                if (prop === target.label) {
                    target.___$value = val;
                    return true;
                }
                (target as any)[prop] = val;
                return true;
            },
        }) as ProxyState<T>;
    }
}

export class Panel {

    // 当前容器（Pane / Folder / Tab page），所有 add* 都作用于它
    private pane: PaneContainerApi;
    // 始终指向顶层 Pane，用于根级 DOM 访问
    private rootPane: Pane;
    private _state: Record<string, any | ProxyState<any> | ProxyTextLabel>;
    private _apiRef: Record<string, PaneUiApi | HTMLElement>;

    getState<T>(key: string): T | undefined {
        return this._state[key] as T | undefined;
    }

    getApiRef<T extends PaneUiApi | HTMLElement = PaneUiApi | HTMLElement>(key: string): T | undefined {
        return this._apiRef[key] as T | undefined;
    }

    constructor(
        title: string,
        pane?: PaneContainerApi,
        sharedState?: Record<string, any>,
        sharedApiRef?: Record<string, PaneUiApi | HTMLElement>,
        rootPane?: Pane,
    ) {
        if (pane) {
            this.pane = pane;
            this.rootPane = rootPane!;
        } else {
            this.rootPane = new Pane({title: title});
            this.pane = this.rootPane;
        }

        // 内部黑盒状态和 API 引用，子容器共用同一份
        this._state = sharedState ?? {};
        this._apiRef = sharedApiRef ?? {};
    }

    get hidden(): boolean {
        return this.rootPane.hidden;
    }

    set hidden(value: boolean) {
        this.rootPane.hidden = value;
    }

    private createChild(container: PaneContainerApi): Panel {
        return new Panel('', container, this._state, this._apiRef, this.rootPane);
    }

    getPane(): Pane {
        return this.rootPane;
    }

    // 封装下拉菜单
    addDropDown(
        key: string,
        label: string,
        options: OptionItem[],
        callback: (value: any) => void,
    ): Panel {
        if (options.length === 0) {
            throw new Error(`Panel.addDropDown(${key}) options cannot be empty`);
        }
        // Tweakpane 需要的 options 格式是 { '显示名': '值' }
        const optionsMap: Record<string, any> = {};
        options.forEach((opt: OptionItem) => {
            // 支持传入字符串数组 ['剑', '盾']
            // 也支持传入对象数组 [{name: '剑', id: 'w1'}]
            const key: string = typeof opt === 'string' ? opt : opt.name;
            const val: any = typeof opt === 'string' ? opt : opt.id;
            optionsMap[key] = val;
        });

        // 取第一个作为默认值，存入内部黑盒
        this._state[key] = new ProxyState(key, typeof options[0] === 'string' ? options[0] : options[0].id);
        // this._state[key] = {
        //     [label]: typeof options[0] === 'string' ? options[0] : options[0].id,
        // };

        this._apiRef[key] = this.pane.addBinding(this._state[key], label, {
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
        this._state[key] = new ProxyState(key, defaultValue);
        // this._state[key] = {
        //     [label]: defaultValue,
        // };
        this._apiRef[key] = this.pane.addBinding(this._state[key], label, {
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

        this._state[key] = new ProxyTextLabel(hintText, label);
        // 3. 将元素插入到面板内部
        this._apiRef[key] = this.pane.element.appendChild(hintText);
        return this;
    }

    addSeparator(
        key?: string,
    ): Panel {
        const r = this.pane.addBlade({
            view: 'separator',
        });
        if (key) {
            this._apiRef[key] = r;
        }
        return this;
    }

    addNumber(
        key: string,
        label: string,
        defaultValue: number,
        callback: (value: number) => void,
    ): Panel {
        this._state[key] = new ProxyState(key, defaultValue);
        // this._state[key] = {
        //     [label]: defaultValue,
        // };
        this._apiRef[key] = this.pane.addBinding(this._state[key], label, {
            label: label,
        }).on('change', (ev: any) => {
            callback(ev.value);
        });
        return this;
    }

    addRange(
        key: string,
        label: string,
        min: number,
        max: number,
        defaultValue: number,
        callback: (value: number) => void,
    ): Panel {
        this._state[key] = new ProxyState(key, defaultValue);
        // this._state[key] = {
        //     [label]: defaultValue,
        // };
        this._apiRef[key] = this.pane.addBinding(this._state[key], label, {
            label: label,
            min: min,
            max: max,
        }).on('change', (ev: any) => {
            callback(ev.value);
        });
        return this;
    }

    addStep(
        key: string,
        label: string,
        step: number,
        min: number,
        max: number,
        defaultValue: number,
        callback: (value: number) => void,
    ): Panel {
        this._state[key] = new ProxyState(label, defaultValue);
        // this._state[key] = {
        //     [label]: defaultValue,
        // };
        this._apiRef[key] = this.pane.addBinding(this._state[key], label, {
            label: label,
            min: min,
            max: max,
            step: step,
        }).on('change', (ev: any) => {
            callback(ev.value);
        });
        return this;
    }

    addFolder(
        key: string,
        title: string,
        build?: (panel: Panel) => void,
    ): Panel {
        const folder = this.pane.addFolder({title: title});
        this._apiRef[key] = folder;
        if (build) {
            build(this.createChild(folder));
        }
        return this;
    }

    addTab(
        key: string,
        pages: TabItem[],
        onSelect?: (pageId: string, index: number) => void,
    ): Panel {
        if (pages.length === 0) {
            throw new Error(`Panel.addTab(${key}) pages cannot be empty`);
        }

        const normalized = pages.map((page: TabItem, index: number) => {
            if (typeof page === 'string') {
                return {id: page, title: page, build: undefined as ((panel: Panel) => void) | undefined};
            }
            return {
                id: page.id ?? `${key}_${index}`,
                title: page.title,
                build: page.build,
            };
        });

        this._state[key] = new ProxyState(key, normalized[0].id);
        // this._state[key] = {
        //     [key]: normalized[0].id,
        // };
        const tab = this.pane.addTab({
            pages: normalized.map(page => ({title: page.title})),
        });
        this._apiRef[key] = tab;

        (tab as any).on?.('select', (ev: any) => {
            const index = Number(ev?.index ?? 0);
            const pageId = normalized[index]?.id;
            if (!pageId) {
                return;
            }
            (this._state[key] as ProxyState<string>).value = pageId;
            onSelect?.(pageId, index);
        });

        normalized.forEach((page, index) => {
            if (!page.build) {
                return;
            }
            const pageApi = tab.pages[index];
            page.build(this.createChild(pageApi));
        });

        return this;
    }

}

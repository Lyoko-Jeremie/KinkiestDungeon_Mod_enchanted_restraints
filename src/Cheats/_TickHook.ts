import {clone} from 'lodash';

export class TickHook {
    idGenerator = 1;
    Hook_Map = new Map();
    Hook_HookedFunction_Point?: CallableFunction;
    windowPtr: any;

    constructor(
        public nameTickHook: string,
    ) {
    }

    setupHook(windowPtr: Window) {
        if (this.Hook_HookedFunction_Point) {
            return;
        }
        this.windowPtr = windowPtr;

        // setup Cheat Hook
        this.Hook_HookedFunction_Point = this.windowPtr.KDProcessInput;
        this.windowPtr.KDProcessInput = this.Hook_HookFunctionCaller.bind(this);

        // console.log('TickHook Hook_HookedFunction_Point', this.Hook_HookedFunction_Point);
        if (!this.Hook_HookedFunction_Point) {
            console.error('TickHook setupHook() failed.');
            throw Error('TickHook setupHook() failed.');
        }
    }

    Hook_HookFunctionCaller(...arg: any[]) {
        if (!this.Hook_HookedFunction_Point) {
            console.error('TickHook Hook_HookFunctionCaller() (!this.Hook_HookedFunction_Point).');
            throw Error('TickHook Hook_HookFunctionCaller() (!this.Hook_HookedFunction_Point).');
        }
        this.Hook_HookedFunction_Point!.bind(this.windowPtr)(...arg);
        // console.log('TickHook Hook_HookedFunction_Point ', arg[0]);
        // a slow speed filter for hook point `KDProcessInput`
        // if (arg[0] === "move" || arg[0] === 'tick') {
        // console.log('TickHook Hook_HookedFunction_Point Hook_HookFunctionCaller', this.Hook_HookedFunction_Point, this.Hook_Map);
        this.Hook_Map.forEach((v, k) => {
            v();
        });
        // }
    }

    addHook(callback: CallableFunction) {
        // console.log('TickHook addHook 1', clone(this.Hook_Map));
        let id = ++this.idGenerator;
        this.Hook_Map.set(id, callback);
        // console.log('TickHook addHook 2', clone(this.Hook_Map));
        return id;
    }

    removeHook(id: number) {
        return this.Hook_Map.delete(id);
    }

}


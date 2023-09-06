export class TickHook {
    idGenerator = 1;
    Hook_Map = new Map();
    Hook_HookedFunction_Point?: CallableFunction;
    windowPtr: any;

    constructor() {
    }

    setupHook(windowPtr: Window) {
        if (this.Hook_HookedFunction_Point) {
            return;
        }
        this.windowPtr = windowPtr;
        // setup Cheat Hook
        // this.Hook_HookedFunction_Point = KinkyDungeonUpdateJailKeys;
        this.Hook_HookedFunction_Point = this.windowPtr.KDGetEnemyCache;
        // KinkyDungeonUpdateJailKeys = this.Hook_HookFunctionCaller;
        this.windowPtr.KDGetEnemyCache = this.Hook_HookFunctionCaller.bind(this);
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
        // console.log('TickHook Hook_HookedFunction_Point Hook_HookFunctionCaller', this.Hook_HookedFunction_Point);
        this.Hook_HookedFunction_Point!.bind(this.windowPtr)(...arg);
        this.Hook_Map.forEach((v, k) => {
            v();
        });
    }

    addHook(callback: CallableFunction) {
        let id = ++this.idGenerator;
        this.Hook_Map.set(id, callback);
        return id;
    }

    removeHook(id: number) {
        return this.Hook_Map.delete(id);
    }

}


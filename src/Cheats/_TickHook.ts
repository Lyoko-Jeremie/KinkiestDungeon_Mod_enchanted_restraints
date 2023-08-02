export class TickHook {
    idGenerator = 1;
    Hook_Map = new Map();
    Hook_HookedFunction_Point: CallableFunction;

    constructor() {
        // setup Cheat Hook
        // this.Hook_HookedFunction_Point = window.KinkyDungeonUpdateJailKeys;
        this.Hook_HookedFunction_Point = window.KDGetEnemyCache;
        // window.KinkyDungeonUpdateJailKeys = this.Hook_HookFunctionCaller;
        window.KDGetEnemyCache = this.Hook_HookFunctionCaller;
    }

    Hook_HookFunctionCaller(...arg: any[]) {
        this.Hook_HookedFunction_Point(...arg);
        this.Hook_Map.forEach((v, k) => {
            v();
        });
    };

    addHook(callback: CallableFunction) {
        let id = ++this.idGenerator;
        this.Hook_Map.set(id, callback);
        return id;
    };

    removeHook(id: number) {
        return this.Hook_Map.delete(id);
    };

}


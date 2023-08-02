export class TickHook {
    idGenerator = 1;
    Hook_Map = new Map();
    Hook_HookedFunction_Point: CallableFunction;

    constructor() {
        // setup Cheat Hook
        // this.Hook_HookedFunction_Point = KinkyDungeonUpdateJailKeys;
        this.Hook_HookedFunction_Point = window.KDGetEnemyCache;
        // KinkyDungeonUpdateJailKeys = this.Hook_HookFunctionCaller;
        window.KDGetEnemyCache = this.Hook_HookFunctionCaller.bind(this);
        // console.log('TickHook Hook_HookedFunction_Point', this.Hook_HookedFunction_Point);
    }

    Hook_HookFunctionCaller(...arg: any[]) {
        // console.log('TickHook Hook_HookedFunction_Point Hook_HookFunctionCaller', this.Hook_HookedFunction_Point);
        this.Hook_HookedFunction_Point.bind(window)(...arg);
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


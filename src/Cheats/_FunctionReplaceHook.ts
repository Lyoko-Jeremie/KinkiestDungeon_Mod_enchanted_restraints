export class FunctionReplaceInfo<F extends CallableFunction = CallableFunction> {
    constructor(
        public hookFunctionName: string,
        public oldFunction: F,
        public replaceFunction: F,
        config?: FunctionReplaceHookConfig,
    ) {
        this.callCount = config?.callCount ?? 0;
        this.maxCallCount = config?.maxCallCount ?? -1;
        this.proxyMode = config?.proxyMode ?? false;
        this.noLog = config?.noLog ?? false;
    }

    public callCount: number = 0;
    public maxCallCount: number = -1;
    public proxyMode = false;
    public noLog = false;

    invoke(winRef: Window, originFunctionCallArgs: any[]) {
        if (this.proxyMode) {
            return this.replaceFunction(this, originFunctionCallArgs);
        } else {
            return this.replaceFunction(...originFunctionCallArgs);
        }
    }

}

export interface FunctionReplaceHookConfig {
    callCount?: number,
    maxCallCount?: number,
    proxyMode?: boolean,
    noLog?: boolean,
}

export class _FunctionReplaceHook {
    // Map<HookFunctionName,FunctionReplaceInfo>
    Hook_Point_Map: Map<string, FunctionReplaceInfo> = new Map();

    // const KinkyDungeonMapParams = {
    // function KinkyDungeonGetMainPath(level, altType) {
    UninstallFunctionReplaceHook = (hookFName: string) => {
        const n = this.Hook_Point_Map.get(hookFName);
        if (n) {
            // recover old function
            (window as any)[hookFName] = n.oldFunction;
            this.Hook_Point_Map.delete(hookFName);
        }
    }
    InstallFunctionReplaceHookOnce = (hookFName: string, newFunction: CallableFunction) => {
        this.InstallFunctionReplaceHook(hookFName, newFunction, {
            maxCallCount: 1,
        });
    }
    InstallFunctionReplaceHook = <F extends CallableFunction = CallableFunction>(hookFName: string, newFunction: F, config?: FunctionReplaceHookConfig) => {
        // uninstall old hook point
        this.UninstallFunctionReplaceHook(hookFName);
        // FunctionReplaceInfo
        const functionReplaceInfo = new FunctionReplaceInfo(
            hookFName,
            (window as any)[hookFName],
            newFunction,
            config,
        );
        // install hook point
        this.Hook_Point_Map.set(hookFName, functionReplaceInfo);
        (window as any)[hookFName] = (...arg: any[]) => {
            // add count & call replace function
            const n = this.Hook_Point_Map.get(hookFName)!!;
            if (!n.noLog) {
                console.log('FunctionReplaceHook called', hookFName);
            }
            n.callCount = n.callCount + 1;
            if (n.maxCallCount >= 0 && n.callCount >= n.maxCallCount) {
                // uninstall hook , (for call once type hook)
                this.UninstallFunctionReplaceHook(hookFName);
            }
            return n.invoke.call(n, window, arg);
        };
        return functionReplaceInfo;
    };
    // ((() => {
    //     const names = Object.keys(KinkyDungeonMapParams);
    //     names.forEach(T => {
    //     CheatsObject['ForceNextMapTypeOnce_' + T + '_' + KinkyDungeonMapParams[T].background] = () => {
    //         InstallFunctionReplaceHookOnce(
    //             'KinkyDungeonGetMainPath',
    //             () => T,
    //         );
    //     };
    //     CheatsObject['ForceNextMapType_' + T + '_' + KinkyDungeonMapParams[T].background] = () => {
    //         InstallFunctionReplaceHook(
    //             'KinkyDungeonGetMainPath',
    //             () => T,
    //         );
    //     };
    // });
    // })());

    // let chestType = KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint] == "lib" ? "shelf" : "rubble";
    // KinkyDungeonLoot(MiniGameKinkyDungeonLevel, KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint], chestType);
    // KinkyDungeonLoot(MiniGameKinkyDungeonLevel, KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint], "shelf");
    // for (let i = 0; i < 10; i++) {KinkyDungeonLoot(MiniGameKinkyDungeonLevel, KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint], "shelf");}


}

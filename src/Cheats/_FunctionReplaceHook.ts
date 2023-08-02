class FunctionReplaceInfo {
    constructor(
        public hookFunctionName: string,
        public oldFunction: CallableFunction,
        public replaceFunction: CallableFunction,
        public callCount: number = 0,
        public maxCallCount: number = -1
    ) {
    }
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
        this.InstallFunctionReplaceHook(hookFName, newFunction, 1);
    }
    InstallFunctionReplaceHook = (hookFName: string, newFunction: CallableFunction, maxCallCount = -1) => {
        // uninstall old hook point
        this.UninstallFunctionReplaceHook(hookFName);
        // FunctionReplaceInfo
        const functionReplaceInfo = new FunctionReplaceInfo(
            hookFName,
            (window as any)[hookFName],
            newFunction,
            0,
            maxCallCount,
        );
        // install hook point
        this.Hook_Point_Map.set(hookFName, functionReplaceInfo);
        (window as any)[hookFName] = (...arg: any[]) => {
            console.log('FunctionReplaceHook called', hookFName);
            // add count & call replace function
            const n = this.Hook_Point_Map.get(hookFName)!!;
            const f = n.replaceFunction;
            n.callCount = n.callCount + 1;
            if (n.maxCallCount >= 0 && n.callCount >= n.maxCallCount) {
                // uninstall hook , (for call once type hook)
                this.UninstallFunctionReplaceHook(hookFName);
            }
            return f(...arg);
        };
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

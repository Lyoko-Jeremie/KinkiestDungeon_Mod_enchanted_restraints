import {_FunctionReplaceHook, FunctionReplaceInfo} from "./_FunctionReplaceHook";

export class DynamicCheatsHook {
    constructor(
        private functionReplaceHook: _FunctionReplaceHook,
    ) {
    }

    hookTable = {
        'AlwaysCanUseAnyWeapon': [
            (/*functionReplaceHook: _FunctionReplaceHook,*/) => {
                this.functionReplaceHook.InstallFunctionReplaceHook<typeof KinkyDungeonCanUseWeapon>(
                    'KinkyDungeonCanUseWeapon',
                    (NoOverride, e, weapon) => true,
                    {
                        noLog: true,
                    },
                );
            },
            (/*functionReplaceHook: _FunctionReplaceHook,*/) => {
                this.functionReplaceHook.UninstallFunctionReplaceHook('KinkyDungeonCanUseWeapon');
            },
        ],
        'AlwaysCanDrink': [
            (/*functionReplaceHook: _FunctionReplaceHook,*/) => {
                this.functionReplaceHook.InstallFunctionReplaceHook<typeof KinkyDungeonCanDrink>(
                    'KinkyDungeonCanDrink',
                    () => true,
                    {
                        noLog: true,
                    },
                );
            },
            (/*functionReplaceHook: _FunctionReplaceHook,*/) => {
                this.functionReplaceHook.UninstallFunctionReplaceHook('KinkyDungeonCanDrink');
            },
        ],
        'NeverMiscastMagic': [
            (/*functionReplaceHook: _FunctionReplaceHook,*/) => {
                this.functionReplaceHook.InstallFunctionReplaceHook<typeof KinkyDungeonCalculateMiscastChance>(
                    'KinkyDungeonCalculateMiscastChance',
                    () => KinkyDungeonMiscastChance = 0,
                    {
                        noLog: true,
                    },
                );
            },
            (/*functionReplaceHook: _FunctionReplaceHook,*/) => {
                this.functionReplaceHook.UninstallFunctionReplaceHook('KinkyDungeonCalculateMiscastChance');
            },
        ],
        'NeverSlow': [
            (/*functionReplaceHook: _FunctionReplaceHook,*/) => {
                this.functionReplaceHook.InstallFunctionReplaceHook<typeof KinkyDungeonCalculateSlowLevel>(
                    'KinkyDungeonCalculateSlowLevel',
                    (delta) => KinkyDungeonSlowLevel = 0,
                );
            },
            (/*functionReplaceHook: _FunctionReplaceHook,*/) => {
                this.functionReplaceHook.UninstallFunctionReplaceHook('KinkyDungeonCalculateSlowLevel');
            },
        ],
        'NeverMiss': [
            (/*functionReplaceHook: _FunctionReplaceHook,*/) => {
                this.functionReplaceHook.InstallFunctionReplaceHook(
                    'KinkyDungeonGetEvasion',
                    (replaceInfo: FunctionReplaceInfo, originFunctionCallArgs: any[]) => {
                        const r = replaceInfo.oldFunction(...originFunctionCallArgs);
                        return r > 1 ? r : 1;
                    },
                    {
                        proxyMode: true,
                        noLog: true,
                    },
                );
            },
            (/*functionReplaceHook: _FunctionReplaceHook,*/) => {
                this.functionReplaceHook.UninstallFunctionReplaceHook('KinkyDungeonGetEvasion');
            },
        ],
        'AlwaysCanUseMagic': [
            (/*functionReplaceHook: _FunctionReplaceHook,*/) => {
                this.functionReplaceHook.InstallFunctionReplaceHook<typeof KinkyDungeoCheckComponentsPartial>(
                    'KinkyDungeoCheckComponentsPartial',
                    (spell, x, y, includeFull, noOverride) => {
                        let failedcomp: string[] = [];
                        let failedcompFull: string[] = [];

                        let data = {
                            spell: spell,
                            failed: failedcompFull,
                            partial: failedcomp,
                            x: x || KinkyDungeonPlayerEntity.x,
                            y: y || KinkyDungeonPlayerEntity.y
                        };
                        if (!noOverride)
                            KinkyDungeonSendEvent("calcCompPartial", data);
                        if (includeFull) {
                            return [...data.partial, ...data.failed];
                        }
                        return data.partial;
                    },
                    {
                        noLog: true,
                    },
                );
                this.functionReplaceHook.InstallFunctionReplaceHook<typeof KinkyDungeoCheckComponents>(
                    'KinkyDungeoCheckComponents',
                    (spell: spell, x?: number, y?: number, noOverride?: boolean) => {
                        let failedcomp: string[] = [];
                        let data = {
                            spell: spell,
                            components: spell.components!!,
                            failed: failedcomp,
                            x: x || KinkyDungeonPlayerEntity.x,
                            y: y || KinkyDungeonPlayerEntity.y
                        };
                        if (!spell.components) {
                            console.warn('DynamicHook KinkyDungeoCheckComponents', spell.components);
                        }
                        if (!noOverride)
                            KinkyDungeonSendEvent("beforeCalcComp", data);

                        if (!noOverride)
                            KinkyDungeonSendEvent("calcComp", data);
                        return {
                            components: data.components,
                            failed: data.failed,
                        };
                    },
                    {
                        noLog: true,
                    },
                );
            },
            (/*functionReplaceHook: _FunctionReplaceHook,*/) => {
                this.functionReplaceHook.UninstallFunctionReplaceHook('KinkyDungeoCheckComponentsPartial');
                this.functionReplaceHook.UninstallFunctionReplaceHook('KinkyDungeoCheckComponents');
            },
        ],
    } as const;

    enableHook(name: keyof typeof this.hookTable) {
        this.hookTable[name][0](/*this.functionReplaceHook*/);
    }

    disableHook(name: keyof typeof this.hookTable) {
        this.hookTable[name][1](/*this.functionReplaceHook*/);
    }

}

import {get} from 'lodash';


export interface PatchHookConfig {
    originalFunctionName: string;
    hookFunctionBefore?: <Args extends IArguments>(arg: Args) => Args;
    hookFunctionAfter?: <Args extends IArguments, T>(arg: Args, returnValue: T) => T;
    originalCustomGetter?: (jumpFunction: (...args: any[]) => any) => ((...args: any[]) => any);
}

export interface PatchHookInfo extends PatchHookConfig {
    originalFunctionHandle?: (...args: any[]) => any;
    jumpFunctionHandle?: (...args: any[]) => any;
}

export class FunctionPatchHooker {
    hookTable: Map<string, PatchHookInfo[]> = new Map();

    private getOriginalFunction(originalFunctionName: string) {
        return get(window, originalFunctionName);
    }

    private createJumpFunction(originalFunctionName: string): ((...args: any[]) => any) {
        const thisPtr = this;
        return function () {    // JumpFunction
            const hookInfo = thisPtr.hookTable.get(originalFunctionName)!;

            const originalFunction = hookInfo[0].originalFunctionHandle;
            if (originalFunction === undefined) {
                console.error('[FunctionPatchHook] originalFunctionHandle is undefined:', [originalFunctionName, hookInfo]);
                return;
            }

            let newArguments = arguments;
            if (hookInfo) {
                for (const hook of hookInfo) {
                    if (hook.hookFunctionBefore) {
                        try {
                            newArguments = hook.hookFunctionBefore(newArguments);
                        } catch (e) {
                            console.error('[FunctionPatchHook] JumpFunction before hook error:', [originalFunctionName, hook]);
                        }
                    }
                }
            }
            const result = originalFunction.call(originalFunction, ...newArguments);
            let returnValue = result;
            if (hookInfo) {
                for (const hook of hookInfo) {
                    if (hook.hookFunctionAfter) {
                        try {
                            returnValue = hook.hookFunctionAfter(newArguments, returnValue);
                        } catch (e) {
                            console.error('[FunctionPatchHook] JumpFunction after hook error:', [originalFunctionName, hook]);
                        }
                    }
                }
            }
            return result;
        };
    }

    prepareHook(hookConfig: PatchHookConfig) {
        if (!hookConfig || !hookConfig.originalFunctionName
            || (hookConfig.hookFunctionBefore === undefined && hookConfig.hookFunctionAfter === undefined)
        ) {
            console.error('[FunctionPatchHook] prepareHook hookConfig is invalid:', hookConfig);
            return;
        }

        if (!this.hookTable.has(hookConfig.originalFunctionName)
            || this.hookTable.get(hookConfig.originalFunctionName)!.length === 0) {
            this.hookTable.set(hookConfig.originalFunctionName, []);
            this.hookTable.get(hookConfig.originalFunctionName)!.push({
                ...hookConfig,
                originalFunctionHandle: undefined,
                jumpFunctionHandle: undefined,
            });
        } else {
            const nn = this.hookTable.get(hookConfig.originalFunctionName)!;
            nn.push({
                ...hookConfig,
                originalFunctionHandle: nn[0].originalFunctionHandle,
                jumpFunctionHandle: nn[0].jumpFunctionHandle
            });
        }

    }

    doLeakCheck() {
        for (const [originalFunctionName, hookInfo] of this.hookTable.entries()) {
            if (hookInfo.length === 0) {
                console.error('[FunctionPatchHook] doLeakCheck hookInfo is invalid:', [originalFunctionName, hookInfo]);
                continue;
            }
            const isAllHooked = hookInfo.every(hook => hook.jumpFunctionHandle && hook.originalFunctionHandle);
            const isAllNotHooked = hookInfo.every(hook => !hook.jumpFunctionHandle && !hook.originalFunctionHandle);
            const isJumpAndOriginalSameState = hookInfo.every(hook => !!hook.jumpFunctionHandle === !!hook.originalFunctionHandle);
            if (!isAllHooked || !isAllNotHooked || isJumpAndOriginalSameState) {
                console.error('[FunctionPatchHook] doLeakCheck is invalid:', [originalFunctionName, hookInfo]);
            }
        }
    }

    installAllHooks() {
        for (const [originalFunctionName, hookInfo] of this.hookTable.entries()) {
            if (hookInfo.length === 0) {
                console.error('[FunctionPatchHook] installAllHooks hookInfo is invalid:', [originalFunctionName, hookInfo]);
                continue;
            }
            this.doLeakCheck();

            const hook = hookInfo[0];
            let originalFunctionHandle;
            let jumpFunctionHandle;
            if (hook.jumpFunctionHandle && hook.originalFunctionHandle) {
                originalFunctionHandle = hook.originalFunctionHandle;
                jumpFunctionHandle = hook.jumpFunctionHandle;
            } else {

                jumpFunctionHandle = this.createJumpFunction(originalFunctionName);
                if (hookInfo[0].originalCustomGetter) {
                    originalFunctionHandle = hookInfo[0].originalCustomGetter(
                        jumpFunctionHandle
                    );
                } else {
                    originalFunctionHandle = this.getOriginalFunction(originalFunctionName);
                }
                originalFunctionHandle.bind(originalFunctionHandle);
                hookInfo[0].originalFunctionHandle = originalFunctionHandle;
                hookInfo[0].jumpFunctionHandle = jumpFunctionHandle;

            }

            for (const hook of hookInfo) {
                if (!hook.jumpFunctionHandle || !hook.originalFunctionHandle) {
                    hook.originalFunctionHandle = originalFunctionHandle;
                    hook.jumpFunctionHandle = jumpFunctionHandle;
                }
            }
        }
    }

    installHook(hookConfig: PatchHookConfig) {

        if (!hookConfig || !hookConfig.originalFunctionName
            || (hookConfig.hookFunctionBefore === undefined && hookConfig.hookFunctionAfter === undefined)
        ) {
            console.error('[FunctionPatchHook] installHook hookConfig is invalid:', hookConfig);
            return;
        }

        if (!this.hookTable.has(hookConfig.originalFunctionName)
            || this.hookTable.get(hookConfig.originalFunctionName)!.length === 0) {
            this.hookTable.set(hookConfig.originalFunctionName, []);
            let originalFunctionHandle;
            const jumpFunctionHandle = this.createJumpFunction(hookConfig.originalFunctionName);
            if (hookConfig.originalCustomGetter) {
                originalFunctionHandle = hookConfig.originalCustomGetter(
                    jumpFunctionHandle
                );
            } else {
                originalFunctionHandle = this.getOriginalFunction(hookConfig.originalFunctionName);
            }
            originalFunctionHandle.bind(originalFunctionHandle);
            this.hookTable.get(hookConfig.originalFunctionName)!.push({
                ...hookConfig,
                originalFunctionHandle,
                jumpFunctionHandle
            });
        } else {
            const nn = this.hookTable.get(hookConfig.originalFunctionName)!;
            nn.push({
                ...hookConfig,
                originalFunctionHandle: nn[0].originalFunctionHandle,
                jumpFunctionHandle: nn[0].jumpFunctionHandle
            });
        }

    }

}


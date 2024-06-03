import {get, set} from 'lodash';


export interface PatchHookConfig {
    originalFunctionName: string;
    hookFunctionBefore?: <Args extends IArguments>(arg: Args) => Args;
    hookFunctionAfter?: <Args extends IArguments, T>(arg: Args, returnValue: T) => T;
    /**
     * replace hole function
     * @param arg
     * @return [isReplace:boolean, arg?:Args|undefined if not replace, returnValue?:any if replace]
     *         [false, arg, undefined];
     *         [true, undefined, return];
     */
    hookFunctionBeforeReplace?: <Args extends IArguments>(arg: Args) => [boolean, Args | undefined, any];
    /**
     * Custom replacer for originalFunction
     * it must do the task : place the jumpFunction to the hookFunctionPoint as newFunction , and return the old one
     * @param jumpFunction  The jumpFunction
     * @returns The originalFunction
     */
    originalFunctionCustomReplacer?: (jumpFunction: (...args: any[]) => any) => ((...args: any[]) => any);
}

export interface PatchHookInfo extends PatchHookConfig {
    originalFunctionHandle?: (...args: any[]) => any;
    jumpFunctionHandle?: (...args: any[]) => any;
}

export class FunctionPatchHooker {
    hookTable: Map<string, PatchHookInfo[]> = new Map();

    windowPtr?: Window;

    setupHook(windowPtr: Window) {
        if (this.windowPtr) {
            return;
        }
        this.windowPtr = windowPtr;
    }

    constructor() {
    }

    private replaceOriginalFunction(originalFunctionName: string, replaceJumpFunction: ((...args: any[]) => any)) {
        if (!this.windowPtr) {
            console.error('[FunctionPatchHook] replaceOriginalFunction windowPtr is undefined.');
            throw Error('[FunctionPatchHook] replaceOriginalFunction windowPtr is undefined.');
        }
        const originalFunction = get(this.windowPtr, originalFunctionName);
        if (originalFunction === undefined) {
            console.error('[FunctionPatchHook] originalFunction is undefined:', [originalFunctionName]);
            return originalFunction;
        }
        set(this.windowPtr, originalFunctionName, replaceJumpFunction);
        console.log('[FunctionPatchHook] replaceOriginalFunction', [originalFunctionName, originalFunction]);
        return originalFunction;
    }

    private createJumpFunction(originalFunctionName: string): ((...args: any[]) => any) {
        console.log('[FunctionPatchHook] createJumpFunction', [originalFunctionName]);
        const thisPtr = this;
        return function () {    // JumpFunction
            console.log('[FunctionPatchHook] JumpFunction calling', [originalFunctionName]);

            const hookInfo = thisPtr.hookTable.get(originalFunctionName)!;

            const originalFunction = hookInfo[0].originalFunctionHandle;
            if (originalFunction === undefined) {
                console.error('[FunctionPatchHook] originalFunctionHandle is undefined:', [originalFunctionName, hookInfo]);
                return;
            }

            let newArguments = arguments;
            if (hookInfo) {
                for (const hook of hookInfo) {
                    if (hook.hookFunctionBeforeReplace) {
                        try {
                            let [replace, replaceArguments, replaceReturn] =
                                hook.hookFunctionBeforeReplace(newArguments);
                            if (replace) {
                                newArguments = replaceArguments!;
                                return replaceReturn;
                            }
                        } catch (e) {
                            console.error('[FunctionPatchHook] JumpFunction before replace hook error:', [originalFunctionName, hook]);
                        }
                    }
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
        if (this.isAllHookInstalled) {
            if (this.windowPtr) {
                this.installHook(hookConfig);
            } else {
                console.error('[FunctionPatchHook] prepareHook to installHook windowPtr is undefined.');
            }
            return;
        }

        console.log('[FunctionPatchHook] prepareHook', [this.hookTable]);

        if (!hookConfig || !hookConfig.originalFunctionName
            ||
            (
                hookConfig.hookFunctionBefore === undefined
                && hookConfig.hookFunctionAfter === undefined
                && hookConfig.hookFunctionBeforeReplace === undefined
            )
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
        console.log('[FunctionPatchHook] doLeakCheck', [this.hookTable]);
        for (const [originalFunctionName, hookInfo] of this.hookTable.entries()) {
            if (hookInfo.length === 0) {
                console.error('[FunctionPatchHook] doLeakCheck hookInfo is invalid:', [originalFunctionName, hookInfo]);
                continue;
            }
            const isAllHooked = hookInfo.every(hook => hook.jumpFunctionHandle && hook.originalFunctionHandle);
            const isAllNotHooked = hookInfo.every(hook => !hook.jumpFunctionHandle && !hook.originalFunctionHandle);
            const isJumpAndOriginalSameState = hookInfo.every(hook => !!hook.jumpFunctionHandle === !!hook.originalFunctionHandle);
            if (!isAllHooked || isAllNotHooked || !isJumpAndOriginalSameState) {
                console.error('[FunctionPatchHook] doLeakCheck is invalid:',
                    [originalFunctionName, hookInfo],
                    [!isAllHooked, !isAllNotHooked, isJumpAndOriginalSameState]);
            }
        }
    }

    isAllHookInstalled = false;

    installAllHooks() {
        if (this.isAllHookInstalled) {
            return;
        }
        if (!this.windowPtr) {
            console.error('[FunctionPatchHook] installAllHooks windowPtr is undefined.');
            return;
        }
        this.isAllHookInstalled = true;
        console.log('[FunctionPatchHook] installAllHooks', [this.hookTable]);
        this.doLeakCheck();
        for (const [originalFunctionName, hookInfo] of this.hookTable.entries()) {
            if (hookInfo.length === 0) {
                console.error('[FunctionPatchHook] installAllHooks hookInfo is invalid:', [originalFunctionName, hookInfo]);
                continue;
            }

            const hook = hookInfo[0];
            let originalFunctionHandle;
            let jumpFunctionHandle;
            if (hook.jumpFunctionHandle && hook.originalFunctionHandle) {
                originalFunctionHandle = hook.originalFunctionHandle;
                jumpFunctionHandle = hook.jumpFunctionHandle;
            } else {

                jumpFunctionHandle = this.createJumpFunction(originalFunctionName);
                if (hookInfo[0].originalFunctionCustomReplacer) {
                    originalFunctionHandle = hookInfo[0].originalFunctionCustomReplacer(
                        jumpFunctionHandle
                    );
                } else {
                    originalFunctionHandle = this.replaceOriginalFunction(originalFunctionName, jumpFunctionHandle);
                }
                if (originalFunctionHandle === undefined) {
                    console.error('[FunctionPatchHook] installAllHooks originalFunctionHandle is undefined. delete.',
                        [originalFunctionName, hookInfo]);
                    this.hookTable.delete(originalFunctionName);
                    continue;
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
        console.log('[FunctionPatchHook] installHook', [this.hookTable]);

        if (!this.windowPtr) {
            return this.prepareHook(hookConfig);
        }

        if (!hookConfig || !hookConfig.originalFunctionName
            || (
                hookConfig.hookFunctionBefore === undefined
                && hookConfig.hookFunctionAfter === undefined
                && hookConfig.hookFunctionBeforeReplace === undefined
            )
        ) {
            console.error('[FunctionPatchHook] installHook hookConfig is invalid:', hookConfig);
            return;
        }

        if (!this.hookTable.has(hookConfig.originalFunctionName)
            || this.hookTable.get(hookConfig.originalFunctionName)!.length === 0) {
            this.hookTable.set(hookConfig.originalFunctionName, []);

            let originalFunctionHandle;
            const jumpFunctionHandle = this.createJumpFunction(hookConfig.originalFunctionName);
            if (hookConfig.originalFunctionCustomReplacer) {
                originalFunctionHandle = hookConfig.originalFunctionCustomReplacer(
                    jumpFunctionHandle
                );
            } else {
                originalFunctionHandle = this.replaceOriginalFunction(hookConfig.originalFunctionName, jumpFunctionHandle);
            }
            if (originalFunctionHandle === undefined) {
                console.error('[FunctionPatchHook] installHook originalFunctionHandle is undefined.', [hookConfig.originalFunctionName]);
                return;
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


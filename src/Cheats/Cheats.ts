import * as _ from 'lodash';

console.log("=============================enchanted_restraints Cheats.js begin=============================");
console.time("enchanted_restraints Cheats load time");
import {Mixin} from 'ts-mixer';

import {SaveLoad} from './SaveLoad';
import {DebugSee} from './DebugSee';
import {_FunctionReplaceHook} from './_FunctionReplaceHook';
import {MapGet} from "./Map";
import {LockList} from "./LockList";
import {FullCheats} from "./Full";
import {RestraintCustomWear} from "./Restraint";
import {Quest} from "./Quest";
import {FunctionPatchHooker} from "../FunctionPatch/FunctionPatch";


export class CheatsBase extends RestraintCustomWear {

    _FunctionPatchHooker: FunctionPatchHooker;

    setupHook_CheatsBase(windowPtr: Window) {
        this._FunctionPatchHooker.setupHook(windowPtr);
    }

    installAllFunctionPatchHooker() {
        this._FunctionPatchHooker.installAllHooks();
    }

    DebugSee = new DebugSee();
    SaveLoad = new SaveLoad();
    LockList = LockList;


    _FunctionReplaceHook = new _FunctionReplaceHook();

    _MapType: string[] = [];
    _MapBackgroundType: string[] = [];
    NameList_ForceNextMapTypeOnce: string[] = [];
    NameList_ForceNextMapType: string[] = [];

    protected installForceMap() {
        this._MapType = Object.keys(KinkyDungeonMapParams);
        this._MapBackgroundType = this._MapType.map(T => KinkyDungeonMapParams[T].background);
        this._MapType.forEach(T => {
            const Name_ForceNextMapTypeOnce = 'ForceNextMapTypeOnce_' + T + '_' + KinkyDungeonMapParams[T].background;
            (this as any)[Name_ForceNextMapTypeOnce] = () => {
                this._FunctionReplaceHook.InstallFunctionReplaceHookOnce(
                    'KinkyDungeonGetMainPath',
                    () => T,
                );
            };
            const Name_ForceNextMapType = 'ForceNextMapType_' + T + '_' + KinkyDungeonMapParams[T].background;
            (this as any)[Name_ForceNextMapType] = () => {
                this._FunctionReplaceHook.InstallFunctionReplaceHook(
                    'KinkyDungeonGetMainPath',
                    () => T,
                );
            };
            this.NameList_ForceNextMapTypeOnce.push(Name_ForceNextMapTypeOnce);
            this.NameList_ForceNextMapType.push(Name_ForceNextMapType);
        });
    }

    public addGlobalFunctionHook(
        functionName: string,
        hookFunctionBefore?: <Args extends IArguments>(arg: Args) => Args,
        hookFunctionAfter?: <Args extends IArguments, T>(arg: Args, returnValue: T) => T,
    ) {
        this._FunctionPatchHooker.prepareHook({
            originalFunctionName: functionName,
            hookFunctionBefore: hookFunctionBefore,
            hookFunctionAfter: hookFunctionAfter,
        });
    }

    constructor() {
        super();
        this._FunctionPatchHooker = new FunctionPatchHooker();
        this.installRestraint();
        this.installForceMap();
    }
}

class HardMode {
    HardModeEnable = () => {
        KinkyDungeonStatsChoice.set("hardMode", true);
    };
    HardModeDisable = () => {
        KinkyDungeonStatsChoice.delete("hardMode");
    };
}

// https://github.com/tannerntannern/ts-mixer
export class Cheats extends Mixin(CheatsBase, MapGet, HardMode, FullCheats, Quest) {
    setupHook(windowPtr: Window) {
        this.setupHook_CheatsHook(windowPtr);
        this.setupHook_CheatsBase(windowPtr);
    }
}


// // https://github.com/michaelolof/typescript-mix
// interface Cheats extends CheatsBase, MapGet, HardMode, FullCheats {
// }
// class Cheats{
// }
//
// applyMixins(Cheats, [CheatsBase, MapGet, HardMode, FullCheats]);
//
// // https://www.typescriptlang.org/docs/handbook/mixins.html
// function applyMixins(derivedCtor: any, constructors: any[]) {
//     constructors.forEach((baseCtor) => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
//             Object.defineProperty(
//                 derivedCtor.prototype,
//                 name,
//                 Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
//                 Object.create(null)
//             );
//         });
//     });
// }


console.timeEnd("enchanted_restraints Cheats load time");
console.log("=============================enchanted_restraints Cheats.js end=============================");



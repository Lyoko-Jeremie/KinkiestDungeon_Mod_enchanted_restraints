import * as _ from 'lodash';

console.log("=============================enchanted_restraints Cheats.js begin=============================");
console.time("enchanted_restraints Cheats load time");

import {SaveLoad} from './SaveLoad';
import {DebugSee} from './DebugSee';
import {_FunctionReplaceHook} from './_FunctionReplaceHook';
import {MapGet} from "./Map";
import {LockList} from "./LockList";
import {FullCheats} from "./Full";


export class CheatsBase {

    DebugSee = new DebugSee();
    SaveLoad = new SaveLoad();
    LockList = LockList;


    _FunctionReplaceHook = new _FunctionReplaceHook();

    private installForceMap() {
        const names = Object.keys(window.KinkyDungeonMapParams);
        names.forEach(T => {
            (this as any)['ForceNextMapTypeOnce_' + T + '_' + window.KinkyDungeonMapParams[T].background] = () => {
                this._FunctionReplaceHook.InstallFunctionReplaceHookOnce(
                    'KinkyDungeonGetMainPath',
                    () => T,
                );
            };
            (this as any)['ForceNextMapType_' + T + '_' + window.KinkyDungeonMapParams[T].background] = () => {
                this._FunctionReplaceHook.InstallFunctionReplaceHook(
                    'KinkyDungeonGetMainPath',
                    () => T,
                );
            };
        });
    }

    constructor() {
        this.installForceMap();
    }
}

class HardMode {
    HardModeEnable = () => {
        window.KinkyDungeonStatsChoice.set("hardMode", true);
    };
    HardModeDisable = () => {
        window.KinkyDungeonStatsChoice.delete("hardMode");
    };
}

// @ts-ignore
export class Cheats implements CheatsBase, MapGet, HardMode, FullCheats {
    // empty
}

applyMixins(Cheats, [CheatsBase, MapGet, HardMode, FullCheats]);

// https://www.typescriptlang.org/docs/handbook/mixins.html
function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
        });
    });
}


console.timeEnd("enchanted_restraints Cheats load time");
console.log("=============================enchanted_restraints Cheats.js end=============================");



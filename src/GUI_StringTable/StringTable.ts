import {StringTable_CN} from "./CN";
import {StringTable_EN} from "./EN";
import {WearFunctionType, WearsKeys} from "../Cheats/Restraint";

const StringTableKeys = [
    'title',
    'install EnchantedRestraints Mod Section',
    'install_EnchantedRestraintsPatch',
    'isInstalled',

    'ApplyModRestraint Section',
    'ApplyModRestraint',

    'ApplyRestraint Section',
    'RemoveAllRestraint',
    'RemoveAllRestraintDynamic',

    'Keys Section',
    'AddManyKeys',
    'AddManyPotion',
    'AddManyGold',
    'AddDistraction',
    'AddAllRestraints',
    'AddAllOutfit',
    'AddAllConsumables',
    'AddAllWeapon',
    'AddAllKeyTools',
    'RemoveAllKeyTools',

    'Bootstrap Section',
    'BootstrapAllGood',
    'BootstrapSpellChoicesTable',
    'BootstrapSimpleGood',
    'BootstrapAllNegative',

    'Enable Section',
    'EnableAllCheats',
    'DisableAllCheats',
    'EnableFullState',
    'DisableFullState',

    'Choice Section',
    'ChoiceAddCheatChoiceGoodEscape',
    'ChoiceAddCheatChoiceGoodEnhance',
    'ChoiceAddCheatChoiceGoodMid',
    'ChoiceAddCheatChoiceBadMid',
    'ChoiceAddCheatChoiceMid',
    'ChoiceAddCheatChoiceBadNegative',
    'ChoiceAddCheatChoiceBadNoEscape',
    'ChoiceAddCheatChoiceGoodVision',
    'ChoiceAddCheatChoiceBadVision',
    'ChoiceAddCheatChoiceMap',
    'ChoiceAddCheatChoiceNowhere',
    'ChoiceAddCheatChoiceSuperMarket',
    'ChoicePrintNowChoice',
    'NowChoiceList',

    'ChoiceAddOne Section',
    'ChoiceSelect',
    'ChoiceAddOne',

    'ChoicePrint Section',
    'ChoicePrintAllValidChoice',
    'ChoicePrintAllValidChoiceList',

    'DebugSee Section',
    'ShowAllRestraintDynamicName',
    'ShowAllRestraintDynamicNameList',
    'ShowAllRestraint',
    'ShowAllRestraintList',

    'WearRestraints Section',
    'LockSelect',
    'FactionSelect',
    //  TODO

    'OpenChest Section',
    'OpenChest',

    'Map Section',
    'MapKKSsMGet',
    'MapKKSsMGetData',
    'MapKSsMGet',
    'MapKSsMGetData',

    'Map Cheats Section',
    'MapOpenFull',
    'MapOpenNone',
    'SetAllBedAreTrap',
    'SetAllBarrelAreTrap',
    'SetAll_L_AreDisplayStand',
    'SetAll_L_AreCage',
    'ResetAllLibChest',

    'HardMode Section',
    'HardModeEnable',
    'HardModeDisable',

    'SaveLoad Section',
    'GetSaveCode',
    'GetSaveCodeData',
    'CopyGameSaveDataStringToClipboard',
    'LoadGameSaveStringFromClipboard',
] as const;

export type StringTableTypeStringPart = { [key in typeof StringTableKeys[number]]: string; };

export interface StringTableType extends StringTableTypeStringPart {
    isInstalledMask(s: string): string;

    Wear2I18N(s: string): string;

    errorMessage2I18N(s: string): string;

    fallback2I18N(s: string): string | undefined;
}

export function getStringTable(): StringTableType {
    // zh, zh-CN, zh-TW
    if (navigator.language.startsWith('zh')) {
        return StringTable_CN;
    }
    switch (navigator.language) {
        case 'zh-CN':
            return StringTable_CN;
        default:
            return StringTable_EN;
    }
}

export const StringTable: StringTableType = new Proxy({}, {
    get: function (obj, prop: keyof StringTableType) {
        const s = getStringTable();
        return s[prop] || s.fallback2I18N(prop) || prop;
    },
}) as StringTableType;


// =============================================================================================

export type WearStringTableInterface = {
    [K in WearsKeys as `Wear${ /*Capitalize<K>*/ K}`]: string;
};

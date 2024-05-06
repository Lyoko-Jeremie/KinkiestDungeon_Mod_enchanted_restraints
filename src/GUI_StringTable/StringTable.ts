import {StringTable_CN} from "./CN";
import {StringTable_EN} from "./EN";
import {WearFunctionType, WearsKeys} from "../Cheats/Restraint";
import {LockList} from "../Cheats/LockList";

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
    'ForceClearRestraint',

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

    'SpellPoints Section',
    'AddSpellPoints',
    'ZeroSpellPoints',
    'NegativeSpellPoints',

    'Relations Section',
    'FullAllRelations',
    'ZeroAllRelations',
    'NegativeAllRelations',
    'FullAllGoddess',
    'ZeroAllGoddess',
    'NegativeAllGoddess',
    'FullAllReputationState',
    'ClearAllReputationState',
    'NegativeAllReputationState',
    'GoddessRepSelect',
    'AddSelectedGoddessRep',
    'ClearSelectedGoddessRep',
    'NegativeSelectedGoddessRep',
    'PrintNowAllReputationState',
    'PrintNowAllReputationStateList',

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
    'EnableQuickness5',
    'DisableQuickness5',

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
    'ChoiceRemoveOne',
    'ChoiceAddOneFilterInput',
    'ChoiceAddOneFilterSelect',
    'ChoiceFilterAddOne',
    'ChoiceFilterRemoveOne',

    'ChoicePrint Section',
    'ChoicePrintAllValidChoice',
    'ChoicePrintAllValidChoiceList',

    'Spells Section',
    'SpellsPrintAllSpells',
    'AllSpellsList',
    'SpellsPrintNowSpells',
    'NowSpellsList',
    'FullAllSpells',
    'SpellsAddOneSelect',
    'SpellsAddOne',
    'SpellsRemoveOneSelect',
    'SpellsRemoveOne',
    'BaseSpells_DontRemove',

    'DebugSee Section',
    'ShowAllRestraintDynamicName',
    'ShowAllRestraintDynamicNameList',
    'ShowAllRestraint',
    'ShowAllRestraintList',

    'WearRestraints Section',
    'LockSelect',
    'FactionSelect',
    'AllRestraintItemSelect',
    'NowWearRestraintItemSelect',
    'WearTheSelectedRestrain',
    'AllRestraintItemFilterInput',
    'AllRestraintItemFilterSelect',
    'AllRestraintItemFilterWearIt',
    'LockNowWearRestraintItem',
    'UnlockNowWearRestraintItem',
    'RemoveNowWearRestraintItem',
    'JailOutfitSelect',
    'WearJailOutfit',
    //  TODO

    'Quest Section',
    'QuestPrintNowAccept',
    'NowQuestList',
    'ListAllQuest',
    'ListAllQuestHasAccept',
    'QuestAddOneSelect',
    'QuestAddOne',
    'QuestRemoveOne',
    'QuestRemoveAll',
    'UnlockAllQuestLock',

    'OpenChest Section',
    'OpenChest',
    'OpenShadowChest',
    'ReSetAllChests',
    'SetAllChestsToSpecialChestsSelect',
    'SetAllChestsToSpecialChests',

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

    'ForceNextLevelType Section',
    'ForceNextLevelTypeOnce Section',

    'SaveLoad IndexDB Section Demo',
    'CreateAIndexDBSave',
    'ListIndexDBSave',
    'IndexDBSaveSelect',
    'LoadIndexDBSave',
] as const;

export type StringTableTypeStringPart = { [key in typeof StringTableKeys[number]]: string; };

export interface StringTableType extends StringTableTypeStringPart {
    isInstalledMask(s: string): string;

    Wear2I18N(s: string): string;

    KinkyDungeonShrine2I18N(s: string): string;

    KinkyDungeonKinkyDungeonFaction2I18N(s: string): [string, boolean];

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

// =============================================================================================

export function LockList2HumanName(lock?: LockList): string {
    if (lock === undefined || lock === null) {
        if (lock !== undefined) {
            console.error(`LockList2HumanName() unknown lock [${lock}]`);
        }
        return "None";
    } else if (lock === LockList.None) {
        return "None";
    } else {
        const k1 = TextGet(`Kinky${lock}Lock`);
        const k2 = TextGet(`Kinky${lock}LockType`);
        let name = k1 === `Kinky${lock}Lock` ? k2 : k1;
        name = name === `Kinky${lock}LockType` ? lock : name;
        return `${lock}|[${name}]`;
    }
}

export function HumanName2LockList(lockName?: string): LockList {
    if (lockName === LockList.None || lockName === undefined || lockName === null) {
        return LockList.None;
    }
    const lock = lockName.split('|[')[0];
    if (Object.keys(LockList).includes(lock)) {
        return lock as LockList;
    } else {
        console.error(`HumanName2LockList() unknown lockName [${lockName}]`);
        return LockList.None;
    }
}

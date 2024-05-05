import {StringTableType} from "./StringTable";

export const StringTable_EN: StringTableType = {
    title: 'KinkiestDungeon enchanted_restraints Mod',
    'install EnchantedRestraints Mod Section': 'install EnchantedRestraints Mod Section',
    install_EnchantedRestraintsPatch: 'install_EnchantedRestraintsPatch',
    isInstalled: 'isInstalled',
    isInstalledMask(s: string): string {
        return `isInstalled:${s}`
    },
    'ApplyModRestraint Section': 'ApplyModRestraint Section',
    ApplyModRestraint: 'ApplyModRestraint',
    'ApplyRestraint Section': 'ApplyRestraint Section',
    RemoveAllRestraint: 'RemoveAllRestraint',
    RemoveAllRestraintDynamic: 'RemoveAllRestraintDynamic',
    ForceClearRestraint: 'ForceClearRestraint',
    'Keys Section': 'Keys Section',
    AddManyKeys: 'AddManyKeys',
    AddManyPotion: 'AddManyPotion',
    AddManyGold: 'AddManyGold',
    AddDistraction: 'AddDistraction',
    AddAllRestraints: 'AddAllRestraints',
    AddAllOutfit: 'AddAllOutfit',
    AddAllConsumables: 'AddAllConsumables',
    AddAllWeapon: 'AddAllWeapon',
    AddAllKeyTools: 'AddAllKeyTools',
    RemoveAllKeyTools: 'RemoveAllKeyTools',
    'SpellPoints Section': 'SpellPoints Section',
    AddSpellPoints: 'SpellPoints',
    ZeroSpellPoints: 'ZeroSpellPoints',
    NegativeSpellPoints: 'SpellPoints',
    'Relations Section': 'Relations Section',
    FullAllRelations: 'FullAllRelations',
    ZeroAllRelations: 'ZeroAllRelations',
    NegativeAllRelations: 'NegativeAllRelations',
    FullAllGoddess: 'AllGoddessRelations',
    ZeroAllGoddess: 'ZeroAllGoddessRelations',
    NegativeAllGoddess: 'AllGoddessRelations',
    FullAllReputationState: 'AllReputationState',
    ClearAllReputationState: 'ClearAllReputationState',
    NegativeAllReputationState: 'AllReputationState',
    GoddessRepSelect: 'SelectGoddessRep',
    AddSelectedGoddessRep: 'SelectedGoddessRep',
    ClearSelectedGoddessRep: 'ClearSelectedGoddessRep',
    NegativeSelectedGoddessRep: 'SelectedGoddessRep',
    PrintNowAllReputationState: 'PrintNowAllReputationState',
    PrintNowAllReputationStateList: 'PrintNowAllReputationStateList',
    'Bootstrap Section': 'Bootstrap Section',
    BootstrapAllGood: 'BootstrapAllGood',
    BootstrapSpellChoicesTable: 'BootstrapSpellChoicesTable',
    BootstrapSimpleGood: 'BootstrapSimpleGood',
    BootstrapAllNegative: 'BootstrapAllNegative',
    'Enable Section': 'Enable Section',
    EnableAllCheats: 'EnableAllCheats',
    DisableAllCheats: 'DisableAllCheats',
    EnableFullState: 'EnableFullState',
    DisableFullState: 'DisableFullState',
    EnableQuickness5: 'EnableQuickness5',
    DisableQuickness5: 'DisableQuickness5',
    'Choice Section': 'Choice Section',
    ChoiceAddCheatChoiceGoodEscape: 'ChoiceAddCheatChoiceGoodEscape',
    ChoiceAddCheatChoiceGoodEnhance: 'ChoiceAddCheatChoiceGoodEnhance',
    ChoiceAddCheatChoiceGoodMid: 'ChoiceAddCheatChoiceGoodMid',
    ChoiceAddCheatChoiceBadMid: 'ChoiceAddCheatChoiceBadMid',
    ChoiceAddCheatChoiceMid: 'ChoiceAddCheatChoiceMid',
    ChoiceAddCheatChoiceBadNegative: 'ChoiceAddCheatChoiceBadNegative',
    ChoiceAddCheatChoiceBadNoEscape: 'ChoiceAddCheatChoiceBadNoEscape',
    ChoiceAddCheatChoiceGoodVision: 'ChoiceAddCheatChoiceGoodVision',
    ChoiceAddCheatChoiceBadVision: 'ChoiceAddCheatChoiceBadVision',
    ChoiceAddCheatChoiceMap: 'ChoiceAddCheatChoiceMap',
    ChoiceAddCheatChoiceNowhere: 'ChoiceAddCheatChoiceNowhere',
    ChoiceAddCheatChoiceSuperMarket: 'ChoiceAddCheatChoiceSuperMarket',
    ChoicePrintNowChoice: 'ChoicePrintNowChoice',
    NowChoiceList: 'NowChoiceList',
    'ChoiceAddOne Section': 'ChoiceAddOne Section',
    ChoiceSelect: 'ChoiceSelect',
    ChoiceAddOne: 'ChoiceAddOne',
    ChoiceRemoveOne: 'ChoiceRemoveOne',
    ChoiceAddOneFilterInput: 'SearchChoice',
    ChoiceAddOneFilterSelect: 'ChoiceAddOneSelect',
    ChoiceFilterAddOne: 'ChoiceFilterAddOne',
    ChoiceFilterRemoveOne: 'ChoiceFilterRemoveOne',
    'ChoicePrint Section': 'ChoicePrint Section',
    ChoicePrintAllValidChoice: 'ChoicePrintAllValidChoice',
    ChoicePrintAllValidChoiceList: 'ChoicePrintAllValidChoiceList',
    'Spells Section': 'Spells Section',
    SpellsPrintAllSpells: 'SpellsPrintAllSpells',
    AllSpellsList: 'AllSpellsList',
    SpellsPrintNowSpells: 'SpellsPrintNowSpells',
    NowSpellsList: 'NowSpellsList',
    FullAllSpells: 'FullAllSpells',
    SpellsAddOneSelect: 'SpellsAddOneSelect',
    SpellsAddOne: 'SpellsAddOne',
    SpellsRemoveOneSelect: 'SpellsRemoveOneSelect',
    SpellsRemoveOne: 'SpellsRemoveOne',
    BaseSpells_DontRemove: 'BaseSpells,DontRemove!!!',
    'DebugSee Section': 'DebugSee Section',
    ShowAllRestraintDynamicName: 'ShowAllRestraintDynamicName',
    ShowAllRestraintDynamicNameList: 'ShowAllRestraintDynamicNameList',
    ShowAllRestraint: 'ShowAllRestraint',
    ShowAllRestraintList: 'ShowAllRestraintList',
    'WearRestraints Section': 'WearRestraints Section',
    LockSelect: 'LockSelect',
    FactionSelect: 'FactionSelect',
    AllRestraintItemSelect: 'AllRestraintItemSelect',
    NowWearRestraintItemSelect: 'NowWearRestraintItemSelect',
    WearTheSelectedRestrain: 'WearTheSelectedRestrain',
    AllRestraintItemFilterInput: 'SearchAllRestraintItem',
    AllRestraintItemFilterSelect: 'AllRestraintItemSelect',
    AllRestraintItemFilterWearIt: 'WearIt',
    LockNowWearRestraintItem: 'LockNowWearRestraintItem',
    UnlockNowWearRestraintItem: 'UnlockNowWearRestraintItem',
    RemoveNowWearRestraintItem: 'RemoveNowWearRestraintItem',
    JailOutfitSelect: 'JailOutfitSelect',
    WearJailOutfit: 'WearJailOutfit',
    //  TODO
    'Quest Section': 'Quest Section',
    QuestPrintNowAccept: 'QuestPrintNowSpells',
    NowQuestList: 'NowQuestList',
    ListAllQuest: 'ListAllQuest',
    ListAllQuestHasAccept: 'ListAllQuestHasAccept',
    QuestAddOneSelect: 'QuestAddOneSelect',
    QuestAddOne: 'QuestAddOne',
    QuestRemoveOne: 'QuestRemoveOne',
    QuestRemoveAll: 'QuestRemoveAll',
    UnlockAllQuestLock: 'UnlockAllQuestLock',
    'OpenChest Section': 'OpenChest Section',
    OpenChest: 'OpenChest',
    OpenShadowChest: 'OpenShadowChest',
    ReSetAllChests: 'ReSetAllChests',
    SetAllChestsToSpecialChestsSelect: 'SetAllChestsToSpecialChestsSelect',
    SetAllChestsToSpecialChests: 'SetAllChestsToSpecialChests',
    'Map Section': 'Map Section',
    MapKKSsMGet: 'MapKKSsMGet',
    MapKKSsMGetData: 'MapKKSsMGetData',
    MapKSsMGet: 'MapKSsMGet',
    MapKSsMGetData: 'MapKSsMGetData',
    'Map Cheats Section': 'Map Cheats Section',
    MapOpenFull: 'MapOpenFull',
    MapOpenNone: 'MapOpenNone',
    SetAllBedAreTrap: 'SetAllBedAreTrap',
    SetAllBarrelAreTrap: 'SetAllBarrelAreTrap',
    SetAll_L_AreDisplayStand: 'SetAll_L_AreDisplayStand',
    SetAll_L_AreCage: 'SetAll_L_AreCage',
    ResetAllLibChest: 'ResetAllLibChest',
    'HardMode Section': 'HardMode Section',
    HardModeEnable: 'HardModeEnable',
    HardModeDisable: 'HardModeDisable',
    'SaveLoad Section': 'SaveLoad Section',
    GetSaveCode: 'GetSaveCode',
    GetSaveCodeData: 'GetSaveCodeData',
    CopyGameSaveDataStringToClipboard: 'CopyGameSaveDataStringToClipboard',
    LoadGameSaveStringFromClipboard: 'LoadGameSaveStringFromClipboard',
    'ForceNextLevelType Section': 'ForceNextLevelType Section',
    'ForceNextLevelTypeOnce Section': 'ForceNextLevelTypeOnce Section',
    'SaveLoad IndexDB Section Demo': 'SaveLoad IndexDB Section Demo',
    CreateAIndexDBSave: 'CreateAIndexDBSave',
    ListIndexDBSave: 'ListIndexDBSave',
    IndexDBSaveSelect: 'IndexDBSaveSelect',
    LoadIndexDBSave: 'LoadIndexDBSave',

    errorMessage2I18N(s: string): string {
        return s;
    },
    fallback2I18N(s: string): string | undefined {
        return undefined;
    },
    Wear2I18N(s: string): string {
        return s;
    },
    KinkyDungeonShrine2I18N(s: string): string {
        return TextGet('KinkyDungeonShrine' + s);
    },
    KinkyDungeonKinkyDungeonFaction2I18N(s: string): [string, boolean] {
        const k = 'KinkyDungeonFaction' + s;
        const r = TextGet(k);
        if (k === r) {
            return [k, false];
        }
        return [r, true];
    },
};

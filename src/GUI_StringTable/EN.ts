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
    'ChoicePrint Section': 'ChoicePrint Section',
    ChoicePrintAllValidChoice: 'ChoicePrintAllValidChoice',
    ChoicePrintAllValidChoiceList: 'ChoicePrintAllValidChoiceList',
    'DebugSee Section': 'DebugSee Section',
    ShowAllRestraintDynamicName: 'ShowAllRestraintDynamicName',
    ShowAllRestraintDynamicNameList: 'ShowAllRestraintDynamicNameList',
    ShowAllRestraint: 'ShowAllRestraint',
    ShowAllRestraintList: 'ShowAllRestraintList',
    'WearRestraints Section': 'WearRestraints Section',
    LockSelect: 'LockSelect',
    FactionSelect: 'FactionSelect',
    //  TODO
    'OpenChest Section': 'OpenChest Section',
    OpenChest: 'OpenChest',
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

    errorMessage2I18N(s: string): string {
        return s;
    },
    fallback2I18N(s: string): string | undefined {
        return undefined;
    }
};

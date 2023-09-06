import {GM_config} from './gm_config';
import {EnchantedRestraintsPatch} from '../initMod';

unsafeWindow.KinkyDungeonMod_EnchantedRestraints = window.KinkyDungeonMod_EnchantedRestraints;
unsafeWindow.Mod_EnchantedRestraints = window.Mod_EnchantedRestraints;

// @ts-ignore
unsafeWindow.KDOptOut = true;

(async () => {
    // font-family: "Consolas",monospace;
    let gmc = new GM_config(
        {
            'id': 'MyConfig', // The id used for this instance of GM_config
            'title': 'Script Settings', // Panel Title
            css: '#MyConfig textarea{font-family: "Consolas",monospace !important;width:80%;min-height:20em;}',
            'fields': // Fields object
                {
                    'Name': // This is the id of the field
                        {
                            'label': 'Name', // Appears next to field
                            'type': 'text', // Makes this setting a text field
                            'default': 'Sizzle McTwizzle' // Default value if user doesn't change it
                        },
                    'install_EnchantedRestraintsPatch': {
                        label: 'install EnchantedRestraintsPatch',
                        type: 'button',
                        click() {
                            // @ts-ignore
                            unsafeWindow.KDOptOut = true;
                            EnchantedRestraintsPatch();
                            unsafeWindow.KinkyDungeonMod_EnchantedRestraints.Cheats.setupHook(unsafeWindow);
                        },
                    },
                    'ApplyModRestraint': {
                        label: 'ApplyModRestraint',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.ApplyModRestraint();
                        },
                    },
                    'RemoveAllRestraint': {
                        label: 'RemoveAllRestraint',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveAllRestraint();
                        },
                    },
                    'RemoveAllRestraintDynamic': {
                        label: 'RemoveAllRestraintDynamic',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveAllRestraintDynamic();
                        },
                    },
                    'AddManyKeys': {
                        label: 'AddManyKeys',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyKeys();
                        },
                    },
                    'AddManyPotion': {
                        label: 'AddManyPotion',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyPotion();
                        },
                    },
                    'AddManyGold': {
                        label: 'AddManyGold',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyGold();
                        },
                    },
                    'AddDistraction': {
                        label: 'AddDistraction',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.AddDistraction();
                        },
                    },
                    'AddAllRestraints': {
                        label: 'AddAllRestraints',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllRestraints();
                        },
                    },
                    'AddAllOutfit': {
                        label: 'AddAllOutfit',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllOutfit();
                        },
                    },
                    'AddAllConsumables': {
                        label: 'AddAllConsumables',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllConsumables();
                        },
                    },
                    'AddAllWeapon': {
                        label: 'AddAllWeapon',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllWeapon();
                        },
                    },
                    'BootstrapAllGood': {
                        label: 'BootstrapAllGood',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapAllGood();
                        },
                    },
                    'BootstrapSpellChoicesTable': {
                        label: 'BootstrapSpellChoicesTable',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapSpellChoicesTable();
                        },
                    },
                    'BootstrapSimpleGood': {
                        label: 'BootstrapSimpleGood',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapSimpleGood();
                        },
                    },
                    'BootstrapAllNegative': {
                        label: 'BootstrapAllNegative',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapAllNegative();
                        },
                    },
                    'EnableAllCheats': {
                        label: 'EnableAllCheats',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.EnableAllCheats();
                        },
                    },
                    'DisableAllCheats': {
                        label: 'DisableAllCheats',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.DisableAllCheats();
                        },
                    },
                    'EnableFullState': {
                        label: 'EnableFullState',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.EnableFullState();
                        },
                    },
                    'DisableFullState': {
                        label: 'DisableFullState',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.DisableFullState();
                        },
                    },
                    'ChoiceAddCheatChoiceGoodEscape': {
                        label: 'ChoiceAddCheatChoiceGoodEscape',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodEscape();
                        },
                    },
                    'ChoiceAddCheatChoiceGoodEnhance': {
                        label: 'ChoiceAddCheatChoiceGoodEnhance',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodEnhance();
                        },
                    },
                    'ChoiceAddCheatChoiceMid': {
                        label: 'ChoiceAddCheatChoiceMid',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceMid();
                        },
                    },
                    'ChoiceAddCheatChoiceBadNegative': {
                        label: 'ChoiceAddCheatChoiceBadNegative',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadNegative();
                        },
                    },
                    'ChoiceAddCheatChoiceBadNoEscape': {
                        label: 'ChoiceAddCheatChoiceBadNoEscape',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadNoEscape();
                        },
                    },
                    'ChoiceAddCheatChoiceMap': {
                        label: 'ChoiceAddCheatChoiceMap',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceMap();
                        },
                    },
                    'ChoiceAddCheatChoiceNowhere': {
                        label: 'ChoiceAddCheatChoiceNowhere',
                        type: 'button',
                        click() {
                            window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceNowhere();
                        },
                    },
                    'ChoicePrintNowChoice': {
                        label: 'ChoicePrintNowChoice',
                        type: 'button',
                        click() {
                            gmc.fields['NowChoiceList'].value =
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoicePrintNowChoice();
                            gmc.fields['NowChoiceList'].reload();
                        },
                    },
                    'NowChoiceList': {
                        label: 'NowChoiceList',
                        type: 'textarea',
                        default: '',
                    },
                    'ChoicePrintAllValidChoice': {
                        label: 'ChoicePrintAllValidChoice',
                        type: 'button',
                        click() {
                            gmc.fields['ChoicePrintAllValidChoiceList'].value =
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoicePrintAllValidChoice();
                            gmc.fields['ChoicePrintAllValidChoiceList'].reload();
                        },
                    },
                    'ChoicePrintAllValidChoiceList': {
                        label: 'ChoicePrintAllValidChoiceList',
                        type: 'textarea',
                        default: '',
                    },
                    'ShowAllRestraintDynamicName': {
                        label: 'ShowAllRestraintDynamicName',
                        type: 'button',
                        click() {
                            gmc.fields['ShowAllRestraintDynamicNameList'].value =
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.DebugSee.ShowAllRestraintDynamicName()
                                    .join('\n');
                            gmc.fields['ShowAllRestraintDynamicNameList'].reload();
                        },
                    },
                    'ShowAllRestraintDynamicNameList': {
                        label: 'ShowAllRestraintDynamicNameList',
                        type: 'textarea',
                        default: '',
                    },
                    'MapKKSsMGet': {
                        label: 'MapKKSsMGet',
                        type: 'button',
                        click() {
                            gmc.fields['MapKKSsMGetData'].value =
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.MapKKSsMGet();
                            gmc.fields['MapKKSsMGetData'].reload();
                        },
                    },
                    'MapKKSsMGetData': {
                        label: 'MapKKSsMGetData',
                        type: 'textarea',
                        default: '',
                    },
                    'MapKSsMGet': {
                        label: 'MapKSsMGet',
                        type: 'button',
                        click() {
                            gmc.fields['MapKSsMGetData'].value =
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.MapKSsMGet();
                            gmc.fields['MapKSsMGetData'].reload();
                        },
                    },
                    'MapKSsMGetData': {
                        label: 'MapKSsMGetData',
                        type: 'textarea',
                        default: '',
                    },
                },
            events: {
                save(values) {
                    // All the values that aren't saved are passed to this function
                    // for (i in values) alert(values[i]);
                },
                open(doc) {
                    doc.addEventListener('keydown', (event) => {
                        console.log('keydown', event);
                        if (event.altKey && (event.key === 'Q' || event.key === 'q')) {
                            if (gmc.isOpen) {
                                gmc.close();
                            } else {
                                gmc.open();
                            }
                        }
                    });
                },
            },
        });
    window.addEventListener('keydown', (event) => {
        console.log('keydown', event);
        if (event.altKey && (event.key === 'Q' || event.key === 'q')) {
            if (gmc.isOpen) {
                gmc.close();
            } else {
                gmc.open();
            }
        }
    });
})().catch(E => {
    console.error(E);
});

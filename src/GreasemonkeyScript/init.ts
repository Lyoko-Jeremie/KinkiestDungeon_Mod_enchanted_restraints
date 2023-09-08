import {GM_config, BootstrapBtnType, InitOptionsNoCustom, GM_configStruct} from '../GM_config_TS/gm_config';
import {EnchantedRestraintsPatch, isInit} from '../initMod';
// https://stackoverflow.com/questions/42631645/webpack-import-typescript-module-both-normally-and-as-raw-string
import inlineGMCss from './inlineText/GM.css?inlineText';
import inlineBootstrap from 'bootstrap/dist/css/bootstrap.css?inlineText';
import {WearsList} from "../Cheats/Restraint";
import {assign} from "lodash";
import {LockList} from "../Cheats/LockList";

unsafeWindow.KinkyDungeonMod_EnchantedRestraints = window.KinkyDungeonMod_EnchantedRestraints;
unsafeWindow.Mod_EnchantedRestraints = window.Mod_EnchantedRestraints;

KDOptOut = true;

// avoid same Math.random
let rIdP = 0;

// get a unique string as id
function rId() {
    return '' + (++rIdP) + Math.random();
}

const btnType: BootstrapBtnType = 'secondary';

(async () => {
    const do_install_EnchantedRestraintsPatch = () => {
        KDOptOut = true;
        EnchantedRestraintsPatch();
        unsafeWindow.KinkyDungeonMod_EnchantedRestraints.Cheats.setupHook(unsafeWindow);
    };
    const gmcCreator = () => {
        return new GM_config(
            {
                xgmExtendInfo: {
                    xgmExtendMode: 'bootstrap',
                    bootstrap: {
                        smallBtn: true,
                    },
                    buttonConfig: {
                        noCancel: true,
                        noSave: true,
                        noReset: true,
                    },
                },
                'id': 'MyConfig', // The id used for this instance of GM_config
                'title': 'KinkiestDungeon enchanted_restraints Mod', // Panel Title
                css: inlineGMCss + '\n' + inlineBootstrap,
                'fields': // Fields object
                    {
                        [rId()]: {
                            section: GM_config.create('install EnchantedRestraints Mod'),
                            type: 'br',
                        },
                        'install_EnchantedRestraintsPatch': {
                            label: 'press to install EnchantedRestraintsPatch Mod',
                            type: 'button',
                            click() {
                                do_install_EnchantedRestraintsPatch();
                                gmc!.fields['isInstalled'].settings.label = `isInstalled:${isInit()}`;
                                gmc!.fields['isInstalled'].reload();
                            },
                        },
                        'isInstalled': {
                            label: `isInstalled:${isInit()}`,
                            type: 'label',
                        },
                        [rId()]: {
                            section: GM_config.create('ApplyModRestraint Section'),
                            type: 'br',
                        },
                        'ApplyModRestraint': {
                            label: 'ApplyModRestraint',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.ApplyModRestraint();
                            },
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        [rId()]: {
                            section: GM_config.create('ApplyModRestraint Section'),
                            type: 'br',
                        },
                        'RemoveAllRestraint': {
                            label: 'RemoveAllRestraint',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveAllRestraint();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'RemoveAllRestraintDynamic': {
                            label: 'RemoveAllRestraintDynamic',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveAllRestraintDynamic();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        [rId()]: {
                            section: GM_config.create('Keys Section'),
                            type: 'br',
                        },
                        'AddManyKeys': {
                            label: 'AddManyKeys',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyKeys();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'AddManyPotion': {
                            label: 'AddManyPotion',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyPotion();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'AddManyGold': {
                            label: 'AddManyGold',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyGold();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'AddDistraction': {
                            label: 'AddDistraction',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.AddDistraction();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'AddAllRestraints': {
                            label: 'AddAllRestraints',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllRestraints();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'AddAllOutfit': {
                            label: 'AddAllOutfit',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllOutfit();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'AddAllConsumables': {
                            label: 'AddAllConsumables',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllConsumables();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'AddAllWeapon': {
                            label: 'AddAllWeapon',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllWeapon();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        [rId()]: {
                            section: GM_config.create('Bootstrap Section'),
                            type: 'br',
                        },
                        'BootstrapAllGood': {
                            label: 'BootstrapAllGood',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapAllGood();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'BootstrapSpellChoicesTable': {
                            label: 'BootstrapSpellChoicesTable',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapSpellChoicesTable();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'BootstrapSimpleGood': {
                            label: 'BootstrapSimpleGood',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapSimpleGood();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'BootstrapAllNegative': {
                            label: 'BootstrapAllNegative',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapAllNegative();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        [rId()]: {
                            section: GM_config.create('Enable Section'),
                            type: 'br',
                        },
                        'EnableAllCheats': {
                            label: 'EnableAllCheats',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.EnableAllCheats();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'DisableAllCheats': {
                            label: 'DisableAllCheats',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.DisableAllCheats();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'EnableFullState': {
                            label: 'EnableFullState',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.EnableFullState();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'DisableFullState': {
                            label: 'DisableFullState',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.DisableFullState();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        [rId()]: {
                            section: GM_config.create('Choice Section'),
                            type: 'br',
                        },
                        'ChoiceAddCheatChoiceGoodEscape': {
                            label: 'ChoiceAddCheatChoiceGoodEscape',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodEscape();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'ChoiceAddCheatChoiceGoodEnhance': {
                            label: 'ChoiceAddCheatChoiceGoodEnhance',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodEnhance();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'ChoiceAddCheatChoiceMid': {
                            label: 'ChoiceAddCheatChoiceMid',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceMid();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'ChoiceAddCheatChoiceBadNegative': {
                            label: 'ChoiceAddCheatChoiceBadNegative',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadNegative();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'ChoiceAddCheatChoiceBadNoEscape': {
                            label: 'ChoiceAddCheatChoiceBadNoEscape',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadNoEscape();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'ChoiceAddCheatChoiceMap': {
                            label: 'ChoiceAddCheatChoiceMap',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceMap();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'ChoiceAddCheatChoiceNowhere': {
                            label: 'ChoiceAddCheatChoiceNowhere',
                            type: 'button',
                            click() {
                                window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceNowhere();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        [rId()]: {
                            type: 'br',
                            cssStyleText: 'margin-top: 0.5em;',
                        },
                        'ChoicePrintNowChoice': {
                            label: 'ChoicePrintNowChoice',
                            type: 'button',
                            click() {
                                gmc!.fields['NowChoiceList'].value =
                                    window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoicePrintNowChoice();
                                gmc!.fields['NowChoiceList'].reload();
                            },
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'NowChoiceList': {
                            label: 'NowChoiceList',
                            type: 'textarea',
                            default: '',
                        },
                        [rId()]: {
                            section: GM_config.create('ChoiceAddOne Section'),
                            type: 'br',
                        },
                        'ChoiceAddOneSelect': {
                            label: 'ChoiceSelect',
                            type: 'select',
                            value: '',
                            options: window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData()
                                .map(T => `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}`),
                            cssClassName: 'd-inline',
                        },
                        'ChoiceAddOne': {
                            label: 'ChoiceAddOne',
                            type: 'button',
                            click() {
                                const c = gmc!.fields['ChoiceAddOneSelect'].value;
                                if (c) {
                                    const N = window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData().find(T => {
                                        return `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}` === c;
                                    });
                                    if (N) {
                                        window.KinkyDungeonMod_EnchantedRestraints.Cheats._AddCheatChoice(N.keyName);
                                    }
                                }
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        [rId()]: {
                            section: GM_config.create('ChoicePrint Section'),
                            type: 'br',
                        },
                        'ChoicePrintAllValidChoice': {
                            label: 'ChoicePrintAllValidChoice',
                            type: 'button',
                            click() {
                                gmc!.fields['ChoicePrintAllValidChoiceList'].value =
                                    window.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoicePrintAllValidChoice();
                                gmc!.fields['ChoicePrintAllValidChoiceList'].reload();
                            },
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'ChoicePrintAllValidChoiceList': {
                            label: 'ChoicePrintAllValidChoiceList',
                            type: 'textarea',
                            default: '',
                        },
                        [rId()]: {
                            section: GM_config.create('DebugSee Section'),
                            type: 'br',
                        },
                        'ShowAllRestraintDynamicName': {
                            label: 'ShowAllRestraintDynamicName',
                            type: 'button',
                            click() {
                                gmc!.fields['ShowAllRestraintDynamicNameList'].value =
                                    window.KinkyDungeonMod_EnchantedRestraints.Cheats.DebugSee.ShowAllRestraintDynamicName()
                                        .join('\n');
                                gmc!.fields['ShowAllRestraintDynamicNameList'].reload();
                            },
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'ShowAllRestraintDynamicNameList': {
                            label: 'ShowAllRestraintDynamicNameList',
                            type: 'textarea',
                            default: '',
                        },
                        'ShowAllRestraint': {
                            label: 'ShowAllRestraint',
                            type: 'button',
                            click() {
                                gmc!.fields['ShowAllRestraintList'].value =
                                    JSON.stringify(
                                        window.KinkyDungeonMod_EnchantedRestraints.Cheats.DebugSee.ShowAllRestraint(),
                                        undefined,
                                        2
                                    );
                                gmc!.fields['ShowAllRestraintList'].reload();
                            },
                            xgmExtendField: {bootstrap: {btnType: btnType}},
                        },
                        'ShowAllRestraintList': {
                            label: 'ShowAllRestraintList',
                            type: 'textarea',
                            default: '',
                        },
                        [rId()]: {
                            section: GM_config.create('WearRestraints Section'),
                            type: 'br',
                        },
                        'LockSelect': {
                            label: 'LockSelect',
                            type: 'select',
                            value: LockList.Purple,
                            options: Object.values(LockList),
                            cssClassName: 'd-inline',
                            cssStyleText: 'margin-right: 0.25em;',
                        },
                        'FactionSelect': {
                            label: 'FactionSelect',
                            type: 'select',
                            value: 'None',
                            options: ['None'].concat(Object.keys(window.KinkyDungeonMod_EnchantedRestraints.Cheats.kinkyDungeonFactionColors)),
                            cssClassName: 'd-inline',
                            cssStyleText: 'margin-right: 0.25em;',
                        },
                        [rId()]: {
                            type: 'br',
                        },
                        ...Object.keys(WearsList).reduce<InitOptionsNoCustom['fields']>((acc, WK) => {
                            const o: InitOptionsNoCustom['fields'] = {};
                            o['Wear' + WK] = {
                                label: 'Wear' + WK,
                                type: 'button',
                                click() {
                                    const faction = gmc!.fields['FactionSelect'].value;
                                    (window.KinkyDungeonMod_EnchantedRestraints.Cheats as any)['Wear' + WK](
                                        gmc!.fields['LockSelect'].value,
                                        faction === 'None' ? undefined : faction,
                                    );
                                },
                                cssClassName: 'd-inline',
                                xgmExtendField: {bootstrap: {btnType: btnType}},
                            };
                            return assign<InitOptionsNoCustom['fields'], InitOptionsNoCustom['fields']>(acc, o);
                        }, {} as InitOptionsNoCustom['fields']),
                        // 'WearVinePlant': {
                        //     label: 'WearVinePlant',
                        //     type: 'button',
                        //     click() {
                        //         window.KinkyDungeonMod_EnchantedRestraints.Cheats.WearVinePlant();
                        //     },
                        //     cssClassName: 'd-inline',
                        //     xgmExtendField: {bootstrap: {btnType: btnType}},
                        // },
                        [rId()]: {
                            section: GM_config.create('Map Section'),
                            type: 'br',
                        },
                        'MapKKSsMGet': {
                            label: 'MapKKSsMGet',
                            type: 'button',
                            click() {
                                gmc!.fields['MapKKSsMGetData'].value =
                                    window.KinkyDungeonMod_EnchantedRestraints.Cheats.MapKKSsMGet();
                                gmc!.fields['MapKKSsMGetData'].reload();
                            },
                            xgmExtendField: {bootstrap: {btnType: btnType}},
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
                                gmc!.fields['MapKSsMGetData'].value =
                                    window.KinkyDungeonMod_EnchantedRestraints.Cheats.MapKSsMGet();
                                gmc!.fields['MapKSsMGetData'].reload();
                            },
                            xgmExtendField: {bootstrap: {btnType: btnType}},
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
                                if (gmc && gmc.isOpen) {
                                    gmc.close();
                                } else {
                                    gmc = gmcCreator();
                                    KDOptOut = true;
                                    gmc.open();
                                }
                            }
                        });
                    },
                },
            });
    }
    let gmc: undefined | GM_configStruct = undefined;
    window.addEventListener('keydown', (event) => {
        console.log('keydown', event);
        if (event.altKey && (event.key === 'Q' || event.key === 'q')) {
            if (gmc && gmc.isOpen) {
                gmc.close();
            } else {
                gmc = gmcCreator();
                KDOptOut = true;
                gmc.open();
            }
        }
    });
    if (true) {
        const startBanner = document.createElement('div');
        startBanner.id = 'startBanner';
        startBanner.innerText = 'KinkiestDungeon enchanted_restraints Mod';
        startBanner.style.cssText = 'position: fixed;right: 1px;top: 1px;' +
            'font-size: 1em;z-index: 1001;user-select: none;' +
            'border: gray dashed 2px;color: gray;padding: .25em;';
        startBanner.addEventListener('click', () => {
            if (gmc && gmc.isOpen) {
                gmc.close();
            } else {
                gmc = gmcCreator();
                KDOptOut = true;
                gmc.open();
            }
        });
        document.body.appendChild(startBanner);
    }
    const waitKDLoadingFinished = () => {
        //@ts-ignore
        if (!KDLoadingFinished) {
            setTimeout(waitKDLoadingFinished, 100);
            return;
        }
        do_install_EnchantedRestraintsPatch();
        console.log('waitKDLoadingFinished ok');
    };
    setTimeout(waitKDLoadingFinished, 100);
})().catch(E => {
    console.error(E);
});

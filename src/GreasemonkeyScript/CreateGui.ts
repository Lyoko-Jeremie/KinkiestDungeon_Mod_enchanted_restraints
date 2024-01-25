import {BootstrapBtnType, GM_config, GM_configStruct, InitOptionsNoCustom} from '../GM_config_TS/gm_config';
import {EnchantedRestraintsPatch, isInit} from '../initMod';
// https://stackoverflow.com/questions/42631645/webpack-import-typescript-module-both-normally-and-as-raw-string
import inlineGMCss from './inlineText/GM.css?inlineText';
import inlineBootstrap from 'bootstrap/dist/css/bootstrap.css?inlineText';
import {KinkyDungeonFactionColors_Keys, Restraint, WearMethodsInterfaceKey, WearsList} from "../Cheats/Restraint";
import {assign} from "lodash";
import {LockList} from "../Cheats/LockList";
import {PatchSpell} from "../Cheats/PatchSpell";

KDOptOut = true;

export class CreateGui {

    // avoid same Math.random
    rIdP = 0;

    // get a unique string as id
    rId() {
        return '' + (++this.rIdP) + Math.random();
    }

    constructor(
        public winRef: Window
    ) {
        setTimeout(this.waitKDLoadingFinished, 100);
    }

    patchSpell = new PatchSpell();

    do_install_EnchantedRestraintsPatch = () => {
        KDOptOut = true;
        EnchantedRestraintsPatch();
        this.patchSpell.PatchAllSpell();
        this.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.setupHook(this.winRef);
    };
    btnType: BootstrapBtnType = 'secondary';
    gmc: undefined | GM_configStruct = undefined;
    initMod = () => {
        const thisRef = this;
        thisRef.winRef.addEventListener('keydown', (event) => {
            console.log('keydown', event);
            if (event.altKey && (event.key === 'Q' || event.key === 'q')) {
                if (thisRef.gmc && thisRef.gmc.isOpen) {
                    thisRef.gmc.close();
                } else {
                    thisRef.gmc = thisRef.gmcCreator();
                    KDOptOut = true;
                    thisRef.gmc.open();
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
                if (thisRef.gmc && thisRef.gmc.isOpen) {
                    thisRef.gmc.close();
                } else {
                    thisRef.gmc = thisRef.gmcCreator();
                    KDOptOut = true;
                    thisRef.gmc.open();
                }
            });
            document.body.appendChild(startBanner);
        }
    };
    waitInitCounter = 0;
    waitKDLoadingFinished = () => {
        if (this.waitInitCounter > 100) {
            // don't wait it
            console.log('[KinkiestDungeon enchanted_restraints Mod] (waitInitCounter > 100) dont wait it');
            return;
        }
        //@ts-ignore
        if (!KDLoadingFinished) {
            ++this.waitInitCounter;
            setTimeout(this.waitKDLoadingFinished, 500);
            return;
        }
        this.initMod();
        this.do_install_EnchantedRestraintsPatch();
        console.log('[KinkiestDungeon enchanted_restraints Mod] waitKDLoadingFinished ok');
    };
    gmcCreator = () => {
        const thisRef = this;
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
                        [thisRef.rId()]: {
                            section: GM_config.create('install EnchantedRestraints Mod'),
                            type: 'br',
                        },
                        'install_EnchantedRestraintsPatch': {
                            label: 'press to install EnchantedRestraintsPatch Mod',
                            type: 'button',
                            click() {
                                thisRef.do_install_EnchantedRestraintsPatch();
                                thisRef.gmc!.fields['isInstalled'].settings.label = `isInstalled:${isInit()}`;
                                thisRef.gmc!.fields['isInstalled'].reload();
                            },
                        },
                        'isInstalled': {
                            label: `isInstalled:${isInit()}`,
                            type: 'label',
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create('ApplyModRestraint Section'),
                            type: 'br',
                        },
                        'ApplyModRestraint': {
                            label: 'ApplyModRestraint',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.ApplyModRestraint();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create('ApplyModRestraint Section'),
                            type: 'br',
                        },
                        'RemoveAllRestraint': {
                            label: 'RemoveAllRestraint',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveAllRestraint();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'RemoveAllRestraintDynamic': {
                            label: 'RemoveAllRestraintDynamic',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveAllRestraintDynamic();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create('Keys Section'),
                            type: 'br',
                        },
                        'AddManyKeys': {
                            label: 'AddManyKeys',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyKeys();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AddManyPotion': {
                            label: 'AddManyPotion',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyPotion();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AddManyGold': {
                            label: 'AddManyGold',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyGold();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AddDistraction': {
                            label: 'AddDistraction',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddDistraction();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AddAllRestraints': {
                            label: 'AddAllRestraints',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllRestraints();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AddAllOutfit': {
                            label: 'AddAllOutfit',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllOutfit();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AddAllConsumables': {
                            label: 'AddAllConsumables',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllConsumables();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AddAllWeapon': {
                            label: 'AddAllWeapon',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllWeapon();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create('Bootstrap Section'),
                            type: 'br',
                        },
                        'BootstrapAllGood': {
                            label: 'BootstrapAllGood',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapAllGood();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'BootstrapSpellChoicesTable': {
                            label: 'BootstrapSpellChoicesTable',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapSpellChoicesTable();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'BootstrapSimpleGood': {
                            label: 'BootstrapSimpleGood',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapSimpleGood();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'BootstrapAllNegative': {
                            label: 'BootstrapAllNegative',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapAllNegative();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create('Enable Section'),
                            type: 'br',
                        },
                        'EnableAllCheats': {
                            label: 'EnableAllCheats',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.EnableAllCheats();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'DisableAllCheats': {
                            label: 'DisableAllCheats',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.DisableAllCheats();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'EnableFullState': {
                            label: 'EnableFullState',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.EnableFullState();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'DisableFullState': {
                            label: 'DisableFullState',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.DisableFullState();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create('Choice Section'),
                            type: 'br',
                        },
                        'ChoiceAddCheatChoiceGoodEscape': {
                            label: 'ChoiceAddCheatChoiceGoodEscape',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodEscape();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceGoodEnhance': {
                            label: 'ChoiceAddCheatChoiceGoodEnhance',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodEnhance();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceGoodMid': {
                            label: 'ChoiceAddCheatChoiceGoodMid',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodMid();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceBadMid': {
                            label: 'ChoiceAddCheatChoiceBadMid',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadMid();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceMid': {
                            label: 'ChoiceAddCheatChoiceMid',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceMid();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceBadNegative': {
                            label: 'ChoiceAddCheatChoiceBadNegative',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadNegative();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceBadNoEscape': {
                            label: 'ChoiceAddCheatChoiceBadNoEscape',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadNoEscape();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceMap': {
                            label: 'ChoiceAddCheatChoiceMap',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceMap();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceNowhere': {
                            label: 'ChoiceAddCheatChoiceNowhere',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceNowhere();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceSuperMarket': {
                            label: 'ChoiceAddCheatChoiceSuperMarket',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceSuperMarket();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                            cssStyleText: 'margin-top: 0.5em;',
                        },
                        'ChoicePrintNowChoice': {
                            label: 'ChoicePrintNowChoice',
                            type: 'button',
                            click() {
                                thisRef.gmc!.fields['NowChoiceList'].value =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoicePrintNowChoice();
                                thisRef.gmc!.fields['NowChoiceList'].reload();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'NowChoiceList': {
                            label: 'NowChoiceList',
                            type: 'textarea',
                            default: '',
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create('ChoiceAddOne Section'),
                            type: 'br',
                        },
                        'ChoiceAddOneSelect': {
                            label: 'ChoiceSelect',
                            type: 'select',
                            value: '',
                            options: thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData()
                                .map(T => `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}`),
                            cssClassName: 'd-inline',
                        },
                        'ChoiceAddOne': {
                            label: 'ChoiceAddOne',
                            type: 'button',
                            click() {
                                const c = thisRef.gmc!.fields['ChoiceAddOneSelect'].value;
                                if (c) {
                                    const N = thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData().find(T => {
                                        return `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}` === c;
                                    });
                                    if (N) {
                                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats._AddCheatChoice(N.keyName);
                                    }
                                }
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create('ChoicePrint Section'),
                            type: 'br',
                        },
                        'ChoicePrintAllValidChoice': {
                            label: 'ChoicePrintAllValidChoice',
                            type: 'button',
                            click() {
                                thisRef.gmc!.fields['ChoicePrintAllValidChoiceList'].value =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoicePrintAllValidChoice();
                                thisRef.gmc!.fields['ChoicePrintAllValidChoiceList'].reload();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoicePrintAllValidChoiceList': {
                            label: 'ChoicePrintAllValidChoiceList',
                            type: 'textarea',
                            default: '',
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create('DebugSee Section'),
                            type: 'br',
                        },
                        'ShowAllRestraintDynamicName': {
                            label: 'ShowAllRestraintDynamicName',
                            type: 'button',
                            click() {
                                thisRef.gmc!.fields['ShowAllRestraintDynamicNameList'].value =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.DebugSee.ShowAllRestraintDynamicName()
                                        .join('\n');
                                thisRef.gmc!.fields['ShowAllRestraintDynamicNameList'].reload();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
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
                                thisRef.gmc!.fields['ShowAllRestraintList'].value =
                                    JSON.stringify(
                                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.DebugSee.ShowAllRestraint(),
                                        undefined,
                                        2
                                    );
                                thisRef.gmc!.fields['ShowAllRestraintList'].reload();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ShowAllRestraintList': {
                            label: 'ShowAllRestraintList',
                            type: 'textarea',
                            default: '',
                        },
                        [thisRef.rId()]: {
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
                            options: ['None'].concat(Object.keys(thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.kinkyDungeonFactionColors)),
                            cssClassName: 'd-inline',
                            cssStyleText: 'margin-right: 0.25em;',
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        ...Object.keys(WearsList).reduce<InitOptionsNoCustom['fields']>((acc, WK) => {
                            const o: InitOptionsNoCustom['fields'] = {};
                            o['Wear' + WK] = {
                                label: 'Wear' + WK,
                                type: 'button',
                                click() {
                                    const faction = thisRef.gmc!.fields['FactionSelect'].value;
                                    // (thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats as Restraint)[('Wear' + WK) as WearMethodsInterfaceKey];
                                    (<Restraint>thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats)[<WearMethodsInterfaceKey>('Wear' + WK)](
                                        thisRef.gmc!.fields['LockSelect'].value as LockList,
                                        faction === 'None' ? undefined : faction as KinkyDungeonFactionColors_Keys,
                                    );
                                    // (thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats as Restraint).WearCrystal(LockList.Purple);
                                },
                                cssClassName: 'd-inline',
                                xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                            };
                            return assign<InitOptionsNoCustom['fields'], InitOptionsNoCustom['fields']>(acc, o);
                        }, {} as InitOptionsNoCustom['fields']),
                        // 'WearVinePlant': {
                        //     label: 'WearVinePlant',
                        //     type: 'button',
                        //     click() {
                        //         thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.WearVinePlant();
                        //     },
                        //     cssClassName: 'd-inline',
                        //     xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        // },
                        [thisRef.rId()]: {
                            section: GM_config.create('OpenChest Section'),
                            type: 'br',
                        },
                        'OpenChest': {
                            label: 'OpenChest',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.OpenChest();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create('Map Section'),
                            type: 'br',
                        },
                        'MapKKSsMGet': {
                            label: 'MapKKSsMGet',
                            type: 'button',
                            click() {
                                thisRef.gmc!.fields['MapKKSsMGetData'].value =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.MapKKSsMGet();
                                thisRef.gmc!.fields['MapKKSsMGetData'].reload();

                                const c = document.createElement('canvas');
                                const r =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.drawMapCanvas_KKSs(c);
                                c.id = 'MapKKSsMGetDataCanvas';
                                // add a canvas node after this node
                                thisRef.gmc!.fields['MapKKSsMGetData'].node!.after(
                                    c
                                );
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
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
                                thisRef.gmc!.fields['MapKSsMGetData'].value =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.MapKSsMGet();
                                thisRef.gmc!.fields['MapKSsMGetData'].reload();

                                const c = document.createElement('canvas');
                                const r =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.drawMapCanvas_KSs(c);
                                c.id = 'MapKSsMGetDataCanvas';
                                // add a canvas node after this node
                                thisRef.gmc!.fields['MapKSsMGetData'].node!.after(
                                    c
                                );
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'MapKSsMGetData': {
                            label: 'MapKSsMGetData',
                            type: 'textarea',
                            default: '',
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create('Map Cheats Section'),
                            type: 'br',
                        },
                        'MapOpenFull': {
                            label: 'MapOpenFull',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.MapOpenFull();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'MapOpenNone': {
                            label: 'MapOpenNone',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.MapOpenNone();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'SetAllBedAreTrap': {
                            label: 'SetAllBedAreTrap',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.SetAllBedAreTrap();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'SetAllBarrelAreTrap': {
                            label: 'SetAllBarrelAreTrap',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.SetAllBarrelAreTrap();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'SetAll_L_AreDisplayStand': {
                            label: 'SetAll_L_AreDisplayStand',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.SetAll_L_AreDisplayStand();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'SetAll_L_AreCage': {
                            label: 'SetAll_L_AreCage',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.SetAll_L_AreCage();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AllLibChestReset': {
                            label: 'ResetAllLibChest',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AllLibChestReset();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create('HardMode Section'),
                            type: 'br',
                        },
                        'HardModeEnable': {
                            label: 'HardModeEnable',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.HardModeEnable();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'HardModeDisable': {
                            label: 'HardModeDisable',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.HardModeDisable();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                    },
                events: {
                    save(values) {
                        // All the values that aren't saved are passed to thisRef function
                        // for (i in values) alert(values[i]);
                    },
                    open(doc) {
                        doc.addEventListener('keydown', (event) => {
                            console.log('keydown', event);
                            if (event.altKey && (event.key === 'Q' || event.key === 'q')) {
                                if (thisRef.gmc && thisRef.gmc.isOpen) {
                                    thisRef.gmc.close();
                                } else {
                                    thisRef.gmc = thisRef.gmcCreator();
                                    KDOptOut = true;
                                    thisRef.gmc.open();
                                }
                            }
                        });
                    },
                },
            });
    }
}



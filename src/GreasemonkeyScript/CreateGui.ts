import {BootstrapBtnType, GM_config, GM_configStruct, InitOptionsNoCustom} from '../GM_config_TS/gm_config';
import {EnchantedRestraintsPatch, isInit} from '../initMod';
// https://stackoverflow.com/questions/42631645/webpack-import-typescript-module-both-normally-and-as-raw-string
import inlineGMCss from './inlineText/GM.css?inlineText';
import inlineBootstrap from 'bootstrap/dist/css/bootstrap.css?inlineText';
import {KinkyDungeonFactionColors_Keys, Restraint, WearMethodsInterfaceKey, WearsList} from "../Cheats/Restraint";
import {assign, isNil, isString} from "lodash";
import {LockList} from "../Cheats/LockList";
import {PatchSpell} from "../Cheats/PatchSpell";
import {HumanName2LockList, LockList2HumanName, StringTable} from "../GUI_StringTable/StringTable";
import {playDing, PlayDingType} from "../Sound/Sound";

KDOptOut = true;

class LastSearch {
    lastSearch: Map<string, string> = new Map<string, string>();

    get(key: string, defaultValue: string = ''): string {
        return this.lastSearch.get(key) || defaultValue;
    }

    set(key: string, value: string) {
        this.lastSearch.set(key, value);
    }

    delete(key: string) {
        this.lastSearch.delete(key);
    }
}

export class CreateGui {

    noPlayDing = false;

    playDing = (hz: PlayDingType) => {
        if (this.noPlayDing) {
            return;
        }
        playDing(hz);
    };

    get version() {
        return '1.31';
    }

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

    _patchSpell = new PatchSpell();

    do_install_EnchantedRestraintsPatch = () => {
        KDOptOut = true;
        EnchantedRestraintsPatch();
        this._patchSpell.PatchAllSpell();
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

    calcGoddessRepKeyListSelect = () => {
        return this.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GoddessRepKeyList().map(T => {
            return `${T}[${StringTable.KinkyDungeonShrine2I18N(T)}]`;
        });
    }
    flushPrintNowAllReputationStateList = () => {
        const rGod = this.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GetAllGoddessRep().map(T => {
            return `${T[0]}[${StringTable.KinkyDungeonShrine2I18N(T[0])}]:${T[1]}`;
        }).join('\n');
        const rFaction = this.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GetAllFactionRelations().map(T => {
            const r = StringTable.KinkyDungeonKinkyDungeonFaction2I18N(T[0]);
            return [r[1], `${T[0]}[${r[0]}]:${T[1]}`] as [boolean, string];
        }).sort((a, b) => {
            if (a[0] === b[0]) {
                return 0;
            }
            if (a[0] && !b[0]) {
                return -1;
            }
            return 1;
        }).map(T => T[1]).join('\n');
        this.gmc!.fields['PrintNowAllReputationStateList'].value = rGod + '\n------------\n' + rFaction;
        this.gmc!.fields['PrintNowAllReputationStateList'].reload();
    }
    calcNowWearRestraintItemSelect = () => {
        return this.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.getNowWearRestraintItem().map(T => {
            const l1 = LockList2HumanName(T.item?.lock as LockList);
            const l2 = LockList2HumanName(T.parentItem?.lock as LockList);
            return `${T.restraint?.name}|[${T.restraint ? TextGet(`Restraint${T.restraint.name}`) : ''}][${T.restraint?.Group}][${l1}]--` +
                (T.parentRestraint ? (`[${T.parentRestraint?.name || ''}][${T.parentRestraint ? TextGet(`Restraint${T.parentRestraint.name}`) : ''}][${T.parentRestraint?.Group || ''}][${l2}]`) : '');
        });
    }
    flushNowWearRestraintItemSelect = () => {
        const l = this.calcNowWearRestraintItemSelect();
        this.gmc!.fields['NowWearRestraintItemSelect'].settings.options = l;
        this.gmc!.fields['NowWearRestraintItemSelect'].value = l[0];
        this.gmc!.fields['NowWearRestraintItemSelect'].reload();
    }

    lastSearch: LastSearch = new LastSearch();

    gmcCreator = () => {
        KDOptOut = true;
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
                'title': StringTable['title'], // Panel Title
                css: inlineGMCss + '\n' + inlineBootstrap,
                'fields': // Fields object
                    {
                        [thisRef.rId()]: {
                            section: `Author: <a href="https://github.com/Lyoko-Jeremie/KinkiestDungeon_Mod_enchanted_restraints">Jeremie</a> v${thisRef.version}`,
                            type: 'br',
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['install EnchantedRestraints Mod Section']),
                            type: 'br',
                        },
                        'install_EnchantedRestraintsPatch': {
                            label: StringTable['install_EnchantedRestraintsPatch'],
                            type: 'button',
                            click() {
                                thisRef.do_install_EnchantedRestraintsPatch();
                                thisRef.gmc!.fields['isInstalled'].settings.label = StringTable.isInstalledMask(`${isInit()}`);
                                thisRef.gmc!.fields['isInstalled'].reload();
                            },
                        },
                        'isInstalled': {
                            label: StringTable.isInstalledMask(`${isInit()}`),
                            type: 'label',
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['ApplyModRestraint Section']),
                            type: 'br',
                        },
                        'ApplyModRestraint': {
                            label: StringTable ['ApplyModRestraint'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.ApplyModRestraint();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['ApplyRestraint Section']),
                            type: 'br',
                        },
                        'RemoveAllRestraint': {
                            label: StringTable['RemoveAllRestraint'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveAllRestraint();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'RemoveAllRestraintDynamic': {
                            label: StringTable['RemoveAllRestraintDynamic'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveAllRestraintDynamic();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ForceClearRestraint': {
                            label: StringTable['ForceClearRestraint'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ForceClearRestraint();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['Keys Section']),
                            type: 'br',
                        },
                        'AddManyKeys': {
                            label: StringTable ['AddManyKeys'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyKeys();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AddManyPotion': {
                            label: StringTable ['AddManyPotion'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyPotion();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AddManyGold': {
                            label: StringTable['AddManyGold'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyGold();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AddDistraction': {
                            label: StringTable ['AddDistraction'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddDistraction();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AddAllRestraints': {
                            label: StringTable['AddAllRestraints'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllRestraints();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AddAllOutfit': {
                            label: StringTable['AddAllOutfit'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllOutfit();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AddAllConsumables': {
                            label: StringTable['AddAllConsumables'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllConsumables();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AddAllWeapon': {
                            label: StringTable ['AddAllWeapon'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllWeapon();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AddAllKeyTools': {
                            label: StringTable['AddAllKeyTools'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllKeyTools();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'RemoveAllKeyTools': {
                            label: StringTable ['RemoveAllKeyTools'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveAllKeyTools();
                                thisRef.playDing(PlayDingType.dong);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['SpellPoints Section']),
                            type: 'br',
                        },
                        'AddSpellPoints': {
                            label: StringTable['AddSpellPoints'] + '+10',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChangeSpellPoints(10);
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ZeroSpellPoints': {
                            label: StringTable['ZeroSpellPoints'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.SetSpellPoints(0);
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'NegativeSpellPoints': {
                            label: StringTable['NegativeSpellPoints'] + '-10',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChangeSpellPoints(-10);
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['Relations Section']),
                            type: 'br',
                        },
                        'FullAllRelations': {
                            label: StringTable['FullAllRelations'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.FullAllRelations();
                                thisRef.flushPrintNowAllReputationStateList();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ZeroAllRelations': {
                            label: StringTable['ZeroAllRelations'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ZeroAllRelations();
                                thisRef.flushPrintNowAllReputationStateList();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'NegativeAllRelations': {
                            label: StringTable['NegativeAllRelations'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.NegativeAllRelations();
                                thisRef.flushPrintNowAllReputationStateList();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        'FullAllGoddess': {
                            label: StringTable['FullAllGoddess'] + ' +50',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.FullAllGoddess();
                                thisRef.flushPrintNowAllReputationStateList();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ZeroAllGoddess': {
                            label: StringTable['ZeroAllGoddess'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ZeroAllGoddess();
                                thisRef.flushPrintNowAllReputationStateList();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'NegativeAllGoddess': {
                            label: StringTable['NegativeAllGoddess'] + ' -50',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.NegativeAllGoddess();
                                thisRef.flushPrintNowAllReputationStateList();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'FullAllReputationState': {
                            label: StringTable['FullAllReputationState'] + ' +50',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.FullAllReputationState();
                                thisRef.flushPrintNowAllReputationStateList();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ClearAllReputationState': {
                            label: StringTable['ClearAllReputationState'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ClearAllReputationState();
                                thisRef.flushPrintNowAllReputationStateList();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'NegativeAllReputationState': {
                            label: StringTable['NegativeAllReputationState'] + ' -50',
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.NegativeAllReputationState();
                                thisRef.flushPrintNowAllReputationStateList();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        'GoddessRepSelect': {
                            label: StringTable['GoddessRepSelect'],
                            type: 'select',
                            value: 'None',
                            options: thisRef.calcGoddessRepKeyListSelect(),
                            cssClassName: 'd-inline',
                            cssStyleText: 'margin-right: 0.25em;',
                        },
                        'AddSelectedGoddessRep': {
                            label: StringTable['AddSelectedGoddessRep'] + ' +50',
                            type: 'button',
                            click() {
                                let v = thisRef.gmc!.fields['GoddessRepSelect'].value as string;
                                v = v.split('[')[0];
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GoddessRepChange(v, 50);
                                thisRef.flushPrintNowAllReputationStateList();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ClearSelectedGoddessRep': {
                            label: StringTable['ClearSelectedGoddessRep'],
                            type: 'button',
                            click() {
                                let v = thisRef.gmc!.fields['GoddessRepSelect'].value as string;
                                v = v.split('[')[0];
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GoddessRepSet(v, 0);
                                thisRef.flushPrintNowAllReputationStateList();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'NegativeSelectedGoddessRep': {
                            label: StringTable['NegativeSelectedGoddessRep'] + ' -50',
                            type: 'button',
                            click() {
                                let v = thisRef.gmc!.fields['GoddessRepSelect'].value as string;
                                v = v.split('[')[0];
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GoddessRepChange(v, -50);
                                thisRef.flushPrintNowAllReputationStateList();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        'PrintNowAllReputationState': {
                            label: StringTable['PrintNowAllReputationState'],
                            type: 'button',
                            click() {
                                thisRef.flushPrintNowAllReputationStateList();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'PrintNowAllReputationStateList': {
                            label: StringTable['PrintNowAllReputationStateList'],
                            type: 'textarea',
                            default: '',
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['Bootstrap Section']),
                            type: 'br',
                        },
                        'BootstrapAllGood': {
                            label: StringTable['BootstrapAllGood'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapAllGood();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'BootstrapSpellChoicesTable': {
                            label: StringTable['BootstrapSpellChoicesTable'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapSpellChoicesTable();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'BootstrapSimpleGood': {
                            label: StringTable['BootstrapSimpleGood'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapSimpleGood();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'BootstrapAllNegative': {
                            label: StringTable['BootstrapAllNegative'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapAllNegative();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['Enable Section']),
                            type: 'br',
                        },
                        'EnableAllCheats': {
                            label: StringTable['EnableAllCheats'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.EnableAllCheats();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'DisableAllCheats': {
                            label: StringTable['DisableAllCheats'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.DisableAllCheats();
                                thisRef.playDing(PlayDingType.dong);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'EnableFullState': {
                            label: StringTable['EnableFullState'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.EnableFullState();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'DisableFullState': {
                            label: StringTable['DisableFullState'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.DisableFullState();
                                thisRef.playDing(PlayDingType.dong);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'EnableQuickness5': {
                            label: StringTable['EnableQuickness5'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.EnableQuickness5();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'DisableQuickness5': {
                            label: StringTable['DisableQuickness5'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.DisableQuickness5();
                                thisRef.playDing(PlayDingType.dong);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['Choice Section']),
                            type: 'br',
                        },
                        'ChoiceAddCheatChoiceGoodEscape': {
                            label: StringTable['ChoiceAddCheatChoiceGoodEscape'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodEscape();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceGoodEnhance': {
                            label: StringTable['ChoiceAddCheatChoiceGoodEnhance'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodEnhance();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceGoodMid': {
                            label: StringTable['ChoiceAddCheatChoiceGoodMid'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodMid();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceBadMid': {
                            label: StringTable['ChoiceAddCheatChoiceBadMid'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadMid();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceMid': {
                            label: StringTable['ChoiceAddCheatChoiceMid'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceMid();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceBadNegative': {
                            label: StringTable['ChoiceAddCheatChoiceBadNegative'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadNegative();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceBadNoEscape': {
                            label: StringTable ['ChoiceAddCheatChoiceBadNoEscape'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadNoEscape();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceGoodVision': {
                            label: StringTable['ChoiceAddCheatChoiceGoodVision'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodVision();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceBadVision': {
                            label: StringTable ['ChoiceAddCheatChoiceBadVision'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadVision();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceMap': {
                            label: StringTable['ChoiceAddCheatChoiceMap'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceMap();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceNowhere': {
                            label: StringTable['ChoiceAddCheatChoiceNowhere'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceNowhere();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoiceAddCheatChoiceSuperMarket': {
                            label: StringTable['ChoiceAddCheatChoiceSuperMarket'],
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
                            label: StringTable['ChoicePrintNowChoice'],
                            type: 'button',
                            click() {
                                thisRef.gmc!.fields['NowChoiceList'].value =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoicePrintNowChoice();
                                thisRef.gmc!.fields['NowChoiceList'].reload();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'NowChoiceList': {
                            label: StringTable['NowChoiceList'],
                            type: 'textarea',
                            default: '',
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['ChoiceAddOne Section']),
                            type: 'br',
                        },
                        'ChoiceAddOneSelect': {
                            label: StringTable['ChoiceSelect'],
                            type: 'select',
                            value: '',
                            options: thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData()
                                .map(T => `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}`),
                            cssClassName: 'd-inline',
                        },
                        'ChoiceAddOne': {
                            label: StringTable['ChoiceAddOne'],
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
                        'ChoiceRemoveOne': {
                            label: StringTable['ChoiceRemoveOne'],
                            type: 'button',
                            click() {
                                const c = thisRef.gmc!.fields['ChoiceAddOneSelect'].value;
                                if (c) {
                                    const N = thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData().find(T => {
                                        return `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}` === c;
                                    });
                                    if (N) {
                                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats._AddCheatChoice(N.keyName, true);
                                    }
                                }
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        'ChoiceAddOneFilterInput': {
                            label: StringTable['ChoiceAddOneFilterInput'],
                            type: 'text',
                            value: thisRef.lastSearch.get('ChoiceAddOneFilter'),
                            default: thisRef.lastSearch.get('ChoiceAddOneFilter'),
                            eventCallbacks: {
                                click(e) {
                                    console.log('ChoiceAddOneFilterInput eventCallbacks click', e);
                                },
                                blur(e) {
                                    console.log('ChoiceAddOneFilterInput eventCallbacks blur', e);
                                },
                                keyup(e) {
                                    console.log('ChoiceAddOneFilterInput eventCallbacks keydown', e);

                                    const searchKey = thisRef.gmc!.fields['ChoiceAddOneFilterInput'].toValue();
                                    console.log('searchKey', searchKey);
                                    if (!isString(searchKey)) {
                                        console.warn('ChoiceAddOneFilterInput searchKey is not string', searchKey);
                                        return;
                                    }
                                    const nn = thisRef.gmc!.fields['ChoiceAddOneFilterSelect'];
                                    if (searchKey.length === 0) {
                                        nn.settings.options = [];
                                        thisRef.lastSearch.delete('ChoiceAddOneFilter');
                                        nn.reload();
                                        return;
                                    }
                                    nn.settings.options =
                                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData()
                                            .map(T => `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}`)
                                            .filter(T =>
                                                T.includes(searchKey)
                                            )/*.concat(['None'])*/;
                                    thisRef.lastSearch.set('ChoiceAddOneFilter', searchKey);
                                    nn.reload();

                                },
                                change(e) {
                                    console.log('ChoiceAddOneFilterInput eventCallbacks change', e);
                                },
                            },
                            afterToNode: (node, wrapper, settings, id, configId) => {
                                console.log('ChoiceAddOneFilterInput afterToNode', node, wrapper, settings, id, configId);
                                node.addEventListener('keydown', (e) => {
                                    console.log('ChoiceAddOneFilterInput keydown', e);
                                    // e.stopPropagation();
                                });
                            },
                            cssClassName: 'd-inline',
                            cssStyleText: 'margin-right: 0.25em;',
                        },
                        'ChoiceAddOneFilterSelect': {
                            label: StringTable['ChoiceAddOneFilterSelect'],
                            type: 'select',
                            value: '',
                            options: thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData()
                                .map(T => `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}`)
                                .filter(T =>
                                    T.includes(thisRef.lastSearch.get('ChoiceAddOneFilter'))
                                ),
                            cssClassName: 'd-inline',
                        },
                        'ChoiceFilterAddOne': {
                            label: StringTable['ChoiceFilterAddOne'],
                            type: 'button',
                            click() {
                                const c = thisRef.gmc!.fields['ChoiceAddOneFilterSelect'].value;
                                if (c && isString(c) && c.length > 0) {
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
                        'ChoiceFilterRemoveOne': {
                            label: StringTable['ChoiceFilterRemoveOne'],
                            type: 'button',
                            click() {
                                const c = thisRef.gmc!.fields['ChoiceAddOneFilterSelect'].value;
                                if (c && isString(c) && c.length > 0) {
                                    const N = thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData().find(T => {
                                        return `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}` === c;
                                    });
                                    if (N) {
                                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats._AddCheatChoice(N.keyName, true);
                                    }
                                }
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['ChoicePrint Section']),
                            type: 'br',
                        },
                        'ChoicePrintAllValidChoice': {
                            label: StringTable ['ChoicePrintAllValidChoice'],
                            type: 'button',
                            click() {
                                thisRef.gmc!.fields['ChoicePrintAllValidChoiceList'].value =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoicePrintAllValidChoice();
                                thisRef.gmc!.fields['ChoicePrintAllValidChoiceList'].reload();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ChoicePrintAllValidChoiceList': {
                            label: StringTable['ChoicePrintAllValidChoiceList'],
                            type: 'textarea',
                            default: '',
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['Spells Section']),
                            type: 'br',
                        },
                        'SpellsPrintAllSpells': {
                            label: StringTable['SpellsPrintAllSpells'],
                            type: 'button',
                            click() {
                                thisRef.gmc!.fields['AllSpellsList'].value =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListAllSpells().map(T => T.name)
                                        .map(T => `${T}|[${TextGet('KinkyDungeonSpell' + T)}][${TextGet('KinkyDungeonSpellDescription' + T)}]`)
                                        .join('\n');
                                thisRef.gmc!.fields['AllSpellsList'].reload();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AllSpellsList': {
                            label: StringTable['AllSpellsList'],
                            type: 'textarea',
                            default: '',
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        'SpellsPrintNowSpells': {
                            label: StringTable['SpellsPrintNowSpells'],
                            type: 'button',
                            click() {
                                thisRef.gmc!.fields['NowSpellsList'].value =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListNowSpells().map(T => T.name)
                                        .map(T => `${T}|[${TextGet('KinkyDungeonSpell' + T)}][${TextGet('KinkyDungeonSpellDescription' + T)}]`)
                                        .join('\n');
                                thisRef.gmc!.fields['NowSpellsList'].reload();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'NowSpellsList': {
                            label: StringTable['NowSpellsList'],
                            type: 'textarea',
                            default: '',
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        'FullAllSpells': {
                            label: StringTable['FullAllSpells'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AllSpells();
                                thisRef.playDing(PlayDingType.ding);

                                thisRef.gmc!.fields['SpellsAddOneSelect'].settings.options =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListAllSpells()
                                        .filter(T => !thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListNowSpells().find(T2 => T2.name === T.name))
                                        .map(T => T.name)
                                        .map(T => `${T}|[${TextGet('KinkyDungeonSpell' + T)}]`);
                                thisRef.gmc!.fields['SpellsAddOneSelect'].value = thisRef.gmc!.fields['SpellsAddOneSelect'].settings.options[0];
                                thisRef.gmc!.fields['SpellsAddOneSelect'].reload();


                                thisRef.gmc!.fields['SpellsRemoveOneSelect'].settings.options =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListNowSpells().map(T => T.name)
                                        .map(T => {
                                            const s = `${T}|[${TextGet('KinkyDungeonSpell' + T)}]`;
                                            if (thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListAllBaseSpells().find(T2 => T2.name === T)) {
                                                return s + ` (${StringTable['BaseSpells_DontRemove']})`;
                                            }
                                            return s;
                                        });
                                thisRef.gmc!.fields['SpellsRemoveOneSelect'].value = thisRef.gmc!.fields['SpellsRemoveOneSelect'].settings.options[0];
                                thisRef.gmc!.fields['SpellsRemoveOneSelect'].reload();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        'SpellsAddOneSelect': {
                            label: StringTable['SpellsAddOneSelect'],
                            type: 'select',
                            value: '',
                            options: thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListAllSpells()
                                .filter(T => !thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListNowSpells().find(T2 => T2.name === T.name))
                                .map(T => T.name)
                                .map(T => `${T}|[${TextGet('KinkyDungeonSpell' + T)}]`),
                            cssClassName: 'd-inline',
                        },
                        'SpellsAddOne': {
                            label: StringTable['SpellsAddOne'],
                            type: 'button',
                            click() {
                                const c = thisRef.gmc!.fields['SpellsAddOneSelect'].value as string;
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddOneSpell(c.split('|[')[0]);

                                thisRef.gmc!.fields['SpellsAddOneSelect'].settings.options =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListAllSpells()
                                        .filter(T => !thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListNowSpells().find(T2 => T2.name === T.name))
                                        .map(T => T.name)
                                        .map(T => `${T}|[${TextGet('KinkyDungeonSpell' + T)}]`);
                                thisRef.gmc!.fields['SpellsAddOneSelect'].value = thisRef.gmc!.fields['SpellsAddOneSelect'].settings.options[0];
                                thisRef.gmc!.fields['SpellsAddOneSelect'].reload();


                                thisRef.gmc!.fields['SpellsRemoveOneSelect'].settings.options =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListNowSpells().map(T => T.name)
                                        .map(T => {
                                            const s = `${T}|[${TextGet('KinkyDungeonSpell' + T)}]`;
                                            if (thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListAllBaseSpells().find(T2 => T2.name === T)) {
                                                return s + ` (${StringTable['BaseSpells_DontRemove']})`;
                                            }
                                            return s;
                                        });
                                thisRef.gmc!.fields['SpellsRemoveOneSelect'].value = thisRef.gmc!.fields['SpellsRemoveOneSelect'].settings.options[0];
                                thisRef.gmc!.fields['SpellsRemoveOneSelect'].reload();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        'SpellsRemoveOneSelect': {
                            label: StringTable['SpellsRemoveOneSelect'],
                            type: 'select',
                            value: '',
                            options: thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListNowSpells().map(T => T.name)
                                .map(T => `${T}|[${TextGet('KinkyDungeonSpell' + T)}]`),
                            cssClassName: 'd-inline',
                        },
                        'SpellsRemoveOne': {
                            label: StringTable['SpellsRemoveOne'],
                            type: 'button',
                            click() {
                                const c = thisRef.gmc!.fields['SpellsRemoveOneSelect'].value as string;
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveOneSpell(c.split('|[')[0]);

                                thisRef.gmc!.fields['SpellsRemoveOneSelect'].settings.options =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListNowSpells().map(T => T.name)
                                        .map(T => {
                                            const s = `${T}|[${TextGet('KinkyDungeonSpell' + T)}]`;
                                            if (thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListAllBaseSpells().find(T2 => T2.name === T)) {
                                                return s + ` (${StringTable['BaseSpells_DontRemove']})`;
                                            }
                                            return s;
                                        });
                                thisRef.gmc!.fields['SpellsRemoveOneSelect'].value = thisRef.gmc!.fields['SpellsRemoveOneSelect'].settings.options[0];
                                thisRef.gmc!.fields['SpellsRemoveOneSelect'].reload();


                                thisRef.gmc!.fields['SpellsAddOneSelect'].settings.options =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListAllSpells()
                                        .filter(T => !thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListNowSpells().find(T2 => T2.name === T.name))
                                        .map(T => T.name)
                                        .map(T => `${T}|[${TextGet('KinkyDungeonSpell' + T)}]`);
                                thisRef.gmc!.fields['SpellsAddOneSelect'].value = thisRef.gmc!.fields['SpellsAddOneSelect'].settings.options[0];
                                thisRef.gmc!.fields['SpellsAddOneSelect'].reload();

                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['DebugSee Section']),
                            type: 'br',
                        },
                        'ShowAllRestraintDynamicName': {
                            label: StringTable['ShowAllRestraintDynamicName'],
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
                            label: StringTable['ShowAllRestraintDynamicNameList'],
                            type: 'textarea',
                            default: '',
                        },
                        'ShowAllRestraint': {
                            label: StringTable['ShowAllRestraint'],
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
                            label: StringTable['ShowAllRestraintList'],
                            type: 'textarea',
                            default: '',
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['WearRestraints Section']),
                            type: 'br',
                        },
                        'LockSelect': {
                            label: StringTable['LockSelect'],
                            type: 'select',
                            value: LockList.Purple,
                            options: Object.values(LockList).map(T => LockList2HumanName(T)),
                            cssClassName: 'd-inline',
                            cssStyleText: 'margin-right: 0.25em;',
                        },
                        'FactionSelect': {
                            label: StringTable['FactionSelect'],
                            type: 'select',
                            value: 'None',
                            options: Object.keys(thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.kinkyDungeonFactionColors).concat(['None']),
                            cssClassName: 'd-inline',
                            cssStyleText: 'margin-right: 0.25em;',
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        ...Object.keys(WearsList).reduce<InitOptionsNoCustom['fields']>((acc, WK) => {
                            const o: InitOptionsNoCustom['fields'] = {};
                            o['Wear' + WK] = {
                                label: StringTable.Wear2I18N('Wear' + WK),
                                type: 'button',
                                click() {
                                    const faction = thisRef.gmc!.fields['FactionSelect'].toValue();
                                    // (thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats as Restraint)[('Wear' + WK) as WearMethodsInterfaceKey];
                                    (<Restraint>thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats)[<WearMethodsInterfaceKey>('Wear' + WK)](
                                        HumanName2LockList(thisRef.gmc!.fields['LockSelect'].value as string),
                                        faction as KinkyDungeonFactionColors_Keys,
                                        // faction === 'None' ? undefined : faction as KinkyDungeonFactionColors_Keys,
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
                            type: 'br',
                        },
                        'AllRestraintItemSelect': {
                            label: StringTable['AllRestraintItemSelect'],
                            type: 'select',
                            value: 'None',
                            options: thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.listAllRestraintItem().map(T => {
                                return `${T.name}|[${TextGet(`Restraint${T.name}`)}]`;
                            }).concat(['None']),
                            eventCallbacks: {
                                click(e) {
                                    console.warn('AllRestraintItemSelect click', e);
                                },
                                change(e) {
                                    console.warn('AllRestraintItemSelect change', e);
                                },
                            },
                            afterToNode: (node, wrapper, settings, id, configId) => {
                                console.log('AllRestraintItemSelect afterToNode', node, wrapper, settings, id, configId);
                            },
                            cssClassName: 'd-inline',
                            cssStyleText: 'margin-right: 0.25em;',
                        },
                        'AllRestraintItemWearIt': {
                            label: StringTable['WearTheSelectedRestrain'],
                            type: 'button',
                            click() {
                                const c = thisRef.gmc!.fields['AllRestraintItemSelect'].toValue();
                                if (c && isString(c)) {
                                    const cc = c.split('|[');
                                    const faction = thisRef.gmc!.fields['FactionSelect'].toValue();
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.WearRestraints(
                                        cc[0],
                                        HumanName2LockList(thisRef.gmc!.fields['LockSelect'].toValue() as string),
                                        faction as KinkyDungeonFactionColors_Keys,
                                        // faction === 'None' ? undefined : faction as KinkyDungeonFactionColors_Keys,
                                    );
                                    thisRef.flushNowWearRestraintItemSelect();
                                }
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        'AllRestraintItemFilterInput': {
                            label: StringTable['AllRestraintItemFilterInput'],
                            type: 'text',
                            value: thisRef.lastSearch.get('AllRestraintItemFilter'),
                            default: thisRef.lastSearch.get('AllRestraintItemFilter'),
                            eventCallbacks: {
                                click(e) {
                                    console.log('AllRestraintItemFilterInput eventCallbacks click', e);
                                },
                                blur(e) {
                                    console.log('AllRestraintItemFilterInput eventCallbacks blur', e);
                                },
                                keyup(e) {
                                    console.log('AllRestraintItemFilterInput eventCallbacks keydown', e);

                                    const searchKey = thisRef.gmc!.fields['AllRestraintItemFilterInput'].toValue();
                                    console.log('searchKey', searchKey);
                                    if (!isString(searchKey)) {
                                        console.warn('AllRestraintItemFilterInput blur searchKey is not string', searchKey);
                                        return;
                                    }
                                    const nn = thisRef.gmc!.fields['AllRestraintItemFilterSelect'];
                                    if (searchKey.length === 0) {
                                        nn.settings.options = ['None'];
                                        thisRef.lastSearch.delete('AllRestraintItemFilter');
                                        nn.reload();
                                        return;
                                    }
                                    nn.settings.options =
                                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.listAllRestraintItem()
                                            .map(T => {
                                                return `${T.name}|[${TextGet(`Restraint${T.name}`)}]`;
                                            })
                                            .filter(T =>
                                                T.includes(searchKey)
                                            )/*.concat(['None'])*/;
                                    thisRef.lastSearch.set('AllRestraintItemFilter', searchKey);
                                    nn.reload();

                                },
                                change(e) {
                                    console.log('AllRestraintItemFilterInput eventCallbacks change', e);
                                },
                            },
                            afterToNode: (node, wrapper, settings, id, configId) => {
                                console.log('AllRestraintItemSelect afterToNode', node, wrapper, settings, id, configId);
                                node.addEventListener('keydown', (e) => {
                                    console.log('AllRestraintItemFilterInput keydown', e);
                                    // e.stopPropagation();
                                });
                            },
                            cssClassName: 'd-inline',
                            cssStyleText: 'margin-right: 0.25em;',
                        },
                        'AllRestraintItemFilterSelect': {
                            label: StringTable['AllRestraintItemFilterSelect'],
                            type: 'select',
                            value: 'None',
                            options: thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.listAllRestraintItem().map(T => {
                                return `${T.name}|[${TextGet(`Restraint${T.name}`)}]`;
                            }).filter(T => T.includes(thisRef.lastSearch.get('AllRestraintItemFilter'))).concat(['None']),
                            eventCallbacks: {
                                click(e) {
                                    console.warn('AllRestraintItemFilterSelect click', e);
                                },
                                change(e) {
                                    console.warn('AllRestraintItemFilterSelect change', e);
                                },
                            },
                            afterToNode: (node, wrapper, settings, id, configId) => {
                                console.log('AllRestraintItemFilterSelect afterToNode', node, wrapper, settings, id, configId);
                            },
                            cssClassName: 'd-inline',
                            cssStyleText: 'margin-right: 0.25em;',
                        },
                        'AllRestraintItemFilterWearIt': {
                            label: StringTable['AllRestraintItemFilterWearIt'],
                            type: 'button',
                            click() {
                                const c = thisRef.gmc!.fields['AllRestraintItemFilterSelect'].toValue();
                                if (c && isString(c) && c.length > 0 && c !== 'None' && c !== '|[]') {
                                    const cc = c.split('|[');
                                    const faction = thisRef.gmc!.fields['FactionSelect'].toValue();
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.WearRestraints(
                                        cc[0],
                                        HumanName2LockList(thisRef.gmc!.fields['LockSelect'].toValue() as string),
                                        faction as KinkyDungeonFactionColors_Keys,
                                        // faction === 'None' ? undefined : faction as KinkyDungeonFactionColors_Keys,
                                    );
                                    thisRef.flushNowWearRestraintItemSelect();
                                }
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        'NowWearRestraintItemSelect': {
                            label: StringTable['NowWearRestraintItemSelect'],
                            type: 'select',
                            value: 'None',
                            options: thisRef.calcNowWearRestraintItemSelect(),
                            cssClassName: 'd-inline',
                            cssStyleText: 'margin-right: 0.25em;',
                        },
                        'LockNowWearRestraintItem': {
                            label: StringTable['LockNowWearRestraintItem'],
                            type: 'button',
                            click() {
                                const k = HumanName2LockList(thisRef.gmc!.fields['LockSelect'].value as string);
                                const c = thisRef.gmc!.fields['NowWearRestraintItemSelect'].value;
                                const l = thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.getNowWearRestraintItem();
                                if (c && isString(c)) {
                                    const cc = c.split('|[');
                                    const name = cc[0];
                                    const n = l.find(T => T.restraint?.name === name);
                                    if (n) {
                                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.lockAWearingRestraintItem(n.item, k);
                                        thisRef.flushNowWearRestraintItemSelect();
                                    } else {
                                        console.warn('LockNowWearRestraintItem not found', name);
                                    }
                                }
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'UnlockNowWearRestraintItem': {
                            label: StringTable['UnlockNowWearRestraintItem'],
                            type: 'button',
                            click() {
                                const c = thisRef.gmc!.fields['NowWearRestraintItemSelect'].value;
                                const l = thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.getNowWearRestraintItem();
                                if (c && isString(c)) {
                                    const cc = c.split('|[');
                                    const name = cc[0];
                                    const n = l.find(T => T.restraint?.name === name);
                                    if (n) {
                                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.unlockAWearingRestraintItem(n.item);
                                        thisRef.flushNowWearRestraintItemSelect();
                                    } else {
                                        console.warn('UnlockNowWearRestraintItem not found', name);
                                    }
                                }
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'RemoveNowWearRestraintItem': {
                            label: StringTable['RemoveNowWearRestraintItem'],
                            type: 'button',
                            click() {
                                const c = thisRef.gmc!.fields['NowWearRestraintItemSelect'].value;
                                const l = thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.getNowWearRestraintItem();
                                if (c && isString(c)) {
                                    const cc = c.split('|[');
                                    const name = cc[0];
                                    const n = l.find(T => T.restraint?.name === name);
                                    if (n) {
                                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveRestraintSpecific(n.item, true);
                                        thisRef.flushNowWearRestraintItemSelect();
                                    } else {
                                        console.warn('RemoveNowWearRestraintItem not found', name);
                                    }
                                }
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        'JailOutfitSelect': {
                            label: StringTable['JailOutfitSelect'],
                            type: 'select',
                            value: 'None',
                            options: thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.listAllKDJailOutfits(),
                            cssClassName: 'd-inline',
                            cssStyleText: 'margin-right: 0.25em;',
                        },
                        'WearJailOutfit': {
                            label: StringTable['WearJailOutfit'],
                            type: 'button',
                            click() {
                                const c = thisRef.gmc!.fields['JailOutfitSelect'].value as string;
                                const faction = thisRef.gmc!.fields['FactionSelect'].value;
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.WearKDJailOutfit(
                                    c,
                                    HumanName2LockList(thisRef.gmc!.fields['LockSelect'].value as string),
                                    faction as KinkyDungeonFactionColors_Keys,
                                    // faction === 'None' ? undefined : faction as KinkyDungeonFactionColors_Keys,
                                );
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['Quest Section']),
                            type: 'br',
                        },
                        'QuestPrintNowAccept': {
                            label: StringTable['QuestPrintNowAccept'],
                            type: 'button',
                            click() {
                                thisRef.gmc!.fields['NowQuestList'].value =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListNowAcceptedQuest()
                                        .map(T => `${T.key}|[${T.name}][${T.hasAccept ? 'hasAccept' : 'NoAccept'}][${T.Succeed}][${T.Succeed}][${T.SucceedSub}][${T.Fail}]`)
                                        .join('\n');
                                thisRef.gmc!.fields['NowQuestList'].reload();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'NowQuestList': {
                            label: StringTable['NowQuestList'],
                            type: 'textarea',
                            default: '',
                        },
                        'ListAllQuest': {
                            label: StringTable['ListAllQuest'],
                            type: 'textarea',
                            default: thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListAllQuestWithInfo()
                                .map(T => `${T.key}|[${T.name}][${T.hasAccept ? 'hasAccept' : 'NoAccept'}][${T.Succeed}][${T.Succeed}][${T.SucceedSub}][${T.Fail}]`)
                                .join('\n'),
                        },
                        'ListAllQuestHasAccept': {
                            label: StringTable['ListAllQuestHasAccept'],
                            type: 'textarea',
                            default: thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListAllQuestHasAcceptWithInfo()
                                .map(T => `${T.key}|[${T.name}][${T.hasAccept ? 'hasAccept' : 'NoAccept'}][${T.Succeed}][${T.Succeed}][${T.SucceedSub}][${T.Fail}]`)
                                .join('\n'),
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        'QuestAddOneSelect': {
                            label: StringTable['QuestAddOneSelect'],
                            type: 'select',
                            value: '',
                            options: thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListAllQuestWithInfo()
                                .map(T => `${T.key}|[${T.name}][${T.hasAccept ? 'hasAccept' : 'NoAccept'}] ${T.accepted ? '【Accepted】' : ''} `),
                            // .map(T => `${T.key}|[${T.name}][${T.hasAccept ? 'hasAccept' : 'NoAccept'}][${T.Succeed}][${T.SucceedSub}][${T.Fail}]`),
                            cssClassName: 'd-inline',
                        },
                        'QuestAddOne': {
                            label: StringTable['QuestAddOne'],
                            type: 'button',
                            click() {
                                const c = thisRef.gmc!.fields['QuestAddOneSelect'].value as string;
                                const q = c.split('|[')[0];
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AcceptQuest(q);

                                thisRef.gmc!.fields['QuestAddOneSelect'].settings.options =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListAllQuestWithInfo()
                                        .map(T => `${T.key}|[${T.name}][${T.hasAccept ? 'hasAccept' : 'NoAccept'}] ${T.accepted ? '【Accepted】' : ''} `);
                                thisRef.gmc!.fields['QuestAddOneSelect'].reload();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'QuestRemoveOne': {
                            label: StringTable['QuestRemoveOne'],
                            type: 'button',
                            click() {
                                const c = thisRef.gmc!.fields['QuestAddOneSelect'].value as string;
                                const q = c.split('|[')[0];
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveQuest(q);

                                thisRef.gmc!.fields['QuestAddOneSelect'].settings.options =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListAllQuestWithInfo()
                                        .map(T => `${T.key}|[${T.name}][${T.hasAccept ? 'hasAccept' : 'NoAccept'}] ${T.accepted ? '【Accepted】' : ''} `);
                                thisRef.gmc!.fields['QuestAddOneSelect'].reload();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'QuestRemoveAll': {
                            label: StringTable['QuestRemoveAll'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveAllQuest();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'UnlockAllQuestLock': {
                            label: StringTable['UnlockAllQuestLock'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.UnlockAllQuestLock();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['OpenChest Section']),
                            type: 'br',
                        },
                        'OpenChest': {
                            label: StringTable['OpenChest'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.OpenChest();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        'OpenShadowChest': {
                            label: StringTable['OpenShadowChest'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.OpenShadowChest();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        'ReSetAllChests': {
                            label: StringTable['ReSetAllChests'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ReSetAllChests();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            type: 'br',
                        },
                        'SetAllChestsToSpecialChestsSelect': {
                            label: StringTable['SetAllChestsToSpecialChestsSelect'],
                            type: 'select',
                            value: '',
                            options: Object.getOwnPropertyNames(KDSpecialChests),
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'SetAllChestsToSpecialChests': {
                            label: StringTable['SetAllChestsToSpecialChests'],
                            type: 'button',
                            click() {
                                let v = thisRef.gmc!.fields['SetAllChestsToSpecialChestsSelect'].value as string;
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.SetAllChestsToSpecialChests(v as any);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['Map Section']),
                            type: 'br',
                        },
                        'MapKKSsMGet': {
                            label: StringTable ['MapKKSsMGet'],
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
                            label: StringTable ['MapKKSsMGetData'],
                            type: 'textarea',
                            default: '',
                        },
                        'MapKSsMGet': {
                            label: StringTable['MapKSsMGet'],
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
                            label: StringTable['MapKSsMGetData'],
                            type: 'textarea',
                            default: '',
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['Map Cheats Section']),
                            type: 'br',
                        },
                        'MapOpenFull': {
                            label: StringTable ['MapOpenFull'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.MapOpenFull();
                                thisRef.playDing(PlayDingType.ding);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'MapOpenNone': {
                            label: StringTable ['MapOpenNone'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.MapOpenNone();
                                thisRef.playDing(PlayDingType.dong);
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'SetAllBedAreTrap': {
                            label: StringTable['SetAllBedAreTrap'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.SetAllBedAreTrap();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'SetAllBarrelAreTrap': {
                            label: StringTable['SetAllBarrelAreTrap'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.SetAllBarrelAreTrap();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'SetAll_L_AreDisplayStand': {
                            label: StringTable['SetAll_L_AreDisplayStand'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.SetAll_L_AreDisplayStand();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'SetAll_L_AreCage': {
                            label: StringTable ['SetAll_L_AreCage'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.SetAll_L_AreCage();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'AllLibChestReset': {
                            label: StringTable ['ResetAllLibChest'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AllLibChestReset();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['HardMode Section']),
                            type: 'br',
                        },
                        'HardModeEnable': {
                            label: StringTable ['HardModeEnable'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.HardModeEnable();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'HardModeDisable': {
                            label: StringTable['HardModeDisable'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.HardModeDisable();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['SaveLoad Section']),
                            type: 'br',
                        },
                        'GetSaveCode': {
                            label: StringTable['GetSaveCode'],
                            type: 'button',
                            click() {
                                thisRef.gmc!.fields['GetSaveCodeData'].value =
                                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.SaveLoad.GameSaveDataString();
                                thisRef.gmc!.fields['GetSaveCodeData'].reload();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'GetSaveCodeData': {
                            label: StringTable['GetSaveCodeData'],
                            type: 'textarea',
                            default: '',
                        },
                        'CopyGameSaveDataStringToClipboard': {
                            label: StringTable['CopyGameSaveDataStringToClipboard'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.SaveLoad.CopyGameSaveDataStringToClipboard()
                                    .then(T => {
                                    }).catch(E => {
                                });
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'LoadGameSaveStringFromClipboard': {
                            label: StringTable['LoadGameSaveStringFromClipboard'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.SaveLoad.LoadGameSaveStringFromClipboard()
                                    .then(T => {
                                    }).catch(E => {
                                });
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['ForceNextLevelType Section']),
                            type: 'br',
                        },
                        ...thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.NameList_ForceNextMapType.reduce<InitOptionsNoCustom['fields']>(
                            (acc, MT) => {
                                const o: InitOptionsNoCustom['fields'] = {};
                                o[MT] = {
                                    // label: StringTable.Wear2I18N('Wear' + WK),
                                    label: MT,
                                    type: 'button',
                                    click() {
                                        const f = (thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats as any)[MT];
                                        if (typeof f === 'function') {
                                            f();
                                        } else {
                                            console.log('not a function NameList_ForceNextMapType', MT, f);
                                        }
                                    },
                                    cssClassName: 'd-inline',
                                    xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                                };
                                return assign<InitOptionsNoCustom['fields'], InitOptionsNoCustom['fields']>(acc, o);
                            }, {} as InitOptionsNoCustom['fields']),
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['ForceNextLevelTypeOnce Section']),
                            type: 'br',
                        },
                        ...thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.NameList_ForceNextMapTypeOnce.reduce<InitOptionsNoCustom['fields']>(
                            (acc, MT) => {
                                const o: InitOptionsNoCustom['fields'] = {};
                                o[MT] = {
                                    // label: StringTable.Wear2I18N('Wear' + WK),
                                    label: MT,
                                    type: 'button',
                                    click() {
                                        const f = (thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats as any)[MT];
                                        if (typeof f === 'function') {
                                            f();
                                        } else {
                                            console.log('not a function NameList_ForceNextMapTypeOnce', MT, f);
                                        }
                                    },
                                    cssClassName: 'd-inline',
                                    xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                                };
                                return assign<InitOptionsNoCustom['fields'], InitOptionsNoCustom['fields']>(acc, o);
                            }, {} as InitOptionsNoCustom['fields']),
                        [thisRef.rId()]: {
                            section: GM_config.create(StringTable['SaveLoad IndexDB Section Demo']),
                            type: 'br',
                        },
                        'CreateAIndexDBSave': {
                            label: StringTable['CreateAIndexDBSave'],
                            type: 'button',
                            click() {
                                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.SaveLoadIndexDB.addSave();
                            },
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'ListIndexDBSave': {
                            label: StringTable['ListIndexDBSave'],
                            type: 'button',
                            click: async () => {
                                const l = await thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.SaveLoadIndexDB.list();
                                console.log(l);
                                thisRef.gmc!.fields['IndexDBSaveSelect'].settings.options = ['None'].concat(l);
                                thisRef.gmc!.fields['IndexDBSaveSelect'].reload();
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        'IndexDBSaveSelect': {
                            label: StringTable['IndexDBSaveSelect'],
                            type: 'select',
                            value: '',
                            options: [],
                            cssClassName: 'd-inline',
                        },
                        'LoadIndexDBSave': {
                            label: StringTable['LoadIndexDBSave'],
                            type: 'button',
                            click: async () => {
                                const timeS = thisRef.gmc!.fields['IndexDBSaveSelect'].value;
                                await thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.SaveLoadIndexDB.loadGame(timeS as string);
                                // const s = await thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.SaveLoadIndexDB.load(timeS as string);
                                // console.log(s);
                                // if (s) {
                                //     // const r = thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.SaveLoad.LoadGameSaveString(s);
                                //     // console.log(r);
                                //     // if (r) {
                                //     //     // go game
                                //     //     KDSendEvent('loadGame');
                                //     // }
                                //
                                //     // use the building load impl, not impl myself. because the load task too complex
                                //     localStorage.setItem('KinkyDungeonSave', s);
                                //     KinkyDungeonStartNewGame(true);
                                // }
                            },
                            cssClassName: 'd-inline',
                            xgmExtendField: {bootstrap: {btnType: thisRef.btnType}},
                        },
                        // 'LoadGameSaveStringFromClipboardResult': {
                        //     label: StringTable['LoadGameSaveStringFromClipboardResult'],
                        //     type: 'textarea',
                        //     default: '',
                        // },
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



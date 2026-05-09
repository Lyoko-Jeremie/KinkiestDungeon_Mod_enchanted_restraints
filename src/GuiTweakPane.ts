import {BootstrapBtnType, Field, GM_config, GM_configStruct, InitOptionsNoCustom} from './GM_config_TS/gm_config';
import {EnchantedRestraintsPatch, StateEnchantedRestraintsPatch} from './initMod';
// https://stackoverflow.com/questions/42631645/webpack-import-typescript-module-both-normally-and-as-raw-string
// import inlineGMCss from './inlineText/GM.css?inlineText';
// import inlineBootstrap from 'bootstrap/dist/css/bootstrap.css?inlineText';
import {
    CurseWears,
    KinkyDungeonFactionColors_Keys,
    Restraint,
    WearMethodsInterfaceKey,
    WearsList
} from "./Cheats/Restraint";
import {assign, isArray, isString, parseInt} from "lodash";
// import interact from "interactjs";
import {KDLocksTypeInstance, LockList} from "./Cheats/LockList";
import {PatchSpell} from "./Cheats/PatchSpell";
import {HumanName2LockList, LockList2HumanName, StringTable} from "./GUI_StringTable/StringTable";
import {playDing, PlayDingType} from "./Sound/Sound";
import {
    BindingApi,
    ButtonApi,
    ListBindingApi,
    TweakPanel,
    ProxyHtmlElement,
    ProxyState,
    ProxyTextLabel
} from "./TweakPanel/TweakPanel";
import {DynamicCheatsHook} from "./Cheats/DynamicCheatsHook";

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

export class CreateGuiTweakPane {

    noPlayDing = false;

    playDing = (hz: PlayDingType) => {
        if (this.noPlayDing) {
            return;
        }
        playDing(hz);
    };

    get version() {
        return '2.00';
    }

    constructor(
        public winRef: Window
    ) {
        setTimeout(this.waitKDLoadingFinished, 100);
    }

    _patchSpell = new PatchSpell();

    do_install_EnchantedRestraintsPatch_isCalled = false;

    do_install_EnchantedRestraintsPatch = () => {
        if (this.do_install_EnchantedRestraintsPatch_isCalled) {
            if (StateEnchantedRestraintsPatch.AutoInstall) {
                EnchantedRestraintsPatch();
            }
            return;
        } else {
            this.do_install_EnchantedRestraintsPatch_isCalled = true;

            KDOptOut = true;
            if (StateEnchantedRestraintsPatch.AutoInstall) {
                EnchantedRestraintsPatch();
            }
            this._patchSpell.PatchAllSpell();
            this.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.setupHook(this.winRef);
            this.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.installAllFunctionPatchHooker();
        }
    };

    pane?: TweakPanel;

    initMod = () => {
        const thisRef = this;
        thisRef.winRef.addEventListener('keydown', (event) => {
            console.log('keydown', event);
            if (event.altKey && (event.key === 'W' || event.key === 'w')) {
                if (thisRef.pane) {
                    if (thisRef.pane.hidden) {
                        thisRef.pane.hidden = false;
                    } else {
                        thisRef.pane.hidden = true;
                    }
                } else {
                    thisRef.pane = thisRef.paneCreator();
                    KDOptOut = true;
                    thisRef.pane.hidden = false;
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
                if (thisRef.pane) {
                    if (thisRef.pane.hidden) {
                        thisRef.pane.hidden = false;
                    } else {
                        thisRef.pane.hidden = true;
                    }
                } else {
                    thisRef.pane = thisRef.paneCreator();
                    KDOptOut = true;
                    thisRef.pane.hidden = false;
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
        // this.gmc!.fields['PrintNowAllReputationStateList'].value = rGod + '\n------------\n' + rFaction;
        // this.gmc!.fields['PrintNowAllReputationStateList'].reload();
        const ref = this.pane?.getApiRef<HTMLTextAreaElement>('PrintNowAllReputationState');
        if (ref) {
            ref.value = rGod + '\n------------\n' + rFaction;
            this.pane?.refresh();
        }
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
        // this.gmc!.fields['NowWearRestraintItemSelect'].settings.options = l;
        // this.gmc!.fields['NowWearRestraintItemSelect'].value = l[0];
        // this.gmc!.fields['NowWearRestraintItemSelect'].reload();
    }

    lastSearch: LastSearch = new LastSearch();

    paneCreator = () => {
        KDOptOut = true;
        const thisRef = this;
        const pane = new TweakPanel(StringTable['title']);

        pane.addTextLabel('version', `Author: <a href="https://github.com/Lyoko-Jeremie/KinkiestDungeon_Mod_enchanted_restraints">Jeremie</a> v${thisRef.version} [${StringTable.lastVersion}:<a href="https://github.com/Lyoko-Jeremie/KinkiestDungeon_Mod_enchanted_restraints/releases/latest">releases</a>]`);

        // install
        {
            const folder = pane.addFolder('mod_init', StringTable['install EnchantedRestraints Mod Section']);

            folder.addButton('install_EnchantedRestraintsPatch', StringTable['install_EnchantedRestraintsPatch'],
                () => {
                    thisRef.do_install_EnchantedRestraintsPatch();

                    folder.getState<ProxyTextLabel>('isModInit')!.value = StringTable.isModInitMask(thisRef.do_install_EnchantedRestraintsPatch_isCalled);
                    folder.getState<ProxyTextLabel>('isInstalled')!.value = StringTable.isInstalledMask(StateEnchantedRestraintsPatch.isInit());

                    folder.refresh(); // 刷新面板以显示最新状态
                },
            );

            folder.addTextLabel('isModInit', StringTable.isModInitMask(thisRef.do_install_EnchantedRestraintsPatch_isCalled));
            folder.addTextLabel('isInstalled', StringTable.isInstalledMask(StateEnchantedRestraintsPatch.isInit()));

            folder.addBoolean('isAutoInstallEnchantedRestraintsPatch', StringTable['isAutoInstallEnchantedRestraintsPatch'],
                StateEnchantedRestraintsPatch.AutoInstall,
                (value) => {
                    StateEnchantedRestraintsPatch.AutoInstall = value;
                },
            );
        }

        // ApplyModRestraint
        {
            const folder = pane.addFolder('mod_Restraint', StringTable['ApplyModRestraint Section']);

            folder.addButton('ApplyModRestraint', StringTable['ApplyModRestraint'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.ApplyModRestraint();
            });
        }

        // map
        {
            const folder = pane.addFolder('mod_Restraint', StringTable['Map Section']);

            folder.addButton('MapKKSsMGet', StringTable['MapKKSsMGet'], () => {
                const c = folder.getState<ProxyHtmlElement<HTMLCanvasElement>>('MapKKSsMGetDataCanvas')!.element;
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.drawMapCanvas_KKSs(c);

                folder.refresh(); // 刷新面板以显示最新状态
            });
            // textarea MapKKSsMGetData
            folder.addHtmlElementTag('MapKKSsMGetDataCanvas', 'canvas');

            folder.addButton('MapKSsMGet', StringTable['MapKSsMGet'], () => {
                const c = folder.getState<ProxyHtmlElement<HTMLCanvasElement>>('MapKSsMGetDataCanvas')!.element;
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.drawMapCanvas_KSs(c);

                folder.refresh(); // 刷新面板以显示最新状态
            });
            // textarea MapKSsMGetData
            folder.addHtmlElementTag('MapKSsMGetDataCanvas', 'canvas');
        }

        // ApplyRestraint
        {
            const folder = pane.addFolder('mod_Restraint', StringTable['ApplyRestraint Section']);

            folder.addButton('RemoveAllRestraint', StringTable['RemoveAllRestraint'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveAllRestraint();
            });
            folder.addButton('RemoveAllRestraintDynamic', StringTable['RemoveAllRestraintDynamic'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveAllRestraintDynamic();
            });
            folder.addButton('ForceClearRestraint', StringTable['ForceClearRestraint'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ForceClearRestraint();
            });
        }

        // Keys
        {
            const folder = pane.addFolder('mod_Keys', StringTable['Keys Section']);

            folder.addButton('AddManyKeys', StringTable['AddManyKeys'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyKeys();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('AddManyPotion', StringTable['AddManyPotion'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyPotion();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('AddManyGold', StringTable['AddManyGold'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyGold();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('AddDistraction', StringTable['AddDistraction'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddDistraction();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('ZeroDistraction', StringTable['ZeroDistraction'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ZeroDistraction();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('AddAllRestraints', StringTable['AddAllRestraints'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllRestraints();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('AddAllOutfit', StringTable['AddAllOutfit'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllOutfit();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('AddAllConsumables', StringTable['AddAllConsumables'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllConsumables();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('AddAllWeapon', StringTable['AddAllWeapon'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllWeapon();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('AddAllKeyTools', StringTable['AddAllKeyTools'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllKeyTools();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('RemoveAllKeyTools', StringTable['RemoveAllKeyTools'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveAllKeyTools();
                thisRef.playDing(PlayDingType.dong);
            });
            folder.addButton('AddRecyclerInput', StringTable['AddRecyclerInput'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddRecyclerInput();
                thisRef.playDing(PlayDingType.ding);
            });

        }

        // SpellPoints
        {
            const folder = pane.addFolder('mod_SpellPoints', StringTable['SpellPoints Section']);

            folder.addButton('AddSpellPoints', StringTable['AddSpellPoints'] + '+10', () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChangeSpellPoints(10);
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('ZeroSpellPoints', StringTable['ZeroSpellPoints'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChangeSpellPoints(0);
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('NegativeSpellPoints', StringTable['NegativeSpellPoints'] + '-10', () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChangeSpellPoints(-10);
                thisRef.playDing(PlayDingType.ding);
            });
        }

        // Relations
        {
            const folder = pane.addFolder('mod_Relations', StringTable['Relations Section']);

            folder.addButton('FullAllRelations', StringTable['FullAllRelations'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.FullAllRelations();
                thisRef.flushPrintNowAllReputationStateList();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('ZeroAllRelations', StringTable['ZeroAllRelations'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ZeroAllRelations();
                thisRef.flushPrintNowAllReputationStateList();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('NegativeAllRelations', StringTable['NegativeAllRelations'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.NegativeAllRelations();
                thisRef.flushPrintNowAllReputationStateList();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addSeparator();
            folder.addButton('FullAllGoddess', StringTable['FullAllGoddess'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.FullAllGoddess();
                thisRef.flushPrintNowAllReputationStateList();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('ZeroAllGoddess', StringTable['ZeroAllGoddess'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ZeroAllGoddess();
                thisRef.flushPrintNowAllReputationStateList();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('NegativeAllGoddess', StringTable['NegativeAllGoddess'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.NegativeAllGoddess();
                thisRef.flushPrintNowAllReputationStateList();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('FullAllReputationState', StringTable['FullAllReputationState'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.FullAllReputationState();
                thisRef.flushPrintNowAllReputationStateList();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('ClearAllReputationState', StringTable['ClearAllReputationState'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ClearAllReputationState();
                thisRef.flushPrintNowAllReputationStateList();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('NegativeAllReputationState', StringTable['NegativeAllReputationState'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.NegativeAllReputationState();
                thisRef.flushPrintNowAllReputationStateList();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addSeparator();
            folder.addDropDown('GoddessRepSelect', StringTable['GoddessRepSelect'], thisRef.calcGoddessRepKeyListSelect(), (value) => {
            });
            folder.addButton('AddSelectedGoddessRep', StringTable['AddSelectedGoddessRep'], () => {
                let v = folder.getState<ProxyState<string>>('GoddessRepSelect')!.value;
                v = v.split('[')[0];
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GoddessRepChange(v, 50);
                thisRef.flushPrintNowAllReputationStateList();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('ClearSelectedGoddessRep', StringTable['ClearSelectedGoddessRep'], () => {
                let v = folder.getState<ProxyState<string>>('GoddessRepSelect')!.value;
                v = v.split('[')[0];
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GoddessRepChange(v, 0);
                thisRef.flushPrintNowAllReputationStateList();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('NegativeSelectedGoddessRep', StringTable['NegativeSelectedGoddessRep'], () => {
                let v = folder.getState<ProxyState<string>>('GoddessRepSelect')!.value;
                v = v.split('[')[0];
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GoddessRepChange(v, -50);
                thisRef.flushPrintNowAllReputationStateList();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addSeparator();
            folder.addButton('PrintNowAllReputationState', StringTable['PrintNowAllReputationState'], () => {
                thisRef.flushPrintNowAllReputationStateList();
            });
            folder.addHtmlElementTag('PrintNowAllReputationState', 'textarea');
        }

        // Bootstrap
        {
            const folder = pane.addFolder('mod_Bootstrap', StringTable['Bootstrap Section']);

            folder.addButton('BootstrapAllGood', StringTable['BootstrapAllGood'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapAllGood();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('BootstrapSpellChoicesTable', StringTable['BootstrapSpellChoicesTable'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapSpellChoicesTable();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('BootstrapFullAllSpells', StringTable['BootstrapFullAllSpells'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AllSpells();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('BootstrapSimpleGood', StringTable['BootstrapSimpleGood'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapSimpleGood();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('BootstrapAllNegative', StringTable['BootstrapAllNegative'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapAllNegative();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('Add1000MaxState', StringTable['Add1000MaxState'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.Add1000MaxState();
                thisRef.playDing(PlayDingType.ding);
            });
        }

        // Enable
        {
            const folder = pane.addFolder('mod_Enable', StringTable['Enable Section']);

            folder.addButton('EnableAllCheats', StringTable['EnableAllCheats'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.EnableAllCheats();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('DisableAllCheats', StringTable['DisableAllCheats'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.DisableAllCheats();
                thisRef.playDing(PlayDingType.dong);
            });
            folder.addButton('EnableFullState', StringTable['EnableFullState'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.EnableFullState();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('DisableFullState', StringTable['DisableFullState'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.DisableFullState();
                thisRef.playDing(PlayDingType.dong);
            });
            folder.addButton('EnableQuickness5', StringTable['EnableQuickness5'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.EnableQuickness5();
                thisRef.playDing(PlayDingType.ding);
            });
            folder.addButton('DisableQuickness5', StringTable['DisableQuickness5'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.DisableQuickness5();
                thisRef.playDing(PlayDingType.dong);
            });
        }

        // Dynamic Hook Cheats
        {
            const folder = pane.addFolder('mod_DynamicHookCheatsSection', StringTable['Dynamic Hook Cheats Section']);

            const hookWarp = <N extends keyof DynamicCheatsHook['hookTable']>(name: N) => {
                return (v: boolean) => {
                    if (v) {
                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.dynamicCheatsHook.enableHook(name);
                        thisRef.playDing(PlayDingType.ding);
                    } else {
                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.dynamicCheatsHook.disableHook(name);
                        thisRef.playDing(PlayDingType.dong);
                    }
                };
            };

            folder.addBoolean('DynamicHookEnableAlwaysCanUseAnyWeapon', StringTable['DynamicHookEnableAlwaysCanUseAnyWeapon'], false, hookWarp('AlwaysCanUseAnyWeapon'));
            folder.addBoolean('DynamicHookEnableAlwaysCanDrink', StringTable['DynamicHookEnableAlwaysCanDrink'], false, hookWarp('AlwaysCanDrink'));
            folder.addBoolean('DynamicHookEnableNeverMiscastMagic', StringTable['DynamicHookEnableNeverMiscastMagic'], false, hookWarp('NeverMiscastMagic'));
            folder.addBoolean('DynamicHookEnableNeverSlow', StringTable['DynamicHookEnableNeverSlow'], false, hookWarp('NeverSlow'));
            folder.addBoolean('DynamicHookEnableNeverMiss', StringTable['DynamicHookEnableNeverMiss'], false, hookWarp('NeverMiss'));
            folder.addBoolean('DynamicHookEnableAlwaysCanUseMagic', StringTable['DynamicHookEnableAlwaysCanUseMagic'], false, hookWarp('AlwaysCanUseMagic'));
        }

        // Choice
        {
            const folder = pane.addFolder('mod_Choice', StringTable['Choice Section']);

            folder.addButton('ChoiceAddCheatChoiceGoodEscape', StringTable['ChoiceAddCheatChoiceGoodEscape'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodEscape();
            });
            folder.addButton('ChoiceAddCheatChoiceGoodEnhance', StringTable['ChoiceAddCheatChoiceGoodEnhance'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodEnhance();
            });
            folder.addButton('ChoiceAddCheatChoiceGoodMid', StringTable['ChoiceAddCheatChoiceGoodMid'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodMid();
            });
            folder.addButton('ChoiceAddCheatChoiceBadMid', StringTable['ChoiceAddCheatChoiceBadMid'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadMid();
            });
            folder.addButton('ChoiceAddCheatChoiceMid', StringTable['ChoiceAddCheatChoiceMid'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceMid();
            });
            folder.addButton('ChoiceAddCheatChoiceSex', StringTable['ChoiceAddCheatChoiceSex'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceSex();
            });
            folder.addButton('ChoiceAddCheatChoiceSexRemove', StringTable['ChoiceAddCheatChoiceSexRemove'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceSex(true);
            });
            folder.addButton('ChoiceAddCheatChoiceSexClean', StringTable['ChoiceAddCheatChoiceSexClean'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceSexClean();
            });
            folder.addButton('ChoiceAddCheatChoiceBadNegative', StringTable['ChoiceAddCheatChoiceBadNegative'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadNegative();
            });
            folder.addButton('ChoiceAddCheatChoiceBadNoEscape', StringTable['ChoiceAddCheatChoiceBadNoEscape'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadNoEscape();
            });
            folder.addButton('ChoiceAddCheatChoiceGoodVision', StringTable['ChoiceAddCheatChoiceGoodVision'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodVision();
            });
            folder.addButton('ChoiceAddCheatChoiceBadVision', StringTable['ChoiceAddCheatChoiceBadVision'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadVision();
            });
            folder.addButton('ChoiceAddCheatChoiceMoreKinkyFurniture', StringTable['ChoiceAddCheatChoiceMoreKinkyFurniture'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceMoreKinkyFurniture();
            });
            folder.addButton('ChoiceAddCheatChoiceMap', StringTable['ChoiceAddCheatChoiceMap'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceMap();
            });
            folder.addButton('ChoiceAddCheatChoiceMapAbsurd', StringTable['ChoiceAddCheatChoiceMapAbsurd'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceMapAbsurd();
            });
            folder.addButton('ChoiceAddCheatChoiceNowhere', StringTable['ChoiceAddCheatChoiceNowhere'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceNowhere();
            });
            folder.addButton('ChoiceAddCheatChoiceSuperMarket', StringTable['ChoiceAddCheatChoiceSuperMarket'], () => {
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceSuperMarket();
            });
            folder.addSeparator();
            folder.addSeparator();
            folder.addButton('ChoicePrintNowChoice', StringTable['ChoicePrintNowChoice'], () => {
                folder.getApiRef<HTMLTextAreaElement>('NowChoiceList')!.value =
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoicePrintNowChoice();
                folder.refresh();
            });
            folder.addHtmlElementTag('NowChoiceList', 'textarea');
        }

        // ChoiceAddOne
        {
            const folder = pane.addFolder('mod_ChoiceAddOne', StringTable['ChoiceAddOne Section']);

            folder.addDropDown(
                'ChoiceSelect',
                StringTable['ChoiceSelect'],
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData()
                    .map(T => `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}`),
                () => {
                },
            );
            folder.addButton('ChoiceAddOne', StringTable['ChoiceAddOne'], () => {
                const c = folder.getState<ProxyState>('ChoiceSelect')!.value;
                if (c) {
                    const N = thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData().find(T => {
                        return `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}` === c;
                    });
                    if (N) {
                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats._AddCheatChoice(N.keyName);
                    }
                }
            });
            folder.addButton('ChoiceRemoveOne', StringTable['ChoiceRemoveOne'], () => {
                const c = folder.getState<ProxyState>('ChoiceSelect')!.value;
                if (c) {
                    const N = thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData().find(T => {
                        return `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}` === c;
                    });
                    if (N) {
                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats._AddCheatChoice(N.keyName, true);
                    }
                }
            });
            folder.addSeparator();
            folder.addTextInput('ChoiceAddOneFilterInput', StringTable['ChoiceAddOneFilterInput'], '', (value) => {
            });
            folder.getApiRef<ButtonApi>('ChoiceAddOneFilterInput')!.element.addEventListener('keyup', (ev) => {
                const searchKey = folder.getState<ProxyState>('ChoiceAddOneFilterInput')!.value;
                console.log('searchKey', searchKey);
                if (!isString(searchKey)) {
                    console.warn('ChoiceAddOneFilterInput searchKey is not string', searchKey);
                    return;
                }
                const ref = folder.getApiRef<ListBindingApi>('ChoiceAddOneFilterSelect')!;
                if (searchKey.length === 0) {
                    ref.options = [];
                    thisRef.lastSearch.delete('ChoiceAddOneFilter');
                    ref.refresh();
                    return;
                }
                const searchKeySearch = searchKey.toLowerCase();
                ref.options =
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData()
                        .map(T => `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}`)
                        .filter(T =>
                            T.toLowerCase().includes(searchKeySearch)
                        )/*.concat(['None'])*/.map(T => ({text: T, value: T}));
                thisRef.lastSearch.set('ChoiceAddOneFilter', searchKeySearch);
                ref.refresh();
            });
            folder.addDropDown('ChoiceAddOneFilterSelect', StringTable['ChoiceAddOneFilterSelect'],
                thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData()
                    .map(T => `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}`)
                    .filter(T => T.toLowerCase().includes(thisRef.lastSearch.get('ChoiceAddOneFilter'))),
                () => {
                },
            );
            folder.addButton('ChoiceFilterAddOne', StringTable['ChoiceFilterAddOne'], () => {
                const c = folder.getState<ProxyState>('ChoiceAddOneFilterSelect')!.value;
                if (c && isString(c) && c.length > 0) {
                    const N = thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData().find(T => {
                        return `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}` === c;
                    });
                    if (N) {
                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats._AddCheatChoice(N.keyName);
                    }
                }
            });
            folder.addButton('ChoiceFilterRemoveOne', StringTable['ChoiceFilterRemoveOne'], () => {
                const c = folder.getState<ProxyState>('ChoiceAddOneFilterSelect')!.value;
                if (c && isString(c) && c.length > 0) {
                    const N = thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData().find(T => {
                        return `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}` === c;
                    });
                    if (N) {
                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats._AddCheatChoice(N.keyName, true);
                    }
                }
            });
        }

        // ChoicePrint
        {
            const folder = pane.addFolder('mod_ChoicePrint', StringTable['ChoicePrint Section']);

            folder.addButton('ChoicePrintAllValidChoice', StringTable['ChoicePrintAllValidChoice'], () => {
                folder.getApiRef<HTMLTextAreaElement>('ChoicePrintAllValidChoiceList')!.value =
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoicePrintAllValidChoice();
                folder.refresh();
            });
            folder.addHtmlElementTag('ChoicePrintAllValidChoiceList', 'textarea');
        }

        // Spells
        {
            const folder = pane.addFolder('mod_Spells', StringTable['Spells Section']);
        }

        // DebugSee
        {
            const folder = pane.addFolder('mod_DebugSee', StringTable['DebugSee Section']);
        }

        // WearRestraints
        {
            const folder = pane.addFolder('mod_WearRestraints', StringTable['WearRestraints Section']);
        }

        // AllRestraintItemSection
        {
            const folder = pane.addFolder('mod_AllRestraintItemSection', StringTable['AllRestraintItemSection']);
        }

        // AllRestraintItemFilterSection
        {
            const folder = pane.addFolder('mod_AllRestraintItemFilterSection', StringTable['AllRestraintItemFilterSection']);
        }

        // NowWearRestraintItemSection
        {
            const folder = pane.addFolder('mod_NowWearRestraintItemSection', StringTable['NowWearRestraintItemSection']);
        }

        // Quest
        {
            const folder = pane.addFolder('mod_Quest', StringTable['Quest Section']);
        }

        // OpenChest
        {
            const folder = pane.addFolder('mod_OpenChest', StringTable['OpenChest Section']);
        }

        // Map Cheats
        {
            const folder = pane.addFolder('mod_MapCheats', StringTable['Map Cheats Section']);
        }

        // HardMode
        {
            const folder = pane.addFolder('mod_HardMode', StringTable['HardMode Section']);
        }

        // SaveLoad
        {
            const folder = pane.addFolder('mod_SaveLoad', StringTable['SaveLoad Section']);
        }

        // SaveLoad IndexDB Section Demo
        {
            const folder = pane.addFolder('mod_SaveLoadIndexDBSectionDemo', StringTable['SaveLoad IndexDB Section Demo']);
        }

        return pane;
    };

}

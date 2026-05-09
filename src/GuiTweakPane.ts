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
import {ButtonApi, Panel, ProxyHtmlElement, ProxyTextLabel} from "./TweakPanel/Panel";

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

    pane?: Panel;

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
        const pane = new Panel(StringTable['title']);

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
        }

        return pane;
    };

}

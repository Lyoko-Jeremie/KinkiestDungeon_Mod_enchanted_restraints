import {App} from '@PortableUi/adaptor/App';
// import '@PortableUi/css/theme1.scss';
import type {ModZone} from '@PortableUi/adaptor/ModZone';
import {EnchantedRestraintsPatch, StateEnchantedRestraintsPatch} from '../initMod';
import {
    CurseWears,
    KinkyDungeonFactionColors_Keys,
    Restraint,
    WearMethodsInterfaceKey,
    WearsList
} from "../Cheats/Restraint";
import {assign, isArray, isString, parseInt} from "lodash";
import {KDLocksTypeInstance, LockList} from "../Cheats/LockList";
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
        return '2.0';
    }

    // avoid same Math.random
    rIdP = 0;

    // get a unique string as id
    rId() {
        return '' + (++this.rIdP) + Math.random();
    }

    appContainer: HTMLElement;
    appContainerIFrame: HTMLIFrameElement;
    appContainerRoot: HTMLElement;

    constructor(
        public winRef: Window,
        public modZone: ModZone,
    ) {
        modZone.runIn(() => {
            setTimeout(this.waitKDLoadingFinished, 100);
        });

        this.appContainer = document.createElement('div');
        document.body.appendChild(this.appContainer);
        // 容器
        // 全屏，悬浮，半透明背景，类模态框
        this.appContainer.id = 'CreatePortableUi-appContainer';
        this.appContainer.style.position = 'absolute';
        this.appContainer.style.zIndex = '9999';
        this.appContainer.style.width = '100%';
        this.appContainer.style.height = '100%';
        this.appContainer.style.top = '0';
        this.appContainer.style.left = '0';
        this.appContainer.style.backgroundColor = 'transparent';
        this.appContainer.style.pointerEvents = 'none';

        this.appContainer.style.justifyContent = 'center';
        this.appContainer.style.alignItems = 'center';

        // 暂不显示
        this.appContainer.style.display = 'none';

        this.appContainerIFrame = document.createElement('iframe');
        this.appContainer.appendChild(this.appContainerIFrame);
        this.appContainerIFrame.style.width = '80%';
        this.appContainerIFrame.style.height = '80%';
        this.appContainerIFrame.style.border = 'none';
        // this.appContainerIFrame.style.backgroundColor = 'transparent';
        this.appContainerIFrame.style.pointerEvents = 'auto';
        this.appContainerRoot = this.appContainerIFrame.contentDocument!.body;
    }

    lastSearch: LastSearch = new LastSearch();

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

    triggerUi = () => {
        this.modZone.runGuarded(() => {
            if (this.appRef) {
                this.appRef.destroy();
                this.appRef = undefined;
                this.appContainer.style.display = 'none';
            } else {
                KDOptOut = true;
                this.portableGuiCreator();
                this.appContainer.style.display = 'flex';
            }
        });
    }

    initMod = () => {
        const thisRef = this;
        thisRef.winRef.addEventListener('keydown', (event) => {
            console.log('keydown', event);
            if (event.altKey && (event.key === 'Q' || event.key === 'q')) {
                this.triggerUi();
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
                this.triggerUi();
            });
            document.body.appendChild(startBanner);
        }
    };

    appRef?: App;

    portableGuiCreator = () => {
        this.appRef = new App(this.appContainerRoot, {
            id: 'enchantedRestraintsApp',
            styleIsolation: {
                mode: 'shadow',
            },
            bindingOptions: {
                changeDetection: "hybrid",
            },
        });
        this.appRef.root.style.width = '100%';
        this.appRef.root.style.overflowY = 'scroll';
        // this.appRef.root.style.pointerEvents = 'initial';
        // this.appRef.root.style.position = 'relative';
        // this.appRef.root.style.zIndex = '1';

        const thisRef = this;

        const rootFlex = this.appRef.add.Flex({
            id: 'rootFlex',
            backgroundColor: '#f0f0f0',
            width: '100%',
        });

        {
            const titleFlex = rootFlex.add.Flex({
                direction: 'vertical',
                gap: 15,
                padding: 20,
                backgroundColor: '#f0f0f0',
                width: '100%',
            });
            titleFlex.add.Label({
                text: StringTable['title'],
                style: {
                    fontSize: '1.5em',
                    fontWeight: 'bold',
                    textAlign: 'center',
                },
            });
            titleFlex.add.HtmlLabel({
                html: `Author: <a href="https://github.com/Lyoko-Jeremie/KinkiestDungeon_Mod_enchanted_restraints">Jeremie</a> v${thisRef.version} [${StringTable.lastVersion}:<a href="https://github.com/Lyoko-Jeremie/KinkiestDungeon_Mod_enchanted_restraints/releases/latest">releases</a>]`,
                style: {
                    // fontSize: '1.5em',
                    // fontWeight: 'bold',
                    textAlign: 'center',
                },
            });
            titleFlex.add.Label({
                text: 'isInit',
            });
        }

        const tabs = rootFlex.add.Tabs({});

        {

            const c = tabs.add({
                id: 'install EnchantedRestraints Mod Section'.replaceAll(' ', '_'),
                title: StringTable['install EnchantedRestraints Mod Section'],
            }).Flex({});

            c.add.Button({
                id: 'install_EnchantedRestraintsPatch',
                text: StringTable['install_EnchantedRestraintsPatch'],
                onClick: (self, ev) => {
                    thisRef.do_install_EnchantedRestraintsPatch();
                }
            });
            c.add.Label({
                id: 'isModInit',
                // text: StringTable.isModInitMask(thisRef.do_install_EnchantedRestraintsPatch_isCalled),
                bind: {
                    text: {
                        get: () => {
                            return StringTable.isModInitMask(thisRef.do_install_EnchantedRestraintsPatch_isCalled);
                        }
                    }
                }
            });
        }


    };

}

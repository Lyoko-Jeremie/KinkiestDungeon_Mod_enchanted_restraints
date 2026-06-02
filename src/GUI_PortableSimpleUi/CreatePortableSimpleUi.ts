import {AppRoot, createZoneWrapper, type IZoneWrapper, makeDataAccessor, makeRef} from '@PortableSimpleUi';
import themeString from '@PortableSimpleUi/theme/css/theme.css?inlineText';
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
    appContainerRoot?: HTMLElement;

    constructor(
        public winRef: Window,
        public zoneWrapper: IZoneWrapper,
    ) {
        console.log('[KinkiestDungeon enchanted_restraints Mod] CreateGui constructor');

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

        console.log('themeString', themeString);
        this.appContainerIFrame = document.createElement('iframe');
        this.appContainerIFrame.onload = () => {
            console.warn('appContainerIFrame loaded');
            // let (!this.appContainerIFrame.contentDocument) error throw out
            if (!this.appContainerIFrame.contentDocument) {
                console.error('appContainerIFrame.contentDocument is null');
            }

            const iframeWindow = this.appContainerIFrame.contentWindow as any;
            if (iframeWindow && (window as any).Zone) {
                // 将父窗口的 Zone 引用注入到 iframe
                iframeWindow.Zone = (window as any).Zone;

                // 触发 Zone.js 的自动补丁检查
                // Zone.js 默认会拦截 iframe 的创建和加载。如果 iframe 是同源的，
                // 访问 assertZonePatched() 会确保当前环境（包括关联的 iframe）被正确补丁。
                try {
                    (window as any).Zone.assertZonePatched();
                } catch (e) {
                    console.error('Zone patch check failed', e);
                }

                console.log('Zone injected to iframe');
            }

            this.zoneWrapper.runInZone(() => {
                // this.appContainerIFrame.contentDocument!.head.appendChild(document.createElement('style')).textContent = theme1String;
                this.appContainerRoot = this.appContainerIFrame.contentDocument!.body;
                this.appContainerRoot.style.maxWidth = '100%';
                this.appContainerRoot.style.width = '100%';
                this.appContainerRoot.style.margin = '0';
                this.appContainerRoot.style.padding = '0';
                this.appContainerRoot.style.overflowX = 'hidden';
                this.appContainerRoot.style.overflowY = 'scroll';
                this.appContainerRoot.style.backgroundColor = 'transparent';
            });
        };
        this.appContainer.appendChild(this.appContainerIFrame);
        this.appContainerIFrame.style.width = '80%';
        this.appContainerIFrame.style.height = '80%';
        this.appContainerIFrame.style.border = 'none';
        // this.appContainerIFrame.style.backgroundColor = 'transparent';
        this.appContainerIFrame.style.pointerEvents = 'auto';

        this.waitKDLoadingFinished();
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
        this.zoneWrapper.runInZoneGuarded(() => {
            if (this.appRef) {
                this.appRef.destroy();
                this.appRef = undefined;
                this.appContainer.style.display = 'none';
            } else {
                KDOptOut = true;
                if (this.portableGuiCreator()) {
                    this.appContainer.style.display = 'flex';
                }
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

    appRef?: AppRoot;

    portableGuiCreator = () => {
        if (!this.appContainerRoot) {
            return false;
        }
        this.appRef = new AppRoot(this.appContainerRoot, {
            id: 'enchantedRestraintsApp',
            zoneWrapper: this.zoneWrapper,
            styleIsolation: {
                mode: 'shadow',
                styles: themeString,
            },
        });
        this.appRef.rootElement.style.maxWidth = '100%';
        this.appRef.rootElement.style.width = '100%';
        this.appRef.rootElement.style.margin = '0';
        this.appRef.rootElement.style.padding = '0';
        this.appRef.rootElement.style.overflowY = 'scroll';

        this.appRef.host.style.maxWidth = '100%';
        this.appRef.host.style.width = '100%';
        this.appRef.host.style.margin = '0';
        this.appRef.host.style.padding = '0';
        this.appRef.host.style.overflowY = 'scroll';
        // this.appRef.root.style.pointerEvents = 'initial';
        // this.appRef.root.style.position = 'relative';
        // this.appRef.root.style.zIndex = '1';

        const thisRef = this;

        const rootFlex = this.appRef.add.Flex({
            id: 'rootFlex',
            style: {
                backgroundColor: '#f0f0f0',
                flexDirection: 'column',
                width: '100%',
            },
        });

        {
            const titleFlex = rootFlex.add.Flex({
                style: {
                    backgroundColor: '#f0f0f0',
                    flexDirection: 'column',
                    width: '100%',
                    gap: '15px',
                    margin: '20px',
                },
            });
            titleFlex.add.Label({
                text: StringTable['title'],
                style: {
                    fontSize: '1.5em',
                    fontWeight: 'bold',
                    textAlign: 'center',
                },
            });
            titleFlex.add.Label({
                html: `Author: <a href="https://github.com/Lyoko-Jeremie/KinkiestDungeon_Mod_enchanted_restraints">Jeremie</a> v${thisRef.version} [${StringTable.lastVersion}:<a href="https://github.com/Lyoko-Jeremie/KinkiestDungeon_Mod_enchanted_restraints/releases/latest">releases</a>]`,
                style: {
                    // fontSize: '1.5em',
                    // fontWeight: 'bold',
                    textAlign: 'center',
                },
            });
        }

        const tabs = rootFlex.add.Tabs({
            style: {
                margin: '20px',
            },
        });

        {

            const c = tabs.addTab({
                id: 'install EnchantedRestraints Mod Section'.replaceAll(' ', '_'),
                title: StringTable['install EnchantedRestraints Mod Section'],
            }).Flex({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });

            {
                const g = c.add.Group({
                    id: 'install EnchantedRestraints Mod Section'.replaceAll(' ', '_'),
                    title: StringTable['install EnchantedRestraints Mod Section'],
                }).add.Flex({
                    direction: 'column',
                });
                g.add.Label({
                    id: 'isModInit',
                    text: StringTable.isModInitMask(thisRef.do_install_EnchantedRestraintsPatch_isCalled),
                });
                g.add.Button({
                    id: 'install_EnchantedRestraintsPatch',
                    text: StringTable['install_EnchantedRestraintsPatch'],
                    onClick: () => {
                        thisRef.do_install_EnchantedRestraintsPatch();
                        // c.findComponentById('isModInit')!.setText(StringTable.isModInitMask(thisRef.do_install_EnchantedRestraintsPatch_isCalled));
                    }
                });
            }

            {
                const g = c.add.Group({
                    id: 'isInstalled',
                    title: StringTable.isInstalledMask(StateEnchantedRestraintsPatch.isInit()),
                }).add.Flex({
                    direction: 'column',
                });
                g.add.Checkbox({
                    id: 'isAutoInstallEnchantedRestraintsPatch',
                    label: () => StringTable.isAutoInstallEnchantedRestraintsPatchMask(StateEnchantedRestraintsPatch.AutoInstall),
                    checked: makeDataAccessor(StateEnchantedRestraintsPatch, 'AutoInstall'),
                });
                // g.add.Label({
                //     text: makeRef(StateEnchantedRestraintsPatch, 'AutoInstall', v => '' + v),
                // });
                // g.add.Label({
                //     text: '' + StateEnchantedRestraintsPatch.AutoInstall,
                // });
                // g.add.Label({
                //     text: () => '' + StateEnchantedRestraintsPatch.AutoInstall,
                // });
            }


        }


        this.appRef.markDirty();
        return true;
    }

}

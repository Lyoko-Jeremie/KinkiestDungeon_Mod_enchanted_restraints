import {
    AppRoot, computed,
    createZoneWrapper,
    ISelectOption,
    type IZoneWrapper,
    makeDataAccessor,
    makeRef,
    signal
} from '@PortableSimpleUi';
// import themeString from '@PortableSimpleUi/theme/css/theme.css?inlineText';
import {DEFAULT_THEME_CSS as themeString} from '@PortableSimpleUi/theme/index';
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
                // this.appContainerIFrame.contentDocument!.head.appendChild(document.createElement('style')).textContent =
                //     `html { overflow-y: hidden; }`;
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

    // =========================================================================

    signalTable = {
        'PrintNowAllReputationStateList': signal<{ god: ISelectOption[], faction: ISelectOption[] }>({
            god: [],
            faction: [],
        }),
        'PrintNowAllReputationStateListString': signal<string>(''),
        'NowChoiceList': signal<string>(''),
        'ChoiceAddOneSelect': signal<ISelectOption[]>([]),
        'ChoiceAddOneFilterSelect': signal<ISelectOption[]>([]),
    } as const;

    calcGoddessRepKeyListSelect = () => {
        return this.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GoddessRepKeyList().map(T => {
            return {
                label: `${T}[${StringTable.KinkyDungeonShrine2I18N(T)}]`,
                value: T,
            };
        });
    }
    flushPrintNowAllReputationStateList = () => {
        // const rGod = this.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GetAllGoddessRep().map(T => {
        //     return `${T[0]}[${StringTable.KinkyDungeonShrine2I18N(T[0])}]:${T[1]}`;
        // }).join('\n');
        // const rFaction = this.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GetAllFactionRelations().map(T => {
        //     const r = StringTable.KinkyDungeonKinkyDungeonFaction2I18N(T[0]);
        //     return [r[1], `${T[0]}[${r[0]}]:${T[1]}`] as [boolean, string];
        // }).sort((a, b) => {
        //     if (a[0] === b[0]) {
        //         return 0;
        //     }
        //     if (a[0] && !b[0]) {
        //         return -1;
        //     }
        //     return 1;
        // }).map(T => T[1]).join('\n');
        // this.gmc!.fields['PrintNowAllReputationStateList'].value = rGod + '\n------------\n' + rFaction;
        // this.gmc!.fields['PrintNowAllReputationStateList'].reload();
        //
        //
        // let v = thisRef.gmc!.fields['GoddessRepSelect'].value as string;
        // v = v.split('[')[0];
        const listGod = this.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GetAllGoddessRep().map<ISelectOption>(T => {
            return {
                label: `${T[0]}[${StringTable.KinkyDungeonShrine2I18N(T[0])}]:${T[1]}`,
                value: T[0],
            };
        });
        const listFaction = this.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GetAllFactionRelations().map<ISelectOption & {
            k: boolean
        }>(T => {
            const r = StringTable.KinkyDungeonKinkyDungeonFaction2I18N(T[0]);
            return {
                label: `${T[0]}[${r[0]}]:${T[1]}`,
                value: T[0],
                k: r[1],
            };
        }).sort((a, b) => {
            if (a.k === b.k) {
                return 0;
            }
            if (a.k && !b.k) {
                return -1;
            }
            return 1;
        });
        this.signalTable.PrintNowAllReputationStateList.set({
            god: listGod,
            faction: listFaction,
        });
        this.signalTable.PrintNowAllReputationStateListString.set(
            listGod.map(T => T.label).join('\n') + '\n------------\n' + listFaction.map(T => T.label).join('\n')
        );
    }
    calcChoiceAddOneSelect = () => {
        this.signalTable.ChoiceAddOneSelect.set(
            this.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData()
                .map(T => ({value: T.keyName, label: `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}`}))
        );
    }
    calcChoiceAddOneFilterSelect = () => {
        this.signalTable.ChoiceAddOneFilterSelect.set(
            this.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceGetAllValidChoiceData()
                .map(T => ({value: T.keyName, label: `${T.count}. ${T.name}[${T.keyName}]:${T.selected ? '██' : '_'}`}))
        );
    }

    // =========================================================================

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
        // this.appRef.rootElement.style.maxWidth = '100%';
        this.appRef.rootElement.style.width = '100%';
        this.appRef.rootElement.style.height = '100%';
        this.appRef.rootElement.style.margin = '0';
        this.appRef.rootElement.style.padding = '0';
        this.appRef.rootElement.style.overflowY = 'hidden';

        // this.appRef.host.style.maxWidth = '100%';
        this.appRef.host.style.width = '100%';
        this.appRef.host.style.margin = '0';
        this.appRef.host.style.padding = '0';
        this.appRef.host.style.overflowY = 'hidden';
        // this.appRef.root.style.pointerEvents = 'initial';
        // this.appRef.root.style.position = 'relative';
        // this.appRef.root.style.zIndex = '1';

        const thisRef: typeof this = this;

        const rootFlex = this.appRef.add.Flex({
            id: 'rootFlex',
            style: {
                backgroundColor: '#f0f0f0',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                overflowY: 'scroll',
            },
        });

        // mod title
        {
            const titleFlex = rootFlex.add.Flex({
                style: {
                    backgroundColor: '#f0f0f0',
                    flexDirection: 'column',
                    width: '100%',
                    gap: '15px',
                    margin: '20px 0',
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

        // tabs
        const tabs = rootFlex.add.Tabs({
            style: {
                margin: '20px',
            },
        });

        // tab install mod
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
                g.add.Divider({margin: '20px 0'});
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

        // ApplyModRestraint
        {

            const c = tabs.addTab({
                id: 'ApplyModRestraint Section'.replaceAll(' ', '_'),
                title: StringTable['ApplyModRestraint Section'],
            }).Flex({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });

            c.add.Button({
                id: 'ApplyModRestraint',
                text: StringTable['ApplyModRestraint'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.ApplyModRestraint();
                }
            });
        }

        // Map
        {
            const c = tabs.addTab({
                id: 'Map Section'.replaceAll(' ', '_'),
                title: StringTable['Map Section'],
            }).Flex({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });

            const MapKKSsMGetData = signal('');
            c.add.Button({
                id: 'MapKKSsMGet',
                text: StringTable['MapKKSsMGet'],
                onClick: () => {
                    const r = thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.drawMapCanvas_KKSs(MapKKSsMGetDataCanvas.getCanvas());
                    MapKKSsMGetData.set(thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.MapKKSsMGet());
                },
            });
            const MapKKSsMGetDataCanvas = c.add.Canvas({
                id: 'MapKKSsMGetDataCanvas',
            })
            c.add.TextArea({
                id: 'MapKKSsMGetData',
                value: MapKKSsMGetData,
                readOnly: true,
            });

            const MapKSsMGetData = signal('');
            c.add.Button({
                id: 'MapKSsMGet',
                text: StringTable['MapKSsMGet'],
                onClick: () => {
                    const r =
                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.drawMapCanvas_KSs(MapKSsMGetDataCanvas.getCanvas());
                    MapKSsMGetData.set(thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.MapKSsMGet());
                },
            });
            const MapKSsMGetDataCanvas = c.add.Canvas({
                id: 'MapKSsMGetDataCanvas',
            })
            c.add.TextArea({
                id: 'MapKSsMGetData',
                value: MapKSsMGetData,
                readOnly: true,
            });

        }

        // ApplyRestraint
        {
            const c = tabs.addTab({
                id: 'ApplyRestraint Section'.replaceAll(' ', '_'),
                title: StringTable['ApplyRestraint Section'],
            }).Flex({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });

            c.add.Button({
                id: 'RemoveAllRestraint',
                text: StringTable['RemoveAllRestraint'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveAllRestraint();
                },
            });
            c.add.Button({
                id: 'RemoveAllRestraintDynamic',
                text: StringTable['RemoveAllRestraintDynamic'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveAllRestraintDynamic();
                },
            });
            c.add.Button({
                id: 'ForceClearRestraint',
                text: StringTable['ForceClearRestraint'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ForceClearRestraint();
                },
            });
        }

        // Keys
        {
            const c = tabs.addTab({
                id: 'Keys Section'.replaceAll(' ', '_'),
                title: StringTable['Keys Section'],
            }).Group({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });

            const style = {
                margin: '0.15em 0.25em',
            };

            c.add.Button({
                id: 'AddManyKeys',
                text: StringTable['AddManyKeys'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyKeys();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'AddManyPotion',
                text: StringTable['AddManyPotion'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyPotion();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'AddManyGold',
                text: StringTable['AddManyGold'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddManyGold();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'AddDistraction',
                text: StringTable['AddDistraction'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddDistraction();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'ZeroDistraction',
                text: StringTable['ZeroDistraction'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ZeroDistraction();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'AddAllRestraints',
                text: StringTable['AddAllRestraints'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllRestraints();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'AddAllOutfit',
                text: StringTable['AddAllOutfit'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllOutfit();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'AddAllConsumables',
                text: StringTable['AddAllConsumables'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllConsumables();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'AddAllWeapon',
                text: StringTable['AddAllWeapon'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllWeapon();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'AddAllKeyTools',
                text: StringTable['AddAllKeyTools'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddAllKeyTools();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'RemoveAllKeyTools',
                text: StringTable['RemoveAllKeyTools'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveAllKeyTools();
                    thisRef.playDing(PlayDingType.dong);
                },
                style,
            });
            c.add.Button({
                id: 'AddRecyclerInput',
                text: StringTable['AddRecyclerInput'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddRecyclerInput();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
        }

        // SpellPoints
        {
            const c = tabs.addTab({
                id: 'SpellPoints Section'.replaceAll(' ', '_'),
                title: StringTable['SpellPoints Section'],
            }).Group({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });

            const style = {
                margin: '0.15em 0.25em',
            };

            c.add.Button({
                id: 'AddSpellPoints',
                text: StringTable['AddSpellPoints'] + '+10',
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChangeSpellPoints(10);
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'ZeroSpellPoints',
                text: StringTable['ZeroSpellPoints'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChangeSpellPoints(0);
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'NegativeSpellPoints',
                text: StringTable['NegativeSpellPoints'] + '-10',
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChangeSpellPoints(-10);
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
        }

        // Relations
        {
            const c = tabs.addTab({
                id: 'Relations Section'.replaceAll(' ', '_'),
                title: StringTable['Relations Section'],
            }).Group({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });

            const style = {
                margin: '0.15em 0.25em',
            };

            let g;
            g = c.add.Group({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });
            g.add.Button({
                id: 'FullAllRelations',
                text: StringTable['FullAllRelations'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.FullAllRelations();
                    thisRef.flushPrintNowAllReputationStateList();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            g.add.Button({
                id: 'ZeroAllRelations',
                text: StringTable['ZeroAllRelations'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ZeroAllRelations();
                    thisRef.flushPrintNowAllReputationStateList();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            g.add.Button({
                id: 'NegativeAllRelations',
                text: StringTable['NegativeAllRelations'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.NegativeAllRelations();
                    thisRef.flushPrintNowAllReputationStateList();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });

            g = c.add.Group({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });
            g.add.Button({
                id: 'FullAllGoddess',
                text: StringTable['FullAllGoddess'] + ' +50',
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.FullAllGoddess();
                    thisRef.flushPrintNowAllReputationStateList();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            g.add.Button({
                id: 'ZeroAllGoddess',
                text: StringTable['ZeroAllGoddess'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ZeroAllGoddess();
                    thisRef.flushPrintNowAllReputationStateList();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            g.add.Button({
                id: 'NegativeAllGoddess',
                text: StringTable['NegativeAllGoddess'] + ' +50',
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.NegativeAllGoddess();
                    thisRef.flushPrintNowAllReputationStateList();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });

            g = c.add.Group({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });
            g.add.Button({
                id: 'FullAllReputationState',
                text: StringTable['FullAllReputationState'] + ' +50',
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.FullAllReputationState();
                    thisRef.flushPrintNowAllReputationStateList();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            g.add.Button({
                id: 'ClearAllReputationState',
                text: StringTable['ClearAllReputationState'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ClearAllReputationState();
                    thisRef.flushPrintNowAllReputationStateList();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            g.add.Button({
                id: 'NegativeAllReputationState',
                text: StringTable['NegativeAllReputationState'] + ' -50',
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.NegativeAllReputationState();
                    thisRef.flushPrintNowAllReputationStateList();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });

            {
                const g = c.add.Group({
                    id: 'GoddessRepSelect',
                    title: StringTable['GoddessRepSelect'],

                });
                const GoddessRepSelect = g.add.Select({
                    id: 'GoddessRepSelect',
                    options: () => this.calcGoddessRepKeyListSelect(),
                    style: {
                        ...style,
                        display: 'block',
                    },
                });
                g.add.Button({
                    id: 'AddSelectedGoddessRep',
                    text: StringTable['AddSelectedGoddessRep'] + ' +50',
                    onClick: () => {
                        const v = GoddessRepSelect.state.value;
                        if (!v) {
                            return;
                        }
                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GoddessRepChange(v, 50);
                        thisRef.flushPrintNowAllReputationStateList();
                        thisRef.playDing(PlayDingType.ding);
                    },
                    style,
                });
                g.add.Button({
                    id: 'ClearSelectedGoddessRep',
                    text: StringTable['ClearSelectedGoddessRep'],
                    onClick: () => {
                        const v = GoddessRepSelect.state.value;
                        if (!v) {
                            return;
                        }
                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GoddessRepSet(v, 0);
                        thisRef.flushPrintNowAllReputationStateList();
                        thisRef.playDing(PlayDingType.ding);
                    },
                    style,
                });
                g.add.Button({
                    id: 'NegativeSelectedGoddessRep',
                    text: StringTable['NegativeSelectedGoddessRep'] + ' -50',
                    onClick: () => {
                        const v = GoddessRepSelect.state.value;
                        if (!v) {
                            return;
                        }
                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.GoddessRepChange(v, -50);
                        thisRef.flushPrintNowAllReputationStateList();
                        thisRef.playDing(PlayDingType.ding);
                    },
                    style,
                });
            }

            g = c.add.Group({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });
            g.add.Button({
                id: 'PrintNowAllReputationState',
                text: StringTable['PrintNowAllReputationState'],
                onClick: () => {
                    thisRef.flushPrintNowAllReputationStateList();
                },
                ...style,
            });
            g.add.TextArea({
                id: 'PrintNowAllReputationStateList',
                value: this.signalTable.PrintNowAllReputationStateListString,
                readOnly: true,
                style: {
                    ...style,
                    display: 'block',
                    minHeight: '30em',
                    width: '100%',
                },
            });

        }

        // Bootstrap
        {
            const c = tabs.addTab({
                id: 'Bootstrap Section'.replaceAll(' ', '_'),
                title: StringTable['Bootstrap Section'],
            }).Group({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });

            const style = {
                margin: '0.15em 0.25em',
            };

            c.add.Button({
                id: 'BootstrapAllGood',
                text: StringTable['BootstrapAllGood'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapAllGood();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'BootstrapSpellChoicesTable',
                text: StringTable['BootstrapSpellChoicesTable'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapSpellChoicesTable();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'BootstrapFullAllSpells',
                text: StringTable['BootstrapFullAllSpells'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AllSpells();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'BootstrapSimpleGood',
                text: StringTable['BootstrapSimpleGood'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapSimpleGood();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'BootstrapAllNegative',
                text: StringTable['BootstrapAllNegative'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.BootstrapAllNegative();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'Add1000MaxState',
                text: StringTable['Add1000MaxState'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.Add1000MaxState();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });

        }

        // Enable
        {
            const c = tabs.addTab({
                id: 'Enable Section'.replaceAll(' ', '_'),
                title: StringTable['Enable Section'],
            }).Group({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });

            const style = {
                margin: '0.15em 0.25em',
            };

            c.add.Button({
                id: 'EnableAllCheats',
                text: StringTable['EnableAllCheats'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.EnableAllCheats();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'DisableAllCheats',
                text: StringTable['DisableAllCheats'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.DisableAllCheats();
                    thisRef.playDing(PlayDingType.dong);
                },
                style,
            });
            c.add.Button({
                id: 'EnableFullState',
                text: StringTable['EnableFullState'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.EnableFullState();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'DisableFullState',
                text: StringTable['DisableFullState'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.DisableFullState();
                    thisRef.playDing(PlayDingType.dong);
                },
                style,
            });
            c.add.Button({
                id: 'EnableQuickness5',
                text: StringTable['EnableQuickness5'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.EnableQuickness5();
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'DisableQuickness5',
                text: StringTable['DisableQuickness5'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.DisableQuickness5();
                    thisRef.playDing(PlayDingType.dong);
                },
                style,
            });
        }

        // Dynamic Hook Cheats
        {
            const c = tabs.addTab({
                id: 'Dynamic Hook Cheats Section'.replaceAll(' ', '_'),
                title: StringTable['Dynamic Hook Cheats Section'],
            }).Group({
                title: StringTable['Dynamic Hook Cheats Section'],
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });

            const style = {
                margin: '0.15em 0.25em',
            };

            c.add.Button({
                id: 'DynamicHookEnableAlwaysCanUseAnyWeapon',
                text: StringTable['DynamicHookEnableAlwaysCanUseAnyWeapon'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.dynamicCheatsHook.enableHook('AlwaysCanUseAnyWeapon');
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'DynamicHookDisableAlwaysCanUseAnyWeapon',
                text: StringTable['DynamicHookDisableAlwaysCanUseAnyWeapon'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.dynamicCheatsHook.disableHook('AlwaysCanUseAnyWeapon');
                    thisRef.playDing(PlayDingType.dong);
                },
                style,
            });
            c.add.Button({
                id: 'DynamicHookEnableAlwaysCanDrink',
                text: StringTable['DynamicHookEnableAlwaysCanDrink'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.dynamicCheatsHook.enableHook('AlwaysCanDrink');
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'DynamicHookDisableAlwaysCanDrink',
                text: StringTable['DynamicHookDisableAlwaysCanDrink'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.dynamicCheatsHook.disableHook('AlwaysCanDrink');
                    thisRef.playDing(PlayDingType.dong);
                },
                style,
            });
            c.add.Button({
                id: 'DynamicHookEnableNeverMiscastMagic',
                text: StringTable['DynamicHookEnableNeverMiscastMagic'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.dynamicCheatsHook.enableHook('NeverMiscastMagic');
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'DynamicHookDisableNeverMiscastMagic',
                text: StringTable['DynamicHookDisableNeverMiscastMagic'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.dynamicCheatsHook.disableHook('NeverMiscastMagic');
                    thisRef.playDing(PlayDingType.dong);
                },
                style,
            });
            c.add.Button({
                id: 'DynamicHookEnableNeverSlow',
                text: StringTable['DynamicHookEnableNeverSlow'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.dynamicCheatsHook.enableHook('NeverSlow');
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'DynamicHookDisableNeverSlow',
                text: StringTable['DynamicHookDisableNeverSlow'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.dynamicCheatsHook.disableHook('NeverSlow');
                    thisRef.playDing(PlayDingType.dong);
                },
                style,
            });
            c.add.Button({
                id: 'DynamicHookEnableNeverMiss',
                text: StringTable['DynamicHookEnableNeverMiss'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.dynamicCheatsHook.enableHook('NeverMiss');
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'DynamicHookDisableNeverMiss',
                text: StringTable['DynamicHookDisableNeverMiss'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.dynamicCheatsHook.disableHook('NeverMiss');
                    thisRef.playDing(PlayDingType.dong);
                },
                style,
            });
            c.add.Button({
                id: 'DynamicHookEnableAlwaysCanUseMagic',
                text: StringTable['DynamicHookEnableAlwaysCanUseMagic'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.dynamicCheatsHook.enableHook('AlwaysCanUseMagic');
                    thisRef.playDing(PlayDingType.ding);
                },
                style,
            });
            c.add.Button({
                id: 'DynamicHookDisableAlwaysCanUseMagic',
                text: StringTable['DynamicHookDisableAlwaysCanUseMagic'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.dynamicCheatsHook.disableHook('AlwaysCanUseMagic');
                    thisRef.playDing(PlayDingType.dong);
                },
                style,
            });
        }

        // Choice
        {
            const c = tabs.addTab({
                id: 'Choice Section'.replaceAll(' ', '_'),
                title: StringTable['Choice Section'],
            }).Group({
                title: StringTable['Choice Section'],
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });

            const style = {
                margin: '0.15em 0.25em',
            };

            c.add.Button({
                id: 'ChoiceAddCheatChoiceGoodEscape',
                text: StringTable['ChoiceAddCheatChoiceGoodEscape'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodEscape();
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceGoodEnhance',
                text: StringTable['ChoiceAddCheatChoiceGoodEnhance'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodEnhance();
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceGoodMid',
                text: StringTable['ChoiceAddCheatChoiceGoodMid'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodMid();
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceBadMid',
                text: StringTable['ChoiceAddCheatChoiceBadMid'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadMid();
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceBadMid',
                text: StringTable['ChoiceAddCheatChoiceBadMid'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadMid();
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceMid',
                text: StringTable['ChoiceAddCheatChoiceMid'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceMid();
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceSex',
                text: StringTable['ChoiceAddCheatChoiceSex'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceSex();
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceSexRemove',
                text: StringTable['ChoiceAddCheatChoiceSexRemove'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceSex(true);
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceSexClean',
                text: StringTable['ChoiceAddCheatChoiceSexClean'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceSexClean();
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceBadNegative',
                text: StringTable['ChoiceAddCheatChoiceBadNegative'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadNegative();
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceBadNoEscape',
                text: StringTable['ChoiceAddCheatChoiceBadNoEscape'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadNoEscape();
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceGoodVision',
                text: StringTable['ChoiceAddCheatChoiceGoodVision'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceGoodVision();
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceBadVision',
                text: StringTable['ChoiceAddCheatChoiceBadVision'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceBadVision();
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceMoreKinkyFurniture',
                text: StringTable['ChoiceAddCheatChoiceMoreKinkyFurniture'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceMoreKinkyFurniture();
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceMap',
                text: StringTable['ChoiceAddCheatChoiceMap'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceMap();
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceMapAbsurd',
                text: StringTable['ChoiceAddCheatChoiceMapAbsurd'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceMapAbsurd();
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceNowhere',
                text: StringTable['ChoiceAddCheatChoiceNowhere'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceNowhere();
                },
                style,
            });
            c.add.Button({
                id: 'ChoiceAddCheatChoiceSuperMarket',
                text: StringTable['ChoiceAddCheatChoiceSuperMarket'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoiceAddCheatChoiceSuperMarket();
                },
                style,
            });

            {
                const g = c.add.Group({
                    title: StringTable['ChoicePrintNowChoice'],
                    styleContainer: {display: 'flex', flexDirection: 'column'},
                });

                g.add.TextArea({
                    id: 'NowChoiceList',
                    value: this.signalTable.NowChoiceList,
                    readOnly: true,
                    style: {
                        minHeight: '25em',
                    },
                });
                g.add.Button({
                    id: 'ChoicePrintNowChoice',
                    text: StringTable['ChoicePrintNowChoice'],
                    onClick: () => {
                        this.signalTable.NowChoiceList.set(thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoicePrintNowChoice());
                    },
                });
            }
        }

        // ChoiceAddOne
        {
            const c = tabs.addTab({
                id: 'ChoiceAddOne Section'.replaceAll(' ', '_'),
                title: StringTable['ChoiceAddOne Section'],
            }).Flex({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });

            const style = {
                margin: '0.15em 0.25em',
            };

            {
                const g = c.add.Group({
                    title: StringTable['ChoiceSelect'],
                    styleContainer: {display: 'flex', flexDirection: 'column'},
                })
                const ChoiceAddOneSelect = g.add.Autocomplete({
                    id: 'ChoiceAddOneSelect',
                    options: this.signalTable.ChoiceAddOneSelect,
                    style,
                });
                this.calcChoiceAddOneSelect();
                g.add.Button({
                    id: 'ChoiceAddCheatChoiceGoodEscape',
                    text: StringTable['ChoiceAddCheatChoiceGoodEscape'],
                    onClick: () => {
                        const N = ChoiceAddOneSelect.state.selectedKey;
                        if (N) {
                            thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats._AddCheatChoice(N);
                            this.calcChoiceAddOneSelect();
                        }
                    },
                    style,
                });
                g.add.Button({
                    id: 'ChoiceRemoveOne',
                    text: StringTable['ChoiceRemoveOne'],
                    onClick: () => {
                        const N = ChoiceAddOneSelect.state.selectedKey;
                        if (N) {
                            thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats._AddCheatChoice(N, true);
                            this.calcChoiceAddOneSelect();
                        }
                    },
                    style,
                });
            }

            {
                const g = c.add.Group({
                    title: StringTable['ChoiceAddOneFilterSelect'],
                    styleContainer: {display: 'flex', flexDirection: 'column'},
                })
                const ChoiceAddOneFilterSelect = g.add.Autocomplete({
                    id: 'ChoiceAddOneFilterSelect',
                    options: this.signalTable.ChoiceAddOneFilterSelect,
                    style,
                });
                this.calcChoiceAddOneFilterSelect();
                g.add.Button({
                    id: 'ChoiceFilterAddOne',
                    text: StringTable['ChoiceFilterAddOne'],
                    onClick: () => {
                        const N = ChoiceAddOneFilterSelect.state.selectedKey;
                        if (N) {
                            thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats._AddCheatChoice(N, true);
                            this.calcChoiceAddOneFilterSelect();
                        }
                    },
                    style,
                });
                g.add.Button({
                    id: 'ChoiceFilterRemoveOne',
                    text: StringTable['ChoiceFilterRemoveOne'],
                    onClick: () => {
                        const N = ChoiceAddOneFilterSelect.state.selectedKey;
                        if (N) {
                            thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats._AddCheatChoice(N, false);
                            this.calcChoiceAddOneFilterSelect();
                        }
                    },
                    style,
                });
            }
        }

        // ChoicePrint
        {
            const c = tabs.addTab({
                id: 'ChoicePrint Section'.replaceAll(' ', '_'),
                title: StringTable['ChoicePrint Section'],
            }).Flex({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });

            // c.add.Button({
            //     id: 'ChoicePrintAllValidChoice',
            //     text: StringTable['ChoicePrintAllValidChoice'],
            //     onClick: () => {
            //     },
            // });
            c.add.TextArea({
                id: 'ChoicePrintAllValidChoiceList',
                value: () => thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ChoicePrintAllValidChoice(),
                readOnly: true,
                style: {
                    minHeight: '35em',
                },
            });
        }

        // AllSpellsList
        {
            const c = tabs.addTab({
                id: 'AllSpellsList Section'.replaceAll(' ', '_'),
                title: StringTable['AllSpellsList'],
            }).Group({
                title: StringTable['AllSpellsList'],
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });

            c.add.Table({
                id: 'AllSpellsList',
                columns: [
                    {title: 'Name', key: 'n'},
                    {title: 'Spell', key: 's'},
                    {title: 'Description', key: 'd'},
                ],
                dataSource: () => thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListAllSpells()
                    .map(T => T.name)
                    .map(T => {
                        return {
                            n: T,
                            s: TextGet('KinkyDungeonSpell' + T),
                            d: TextGet('KinkyDungeonSpellDescription' + T),
                        };
                    }),
            });

        }

        // NowSpellsList
        {
            const c = tabs.addTab({
                id: 'NowSpellsList Section'.replaceAll(' ', '_'),
                title: StringTable['NowSpellsList'],
            }).Group({
                title: StringTable['NowSpellsList'],
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });

            c.add.Table({
                id: 'NowSpellsList',
                columns: [
                    {title: 'Name', key: 'n'},
                    {title: 'Spell', key: 's'},
                    {title: 'Description', key: 'd'},
                ],
                dataSource: () => thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListNowSpells()
                    .map(T => T.name)
                    .map(T => {
                        return {
                            n: T,
                            s: TextGet('KinkyDungeonSpell' + T),
                            d: TextGet('KinkyDungeonSpellDescription' + T),
                        };
                    }),
            });
        }

        // FullAllSpells
        {
            const c = tabs.addTab({
                id: 'FullAllSpells Section'.replaceAll(' ', '_'),
                title: StringTable['FullAllSpells'],
            }).Group({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });

            c.add.Button({
                id: 'FullAllSpells',
                text: StringTable['FullAllSpells'],
                onClick: () => {
                    thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AllSpells();
                    thisRef.playDing(PlayDingType.ding);
                },
                style: {
                    margin: '0.15em 0.25em',
                },
            });

            let g;
            g = c.add.Group({
                title: StringTable['SpellsAddOneSelect'],
            });

            const style = {
                margin: '0.15em 0.25em',
            };

            const SpellsAddOneSelect = g.add.Autocomplete({
                id: 'SpellsAddOneSelect',
                options: thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListAllSpells()
                    .filter(T => !thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListNowSpells().find(T2 => T2.name === T.name))
                    .map(T => T.name)
                    .map(T => {
                        return {
                            label: `${T}|[${TextGet('KinkyDungeonSpell' + T)}]`,
                            value: T,
                        }
                    }),
                style,
            });
            g.add.Button({
                id: 'SpellsAddOne',
                text: StringTable['SpellsAddOne'],
                onClick: () => {
                    const N = SpellsAddOneSelect.state.selectedKey;
                    if (N) {
                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.AddOneSpell(N);
                    }
                },
                style,
            });

            g = c.add.Group({
                title: StringTable['SpellsRemoveOneSelect'],
            });

            const SpellsRemoveOneSelect = g.add.Autocomplete({
                id: 'SpellsRemoveOneSelect',
                options: thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.ListNowSpells()
                    .map(T => T.name)
                    .map(T => {
                        return {
                            label: `${T}|[${TextGet('KinkyDungeonSpell' + T)}]`,
                            value: T,
                        }
                    }),
                style,
            });
            g.add.Button({
                id: 'SpellsRemoveOne',
                text: StringTable['SpellsRemoveOne'],
                onClick: () => {
                    const N = SpellsRemoveOneSelect.state.selectedKey;
                    if (N) {
                        thisRef.winRef.KinkyDungeonMod_EnchantedRestraints.Cheats.RemoveOneSpell(N);
                    }
                },
                style,
            });
        }

        // DebugSee
        {
            const c = tabs.addTab({
                id: 'DebugSee Section'.replaceAll(' ', '_'),
                title: StringTable['DebugSee Section'],
            }).Group({
                style: {
                    flexDirection: 'column',
                    gap: '20px',
                },
            });
        }

        this.appRef.markDirty();
        return true;
    }

}

import 'core-js/full';

import {App} from '@PortableUi/adaptor/App';
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
        return '1.89';
    }

    // avoid same Math.random
    rIdP = 0;

    // get a unique string as id
    rId() {
        return '' + (++this.rIdP) + Math.random();
    }

    appContainer: HTMLElement;

    constructor(
        public winRef: Window
    ) {
        setTimeout(this.waitKDLoadingFinished, 100);

        this.appContainer = document.createElement('div');
        document.body.appendChild(this.appContainer);
        this.appContainer.style.zIndex = '9999';
        this.appContainer.style.width = '100%';
        this.appContainer.style.height = '100%';
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

    initMod = () => {
        const thisRef = this;
        thisRef.winRef.addEventListener('keydown', (event) => {
            console.log('keydown', event);
            if (event.altKey && (event.key === 'Q' || event.key === 'q')) {
                if (this.appRef) {
                    this.appRef.destroy();
                    this.appRef = undefined;
                } else {
                    KDOptOut = true;
                    this.portableGuiCreator();
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
                if (this.appRef) {
                    this.appRef.destroy();
                    this.appRef = undefined;
                } else {
                    KDOptOut = true;
                    this.portableGuiCreator();
                }
            });
            document.body.appendChild(startBanner);
        }
    };

    appRef?: App;

    portableGuiCreator = () => {
        this.appRef = new App(this.appContainer, {
            id: 'enchantedRestraintsApp',
            styleIsolation: {
                mode: 'shadow',
            },
        });

        const titleFlex = this.appRef.addFlex({
            direction: 'vertical',
            gap: 15,
            padding: 20,
            backgroundColor: '#f0f0f0',
            width: '100%',
        });

        titleFlex.addLabel({
            text: 'KinkiestDungeon enchanted_restraints Mod',
            style: {
                fontSize: '1.5em',
                fontWeight: 'bold',
            },
        });
        titleFlex.addLabel({
            text: 'isInit',
        });

        const bodyFlex = this.appRef.addFlex({
            direction: 'horizontal',
        });


    };

}

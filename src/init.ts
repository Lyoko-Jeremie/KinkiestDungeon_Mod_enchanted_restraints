import './polyfill';
// import './GreasemonkeyScript/CreateGui';
// import {CreateGui} from './GreasemonkeyScript/CreateGui';
// import {CreateGui} from './GUI_PortableUi/CreatePortableUi';
import {CreateGui} from './GUI_PortableSimpleUi/CreatePortableSimpleUi';
// import {CreateGuiTweakPane} from "./GuiTweakPane";

// import {createModZone} from '@PortableUi/adaptor/ModZone';
import {createZoneWrapper} from '@PortableSimpleUi';

window.gEnchantedRestraintsCreateGui_modZone = createZoneWrapper('EnchantedRestraintsCreateGui');

if (!window.gEnchantedRestraintsCreateGui) {
    window.gEnchantedRestraintsCreateGui_modZone.runGuarded(() => {
        window.gEnchantedRestraintsCreateGui = new CreateGui(window, window.gEnchantedRestraintsCreateGui_modZone);
    });
} else {
    console.log('gEnchantedRestraintsCreateGui already exists');
}
// if (!window.gEnchantedRestraintsTweakPanel) {
//     window.gEnchantedRestraintsTweakPanel = new CreateGuiTweakPane(window);
// } else {
//     console.log('gEnchantedRestraintsTweakPanel already exists');
// }


// import {EnchantedRestraintsPatch, isInit} from './initMod';
//
// // this do in follow
// // window.KinkyDungeonMod_EnchantedRestraints.Cheats.setupHook(window);
// // EnchantedRestraintsPatch();


import './polyfill';
import './GreasemonkeyScript/CreateGui';
import {CreateGui} from './GreasemonkeyScript/CreateGui';
import {CreateGuiTweakPane} from "./GuiTweakPane";

if (!window.gEnchantedRestraintsCreateGui) {
    window.gEnchantedRestraintsCreateGui = new CreateGui(window);
} else {
    console.log('gEnchantedRestraintsCreateGui already exists');
}
if (!window.gEnchantedRestraintsTweakPanel) {
    window.gEnchantedRestraintsTweakPanel = new CreateGuiTweakPane(window);
} else {
    console.log('gEnchantedRestraintsTweakPanel already exists');
}


// import {EnchantedRestraintsPatch, isInit} from './initMod';
//
// // this do in follow
// // window.KinkyDungeonMod_EnchantedRestraints.Cheats.setupHook(window);
// // EnchantedRestraintsPatch();


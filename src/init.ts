import './polyfill';
import './GreasemonkeyScript/CreateGui';
import {CreateGui} from './GreasemonkeyScript/CreateGui';

if (!window.gEnchantedRestraintsCreateGui) {
    window.gEnchantedRestraintsCreateGui = new CreateGui(window);
} else {
    console.log('gEnchantedRestraintsCreateGui already exists');
}


// import {EnchantedRestraintsPatch, isInit} from './initMod';
//
// // this do in follow
// // window.KinkyDungeonMod_EnchantedRestraints.Cheats.setupHook(window);
// // EnchantedRestraintsPatch();


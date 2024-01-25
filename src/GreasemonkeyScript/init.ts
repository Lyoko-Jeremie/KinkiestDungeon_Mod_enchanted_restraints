// copy Mod ref from window to unsafeWindow
unsafeWindow.KinkyDungeonMod_EnchantedRestraints = window.KinkyDungeonMod_EnchantedRestraints;
unsafeWindow.Mod_EnchantedRestraints = window.Mod_EnchantedRestraints;

import './CreateGui';
import {CreateGui} from './CreateGui';

if (!window.gEnchantedRestraintsCreateGui) {
    window.gEnchantedRestraintsCreateGui = new CreateGui(unsafeWindow);
} else {
    console.log('gEnchantedRestraintsCreateGui already exists');
}

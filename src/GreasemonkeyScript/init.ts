// copy Mod ref from window to unsafeWindow
unsafeWindow.KinkyDungeonMod_EnchantedRestraints = window.KinkyDungeonMod_EnchantedRestraints;
unsafeWindow.Mod_EnchantedRestraints = window.Mod_EnchantedRestraints;

import './CreateGui';
import {CreateGui} from './CreateGui';

if (!unsafeWindow.gEnchantedRestraintsCreateGui) {
    console.log('gEnchantedRestraintsCreateGui starting');
    unsafeWindow.gEnchantedRestraintsCreateGui = new CreateGui(unsafeWindow);
} else {
    console.log('gEnchantedRestraintsCreateGui already exists');
}

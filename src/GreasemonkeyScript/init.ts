// copy Mod ref from window to unsafeWindow
unsafeWindow.KinkyDungeonMod_EnchantedRestraints = window.KinkyDungeonMod_EnchantedRestraints;
unsafeWindow.Mod_EnchantedRestraints = window.Mod_EnchantedRestraints;

import './CreateGui';
import {CreateGui} from './CreateGui';

const gCreateGui: CreateGui = new CreateGui(unsafeWindow);

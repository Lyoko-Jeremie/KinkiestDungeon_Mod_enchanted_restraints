console.log("=============================enchanted_restraints init begin=============================");
console.time("enchanted_restraints init load time");


import {Cheats} from './Cheats/Cheats';
import {EnchantedRestraintsPatch, ApplyModRestraint} from './RestraintsPatch';


window.KinkyDungeonMod_EnchantedRestraints = window.KinkyDungeonMod_EnchantedRestraints || {};
// fast ref
window.Mod_EnchantedRestraints = window.KinkyDungeonMod_EnchantedRestraints;


// Cheats
window.KinkyDungeonMod_EnchantedRestraints.Cheats = new Cheats();

// RestraintsPatch
EnchantedRestraintsPatch();
window.KinkyDungeonMod_EnchantedRestraints.ApplyModRestraint = ApplyModRestraint;


console.log("disable Data Trace");
// disable Data Trace, to avoid cheats game data send to server
window.KDOptOut = true;

console.timeEnd("enchanted_restraints init load time");
console.log("=============================enchanted_restraints init end=============================");



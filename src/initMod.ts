console.log("=============================enchanted_restraints init begin=============================");
console.time("enchanted_restraints init load time");

// init before load
window.KinkyDungeonMod_EnchantedRestraints = window.KinkyDungeonMod_EnchantedRestraints || {};
// fast ref
window.Mod_EnchantedRestraints = window.KinkyDungeonMod_EnchantedRestraints;


import {Cheats} from './Cheats/Cheats';
import {EnchantedRestraintsPatch, setEdgeOnly, isInit} from './RestraintsPatch/RestraintsPatch';
import {ApplyModRestraint} from './RestraintsPatch/ApplyModRestraint';

export {EnchantedRestraintsPatch, isInit};

// Cheats
if (!window.KinkyDungeonMod_EnchantedRestraints.Cheats) {
    window.KinkyDungeonMod_EnchantedRestraints.Cheats = new Cheats();
}

// RestraintsPatch
// EnchantedRestraintsPatch();
window.KinkyDungeonMod_EnchantedRestraints.EnchantedRestraintsPatch = EnchantedRestraintsPatch;
window.KinkyDungeonMod_EnchantedRestraints.ApplyModRestraint = ApplyModRestraint;
window.KinkyDungeonMod_EnchantedRestraints.setEdgeOnly = setEdgeOnly;


console.log("disable Data Trace");
// disable Data Trace, to avoid cheats game data send to server
window.KDOptOut = true;

console.timeEnd("enchanted_restraints init load time");
console.log("=============================enchanted_restraints init end=============================");



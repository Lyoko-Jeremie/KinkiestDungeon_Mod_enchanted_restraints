import {
    patchVibeStruggle,
    inPlacePatch,
    addEnchantedItems,
    addGhostSlime,
    setEdgeOnly
} from "./EnchantedRestraintsPatch";
import {patchCnTranslate, addEnchantedTranslate} from "./PatchTranslate";
import {frozenClone} from "./PatchUtils";

export {setEdgeOnly};


let initFlag = false;

console.log("=============================enchanted_restraints RestraintsPatch.js begin=============================");
console.time("enchanted_restraints RestraintsPatch load time");


export function EnchantedRestraintsPatch() {
    if (initFlag) {
        console.log('EnchantedRestraintsPatch was initialed. skip.');
        return;
    }
    initFlag = true;
    // ======================================================

    KinkyDungeonRefreshRestraintsCache();

    console.log("=============================enchanted_restraints before vibeStruggle patch", frozenClone(KinkyDungeonRestraints));

    patchVibeStruggle();

    console.log("=============================enchanted_restraints before copy patch", frozenClone(KinkyDungeonRestraints));

    // KinkyDungeonRefreshRestraintsCache();

    addGhostSlime();

    addEnchantedItems();

    inPlacePatch();

    // KinkyDungeonRestraints.push(
    // );
    // KinkyDungeonRestraints.push(
    // );

    console.log("=============================enchanted_restraints", frozenClone(KinkyDungeonRestraints));

    // KinkyDungeonRestraints.push(
    // );

    KinkyDungeonRefreshRestraintsCache();

    patchCnTranslate();
    addEnchantedTranslate();

    KinkyDungeonRefreshRestraintsCache();
    console.log("=============================enchanted_restraints EnchantedRestraintsPatch end", KinkyDungeonRestraints);

}

console.timeEnd("enchanted_restraints RestraintsPatch load time");
console.log("=============================enchanted_restraints RestraintsPatch.js end=============================");





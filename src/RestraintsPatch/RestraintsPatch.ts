import {
    patchVibeStruggle,
    inPlacePatch,
    addEnchantedItems,
    addGhostSlime,
    setEdgeOnly, addEnchantedMaxVibeItems
} from "./EnchantedRestraintsPatch";
import {patchCnTranslate, addEnchantedTranslate} from "./PatchTranslate";
import {frozenClone} from "./PatchUtils";

export {setEdgeOnly};

let initFlag = false;

export const StateEnchantedRestraintsPatch = new class {
    isInit() {
        return initFlag;
    }

    set AutoInstall(value: boolean) {
        if (value) {
            localStorage.removeItem('KinkyDungeonMod_EnchantedRestraints.NotAutoInstall');
        } else {
            localStorage.setItem('KinkyDungeonMod_EnchantedRestraints.NotAutoInstall', '1');
        }
    }

    get AutoInstall() {
        return !localStorage.getItem('KinkyDungeonMod_EnchantedRestraints.NotAutoInstall');
    }
};


export function EnchantedRestraintsPatch() {
    if (initFlag) {
        console.log('EnchantedRestraintsPatch was initialed. skip.');
        return;
    }
    initFlag = true;
    console.log("=============================enchanted_restraints EnchantedRestraintsPatch() begin=============================");
    console.time("enchanted_restraints EnchantedRestraintsPatch() time");

    // ======================================================

    KinkyDungeonRefreshRestraintsCache();

    console.log("=============================enchanted_restraints before vibeStruggle patch", frozenClone(KinkyDungeonRestraints));

    patchVibeStruggle();

    console.log("=============================enchanted_restraints before copy patch", frozenClone(KinkyDungeonRestraints));

    // KinkyDungeonRefreshRestraintsCache();

    addGhostSlime();

    addEnchantedItems();
    addEnchantedMaxVibeItems();

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

    console.timeEnd("enchanted_restraints EnchantedRestraintsPatch() time");
    console.log("=============================enchanted_restraints EnchantedRestraintsPatch() end=============================");
}






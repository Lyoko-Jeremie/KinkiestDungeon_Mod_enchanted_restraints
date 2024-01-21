
export function ApplyModRestraint() {
    // all the order are important , because some of those will link each other
    // the thing change from origin
    let s = "EnchantedMaidVibe EnchantedNippleClamps EnchantedSteelPlugF EnchantedSteelPlugR " +
        // origin Enchanted (except the ImproveEnchantedBlindfold)
        "EnchantedBelt EnchantedBra ImproveEnchantedBlindfold EnchantedAnkleCuffs EnchantedBallGag EnchantedMuzzle EnchantedMittens EnchantedArmbinder EnchantedHeels " +
        // Legs
        "EnchantedBanditLegCuffs " +
        // Collar
        "EnchantedMaidCollar EnchantedObsidianCollar EnchantedMikoCollar EnchantedWolfCollar " +
        // Harness
        "EnchantedTrapHarness EnchantedWolfHarness EnchantedControlHarness " +
        // Legs
        "EnchantedMagicChainCrotch EnchantedMagicChainLegs " +
        // "EnchantedSlimeBoots EnchantedSlimeFeet EnchantedSlimeHands EnchantedSlimeLegs EnchantedSlimeArms EnchantedSlimeMouth EnchantedSlimeHead " +
        "GhostSlimeBoots GhostSlimeFeet GhostSlimeHands GhostSlimeLegs GhostSlimeArms GhostSlimeMouth GhostSlimeHead " +
        "EnchantedWolfPanties EnchantedMaidCBelt EnchantedExpCollar " +
        // Leash must at the last
        "EnchantedWolfLeash";
    console.log(s);
    let r = s.split(" ").filter(T => !!T).map(T => {
        try {
            return KinkyDungeonAddRestraint(KinkyDungeonGetRestraintByName(T), 10, false, "Gold")
        } catch (e) {
            console.log(e);
        }
    });
    console.log(r);
    if (r.filter(T => !T).length > 0) {
        console.log('KinkyDungeonMod_EnchantedRestraints.AddRestraint has some error');
    } else {
        console.log('KinkyDungeonMod_EnchantedRestraints.AddRestraint success');
    }
    return r;
}

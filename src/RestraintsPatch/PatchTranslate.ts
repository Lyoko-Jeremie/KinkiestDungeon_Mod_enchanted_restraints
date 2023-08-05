import {addTKeyF1, addTKeyF2} from "./PatchUtils";

export function addEnchantedTranslate() {

    addTKeyF1("EnchantedMaidVibe", "远古" + "女仆跳蛋", undefined, "Enchanted " + "Maid Egg");
    addTKeyF1("EnchantedMaidCBelt", "远古" + "女仆贞操带", undefined, "Enchanted " + "Maid Chastity Belt");
    addTKeyF1("EnchantedNippleClamps", "远古" + "乳头按摩器", undefined, "Enchanted " + "Nipple Massagers");
    addTKeyF1("EnchantedSteelPlugF", "远古" + "不锈钢震动棒", undefined, "Enchanted " + "Steel Plug Front");
    addTKeyF1("EnchantedSteelPlugR", "远古" + "不锈钢震动肛塞", undefined, "Enchanted " + "Steel Plug Back");
    addTKeyF1("EnchantedCrystalLegCuffs", "远古" + "水晶足拷", undefined, "Enchanted " + "Crystal Leg Cuffs");
    addTKeyF1("EnchantedMaidCollar", "远古" + "女仆项圈", undefined, "Enchanted " + "Maid Collar");
    addTKeyF1("EnchantedTrapHarness", "远古" + "皮革束衣", undefined, "Enchanted " + "Trap Harness");
    addTKeyF1("EnchantedWolfPanties", "远古" + "狼女内裤", undefined, "Enchanted " + "Wolf Panties");
    addTKeyF1("EnchantedWolfHarness", "远古" + "狼女训练束衣", undefined, "Enchanted " + "Wolf Training Harness");
    addTKeyF1("EnchantedControlHarness", "远古" + "狼女控制束衣", undefined, "Enchanted " + "Wolf Control Harness");
    addTKeyF1("EnchantedWolfCollar", "远古" + "狼女训练项圈", undefined, "Enchanted " + "Wolf Collar");
    addTKeyF1("EnchantedWolfLeash", "远古" + "狼女训练牵绳", undefined, "Enchanted " + "Wolf Leash");

    addTKeyF1("EnchantedRibbonArms", "远古" + "魔法丝带（手臂）", undefined,);
    addTKeyF1("EnchantedRibbonHands", "远古" + "魔术丝带（手套）", undefined,);
    addTKeyF1("EnchantedRibbonCrotch", "远古" + "魔术丝带（下体）", undefined,);
    addTKeyF1("EnchantedRibbonLegs", "远古" + "魔法丝带（腿）", undefined,);
    addTKeyF1("EnchantedRibbonFeet", "远古" + "魔法丝带（脚）", undefined,);
    addTKeyF1("EnchantedRibbonHarness", "远古" + "魔法丝带（束衣）", undefined,);
    addTKeyF1("EnchantedRibbonMouth", "远古" + "魔法丝带（堵嘴）", undefined,);

    // addTKeyF1("EnchantedMagicChainCrotch", "远古" + "下体链", undefined, "Enchanted " + "Magic Chain Crotch");
    // addTKeyF1("EnchantedMagicChainLegs", "远古" + "腿链", undefined, "Enchanted " + "Magic Chain Legs");

    // addTKeyF1("EnchantedSlimeLegs", "远古" + "史莱姆腿", undefined, "Enchanted " + "Slime Legs");
    // addTKeyF1("HardEnchantedSlimeLegs", "远古" + "硬化史莱姆腿", undefined, "Enchanted " + "Hard Slime Legs");
    addTKeyF1("EnchantedObsidianCollar", "远古" + "黑曜石项圈", undefined, "Enchanted " + "Obsidian Collar");
    addTKeyF1("EnchantedMikoCollar", "远古" + "Fuuka项圈", undefined, "Enchanted " + "Miko Collar");
    addTKeyF1("ImproveEnchantedBlindfold", "改良" + "远古" + "眼罩", undefined, "Improve " + "Enchanted " + "Blindfold");
    addTKeyF1("EnchantedExpCollar", "远古" + "乳胶姿势项圈", undefined, "Enchanted " + "Latex Posture Collar");

}

export function patchCnTranslate() {

    [
        ["ChainArms", "臂链", "Chains (Arms)"],
        ["ChainLegs", "腿链", "Chains (Legs)"],
        ["ChainFeet", "踝链", "Chains (Fee)"],
        ["ChainCrotch", "下体链", "Chains (Crotch)"],
    ].map(N => {
        [
            ["Magic", "魔法", "Magic"],
            ["Shadow", "暗影", "Shadow"],
            ["Ghost", "灵界", "Ghost"],
        ].map(M => {
            addTKeyF2(
                M[0] + N[0],
                "Enchanted" + M[0] + N[0],
                "远古" + M[1] + N[1],
                undefined,
                "Enchanted " + M[2] + " " + N[2]);
            // unlock failed notice
            addTextKey(
                `KinkyDungeonCurseStruggleMistressKey${"Enchanted" + M[0] + N[0]}`,
                // TextGetKD(`KinkyDungeonCurseStruggleMistressKeyEnchantedBelt`),
                TextGetKD(`KinkyDungeonCurseStruggleMistressKey`),
            );
        });
    });

}

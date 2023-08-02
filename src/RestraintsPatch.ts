import * as _ from 'lodash';

const edgeOnly = false;

let initFlag = false;

console.log("=============================enchanted_restraints RestraintsPatch.js begin=============================");
console.time("enchanted_restraints RestraintsPatch load time");

/**
 * set a lock unlock failed notice for item
 * @param curse {string} lock type, often is "MistressKey"
 * @param itemName {string}
 * @param text {string | undefined} the notice string . if undefined, use the default KinkyDungeonCurseStruggleMistressKey
 */
const addCurseStruggleString = (curse: string, itemName: string, text?: string) => {
    // unlock failed notice
    // function KinkyDungeonCurseStruggle(item, Curse) {
    if (curse === "MistressKey") {
        const newText = text || TextGetKD(`KinkyDungeonCurseStruggleMistressKey`);
        addTextKey("KinkyDungeonCurseStruggle" + curse + itemName, newText);
    } else {
        if (text) {
            addTextKey("KinkyDungeonCurseStruggle" + curse, text);
        } else {
            console.error('addCurseStruggleString invalid', itemName, curse);
        }
    }
}


/**
 * copy RestraintText from old to new , with optional name process function
 * @param newRestraintId {string}
 * @param oldRestraintId {string}
 * @param nameP {((old:string)=>string) | undefined} name process function
 * @param desc1P {((old:string)=>string) | undefined} desc1 process function
 * @param desc2P {((old:string)=>string) | undefined} desc2 process function
 */
const DupeRestraintText = (newRestraintId: string, oldRestraintId: string, nameP?: (old: string) => string, desc1P?: (old: string) => string, desc2P?: (old: string) => string) => {
    const baseKey = `Restraint${newRestraintId}`;
    const oldKey = `Restraint${oldRestraintId}`;

    addTextKey(baseKey, nameP ? nameP(TextGetKD(oldKey)) : TextGetKD(oldKey));
    addTextKey(`${baseKey}Desc`, desc1P ? desc1P(TextGetKD(`${oldKey}Desc`)) : TextGetKD(`${oldKey}Desc`));
    addTextKey(`${baseKey}Desc2`, desc2P ? desc2P(TextGetKD(`${oldKey}Desc2`)) : TextGetKD(`${oldKey}Desc2`));
}
/**
 * copy RestraintText from old to new , with optional name process function
 * @param newRestraintId {string}
 * @param oldRestraintId {string}
 * @param nameP {((old:string)=>string) | undefined} name process function
 * @param desc1P {((old:string)=>string) | undefined} desc1 process function
 * @param desc2P {((old:string)=>string) | undefined} desc2 process function
 */
const copyTKeyF = (newRestraintId: string, oldRestraintId: string, nameP?: (old: string) => string, desc1P?: (old: string) => string, desc2P?: (old: string) => string) => {
    DupeRestraintText(newRestraintId, oldRestraintId, nameP, desc1P, desc2P);
    // if (TranslationLanguage === "CN") {
    // 	DupeRestraintText(newRestraintId, oldRestraintId, nameP, desc1P, desc2P);
    // } else if (sEnglish) {
    // 	DupeRestraintText(newRestraintId, oldRestraintId, nameP, desc1P, desc2P);
    // }
};


/**
 * @param it {string}
 * @param s1 {string}
 * @param s2 {string | undefined}
 * @param sEnglish {string | undefined}
 */
const addTKeyF1 = (it: string, s1: string, s2?: string, sEnglish?: string) => {
    // addTextKey("Restraint" + it + "Desc", s1);
    // addTextKey("Restraint" + it + "Desc2", s2 || s1);
    if (TranslationLanguage === "CN") {
        KinkyDungeonAddRestraintText(it, s1, s1, s2 || s1);
    } else if (sEnglish) {
        KinkyDungeonAddRestraintText(it, sEnglish, sEnglish, sEnglish);
    }
};
const addTKeyF2 = (oldName: string, name: string, displayName: string, flavorText?: string, sEnglish?: string) => {
    // from KinkyDungeonDupeRestraintText
    const oldKey = `Restraint${oldName}`;
    const baseKey = `Restraint${name}`;

    addTextKey(baseKey, displayName);
    addTextKey(`${baseKey}Desc`, TextGetKD(`${oldKey}Desc`));
    addTextKey(`${baseKey}Desc2`, TextGetKD(`${oldKey}Desc2`));
    // if (TranslationLanguage === "CN") {
    // 	KinkyDungeonAddRestraintText(name, displayName, flavorText, flavorText || displayName);
    // } else if (sEnglish) {
    // 	KinkyDungeonAddRestraintText(name, sEnglish, sEnglish, sEnglish);
    // }
};

// function KDGetItemPreview(item) {
// 	let ret = null;
// 	let Group = "";
// 	if (item.type == Restraint && KDRestraint(item).Group) Group = KDRestraint(item).Group;
// 	else if (item.type == LooseRestraint && KDRestraint(item).Group) Group = KDRestraint(item).Group;
// 	if ((item.type == Restraint || item.type == LooseRestraint) && KDRestraint(item).AssetGroup) Group = KDRestraint(item).AssetGroup;
// 	if (Group == "ItemMouth2" || Group == "ItemMouth3") Group = "ItemMouth";
//
// 	if (item.type == Restraint) {
// 		ret = {name: item.name, item: item, preview: `Assets/Female3DCG/${Group}/Preview/${KDRestraint(item).Asset}.png`};
// 	}
// 	else if (item.type == LooseRestraint) {
// 		ret = {name: KDRestraint(item).name, item: item, preview: `Assets/Female3DCG/${Group}/Preview/${KDRestraint(item).Asset}.png`};
// 	}
// 	else if (item.type == Consumable) ret = {name: KDConsumable(item).name, item: item, preview: KinkyDungeonRootDirectory + `/Items/${KDConsumable(item).name}.png`};
// 	else if (item.type == Weapon) ret = {name: KDWeapon(item).name, item: item, preview: KinkyDungeonRootDirectory + `/Items/${KDWeapon(item).name}.png`};
// 	else if (item.type == Outfit) ret = {name: KDOutfit(item) ? KDOutfit(item).name : "Prisoner", item: item, preview: KinkyDungeonRootDirectory + `/Outfits/${KDOutfit(item).name}.png`};
// 	//else if (item && item.name) ret.push({name: item.name, item: item, preview: ``});
// 	return ret;
// }


export function EnchantedRestraintsPatch() {
    if (initFlag) {
        console.log('EnchantedRestraintsPatch was initialed. skip.');
        return;
    }
    initFlag = true;
    // ======================================================

    KinkyDungeonRefreshRestraintsCache();

    console.log("=============================enchanted_restraints before vibeStruggle patch", structuredClone(KinkyDungeonRestraints));

    KinkyDungeonRestraints.push(
        {
            curse: "MistressKey",
            enchantedDrain: 0.00001,
            inventory: true,
            arousalMode: true,
            enchanted: true,
            name: "EnchantedMaidVibe",
            Asset: "TapedClitEgg",
            Color: "Default",
            Group: "ItemVulvaPiercings",
            power: 4,
            weight: 2,
            escapeChance: {"Struggle": -100, "Cut": -100, "Remove": -100},
            enemyTags: {"maidVibeRestraints": 1000, "maidVibeRestraintsLimited": 100},
            playerTags: {"NoVibes": -1000},
            minLevel: 0,
            allFloors: true,
            shrine: ["Vibes"],
            linkedVibeTags: ["teaser"],
            vibeLocation: "ItemVulva",
            allowRemote: true,
            events: [
                // {trigger: "beforeStruggleCalc", type: "vibeStruggle", inheritLinked: true},
                // // {trigger: "playerCast", type: "MagicallySensitive", chance: 0.5, power: 2, time: 12, edgeOnly: true},
                // {trigger: "playerCast", type: "MagicallySensitive", power: 100, time: 100, edgeOnly: edgeOnly},
                // // {trigger: "struggle", type: "VibeOnStruggle", chance: 1.0, power: 2, time: 12, edgeOnly: true},
                // {trigger: "struggle", type: "VibeOnStruggle", power: 100, time: 100, edgeOnly: edgeOnly},
                // // {trigger: "remoteVibe", type: "RemoteActivatedVibe", power: 2, time: 12, edgeOnly: true},
                // {trigger: "remoteVibe", type: "RemoteActivatedVibe", power: 100, time: 100, edgeOnly: edgeOnly},
                // {
                // 	trigger: "tick",
                // 	type: "PeriodicTeasing",
                // 	// type: "MagicallySensitive",
                // 	power: 10,
                // 	time: 100,
                // 	edgeOnly: edgeOnly,
                // 	// cooldown: {"normal": 1, "tease": 1},
                // 	cooldown: {"normal": 90, "tease": 20},
                // 	// chance: 1,
                // 	chance: 0.015,
                // },
                // // {
                // // 	trigger: "tick",
                // // 	type: "PeriodicTeasing",
                // // 	power: 2,
                // // 	time: 1,
                // // 	edgeOnly: true,
                // // 	cooldown: {"normal": 90, "tease": 20},
                // // 	chance: 0.015
                // // },
                {trigger: "beforeStruggleCalc", type: "vibeStruggle", inheritLinked: true},
                {
                    trigger: "playerCast",
                    type: "MagicallySensitive",
                    chance: 0.5,
                    power: 2,
                    time: 12,
                    edgeOnly: edgeOnly
                },
                {trigger: "struggle", type: "VibeOnStruggle", chance: 1.0, power: 2, time: 12, edgeOnly: edgeOnly},
                {trigger: "remoteVibe", type: "RemoteActivatedVibe", power: 2, time: 12, edgeOnly: edgeOnly},
                {
                    trigger: "tick",
                    type: "PeriodicTeasing",
                    power: 2,
                    time: 32,
                    edgeOnly: false,
                    cooldown: {"normal": 90, "tease": 20},
                    chance: 0.015
                },
            ]
        },
    );

    // addCurseStruggleString("MistressKey", "EnchantedMaidVibe",
// 	"你拉扯着你的贞操带，但你连一根手指都插不进去，因为它太紧了……");
// addCurseStruggleString("MistressKey", "EnchantedMaidVibe",
// 	"你徒劳地挣扎。没有钥匙孔，材料几乎牢不可破！");

    KinkyDungeonRestraints.push(
        {
            curse: "MistressKey",
            enchantedDrain: 0.00001,
            inventory: true,
            arousalMode: true,
            enchanted: true,
            name: "EnchantedNippleClamps",
            Asset: "HeartPasties",
            Color: "Default",
            Group: "ItemNipples",
            power: 3,
            weight: 0,
            escapeChance: {"Struggle": -100, "Cut": -100, "Remove": -100},
            failSuffix: {"Struggle": "Clamps"},
            maxwill: 1.0,
            enemyTags: {
                "dressRestraints": 4,
                "genericToys": 2,
                "maidRestraints": 1,
                "maidRestraintsLight": 1,
                "roboAngry": 10
            },
            playerTags: {"NoVibes": -1000},
            minLevel: 0,
            allFloors: true,
            shrine: ["Vibes"],
            linkedVibeTags: ["teaser", "piercings"],
            allowRemote: true,
            events: [
                // {trigger: "playerCast", type: "MagicallySensitive", power: 10, time: 100, edgeOnly: edgeOnly},
                // {trigger: "remoteVibe", type: "RemoteActivatedVibe", power: 10, time: 100, edgeOnly: edgeOnly},
                // {
                // 	trigger: "tick",
                // 	type: "PeriodicTeasing",
                // 	// type: "MagicallySensitive",
                // 	power: 10,
                // 	time: 100,
                // 	edgeOnly: edgeOnly,
                // 	cooldown: {"normal": 80, "tease": 20},
                // 	chance: 0.02
                // },
                // // {trigger: "playerCast", type: "MagicallySensitive", chance: 0.5, power: 1, time: 24, edgeOnly: true},
                // // {trigger: "remoteVibe", type: "RemoteActivatedVibe", power: 1, time: 24, edgeOnly: true},
                // // {
                // // 	trigger: "tick",
                // // 	type: "PeriodicTeasing",
                // // 	power: 1,
                // // 	time: 24,
                // // 	edgeOnly: true,
                // // 	cooldown: {"normal": 80, "tease": 20},
                // // 	chance: 0.02
                // // },
                {
                    trigger: "playerCast",
                    type: "MagicallySensitive",
                    chance: 0.5,
                    power: 1,
                    time: 24,
                    edgeOnly: edgeOnly
                },
                {trigger: "remoteVibe", type: "RemoteActivatedVibe", power: 1, time: 24, edgeOnly: edgeOnly},
                {
                    trigger: "tick",
                    type: "PeriodicTeasing",
                    power: 1,
                    time: 24,
                    edgeOnly: false,
                    cooldown: {"normal": 80, "tease": 20},
                    chance: 0.02
                },
            ]
        },
    );

    KinkyDungeonRestraints.push(
        {
            curse: "MistressKey",
            enchantedDrain: 0.00001,
            inventory: true,
            arousalMode: true,
            enchanted: true,
            name: "EnchantedSteelPlugF",
            Asset: "VibratingDildo",
            Color: "#ffffff",
            Group: "ItemVulva",
            plugSize: 1.5,
            power: 1,
            weight: 2,
            escapeChance: {"Struggle": -100, "Cut": -100, "Remove": -100},
            enemyTags: {
                "dressRestraints": 4,
                "genericToys": 2,
                "maidRestraints": 1,
                "maidRestraintsLight": 1,
                "roboAngry": 10,
                "plugSpell": 1,
                "maidVibeRestraints": 1000,
                "maidVibeRestraintsLimited": 100,
            },
            playerTags: {"NoVibes": -1000},
            minLevel: 0,
            allFloors: true,
            shrine: ["Plugs"],
            events: [
                {trigger: "beforeStruggleCalc", type: "vibeStruggle", inheritLinked: true},
                {
                    trigger: "playerCast",
                    type: "MagicallySensitive",
                    chance: 0.5,
                    power: 10,
                    time: 100,
                    edgeOnly: edgeOnly
                },
                {trigger: "remoteVibe", type: "RemoteActivatedVibe", power: 10, time: 100, edgeOnly: edgeOnly},
                {
                    trigger: "tick",
                    type: "PeriodicTeasing",
                    // type: "MagicallySensitive",
                    power: 10,
                    time: 100,
                    edgeOnly: false,
                    cooldown: {"normal": 80, "tease": 20},
                    chance: 0.02
                },
            ],
        },
    );

    KinkyDungeonRestraints.push(
        {
            curse: "MistressKey",
            enchantedDrain: 0.00001,
            inventory: true,
            arousalMode: true,
            enchanted: true,
            name: "EnchantedSteelPlugR",
            Asset: "VibratingDildoPlug",
            Color: "#ffffff",
            Group: "ItemButt",
            plugSize: 1.5,
            power: 1,
            weight: 2,
            escapeChance: {"Struggle": -100, "Cut": -100, "Remove": -100},
            enemyTags: {
                "dressRestraints": 4,
                "genericToys": 2,
                "maidRestraints": 1,
                "maidRestraintsLight": 1,
                "roboAngry": 10,
                "plugSpell": 1,
                "maidVibeRestraints": 1000,
                "maidVibeRestraintsLimited": 100,
            },
            playerTags: {"NoVibes": -1000},
            minLevel: 0,
            allFloors: true,
            shrine: ["Plugs"],
            events: [
                {trigger: "beforeStruggleCalc", type: "vibeStruggle", inheritLinked: true},
                {
                    trigger: "playerCast",
                    type: "MagicallySensitive",
                    chance: 0.5,
                    power: 10,
                    time: 100,
                    edgeOnly: edgeOnly
                },
                {trigger: "remoteVibe", type: "RemoteActivatedVibe", power: 10, time: 100, edgeOnly: edgeOnly},
                {
                    trigger: "tick",
                    type: "PeriodicTeasing",
                    // type: "MagicallySensitive",
                    power: 10,
                    time: 100,
                    edgeOnly: false,
                    cooldown: {"normal": 80, "tease": 20},
                    chance: 0.02
                },
            ],
        },
    );

    console.log("=============================enchanted_restraints before copy patch", structuredClone(KinkyDungeonRestraints));

    // KinkyDungeonRefreshRestraintsCache();

    // addCurseStruggleString("MistressKey", "EnchantedMaidVibe",
    // 	"你徒劳地挣扎。没有钥匙孔，材料几乎牢不可破！");

    // fix CN translation
    addTextKey("KinkyDungeonCurseInfoGhostLock",
        "锁被有还魂封印保护着。你需要25份灵魂物质来解除封印。");
    addTextKey("KinkyDungeonCurseStruggleGhostLock",
        "你的手指轻而易举地穿了过去。可惜你的身体穿不过去。");
    addTextKey("KinkyDungeonCurseUnlockGhostLock",
        "你注入了可怕的能量,破坏了封印!");

    // GhostLock
    (
        "SlimeBoots SlimeFeet SlimeLegs SlimeArms SlimeHands SlimeMouth SlimeHead " +
        "HardSlimeBoots HardSlimeFeet HardSlimeLegs HardSlimeArms HardSlimeHands HardSlimeMouth HardSlimeHead "
    ).split(" ").filter(T => !!T).map(N => {
        return (() => {
            console.log('GhostLock patching : ', N);
            let T = structuredClone(KinkyDungeonRestraints.find(restraint => restraint.name === N)!!);
            // let T = structuredClone(KinkyDungeonRestraintsCache.get(N));
            console.log('T : ', T);
            T.name = "Ghost" + N;
            T.curse = "GhostLock";
            T.enchantedDrain = 0.00001;
            T.enchanted = true;
            T.removePrison = false;
            T.escapeChance = {"Struggle": -100, "Cut": -100, "Remove": -100};
            return T;
        })();
    }).map(T => {
        // add patch
        if (T.name.startsWith(("Ghost" + "Slime"))) {
            copyTKeyF(T.name,
                "Slime" + T.name.substring(("GhostSlime").length),
                (n) => "灵浆" + n,
                // undefined,
                // "Enchanted " + "Slime Legs"
            );
            return T;
        }
        if (T.name.startsWith(("Ghost" + "Hard" + "Slime"))) {
            T.name = T.name.replace("GhostHardSlime", "HardGhostSlime");
            copyTKeyF(T.name,
                "HardSlime" + T.name.substring(("GhostHardSlime").length),
                (n) => "灵浆" + n,
                // undefined,
                // "Enchanted " + "Hard Slime Legs"
            );
            return T;
        }
        return T;
    }).map(T => {
        // if (T.curse === "GhostLock") {
        //     // addTextKey(
        //     // 	`KinkyDungeonCurseStruggleMistressKey${T.name}`,
        //     // 	// TextGetKD(`KinkyDungeonCurseStruggleMistressKeyEnchantedBelt`),
        //     // 	TextGetKD(`KinkyDungeonCurseStruggleMistressKey`),
        //     // );
        //     // addCurseStruggleString(T.curse, T.name, "你徒劳地挣扎。没有钥匙孔，材料几乎牢不可破！");
        // }
        console.log('P : ', T);
        return KinkyDungeonRestraints.push(T);
    });

    (
        "CrystalLegCuffs MaidCollar MaidCBelt TrapHarness WolfHarness WolfPanties ControlHarness " +
        "MagicChainArms MagicChainLegs MagicChainFeet MagicChainCrotch " +
        "ShadowChainArms ShadowChainLegs ShadowChainFeet ShadowChainCrotch " +
        "GhostChainArms GhostChainLegs GhostChainFeet GhostChainCrotch " +
        "ObsidianCollar MikoCollar WolfCollar WolfLeash ExpCollar " +
        "SlimeBoots SlimeFeet SlimeLegs SlimeArms SlimeHands SlimeMouth SlimeHead " +
        "HardSlimeBoots HardSlimeFeet HardSlimeLegs HardSlimeArms HardSlimeHands HardSlimeMouth HardSlimeHead " +
        "RibbonArms RibbonLegs RibbonFeet RibbonHarness RibbonCrotch RibbonHands RibbonMouth"
    ).split(" ").filter(T => !!T).map(N => {
        return (() => {
            console.log('patching : ', N);
            let T = structuredClone(KinkyDungeonRestraints.find(restraint => restraint.name === N)!!);
            // let T = structuredClone(KinkyDungeonRestraintsCache.get(N));
            console.log('T : ', T);
            T.name = "Enchanted" + N;
            T.curse = "MistressKey";
            T.enchantedDrain = 0.00001;
            T.enchanted = true;
            T.removePrison = false;
            T.escapeChance = {"Struggle": -100, "Cut": -100, "Remove": -100};
            return T;
        })();
    }).map(T => {
        // add patch
        if (T.name.startsWith(("Enchanted" + "Slime"))) {
            copyTKeyF(T.name,
                "Slime" + T.name.substring(("EnchantedSlime").length),
                (n) => "远古" + n,
                // undefined,
                // "Enchanted " + "Slime Legs"
            );
            return T;
        }
        if (T.name.startsWith(("Enchanted" + "Hard" + "Slime"))) {
            T.name = T.name.replace("EnchantedHardSlime", "HardEnchantedSlime");
            copyTKeyF(T.name,
                "HardSlime" + T.name.substring(("HardEnchantedSlime").length),
                (n) => "远古" + n,
                // undefined,
                // "Enchanted " + "Hard Slime Legs"
            );
            return T;
        }
        switch (T.name) {
            // case ("Enchanted" + "SlimeLegs"):
            // 	// T.weight = -1000;
            // 	break;
            // case ("Enchanted" + "HardSlimeLegs"):
            // 	// T.weight = -1000;
            // 	T.name = "HardEnchantedSlimeLegs";
            // 	break;
            case ("Enchanted" + "MikoCollar"):
                T.curse = "GhostLock";
                break;
            case ("Enchanted" + "MaidCBelt"):
                T.chastitybra = false;
                T.chastity = false;
                break;
            case ("Enchanted" + "WolfPanties"):
                T.events = [
                    {
                        trigger: "remoteVibe",
                        type: "RemoteActivatedVibe",
                        power: 2,
                        time: 20,
                        edgeOnly: edgeOnly,
                    },
                    {
                        trigger: "tick",
                        type: "PeriodicTeasing",
                        power: 1,
                        time: 48,
                        edgeOnly: edgeOnly,
                        cooldown: {"normal": 50, "tease": 20},
                        chance: 0.02,
                    },
                    {
                        trigger: "tick",
                        type: "PeriodicDenial",
                        power: 2,
                        time: 42,
                        edgeOnly: edgeOnly,
                        cooldown: {"normal": 60, "tease": 20},
                        chance: 0.03,
                    },
                    {
                        trigger: "tick",
                        type: "PeriodicTeasing",
                        power: 3,
                        time: 14,
                        edgeOnly: false,
                        cooldown: {"normal": 80, "tease": 20},
                        chance: 0.01,
                    },
                ];
                break;
            default:
                break;
        }
        return T;
    }).map(T => {
        if (T.curse === "MistressKey") {
            // addTextKey(
            // 	`KinkyDungeonCurseStruggleMistressKey${T.name}`,
            // 	// TextGetKD(`KinkyDungeonCurseStruggleMistressKeyEnchantedBelt`),
            // 	TextGetKD(`KinkyDungeonCurseStruggleMistressKey`),
            // );
            addCurseStruggleString(T.curse, T.name, "你徒劳地挣扎。没有钥匙孔，材料几乎牢不可破！");
        }
        console.log('P : ', T);
        return KinkyDungeonRestraints.push(T);
    });

    // in-place patch
    "EnchantedBelt EnchantedBra".split(" ").filter(T => !!T).map(N => {
        return (() => {
            console.log('in-place patching : ', N);
            let T = KinkyDungeonRestraints.find(restraint => restraint.name === N)!!;
            console.log('T : ', T);
            T.chastitybra = false;
            T.chastity = false;
            return T;
        })();
    });

    KinkyDungeonRestraints.push((() => {
        let T = structuredClone(KinkyDungeonRestraints.find(restraint => restraint.name === "EnchantedBlindfold")!!);
        T.name = "ImproveEnchantedBlindfold";
        T.blindfold = 1;
        if (T.curse === "MistressKey") {
            addCurseStruggleString(T.curse, T.name, "你徒劳地挣扎。没有钥匙孔，材料几乎牢不可破！");
        }
        return T;
    })());
    // KinkyDungeonRestraints.push(
    // );
    // KinkyDungeonRestraints.push(
    // );

    console.log("=============================enchanted_restraints", KinkyDungeonRestraints);

    // KinkyDungeonRestraints.push(
    // );

    KinkyDungeonRefreshRestraintsCache();

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
    // addTKeyF1("EnchantedMagicChainCrotch", "远古" + "下体链", undefined, "Enchanted " + "Magic Chain Crotch");
    // addTKeyF1("EnchantedMagicChainLegs", "远古" + "腿链", undefined, "Enchanted " + "Magic Chain Legs");

    // addTKeyF1("EnchantedSlimeLegs", "远古" + "史莱姆腿", undefined, "Enchanted " + "Slime Legs");
    // addTKeyF1("HardEnchantedSlimeLegs", "远古" + "硬化史莱姆腿", undefined, "Enchanted " + "Hard Slime Legs");
    addTKeyF1("EnchantedObsidianCollar", "远古" + "黑曜石项圈", undefined, "Enchanted " + "Obsidian Collar");
    addTKeyF1("EnchantedMikoCollar", "远古" + "Fuuka项圈", undefined, "Enchanted " + "Miko Collar");
    addTKeyF1("ImproveEnchantedBlindfold", "改良" + "远古" + "眼罩", undefined, "Improve " + "Enchanted " + "Blindfold");
    addTKeyF1("EnchantedExpCollar", "远古" + "乳胶姿势项圈", undefined, "Enchanted " + "Latex Posture Collar");

    KinkyDungeonRefreshRestraintsCache();
    console.log("=============================enchanted_restraints EnchantedRestraintsPatch end", KinkyDungeonRestraints);

}

export function ApplyModRestraint() {
    // all the order are important , because some of those will link each other
    // the thing change from origin
    let s = "EnchantedMaidVibe EnchantedNippleClamps EnchantedSteelPlugF EnchantedSteelPlugR " +
        // origin Enchanted (except the ImproveEnchantedBlindfold)
        "EnchantedBelt EnchantedBra ImproveEnchantedBlindfold EnchantedAnkleCuffs EnchantedBallGag EnchantedMuzzle EnchantedMittens EnchantedArmbinder EnchantedHeels " +
        // Legs
        "EnchantedCrystalLegCuffs " +
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

console.timeEnd("enchanted_restraints RestraintsPatch load time");
console.log("=============================enchanted_restraints RestraintsPatch.js end=============================");





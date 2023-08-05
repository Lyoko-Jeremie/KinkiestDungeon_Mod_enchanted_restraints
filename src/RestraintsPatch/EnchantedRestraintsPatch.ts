import * as _ from 'lodash';
import {addCurseStruggleString, copyTKeyF} from "./PatchUtils";

let edgeOnly = false;

export function setEdgeOnly(b: boolean) {
    if (_.isBoolean(b)) {
        edgeOnly = b;
    }
}

function wrapperProxyEdgeOnly(obj: { [key: string]: any }) {
    return new Proxy(obj, {
        get: (target: { [p: string]: any }, prop: string, receiver: any): any => {
            return prop === "edgeOnly" ? edgeOnly : target[prop];
        },
    });
}

export function inPlacePatch() {

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

}

export function addEnchantedItems() {
    // addCurseStruggleString("MistressKey", "EnchantedMaidVibe",
    // 	"你徒劳地挣扎。没有钥匙孔，材料几乎牢不可破！");

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

    KinkyDungeonRestraints.push((() => {
        let T = structuredClone(KinkyDungeonRestraints.find(restraint => restraint.name === "EnchantedBlindfold")!!);
        T.name = "ImproveEnchantedBlindfold";
        T.blindfold = 1;
        if (T.curse === "MistressKey") {
            addCurseStruggleString(T.curse, T.name, "你徒劳地挣扎。没有钥匙孔，材料几乎牢不可破！");
        }
        return T;
    })());
}

export function addGhostSlime() {

    // fix GhostLock CN translation
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

}

export function patchVibeStruggle() {

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

}


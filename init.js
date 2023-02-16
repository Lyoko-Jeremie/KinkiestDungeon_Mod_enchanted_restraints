'use strict';

const edgeOnly = false;

console.log("=============================enchanted_restraints begin=============================");
console.time("enchanted_restraints load time");

window.enchanted_restraints = {}
window.enchanted_restraints.KinkyDungeonRestraints = structuredClone(KinkyDungeonRestraints);

let addCurseStruggleString = (curse, itemName, text) => {
	// function KinkyDungeonCurseStruggle(item, Curse) {
	if (curse === "MistressKey") {
		addTextKey("KinkyDungeonCurseStruggle" + curse + itemName, text);
	} else {
		addTextKey("KinkyDungeonCurseStruggle" + curse, text);
	}
}

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
			{trigger: "playerCast", type: "MagicallySensitive", chance: 0.5, power: 2, time: 12, edgeOnly: edgeOnly},
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
			{trigger: "playerCast", type: "MagicallySensitive", chance: 0.5, power: 1, time: 24, edgeOnly: edgeOnly},
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
			{trigger: "playerCast", type: "MagicallySensitive", chance: 0.5, power: 10, time: 100, edgeOnly: edgeOnly},
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
			{trigger: "playerCast", type: "MagicallySensitive", chance: 0.5, power: 10, time: 100, edgeOnly: edgeOnly},
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

(
	"CrystalLegCuffs MaidCollar MaidCBelt TrapHarness WolfHarness WolfPanties ControlHarness " +
	"MagicChainArms MagicChainLegs MagicChainFeet MagicChainCrotch " +
	"ShadowChainArms ShadowChainLegs ShadowChainFeet ShadowChainCrotch " +
	"GhostChainArms GhostChainLegs GhostChainFeet GhostChainCrotch " +
	"ObsidianCollar MikoCollar WolfCollar WolfLeash SlimeLegs HardSlimeLegs ExpCollar"
).split(" ").filter(T => !!T).map(N => {
	return (() => {
		console.log('patching : ', N);
		let T = structuredClone(KinkyDungeonRestraints.find(restraint => restraint.name === N));
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
	switch (T.name) {
		case ("Enchanted" + "SlimeLegs"):
			// T.weight = -1000;
			break;
		case ("Enchanted" + "HardSlimeLegs"):
			// T.weight = -1000;
			T.name = "HardEnchantedSlimeLegs";
			break;
		case ("Enchanted" + "MikoCollar"):
			T.curse = "GhostLock";
		case ("Enchanted" + "MaidCBelt"):
			T.chastitybra = false;
			T.chastity = false;
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
		default:
			break;
	}
	return T;
}).map(T => {
	return KinkyDungeonRestraints.push(T);
});

// in-place patch
"EnchantedBelt EnchantedBra".split(" ").filter(T => !!T).map(N => {
	return (() => {
		console.log('in-place patching : ', N);
		let T = KinkyDungeonRestraints.find(restraint => restraint.name === N);
		console.log('T : ', T);
		T.chastitybra = false;
		T.chastity = false;
		return T;
	})();
});

KinkyDungeonRestraints.push((() => {
	let T = structuredClone(KinkyDungeonRestraints.find(restraint => restraint.name === "EnchantedBlindfold"));
	T.name = "ImproveEnchantedBlindfold";
	T.blindfold = 1;
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

/**
 * @param it {string}
 * @param s1 {string}
 * @param s2 {string | undefined}
 * @param sEnglish {string | undefined}
 */
let addTKeyF1 = (it, s1, s2 = undefined, sEnglish = undefined) => {
	// addTextKey("Restraint" + it + "Desc", s1);
	// addTextKey("Restraint" + it + "Desc2", s2 || s1);
	if (TranslationLanguage === "CN") {
		KinkyDungeonAddRestraintText(it, s1, s1, s2 || s1);
	} else if (sEnglish) {
		KinkyDungeonAddRestraintText(it, sEnglish, sEnglish, sEnglish);
	}
};
let addTKeyF2 = (oldName, name, displayName, flavorText = undefined, sEnglish = undefined) => {
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

addTKeyF1("EnchantedMaidVibe", "远古" + "女仆跳蛋", undefined, "Enchanted " + "Maid Egg");
addTKeyF1("EnchantedMaidCBelt", "远古" + "女仆贞操带", undefined, "Enchanted " + "Maid Chastity Belt");
addTKeyF1("EnchantedNippleClamps", "远古" + "乳头按摩器", undefined, "Enchanted " + "Nipple Massagers");
addTKeyF1("EnchantedSteelPlugF", "远古" + "前不锈钢插件", "插在前面的" + "远古" + "不锈钢插件", "Enchanted " + "Steel Plug Front");
addTKeyF1("EnchantedSteelPlugR", "远古" + "后不锈钢插件", "插在后面的" + "远古" + "不锈钢插件", "Enchanted " + "Steel Plug Back");
addTKeyF1("EnchantedCrystalLegCuffs", "远古" + "水晶足拷", undefined, "Enchanted " + "Crystal Leg Cuffs");
addTKeyF1("EnchantedMaidCollar", "远古" + "女仆项圈", undefined, "Enchanted " + "Maid Collar");
addTKeyF1("EnchantedTrapHarness", "远古" + "皮革束衣", undefined, "Enchanted " + "Trap Harness");
addTKeyF1("EnchantedWolfPanties", "远古" + "狼女内裤", undefined, "Enchanted " + "Wolf Panties");
addTKeyF1("EnchantedWolfHarness", "远古" + "狼女训练束衣", undefined, "Enchanted " + "Wolf Training Harness");
addTKeyF1("EnchantedControlHarness", "远古" + "狼女控制束衣", undefined, "Enchanted " + "Wolf Control Harness");
addTKeyF1("EnchantedWolfCollar", "远古" + "狼女训练项圈", undefined, "Enchanted " + "Wolf Collar");
addTKeyF1("EnchantedWolfLeash", "远古" + "狼女训练牵绳", undefined, "Enchanted " + "Wolf Leash");

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

addTKeyF1("EnchantedSlimeLegs", "远古" + "史莱姆腿", undefined, "Enchanted " + "Slime Legs");
addTKeyF1("HardEnchantedSlimeLegs", "远古" + "硬化史莱姆腿", undefined, "Enchanted " + "Hard Slime Legs");
addTKeyF1("EnchantedObsidianCollar", "远古" + "黑曜石项圈", undefined, "Enchanted " + "Obsidian Collar");
addTKeyF1("EnchantedMikoCollar", "远古" + "Fuuka项圈", undefined, "Enchanted " + "Miko Collar");
addTKeyF1("ImproveEnchantedBlindfold", "改良" + "远古" + "眼罩", undefined, "Improve " + "Enchanted " + "Blindfold");
addTKeyF1("EnchantedExpCollar", "远古" + "乳胶姿势项圈", undefined, "Enchanted " + "Latex Posture Collar");

window.KinkyDungeonMod_EnchantedRestraints = {};
window.KinkyDungeonMod_EnchantedRestraints.ApplyModRestraint = () => {
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
		"EnchantedMagicChainCrotch EnchantedMagicChainLegs EnchantedSlimeLegs " +
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
};

window.KinkyDungeonMod_EnchantedRestraints.Cheats = {
	_InnerData: {
		FullStatIntervalHandle: undefined,
		InvisibilityIntervalHandle: undefined,
		MaxEmpowerIntervalHandle: undefined,
		EnemySenseIntervalHandle: undefined,
	},
	_InnerFunction: {},
	DebugSee: {},
	LockList: {
		Purple: "Purple",
		Red: "Red",
		White: "White",
		Blue: "Blue",
		Gold: "Gold",
	},
	SaveLoad: {},
	_TickHook: {
		Hook_HookedFunction_Point: null,
		Hook_HookFunctionCaller: null,
		Hook_Map: new Map(),
		idGenerator: 1,
		addHook: null,
		removeHook: null,
	},
};
// a temp ref to KinkyDungeonMod_EnchantedRestraints.Cheats for short code
let CheatsObject = window.KinkyDungeonMod_EnchantedRestraints.Cheats;
// fast ref
window.Mod_EnchantedRestraints = window.KinkyDungeonMod_EnchantedRestraints;

// setup Cheat Hook
CheatsObject._TickHook.Hook_HookedFunction_Point = window.KinkyDungeonUpdateJailKeys;
CheatsObject._TickHook.Hook_HookFunctionCaller = (...arg) => {
	CheatsObject._TickHook.Hook_HookedFunction_Point(...arg);
	CheatsObject._TickHook.Hook_Map.forEach((v, k) => {
		v();
	});
};
window.KinkyDungeonUpdateJailKeys = CheatsObject._TickHook.Hook_HookFunctionCaller;
CheatsObject._TickHook.addHook = (callback) => {
	let id = ++CheatsObject._TickHook.idGenerator;
	CheatsObject._TickHook.Hook_Map.set(id, callback);
	return id;
};
CheatsObject._TickHook.removeHook = (id) => {
	return CheatsObject._TickHook.Hook_Map.delete(id);
};


CheatsObject.BootstrapSpellChoicesTable = () => {
	KinkyDungeonSpellChoices =
		JSON.parse("[98,47,null,null,null,null,null,0,121,123,109,134,110,54,155,173,174,175,165,null,170]");
	// todo use toggleSpell("toggleSpell",{i:123}) or KDSendInput("toggleSpell",{i:123}) or KinkyDungeonClickSpell
	KinkyDungeonSpellChoicesToggle =
		JSON.parse("[true,true,null,null,null,null,null,true,true,true,true,true,true,true,true,true,true,true,true,null,true]");
};
CheatsObject.BootstrapAllGood = () => {
	CheatsObject.AddManyKeys();
	CheatsObject.AddManyGold();

	CheatsObject.BootstrapSimpleGood();
};
CheatsObject.BootstrapSimpleGood = () => {
	// CheatsObject.AddManyKeys();
	// CheatsObject.AddManyGold();
	CheatsObject.AddManyPotion();
	CheatsObject.AddAllWeapon();
	CheatsObject.AddAllOutfit();
	CheatsObject.AddAllConsumables();
	CheatsObject.AddAllRestraints();
	CheatsObject.AllSpells();
	CheatsObject.AllHeart();
	CheatsObject.ChoiceAddCheatChoiceGoodEscape();
	CheatsObject.ChoiceAddCheatChoiceGoodEnhance();
	CheatsObject.ChoiceAddCheatChoiceMidEscape();
	CheatsObject.EnableAllCheats();
};
CheatsObject.BootstrapAllNegative = () => {
	CheatsObject.ChoiceAddCheatChoiceBadNegative();
	CheatsObject.ChoiceAddCheatChoiceBadNoEscape();
};
CheatsObject.EnableAllCheats = () => {
	CheatsObject.EnableFullState();
	CheatsObject.EnableEnemySense();
	CheatsObject.EnableInvisibility();
	CheatsObject.EnableMaxEmpower();
};
CheatsObject.DisableAllCheats = () => {
	CheatsObject.DisableFullState();
	CheatsObject.DisableEnemySense();
	CheatsObject.DisableInvisibility();
	CheatsObject.DisableMaxEmpower();
};
CheatsObject.DisableFullState = () => {
	if (CheatsObject._InnerData.FullStatIntervalHandle) {
		CheatsObject._TickHook.removeHook(CheatsObject._InnerData.FullStatIntervalHandle);
		CheatsObject._InnerData.FullStatIntervalHandle = undefined;
	}
};
CheatsObject.EnableFullState = () => {
	CheatsObject.DisableFullState();
	CheatsObject._InnerData.FullStatIntervalHandle = CheatsObject._TickHook.addHook(() => {
		CheatsObject._InnerFunction.FullStat();
	});
	CheatsObject._InnerFunction.FullStat();
};
CheatsObject._InnerFunction.FullStat = () => {
	KinkyDungeonStatMana = KinkyDungeonStatManaMax;
	KinkyDungeonStatWill = KinkyDungeonStatWillMax;
	KinkyDungeonStatStamina = KinkyDungeonStatStaminaMax;
	// KDGameData.AncientEnergyLevel = 1.0;
};
CheatsObject.DisableEnemySense = () => {
	if (CheatsObject._InnerData.EnemySenseIntervalHandle) {
		CheatsObject._TickHook.removeHook(CheatsObject._InnerData.EnemySenseIntervalHandle);
		CheatsObject._InnerData.EnemySenseIntervalHandle = undefined;
	}
};
CheatsObject.EnableEnemySense = () => {
	CheatsObject.DisableEnemySense();
	CheatsObject._InnerData.EnemySenseIntervalHandle = CheatsObject._TickHook.addHook(() => {
		CheatsObject._InnerFunction.SetEnemySense();
	});
};
CheatsObject._InnerFunction.SetEnemySense = (remove) => {
	// KinkyDungeonApplyBuff(KinkyDungeonPlayerBuffs, {id: "EnemySense", type: "EnemySense", duration: 100});
	const buffObj = {
		EnemySense: {
			id: "EnemySense",
			type: "EnemySense",
			duration: 1000,
		},
		Analyze: {
			id: "Analyze",
			aura: "#ff5555",
			type: "MagicalSight",
			power: 5,
			duration: 1000,
		},
		Light: {
			id: "Light",
			type: "Light",
			duration: 1000,
		},
	};
	CheatsObject._InnerFunction.SetBuff(buffObj, remove);
};
CheatsObject._InnerFunction.SetBuff = (buffObj, remove) => {
	// KinkyDungeonApplyBuff(KinkyDungeonPlayerBuffs, {id: "EnemySense", type: "EnemySense", duration: 100});
	// const buffObj = {
	// 	EnemySense: {
	// 		id: "EnemySense",
	// 		type: "EnemySense",
	// 		duration: 1000,
	// 	},
	// 	Analyze: {
	// 		id: "Analyze",
	// 		aura: "#ff5555",
	// 		type: "MagicalSight",
	// 		power: 5,
	// 		duration: 1000,
	// 	},
	// 	Light: {
	// 		id: "Light",
	// 		type: "Light",
	// 		duration: 1000,
	// 	},
	// };
	const k = Object.getOwnPropertyNames(buffObj);
	if (remove) {
		k.forEach(T => delete KinkyDungeonPlayerBuffs[T]);
	} else {
		k.forEach(T => {
			const it = KinkyDungeonPlayerBuffs[T];
			if (it) {
				it.duration = buffObj[T].duration || 1000;
			} else {
				KinkyDungeonPlayerBuffs[T] = buffObj[T];
			}
		});
	}
};
CheatsObject.DisableInvisibility = () => {
	// CheatsObject._InnerFunction.PatchInvisibility(true);
	if (CheatsObject._InnerData.InvisibilityIntervalHandle) {
		CheatsObject._TickHook.removeHook(CheatsObject._InnerData.InvisibilityIntervalHandle);
		CheatsObject._InnerData.InvisibilityIntervalHandle = undefined;
	}
	CheatsObject._InnerFunction.SetInvisibility(true);
};
CheatsObject.EnableInvisibility = () => {
	CheatsObject.DisableInvisibility();
	CheatsObject._InnerData.InvisibilityIntervalHandle = CheatsObject._TickHook.addHook(() => {
		CheatsObject._InnerFunction.SetInvisibility();
	});
};
// CheatsObject._InnerFunction.PatchInvisibility = (recover) => {
// 	const n = KinkyDungeonSpellList.Illusion.find(T => T.name === "Invisibility");
// 	if (recover) {
// 		n.manacost = 8;
// 	} else {
// 		n.manacost = 0;
// 	}
// };
CheatsObject._InnerFunction.SetInvisibility = (remove) => {
	// if (remove) {
	// 	delete KinkyDungeonPlayerBuffs["Invisibility"];
	// 	delete KinkyDungeonPlayerBuffs["Invisibility2"];
	// 	return;
	// }
	// let i1 = KinkyDungeonPlayerBuffs['Invisibility'];
	// let i2 = KinkyDungeonPlayerBuffs['Invisibility2'];
	// if (i1 && i2) {
	// 	i1.duration = 1000;
	// 	i2.duration = 1100;
	// } else {
	// 	let n1 = {
	// 		id: "Invisibility",
	// 		aura: "#888888",
	// 		type: "Sneak",
	// 		duration: 1000,
	// 		power: 10.0,
	// 		player: true,
	// 		enemies: true,
	// 		tags: ["invisibility"]
	// 	};
	// 	let n2 = {
	// 		id: "Invisibility2",
	// 		type: "SlowDetection",
	// 		duration: 1100,
	// 		power: 0.5,
	// 		player: true,
	// 		enemies: false,
	// 		tags: ["invisibility"]
	// 	};
	// 	KinkyDungeonPlayerBuffs["Invisibility"] = n1;
	// 	KinkyDungeonPlayerBuffs["Invisibility2"] = n2;
	// }
	const buffObj = {
		Invisibility: {
			id: "Invisibility",
			aura: "#888888",
			type: "Sneak",
			duration: 1000,
			power: 10.0,
			player: true,
			enemies: true,
			tags: ["invisibility"]
		},
		Invisibility2: {
			id: "Invisibility2",
			type: "SlowDetection",
			duration: 1100,
			power: 0.5,
			player: true,
			enemies: false,
			tags: ["invisibility"]
		}
	};
	CheatsObject._InnerFunction.SetBuff(buffObj, remove);
};
CheatsObject.DisableMaxEmpower = () => {
	if (CheatsObject._InnerData.MaxEmpowerIntervalHandle) {
		CheatsObject._TickHook.removeHook(CheatsObject._InnerData.MaxEmpowerIntervalHandle);
		CheatsObject._InnerData.MaxEmpowerIntervalHandle = undefined;
	}
	CheatsObject._InnerFunction.SetKDEmpower(true);
};
CheatsObject.EnableMaxEmpower = () => {
	CheatsObject.DisableMaxEmpower();
	CheatsObject._InnerData.MaxEmpowerIntervalHandle = CheatsObject._TickHook.addHook(() => {
		CheatsObject._InnerFunction.SetKDEmpower();
	});
};
CheatsObject._InnerFunction.SetKDEmpower = (remove) => {
	// KDEmpower()
	// if (remove) {
	// 	delete KinkyDungeonPlayerBuffs["Empower"];
	// 	return;
	// }
	// let i1 = KinkyDungeonPlayerBuffs['Empower'];
	// if (i1) {
	// 	i1.duration = 1000;
	// } else {
	// 	// function KDEmpower(data, entity)
	// 	let n1 = {
	// 		id: "Empower",
	// 		aura: "#aaaaff",
	// 		type: "SpellEmpower",
	// 		maxCount: 1,
	// 		currentCount: 1,
	// 		power: 3,
	// 		duration: 1000,
	// 		tags: ["cast", "upcast"],
	// 	};
	// 	KinkyDungeonPlayerBuffs["Empower"] = n1;
	// }
	let buffObj = {
		Empower: {
			id: "Empower",
			aura: "#aaaaff",
			type: "SpellEmpower",
			maxCount: 1,
			currentCount: 1,
			power: 3,
			duration: 1000,
			tags: ["cast", "upcast"],
		}
	};
	CheatsObject._InnerFunction.SetBuff(buffObj, remove);
};
CheatsObject.AddDistraction = (n) => {
	KinkyDungeonChangeDistraction(n || 10, true, 1);
};
CheatsObject.SetSpellPoints = (n) => {
	KinkyDungeonSpellPoints = n || 10000;
};
CheatsObject.SetAncientEnergy = (f) => {
	KDGameData.AncientEnergyLevel = f || 1.0
};
CheatsObject.AddManyKeys = () => {
	KinkyDungeonLockpicks = 1000;
	KinkyDungeonRedKeys = 1000;
	KinkyDungeonBlueKeys = 1000;
	// 远古钥匙 use to unlock MistressKey Gold
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.MistressKey, 1000);
	// 能量水晶 use to charge AncientEnergy to power the origin Enchanted Restraint
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.AncientPowerSource, 1000);
	// 灵浆 use to unlock GhostLock
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.Ectoplasm, 1000);
};
CheatsObject.AddManyGold = () => {
	KinkyDungeonAddGold(10000000);
};
CheatsObject.AddManyPotion = () => {
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionMana, 1000);
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionStamina, 1000);
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionFrigid, 1000);
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionWill, 1000);
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ManaOrb, 1000);
};
CheatsObject.AddAllWeapon = () => {
	Object.getOwnPropertyNames(KinkyDungeonWeapons).map(T => KinkyDungeonInventoryAddWeapon(KinkyDungeonWeapons[T].name));
};
CheatsObject.AddAllOutfit = () => {
	KinkyDungeonOutfitsBase.map(T => KinkyDungeonInventoryAddOutfit(T.name));
};
CheatsObject.AddAllConsumables = () => {
	const ignoreSet = new Set((
		"MistressKey AncientPowerSource Ectoplasm " +
		"PotionMana PotionStamina PotionFrigid PotionWill ManaOrb"
	).split(" ").filter(T => !!T));
	Object.getOwnPropertyNames(KinkyDungeonConsumables).map(T => {
		if (!ignoreSet.has(T)) {
			KinkyDungeonChangeConsumable(KinkyDungeonConsumables[T], 1000);
		}
	});
};
CheatsObject.AddAllRestraints = () => {
	Array.from(KinkyDungeonRestraintsCache.values()).map(T => {
		let Rname = T.inventoryAs || T.name;
		let n = KinkyDungeonInventoryGetLoose(Rname);
		if (n) {
			if (!n.quantity) {
				n.quantity = 0;
			}
			n.quantity += 1;
		} else {
			KinkyDungeonInventoryAdd({name: Rname, type: LooseRestraint, events: T.events, quantity: 1})
		}
		return Rname;
	})
};
CheatsObject.DebugSee.ShowAllRestraint = () => {
	console.log(KinkyDungeonAllRestraint());
	return KinkyDungeonAllRestraint();
};
CheatsObject.DebugSee.ShowAllRestraintDynamic = () => {
	console.log(KinkyDungeonAllRestraintDynamic());
	return KinkyDungeonAllRestraintDynamic();
};
CheatsObject.DebugSee.ShowAllRestraintDynamicName = () => {
	console.log(KinkyDungeonAllRestraintDynamic().map((r) => KDRestraint(r.item).name));
	return KinkyDungeonAllRestraintDynamic().map((r) => KDRestraint(r.item).name);
};
CheatsObject.RemoveAllRestraint = () => {
	return KinkyDungeonAllRestraint().map((r) => KDRestraint(r)).map(T =>
		KinkyDungeonRemoveRestraint(KDRestraint(T).Group, true)
	);
};
CheatsObject.RemoveAllRestraintDynamic = () => {
	return KinkyDungeonAllRestraintDynamic().map((r) => KDRestraint(r.item)).map(T => {
		try {
			return KinkyDungeonRemoveRestraint(KDRestraint(T).Group, true)
		} catch (e) {
		}
	});
};

CheatsObject.AllSpells = () => {
	KinkyDungeonSpells = [];
	Object.assign(KinkyDungeonSpells, KinkyDungeonSpellsStart);
	for (let k of Object.keys(KinkyDungeonSpellList)) {
		for (let sp of KinkyDungeonSpellList[k]) {
			KinkyDungeonSpells.push(KinkyDungeonFindSpell(sp.name));
		}
	}
};
CheatsObject.AllHeart = () => {
	for (let i = 0; i < 10; i++) {
		KDSendInput("heart", {type: "AP"});
		KDSendInput("heart", {type: "SP"});
		KDSendInput("heart", {type: "MP"});
		KDSendInput("heart", {type: "WP"});
	}
};
// function KinkyDungeonHandleHeart() {
// 	if (MouseIn(650, 700, 250, 60) && KinkyDungeonStatDistractionMax < KDMaxStat) {
// 		KDSendInput("heart", {type: "AP"});
// 		KinkyDungeonDrawState = "Game";
// 	} else if (MouseIn(950, 700, 250, 60) && KinkyDungeonStatStaminaMax < KDMaxStat) {
// 		KDSendInput("heart", {type: "SP"});
// 		KinkyDungeonDrawState = "Game";
// 	} else if (MouseIn(1250, 700, 250, 60) && KinkyDungeonStatManaMax < KDMaxStat) {
// 		KDSendInput("heart", {type: "MP"});
// 		KinkyDungeonDrawState = "Game";
// 	} else if (MouseIn(1550, 700, 250, 60) && KinkyDungeonStatWillMax < KDMaxStat) {
// 		KDSendInput("heart", {type: "WP"});
// 		KinkyDungeonDrawState = "Game";
// 	}
//
// 	return true;
// }

CheatsObject._InnerFunction.WearRestraints = (restraints = "", lock = CheatsObject.LockList.Gold) => {
	// lock can be Purple Red White Blue Gold
	// Red White is normal key
	// Blue is magic key
	// Purple need command to unlock
	// Gold need the MistressKey to unlock
	// MistressKey need the MistressKey to unlock
	// GhostLock need the Ectoplasm to unlock
	// 2 hidden lock MistressKey GhostLock only in the Restraint config
	return restraints.split(" ").filter(T => !!T).map(T => {
			try {
				return KinkyDungeonAddRestraint(KinkyDungeonGetRestraintByName(T), 10, false, lock || CheatsObject.LockList.Gold)
			} catch (e) {
				console.error(e);
			}
		}
	);
};
CheatsObject._InnerData.WearsList = {
	// VinePlant
	VinePlant: "VinePlantArms VinePlantFeet VinePlantLegs VinePlantTorso",
	// ShadowHand
	ShadowHand: "ShadowHandMouth ShadowHandArms ShadowHandArmsHeavy ShadowHandLegs ShadowHandLegsHeavy ShadowHandCrotch ShadowHandFeet",
	// Vibe
	Vibe: "WolfPanties NippleClamps SteelPlugF SteelPlugR MaidVibe",
	// 神圣
	Divine: "DivineCuffs DivineAnkleCuffs DivineMuzzle",
	// 祝福丝带
	MysticDuct: "MysticDuctTapeHead MysticDuctTapeMouth MysticDuctTapeArmsMummy MysticDuctTapeLegsMummy MysticDuctTapeFeetMummy MysticDuctTapeBoots",
	// saber裙
	Saber: "MageArmor",
	MageArmor: "MageArmor",
	// Kitty
	Kitty: "KittyGag KittyMuzzle KittyBlindfold KittyPaws KittySuit MagicPetsuit KittyPetSuit",
	// 远古
	// EnchantedBelt 贞操带
	// EnchantedBra 贞操胸罩
	// BalletWedges undefined
	// EnchantedBlindfold 眼罩
	// EnchantedAnkleCuffs 脚铐
	// EnchantedBallGag 口球
	// EnchantedMuzzle 口套
	// EnchantedMittens 手套
	// EnchantedArmbinder 束手套
	// EnchantedHeels 远古高跟鞋
	Enchanted: "EnchantedBelt EnchantedBra EnchantedBlindfold EnchantedAnkleCuffs EnchantedBallGag EnchantedMuzzle EnchantedMittens EnchantedArmbinder EnchantedHeels",
	// 魔法
	Ribbon: "RibbonArms RibbonLegs RibbonFeet RibbonHarness RibbonCrotch DuctTape DuctTape",
	// 冰
	Ice: "IceArms IceLegs IceHarness IceGag",
	// 黄水晶
	BanditLeg: "BanditLegCuffs BanditAnkleCuffs BanditArmCuffs",
	// 水晶
	Crystal: "CrystalLegCuffs CrystalAnkleCuffs CrystalArmCuffs",
	// 龙鳞
	Dragon: "DragonArmbinder DragonStraps DragonLegCuffs DragonAnkleCuffs DragonAnkleCuffs2 DragonBoots DragonBallGag DragonMuzzleGag DragonCollar",
	// 连衣裙+紧身胸衣
	Dress: "DressCorset DressBra",
	// 黄色胶水
	Glue: "GlueLegs GlueFeet GlueBoots",
	// 狼女
	Wolf: "WolfArmbinder WolfCuffs WolfAnkleCuffs WolfHarness WolfBallGag WolfCollar WolfLeash WolfPanties",
	// Slime
	Slime: "SlimeBoots SlimeFeet SlimeLegs SlimeArms SlimeHands SlimeMouth SlimeHead",
	// // AAAAA
	// AAAAA: ,
};
(() => {
	Object.getOwnPropertyNames(CheatsObject._InnerData.WearsList).map(N => {
		CheatsObject['Wear' + N.trim()] = (lock) => {
			let r = CheatsObject._InnerData.WearsList[N];
			CheatsObject._InnerFunction.WearRestraints(r, lock || CheatsObject.LockList.Purple);
		};
	});
})();
CheatsObject.SaveLoad.GameSaveDataString = () => {
	console.log(KinkyDungeonSaveGame(true));
	return KinkyDungeonSaveGame(true);
};
CheatsObject.SaveLoad.GameSaveNow = () => {
	KinkyDungeonSaveGame(false);
};
CheatsObject.SaveLoad.CopyGameSaveDataStringToClipboard = () => {
	navigator.clipboard.writeText(KinkyDungeonSaveGame(true)).then(T => {
		console.log('CopyGameSaveDataStringToClipboard ok');
	}).catch(E => {
		console.error(E);
	});
};
CheatsObject.SaveLoad.LoadGameSaveString = (s) => {
	KinkyDungeonLoadGame(s);
};
CheatsObject.SaveLoad.LoadGameSaveStringFromClipboard = () => {
	navigator.clipboard.readText().then(s => {
		KinkyDungeonLoadGame(s);
		console.log('CopyGameSaveDataStringToClipboard ok');
	}).catch(E => {
		console.error(E);
	});
};
CheatsObject.FullAllRelations = () => {
	Object.getOwnPropertyNames(KinkyDungeonFactionRelations.Player).map(T => KinkyDungeonFactionRelations.Player[T] = 1);
};
CheatsObject.FullAllGoddess = () => {
	Object.getOwnPropertyNames(KinkyDungeonGoddessRep).map(T => KinkyDungeonGoddessRep[T] = 50);
};
CheatsObject.DebugSee.ShowAllChoice = () => {
	return Array.from(KinkyDungeonStatsChoice.entries()).filter(T => T[1]);
};
CheatsObject._InnerFunction.AddOneCheatChoice = (c, remove) => {
	if (remove) {
		KinkyDungeonStatsChoice.delete(c);
	} else {
		KinkyDungeonStatsChoice.set(c, true);
	}
};
CheatsObject._InnerFunction.AddCheatChoice = (s, remove) => {
	if (remove) {
		s.split(" ").filter(T => !!T).map(T => KinkyDungeonStatsChoice.delete(T));
	} else {
		s.split(" ").filter(T => !!T).map(T => KinkyDungeonStatsChoice.set(T, true));
	}
};
CheatsObject.ChoiceAddCheatChoiceBadNegative = (remove) => {
	// Vengeance
	// 复仇
	// Defeating an enemy greatly distracts you.
	// 击败敌人会极大地提高你的干扰值。
	// Magic Hands
	// Enemies can add restraints underneath existing restraints.
	// Nowhere
	// 草木皆兵
	// Beds and furniture are often trapped.
	// 床和木桶经常会是陷阱。
	// CommonLatex "Latex Lovers"
	// "All humanoids that can bind you also apply latex restraints."
	// CommonWolf "Wolfgirl Lovers"
	// "All humanoids that can bind you also apply wolfgirl restraints."
	// Leather Lovers	[CommonLeather] [CommonLeather]
	// All humanoids that can bind you also apply leather restraints.
	// Wolfgirl Lovers	[CommonWolf] [CommonWolf]
	// All humanoids that can bind you also apply wolfgirl restraints.
	// CommonMaid "Maid Lovers"
	// "All humanoids that can bind you also apply maid restraints."
	// CommonDress "Dress Lovers"
	// "All humanoids that can bind you also apply dress restraints."
	// CommonKitty "Kitty Lovers"
	// "All humanoids that can bind you also apply kitty restraints."
	// CommonExp "Adv Latex Lovers"
	// "All humanoids that can bind you also apply advanced latex restraints."
	// CommonFuuka "Fuuka Fan Club"
	// "All humanoids that can bind you also apply Fuuka's special restraints."
	// KinkyPrison "Kinky Prisoner"
	// "Guards never remove restraints you are already wearing, unless they are applying something tighter."

	// BallGagLover "Ball Gag Lover"
	// "Increase occurrence of ball gags, decrease occurrence of muzzles."
	// MuzzleLover "Muzzle Lover"
	// "Greatly increases the occurrence of muzzles."
	// ArmbinderLover "Armbinder Lover"
	// "More armbinders, less straitjackets."
	// JacketLover "Jacket Lover"
	// "More straitjackets, less armbinders."

	// 不可否认的	[Undeniable] [Undeniable]
	// 你生来就有强烈的顺从欲望，无法在对话时拒绝束缚请求。
	// I have... needs	[Needs] [Needs]
	// Distraction builds up over time.
	// 无法挣脱	[52] [NoWayOut]
	// 敌人将始终使用最严格的束缚具并完全束缚您。
	// 设备精良	[54] [TightRestraints]
	// 限制在一定层数以后出现的拘束具和陷阱会更早的出现，并且敌人会堆叠更多的束缚。
	CheatsObject._InnerFunction.AddCheatChoice(
		"Vengeance MagicHands Nowhere " +
		"CommonLatex CommonMaid CommonDress CommonKitty CommonExp CommonFuuka CommonWolf CommonLeather" +
		"KinkyPrison Undeniable Needs NoWayOut TightRestraints" +
		"Undeniable Needs NoWayOut TightRestraints",
		remove,
	);
};
CheatsObject.ChoiceAddCheatChoiceNowhere = (remove) => {
	// Nowhere
	// 草木皆兵
	// Beds and furniture are often trapped.
	// 床和木桶经常会是陷阱。
	CheatsObject._InnerFunction.AddCheatChoice(
		"Nowhere",
		remove,
	);
}
CheatsObject.ChoiceAddCheatChoiceMidEscape = (remove) => {
	// Slayer
	// 杀手
	// You can cast Elemental spells without having the components, at twice the cost. Start w/ Firebolt.
	// 你可以以两倍魔力消耗为代价无视施法条件使用元素法术。开局获得技能 火焰弹。
	// Conjurer
	// 咒术师
	// You can cast Conjuration spells without having the components, at twice the cost. Start w/ Conjure Chain.
	// 你可以以两倍魔力消耗为代价无视施法条件使用咒术。开局获得技能 咒术。
	// Magician
	// 魔术师
	// You can cast Illusion spells without having the components, at twice the cost. Start w/ Shadow Dagger.
	// 你可以以两倍魔力消耗为代价无视施法条件使用幻术。开局获得技能 暗影匕首。
	CheatsObject._InnerFunction.AddCheatChoice(
		"Slayer Conjurer Magician",
		remove,
	);
};
CheatsObject.ChoiceAddCheatChoiceGoodEnhance = (remove) => {
	// Psychic [Psychic]
	// 精神
	// You no longer drop keys and picks, can unlock yourself with bound hands, and don't need hands for items/potions.
	// 您不再掉落钥匙和镐，可以用拘束住的手解锁自己，并且不需要手来使用物品/药水。
	// Quick-Draw [QuickDraw]
	// Switching weapons and spells does not take a turn.
	// GroundedInReality "Grounded in Reality"
	// "While at max mana, your attacks deal an additional 30% of their base damage as electric damage."
	// Strong [Strong]
	// 强健
	// Boosts the Struggle option when escaping.
	// 加快挣扎进程。
	// Flexible [Flexible]
	// 灵活的
	// Slightly boosts the Remove/Unlock option, escaping is 1.5x as fast except picking, and your feet can use items/buckles.
	// 略微加速了移除/解锁选项，除了撬锁之外，逃脱速度是 1.5 倍，并且你的脚可以使用物品/扣环。
	// Locksmith [Locksmith]
	// 锁匠
	// You get a bonus to lockpicking, allowing you to pick some high-security locks previously impossible.
	// 您可以获得撬锁奖励，允许您尝试开一些以前不可能的高安全性锁。
	// 拘束之力	[40] [BoundPower]
	// 你的伤害和闪避会根据佩戴的束缚数量增加，完全束缚时最多 +40%。
	CheatsObject._InnerFunction.AddCheatChoice(
		"Psychic QuickDraw Strong Flexible Locksmith BoundPower",
		remove,
	);
};
CheatsObject.ChoiceAddCheatChoiceMid = (remove) => {
	// 法力冲击	[DistractionCast] [DistractionCast]
	// 当干扰值为 100% ，施法失败几率 -100%，但一次消耗过多的法力值可能会导致高潮。
	// 催化魔法	[ArousingMagic] [ArousingMagic]
	// 你的魔法由超凡脱俗的催情能量驱动，施法时会根据消耗的法力增加干扰值。
	// 冷静之术	[Clearheaded] [Clearheaded]
	// 魔法可以让你头脑清醒，成功施法时可以减少干扰值。
	CheatsObject._InnerFunction.AddCheatChoice(
		"Clearheaded ArousingMagic DistractionCast",
		remove,
	);
};
CheatsObject.ChoiceAddCheatChoiceGoodEscape = (remove) => {
	// Escapee [Escapee]
	// 流亡者
	// Start with high Leather reputation, and all leather restraints are easier to escape from.
	// 从较高的皮革声誉开始，所有皮革束缚都更容易逃脱。
	// Unchained [Unchained]
	// 无拘无束
	// Start with high Metal reputation, and all metal restraints are easier to escape from.
	// 以更高的金属声望开始，所有金属束缚更容易逃脱。
	// Escape Artist  [Artist]
	// 逃脱大师
	// Start with high Rope reputation, and all rope restraints are easier to escape from.
	// 从较高的绳索声望开始，所有绳索拘束都更容易逃脱。
	// Slippery [Slippery]
	// 顺滑
	// Start with high Latex reputation, and all latex restraints are easier to escape from.
	// 从较高的乳胶声誉开始，所有乳胶拘束都更容易摆脱。
	// Fashionable [KeepOutfit]
	// 时尚的
	// When you are jailed, you keep your outfit.
	// 当你入狱时，保留你的衣物。
	// Second Wind [SecondWind]
	// "Gain 2 WP every time you remove a non-trivial restraint."
	CheatsObject._InnerFunction.AddCheatChoice(
		"Escapee Unchained Artist Slippery KeepOutfit SecondWind",
		remove,
	);
};
CheatsObject.ChoiceAddCheatChoiceBadNoEscape = (remove) => {
	// Damsel in Chains  [Damsel]
	// 锁链中的少女
	// Metal restraints are harder to escape from.
	// 金属束缚更难逃脱。
	// Rope Bunny  [Bunny]
	// 绳模
	// Rope restraints are harder to escape from.
	// 绳索束缚更难逃脱。
	// Latex Doll [Doll]
	// 乳胶娃娃
	// Latex restraints are harder to escape from.
	// 乳胶拘束更难逃脱。
	// Leather-Bound [Dragon]
	// 皮革拘束
	// Leather restraints are harder to escape from.
	// 皮革拘束更难逃脱。
	// Bondage Lover [BondageLover]
	// 束缚爱好者
	// Attempting to escape arouses you.
	// 试图挣脱会提高你的干扰值。
	// Bound Crusader [BoundCrusader]
	// 束缚十字军
	// Goddesses will expect you to wear their restraints as their champion.
	// 女神会期望你作为她们的卫士时穿戴她们的拘束具。
	// Undeniable [KeepOutfit]
	// 不可否认的
	// Born with an intense submissive desire, you cannot refuse bondage from dialogues.
	// 你生来就有强烈的顺从欲望，无法在对话时拒绝束缚请求。
	CheatsObject._InnerFunction.AddCheatChoice(
		"Damsel Bunny Doll Dragon BondageLover BoundCrusader KeepOutfit",
		remove,
	);
};
CheatsObject.ChoiceAddCheatChoiceMap = (remove) => {
	// 困难的门	[Doorknobs] [Doorknobs]
	// 当你的手被束缚时，门更难打开。
	// 宽敞之牢	[MapLarge] [MapLarge]
	// 将每个方向的地图大小增加 1。
	// 广阔之牢	[MapHuge] [MapHuge]
	// 将每个方向的地图大小增加 2。
	// 辽阔之牢	[MapGigantic] [MapGigantic]
	// 将每个方向的地图大小增加 3。
	CheatsObject._InnerFunction.AddCheatChoice(
		"Doorknobs MapLarge MapHuge MapGigantic",
		remove,
	);
};
CheatsObject.ChoicePrintNowChoice = () => {
	const l = Array.from(KinkyDungeonStatsChoice.keys());
	let count = 0;
	for (const s of l) {
		if (KinkyDungeonStatsPresets[s]) {
			const t = TextGet("KinkyDungeonStat" + KinkyDungeonStatsPresets[s].id);
			if (t !== ("KinkyDungeonStat" + KinkyDungeonStatsPresets[s].id)) {
				console.log("" + count + "\t"
					+ t + "\t[" + KinkyDungeonStatsPresets[s].id + "] [" + s + "]"
					+ "\n\t" + TextGet("KinkyDungeonStatDesc" + KinkyDungeonStatsPresets[s].id));
			}
			++count;
		}
	}
};
CheatsObject.ChoicePrintAllValidChoice = () => {
	const l = Object.getOwnPropertyNames(KinkyDungeonStatsPresets);
	let count = 0;
	for (const s of l) {
		if (KinkyDungeonStatsPresets[s]) {
			const t = TextGet("KinkyDungeonStat" + KinkyDungeonStatsPresets[s].id);
			if (t !== ("KinkyDungeonStat" + KinkyDungeonStatsPresets[s].id)) {
				console.log("" + count + "\t"
					+ t + "\t[" + KinkyDungeonStatsPresets[s].id + "] [" + s + "]"
					+ "\n\t" + TextGet("KinkyDungeonStatDesc" + KinkyDungeonStatsPresets[s].id));
			}
			++count;
		}
	}
};
CheatsObject.HardModeEnable = () => {
	KinkyDungeonStatsChoice.set("hardMode", true);
};
CheatsObject.HardModeDisable = () => {
	KinkyDungeonStatsChoice.delete("hardMode");
};

console.log("disable Data Trace");
// disable Data Trace, to avoid cheats game data send to server
KDOptOut = true;

console.timeEnd("enchanted_restraints load time");
console.log("=============================enchanted_restraints end=============================");


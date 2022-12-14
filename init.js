'use strict';

const edgeOnly = false;

console.log("=============================enchanted_restraints begin=============================");
console.time("enchanted_restraints load time");

window.enchanted_restraints = {}
window.enchanted_restraints.KinkyDungeonRestraints = structuredClone(KinkyDungeonRestraints);

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

"CrystalLegCuffs MaidCollar MaidCBelt TrapHarness WolfHarness WolfPanties ControlHarness MagicChainCrotch MagicChainLegs ObsidianCollar MikoCollar WolfCollar WolfLeash SlimeLegs HardSlimeLegs ExpCollar".split(" ").filter(T => !!T).map(N => {
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

addTKeyF1("EnchantedMaidVibe", "??????" + "????????????", undefined, "Enchanted " + "Maid Egg");
addTKeyF1("EnchantedMaidCBelt", "??????" + "???????????????", undefined, "Enchanted " + "Maid Chastity Belt");
addTKeyF1("EnchantedNippleClamps", "??????" + "???????????????", undefined, "Enchanted " + "Nipple Massagers");
addTKeyF1("EnchantedSteelPlugF", "??????" + "??????????????????", "???????????????" + "??????" + "???????????????", "Enchanted " + "Steel Plug Front");
addTKeyF1("EnchantedSteelPlugR", "??????" + "??????????????????", "???????????????" + "??????" + "???????????????", "Enchanted " + "Steel Plug Back");
addTKeyF1("EnchantedCrystalLegCuffs", "??????" + "????????????", undefined, "Enchanted " + "Crystal Leg Cuffs");
addTKeyF1("EnchantedMaidCollar", "??????" + "????????????", undefined, "Enchanted " + "Maid Collar");
addTKeyF1("EnchantedTrapHarness", "??????" + "????????????", undefined, "Enchanted " + "Trap Harness");
addTKeyF1("EnchantedWolfPanties", "??????" + "????????????", undefined, "Enchanted " + "Wolf Panties");
addTKeyF1("EnchantedWolfHarness", "??????" + "??????????????????", undefined, "Enchanted " + "Wolf Training Harness");
addTKeyF1("EnchantedControlHarness", "??????" + "??????????????????", undefined, "Enchanted " + "Wolf Control Harness");
addTKeyF1("EnchantedWolfCollar", "??????" + "??????????????????", undefined, "Enchanted " + "Wolf Collar");
addTKeyF1("EnchantedWolfLeash", "??????" + "??????????????????", undefined, "Enchanted " + "Wolf Leash");
addTKeyF1("EnchantedMagicChainCrotch", "??????" + "?????????", undefined, "Enchanted " + "Magic Chain Crotch");
addTKeyF1("EnchantedMagicChainLegs", "??????" + "??????", undefined, "Enchanted " + "Magic Chain Legs");
addTKeyF1("EnchantedSlimeLegs", "??????" + "????????????", undefined, "Enchanted " + "Slime Legs");
addTKeyF1("HardEnchantedSlimeLegs", "??????" + "??????????????????", undefined, "Enchanted " + "Hard Slime Legs");
addTKeyF1("EnchantedObsidianCollar", "??????" + "???????????????", undefined, "Enchanted " + "Obsidian Collar");
addTKeyF1("EnchantedMikoCollar", "??????" + "Fuuka??????", undefined, "Enchanted " + "Miko Collar");
addTKeyF1("ImproveEnchantedBlindfold", "??????" + "??????" + "??????", undefined, "Improve " + "Enchanted " + "Blindfold");
addTKeyF1("EnchantedExpCollar", "??????" + "??????????????????", undefined, "Enchanted " + "Latex Posture Collar");

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
};
// a temp ref to KinkyDungeonMod_EnchantedRestraints.Cheats for short code
let CheatsObject = window.KinkyDungeonMod_EnchantedRestraints.Cheats;
// fast ref
window.Mod_EnchantedRestraints = window.KinkyDungeonMod_EnchantedRestraints

CheatsObject.FullStatOff = () => {
	if (CheatsObject._InnerData.FullStatIntervalHandle) {
		clearInterval(CheatsObject._InnerData.FullStatIntervalHandle);
		CheatsObject._InnerData.FullStatIntervalHandle = undefined;
	}
};
CheatsObject.FullStatOn = () => {
	CheatsObject.FullStatOff();
	CheatsObject._InnerData.FullStatIntervalHandle = setInterval(() => {
		CheatsObject._InnerFunction.FullStat();
	}, 1000);
};
CheatsObject._InnerFunction.FullStat = () => {
	KinkyDungeonStatMana = KinkyDungeonStatManaMax;
	KinkyDungeonStatWill = KinkyDungeonStatWillMax;
	KinkyDungeonStatStamina = KinkyDungeonStatStaminaMax;
	// KDGameData.AncientEnergyLevel = 1.0;
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
	KinkyDungeonAddGold(10000000);
	KinkyDungeonLockpicks = 1000;
	KinkyDungeonRedKeys = 1000;
	KinkyDungeonBlueKeys = 1000;
	// ???????????? use to unlock MistressKey Gold
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.MistressKey, 1000);
};
CheatsObject.AddManyPotion = () => {
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionMana, 1000);
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionStamina, 1000);
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionFrigid, 1000);
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionWill, 1000);
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ManaOrb, 1000);
	// ???????????? use to charge AncientEnergy to power the origin Enchanted Restraint
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.AncientPowerSource, 1000);
	// ?????? use to unlock GhostLock
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.Ectoplasm, 1000);
};
CheatsObject.AddAllWeapon = () => {
	Object.getOwnPropertyNames(KinkyDungeonWeapons).map(T => KinkyDungeonInventoryAddWeapon(KinkyDungeonWeapons[T].name));
};
CheatsObject.AddAllOutfit = () => {
	KinkyDungeonOutfitsBase.map(T => KinkyDungeonInventoryAddOutfit(T.name));
};
CheatsObject.AddAllConsumables = () => {
	Object.getOwnPropertyNames(KinkyDungeonConsumables).map(T => {
		KinkyDungeonChangeConsumable(KinkyDungeonConsumables[T], 1000);
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
	// ??????
	Divine: "DivineCuffs DivineAnkleCuffs DivineMuzzle",
	// ????????????
	MysticDuct: "MysticDuctTapeHead MysticDuctTapeMouth MysticDuctTapeArmsMummy MysticDuctTapeLegsMummy MysticDuctTapeFeetMummy MysticDuctTapeBoots",
	// saber???
	Saber: "MageArmor",
	MageArmor: "MageArmor",
	// Kitty
	Kitty: "KittyGag KittyMuzzle KittyBlindfold KittyPaws KittySuit MagicPetsuit KittyPetSuit",
	// ??????
	// EnchantedBelt ?????????
	// EnchantedBra ????????????
	// BalletWedges undefined
	// EnchantedBlindfold ??????
	// EnchantedAnkleCuffs ??????
	// EnchantedBallGag ??????
	// EnchantedMuzzle ??????
	// EnchantedMittens ??????
	// EnchantedArmbinder ?????????
	// EnchantedHeels ???????????????
	Enchanted: "EnchantedBelt EnchantedBra EnchantedBlindfold EnchantedAnkleCuffs EnchantedBallGag EnchantedMuzzle EnchantedMittens EnchantedArmbinder EnchantedHeels",
	// ??????
	Ribbon: "RibbonArms RibbonLegs RibbonFeet RibbonHarness RibbonCrotch DuctTape DuctTape",
	// ???
	Ice: "IceArms IceLegs IceHarness IceGag",
	// ?????????
	BanditLeg: "BanditLegCuffs BanditAnkleCuffs BanditArmCuffs",
	// ??????
	Crystal: "CrystalLegCuffs CrystalAnkleCuffs CrystalArmCuffs",
	// ?????????+????????????
	Dress: "DressCorset DressBra",
	// ????????????
	Glue: "GlueLegs GlueFeet GlueBoots",
	// ??????
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
CheatsObject._InnerFunction.AddOneCheatChoice = (c) => {
	KinkyDungeonStatsChoice.set(c, true);
};
CheatsObject._InnerFunction.AddCheatChoice = (s, remove) => {
	if (remove) {
		s.split(" ").filter(T => !!T).map(T => KinkyDungeonStatsChoice.delete(T));
	} else {
		s.split(" ").filter(T => !!T).map(T => KinkyDungeonStatsChoice.set(T, true));
	}
};
CheatsObject.AddCheatChoiceNegative = (remove) => {
	// Vengeance
	// ??????
	// Defeating an enemy greatly distracts you.
	// ????????????????????????????????????????????????
	// Magic Hands
	// Enemies can add restraints underneath existing restraints.
	// Nowhere
	// ????????????
	// Beds and furniture are often trapped.
	// ?????????????????????????????????
	// CommonLatex "Latex Lovers"
	// "All humanoids that can bind you also apply latex restraints."
	// CommonWolf "Wolfgirl Lovers"
	// "All humanoids that can bind you also apply wolfgirl restraints."
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

	CheatsObject._InnerFunction.AddCheatChoice(
		"Vengeance MagicHands Nowhere " +
		"CommonLatex CommonMaid CommonDress CommonKitty CommonExp CommonFuuka" +
		"KinkyPrison",
		remove,
	);
};
CheatsObject.AddCheatChoice = (remove) => {
	// Slayer
	// ??????
	// You can cast Elemental spells without having the components, at twice the cost. Start w/ Firebolt.
	// ???????????????????????????????????????????????????????????????????????????????????????????????? ????????????
	// Conjurer
	// ?????????
	// You can cast Conjuration spells without having the components, at twice the cost. Start w/ Conjure Chain.
	// ?????????????????????????????????????????????????????????????????????????????????????????? ?????????
	// Magician
	// ?????????
	// You can cast Illusion spells without having the components, at twice the cost. Start w/ Shadow Dagger.
	// ?????????????????????????????????????????????????????????????????????????????????????????? ???????????????
	// Psychic
	// ??????
	// You no longer drop keys and picks, can unlock yourself with bound hands, and don't need hands for items/potions.
	// ??????????????????????????????????????????????????????????????????????????????????????????????????????/?????????
	// Quick-Draw
	// Switching weapons and spells does not take a turn.
	// GroundedInReality "Grounded in Reality"
	// "While at max mana, your attacks deal an additional 30% of their base damage as electric damage."
	// Strong
	// ??????
	// Boosts the Struggle option when escaping.
	// ?????????????????????
	CheatsObject._InnerFunction.AddCheatChoice(
		"Slayer Conjurer Magician Psychic QuickDraw Vengeance GroundedInReality Strong",
		remove,
	);
};
CheatsObject.AddCheatChoiceMid = (remove) => {
	// DistractionCast "Mana Burst"
	// "While at 100% distraction, you get -100% miscast chance but spending too much mana at once may cause you to go over the edge."
	// ArousingMagic "Arousing Magic"
	// "Your magic is powered by otherworldly distracting energies. Casting spells increases distraction based on the mana spent."
	// Clearheaded "Clearheaded"
	// "Magic puts you in a clear state of mind. Casting spells successfully reduces your distraction."
	CheatsObject._InnerFunction.AddCheatChoice(
		"Clearheaded ArousingMagic DistractionCast",
		remove,
	);
};
CheatsObject.AddCheatChoiceEscape = (remove) => {
	// Escapee
	// ?????????
	// Start with high Leather reputation, and all leather restraints are easier to escape from.
	// ????????????????????????????????????????????????????????????????????????
	// Unchained
	// ????????????
	// Start with high Metal reputation, and all metal restraints are easier to escape from.
	// ?????????????????????????????????????????????????????????????????????
	// Damsel in Chains  [Damsel]
	// ??????????????????
	// Metal restraints are harder to escape from.
	// ???????????????????????????
	// Escape Artist  [Artist]
	// ????????????
	// Start with high Rope reputation, and all rope restraints are easier to escape from.
	// ????????????????????????????????????????????????????????????????????????
	// Rope Bunny  [Bunny]
	// ??????
	// Rope restraints are harder to escape from.
	// ???????????????????????????
	// Slippery
	// ??????
	// Start with high Latex reputation, and all latex restraints are easier to escape from.
	// ????????????????????????????????????????????????????????????????????????
	CheatsObject._InnerFunction.AddCheatChoice(
		"Escapee Unchained Damsel Artist Bunny Slippery",
		remove,
	);
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


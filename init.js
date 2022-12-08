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

"CrystalLegCuffs MaidCollar MaidCBelt TrapHarness WolfHarness WolfPanties ControlHarness MagicChainCrotch MagicChainLegs ObsidianCollar MikoCollar WolfCollar WolfLeash SlimeLegs HardSlimeLegs".split(" ").filter(T => !!T).map(N => {
	return (() => {
		console.log('patching : ', N);
		let T = structuredClone(KinkyDungeonRestraints.find(restraint => restraint.name === N));
		// let T = structuredClone(KinkyDungeonRestraintsCache.get(N));
		console.log('T : ', T);
		T.name = "Enchanted" + N;
		T.curse = "MistressKey";
		T.enchantedDrain = 0.00001;
		T.enchanted = true;
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
 */
let addTKeyF1 = (it, s1, s2 = undefined) => {
	// addTextKey("Restraint" + it + "Desc", s1);
	// addTextKey("Restraint" + it + "Desc2", s2 || s1);
	KinkyDungeonAddRestraintText(it, s1, s1, s2 || s1);
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

addTKeyF1("EnchantedMaidVibe", "远古" + "女仆跳蛋");
addTKeyF1("EnchantedMaidCBelt", "远古" + "女仆贞操带");
addTKeyF1("EnchantedNippleClamps", "远古" + "乳头按摩器");
addTKeyF1("EnchantedSteelPlugF", "远古" + "前不锈钢插件", "插在前面的" + "远古" + "不锈钢插件");
addTKeyF1("EnchantedSteelPlugR", "远古" + "后不锈钢插件", "插在后面的" + "远古" + "不锈钢插件");
addTKeyF1("EnchantedCrystalLegCuffs", "远古" + "水晶足拷");
addTKeyF1("EnchantedMaidCollar", "远古" + "女仆项圈");
addTKeyF1("EnchantedTrapHarness", "远古" + "皮革束衣");
addTKeyF1("EnchantedWolfPanties", "远古" + "狼女内裤");
addTKeyF1("EnchantedWolfHarness", "远古" + "狼女训练束衣");
addTKeyF1("EnchantedControlHarness", "远古" + "狼女控制束衣");
addTKeyF1("EnchantedWolfCollar", "远古" + "狼女训练项圈");
addTKeyF1("EnchantedWolfLeash", "远古" + "狼女训练牵绳");
addTKeyF1("EnchantedMagicChainCrotch", "远古" + "下体链");
addTKeyF1("EnchantedMagicChainLegs", "远古" + "腿链");
addTKeyF1("EnchantedSlimeLegs", "远古" + "史莱姆腿");
addTKeyF1("HardEnchantedSlimeLegs", "远古" + "硬化史莱姆腿");
addTKeyF1("EnchantedObsidianCollar", "远古" + "黑曜石项圈");
addTKeyF1("EnchantedMikoCollar", "远古" + "Fuuka项圈");
addTKeyF1("ImproveEnchantedBlindfold", "改良" + "远古" + "眼罩");

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
		"EnchantedWolfPanties EnchantedMaidCBelt EnchantedWolfLeash";
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
	// 远古钥匙 use to unlock MistressKey Gold
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.MistressKey, 1000);
};
CheatsObject.AddManyPotion = () => {
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionMana, 1000);
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionStamina, 1000);
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionFrigid, 1000);
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionWill, 1000);
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ManaOrb, 1000);
	// 能量水晶 use to charge AncientEnergy to power the origin Enchanted Restraint
	KinkyDungeonChangeConsumable(KinkyDungeonConsumables.AncientPowerSource, 1000);
	// 灵浆 use to unlock GhostLock
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
CheatsObject.AddOneChoice = (c) => {
	KinkyDungeonStatsChoice.set(c, true);
};
CheatsObject.AddCheatChoiceNegative = () => {
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

	(
		"Vengeance MagicHands Nowhere " +
		"CommonLatex CommonMaid CommonDress CommonKitty CommonExp CommonFuuka" +
		"KinkyPrison"
	).split(" ").map(T => KinkyDungeonStatsChoice.set(T, true));
};
CheatsObject.AddCheatChoice = () => {
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
	// Psychic
	// 精神
	// You no longer drop keys and picks, can unlock yourself with bound hands, and don't need hands for items/potions.
	// 您不再掉落钥匙和镐，可以用拘束住的手解锁自己，并且不需要手来使用物品/药水。
	// Quick-Draw
	// Switching weapons and spells does not take a turn.
	// Slippery
	// 顺滑
	// Start with high Latex reputation, and all latex restraints are easier to escape from.
	// 从较高的乳胶声誉开始，所有乳胶拘束都更容易摆脱。
	// GroundedInReality "Grounded in Reality"
	// "While at max mana, your attacks deal an additional 30% of their base damage as electric damage."
	"Slayer Conjurer Magician Psychic QuickDraw Vengeance Slippery GroundedInReality".split(" ").map(T => KinkyDungeonStatsChoice.set(T, true));
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


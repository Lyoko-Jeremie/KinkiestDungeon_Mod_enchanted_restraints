import {uniqWith, isNil} from 'lodash'
import {TickHook} from "./_TickHook";
import {Choice} from "./Choice";

class FullCheatsBase extends Choice {

    AddDistraction = (n?: number) => {
        // KinkyDungeonChangeDistraction(n || 10, true, 1);
        // let KDModCompat = {
        KDChangeDistraction('', '', '', n || 1000, true, 1);
    };
    ZeroDistraction = (n?: number) => {
        KDChangeDistraction('', '', '', n || -100000, true, 1);
    };
    SetSpellPoints = (n?: number) => {
        KinkyDungeonSpellPoints = isNil(n) ? 10000 : n;
    };
    ChangeSpellPoints = (n: number = 0) => {
        KinkyDungeonSpellPoints += n;
    };
    SetAncientEnergy = (f?: number) => {
        KDGameData.AncientEnergyLevel = f || 1.0
    };
    AddManyKeys = () => {
        // KinkyDungeonLockpicks = 1000;
        // KinkyDungeonRedKeys = 1000;
        // KinkyDungeonBlueKeys = 1000;
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.Pick, 1000);
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.RedKey, 1000);
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.BlueKey, 1000);

        // 简单的钥匙
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.CuffKeys, 1000);
        // 圆盘锁工具
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.DiscPick, 1000);

        // 钥匙卡
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.KeyCard, 1000);
        // 魔法切割机
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.EnchantedGrinder, 1000);
        // 玩偶ID
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.DollID, 1000);

        // 神圣脆脆马卡龙
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.DivineTear, 1000);
        // 精灵肥皂
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ElfCrystal, 1000);
        // 纯洁卷轴
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ScrollPurity, 1000);


        // 远古钥匙 use to unlock MistressKey Gold
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.MistressKey, 1000);
        // 能量水晶 use to charge AncientEnergy to power the origin Enchanted Restraint
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.AncientPowerSource, 1000);
        // 灵浆 use to unlock GhostLock
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.Ectoplasm, 1000);
    };
    AddManyGold = () => {
        KinkyDungeonAddGold(10000000);
    };
    AddManyPotion = () => {
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionMana, 1000);
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionStamina, 1000);
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionFrigid, 1000);
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionWill, 1000);
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ManaOrb, 1000);
    };
    AddAllWeapon = () => {
        Object.getOwnPropertyNames(KinkyDungeonWeapons).map(T => KinkyDungeonInventoryAddWeapon(KinkyDungeonWeapons[T].name));
    };
    AddAllOutfit = () => {
        KinkyDungeonOutfitsBase.map(T => KinkyDungeonInventoryAddOutfit(T.name));
    };
    AddAllConsumables = () => {
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
    AddAllRestraints = () => {
        Array.from(KinkyDungeonRestraintsCache.values()).map(T => {
            let Rname = T.inventoryAs || T.name;
            let n = KinkyDungeonInventoryGetLoose(Rname);
            if (n) {
                if (!n.quantity) {
                    n.quantity = 0;
                }
                n.quantity += 1;
            } else {
                KinkyDungeonInventoryAdd({
                    id: KinkyDungeonGetItemID(),
                    name: Rname,
                    type: LooseRestraint,
                    events: T.events,
                    quantity: 1,
                })
            }
            return Rname;
        })
    };

    //  /**
    //  *
    //  * @param {string} name
    //  * @param {boolean} SearchEnemies
    //  * @returns {spell}
    //  */
    // function KinkyDungeonFindSpell(name, SearchEnemies = false) {
    // 	if (KDSpellMemo[name]) return KDSpellMemo[name];
    // 	if (SearchEnemies) {
    // 		let spell = KinkyDungeonSearchSpell(KinkyDungeonSpellListEnemies, name);
    // 		if (spell) {
    // 			KDSpellMemo[name] = spell;
    // 			return spell;
    // 		}
    // 	}
    // 	let spell2 = KinkyDungeonSearchSpell(KinkyDungeonSpellsStart, name);
    // 	if (spell2) {
    // 		KDSpellMemo[name] = spell2;
    // 		return spell2;
    // 	}
    // 	for (let key in KinkyDungeonSpellList) {
    // 		let list = KinkyDungeonSpellList[key];
    // 		let spell = KinkyDungeonSearchSpell(list, name);
    // 		if (spell) {
    // 			KDSpellMemo[name] = spell;
    // 			return spell;
    // 		}
    // 	}
    // 	return KinkyDungeonSearchSpell(KinkyDungeonSpells, name);
    // }
    //

    AllSpells = () => {
        // function KinkyDungeonResetMagic() {
        // 	KDClearChoices();
        // 	KinkyDungeonSpellChoiceCount = 30;
        // 	KinkyDungeonSpells = [];
        // 	KDRefreshSpellCache = true;
        // 	Object.assign(KinkyDungeonSpells, KinkyDungeonSpellsStart); // Copy the dictionary
        KinkyDungeonSpells = [];
        Object.assign(KinkyDungeonSpells, KinkyDungeonSpellsStart);
        for (let k of Object.keys(KinkyDungeonSpellList)) {
            for (let sp of KinkyDungeonSpellList[k]) {
                // let KDRefreshSpellCache = true;
                // function KDPushSpell(spell) {
                // 	KinkyDungeonSpells.push(JSON.parse(JSON.stringify(spell)));
                // 	KDRefreshSpellCache = true;
                // }
                //
                //
                // KinkyDungeonSpells = [];
                // KDRefreshSpellCache = true;
                // for (let spell of saveData.spells) {
                // 	let sp = KinkyDungeonFindSpell(spell);
                // 	if (sp) KDPushSpell(sp);
                // }
                if (sp) {
                    KDPushSpell(sp);
                }
                // KinkyDungeonSpells.push(JSON.parse(JSON.stringify(KinkyDungeonFindSpell(sp.name))));
            }
        }
        KDRefreshSpellCache = true;
        KDUpdateSpellCache()
    };
    ListAllBaseSpells = () => {
        return KinkyDungeonSpellsStart;
    };
    ListAllSpells = () => {
        let spells = new Set(KinkyDungeonSpellsStart);
        for (let k of Object.keys(KinkyDungeonSpellList)) {
            for (let sp of KinkyDungeonSpellList[k]) {
                spells.add(KinkyDungeonFindSpell(sp.name));
            }
        }
        return Array.from(spells);
    };
    ListNowSpells = () => {
        return KinkyDungeonSpells;
    };
    AddOneSpell = (name: string) => {
        if (!name) {
            return;
        }
        const sp = KinkyDungeonFindSpell(name);
        if (!sp) {
            return;
        }
        KinkyDungeonSpells.push(sp);
        KinkyDungeonSpells = uniqWith(KinkyDungeonSpells, (a, b) => a.name === b.name);
    };
    RemoveOneSpell = (name: string) => {
        if (!name) {
            return;
        }
        KinkyDungeonSpells = KinkyDungeonSpells.filter(T => T.name !== name);
    };

    AllHeart = () => {
        if (typeof KinkyDungeonGrid === "undefined") {
            return;
            // new version 5.0
            KDMaxStatStart = 100;
            KDMaxStatStartPool = 100;
            KDMaxStat = 500;
        } else {
            // old version
            for (let i = 0; i < 10; i++) {
                KDSendInput("heart", {type: "AP"});
                KDSendInput("heart", {type: "SP"});
                KDSendInput("heart", {type: "MP"});
                KDSendInput("heart", {type: "WP"});
            }
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
    FullAllRelations = () => {
        Object.getOwnPropertyNames(KinkyDungeonFactionRelations.Player).map(T => {
            KinkyDungeonFactionRelations.Player[T] = 1;
        });
    };
    ZeroAllRelations = () => {
        Object.getOwnPropertyNames(KinkyDungeonFactionRelations.Player).map(T => {
            KinkyDungeonFactionRelations.Player[T] = 0;
        });
    };
    NegativeAllRelations = () => {
        Object.getOwnPropertyNames(KinkyDungeonFactionRelations.Player).map(T => {
            KinkyDungeonFactionRelations.Player[T] = -1;
        });
    };
    FullAllGoddess = (v: number = 50) => {
        Object.getOwnPropertyNames(KinkyDungeonShrineBaseCosts).map(T => KinkyDungeonGoddessRep[T] += v);
    };
    ZeroAllGoddess = () => {
        Object.getOwnPropertyNames(KinkyDungeonShrineBaseCosts).map(T => KinkyDungeonGoddessRep[T] = 0);
    };
    NegativeAllGoddess = (v: number = 50) => {
        Object.getOwnPropertyNames(KinkyDungeonShrineBaseCosts).map(T => KinkyDungeonGoddessRep[T] += -v);
    };
    FullAllReputationState = (v: number = 50) => {
        Object.getOwnPropertyNames(KinkyDungeonGoddessRep).map(T => {
            if (!(T in KinkyDungeonShrineBaseCosts)) {
                KinkyDungeonGoddessRep[T] += v;
            }
        });
    };
    ClearAllReputationState = () => {
        Object.getOwnPropertyNames(KinkyDungeonGoddessRep).map(T => {
            if (!(T in KinkyDungeonShrineBaseCosts)) {
                KinkyDungeonGoddessRep[T] = 0;
            }
        });
    };
    NegativeAllReputationState = (v: number = 50) => {
        Object.getOwnPropertyNames(KinkyDungeonGoddessRep).map(T => {
            if (!(T in KinkyDungeonShrineBaseCosts)) {
                KinkyDungeonGoddessRep[T] += -v;
            }
        });
    };

    GoddessRepKeyList() {
        return Object.getOwnPropertyNames(KinkyDungeonGoddessRep);
    }

    GoddessRepChange(T: keyof typeof KinkyDungeonGoddessRep, v: number = 50) {
        if ((T in KinkyDungeonGoddessRep)) {
            KinkyDungeonGoddessRep[T] += v;
        }
    }

    GoddessRepSet(T: keyof typeof KinkyDungeonGoddessRep, v: number = 0) {
        if ((T in KinkyDungeonGoddessRep)) {
            KinkyDungeonGoddessRep[T] = v;
        }
    }

    GetAllGoddessRep(): [string, number][] {
        return Object.getOwnPropertyNames(KinkyDungeonGoddessRep).map(T => {
            return [T, KinkyDungeonGoddessRep[T]];
        });
    }

    GetAllFactionRelations(): [string, number][] {
        return Object.getOwnPropertyNames(KinkyDungeonFactionRelations.Player).map(T => {
            return [T, KinkyDungeonFactionRelations.Player[T]];
        });
    }

    // Reputation
    // KinkyDungeonGoddessRep
    //
    // {
    //   "Ghost": 50,
    //   "Prisoner": 50,
    //   "Frustration": 50,
    //   "Passion": 31.144000000000048,
    //
    //   "Leather": 50,
    //   "Latex": 50,
    //   "Rope": 50,
    //   "Metal": 50,
    //   "Will": 50,
    //   "Elements": 50,
    //   "Conjure": 50,
    //   "Illusion": 50
    // }
    // [ 'Ghost', 'Prisoner', 'Frustration', 'Passion', 'Leather', 'Latex', 'Rope', 'Metal', 'Will', 'Elements', 'Conjure', 'Illusion' ]
    // [
    //   "顺从度",
    //   "安全级别",
    //   "懊恼",
    //   "激情",
    //
    //   "皮革",
    //   "乳胶",
    //   "绳索",
    //   "金属",
    //   "恢复",
    //   "精灵",
    //   "咒术",
    //   "幻术"
    // ]
    //
    // Shrine
    //
    // let KinkyDungeonShrineBaseCosts = {
    // 	//"Charms": 25,
    // 	"Leather": 40,
    // 	"Latex": 40,
    // 	"Rope": 20,
    // 	"Metal": 60,
    // 	"Will": 20,
    // 	"Elements": 200,
    // 	"Conjure": 200,
    // 	"Illusion": 200,
    // };
    // [ 'Leather', 'Latex', 'Rope', 'Metal', 'Will', 'Elements', 'Conjure', 'Illusion' ]
    // [ "皮革", "乳胶", "绳索", "金属", "恢复", "精灵", "咒术", "幻术" ]

}

// function KDSwitchWeapon() {
//     let previousWeapon = KDGameData.PreviousWeapon ? KDGameData.PreviousWeapon : null;
//     if (!previousWeapon || KinkyDungeonInventoryGet(previousWeapon))
//         KDSendInput("switchWeapon", {weapon: previousWeapon});
// }

class CheatsHook extends FullCheatsBase {
    _TickHook = new TickHook('CheatsHook');

    setupHook_CheatsHook(windowPtr: Window) {
        console.log("CheatsHook setupHook_CheatsHook");
        this._TickHook.setupHook(windowPtr);
    }

    FullStatIntervalHandle?: number;
    InvisibilityIntervalHandle?: number;
    MaxEmpowerIntervalHandle?: number;
    EnemySenseIntervalHandle?: number;
    Quickness5IntervalHandle?: number;

    DisableFullState = () => {
        if (this.FullStatIntervalHandle) {
            this._TickHook.removeHook(this.FullStatIntervalHandle);
            this.FullStatIntervalHandle = undefined;
        }
    };
    EnableFullState = () => {
        this.DisableFullState();
        this.FullStatIntervalHandle = this._TickHook.addHook(() => {
            this._FullStat();
        });
        this._FullStat();
    };
    _FullStat = () => {
        KinkyDungeonStatMana = KinkyDungeonStatManaMax;
        KinkyDungeonStatWill = KinkyDungeonStatWillMax;
        KinkyDungeonStatStamina = KinkyDungeonStatStaminaMax;
        KinkyDungeonStatManaPool = KinkyDungeonStatManaPoolMax;
        // KDGameData.AncientEnergyLevel = 1.0;
    };


    DisableQuickness5 = () => {
        if (this.Quickness5IntervalHandle) {
            this._TickHook.removeHook(this.Quickness5IntervalHandle);
            this.Quickness5IntervalHandle = undefined;
        }
        this._SetQuickness5(true);
    };
    EnableQuickness5 = () => {
        this.DisableQuickness5();
        this.Quickness5IntervalHandle = this._TickHook.addHook(() => {
            this._SetQuickness5();
        });
    };
    _SetQuickness5 = (remove?: boolean) => {
        // KinkyDungeonApplyBuff(KinkyDungeonPlayerBuffs, {id: "EnemySense", type: "EnemySense", duration: 100});
        const buffObj = {
            Quickness2: {
                "id": "Quickness2",
                "type": "TimeSlow",
                "duration": 99,
                "aura": "#ffffff",
                "power": 2
            },
            Quickness22: {
                "id": "Quickness22",
                "type": "StatGainStamina",
                "duration": 99,
                "power": -0.5
            },
            Quickness5: {
                "id": "Quickness5",
                "type": "TimeSlow",
                "duration": 99,
                "aura": "#ffffff",
                "power": 10
            },
            Quickness52: {
                "id": "Quickness52",
                "type": "StatGainStamina",
                "duration": 99,
                "power": 100
            },
        };
        this._SetBuffIfEnabled(buffObj, remove);
        if (!remove) {
            let timeSlow = KDEntityBuffedStat(KinkyDungeonPlayerEntity, "TimeSlow");
            if (timeSlow) {
                KinkyDungeonFlags.set("TimeSlow", 100);
            }
        } else {
            KinkyDungeonFlags.delete("TimeSlow");
        }
    };


    DisableEnemySense = () => {
        if (this.EnemySenseIntervalHandle) {
            this._TickHook.removeHook(this.EnemySenseIntervalHandle);
            this.EnemySenseIntervalHandle = undefined;
        }
    };
    EnableEnemySense = () => {
        this.DisableEnemySense();
        this.EnemySenseIntervalHandle = this._TickHook.addHook(() => {
            this._SetEnemySense();
        });
    };
    _SetEnemySense = (remove?: boolean) => {
        // KinkyDungeonApplyBuff(KinkyDungeonPlayerBuffs, {id: "EnemySense", type: "EnemySense", duration: 100});
        const buffObj = {
            EnemySense: {
                id: "EnemySense",
                type: "EnemySense",
                duration: 100,
            },
            Analyze: {
                id: "Analyze",
                aura: "#ff5555",
                type: "MagicalSight",
                power: 5,
                duration: 100,
            },
            Light: {
                id: "Light",
                type: "Light",
                duration: 100,
            },
        };
        this._SetBuffIfEnabled(buffObj, remove);
    };
    _SetBuff = (buffObj: any, remove?: boolean) => {
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
                // console.log('_SetBuff k', k, 'T', T, 'it', it);
                if (it) {
                    it.duration = buffObj[T].duration || 100;
                } else {
                    KinkyDungeonPlayerBuffs[T] = buffObj[T];
                }
            });
        }
        // console.log('_SetBuff KinkyDungeonPlayerBuffs', structuredClone(KinkyDungeonPlayerBuffs));
    };
    _SetBuffIfEnabled = (buffObj: any, remove?: boolean) => {
        const k = Object.getOwnPropertyNames(buffObj);
        if (remove) {
            k.forEach(T => delete KinkyDungeonPlayerBuffs[T]);
        } else {
            k.forEach(T => {
                const it = KinkyDungeonPlayerBuffs[T];
                // console.log('_SetBuffIfEnabled k', k, 'T', T, 'it', it);
                if (it) {
                    it.duration = buffObj[T].duration || 100;
                } else {
                    // KinkyDungeonPlayerBuffs[T] = buffObj[T];
                }
            });
        }
        // console.log('_SetBuff KinkyDungeonPlayerBuffs', structuredClone(KinkyDungeonPlayerBuffs));
    };
    DisableInvisibility = () => {
        // this.PatchInvisibility(true);
        if (this.InvisibilityIntervalHandle) {
            this._TickHook.removeHook(this.InvisibilityIntervalHandle);
            this.InvisibilityIntervalHandle = undefined;
        }
        this._SetInvisibility(true);
    };
    EnableInvisibility = () => {
        this.DisableInvisibility();
        this.InvisibilityIntervalHandle = this._TickHook.addHook(() => {
            this._SetInvisibility();
        });
    };
// this.PatchInvisibility = (recover) => {
// 	const n = KinkyDungeonSpellList.Illusion.find(T => T.name === "Invisibility");
// 	if (recover) {
// 		n.manacost = 8;
// 	} else {
// 		n.manacost = 0;
// 	}
// };
    _SetInvisibility = (remove?: boolean) => {
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
                duration: 100,
                power: 10.0,
                player: true,
                enemies: true,
                tags: ["invisibility"]
            },
            Invisibility2: {
                id: "Invisibility2",
                type: "SlowDetection",
                duration: 100,
                power: 0.5,
                player: true,
                enemies: false,
                tags: ["invisibility"]
            },
            GreaterInvisibility: {
                "id": "GreaterInvisibility",
                "aura": "#a45fd7",
                "type": "Invisible",
                "duration": 100,
                "power": 1.5,
                "player": true,
                "tags": ["invisibility"]
            },
        };
        this._SetBuff(buffObj, remove);
    };
    DisableMaxEmpower = () => {
        if (this.MaxEmpowerIntervalHandle) {
            this._TickHook.removeHook(this.MaxEmpowerIntervalHandle);
            this.MaxEmpowerIntervalHandle = undefined;
        }
        this._SetKDEmpower(true);
    };
    EnableMaxEmpower = () => {
        this.DisableMaxEmpower();
        this.MaxEmpowerIntervalHandle = this._TickHook.addHook(() => {
            this._SetKDEmpower();
        });
    };
    _SetKDEmpower = (remove?: boolean) => {
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
                duration: 100,
                tags: ["cast", "upcast"],
            }
        };
        this._SetBuff(buffObj, remove);
    };

}

class Bootstrap extends CheatsHook {
    KinkyDungeonSpellsCacheMap?: Map<string, [number, spell]>;


    BootstrapSpellChoicesTable = () => {
        this.KinkyDungeonSpellsCacheMap = (new Map(KinkyDungeonSpells.map((T, i) => [T.name, [i, T]])));
        // const nameList = Array.from(Array(KinkyDungeonSpellChoiceCount).keys()).map(I=>KinkyDungeonSpells[KinkyDungeonSpellChoices[ I ]]?.name)
        // generate by
        // JSON.stringify(Array.from(Array(KinkyDungeonSpellChoiceCount).keys()).map(I=>KinkyDungeonSpells[KinkyDungeonSpellChoices[ I ]]?.name));
        const nameList: string[] = JSON.parse(
            '["Leap","Fissure","Icicles","Crackle","Heal2","Heal","CommandWordGreater","CommandDisenchant","CommandRelease","CommandSlime","RecoverObject","Strength","Engulf","FloatingWeapon","Analyze","TrueSight","EnemySense","Invisibility","Light","Quickness2","FlameBlade",null,null,null,null,null,null,null,null,null]'
        );
        KinkyDungeonSpellChoices = nameList.map(n => (this.KinkyDungeonSpellsCacheMap!.get(n) || [undefined, undefined])[0]);
        // generate by
        // JSON.stringify(KinkyDungeonSpellChoicesToggle)
        KinkyDungeonSpellChoicesToggle =
            JSON.parse(
                "[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,false,false]"
            );
    };
    RemoveAllKeyTools = () => {
        // KinkyDungeonLockpicks = 0;
        // KinkyDungeonRedKeys = 0;
        // KinkyDungeonBlueKeys = 0;
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.Pick, -KinkyDungeonItemCount('Pick'));
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.RedKey, -KinkyDungeonItemCount('RedKey'));
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.BlueKey, -KinkyDungeonItemCount('BlueKey'));

        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.CuffKeys, -KinkyDungeonItemCount('CuffKeys'));
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.DiscPick, -KinkyDungeonItemCount('DiscPick'));

        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.KeyCard, -KinkyDungeonItemCount('KeyCard'));
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.EnchantedGrinder, -KinkyDungeonItemCount('EnchantedGrinder'));
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.DollID, -KinkyDungeonItemCount('DollID'));

        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.DivineTear, -KinkyDungeonItemCount('DivineTear'));
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ElfCrystal, -KinkyDungeonItemCount('ElfCrystal'));
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ScrollPurity, -KinkyDungeonItemCount('ScrollPurity'));

        // 远古钥匙 use to unlock MistressKey Gold
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.MistressKey, -KinkyDungeonItemCount('MistressKey'));
        // 能量水晶 use to charge AncientEnergy to power the origin Enchanted Restraint
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.AncientPowerSource, -KinkyDungeonItemCount('AncientPowerSource'));
        // 灵浆 use to unlock GhostLock
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.Ectoplasm, -KinkyDungeonItemCount('Ectoplasm'));

        KinkyDungeonAddGold(-KinkyDungeonGold);

        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionMana, -KinkyDungeonItemCount('PotionMana'));
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionStamina, -KinkyDungeonItemCount('PotionStamina'));
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionFrigid, -KinkyDungeonItemCount('PotionFrigid'));
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.PotionWill, -KinkyDungeonItemCount('PotionWill'));
        KinkyDungeonChangeConsumable(KinkyDungeonConsumables.ManaOrb, -KinkyDungeonItemCount('ManaOrb'));
    };
    AddAllKeyTools = () => {
        this.AddManyKeys();
        this.AddManyPotion();
        this.AddManyGold();
    };
    BootstrapAllGood = () => {
        this.AddManyKeys();
        this.AddManyGold();

        this.Add1000MaxState();

        this.BootstrapSimpleGood();
    };
    BootstrapSimpleGood = () => {
        // AddManyKeys();
        // AddManyGold();
        this.AddManyPotion();
        this.AddAllWeapon();
        this.AddAllOutfit();
        this.AddAllConsumables();
        this.AddAllRestraints();
        this.AllSpells();
        this.AllHeart();
        this.ChoiceAddCheatChoiceGoodEscape();
        this.ChoiceAddCheatChoiceGoodEnhance();
        this.ChoiceAddCheatChoiceMidEscape();
        this.EnableAllCheats();
    };
    BootstrapAllNegative = () => {
        this.ChoiceAddCheatChoiceBadNegative();
        this.ChoiceAddCheatChoiceBadNoEscape();
    };
    EnableAllCheats = () => {
        this.EnableFullState();
        this.EnableEnemySense();
        // this.EnableQuickness5();
        this.EnableInvisibility();
        this.EnableMaxEmpower();
    };
    DisableAllCheats = () => {
        this.DisableFullState();
        this.DisableEnemySense();
        this.DisableQuickness5();
        this.DisableInvisibility();
        this.DisableMaxEmpower();
    };
    Add1000MaxState = () => {
        // 性欲 分心
        KDGameData.StatMaxBonus['AP'] += 100;
        // 魔力
        KDGameData.StatMaxBonus['MP'] += 100;
        // 体力
        KDGameData.StatMaxBonus['SP'] += 100;
        // 意志
        KDGameData.StatMaxBonus['WP'] += 100;

        KinkyDungeonStatManaPoolMax += 1000;

        KinkyDungeonUpdateStats(0);

        KDGameData.CollectedHearts = (KDGameData.CollectedHearts || 0) + 10;

    }
    // KDMapData.Tiles["12,3"] = { Type: "Tablet", Name: "Heart", Light: 3 , lightColor: 8947967 }
    // KinkyDungeonMapSet(12,3,'M')
    //
    //
    // 		case "heart": {
    // 			KDDelayedActionPrune(["Action", "World"]);
    // 			tile = KinkyDungeonTilesGet(data.targetTile);
    // 			if (tile) {
    // 				let amnt = (data.amount || 3);
    // 				if (data.type == "AP") {
    // 					if (KinkyDungeonStatDistractionMax < KDMaxStat) //for (let i = 0; i < amnt; i++) KDPushSpell(KinkyDungeonFindSpell("APUp1"));
    // 						KDGameData.StatMaxBonus[data.type] += amnt;
    // 					KinkyDungeonUpdateStats(0);
    // 				}else if (data.type == "SP") {
    // 					if (KinkyDungeonStatStaminaMax < KDMaxStat)// for (let i = 0; i < amnt; i++) KDPushSpell(KinkyDungeonFindSpell("SPUp1"));
    // 						KDGameData.StatMaxBonus[data.type] += amnt;
    // 					KinkyDungeonUpdateStats(0);
    // 				} else if (data.type == "MP") {
    // 					if (KinkyDungeonStatManaMax < KDMaxStat)// for (let i = 0; i < amnt; i++) KDPushSpell(KinkyDungeonFindSpell("MPUp1"));
    // 						KDGameData.StatMaxBonus[data.type] += amnt;
    // 					KinkyDungeonUpdateStats(0);
    // 				} else if (data.type == "WP") {
    // 					if (KinkyDungeonStatWillMax < KDMaxStat) //for (let i = 0; i < amnt; i++) KDPushSpell(KinkyDungeonFindSpell("WPUp1"));
    // 						KDGameData.StatMaxBonus[data.type] += amnt;
    // 					KinkyDungeonUpdateStats(0);
    // 				}
    // 				KDGameData.CollectedHearts = (KDGameData.CollectedHearts || 0) + 1;
    //
    // 				// Send the message and advance time
    // 				KinkyDungeonAdvanceTime(1);
    // 				KinkyDungeonSendActionMessage(10, TextGet("KinkyDungeonTabletReadSuccess"), "lightgreen", 1);
    //
    // 				KinkyDungeonTargetTile = null;
    // 				KinkyDungeonTargetTileLocation = "";
    // 				KDModalArea = false;
    //
    // 				// Remove the tile
    // 				let x = parseInt(data.targetTile.split(',')[0]);
    // 				let y = parseInt(data.targetTile.split(',')[1]);
    // 				if (x && y) {
    // 					KinkyDungeonMapSet(x, y, 'm');
    // 					KinkyDungeonTilesDelete(data.targetTile);
    // 				}
    // 			}
    // 			break;
}

export class FullCheats extends Bootstrap {

}

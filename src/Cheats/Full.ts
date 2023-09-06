import {isSafeInteger} from 'lodash'
import {TickHook} from "./_TickHook";
import {Choice} from "./Choice";

class FullCheatsBase extends Choice {

    AddDistraction = (n?: number) => {
        KinkyDungeonChangeDistraction(n || 10, true, 1);
    };
    SetSpellPoints = (n?: number) => {
        KinkyDungeonSpellPoints = n || 10000;
    };
    SetAncientEnergy = (f?: number) => {
        KDGameData.AncientEnergyLevel = f || 1.0
    };
    AddManyKeys = () => {
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

    AllSpells = () => {
        KinkyDungeonSpells = [];
        Object.assign(KinkyDungeonSpells, KinkyDungeonSpellsStart);
        for (let k of Object.keys(KinkyDungeonSpellList)) {
            for (let sp of KinkyDungeonSpellList[k]) {
                KinkyDungeonSpells.push(KinkyDungeonFindSpell(sp.name));
            }
        }
    };
    AllHeart = () => {
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
    FullAllRelations = () => {
        Object.getOwnPropertyNames(KinkyDungeonFactionRelations.Player).map(T => {
            KinkyDungeonFactionRelations.Player[T] = 1;
        });
    };
    FullAllGoddess = () => {
        Object.getOwnPropertyNames(KinkyDungeonGoddessRep).map(T => KinkyDungeonGoddessRep[T] = 50);
    };
}

// function KDSwitchWeapon() {
//     let previousWeapon = KDGameData.PreviousWeapon ? KDGameData.PreviousWeapon : null;
//     if (!previousWeapon || KinkyDungeonInventoryGet(previousWeapon))
//         KDSendInput("switchWeapon", {weapon: previousWeapon});
// }

class CheatsHook extends FullCheatsBase {
    _TickHook = new TickHook();

    setupHook(windowPtr: Window) {
        this._TickHook.setupHook(windowPtr);
    }

    FullStatIntervalHandle?: number;
    InvisibilityIntervalHandle?: number;
    MaxEmpowerIntervalHandle?: number;
    EnemySenseIntervalHandle?: number;

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
        this._SetBuff(buffObj, remove);
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
                if (it) {
                    it.duration = buffObj[T].duration || 1000;
                } else {
                    KinkyDungeonPlayerBuffs[T] = buffObj[T];
                }
            });
        }
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
                duration: 1000,
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
            '["Leap","Fissure","Icicles","Crackle",null,"Heal2","Heal","CommandWord","CommandRelease","CommandSlime",null,null,"Engulf","FloatingWeapon","Analyze","TrueSight","EnemySense","Invisibility","Light",null,"FlameBlade"]'
        );
        KinkyDungeonSpellChoices = nameList.map(n => (this.KinkyDungeonSpellsCacheMap!.get(n) || [undefined, undefined])[0]);
        // generate by
        // JSON.stringify(KinkyDungeonSpellChoicesToggle)
        KinkyDungeonSpellChoicesToggle =
            JSON.parse(
                "[true,true,true,true,null,true,true,true,true,true,null,true,true,true,true,true,true,true,true,null,true]"
            );
    };
    BootstrapAllGood = () => {
        this.AddManyKeys();
        this.AddManyGold();

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
        this.EnableInvisibility();
        this.EnableMaxEmpower();
    };
    DisableAllCheats = () => {
        this.DisableFullState();
        this.DisableEnemySense();
        this.DisableInvisibility();
        this.DisableMaxEmpower();
    };
}

export class FullCheats extends Bootstrap {

}

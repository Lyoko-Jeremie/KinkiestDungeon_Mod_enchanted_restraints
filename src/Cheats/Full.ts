import {isSafeInteger} from 'lodash'
import {TickHook} from "./_TickHook";
import {Choice} from "./Choice";

class FullCheatsBase extends Choice {

    AddDistraction = (n?: number) => {
        window.KinkyDungeonChangeDistraction(n || 10, true, 1);
    };
    SetSpellPoints = (n?: number) => {
        window.KinkyDungeonSpellPoints = n || 10000;
    };
    SetAncientEnergy = (f?: number) => {
        window.KDGameData.AncientEnergyLevel = f || 1.0
    };
    AddManyKeys = () => {
        window.KinkyDungeonLockpicks = 1000;
        window.KinkyDungeonRedKeys = 1000;
        window.KinkyDungeonBlueKeys = 1000;
        // 远古钥匙 use to unlock MistressKey Gold
        window.KinkyDungeonChangeConsumable(window.KinkyDungeonConsumables.MistressKey, 1000);
        // 能量水晶 use to charge AncientEnergy to power the origin Enchanted Restraint
        window.KinkyDungeonChangeConsumable(window.KinkyDungeonConsumables.AncientPowerSource, 1000);
        // 灵浆 use to unlock GhostLock
        window.KinkyDungeonChangeConsumable(window.KinkyDungeonConsumables.Ectoplasm, 1000);
    };
    AddManyGold = () => {
        window.KinkyDungeonAddGold(10000000);
    };
    AddManyPotion = () => {
        window.KinkyDungeonChangeConsumable(window.KinkyDungeonConsumables.PotionMana, 1000);
        window.KinkyDungeonChangeConsumable(window.KinkyDungeonConsumables.PotionStamina, 1000);
        window.KinkyDungeonChangeConsumable(window.KinkyDungeonConsumables.PotionFrigid, 1000);
        window.KinkyDungeonChangeConsumable(window.KinkyDungeonConsumables.PotionWill, 1000);
        window.KinkyDungeonChangeConsumable(window.KinkyDungeonConsumables.ManaOrb, 1000);
    };
    AddAllWeapon = () => {
        Object.getOwnPropertyNames(window.KinkyDungeonWeapons).map(T => window.KinkyDungeonInventoryAddWeapon(window.KinkyDungeonWeapons[T].name));
    };
    AddAllOutfit = () => {
        window.KinkyDungeonOutfitsBase.map(T => window.KinkyDungeonInventoryAddOutfit(T.name));
    };
    AddAllConsumables = () => {
        const ignoreSet = new Set((
            "MistressKey AncientPowerSource Ectoplasm " +
            "PotionMana PotionStamina PotionFrigid PotionWill ManaOrb"
        ).split(" ").filter(T => !!T));
        Object.getOwnPropertyNames(window.KinkyDungeonConsumables).map(T => {
            if (!ignoreSet.has(T)) {
                window.KinkyDungeonChangeConsumable(window.KinkyDungeonConsumables[T], 1000);
            }
        });
    };
    AddAllRestraints = () => {
        Array.from(window.KinkyDungeonRestraintsCache.values()).map(T => {
            let Rname = T.inventoryAs || T.name;
            let n = window.KinkyDungeonInventoryGetLoose(Rname);
            if (n) {
                if (!n.quantity) {
                    n.quantity = 0;
                }
                n.quantity += 1;
            } else {
                window.KinkyDungeonInventoryAdd({
                    id: window.KinkyDungeonGetItemID(),
                    name: Rname,
                    type: window.LooseRestraint,
                    events: T.events,
                    quantity: 1,
                })
            }
            return Rname;
        })
    };

    AllSpells = () => {
        window.KinkyDungeonSpells = [];
        Object.assign(window.KinkyDungeonSpells, window.KinkyDungeonSpellsStart);
        for (let k of Object.keys(window.KinkyDungeonSpellList)) {
            for (let sp of window.KinkyDungeonSpellList[k]) {
                window.KinkyDungeonSpells.push(window.KinkyDungeonFindSpell(sp.name));
            }
        }
    };
    AllHeart = () => {
        for (let i = 0; i < 10; i++) {
            window.KDSendInput("heart", {type: "AP"});
            window.KDSendInput("heart", {type: "SP"});
            window.KDSendInput("heart", {type: "MP"});
            window.KDSendInput("heart", {type: "WP"});
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
        Object.getOwnPropertyNames(window.KinkyDungeonFactionRelations.Player).map(T => {
            window.KinkyDungeonFactionRelations.Player[T] = 1;
        });
    };
    FullAllGoddess = () => {
        Object.getOwnPropertyNames(window.KinkyDungeonGoddessRep).map(T => window.KinkyDungeonGoddessRep[T] = 50);
    };
}

// function KDSwitchWeapon() {
//     let previousWeapon = KDGameData.PreviousWeapon ? KDGameData.PreviousWeapon : null;
//     if (!previousWeapon || KinkyDungeonInventoryGet(previousWeapon))
//         KDSendInput("switchWeapon", {weapon: previousWeapon});
// }

class CheatsHook extends FullCheatsBase {
    _TickHook = new TickHook();

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
        window.KinkyDungeonStatMana = window.KinkyDungeonStatManaMax;
        window.KinkyDungeonStatWill = window.KinkyDungeonStatWillMax;
        window.KinkyDungeonStatStamina = window.KinkyDungeonStatStaminaMax;
        window.KinkyDungeonStatManaPool = window.KinkyDungeonStatManaPoolMax;
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
            k.forEach(T => delete window.KinkyDungeonPlayerBuffs[T]);
        } else {
            k.forEach(T => {
                const it = window.KinkyDungeonPlayerBuffs[T];
                if (it) {
                    it.duration = buffObj[T].duration || 1000;
                } else {
                    window.KinkyDungeonPlayerBuffs[T] = buffObj[T];
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
        this.KinkyDungeonSpellsCacheMap = (new Map(window.KinkyDungeonSpells.map((T, i) => [T.name, [i, T]])));
        // const nameList = Array.from(Array(KinkyDungeonSpellChoiceCount).keys()).map(I=>KinkyDungeonSpells[KinkyDungeonSpellChoices[ I ]]?.name)
        // generate by
        // JSON.stringify(Array.from(Array(KinkyDungeonSpellChoiceCount).keys()).map(I=>KinkyDungeonSpells[KinkyDungeonSpellChoices[ I ]]?.name));
        const nameList: string[] = JSON.parse(
            '["Leap","Fissure","Icicles","Crackle",null,"Heal2","Heal","CommandWord","CommandRelease","CommandSlime",null,null,"Engulf","FloatingWeapon","Analyze","TrueSight","EnemySense","Invisibility","Light",null,"FlameBlade"]'
        );
        window.KinkyDungeonSpellChoices = nameList
            .map(n => (this.KinkyDungeonSpellsCacheMap!.get(n) || [undefined, undefined])[0])
            .filter(T => isSafeInteger(T)) as number[];
        // generate by
        // JSON.stringify(KinkyDungeonSpellChoicesToggle)
        window.KinkyDungeonSpellChoicesToggle =
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

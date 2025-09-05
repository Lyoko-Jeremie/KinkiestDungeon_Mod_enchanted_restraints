import {isSafeInteger, clone, cloneDeep, isArray} from 'lodash';
import {LockList, LockList2RealLock} from "./LockList";
import {FunctionPatchHooker, PatchHookConfig} from "../FunctionPatch/FunctionPatch";

export const WearsList = {
    // VinePlant
    VinePlant: "VinePlantArms VinePlantFeet VinePlantLegs VinePlantTorso",
    // ShadowHand
    ShadowHand: "ShadowHandMouth ShadowHandArms ShadowHandArmsHeavy ShadowHandLegs ShadowHandLegsHeavy ShadowHandCrotch ShadowHandFeet",
    // Vibe
    Vibe: "WolfPanties NippleClamps3 SteelPlugF SteelPlugR MaidVibe",
    TrapPlug: "TrapPlug TrapPlug2 TrapPlug3 TrapPlug4 TrapPlug5",
    NippleClamps: "NippleClamps NippleClamps2 NippleClamps3",
    TrapVibeProto: "TrapVibe TrapVibeProto",
    MaxVibe: "TrapPlug5 NippleClamps3 WolfPanties TrapVibeProto RearVibe1",
    EnchantedMaxVibe: "EnchantedTrapPlug5 EnchantedNippleClamps3 EnchantedWolfPanties EnchantedTrapVibeProto EnchantedRearVibe1",
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
    Ribbon: "RibbonArms RibbonLegs RibbonFeet RibbonHarness RibbonCrotch DuctTape",
    // 冰
    Ice: "IceArms IceLegs IceHarness IceGag",
    // 黄水晶
    BanditLeg: "BanditLegCuffs BanditAnkleCuffs BanditArmCuffs",
    // 水晶
    // Crystal: "CrystalLegCuffs CrystalAnkleCuffs CrystalArmCuffs",
    // 龙鳞
    Dragon: "DragonArmbinder DragonStraps DragonLegCuffs DragonAnkleCuffs DragonAnkleCuffs2 DragonBoots DragonBallGag DragonMuzzleGag DragonCollar",
    // 连衣裙+紧身胸衣
    Dress: "DressCorset DressBra",
    // 黄色胶水
    Glue: "GlueLegs GlueFeet GlueBoots",
    // 狼女
    Wolf: "WolfArmbinder WolfCuffs WolfAnkleCuffs WolfHarness WolfBallGag WolfCollar WolfLeash WolfPanties",
    // CyberDoll
    CyberDoll: "CyberBelt CyberBra CyberBallGag CyberPlugGag CyberMuzzle CyberDollJacket CyberArmCuffs CyberAnkleCuffs CyberLegCuffs CyberHeels",
    CyberAnkle: "CyberAnkleCuffs CyberAnkleCuffs2 CyberAnkleCuffs3 CyberLegCuffs CyberLegCuffs2 CyberArmCuffs CyberArmCuffs2 CyberArmCuffs3 CyberArmCuffs4",
    // Slime
    Slime: "SlimeBoots SlimeFeet SlimeHands SlimeLegs SlimeArms SlimeMouth SlimeHead",
    SlimeEnchanted: "EnchantedSlimeBoots EnchantedSlimeFeet EnchantedSlimeHands EnchantedSlimeLegs EnchantedSlimeArms EnchantedSlimeMouth EnchantedSlimeHead",
    SlimeGhost: "GhostSlimeBoots GhostSlimeFeet GhostSlimeHands GhostSlimeLegs GhostSlimeArms GhostSlimeMouth GhostSlimeHead",
    HardSlime: "HardSlimeBoots SlimeFeet HardSlimeHands HardSlimeLegs HardSlimeArms HardSlimeMouth HardSlimeHead",
    HardEnchantedSlime: "HardEnchantedSlimeBoots HardEnchantedSlimeFeet HardEnchantedSlimeHands HardEnchantedSlimeLegs HardEnchantedSlimeArms HardEnchantedSlimeMouth HardEnchantedSlimeHead",
    HardGhostSlime: "HardGhostSlimeBoots HardGhostSlimeFeet HardGhostSlimeHands HardGhostSlimeLegs HardGhostSlimeArms HardGhostSlimeMouth HardGhostSlimeHead",
    LiquidMetal: 'LiquidMetalBoots LiquidMetalFeet LiquidMetalLegs LiquidMetalArms LiquidMetalHands LiquidMetalMouth LiquidMetalHead',
    // Vibration
    VibrationEnchanted: "EnchantedMaidVibe EnchantedNippleClamps EnchantedSteelPlugF EnchantedSteelPlugR",
    // Game Collect From Mod
    Bubble: "Bubble",
    SlimeBubble: "SlimeBubble",
    LatexCube: "LatexCube",
    Sarcophagus: "Sarcophagus",
    DisplayTrap: "DisplayTrap",
    DollStand: "DollStand",
    DollStandSFW: "DollStandSFW",
    CursedCollar: "CursedCollar CursedCollar2",
    // // AAAAA
    // AAAAA: ,
} as const; // 使用 as const 来获得一个 readonly tuple 类型

// KDJailOutfits

// same as KinkyDungeonFactionColors
const KinkyDungeonFactionColors_ = {
    "Jail": ["#8A120C"],
    "Slime": ["#9B49BD", "#9B49BD"],
    "Latex": ["#9B49BD", "#9B49BD"],
    "Dressmaker": ["#6B48E0", "#F8BD01"],
    "Alchemist": ["#4c6885", "#7bef41"],
    "Elf": ["#4fd658", "#F8BD01"],
    "Bountyhunter": ["#252525", "#bfbfbf"],
    "AncientRobot": ["#444444", "#4fa4b8"],
    "Dollsmith": ["#444444", "#b1062a", "#ff5277"],
    "Mushy": ["#bfbfbf", "#92c1e8"],
    "Apprentice": ["#686f99", "#ff5277"],
    "Witch": ["#222222", "#8359b3"],
} as const;

export type KinkyDungeonFactionColors_Keys = keyof typeof KinkyDungeonFactionColors_;

export type WearsKeys = keyof typeof WearsList; // 从数组中得出元素类型 ('Hat' | 'Shirt' | 'Shoes')

export type WearFunctionType = (lock?: LockList, faction?: KinkyDungeonFactionColors_Keys) => number[];

type WearMethodsInterface = {
    [K in WearsKeys as `Wear${ /*Capitalize<K>*/ K}`]: WearFunctionType;
};
export type WearMethodsInterfaceKey = keyof WearMethodsInterface;

class RestraintBase {


    WearRestraints = (
        restraints = "",
        lock = LockList.Gold,
        faction?: (keyof (typeof KinkyDungeonFactionColors)),
        forceWearIt: boolean = false,
    ) => {
        let realLock: string = LockList2RealLock(lock);
        // lock can be Purple Red White Blue Gold
        // Red White is normal key
        // Blue is magic key
        // Purple need command to unlock
        // Gold need the MistressKey to unlock
        // MistressKey need the MistressKey to unlock
        // GhostLock need the Ectoplasm to unlock
        // 2 hidden lock MistressKey GhostLock only in the Restraint config
        // some restraint cannot lock by any lock, the logic in `function KinkyDungeonIsLockable(restraint) {}`
        const W: [restraint, number][] = restraints.split(" ")
            .filter(T => !!T)
            .map<[] | [restraint, number]>(T => {
                    try {
                        const RR = KinkyDungeonGetRestraintByName(T);
                        console.log(RR.name, realLock, faction);
                        if (forceWearIt) {
                            // this impl will force wear and replace other conflict restraint
                            return [RR, KinkyDungeonAddRestraint(
                                RR,
                                10,
                                false,
                                realLock,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                faction as string || undefined,
                            )];
                        } else {
                            // this impl will ignore it if it cannot wear
                            return [RR, KinkyDungeonAddRestraintIfWeaker(
                                RR,
                                10,
                                true,
                                realLock,
                                true,
                                undefined,
                                undefined,
                                faction as string || undefined,
                                true,
                            )];
                        }
                    } catch (e) {
                        console.error(e);
                        return [];
                    }
                }
            )
            .filter<[restraint, number]>((NN): NN is [restraint, number] => {
                return NN.length > 0;
            });
        const objR = W.reduce<restraint[]>((P, T, I, A) => [...P, T[0]], []);
        console.log(W);
        console.log(objR.map(T => TextGetKD(`Restraint${T.name}`)));

        const r = W.reduce<number[]>((P, T, I, A) => [...P, T[1]], []);
        console.log(r);
        return r;
    };

    protected installRestraint() {
        this.kinkyDungeonFactionColors = KinkyDungeonFactionColors;
    }

    kinkyDungeonFactionColors!: { [key: string]: string[] };

    // 	'Y': (moveX, moveY) => { // Open the chest
    // 		let allowManip = KDAllowUseItems(true);
    // 		if (allowManip) {
    // 			let chestType = (KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint] || MiniGameKinkyDungeonCheckpoint) == "lib" ? "shelf" : "rubble";
    // 			KinkyDungeonLoot(MiniGameKinkyDungeonLevel, (KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint] || MiniGameKinkyDungeonCheckpoint), chestType);
    // 			if (KDToggles.Sound) AudioPlayInstantSoundKD(KinkyDungeonRootDirectory + "Audio/Coins.ogg");
    // 			KinkyDungeonMapSet(moveX, moveY, 'X');
    // 			KDGameData.AlreadyOpened.push({x: moveX, y: moveY});
    // 		} else {
    // 			KinkyDungeonSendActionMessage(6, TextGet("KDCantTouchThat"), "#ff8933",1, false, true);
    // 		}
    // 		return true;
    // 	},
    OpenChest(times: number = 10) {
        let chestType = KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint] == "lib" ? "shelf" : "rubble";
        if (isSafeInteger(times) && times > 0) {
            for (let i = 0; i < times; i++) {
                KinkyDungeonLoot(MiniGameKinkyDungeonLevel, KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint], chestType);
            }
        }
    }

    // 	"beforeChest": {
    // 		"shadowChest": (e, data) => {
    // 			if ((data.chestType == "shadow" || data.chestType == "lessershadow") && KDCanCurse(["ChestCollar"])) {
    // 				// Shadow chests spawn cursed epicenter
    // 				if (data.chestType == "shadow" || KDRandom() < 0.2)
    // 					KDSummonCurseTrap(data.x, data.y);
    // 			}
    // 		},
    // 		"lessergoldChest": (e, data) => {
    // 			if ((data.chestType == "lessergold") && KDCanCurse(["ChestCollar"])) {
    // 				// Shadow chests spawn cursed epicenter
    // 				KDSummonCurseTrap(data.x, data.y);
    // 			}
    // 		},
    // 	},
    OpenShadowChest(times: number = 10) {
        if (isSafeInteger(times) && times > 0) {
            for (let i = 0; i < times; i++) {
                KinkyDungeonLoot(MiniGameKinkyDungeonLevel, KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint], 'shadow');
            }
        }
    }

    RemoveAllRestraint = () => {
        return KinkyDungeonAllRestraint().map((r) => KDRestraint(r)).map(T =>
            KinkyDungeonRemoveRestraint(KDRestraint(T).Group, true)
        );
    };

    RemoveAllRestraintDynamic = () => {
        return KinkyDungeonAllRestraintDynamic().map((r) => KDRestraint(r.item)).map(T => {
            try {
                return KinkyDungeonRemoveRestraint(KDRestraint(T).Group, true)
            } catch (e) {
            }
        });
    };

    // RemoveRestraintSpecificDynamic = (item: item, forceRemove?: boolean) => {
    //     return KinkyDungeonRemoveDynamicRestraint(item, true, undefined, undefined, forceRemove);
    // };

    RemoveRestraintSpecific = (item: item, forceRemove?: boolean) => {
        return KinkyDungeonRemoveRestraintSpecific(item, true, undefined, undefined, undefined, undefined, undefined, forceRemove);
    };

    RemoveRestraintGroup = (item: item) => {
        const T = KDRestraint(item);
        return KinkyDungeonRemoveRestraint(KDRestraint(T).Group, true);
    };

    ForceClearRestraint = () => {
        KinkyDungeonInventory.set("restraint", new Map());
        KinkyDungeonStruggleGroups = [];
    }


    GetNowRestraintDifficulty = (item: item,) => {
        // return `tightness[${(item.tightness || 0) * 0.01}(show)][${item.tightness}(real)]`
        //     + `,pick[${item.pickProgress}]`
        //     + `,struggle[${item.struggleProgress}]`
        //     + `,cut[${item.cutProgress}]`
        //     + `,unlock[${item.unlockProgress}]`
        return {
            tightness: item.tightness || 0,
            pick: item.pickProgress || 0,
            struggle: item.struggleProgress || 0,
            cut: item.cutProgress || 0,
            unlock: item.unlockProgress || 0,
        };
    }

    GetNowRestraintDifficultyNumber = (item: item,) => {
        return item.tightness || 0;
    }

    SetNowRestraintDifficulty = (item: item, d: number) => {
        console.log('SetNowRestraintDifficulty', item, d);
        // restraint
        // DrawTextKD(TextGet("KDItemDifficulty").replace("AMNT",
        // 	Math.max(0, Math.round(100 * (0.01 * (item.tightness || 0) + 1 - struggleData.origEscapeChance + struggleData.escapePenalty + Math.max(0, struggleData.extraLim, struggleData.limitChance)))) + ""
        // ).replace("ESCP", TextGet("KDEscape" + StruggleType)),
        // 530, MY + O * lineSize, "#ffffff", "#333333", fontSize, "left", 150); O++;
        // let a = Math.min(1, Math.max(-1, struggleData.escapeChance - Math.max(0, struggleData.extraLim, struggleData.limitChance)));
        // let b = Math.min(1, Math.max(-1, struggleData.escapeChance));
        // let amnt = Math.round(100 * a)
        // 	+ "-"
        // 	+ Math.round(100 * b);
        // if (a < 0 && b < 0)
        // 	amnt = Math.round(100 * Math.max(a, b)) + "";
        // else if (a == b)
        // 	amnt = Math.round(100 * a) + "";
        // else if (a < 0 && b >= 0) {
        // 	a = Math.max(0, a);
        // 	amnt = Math.round(100 * a)
        // 		+ "-"
        // 		+ Math.round(100 * b);
        // }
        // DrawTextKD(TextGet("KDItemStruggle").replace("AMNT",
        // 	amnt
        // ).replace("ESCP", TextGet("KDEscape" + StruggleType)),
        // 530, MY + O * lineSize, "#ffffff", "#333333", fontSize, "left", 150); O++;

        // Math.max(0,
        //     Math.round(
        //         100 * (0.01 * (item.tightness || 0)
        //             + 1
        //             - struggleData.origEscapeChance
        //             + struggleData.escapePenalty
        //             + Math.max(0,
        //                 struggleData.extraLim,
        //                 struggleData.limitChance)
        //         )
        //     )
        // )

        // let a = Math.min(1, Math.max(-1, struggleData.escapeChance - Math.max(0, struggleData.extraLim, struggleData.limitChance)));
        // let b = Math.min(1, Math.max(-1, struggleData.escapeChance));

        // let a = {
        //     "name": "MaidDress",
        //     "id": 1337,
        //     "type": "restraint",
        //     "events": [],
        //     "tightness": 10000,
        //     "lock": "Rubber",
        //     "faction": "Slime",
        //     "pickProgress": 0,
        //     "struggleProgress": 0,
        //     "unlockProgress": 0,
        //     "cutProgress": 0
        // };
        if (!(isSafeInteger(d))) {
            console.warn('SetNowRestraintDifficulty d is not a safe integer:', d);
            d = 0;
        }
        if (!(d >= 0)) {
            console.warn('SetNowRestraintDifficulty d is not a positive integer:', d);
        }

        // const rw = KinkyDungeonAllRestraint();
        item.tightness = d;
    };

}

type RestraintClassType = new () => RestraintBase & WearMethodsInterface;

function RestraintFactory(): RestraintClassType {
    class RestraintEx extends RestraintBase {
        constructor() {
            super();
            Object.getOwnPropertyNames(WearsList).map((N) => {
                (this as any)['Wear' + N/*.trim()*/] = (lock?: LockList, faction?: string) => {
                    console.log('Wear...()', lock, faction);
                    let r = WearsList[N as WearsKeys];
                    let ll = lock || LockList.Purple;
                    return this.WearRestraints(r, ll === LockList.None ? undefined : ll, faction);
                };
            });
        }
    }

    return RestraintEx as unknown as RestraintClassType;
}

export class Restraint extends RestraintFactory() implements WearMethodsInterface {
    // empty
    // Restraint extends (extends RestraintBase implements WearMethodsInterface)
}

type KDJailRestraint = { Name: string, Level: number, Variant?: string, Condition?: string, Priority?: string };

export class RestraintCustomWear extends Restraint {
    listAllKDJailOutfits() {
        return Object.keys(KDJailOutfits);
    }

    getKDJailOutfit(k: string): KDJailRestraint[] | undefined {
        return KDJailOutfits[k]?.restraints;
    }

    WearKDJailOutfit(k: string, lock?: LockList, faction?: string) {
        const r = this.getKDJailOutfit(k);
        if (r) {
            return r.map((T) => {
                return this.WearRestraints(T.Name, lock, faction, true);
            });
        }
    }

    listAllRestraintItem(): restraint[] {
        return Array.from(KinkyDungeonRestraintsCache.values());
    }

    listAllRestraintItemByGroup(): Map<string, restraint[]> {
        const all = this.listAllRestraintItem();
        return all.reduce((Acc, TT, I, A) => {
            const T = TT;
            if (!Acc.has(T.Group)) {
                Acc.set(T.Group, []);
            }
            Acc.get(T.Group)!.push(TT);
            return Acc;
        }, new Map<string, restraint[]>);
    }

    getNowWearRestraintItem() {
        return KinkyDungeonAllRestraintDynamic().map((r) => {
            return {
                item: r.item,
                restraint: r.item ? KDRestraint(r.item) : undefined,
                parentItem: r.host,
                parentRestraint: r.host ? KDRestraint(r.host) : undefined,
            };
        });
    }

    lockAWearingRestraintItem(item: item, lock: LockList = LockList.Purple) {
        KinkyDungeonLock(item, LockList2RealLock(lock));
    }

    unlockAWearingRestraintItem(item: item, NoEvent = false) {
        KinkyDungeonLock(item, "", NoEvent);
    }

    unlockAllWearingRestraint() {
        const r = this.getNowWearRestraintItem();
        for (const n of r) {
            KinkyDungeonLock(n.item, "", true);
        }
    }

    CurseWears = new CurseWears();
}

export class CurseWears {
    // KinkyDungeonLoot(MiniGameKinkyDungeonLevel, KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint], 'shadow');
    // KinkyDungeonLootEvent(KDShadowRestraints[5], 1, ".......")

    get ShadowCurseNameList(): string[] {
        return KDShadowRestraints.map((T) => T.name);
    }

    get ShadowCurseBuffNameList(): string[] {
        return Object.keys(KDEventHexModular);
    }

    get ShadowCurseBuffSpecialNameList(): string[] {
        return Object.keys(KDApplyVariants);
    }

    get ShadowCurseVariantNameList(): string[] {
        let v = [];
        for (const T of Object.keys(KDHexVariantList)) {
            v.push(...KDHexVariantList[T]);
        }
        let s = new Set(v);
        s.delete("Common");
        return Array.from(s.values());
    }

    get ShadowCurseVariantNameListByLevel(): typeof KDHexVariantList {
        let v = cloneDeep(KDHexVariantList);
        delete v["Common"];
        return v;
    }


    curseWearHookTable = {
        // hook for Game/src/item/KinkyDungeonLoot.js :
        // if (Loot.armortags) {
        // 			let newarmor = KinkyDungeonGetRestraint({tags: Loot.armortags}, KDGetEffLevel(), (KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint] || MiniGameKinkyDungeonCheckpoint), true, "",
        // 				undefined, undefined, undefined, undefined, true, undefined, undefined, undefined, forceequip);
        // 			if (!newarmor && forceequip) {
        // 				KinkyDungeonGetRestraint({tags: Loot.armortags}, KDGetEffLevel(), (KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint] || MiniGameKinkyDungeonCheckpoint), true, "",
        // 					undefined, undefined, undefined, undefined, true, undefined, undefined, undefined, false);
        // 			}
        // 			if (newarmor) armor = newarmor.name;
        // 		}
        KinkyDungeonGetRestraint: new CurseWearHook<restraint>('KinkyDungeonGetRestraint'),
        // hook for Game/src/item/KinkyDungeonLoot.js :
        // let curs = KDGetByWeight(KinkyDungeonGetHexByListWeighted(Loot.hexlist, armor, false, Loot.hexlevelmin, Loot.hexlevelmax, [hexVariant, ...hex_extra]));
        //      hook for Game/src/item/KinkyDungeonRestraints.js in function KinkyDungeonGetHexByListWeighted() :
        //   KDApplyVariants + KDHexVariantList
        // let list = KinkyDungeonGetHexByList(List, includeOrig, minLevel, maxLevel);
        KinkyDungeonGetHexByList: new CurseWearHook<string[]>('KinkyDungeonGetHexByList'),
        // hook for Game/src/item/KinkyDungeonLoot.js :
        // let ench = KDGetByWeight(
        //      KinkyDungeonGetEnchantmentsByListWeighted(Loot.enchantlist, KDModifierEnum.restraint, armor, false, Loot.enchantlevelmin, Loot.enchantlevelmax, [enchantVariant, ...enchant_extra])
        // );
        KinkyDungeonGetEnchantmentsByListWeighted: new CurseWearHook<Record<string, number>>('KinkyDungeonGetEnchantmentsByListWeighted'),
    };

    installCurseWearsHook(functionPatchHook: FunctionPatchHooker) {
        for (const T of Object.values(this.curseWearHookTable)) {
            T.install(functionPatchHook);
        }
    }


    enchantsPatcher = new EnchantsPatcher();

    /**
     *
     * @param shadowCurseName   ShadowCurseNameList
     */
    addRandomShadowCurseWear(shadowCurseName: string) {
        console.log('[CurseWears] addRandomShadowCurseWear', shadowCurseName);
        // KinkyDungeonLoot(MiniGameKinkyDungeonLevel, KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint], 'shadow');
        // let loot: { loot: typeof KinkyDungeonLootTable.shadow, weight: number } = {} as any;
        let loot: typeof KDShadowRestraints[number] | undefined =
            KDShadowRestraints.find((T) => T.name === shadowCurseName);
        if (loot) {
            let l = cloneDeep(loot);
            // hook for Game/src/item/KinkyDungeonLoot.js :
            // let hexed = Loot.hexlist && (Loot.hexchance == undefined || KDRandom() < Loot.hexchance + (Loot.hexscale|| 0) * levelPercent || (Loot.nouncursed && !Loot.enchantlist && KinkyDungeonInventoryGet(Loot.nouncursed)));

            // l.minHex = 3;
            // l.maxHex = 20;
            l.hexchance = 10;

            this.enchantsPatcher.patch(l);

            try {
                // KinkyDungeonLootEvent(loot, MiniGameKinkyDungeonLevel, TextGet(loot.message), loot.lock);
                KinkyDungeonLootEvent(l, KDGetEffLevel(), TextGet(l.message), l.lock);
            } finally {
                this.enchantsPatcher.disable();
            }
        } else {
            this.enchantsPatcher.disable();
            console.error('addRandomShadowCurseWear Cannot find the shadowCurseName:', shadowCurseName);
        }
    }

    /**
     *
     * @param shadowCurseName   ShadowCurseNameList
     * @param wearsName
     */
    addShadowCurseWear(shadowCurseName: string, wearsName: string) {
        console.log('[CurseWears] addShadowCurseWear', shadowCurseName, wearsName);
        let w = KinkyDungeonGetRestraintByName(wearsName);
        if (!w) {
            console.error('addShadowCurseWear Cannot find the wearsName:', wearsName);
            return;
        }
        this.curseWearHookTable.KinkyDungeonGetRestraint.enable(w);
        try {
            this.addRandomShadowCurseWear(shadowCurseName);
        } catch (e) {
            console.error("addShadowCurseWear error", e);
        } finally {
            this.curseWearHookTable.KinkyDungeonGetRestraint.disable();
        }
    }

    /**
     *
     * @param shadowCurseName   ShadowCurseNameList
     * @param wearsName
     * @param variantName       ShadowCurseVariantNameList + ShadowCurseBuffSpecialNameList
     */
    addShadowCurseWearWithVariant(shadowCurseName: string, wearsName: string | undefined, variantName: string) {
        console.log('[CurseWears] addShadowCurseWearWithVariant', shadowCurseName, wearsName, variantName);
        // if (!this.ShadowCurseVariantNameList.includes(variantName) &&
        //     !this.ShadowCurseBuffSpecialNameList.includes(variantName)) {
        //     console.error('addShadowCurseWearWithVariant variantName not in ShadowCurseVariantNameList + ShadowCurseBuffSpecialNameList', variantName);
        //     return;
        // }
        if (!this.ShadowCurseBuffNameList.includes(variantName)) {
            console.error('addShadowCurseWearWithVariant variantName not in ShadowCurseBuffNameList', variantName);
            return;
        }
        this.curseWearHookTable.KinkyDungeonGetHexByList.enable([variantName]);
        try {
            if (wearsName) {
                this.addShadowCurseWear(shadowCurseName, wearsName);
            } else {
                this.addRandomShadowCurseWear(shadowCurseName);
            }
        } catch (e) {
            console.error("addShadowCurseWearWithVariant error", e);
        } finally {
            this.curseWearHookTable.KinkyDungeonGetHexByList.disable();
        }
    }

    /**
     *
     * @param shadowCurseName   ShadowCurseNameList
     * @param wearsName
     * @param variantName       ShadowCurseVariantNameList
     * @param enchantmentBuffKey    KDEventEnchantmentModular Key
     */
    addShadowCurseWearWithVariantWithEnchantmentBuff(
        shadowCurseName: string,
        wearsName: string | undefined,
        variantName: string | undefined,
        enchantmentBuffKey: string[],
    ) {
        console.log('[CurseWears] addShadowCurseWearWithVariantWithEnchantmentBuff', shadowCurseName, wearsName, variantName, enchantmentBuffKey);
        if (!isArray(enchantmentBuffKey) || enchantmentBuffKey.length === 0) {
            console.error('addShadowCurseWearWithVariantWithEnchantmentBuff enchantmentBuffKey is empty / is not array', [enchantmentBuffKey]);
            return;
        }
        if (!enchantmentBuffKey.every(T => this.getCurseWearEnchantmentBuffKeyList().includes(T))) {
            console.error('addShadowCurseWearWithVariantWithEnchantmentBuff enchantmentBuffKey not in EnchantmentBuff', [
                enchantmentBuffKey,
                enchantmentBuffKey.filter(T => !this.getCurseWearEnchantmentBuffKeyList().includes(T)),
                this.getCurseWearEnchantmentBuffKeyList(),
            ]);
            return;
        }
        let dataRef = {
            enchantmentBuffKey: enchantmentBuffKey,
            lastE: 0,
        };
        this.curseWearHookTable.KinkyDungeonGetEnchantmentsByListWeighted.enableCalc(() => {
            console.log('[CurseWears] Hook KinkyDungeonGetEnchantmentsByListWeighted callback', dataRef.enchantmentBuffKey);
            const forceWeightObj: Record<string, number> = {};
            forceWeightObj[dataRef.enchantmentBuffKey[dataRef.lastE]] = 999;
            ++dataRef.lastE;
            dataRef.lastE = dataRef.lastE % dataRef.enchantmentBuffKey.length;
            return forceWeightObj;
        });
        this.enchantsPatcher.enable(enchantmentBuffKey.length);
        try {
            if (variantName) {
                this.addShadowCurseWearWithVariant(shadowCurseName, wearsName, variantName);
            } else {
                if (wearsName) {
                    this.addShadowCurseWear(shadowCurseName, wearsName);
                } else {
                    this.addRandomShadowCurseWear(shadowCurseName);
                }
            }
        } catch (e) {
            console.error("addShadowCurseWearWithVariantWithEnchantmentBuff error", e);
        } finally {
            this.enchantsPatcher.disable();
            this.curseWearHookTable.KinkyDungeonGetEnchantmentsByListWeighted.disable();
        }
    }


    // /**
    //  * Function mapping
    //  * to expand, keep (e, item, data) => {...} as a constant API call
    //  * @type {Object.<string, Object.<string, function(KinkyDungeonEvent, item, *): void>>}
    //  */
    // let KDEventMapInventorySelected = {

    // /** @type {Record<string, KDEnchantment>} */
    // let KDEventEnchantmentModular = {

    // KDVarSuffSpellWard,of Warding
    // KDVarSuffBondageResist,of Freedom
    // KDVarSuffDamageResist,of Resistance
    // KDVarSuffDamageBuff,of Power

    // /**
    //  *
    //  * @param {restraint} restraint
    //  * @param {ApplyVariant} variant
    //  * @returns {KDRestraintVariant}
    //  */
    // function KDApplyVarToInvVar(restraint, variant) {
    //     let events = [];
    //     let restvar = {
    //         template: restraint.name,
    //         events: events,
    //         curse: variant.curse,
    //         noKeep: variant.noKeep,
    //     };
    //     for (let e of variant.hexes) {
    //         events.push(...JSON.parse(JSON.stringify(KDEventHexModular[e].events({variant: restvar}))));
    //     }
    //     for (let e of variant.enchants) {
    //         events.push(...JSON.parse(JSON.stringify(KDEventEnchantmentModular[e].types[KDModifierEnum.restraint].events(restraint.name, undefined, undefined, variant.enchants[0], variant.enchants.slice(1), {variant: variant}))));
    //     }
    //     return restvar;
    // }

    // /**
    //  * Gets a list of curses applied to the item
    //  * @param {string | string[]} List
    //  * @param {string} item
    //  * @param {ModifierEnum} Type
    //  * @param {boolean} [includeOrig] - includes thje original item
    //  * @param {number} [minLevel] - for gating curse severity
    //  * @param {number} [maxLevel] - for gating curse severity
    //  * @param {string[]} [allEnchant] - for gating curse severity
    //  * @returns {Record<string, number>}
    //  */
    // function KinkyDungeonGetEnchantmentsByListWeighted(List, Type, item, includeOrig, minLevel, maxLevel, allEnchant) {
    //     let list = KinkyDungeonGetEnchantmentsByList(List, Type, includeOrig, minLevel, maxLevel);
    //     /** @type {Record<string, number>} */
    //     let ret = {};
    //     for (let obj of list) {
    //         if (KDEventEnchantmentModular[obj].types[Type]?.filter(item, allEnchant, {item: item}))
    //             ret[obj] = KDEventEnchantmentModular[obj].types[Type].weight(item, allEnchant, {item: item});
    //     }
    //     return ret;
    // }

    // Array.from(Object.entries(KDEventEnchantmentModular)).map(T=> [T[0], T[1].types[KDModifierEnum.restraint], ])
    // Array.from(Object.entries(KDEventEnchantmentModular)).map(T=> T[1].types[KDModifierEnum.restraint])
    // Array.from(Object.entries(KDEventEnchantmentModular)).map(T=> T[1].types[KDModifierEnum.restraint])

    // Array.from(Object.entries(KDEventEnchantmentModular)).filter(T=> !!T[1].types[KDModifierEnum.restraint] )
    //      .map(T=>
    //              T[1].prefix ?
    //                  TextGet("KDVarPref" + T[0]) :
    //                  (
    //                      T[1].suffix ?
    //                          TextGet("KDVarSuff" + T[0]) :
    //                          null
    //                  )
    //          )

    getCurseWearEnchantmentBuffList(): {
        prefix: [string, string][],
        suffix: [string, string][],
        all: [string, string][],
    } {
        const buff = Array.from(Object.entries(KDEventEnchantmentModular)).filter(T => !!T[1].types[KDModifierEnum.restraint]);
        // [key, name][]
        const prefix: [string, string][] = buff.filter(T => T[1].prefix).map(T => [T[0], TextGet("KDVarPref" + T[1].prefix)]);
        // [key, name][]
        const suffix: [string, string][] = buff.filter(T => T[1].suffix).map(T => [T[0], TextGet("KDVarSuff" + T[1].suffix)]);
        return {prefix, suffix, all: [...prefix, ...suffix]};
    }

    getCurseWearEnchantmentBuffKeyList() {
        return Array.from(Object.entries(KDEventEnchantmentModular)).filter(T => !!T[1].types[KDModifierEnum.restraint]).map(T => T[0]);
    }

    getEnchantmentBuffKeyText(key: string) {
        const n = KDEventEnchantmentModular[key];
        return n.prefix ? TextGet("KDVarPref" + n.prefix) : n.suffix ? TextGet("KDVarSuff" + n.suffix) : key;
    }





}

export class EnchantsPatcher {
    // let enchants = (Loot.minEnchants || 1) + Math.floor(KDRandom() * ((Loot.maxEnchants || 1) - (Loot.minEnchants || 1)));

    minEnchants: number | undefined = undefined;
    maxEnchants: number | undefined = undefined;

    patch(l: typeof KDShadowRestraints[number]) {
        if (this.minEnchants !== undefined && this.maxEnchants !== undefined) {
            l.minEnchants = this.minEnchants;
            l.maxEnchants = this.maxEnchants;
        }
        // (new Array(10)).fill(0).map((v, i) => 1 + Math.floor(KDRandom() * 10 - 1))
    }

    enable(n: number) {
        this.minEnchants = 1;
        this.maxEnchants = n * 2;
    }

    disable() {
        this.minEnchants = undefined;
        this.maxEnchants = undefined;
    }

}

export class CurseWearHook<ReturnValueType> {

    isEnable: boolean = false;
    forceReturnValue?: ReturnValueType = undefined;
    calcReturnValue?: (() => ReturnValueType) = undefined;

    functionPatchHook?: FunctionPatchHooker;

    constructor(
        public originalFunctionName: string,
    ) {
    }

    public install(functionPatchHook: FunctionPatchHooker) {
        this.functionPatchHook = functionPatchHook;
        functionPatchHook.prepareHook({
            originalFunctionName: this.originalFunctionName,
            hookFunctionBeforeReplace: (arg) => {
                console.log(`[CurseWears] ${this.originalFunctionName} called`, arg);
                if (this.isEnable) {
                    console.log(`[CurseWears] install_CurseWearHook_${this.originalFunctionName}_Hook called`, arg);
                    if (this.forceReturnValue) {
                        return [true, undefined, this.forceReturnValue];
                    } else if (this.calcReturnValue) {
                        const rv = this.calcReturnValue();
                        return [true, undefined, rv];
                    } else {
                        console.error(`[CurseWears] CurseWearHook [${this.originalFunctionName}] hook has no valid return value`, [this]);
                        // throw new Error(`CurseWearHook [${this.originalFunctionName}] hook has no valid return value`);
                        return [false, arg, undefined];
                    }
                }
                return [false, arg, undefined];
            },
        });
    }

    enable(r: ReturnValueType) {
        this.isEnable = true;
        this.forceReturnValue = r;
    }

    enableCalc(r: () => ReturnValueType) {
        this.isEnable = true;
        this.calcReturnValue = r;
    }

    disable() {
        this.isEnable = false;
        this.forceReturnValue = undefined;
        this.calcReturnValue = undefined;
    }
}


// 可以直接KinkyDungeonAddRestraint强制穿衣，这个会把不兼容link不上的顶掉，这个类似之前旧版本npc强制给你穿衣
// KinkyDungeonAddRestraintIfWeaker会先检查穿不穿得上，然后他在内部再调用KinkyDungeonAddRestraint穿衣，所以会存在穿不上的情况，这个就类似从背包穿衣
// 然后KinkyDungeonAddRestraintIfWeaker还有个deep参数，可以让npc给你穿在下面，他会去link链下面找，看能不能穿上，默认不会去找
//
// 脱衣也是，KinkyDungeonRemoveRestraint是脱指定部位的最外一件
// KinkyDungeonRemoveRestraintSpecific可以指定某一件，然后他会在脱掉之后修复覆盖link关系


// const a = new Restraint();


// if (AIData.attack.includes("Lock") && KinkyDungeonPlayerGetLockableRestraints().length > 0) {
// function KinkyDungeonPlayerGetLockableRestraints()
// /**
//  * Generates a lock
//  * @param {boolean} [Guaranteed]
//  * @param {number} [Floor]
//  * @param {boolean} [AllowGold]
//  * @param {string} [Type] - Used to customize the type
//  * @param {any} [Data] - Used to customize the type
//  * @returns {string}
//  */
// function KinkyDungeonGenerateLock(Guaranteed, Floor, AllowGold, Type, Data)

// KinkyDungeonLock(Lockable[L], l); // Lock it!





// TODO wear CurseWear selected
//
// type KDRestraintVariant = {
// let KinkyDungeonRestraintVariants: Record<string, KDRestraintVariant> = {};
//
// /**
//  * Adds an inventory variant to the player's inventory
//  * @param variant
//  * @param [prefix]
//  * @param [Tightness]
//  * @param [Bypass]
//  * @param [Lock]
//  * @param [Keep]
//  * @param [Trapped]
//  * @param [faction]
//  * @param [Deep] - whether or not it can go deeply in the stack
//  * @param [curse] - Curse to apply
//  * @param [securityEnemy] - Bypass is treated separately for these groups
//  * @param [useAugmentedPower] - Augment power to keep consistency
//  * @param [inventoryAs] - inventoryAs for the item
//  * @param [ID]
//  * @param [suffix]
//  * @param [powerBonus]
//  */
// function KDEquipInventoryVariant (
//     variant:             KDRestraintVariant,
//     prefix:              string = "",
//     Tightness?:          number,
//     Bypass?:             boolean,
//     Lock?:               string,
//     Keep?:               boolean,
//     Trapped?:            boolean,
//     faction?:            string,
//     Deep?:               boolean,
//     curse?:              string,
//     securityEnemy?:      entity,
//     useAugmentedPower?:  boolean,
//     _inventoryAs?:       string,
//     ID:                  string = "",
//     suffix:              string = "",
//     powerBonus:          number = 0
// )
// {
//     KDUpdateItemEventCache = true;
//     let origRestraint = KinkyDungeonGetRestraintByName(variant.template);
//     let events = origRestraint.events ? JSON.parse(JSON.stringify(origRestraint.events)) : [];
//     let newname = prefix + variant.template + (ID || (KinkyDungeonGetItemID() + "")) + (curse ? curse : "");
//     if (prefix) variant.prefix = prefix;
//     if (suffix) variant.suffix = suffix;
//     if (curse) {
//         variant = JSON.parse(JSON.stringify(variant));
//         variant.curse = curse;
//     }
//     if (powerBonus) variant.power = powerBonus;
//     if (!KinkyDungeonRestraintVariants[newname])
//         KinkyDungeonRestraintVariants[newname] = variant;
//     if (variant.events)
//         Object.assign(events, variant.events);
//     return KinkyDungeonAddRestraintIfWeaker(origRestraint, Tightness, Bypass, Lock, Keep, Trapped, events, faction, Deep, curse, securityEnemy, useAugmentedPower, newname, undefined, undefined, undefined,
//         powerBonus
//     );
// }
//
//
//
//
//
// Game/src/item/KinkyDungeonLoot.ts L355
// function KinkyDungeonLootEvent(Loot: any, Floor: number, Replacemsg: string, Lock?: string, container?: KDContainer): string
//
//
// 	else if (Loot.armor || Loot.armortags) {
// 		let armor = Loot.armor;
// 		let hexed = Loot.hexlist && (Loot.hexchance == undefined || KDRandom() < Loot.hexchance + (Loot.hexscale|| 0) * levelPercent || (Loot.nouncursed && !Loot.enchantlist && KinkyDungeonInventoryGet(Loot.nouncursed)));
// 		let forceequip = Loot.forceEquip || (hexed && (Loot.forceEquipCursed || KinkyDungeonStatsChoice.get("CurseSeeker"))) || (!hexed && (Loot.forceEquipUncursed));
// 		if (Loot.noForceEquip) forceequip = false;
// 		if (Loot.armortags) {
// 			let newarmor = KinkyDungeonGetRestraint({tags: Loot.armortags}, KDGetEffLevel(), (KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint] || MiniGameKinkyDungeonCheckpoint), true, "",
// 				undefined, undefined, undefined, undefined, true, undefined, undefined, undefined, forceequip);
// 			if (!newarmor && forceequip) {
// 				KinkyDungeonGetRestraint({tags: Loot.armortags}, KDGetEffLevel(), (KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint] || MiniGameKinkyDungeonCheckpoint), true, "",
// 					undefined, undefined, undefined, undefined, true, undefined, undefined, undefined, false);
// 			}
// 			if (newarmor) armor = newarmor.name;
// 		}
// 		let unlockcurse = null;
// 		let hexVariant = "";
// 		let enchantVariant = "";
// 		let enchant_extra = [];
// 		let hex_extra = [];
// 		let enchants = (Loot.minEnchants || 1) + Math.floor(KDRandom() * ((Loot.maxEnchants || 1) - (Loot.minEnchants || 1)));
// 		let curses = (Loot.minHex || 1) + Math.floor(KDRandom() * ((Loot.maxHex || 1) - (Loot.minHex || 1)));
// 		if (hexed) {
// 			while (curses > 0) {
// 				let curs = KDGetByWeight(KinkyDungeonGetHexByListWeighted(Loot.hexlist, armor, false, Loot.hexlevelmin, Loot.hexlevelmax, [hexVariant, ...hex_extra]));
// 				if (!enchantVariant) {
// 					hexVariant = curs;
// 					// Sets the armor to the cursed type
// 					armor = armor+(Loot.cursesuffix != undefined ? Loot.cursesuffix : Loot.hexlist);
// 				} else {
// 					hex_extra.push(curs);
// 				}
// 				curses -= 1;
// 			}
// 		}
// 		if (Loot.enchantlist && (Loot.enchantchance == undefined || KDRandom() < Loot.enchantchance + (Loot.enchantscale|| 0) * levelPercent || (Loot.nouncursed && !hexVariant && KinkyDungeonInventoryGet(Loot.nouncursed)) || (hexVariant && Loot.alwaysenchanthex))) {
// 			while (enchants > 0) {
// 				let ench = KDGetByWeight(
// 					KinkyDungeonGetEnchantmentsByListWeighted(Loot.enchantlist, ModifierEnum.restraint, armor, false, Loot.enchantlevelmin, Loot.enchantlevelmax, [enchantVariant, ...enchant_extra])
// 				);
// 				if (!enchantVariant) {
// 					enchantVariant = ench;
// 				} else {
// 					enchant_extra.push(ench);
// 				}
// 				enchants -= 1;
// 			}
// 		}
// 		if (Loot.unlockcurse && (hexVariant || !Loot.hexlist) && (Loot.cursechance == undefined || KDRandom() < Loot.cursechance + (Loot.cursescale|| 0) * levelPercent)) {
// 			let curselist = [];
// 			for (let c of Loot.unlockcurse) {
// 				curselist.push(c);
// 			}
// 			unlockcurse = KDGetByWeight(KinkyDungeonGetCurseByListWeighted(curselist, armor, false, Loot.hexlevelmin, Loot.hexlevelmax));
// 		}
// 		if (hexVariant || enchantVariant) {
// 			let events: KinkyDungeonEvent[] = JSON.parse(JSON.stringify(KDRestraint({name: armor}).events || []));
// 			let variant: KDRestraintVariant = {
// 				template: armor,
// 				events: events,
// 			};
// 			if (hexVariant) {
// 				events.push(...KDEventHexModular[hexVariant].events({variant: variant}));
// 			}
// 			for (let c of hex_extra) {
// 				events.push(...KDEventHexModular[c].events({variant: variant}));
// 			}
// 			if (enchantVariant) {
// 				events.push(...KDEventEnchantmentModular[enchantVariant].types[KDModifierEnum.restraint].events(armor, Loot, hexVariant, enchantVariant, enchant_extra, {variant: variant}));
// 			}
// 			for (let e of enchant_extra) {
// 				events.push(...KDEventEnchantmentModular[e].types[KDModifierEnum.restraint].events(armor, Loot, hexVariant, enchantVariant, enchant_extra, {variant: variant}));
// 			}
//
// 			let equipped = 0;
// 			if (forceequip) {
// 				equipped = KDEquipInventoryVariant(variant, KDEventEnchantmentModular[enchantVariant]?.prefix, 0, true, undefined, true, false, Loot.faction || (unlockcurse ? "Curse" : undefined), true, unlockcurse, undefined, false, undefined, undefined, KDEventEnchantmentModular[enchantVariant]?.suffix);
// 			}
// 			if (!equipped) {
// 				KDGiveInventoryVariant(variant, KDEventEnchantmentModular[enchantVariant]?.prefix, unlockcurse, undefined, undefined, KDEventEnchantmentModular[enchantVariant]?.suffix, Loot.faction || (unlockcurse ? "Curse" : undefined), undefined, undefined, container);
// 			} else {
// 				KinkyDungeonSendTextMessage(10, TextGet("KDCursedChestEquip" + (unlockcurse ? "Cursed" : ""))
// 					.replace("NEWITM", TextGet("Restraint" + variant.template)),
// 				"#aa88ff", 10);
// 			}
//
// 			if (Replacemsg)
// 				Replacemsg = Replacemsg.replace("ArmorAcquired", (enchantVariant ? TextGet("KDVarPrefEnchanted") : "") + ' ' + TextGet("Restraint" + armor));
// 		} else {
// 			KDInvAddLoose(container, armor, unlockcurse, Loot.faction || (unlockcurse ? "Curse" : undefined));
// 			if (Replacemsg)
// 				Replacemsg = Replacemsg.replace("ArmorAcquired", TextGet("Restraint" + armor));
// 		}



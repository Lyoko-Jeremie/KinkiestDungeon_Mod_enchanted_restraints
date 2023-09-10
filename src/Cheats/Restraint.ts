import {isSafeInteger} from 'lodash'
import {LockList} from "./LockList";

export const WearsList = {
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
    Ribbon: "RibbonArms RibbonLegs RibbonFeet RibbonHarness RibbonCrotch DuctTape",
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
    Slime: "SlimeBoots SlimeFeet SlimeHands SlimeLegs SlimeArms SlimeMouth SlimeHead",
    SlimeEnchanted: "EnchantedSlimeBoots EnchantedSlimeFeet EnchantedSlimeHands EnchantedSlimeLegs EnchantedSlimeArms EnchantedSlimeMouth EnchantedSlimeHead",
    SlimeGhost: "GhostSlimeBoots GhostSlimeFeet GhostSlimeHands GhostSlimeLegs GhostSlimeArms GhostSlimeMouth GhostSlimeHead",
    HardSlime: "HardSlimeBoots SlimeFeet HardSlimeHands HardSlimeLegs HardSlimeArms HardSlimeMouth HardSlimeHead",
    HardEnchantedSlime: "HardEnchantedSlimeBoots HardEnchantedSlimeFeet HardEnchantedSlimeHands HardEnchantedSlimeLegs HardEnchantedSlimeArms HardEnchantedSlimeMouth HardEnchantedSlimeHead",
    HardGhostSlime: "HardGhostSlimeBoots HardGhostSlimeFeet HardGhostSlimeHands HardGhostSlimeLegs HardGhostSlimeArms HardGhostSlimeMouth HardGhostSlimeHead",
    // Vibration
    VibrationEnchanted: "EnchantedMaidVibe EnchantedNippleClamps EnchantedSteelPlugF EnchantedSteelPlugR",
    // // AAAAA
    // AAAAA: ,
} as const; // 使用 as const 来获得一个 readonly tuple 类型

// let KinkyDungeonFactionColors = {
//     "Jail": ["#8A120C"],
//     "Slime": ["#9B49BD", "#9B49BD"],
//     "Latex": ["#9B49BD", "#9B49BD"],
//     "Dressmaker": ["#6B48E0", "#F8BD01"],
//     "Alchemist": ["#4c6885", "#7bef41"],
//     "Elf": ["#63ab3f", "#F8BD01"],
//     "Bountyhunter": ["#252525", "#bfbfbf"],
//     "AncientRobot": ["#444444", "#4fa4b8"],
//     "Dollsmith": ["#444444", "#b1062a", "#ff5277"],
//     "Mushy": ["#bfbfbf", "#92c1e8"],
//     "Apprentice": ["#686f99", "#ff5277"],
//     "Witch": ["#222222", "#8359b3"],
// };

type WearsKeys = keyof typeof WearsList; // 从数组中得出元素类型 ('Hat' | 'Shirt' | 'Shoes')
// const WearsKeysL = Array.from(WearsKeys);

export type WearFunctionType = (lock?: LockList, faction?: (keyof (typeof KinkyDungeonFactionColors))) => number[];

type WearMethodsInterface = {
    [K in WearsKeys as `Wear${ /*Capitalize<K>*/ K}`]: WearFunctionType;
};

class RestraintBase {


    WearRestraints = (
        restraints = "",
        lock = LockList.Gold,
        faction?: (keyof (typeof KinkyDungeonFactionColors))
    ) => {
        // lock can be Purple Red White Blue Gold
        // Red White is normal key
        // Blue is magic key
        // Purple need command to unlock
        // Gold need the MistressKey to unlock
        // MistressKey need the MistressKey to unlock
        // GhostLock need the Ectoplasm to unlock
        // 2 hidden lock MistressKey GhostLock only in the Restraint config
        const W: [restraint, number][] = restraints.split(" ")
            .filter(T => !!T)
            .map<[] | [restraint, number]>(T => {
                    try {
                        const RR = KinkyDungeonGetRestraintByName(T);
                        console.log(RR.name);
                        return [RR, KinkyDungeonAddRestraint(
                            RR,
                            10,
                            false,
                            lock || LockList.Gold,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            faction as string || undefined,
                        )];
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

    OpenChestShelf(times: number = 50) {
        if (isSafeInteger(times) && times > 0) {
            for (let i = 0; i < times; i++) {
                KinkyDungeonLoot(MiniGameKinkyDungeonLevel, KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint], "shelf");
            }
        }
    }

    OpenChestRubble(times: number = 50) {
        if (isSafeInteger(times) && times > 0) {
            for (let i = 0; i < times; i++) {
                KinkyDungeonLoot(MiniGameKinkyDungeonLevel, KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint], "shelf");
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

const a = new Restraint();


import {isSafeInteger} from 'lodash'
import {LockList} from "./LockList";

const WearsList: { [key: string]: string } = {
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
    // Vibration
    VibrationEnchanted: "EnchantedMaidVibe EnchantedNippleClamps EnchantedSteelPlugF EnchantedSteelPlugR",
    // // AAAAA
    // AAAAA: ,
};

export class Restraint {


    WearRestraints = (restraints = "", lock = LockList.Gold) => {
        // lock can be Purple Red White Blue Gold
        // Red White is normal key
        // Blue is magic key
        // Purple need command to unlock
        // Gold need the MistressKey to unlock
        // MistressKey need the MistressKey to unlock
        // GhostLock need the Ectoplasm to unlock
        // 2 hidden lock MistressKey GhostLock only in the Restraint config
        const W = restraints.split(" ").filter(T => !!T).map(T => {
                try {
                    const RR = KinkyDungeonGetRestraintByName(T);
                    console.log(RR.name);
                    return [RR, KinkyDungeonAddRestraint(RR, 10, false, lock || LockList.Gold)]
                } catch (e) {
                    console.error(e);
                    return [];
                }
            }
        );
        const objR = W.reduce((P, T, I, A) => [...P, T[0]], []);
        console.log(W);
        console.log(objR.map(T => TextGetKD(`Restraint${T.name}`)));

        const r = W.reduce((P, T, I, A) => [...P, T[1]], []);
        console.log(r);
        return r;
    };

    protected installRestraint() {
        Object.getOwnPropertyNames(WearsList).map(N => {
            (this as any)['Wear' + N.trim()] = (lock: LockList) => {
                let r = WearsList[N];
                this.WearRestraints(r, lock || LockList.Purple);
            };
        });
    }


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

}

export class Choice {

    _AddOneCheatChoice = (c: string, remove?: boolean) => {
        if (remove) {
            KinkyDungeonStatsChoice.delete(c);
        } else {
            KinkyDungeonStatsChoice.set(c, true);
        }
    };
    _AddCheatChoice = (s: string, remove?: boolean) => {
        if (remove) {
            s.split(" ").filter(T => !!T).map(T => KinkyDungeonStatsChoice.delete(T));
        } else {
            s.split(" ").filter(T => !!T).map(T => KinkyDungeonStatsChoice.set(T, true));
        }
    };
    ChoiceAddCheatChoiceBadNegative = (remove?: boolean) => {
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
        this._AddCheatChoice(
            "Vengeance MagicHands Nowhere " +
            "CommonLatex CommonMaid CommonDress CommonKitty CommonExp CommonFuuka CommonWolf CommonLeather" +
            "KinkyPrison Undeniable Needs NoWayOut TightRestraints" +
            "Undeniable Needs NoWayOut TightRestraints",
            remove,
        );
    };
    ChoiceAddCheatChoiceNowhere = (remove: boolean) => {
        // Nowhere
        // 草木皆兵
        // Beds and furniture are often trapped.
        // 床和木桶经常会是陷阱。
        this._AddCheatChoice(
            "Nowhere",
            remove,
        );
    }
    ChoiceAddCheatChoiceMidEscape = (remove?: boolean) => {
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
        this._AddCheatChoice(
            "Slayer Conjurer Magician",
            remove,
        );
    };
    ChoiceAddCheatChoiceGoodEnhance = (remove?: boolean) => {
        // Psychic [Psychic]
        // 精神
        // You no longer drop keys and picks, can unlock yourself with bound hands, and don't need hands for items/potions.
        // 您不再掉落钥匙和镐，可以用拘束住的手解锁自己，并且不需要手来使用物品/药水。
        // Quick-Draw [QuickDraw]
        // Switching weapons and spells does not take a turn.
        // GroundedInReality "Grounded in Reality"
        // "While at max mana, your attacks deal an additional 30% of their base damage as electric damage."
        // FranticStruggle [FranticStruggle]
        // 疯狂挣扎
        // Your struggling is 3 times as fast, but less efficient in terms of stamina.
        // 你的挣扎速度变为原来的 3 倍，但提高挣扎时的体力消耗。
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
        // 集中闪避	[18] [Dodge]
        // While your miscast chance is 0%, you gain +40 Evasion.
        // 施法失败率为 0% 时，闪避 +40。
        // Brawler  [20] [Brawler]
        // 格斗大师
        // Unarmed attacks deal +10 damage.
        // 徒手攻击额外造成10伤害。
        // Graceful Walk  [53] [HeelWalker]
        // 优雅步伐
        // You don't lose stamina when walking with one slowing item, unless it binds your legs together.
        // 带着一件减速物品走路时不会失去耐力，除非你的腿被绑在一起。
        // Unstable Magic  [UnstableMagic]
        // 混沌魔法
        // Spells do up to 60% additional damage based on distraction or miscast chance, whichever is higher.
        // 根据性奋值或施法失败的几率，法术最多可造成 60% 的额外伤害，以最高者为准。
        this._AddCheatChoice(
            "Psychic QuickDraw Strong FranticStruggle Flexible Locksmith BoundPower Dodge Brawler HeelWalker UnstableMagic",
            remove,
        );
    };
    ChoiceAddCheatChoiceMid = (remove: boolean) => {
        // 法力冲击	[DistractionCast] [DistractionCast]
        // 当干扰值为 100% ，施法失败几率 -100%，但一次消耗过多的法力值可能会导致高潮。
        // 催化魔法	[ArousingMagic] [ArousingMagic]
        // 你的魔法由超凡脱俗的催情能量驱动，施法时会根据消耗的法力增加干扰值。
        // 冷静之术	[Clearheaded] [Clearheaded]
        // 魔法可以让你头脑清醒，成功施法时可以减少干扰值。
        this._AddCheatChoice(
            "Clearheaded ArousingMagic DistractionCast",
            remove,
        );
    };
    ChoiceAddCheatChoiceGoodEscape = (remove?: boolean) => {
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
        this._AddCheatChoice(
            "Escapee Unchained Artist Slippery KeepOutfit SecondWind",
            remove,
        );
    };
    ChoiceAddCheatChoiceBadNoEscape = (remove?: boolean) => {
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
        this._AddCheatChoice(
            "Damsel Bunny Doll Dragon BondageLover BoundCrusader KeepOutfit",
            remove,
        );
    };
    ChoiceAddCheatChoiceMap = (remove: boolean) => {
        // 困难的门	[Doorknobs] [Doorknobs]
        // 当你的手被束缚时，门更难打开。
        // 宽敞之牢	[MapLarge] [MapLarge]
        // 将每个方向的地图大小增加 1。
        // 广阔之牢	[MapHuge] [MapHuge]
        // 将每个方向的地图大小增加 2。
        // 辽阔之牢	[MapGigantic] [MapGigantic]
        // 将每个方向的地图大小增加 3。
        this._AddCheatChoice(
            "Doorknobs MapLarge MapHuge MapGigantic",
            remove,
        );
    };
    ChoicePrintNowChoice = () => {
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
    ChoicePrintAllValidChoice = () => {
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
}

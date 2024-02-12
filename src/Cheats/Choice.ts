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
    ChoiceAddCheatChoiceNowhere = (remove?: boolean) => {
        // Nowhere
        // 草木皆兵
        // Beds and furniture are often trapped.
        // 床和木桶经常会是陷阱。
        this._AddCheatChoice(
            "Nowhere",
            remove,
        );
    }
    ChoiceAddCheatChoiceSuperMarket = (remove?: boolean) => {
        // Supermarket
        // 超市
        // Commerce shrines can appear in levels and have slightly more items.
        // 商业神殿各层均可出现，并拥有更多的物品。
        this._AddCheatChoice(
            "Supermarket",
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
    ChoiceAddCheatChoiceGoodMid = (remove?: boolean) => {
        // Unperturbed [Unperturbed]
        // 冰洁
        // You gain 82 grope resist.
        // 自身抚摸抗性 +82 点。
        // Stoic [Stoic]
        // 忍耐
        // You gain 82% tickle resist.
        // 你获得 82% 挠痒抗性。
        // Pain Tolerance [PainTolerance]
        // 坚韧
        // You gain 200 pain resist.
        // 自身疼痛抗性 +200 点。
        this._AddCheatChoice(
            "Unperturbed Stoic PainTolerance",
            remove,
        );
    };
    ChoiceAddCheatChoiceBadMid = (remove?: boolean) => {
        // Masochist [Masochist]
        // 受虐
        // Pain is strongly arousing.
        // 疼痛会使你强烈地性奋。
        // Lascivious [Lascivious]
        // 好色
        // You take 50% more grope damage.
        // 你受到的抚摸伤害增加 50%。
        // Ticklish [Ticklish]
        // 怕痒
        // You take 50% more tickle damage.
        // 你受到的挠痒伤害增加 50%。
        this._AddCheatChoice(
            "Masochist Lascivious Ticklish",
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
    ChoiceAddCheatChoiceMid = (remove?: boolean) => {
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
        // Deft Fingering [SomaticPlus]
        // 指法灵巧
        // You can cast arm spells using just your fingers, as long as your hands aren't bound.
        // 只要你的手没有被束缚，你就可以只用手指施展手臂的法术。
        // Smooth Talker [SmoothTalker]
        // 以和为贵
        // Being gagged does not increase your miscast chance for verbal spells unless fully gagged, and reduces gag power by 20%.
        // 除非你的嘴被完全堵住，否则堵嘴不会增加你念错咒语的几率，并且会降低 20% 的塞嘴威力。
        this._AddCheatChoice(
            "Escapee Unchained Artist Slippery KeepOutfit SecondWind SomaticPlus SmoothTalker",
            remove,
        );
    };
    ChoiceAddCheatChoiceBadNoEscape = (remove?: boolean) => {
        // 困难的门	[Doorknobs] [Doorknobs]
        // 当你的手被束缚时，门更难打开。
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
    ChoiceAddCheatChoiceMap = (remove?: boolean) => {
        // 宽敞之牢	[MapLarge] [MapLarge]
        // 将每个方向的地图大小增加 1。
        // 广阔之牢	[MapHuge] [MapHuge]
        // 将每个方向的地图大小增加 2。
        // 辽阔之牢	[MapGigantic] [MapGigantic]
        // 将每个方向的地图大小增加 3。
        this._AddCheatChoice(
            "MapLarge MapHuge MapGigantic",
            remove,
        );
    };
    ChoiceAddCheatChoiceGoodVision = (remove?: boolean) => {
        // Keen Hearing [KeenHearing]
        // 顺风耳
        // You can more easily hear enemies and their movements through walls.
        // 你可以更容易地透过墙壁听到敌人和他们的行动。
        // Archer's Eye [ArchersEye]
        // 千里眼
        // +2 vision radius.
        // +2 可视范围.
        // Night Owl [NightOwl]
        // 猫头鹰
        // Your vision in dark areas is improved.
        // 你在黑暗区域的视力得到增强。
        this._AddCheatChoice(
            "KeenHearing ArchersEye NightOwl",
            remove,
        );
    };
    ChoiceAddCheatChoiceBadVision = (remove?: boolean) => {
        // Blackout [Blackout]
        // 屏蔽护目
        // Blindfolds are stronger. While blindfolded you can only see enemies next to you.
        // 眼罩变得更强，当佩戴眼罩时，你只能看到身边的敌人。
        // Total Blackout [TotalBlackout]
        // 阴影护目
        // Blindfolds are extremely punishing and you can't see explored areas while blindfolded.
        // 眼罩变得非常令人痛苦，当佩戴眼罩时，你看不到已探索区域。
        // Poor Vision [Nearsighted]
        // 视力障碍
        // Vision radius is significantly reduced.
        // 可视范围显著减小。
        // Fear of the Dark [NightBlindness]
        // 恐惧黑暗
        // Your vision in dark areas is reduced.
        // 你在黑暗区域的视力将会降低。
        this._AddCheatChoice(
            "Blackout TotalBlackout Nearsighted NightBlindness",
            remove,
        );
    };
    ChoicePrintNowChoice = () => {
        const l = Array.from(KinkyDungeonStatsChoice.keys());
        let count = 0;
        let sss = [];
        for (const s of l) {
            if (KinkyDungeonStatsPresets[s]) {
                const t = TextGet("KinkyDungeonStat" + KinkyDungeonStatsPresets[s].id);
                if (t !== ("KinkyDungeonStat" + KinkyDungeonStatsPresets[s].id)) {
                    sss.push("" + count + "\t"
                        + t + "\t[" + KinkyDungeonStatsPresets[s].id + "] [" + s + "]"
                        + "\n\t  " + TextGet("KinkyDungeonStatDesc" + KinkyDungeonStatsPresets[s].id));
                    console.log("" + count + "\t"
                        + t + "\t[" + KinkyDungeonStatsPresets[s].id + "] [" + s + "]"
                        + "\n\t  " + TextGet("KinkyDungeonStatDesc" + KinkyDungeonStatsPresets[s].id));
                }
                ++count;
            }
        }
        return sss.join('\n');
    };
    ChoicePrintAllValidChoice = () => {
        const l = Object.getOwnPropertyNames(KinkyDungeonStatsPresets);
        let count = 0;
        let sss = [];
        for (const s of l) {
            if (KinkyDungeonStatsPresets[s]) {
                const t = TextGet("KinkyDungeonStat" + KinkyDungeonStatsPresets[s].id);
                if (t !== ("KinkyDungeonStat" + KinkyDungeonStatsPresets[s].id)) {
                    sss.push("" + count + "\t"
                        + t + "\t[" + KinkyDungeonStatsPresets[s].id + "] [" + s + "]"
                        + "\n\t  " + TextGet("KinkyDungeonStatDesc" + KinkyDungeonStatsPresets[s].id));
                    console.log("" + count + "\t"
                        + t + "\t[" + KinkyDungeonStatsPresets[s].id + "] [" + s + "]"
                        + "\n\t  " + TextGet("KinkyDungeonStatDesc" + KinkyDungeonStatsPresets[s].id));
                }
                ++count;
            }
        }
        return sss.join('\n');
    };
    ChoiceGetAllValidChoiceData = (): ChoiceGetAllValidChoiceDataReturnType => {
        const cs = new Set(Array.from(KinkyDungeonStatsChoice.keys()));
        const l = Object.getOwnPropertyNames(KinkyDungeonStatsPresets);
        let count = 0;
        let sss: ChoiceGetAllValidChoiceDataReturnType = [];
        for (const s of l) {
            if (KinkyDungeonStatsPresets[s]) {
                const t = TextGet("KinkyDungeonStat" + KinkyDungeonStatsPresets[s].id);
                if (t !== ("KinkyDungeonStat" + KinkyDungeonStatsPresets[s].id)) {
                    // sss.push("" + count + "\t"
                    //     + t + "\t[" + KinkyDungeonStatsPresets[s].id + "] [" + s + "]"
                    //     + "\n\t" + TextGet("KinkyDungeonStatDesc" + KinkyDungeonStatsPresets[s].id));
                    sss.push({
                        count: count,
                        name: t,
                        id: KinkyDungeonStatsPresets[s].id,
                        keyName: s,
                        desc: TextGet("KinkyDungeonStatDesc" + KinkyDungeonStatsPresets[s].id),
                        selected: cs.has(s),
                    });
                    // console.log("" + count + "\t"
                    //     + t + "\t[" + KinkyDungeonStatsPresets[s].id + "] [" + s + "]"
                    //     + "\n\t" + TextGet("KinkyDungeonStatDesc" + KinkyDungeonStatsPresets[s].id));
                }
                ++count;
            }
        }
        return sss;
    };
}

type ChoiceGetAllValidChoiceDataReturnType = {
    count: number,
    name: string,
    id: string | number,
    keyName: string,
    desc: string,
    selected: boolean,
}[];

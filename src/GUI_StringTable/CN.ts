import {StringTableType, WearStringTableInterface} from "./StringTable";

const WearStringTable_CN: WearStringTableInterface = {
    WearBanditLeg: "奴隶套装",
    WearBubble: "泡泡套装()",
    WearDisplayTrap: "展示架()",
    WearDivine: "神圣套装",
    WearDollStand: "玩偶架()",
    WearDollStandSFW: "玩偶架SFW(?)",
    WearDragon: "龙鳞",
    WearDress: "裙子",
    WearEnchanted: "远古套装",
    WearEnchantedMaxVibe: "远古强力震动套装",
    WearGlue: "黄色胶水",
    WearHardEnchantedSlime: "橡胶远古史莱姆套装",
    WearHardGhostSlime: "橡胶灵浆史莱姆套装",
    WearHardSlime: "橡胶史莱姆套装",
    WearIce: "冰套装",
    WearKitty: "猫女套装",
    WearLatexCube: "乳胶方块",
    WearMageArmor: "MageArmor",
    WearMaxVibe: "强力震动套装",
    WearMysticDuct: "祝福丝带套装",
    WearNippleClamps: "乳头按摩器系列",
    WearRibbon: "魔法套装",
    WearSaber: "Saber",
    WearSarcophagus: "石棺()",
    WearShadowHand: "影子手套装",
    WearSlime: "史莱姆套装",
    WearSlimeBubble: "史莱姆泡泡套装",
    WearSlimeEnchanted: "远古史莱姆套装",
    WearSlimeGhost: "灵浆史莱姆套装",
    WearLiquidMetal: "液态金属套装",
    WearTrapPlug: "插入按摩器系列",
    WearTrapVibeProto: "原始震动系列",
    WearVibe: "震动套装",
    WearVibrationEnchanted: "远古震动套装",
    WearVinePlant: "藤曼套装",
    WearWolf: "狼女套装",
    WearCyberDoll: "网络娃娃套装",
    WearCyberAnkle: "网络套装",
};


export const StringTable_CN: StringTableType = {
    title: 'KinkiestDungeon enchanted_restraints Mod',
    'install EnchantedRestraints Mod Section': '安装 Enchanted Restraints Mod Section',
    install_EnchantedRestraintsPatch: '点击安装 EnchantedRestraintsPatch',
    isInstalled: '是否已安装',
    isInstalledMask(s: string): string {
        return `是否已安装:${s}`
    },
    'ApplyModRestraint Section': 'Apply Mod Restraint Section',
    ApplyModRestraint: 'ApplyModRestraint（全套mod装）',
    'ApplyRestraint Section': 'Apply Restraint Section',
    RemoveAllRestraint: '脱下最外层约束',
    RemoveAllRestraintDynamic: '脱下全部约束',
    'Keys Section': 'Keys Section',
    AddManyKeys: '增加大量钥匙Keys',
    AddManyPotion: '增加大量药水Potion',
    AddManyGold: '增加大量黄金Gold',
    AddDistraction: '增加大量性欲值Distraction（这个在游戏中是独立机制）',
    AddAllRestraints: '添加全部拘束Restraints到背包',
    AddAllOutfit: '添加全部服装Outfit到背包',
    AddAllConsumables: '添加全部消耗品Consumables到背包',
    AddAllWeapon: '添加全部武器Weapon到背包',
    AddAllKeyTools: '添加全部常规解锁工具',
    RemoveAllKeyTools: '移除全部常规解锁工具',
    'SpellPoints Section': '技能点 Section',
    AddSpellPoints: '添加技能点',
    ZeroSpellPoints: '清零技能点',
    NegativeSpellPoints: '减少技能点',
    'Relations Section': '关系 Section',
    FullAllRelations: '最大化所有派系的关系',
    ZeroAllRelations: '清零所有派系的关系',
    NegativeAllRelations: '负所有派系的关系',
    FullAllGoddess: '所有女神的关系',
    ZeroAllGoddess: '清零所有女神的关系',
    NegativeAllGoddess: '所有女神的关系',
    FullAllReputationState: '所有名声',
    ClearAllReputationState: '清零所有名声',
    NegativeAllReputationState: '所有名声',
    GoddessRepSelect: '选择指定名声',
    AddSelectedGoddessRep: '选定的名声',
    ClearSelectedGoddessRep: '清零选定的名声',
    NegativeSelectedGoddessRep: '选定的名声',
    PrintNowAllReputationState: '显示所有名声状态',
    PrintNowAllReputationStateList: '所有名声状态列表',
    'Bootstrap Section': 'Bootstrap 开局快速开始作弊 Section 【只点前两个按钮快速加入风灵月影宗内门】',
    BootstrapAllGood: '【开局】快速启用(全部)增益及动态作弊',
    BootstrapSpellChoicesTable: '【开局】快速设置为Mod预设法术列表（需先使用[增益作弊]开启全部法术列表）',
    BootstrapSimpleGood: '【开局】快速开启(除钥匙与黄金外的)增益及动态作弊【风灵月影宗外门入口】',
    BootstrapAllNegative: '【开局】快速启用全部 负面减益【风灵月影宗侧门入口】',
    'Enable Section': '动态内存作弊 Section',
    EnableAllCheats: '启动【所有】动态内存作弊（包括[预设法术列表]中的探查和视野法术保持和范围修改）',
    DisableAllCheats: '禁用【所有】动态内存作弊',
    EnableFullState: '启动【保持状态全满】动态内存作弊',
    DisableFullState: '禁用【保持状态全满】动态内存作弊',
    EnableQuickness5: '启用时间静止(起点后需点击技能【双重加速】生效)',
    DisableQuickness5: '关闭时间静止',
    'Choice Section': '技能 Section',
    ChoiceAddCheatChoiceGoodEscape: '添加有益逃生的Choice',
    ChoiceAddCheatChoiceGoodEnhance: '添加大量有益增强',
    ChoiceAddCheatChoiceGoodMid: '添加正面中性Choice',
    ChoiceAddCheatChoiceBadMid: '添加负面中性Choice',
    ChoiceAddCheatChoiceMid: '添加中性Choice',
    ChoiceAddCheatChoiceBadNegative: '添加大量负面Choice',
    ChoiceAddCheatChoiceBadNoEscape: '添加无益逃生的Choice',
    ChoiceAddCheatChoiceGoodVision: '添加好视野Choice',
    ChoiceAddCheatChoiceBadVision: '添加坏视野Choice',
    ChoiceAddCheatChoiceMap: '添加地图最大化（下一次生成的地图才生效）',
    ChoiceAddCheatChoiceNowhere: '添加[Nowhere]草木皆兵（床和木桶有概率变成陷阱）',
    ChoiceAddCheatChoiceSuperMarket: '添加[SuperMarket]超级市场（每层都有超市）',
    ChoicePrintNowChoice: '显示当前已选择的Choice列表',
    NowChoiceList: '当前已选择的Choice列表',
    'ChoiceAddOne Section': '添加单个 Choice Section',
    ChoiceSelect: '选择Choice',
    ChoiceAddOne: '添加一个Choice',
    ChoiceRemoveOne: '删除一个Choice',
    'ChoicePrint Section': '查看所有Choice列表 Section',
    ChoicePrintAllValidChoice: '查看所有可用Choice列表',
    ChoicePrintAllValidChoiceList: '查看所有可用Choice列表',
    'DebugSee Section': '调试检查 Section',
    ShowAllRestraintDynamicName: '显示已经穿戴的所有动态拘束名称',
    ShowAllRestraintDynamicNameList: '显示已经穿戴的所有动态拘束名称',
    ShowAllRestraint: '显示已经穿戴的所有动态拘束内存数据',
    ShowAllRestraintList: '显示已经穿戴的所有动态拘束内存数据',
    'WearRestraints Section': '穿戴 Section',
    LockSelect: '选择要穿戴的锁',
    FactionSelect: '选择是谁给你穿上的',
    AllRestraintItemSelect: '所有可用的穿戴',
    NowWearRestraintItemSelect: '已经穿戴的物品',
    WearTheSelectedRestrain: '穿上选择的物品',
    LockNowWearRestraintItem: '锁定当前选择的已穿戴物',
    UnlockNowWearRestraintItem: '解锁当前选择的已穿戴物',
    RemoveNowWearRestraintItem: '移除当前选择的已穿戴物',
    JailOutfitSelect: '监狱套装（游戏内置套装，对应种类的NPC将你带去监狱时给你穿上的套装）',
    WearJailOutfit: '穿上选择的监狱套装',
    //  TODO
    'OpenChest Section': '开箱 Section',
    OpenChest: '开箱（对应图书馆的桌面，和正常的箱子，在图书馆地图使用会进入游戏的随机中招逻辑）',
    'Map Section': '地图 Section',
    MapKKSsMGet: '详细地图数据（红色陷阱/圆角框NPC/亮蓝色玩家）',
    MapKKSsMGetData: 'MapKKSsMGetData',
    MapKSsMGet: '简明地图信息（黄色钥匙/黑色楼梯/深蓝色玩家）',
    MapKSsMGetData: 'MapKSsMGetData',
    'Map Cheats Section': '地图 作弊 Section',
    MapOpenFull: '开全图',
    MapOpenNone: '关全图',
    SetAllBedAreTrap: '将所有床都设置成陷阱（等同于100%概率的[Nowhere]草木皆兵）',
    SetAllBarrelAreTrap: '将所有木桶/金属笼都设置成陷阱（等同于100%概率的[Nowhere]草木皆兵）',
    SetAll_L_AreDisplayStand: '将所有木桶都设置成放置架（部分地图会出错，慎用）',
    SetAll_L_AreCage: '将所有木桶都设置成笼子（部分地图会出错，慎用）',
    ResetAllLibChest: '重置所有箱子类（对应图书馆桌面和天文馆吊灯等）',
    'HardMode Section': 'HardMode Section',
    HardModeEnable: '困难模式 开',
    HardModeDisable: '困难模式 关',
    'SaveLoad Section': 'SaveLoad Section',
    GetSaveCode: '获取存档码(同时会触发游戏内存档!)',
    GetSaveCodeData: '存档码',
    CopyGameSaveDataStringToClipboard: '复制存档码到剪贴板(同时会触发游戏内存档!)',
    LoadGameSaveStringFromClipboard: '从剪贴板读取存档',
    'ForceNextLevelType Section': '强制之后每层的类型 Section',
    'ForceNextLevelTypeOnce Section': '强制下一层的类型 Section',
    'SaveLoad IndexDB Section Demo': '简易IndexDB多存档功能 Section',
    CreateAIndexDBSave: '以当前状态创建IndexDB新存档',
    ListIndexDBSave: '列出所有IndexDB中的存档',
    IndexDBSaveSelect: '选择要加载的存档',
    LoadIndexDBSave: '加载选中的存档',

    errorMessage2I18N(s: string): string {
        return s;
    },
    fallback2I18N(s: string): string | undefined {
        return undefined;
    },
    Wear2I18N(s: string): string {
        const nn = WearStringTable_CN[s as keyof WearStringTableInterface];
        if (nn) {
            return `${nn}(${s})`
        }
        return s;
    },
    KinkyDungeonShrine2I18N(s: string): string {
        return TextGet('KinkyDungeonShrine' + s);
    },
};

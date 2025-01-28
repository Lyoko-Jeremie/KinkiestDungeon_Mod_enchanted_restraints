import {LockList} from "./Cheats/LockList";

export {};
import type {Cheats} from './Cheats/Cheats';
import type {SaveLoadIndexDB} from './SaveLoadIndexDB/SaveLoadIndexDB';

declare global {
    interface Window {
        KinkyDungeonMod_EnchantedRestraints: {
            Cheats: Cheats,
            SaveLoadIndexDB: SaveLoadIndexDB,
            ApplyModRestraint: (lock?: LockList) => any[],
            setEdgeOnly: (b: boolean) => void,
            EnchantedRestraintsPatch: () => void,
        };
        Mod_EnchantedRestraints: {
            Cheats: Cheats,
            SaveLoadIndexDB: SaveLoadIndexDB,
            ApplyModRestraint: (lock?: LockList) => any[],
            setEdgeOnly: (b: boolean) => void,
            EnchantedRestraintsPatch: () => void,
        };
        gEnchantedRestraintsCreateGui: CreateGui;
        gEnchantedRestraintsModFilterBypass: ModFilterBypass;

    }

    // =================================================
    let KDAllModFiles: string[];
    let KDModFiles: { [key: string]: ReturnType<URL.createObjectURL> };
    let KinkyDungeonRootDirectory: string;

    let KinkyDungeonStartNewGame: (Load: boolean) => void;

    // =================================================
    // from KK
    var MiniGameKinkyDungeonLevel: number;
    var KDOptOut: boolean;
    var KDLoadingFinished: boolean;
    var TranslationLanguage: string;
    var KinkyDungeonGrid: string;
    var KDMapData: KDMapDataType;
    var KinkyDungeonStatsChoice: Map<number | string, boolean>;
    var KinkyDungeonRestraints: restraint[];
    var KinkyDungeonRefreshRestraintsCache: () => void;
    var KinkyDungeonGetRestraintByName: (Text: string) => restraint;
    var KinkyDungeonLoadGame: (s: string) => boolean;
    var KinkyDungeonSaveGame: (ToString: boolean) => string;
    var KinkyDungeonCompressSave: (save: any) => Promise<string>;
    var TextGet: (Text: string) => string;
    var TextGetKD: (Text: string) => string;
    var KDRestraint: (item: Named) => restraint;
    var addTextKey: (Name: string, Text: string) => void;
    var KinkyDungeonAddGold: (n: number) => void;
    var KinkyDungeonAddRestraintText: (name, displayName, flavorText, functionText) => void;

    /**
     * @param {restraint} restraint
     * @param {number} Tightness
     * @param {boolean} [Bypass]
     * @param {string} [Lock]
     * @param {boolean} [Keep]
     * @param {boolean} [Link]
     * @param {boolean} [SwitchItems]
     * @param {KinkyDungeonEvent[]} [events]
     * @param {boolean} [Unlink]
     * @param {string} [faction]
     * @param {item} [dynamicLink]
     * @param {string} [Curse] - Curse to apply
     * @param {boolean} [autoMessage] - Whether or not to automatically dispatch messages
     * @param {entity} [securityEnemy] - Whether or not to automatically dispatch messages
     * @returns
     */
    var KinkyDungeonAddRestraint: (
        restraint: restraint,
        Tightness: number,
        Bypass: boolean,
        Lock: string,
        Keep?: boolean,
        Link?: boolean,
        SwitchItems?: boolean,
        events?: KinkyDungeonEvent[],
        faction?: string,
        Unlink?: boolean,
        dynamicLink?: item,
        Curse?: boolean,
        autoMessage = true,
        securityEnemy: entity | undefined = undefined,
    ) => number;

    function KinkyDungeonAddRestraintIfWeaker(
        restraint: restraint | string,
        Tightness?: number,
        Bypass?: boolean,
        Lock?: string,
        Keep?: boolean,
        Trapped?: boolean,
        events?: KinkyDungeonEvent[],
        faction?: string,
        Deep?: boolean,
        Curse?: string,
        securityEnemy?: entity,
        useAugmentedPower?: boolean,
        inventoryAs?: string,
        data?: Record<string, any>,
        augmentedInventory?: string[],
        variant?: ApplyVariant,
        powerBonus: number = 0
    ): number;

    /**
     *
     * @param {item} item
     * @param {string} lock
     * @param {boolean} NoEvent
     */
    var KinkyDungeonLock: (item: item, lock: string, NoEvent = false) => void;

    var KinkyDungeonAllRestraint: () => item[];
    var KinkyDungeonAllRestraintDynamic: () => { item: item, host: item }[];
    var KinkyDungeonAllLooseRestraint: () => item[];

    var KDGameData: KDGameDataBase;
    var KinkyDungeonOutfitsBase: { name: string, dress: string, shop: boolean, rarity: number }[];
    var KinkyDungeonDresses: Record<string, KinkyDungeonDress>;
    var KinkyDungeonWeapons: Record<string, weapon>;
    var KinkyDungeonPlayerEntity: any;
    var KinkyDungeonGroundItems: any[];
    var MiniGameKinkyDungeonCheckpoint: string;
    var KinkyDungeonMapIndex: Record<string, string>;
    var KinkyDungeonRestraintsCache: Map<string, restraint>;
    var KinkyDungeonMapParams: Record<string, floorParams>;
    var KinkyDungeonStatsPresets: Record<string, KDPerk>;
    var KinkyDungeonConsumables: Record<string, consumable>;
    var KinkyDungeonGoddessRep: Record<string, number>;
    var KinkyDungeonRescued: Record<string, boolean>;
    var KinkyDungeonAid: Record<string, boolean>;
    /**
     * Base costs for all the shrines. Starts at this value, increases thereafter
     * @type {Record<string, number>}
     */
    let KinkyDungeonShrineBaseCosts: Record<string, number>;

    var KinkyDungeonFactionRelationsBase: { [key: string]: { [key: string]: number } };
    var KinkyDungeonFactionRelations: { [key: string]: { [key: string]: number } };

    var KinkyDungeonSpellPoints: number;
    var KinkyDungeonGold: number;
    var KinkyDungeonLockpicks: number;
    var KinkyDungeonRedKeys: number;
    var KinkyDungeonBlueKeys: number;

    var KinkyDungeonSpellChoicesToggle: boolean[];
    var KinkyDungeonSpellChoices: (number | null | undefined)[];
    var KinkyDungeonSpells: spell[];
    var KinkyDungeonSpellsStart: spell[];
    var KinkyDungeonSpellList: Record<string, spell[]>;
    var KinkyDungeonFindSpell: (name: string, SearchEnemies?: boolean) => spell;
    var KDPushSpell: (sp: spell) => void;
    var KDUpdateSpellCache: () => void;

    var KinkyDungeonInventoryAddWeapon: (Name: string) => void;
    var KinkyDungeonInventoryAddLoose: (Name: string) => void;
    var KinkyDungeonInventoryAddOutfit: (Name: string) => void;

    /**
     *
     * @param {consumable} consumable
     * @param {number} Quantity
     * @return {boolean}
     */
    var KinkyDungeonChangeConsumable: (consumable: consumable, Quantity: number) => boolean;
    var KinkyDungeonItemCount: (consumableName: string) => boolean;

    // const Consumable = "consumable";
    // const Restraint = "restraint";
    // const LooseRestraint = "looserestraint";
    // const Outfit = "outfit";
    // const Accessory = "accessory";
    // const Weapon = "weapon";
    // const Misc = "misc";
    var Consumable: string;
    var Restraint: string;
    var LooseRestraint: string;
    var Outfit: string;
    var Accessory: string;
    var Weapon: string;
    var Misc: string;

    // var KinkyDungeonChangeDistraction: (Amount: number, NoFloater: boolean, lowerPerc: number, minimum = 0) => void;
    function KDChangeDistraction(src: string, type: string, trig: string, Amount: number, NoFloater?: boolean, lowerPerc?: number, minimum: number = 0): number;

    var KinkyDungeonLoot: (
        Level: number,
        Index: string,
        Type: string,   // keyof KinkyDungeonLootTable
        roll?: boolean,
        tile?: any,
        returnOnly?: boolean,
        noTrap?: boolean,
        minWeight = 0.1,
        minWeightFallback = true
    ) => boolean;

    /**
     * It removes a restraint from the player
     * @param {string} Group - The group of the item to remove.
     * @param {boolean} [Keep] - If true, the item will be kept in the player's inventory.
     * @param {boolean} [Add] - If true, this is part of the process of adding another item and should not trigger infinite recursion
     * @param {boolean} [NoEvent] - If true, the item will not trigger any events.
     * @param {boolean} [Shrine] - If the item is being removed from a shrine, this is true.
     * @param {boolean} [UnLink] - If the item is being removed as part of an unlinking process
     * @param {entity} [Remover] - Who removes this
     * @returns {boolean} true if the item was removed, false if it was not.
     */
    function KinkyDungeonRemoveRestraint(Group: string, Keep: boolean, Add?: boolean, NoEvent?: boolean, Shrine?: boolean, UnLink?: boolean, Remover?: entity): boolean;

    /**
     * It removes the item's dynamic link
     * @param {item} hostItem - The group of the item to remove.
     * @param {boolean} [Keep] - If true, the item will be kept in the player's inventory.
     * @param {boolean} [NoEvent] - If true, the item will not trigger any events.
     * @param {entity} [Remover] - Who removes this
     * @param {boolean} [ForceRemove] - Ignore AlwaysKeep, for example if armor gets confiscated
     * @returns {boolean} true if the item was removed, false if it was not.
     */
    function KinkyDungeonRemoveDynamicRestraint(hostItem, Keep: boolean, NoEvent?: boolean, Remover?: entity, ForceRemove?: boolean): boolean;

    /**
     * It removes a restraint from the player
     * @param {item} item - The item to remove.
     * @param {boolean} [Keep] - If true, the item will be kept in the player's inventory.
     * @param {boolean} [Add] - If true, this is part of the process of adding another item and should not trigger infinite recursion
     * @param {boolean} [NoEvent] - If true, the item will not trigger any events.
     * @param {boolean} [Shrine] - If the item is being removed from a shrine, this is true.
     * @param {boolean} [UnLink] - If the item is being removed as part of an unlinking process
     * @param {entity} [Remover] - Who removes this
     * @param {boolean} [ForceRemove] - Ignore AlwaysKeep, for example if armor gets confiscated
     * @returns {boolean} true if the item was removed, false if it was not.
     */
    function KinkyDungeonRemoveRestraintSpecific(item: item, Keep: boolean, Add?: boolean, NoEvent?: boolean, Shrine?: boolean, UnLink?: boolean, Remover?: entity, ForceRemove?: boolean): boolean;

    /**
     *
     * @param {entity} entity
     * @param {string} stat
     * @param {boolean} [onlyPositiveDuration]
     * @returns {number}
     */
    function KDEntityBuffedStat(entity: entity, stat: string, onlyPositiveDuration?: boolean): number;

    /**
     *
     * @param {string} type
     * @param {any} data
     * @returns {string}
     */
    var KDSendInput: (type: string, data: any, frame?: any, noUpdate?: boolean) => string;

    var KinkyDungeonInventoryAdd: (item: item) => void;
    var KinkyDungeonInventoryRemove: (item: item) => void;
    var KinkyDungeonInventoryGet: (Name: string) => item;
    var KinkyDungeonInventoryGetLoose: (Name: string) => item;
    var KinkyDungeonInventoryGetConsumable: (Name: string) => item;
    var KinkyDungeonInventoryGetWeapon: (Name: string) => item;
    var KinkyDungeonInventoryGetOutfit: (Name: string) => item;
    var KinkyDungeonAllConsumable: () => item;
    var KinkyDungeonAllOutfit: () => item;
    var KinkyDungeonAllWeapon: () => item;

    var KinkyDungeonGetItemID: () => number;
    var KinkyDungeonGetEnemyID: () => number;


    var KinkyDungeonStatMana: number;
    var KinkyDungeonStatManaMax: number;
    var KinkyDungeonStatWill: number;
    var KinkyDungeonStatWillMax: number;
    var KinkyDungeonStatStamina: number;
    var KinkyDungeonStatStaminaMax: number;
    var KinkyDungeonStatManaPool: number;
    var KinkyDungeonStatManaPoolMax: number;

    var KinkyDungeonPlayerBuffs: { [key: string]: any };

    var KDGetEnemyCache: () => void;

    var KinkyDungeonFactionColors: { [key: string]: string[] };

    var KDLoadPerks: () => void;

    var KDCornerTiles: { [key: string]: boolean };

    var KDJailOutfits: Record<string, {
        overridelowerpriority: boolean,
        priority: number,
        jail: boolean,
        parole: boolean,
        restraints: KDJailRestraint[]
    }>;


    /** @type {Map<string, number>} */
    let KinkyDungeonFlags: Map<string, number>;

    /**
     * Your inventory contains items that are on you
     * @type {Map<string, Map<string, item>>}
     */
    let KinkyDungeonInventory: Map<string, Map<string, item>>;
    let KinkyDungeonStruggleGroups: any[];

    /**
     *
     * @param {KDMapDataType} map
     * @param {*} tile
     * @returns {string}
     */
    function KDGetShrineQuest(map: KDMapDataType, tile: any): string;

    /**
     *
     * @param {KDMapDataType} map
     * @param {*} tile
     */
    function KDSetShrineQuest(map: KDMapDataType, tile: any, quest: string): void;

    /**
     *
     * @param {KDMapDataType} map
     * @param {string} flag
     */
    function KDSetMapFlag(map: KDMapDataType, flag: string): void;

    /**
     * @type {Record<string, KDQuest>}
     */
    let KDQuests: Record<string, KDQuest>;

    let QuestCompleteWeight: number;
    let KDDefaultGoddessQuestRep: number;

    /**
     *
     * @param {string} Name
     * @param {string} Icon
     * @param {string} Goddess
     * @param {(Goddess, Flag) => void} spawnFunction
     * @param {number} Rep
     * @param {number} restraintsCountMult
     * @param {string[]} restraintsTags
     * @returns {KDQuest}
     */
    function KDGenQuestTemplate(
        Name: string,
        Icon: string,
        Goddess: string,
        spawnFunction: ((Goddess, Flag) => void),
        restraintsCountMult: number,
        restraintsTags: string[],
        Loot?: string,
        Rep: number = KDDefaultGoddessQuestRep,
    ): KDQuest;

    /**
     *
     * @param {any} spell
     * @param {number} count
     * @param {string[]} tags
     * @param {string} faction
     * @param {boolean} [noDeep]
     * @param {boolean} [bypass] - Bypass inaccessible things
     * @param {string} [Lock]
     * @param {object} [options]
     * @param {boolean} [options.Progressive]
     * @param {boolean} [options.ProgressiveSkip] - Will skip over stuff already equipped
     * @param {boolean} [options.DontPreferWill]
     * @param {boolean} [options.Keep]
     * @param {boolean} [options.RequireWill]
     * @returns {{r:restraint, v: ApplyVariant}[]}
     */
    function KDPlayerEffectRestrain(
        spell: any | undefined,
        count: number,
        tags: string[],
        faction: string,
        noDeep: boolean,
        bypass: boolean,
        allowEvade = false,
        allowBlock = false,
        allowBondageResist = true,
        Lock?: string,
        options?: {
            Progressive: boolean,
            ProgressiveSkip: boolean,
            DontPreferWill: boolean,
            Keep: boolean,
            RequireWill: boolean,
        },
    ): { r: restraint, v: ApplyVariant }[];

    function KDSetQuestData(quest: string, data: {
        QuestLocation: { x: number, y: number },  // KDCurrentWorldSlot
        QuestRoom: string,  // KDMapData.RoomType
    });

    function KDGetQuestData(quest: string): {
        QuestLocation: { x: number, y: number },  // KDCurrentWorldSlot
        QuestRoom: string,  // KDMapData.RoomType
    } | {};


    /**
     * Gets a restraint from a list of eligible restraints and a group prioritization order
     * @param {{restraint: restraint, variant?: ApplyVariant, weight: number}[]} RestraintList
     * @param {string[]} GroupOrder
     * @param {boolean} [skip]
     * @returns {{r: restraint, v: ApplyVariant}}
     */
    function KDChooseRestraintFromListGroupPriWithVariants(
        RestraintList: { restraint: restraint, variant?: ApplyVariant, weight: number }[],
        GroupOrder: string[],
        skip = true,
    ): { r: restraint, v: ApplyVariant };

    /**
     *
     * @param {KDHasTags} enemy
     * @param {*} Level
     * @param {*} Index
     * @param {*} Bypass
     * @param {*} Lock
     * @param {*} RequireWill
     * @param {*} LeashingOnly
     * @param {*} NoStack
     * @param {*} extraTags
     * @param {*} agnostic - Determines if playertags and current bondage are ignored
     * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
     * @param {string} [curse] - Planning to add this curse
     * @param {boolean} [useAugmented] - useAugmented
     * @param {string[]} [augmentedInventory] -
     * @param {object} [options]
     * @param {boolean} [options.dontAugmentWeight]
     * @param {boolean} [options.ApplyVariants]
     * @param {boolean} [options.dontPreferVariant]
     * @param {{minPower?: number, maxPower?: number, onlyLimited?: boolean, noUnlimited?: boolean, noLimited?: boolean, onlyUnlimited?: boolean, ignore?: string[], require?: string[], looseLimit?: boolean, ignoreTags?: string[], allowedGroups?: string[]}} [filter] - Filters for items
     * @returns {{r: restraint, v: ApplyVariant}}
     */
    function KDGetRestraintWithVariants(
        enemy: KDHasTags,
        Level: any,
        Index: any,
        Bypass: any,
        Lock: any,
        RequireWill: any,
        LeashingOnly?: any,
        NoStack?: any,
        extraTags?: any,
        agnostic?: any,
        filter?: {
            minPower?: number,
            maxPower?: number,
            onlyLimited?: boolean,
            noUnlimited?: boolean,
            noLimited?: boolean,
            onlyUnlimited?: boolean,
            ignore?: string[],
            require?: string[],
            looseLimit?: boolean,
            ignoreTags?: string[],
            allowedGroups?: string[]
        },
        securityEnemy?: entity,
        curse?: string,
        useAugmented?: boolean,
        augmentedInventory?: string[],
        options?: {
            dontAugmentWeight: boolean,
            ApplyVariants: boolean,
            dontPreferVariant: boolean,
        },
    ): { r: restraint, v: ApplyVariant };

    function KDAddQuest(quest: string): void;

    function KDRemoveQuest(quest: string): void;

    /**
     * @type {Record<string, KDQuest>}
     */
    let KDQuests: Record<string, KDQuest>;

    let KDSpecialChests: Record<string, string>;
    let KDHandsfreeChestTypes: string[];

    function KDGenChestTrap(guaranteed, x, y, chestType, lock, noTrap);

    // Distraction -- It lowers your stamina regen
    let KDMaxStat: number; // Maximum any stat can get boosted to
    let KDMaxStatStart: number; // Start of stats
    let KDMaxStatStartPool: number; // Start of stats

    let KDRefreshSpellCache: boolean;

    /**
     *
     * @param {number} delta
     */
    function KinkyDungeonUpdateStats(delta);

    var KDLocks: Record<string, KDLockType>;

    var KinkyDungeonLootTable: Record<string, {
        name: string,
        minLevel: number,
        weight: number,
        armortags: string[],
        armor: string,
        cursesuffix: string,
        amtMult: number,
        maxEnchants: number,
        faction: string,
        hexlist: string,
        enchantlist: string,
        hexchance: number,
        enchantchance: number,
        alwaysenchanthex: true,
        hexscale: number,
        unlockcurse: string[],
        hexlevelmin: number,
        hexlevelmax: number,
        enchantlevelmin: number,
        enchantlevelmax: number,
        message: string,
        messageColor: string,
        messageTime: number,
        allFloors: boolean,
        lock: string | undefined,

        minHex: number,
        maxHex: number,
    }[]>;

    var KDShadowRestraints: {
        name: string,
        minLevel: number,
        weight: number,
        armortags: string[],
        armor: string,
        cursesuffix: string,
        amtMult: number,
        minEnchants: number,
        maxEnchants: number,
        faction: string,
        hexlist: string,
        enchantlist: string,
        hexchance: number,
        enchantchance: number,
        alwaysenchanthex: true,
        hexscale: number,
        unlockcurse: string[],
        hexlevelmin: number,
        hexlevelmax: number,
        enchantlevelmin: number,
        enchantlevelmax: number,
        message: string,
        messageColor: string,
        messageTime: number,
        allFloors: boolean,
        lock: string | undefined,

        minHex: number,
        maxHex: number,
    }[];

    var KDEventHexModular: Record<string, {
        weight: (item: string, allHex: string[], data: KDHexEnchantEventsData) => number,
        events: (data: KDHexEnchantEventsData) => KinkyDungeonEvent[],
    }>;

    /**
     * @type {Record<string, ApplyVariant>}
     */
    let KDApplyVariants: Record<string, ApplyVariant>;

    function KinkyDungeonLootEvent(Loot, Floor, Replacemsg, Lock);

    function KDGetEffLevel(): number;

    var KDHexVariantList: Record<string, string[]>;

    function KDApplyVarToInvVar(restraint: restraint, variant: ApplyVariant): KDRestraintVariant;


    /** @type {Record<string, KDEnchantment>} */
    var KDEventEnchantmentModular: Record<string, KDEnchantment>;

    /**
     * @enum {ModifierEnum}
     */
    var KDModifierEnum = {
        restraint: 0,
        looserestraint: 0,
        weapon: 1,
        consumable: 2,
    };

    function KDEquipInventoryVariant(
        variant: KDRestraintVariant,
        prefix: string = "",
        Tightness?: number,
        Bypass?: boolean,
        Lock?: string,
        Keep?: boolean,
        Trapped?: boolean,
        faction?: string,
        Deep?: boolean,
        curse?: string,
        securityEnemy?: entity,
        useAugmentedPower?: boolean,
        _inventoryAs?: string,
        ID: string = "",
        suffix: string = "",
        powerBonus: number = 0
    );

    var KDUpdateItemEventCache: boolean;

    let KinkyDungeonRestraintVariants: Record<string, KDRestraintVariant> = {};

    let KinkyDungeonWeaponVariants: Record<string, KDWeaponVariant> = {};

    let KinkyDungeonConsumableVariants: Record<string, KDConsumableVariant> = {};

    function KinkyDungeonCanUseWeapon(NoOverride?: boolean, e?: boolean, weapon?: weapon): boolean;

    function KinkyDungeonCalculateMiscastChance();

    function KinkyDungeonCalculateSlowLevel(delta?: number);

    function KinkyDungeonGetEvasion(Enemy?: entity, NoOverride?: boolean, IsSpell?: boolean, IsMagic?: boolean, cost?: boolean): number;

    function KinkyDungeoCheckComponentsPartial(spell: spell, x: number, y: number, includeFull: boolean, noOverride?: boolean): string[];

    function KinkyDungeoCheckComponents(spell: spell, x?: number, y?: number, noOverride?: boolean): {
        components: string[],
        failed: string[],
    };

    function KinkyDungeonSendEvent(Event: string, data: any, forceSpell?: any);

    function KinkyDungeonCanDrink(byEnemy?: boolean): boolean;

    // Distraction -- It lowers your stamina regen
    let KDMaxStat = 40; // Maximum any stat can get boosted to
    let KDMaxStatStart = 10; // Start of stats
    let KDMaxStatStartPool = 40; // Start of stats

    let KDStamDamageThresh = 0.3;
    let KDStamDamageThreshBonus = 0.01;

    let KDSleepRegenWill = KDSleepWillFractionJail * KDMaxStatStart / 40;

    let KinkyDungeonStatDistractionMax = KDMaxStatStart;
    let KDDistractionLowerPercMult = 0.1;
    let KinkyDungeonStatDistractionLower = 0;
    let KinkyDungeonStatDistractionLowerCap = 0.9;
    let KinkyDungeonStatArousalLowerRegenSleep = 0; // Decrease lower distraction in sleep?
    let KinkyDungeonDistractionUnlockSuccessMod = 0.5; // Determines how much harder it is to insert a key while aroused. 1.0 is half success chance, 2.0 is one-third, etc.
    let KinkyDungeonStatDistraction = 0;
    let KinkyDungeonCrotchRopeDistraction = 0.4;
    let KinkyDungeonStatDistractionRegen = -1.0;
    let KinkyDungeonStatDistractionRegenPerUpgrade = KinkyDungeonStatDistractionRegen * 0.1;
    let KDNoUnchasteBraMult = 0.9;
    let KDNoUnchasteMult = 0.8;
    let KDDistractionDecayMultDistractionMode = 0.25;
    let KDDistractedAmount = 0.15;
    let KinkyDungeonStatDistractionMiscastChance = 0.7; // Miscast chance at max distraction
    let KinkyDungeonMiscastChance = 0;
    let KinkyDungeonVibeLevel = 0;
    let KinkyDungeonTeaseLevel = 0;
    /** This is super powerful teasing that bypasses chastity */
    let KinkyDungeonTeaseLevelBypass = 0;
    let KinkyDungeonOrgasmVibeLevel = 0;
    let KinkyDungeonDistractionPerVibe = 0.2; // How much distraction per turn per vibe energy cost
    let KinkyDungeonDistractionPerPlug = 0.1; // How much distraction per move per plug level
    let KinkyDungeonVibeCostPerIntensity = 0.15;

    let KinkyDungeonStatWillpowerExhaustion = 0;
    let KinkyDungeonSleepTurnsMax = 41;
    // Note that things which increase max distraction (aphrodiasic) also increase the max stamina drain. This can end up being very dangerous as being edged at extremely high distraction will drain all your energy completely, forcing you to wait until the torment is over or the drugs wear off

    // Stamina -- your MP. Used to cast spells and also struggle
    let KinkyDungeonStatStaminaMax = KDMaxStatStart;
    let KinkyDungeonStatStamina = KinkyDungeonStatStaminaMax;
    let KinkyDungeonStatStaminaRegen = 0.5;
    let KinkyDungeonStatStaminaRegenPerUpgrade = 0.0;
    let KinkyDungeonStatStaminaRegenPerUpgradeWill = 0.02;
    let KDNarcolepticRegen = -0.06;
    let KinkyDungeonStatStaminaRegenJail = 0.125;
    let KinkyDungeonStatStaminaRegenSleep = KinkyDungeonStatStaminaMax / 40;
    let KinkyDungeonStatStaminaRegenSleepBedMultiplier = 1.5;
    let KinkyDungeonStatStaminaRegenWait = 0.5;
    let KinkyDungeoNStatStaminaLow = 4;
    let KDSprintCostBase = 1.5; // Cost of sprinting
    let KDSprintCostSlowLevel = [0.5, 1.0, 0.0, 0.5, 1.0]; // Extra cost per slow level
    let KinkyDungeonStatWillMax = KDMaxStatStart;
    let KinkyDungeonStatWill = KinkyDungeonStatWillMax;
    let KinkyDungeonStatWillRate = 0;
    let KinkyDungeonStatManaMax = KDMaxStatStart;
    let KinkyDungeonStatMana = KinkyDungeonStatManaMax;
    let KinkyDungeonStatManaPool = KinkyDungeonStatManaMax;
    let KinkyDungeonStatManaPoolMax = KDMaxStatStartPool;
    let KDManaPoolRatio = 1.0; // 1 point of mana costs 1 points of pool mana
    let KinkyDungeonStatManaRate = 0;
    let KinkyDungeonStatManaRegen = 0; // How fast stamina that is converted to mana regenerates
    let KinkyDungeonStatManaLowRegen = 0; // How fast stamina that is converted to mana regenerates when low
    let KDMeditationRegen = 0.1;
    let KinkyDungeonStatManaRegenLowThreshold = 5; // Threshold for fast mana regen
    let KinkyDungeonStatManaPoolRegen = 0.01; // Threshold for pool mana regen, % of max mana
    let KinkyDungeonStatStaminaRegenPerSlowLevel = -0.03; // It costs stamina to move while bound
    let KinkyDungeonStatStaminaCostStruggle = -3.0; // It costs stamina to struggle
    let KinkyDungeonStatStaminaCostRemove = -0.5; // It costs stamina to struggle
    let KinkyDungeonStatStaminaCostTool = -0.2; // It costs stamina to cut, but much less
    let KinkyDungeonStatStaminaCostPick = -0.1; // It costs stamina to pick, but much less


    let KinkyDungeonStatWillCostStruggle = 0; // It costs will to struggle
    let KinkyDungeonStatWillCostRemove = 0; // It costs will to struggle
    let KinkyDungeonStatWillCostTool = 0; // It costs will to cut, but much less
    let KinkyDungeonStatWillCostPick = 0; // It costs stamina to pick, but much less
    let KinkyDungeonStatWillCostUnlock = 0; // It costs stamina to pick, but much less

    let KinkyDungeonStatWillCostEscape = -0.2; // It costs will to struggle out of an item
    let KinkyDungeonStatWillBonusEscape = 0.2; // Bonus for Second Wind

    let KinkyDungeonStaminaRate = KinkyDungeonStatStaminaRegen;

    // Current Status
    let KinkyDungeonStatBeltLevel = 0; // Chastity bra does not add belt level
    let KinkyDungeonStatPlugLevel = 0; // Cumulative with front and rear plugs
    let KinkyDungeonPlugCount = 0;
    let KinkyDungeonStatVibeLevel = 0; // Cumulative with diminishing returns for multiple items
    let KinkyDungeonStatEdged = false; // If all vibrating effects are edging, then this will be true

    let KinkyDungeonStatDistractionGainChaste = -0.1; // Cumulative w/ groin and bra


    // Restraint stats

    let KinkyDungeonSlowLevel = 0; // Adds to the number of move points you need before you move

    let KinkyDungeonBlindLevelBase = 0; // Base, increased by buffs and such, set to 0 after consumed in UpdateStats
    let KinkyDungeonBlindLevel = 0; // Blind level 1: -33% vision, blind level 2: -67% vision, Blind level 3: Vision radius = 1
    let KinkyDungeonStatBlind = 0; // Used for temporary blindness
    let KinkyDungeonStatFreeze = 0; // Used for temporary freeze
    let KinkyDungeonStatBind = 0; // Used for temporary bind
    let KinkyDungeonDeaf = false; // Deafness reduces your vision radius to 0 if you are fully blind (blind level 3)
    let KinkyDungeonSleepiness = 0; // Sleepiness
    let KinkyDungeonSleepinessMax = 10;

    // Other stats
    let KinkyDungeonGold = 0;

    let KinkyDungeonHasCrotchRope = false;

    // Combat
    let KinkyDungeonTorsoGrabChance = 0.4;
    let KinkyDungeonTorsoGrabChanceBonus = 0.2;
    let KinkyDungeonWeaponGrabChance = 1.0;

}


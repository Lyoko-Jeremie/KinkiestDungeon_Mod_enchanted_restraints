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
    /**
     * @param {restraint | string} restraint
     * @param {number} [Tightness]
     * @param {boolean} [Bypass]
     * @param {string} [Lock]
     * @param {boolean} [Keep]
     * @param {boolean} [Trapped] - Deprecated do not use
     * @param {KinkyDungeonEvent[]} [events]
     * @param {string} [faction]
     * @param {boolean} [Deep] - whether or not it can go deeply in the stack
     * @param {string} [Curse] - Curse to apply
     * @param {entity} [securityEnemy] - Bypass is treated separately for these groups
     * @param {boolean} [useAugmentedPower] - Augment power to keep consistency
     * @param {string} [inventoryAs] - inventoryAs for the item
     * @param {Record<string, any>} [data] - data for the item
     * @param {string[]} [augmentedInventory]
     * @param {ApplyVariant} [variant] - variant for the item
     * @returns {number}
     */
    var KinkyDungeonAddRestraintIfWeaker: (
        restraint: restraint | string,
        Tightness: number,
        Bypass: boolean,
        Lock: string,
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
    ) => number;
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

    var KinkyDungeonChangeDistraction: (Amount: number, NoFloater: boolean, lowerPerc: number, minimum = 0) => void;

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
}


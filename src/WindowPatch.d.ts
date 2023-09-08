export {};
import type {Cheats} from './Cheats/Cheats';

declare global {
    interface Window {
        KinkyDungeonMod_EnchantedRestraints: {
            Cheats: Cheats,
            ApplyModRestraint: () => any[],
            setEdgeOnly: (b: boolean) => void,
            EnchantedRestraintsPatch: () => void,
        };
        Mod_EnchantedRestraints: {
            Cheats: Cheats,
            ApplyModRestraint: () => any[],
            setEdgeOnly: (b: boolean) => void,
            EnchantedRestraintsPatch: () => void,
        };

    }

    // =================================================
    // from KK
    var MiniGameKinkyDungeonLevel: number;
    var KDOptOut: boolean;
    var TranslationLanguage: string;
    var KinkyDungeonGrid: string;
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
}

export {};

declare global {
    interface Window {
        KinkyDungeonMod_EnchantedRestraints: any;
        Mod_EnchantedRestraints: any;

        // =================================================
        // from KK
        KDOptOut: boolean;
        TranslationLanguage: string;
        KinkyDungeonGrid: string;
        KinkyDungeonStatsChoice: Map<number | string, boolean>;
        KinkyDungeonRestraints: restraint[];
        KinkyDungeonRefreshRestraintsCache: () => void;
        KinkyDungeonGetRestraintByName: (Text: string) => restraint;
        KinkyDungeonLoadGame: (s: string) => boolean;
        KinkyDungeonSaveGame: (ToString: boolean) => string;
        TextGet: (Text: string) => string;
        TextGetKD: (Text: string) => string;
        KDRestraint: (item: Named) => restraint;
        addTextKey: (Name: string, Text: string) => void;
        KinkyDungeonAddGold: (n: number) => void;
        KinkyDungeonAddRestraintText: (name, displayName, flavorText, functionText) => void;

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
        KinkyDungeonAddRestraint: (
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
        ) => any;

        KinkyDungeonAllRestraint: () => item[];
        KinkyDungeonAllRestraintDynamic: () => { item: item, host: item }[];
        KinkyDungeonAllLooseRestraint: () => item[];

        KDGameData: KDGameDataBase;
        KinkyDungeonOutfitsBase: { name: string, dress: string, shop: boolean, rarity: number }[];
        KinkyDungeonDresses: Record<string, KinkyDungeonDress>;
        KinkyDungeonWeapons: Record<string, weapon>;
        KinkyDungeonPlayerEntity: any;
        KinkyDungeonGroundItems: any[];
        KinkyDungeonRestraintsCache: Map<string, restraint>;
        KinkyDungeonMapParams: Record<string, floorParams>;
        KinkyDungeonStatsPresets: Record<string, KDPerk>;
        KinkyDungeonConsumables: Record<string, consumable>;
        KinkyDungeonGoddessRep: Record<string, number>;
        KinkyDungeonRescued: Record<string, boolean>;
        KinkyDungeonAid: Record<string, boolean>;

        KinkyDungeonFactionRelationsBase: { [key: string]: { [key: string]: number } };
        KinkyDungeonFactionRelations: { [key: string]: { [key: string]: number } };

        KinkyDungeonSpellPoints: number;
        KinkyDungeonGold: number;
        KinkyDungeonLockpicks: number;
        KinkyDungeonRedKeys: number;
        KinkyDungeonBlueKeys: number;

        KinkyDungeonSpellChoicesToggle: boolean[];
        KinkyDungeonSpellChoices: number[];
        KinkyDungeonSpells: spell[];
        KinkyDungeonSpellsStart: spell[];
        KinkyDungeonSpellList: Record<string, spell[]>;
        KinkyDungeonFindSpell: (name: string, SearchEnemies?: boolean) => spell;

        KinkyDungeonInventoryAddWeapon: (Name: string) => void;
        KinkyDungeonInventoryAddLoose: (Name: string) => void;
        KinkyDungeonInventoryAddOutfit: (Name: string) => void;

        /**
         *
         * @param {consumable} consumable
         * @param {number} Quantity
         * @return {boolean}
         */
        KinkyDungeonChangeConsumable: (consumable: consumable, Quantity: number) => boolean;

        // const Consumable = "consumable";
        // const Restraint = "restraint";
        // const LooseRestraint = "looserestraint";
        // const Outfit = "outfit";
        // const Accessory = "accessory";
        // const Weapon = "weapon";
        // const Misc = "misc";
        Consumable: string;
        Restraint: string;
        LooseRestraint: string;
        Outfit: string;
        Accessory: string;
        Weapon: string;
        Misc: string;

        KinkyDungeonChangeDistraction: (Amount: number, NoFloater: boolean, lowerPerc: number, minimum = 0) => void;


        /**
         *
         * @param {string} type
         * @param {any} data
         * @returns {string}
         */
        KDSendInput: (type: string, data: any, frame?: any, noUpdate?: boolean) => string;

        KinkyDungeonInventoryAdd: (item: item) => void;
        KinkyDungeonInventoryRemove: (item: item) => void;
        KinkyDungeonInventoryGet: (Name: string) => item;
        KinkyDungeonInventoryGetLoose: (Name: string) => item;
        KinkyDungeonInventoryGetConsumable: (Name: string) => item;
        KinkyDungeonInventoryGetWeapon: (Name: string) => item;
        KinkyDungeonInventoryGetOutfit: (Name: string) => item;
        KinkyDungeonAllConsumable: () => item;
        KinkyDungeonAllOutfit: () => item;
        KinkyDungeonAllWeapon: () => item;

        KinkyDungeonGetItemID: () => number;
        KinkyDungeonGetEnemyID: () => number;


        KinkyDungeonStatMana: number;
        KinkyDungeonStatManaMax: number;
        KinkyDungeonStatWill: number;
        KinkyDungeonStatWillMax: number;
        KinkyDungeonStatStamina: number;
        KinkyDungeonStatStaminaMax: number;
        KinkyDungeonStatManaPool: number;
        KinkyDungeonStatManaPoolMax: number;

        KinkyDungeonPlayerBuffs: { [key: string]: any };

        KDGetEnemyCache: () => void;
    }
}

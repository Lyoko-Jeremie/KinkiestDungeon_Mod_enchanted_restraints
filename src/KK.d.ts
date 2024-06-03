type Named = {
    name: string,
}

/** Kinky Dungeon Typedefs*/
interface item extends Named {
    id: number,
    /** Contains string data */
    dataString?: Record<string, string>;
    /** Contains numeric data */
    dataNumber?: Record<string, number>;
    /** Used in order to boost performance */
    linkCache?: string[],
    /** If the item has a different curse from the base curse */
    curse?: string,
    /** Name of the item*/
    name: string,
    /** Type of the item*/
    type?: string,
    /** Faction of the applied item */
    faction?: string,
    /** Events associated with the item*/
    //weapon?: KinkyDungeonWeapon, /** Item weapon data, if applicable*/
    //consumable?: any, /** Item consumable data, if applicable*/
    events?: KinkyDungeonEvent[],
    /** Number of consumables in the inventory*/
    quantity?: number,
    //looserestraint?: any, /** Loose restraint data, if applicable*/
    //restraint?: any, /** Which restraint the item is associated with*/
    /** Type of lock, Red, Blue, or Gold (potentially more in future)*/
    lock?: string,
    /** Bool to describe if the item is tethered to the leashing enemy*/
    tetherToLeasher?: boolean,
    /** Bool to describe if the item is tethered to KinkyDungeonJailGuard()*/
    tetherToGuard?: boolean,
    /** ID of leashing enemy*/
    tetherEntity?: number,
    /** Leashing location*/
    tetherLocation?: { x: number, y: number },
    /** Location of the tether*/
    tx?: number,
    /** Location of the tether*/
    ty?: number,
    /** Length of the tether*/
    tetherLength?: number,
    /** Used for Gold locks only, determines which floor the lock will release*/
    lockTimer?: number,
    /** Stores the previously linked item*/
    dynamicLink?: item,
    /** Generic item data, able to be manipulated thru events*/
    data?: Record<string, any>,
    /** Escape progress tracking*/
    pickProgress?: number,
    /** Escape progress tracking*/
    struggleProgress?: number,
    /** Escape progress tracking*/
    cutProgress?: number,
    /** Escape progress tracking*/
    unlockProgress?: number,
    /** Number of escape attempts, integer*/
    attempts?: number,
    /** Can be used to make an item tighter and harder to escape, reduces with each escape attempt*/
    tightness?: number,
    /** Determines the current trap attached to the restraint*/
    trap?: string,
}


interface LayerFilter {
    gamma: 1,
    saturation: 1,
    contrast: 1,
    brightness: 1,
    red: 1,
    green: 1,
    blue: 1,
    alpha: 1,
}

interface KDRestraintProps extends KDRestraintPropsBase {
    name: string,
    Group: string,
    Asset: string,
}

interface KDRestraintPropsBase {
    /** Used in standalone to replace Color */
    Filters?: Record<string, LayerFilter>,
    /** This item is unaffected by shrines */
    noShrine?: boolean,
    /** This item is beneficial and player wont try to struggle from it */
    good?: boolean,

    inventory?: boolean,
    power?: number,
    weight?: number,
    minLevel?: number,
    allFloors?: boolean,

    escapeChance?: any,

    events?: KinkyDungeonEvent[],
    enemyTags?: Record<string, number>,
    playerTags?: Record<string, number>,
    shrine?: string[],

    debris?: string,
    debrisChance?: number,

    /** These items can only be applied if an enemy has the items in her inventory or the unlimited enemy tag */
    limited?: boolean,
    /** Forced to allow these, mainly leashes and collars */
    unlimited?: boolean,

    /** Security levels for chastity. Non-tech belts should have a Tech security of undefined. Magic belts should have undefined for key and tech.
     * KEY can be circumvented by having a key. Normally you cant remove a plug but you can spend a key to unlock a plug slot for 30 turns or until you are hit or a restraint is removed in that slot.
     *    Key difficulty of 1 can simply be lockpicked, taking a bit of time.
     *    Key difficulty of 3 becomes a blue key.
     * MAGIC can be circumvented thru CMD: Unlock
     * Tech cannot be circumvented by the player. TODO add keycard to allow this.
     * Undefined means the specified method can not be used
     * Chastity without Security ignores the security system
     * NPC ability to unlock is OR. Having the ability to unlock just one of the security levels means the NPC can unlock.
     */
    Security?: {
        /** Key security level, for low-tech non-mage factions */
        level_key?: number,
        /** Tech security level, for robots and wolfgirls */
        level_tech?: number,
        /** Magic security level, for mage factions */
        level_magic?: number,
    },

    /** Affinity type: Hook, Edge, or Sharp, Sticky, defaults are Hook (struggle), Sharp (Cut), Edge (Pick), Sticky (Unlock), and none (Pick)*/
    affinity?: {
        Struggle?: string[],
        Cut?: string[],
        Remove?: string[],
        Pick?: string[],
        Unlock?: string[],
    },
    /**
     * Makes it so its never impossible to struggle with these methods, usually best combined with struggleMinSpeed
     */
    alwaysEscapable?: string[];
    /**
     * Makes it so enemies, if they would remove this item to place another restraint on, will simply remove this item instead
     * Higher number means resistance to multibind
     */
    protection?: number;
    /**
     * This item only provides protection if its group is being targeted
     */
    protectionCursed?: boolean;
    /** Determines if the item appears in aroused mode only */
    arousalMode?: boolean,
    /** This item lets you access linked items under it */
    accessible?: boolean,
    /** This item lets you CANT access linked items under it */
    inaccessible?: boolean,
    /** This item lets you ignore its inaccessibility for the sake of trussing up the player */
    deepAccessible?: boolean,
    /** WIP, does nothing yet. Should allow you to access the item under even inaccessible stuff */
    alwaysAccessible?: boolean,
    /** This item can be rendered when linked */
    renderWhenLinked?: string[];
    // Player must have one of these PlayerTags to equip
    requireSingleTagToEquip?: string[];
    /** This item always renders when linked */
    alwaysRender?: boolean,
    /** When the mentioned items are rendered, changes the type */
    changeRenderType?: Record<string, string>;
    /** Stacking category, used to determine if you can have multiple of these items in a stack */
    linkCategory?: string;
    /** Stacking size, can't exceed 1 */
    linkSize?: number;
    /** Enemies ignore you while you are wearing it */
    ignoreNear?: boolean,
    /** Enemies wont cast spells or ranged attacks while you are wearing it */
    ignoreSpells?: boolean,
    /** Can always struggle even if it's blocked */
    alwaysStruggleable?: boolean,
    /** Model to use in standalone. Defaults to Asset */
    Model?: string,
    /** Used for when the visual asset in BC is different from the actual group of the item*/
    AssetGroup?: string,
    Color?: string[] | string,
    /** Maximum level, wont be used at this or higher. Inclusive. */
    maxLevel?: number,
    /** Determines the floors the restraint can appear on */
    floors?: Record<string, boolean>,
    /** Overrides escapeChance when you have a ghost helping*/
    helpChance?: {
        Struggle?: number,
        Cut?: number,
        Remove?: number,
        Pick?: number,
        Unlock?: number,
    },
    /** Determines the penalty to the escape chance at the limit--full struggle progress when struggling, and 0 for cut/remove/unlock/pick*/
    limitChance?: {
        Struggle?: number,
        Cut?: number,
        Remove?: number,
        Pick?: number,
        Unlock?: number,
    },
    struggleMinSpeed?: {
        Struggle?: number,
        Cut?: number,
        Remove?: number,
        Pick?: number,
        Unlock?: number,
    },
    struggleMaxSpeed?: {
        Struggle?: number,
        Cut?: number,
        Remove?: number,
        Pick?: number,
        Unlock?: number,
    },
    /** Multiplier to struggle power */
    struggleMult?: {
        Struggle?: number,
        Cut?: number,
        Remove?: number,
        Pick?: number,
        Unlock?: number,
    },

    /** Sound when using an escape method*/
    sfxEscape?: {
        Struggle?: string,
        Cut?: string,
        Remove?: string,
        Pick?: string,
        Unlock?: string,
        NoStamina?: string,
        NoWill?: string,
        NoMagic?: string,
        MagicCut?: string,
        PickBreak?: string,
        KnifeBreak?: string,
        KnifeDrop?: string,
        KeyDrop?: string,
        PickDrop?: string,
    },
    sfxFinishEscape?: {
        Struggle?: string,
        Cut?: string,
        Remove?: string,
        Pick?: string,
        Unlock?: string,
        Destroy?: string,
    }
    /** Remove sound */
    sfxRemove?: string,
    /** Equip sound */
    sfx?: string,
    /** The vibrator will start vibing whenever another linked vibe starts */
    linkedVibeTags?: string[],
    vibeLocation?: string,
    showInQuickInv?: boolean,
    /** The item is a chastity belt */
    chastity?: boolean,
    /** The item is a chastity bra */
    chastitybra?: boolean,
    /** The item is a piercing */
    piercing?: boolean,
    /** The item rubs against the crotch when you move or struggle*/
    crotchrope?: boolean,
    /** The item provides distraction when you walk around*/
    plugSize?: number,
    /** Binding arms hurts a lot of things but isn't as punishing as hands */
    bindarms?: boolean,
    /** Hands count as bound for struggling purposes */
    restricthands?: number,
    /** Binding hands prevents use of weapons and picks */
    bindhands?: number,
    /** harnesses allow enemies to grab you and slow you */
    harness?: boolean,
    /** hobble is the simplest kind of slowing restraint, increasing slow by 1*/
    hobble?: boolean,
    /** Blocking feet is for restraints that tie the legs together, forcing the player into SLow Level 2 or higher */
    blockfeet?: boolean,
    /** Your total gag level is the sum of the gag values of all your variables. Ball gags have 0.3-0.75 based on size and harness, muzzles are 1.0 */
    gag?: number,
    /** Higher value = higher vision loss */
    blindfold?: number
    /** Maximum stamina percentage the player can have in order for the restraint to be applied. 0.25-0.35 for really strict stuff, 0.9 for stuff like ball gags, none for quick restraints like cuffs */
    maxwill?: number,
    Type?: string,
    /** Item is removed when the wearer goes to prison */
    removePrison?: boolean,
    /** Changes the dialogue text when you fail to remove the item */
    failSuffix?: Record<string, string>,
    /** Changes the dialogue text when you try to struggle completely */
    specStruggleTypes?: string[],
    /** List of Groups removed */
    remove?: string[],
    /** List of tags removed */
    removeShrine?: string[],
    slimeLevel?: number,
    addTag?: string[],
    addPose?: string[],
    forbidPose?: string[],
    removePose?: string[],
    OverridePriority?: number,
    Modules?: number[],
    /** When added to the inventory, is added as a different item instead. Good for multiple stages of the same item, like cuffs */
    inventoryAs?: string,
    /** When added to the inventory by self, is added as a different item instead. Good for multiple stages of the same item, like cuffs */
    inventoryAsSelf?: string,
    /** The item is always kept in your inventory no matter how it gets removed, so long as you don't cut it */
    alwaysKeep?: boolean,
    /** The jailer won't remove these */
    noJailRemove?: boolean,
    /** Increases the difficulty of other items */
    strictness?: number,
    /** Overrides the existing strictness zones for the item's group */
    strictnessZones?: string[],
    /** Can be linked by items with this shrine category */
    LinkableBy?: string[],
    DefaultLock?: string,
    HideDefaultLock?: boolean,
    Link?: string,
    UnLink?: string,
    /** Removes when the player is leashed */
    removeOnLeash?: boolean,
    /** player is enclosed */
    enclose?: boolean,
    /** ignore the player if player is 0 stamina and the enemy is non leashing */
    ignoreIfNotLeash?: boolean,
    /** Default tether length */
    tether?: number,
    leash?: boolean,
    /** The vibe can be remote controlled by enemies */
    allowRemote?: boolean,
    /** Multiplies the escape chance */
    escapeMult?: number,
    /** Clothes for dressing */
    alwaysDress?: overrideDisplayItem[],
    /** Clothes for dressing */
    alwaysDressModel?: alwaysDressModel[],
    /** The item always bypasses covering items, such as dresses and chastity belts */
    bypass?: boolean,
    /** The item can only be cut with magical implements */
    magic?: boolean,
    /** The item is regarded as a non-binding item, so the game knows how to handle it. Used for stuff like cuffs which are not binding by default */
    nonbinding?: boolean,
    /** Instantly forces a high slow level, for stuff like slime */
    freeze?: boolean,
    /** Immobilizes the player */
    immobile?: boolean,
    /** The item CAN be trapped, which triggers when you struggle out */
    trappable?: boolean,
    /** The item can only be removed through a special condition known as a curse */
    curse?: string,
    /** The extra difficulty the item adds to the global difficulty var */
    difficultyBonus?: number,
    /** Whether or not the angels will take it off when you call them */
    divine?: boolean,
    /** If this is enabled, then you can spend ancient energy to use a potion at no reduction to potion effectiveness while gagged */
    potionCollar?: boolean,
    /** Always allows potions while this restraint is on */
    allowPotions?: boolean,
    /** Allows the user to walk across slime */
    slimeWalk?: boolean,
    /** Amount of ancient energy it draws per turn */
    enchantedDrain?: number,
    /** Whether or not this is an Ancient item, prison respects it */
    enchanted?: boolean,
    /** Faction color index */
    factionColor?: number[][],
    /** Determines if it gets hidden by the 'Hide Armor' option */
    armor?: boolean,
    /** Power to display, not actual power */
    displayPower?: number,
}

interface restraint extends KDRestraintProps {
    power: number,
    /** Base weight of the restraint, required */
    weight: number,
    minLevel: number,

    Color: string[] | string,

    escapeChance: any,

    enemyTags: Record<string, number>,
    playerTags: Record<string, number>,
    shrine: string[],
}


interface KinkyDungeonEvent {
    cost?: number,
    /** This is from a temporary event curse */
    curse?: boolean,
    tags?: string[],
    duration?: number,
    always?: boolean,
    bindEff?: number,
    type: string;
    trigger: string;
    restraint?: string;
    sfx?: string;
    power?: number;
    count?: number;
    player?: boolean;
    bind?: number;
    distract?: number;
    mult?: number;
    kind?: string;
    variance?: number;
    damage?: string;
    buffTypes?: string[];
    damageTrigger?: string;
    dist?: number;
    aoe?: number;
    buffType?: string;
    time?: number;
    bindType?: string;
    chance?: number;
    buff?: any;
    lock?: string;
    msg?: string;
    prereq?: string;
    color?: string;
    /** Vibe */
    edgeOnly?: boolean;
    /** Vibe */
    cooldown?: Record<string, number>;
    /** A required enemy tag */
    requiredTag?: string;
    /** Generic required tags */
    requireTags?: string[];
    /** Generic filtered tags */
    filterTags?: string[];
    /** Type of struggle that this event triggers on */
    StruggleType?: string;
    requireEnergy?: boolean;
    /** Limit of whatever thius event modifies */
    limit?: number
    energyCost?: number;
    /** The event gets copied to any restraint if the item is linked */
    inheritLinked?: boolean;
    /** Spell to cast at the target */
    spell?: string;
    /** Chance to trigger is 1+(submissive % * subMult)*/
    subMult?: number;
    /** Won't trigger while being leashed */
    noLeash?: boolean;
    /** Stun duration */
    stun?: number;
    /** Chance the player will get warned instead of punshed */
    warningchance?: number;
    /** triggers from this component */
    punishComponent?: string;
    /** List of restraints or other string params */
    list?: string[];
    /** Whether or not the event only triggers on human targets */
    humanOnly?: boolean;
    /** Distance having to do with stealth */
    distStealth?: number;
    /** Dialogue key an enemy should send */
    enemyDialogue?: string;

    // MUTABLE QUANTITIES
    prevSlowLevel?: number;
}

interface entity {
    visual_hp?: number,
    visual_boundlevel?: number,
    visual_distraction?: number,
    visual_lifetime?: number,
    /** Spawn location */
    spawnX?: number,
    /** Spawn location */
    spawnY?: number,
    /** Opinion of you. Positive is good. */
    opinion?: number,
    /** Determines if an enemy can be dommed or not */
    domVariance?: number,
    hideTimer?: boolean,
    Enemy: enemy,
    /** List an enemy ID. Enemy will be bound to this one and dies if not found. BoundTo of -1 indicates bound to the player, and will expire if the player is jailed or passes out*/
    boundTo?: number,
    /** This enemy is weakly bound and simply stunning the caster will delete it */
    weakBinding?: boolean,
    player?: boolean,
    /** This enemy has keys to red locked doors */
    keys?: boolean,
    /** Additional Ondeath, e.g quest markers or rep */
    ondeath?: any[],
    /** Used for misc data */
    data?: Record<string, string>,
    /** Rep changes on death */
    rep?: Record<string, number>,
    /** Rep changes on death */
    factionrep?: Record<string, number>;
    dialogue?: string,
    dialogueDuration?: number,
    dialogueColor?: string,
    dialoguePriority?: number,
    CustomName?: string,
    CustomSprite?: string,
    CustomNameColor?: string,
    rescue?: boolean,
    personality?: string,
    patrolIndex?: number,
    flags?: Record<string, number>,
    noDrop?: boolean,
    droppedItems?: boolean,
    specialdialogue?: string,
    aggro?: number,
    id?: number,
    hp: number,
    AI?: string,
    moved?: boolean,
    playerdmg?: number,
    idle?: boolean,
    summoned?: boolean,
    boundLevel?: number,
    specialBoundLevel?: Record<string, number>,
    distraction?: number,
    lifetime?: number,
    maxlifetime?: number,
    attackPoints?: number,
    movePoints?: number,
    aware?: boolean,
    vp?: number,
    tracking?: boolean,
    revealed?: boolean,
    ambushtrigger?: boolean,
    castCooldown?: number,
    castCooldownSpecial?: number,
    specialCharges?: number,
    usingSpecial?: boolean,
    specialCD?: number,
    disarmflag?: number,
    channel?: number,
    items?: string[],
    tempitems?: string[],
    x: number,
    y: number,
    lastx?: number,
    lasty?: number,
    fx?: number,
    fy?: number,
    path?: { x: number, y: number }[],
    gx?: number,
    gy?: number,
    gxx?: number,
    gyy?: number,
    rage?: number,
    hostile?: number,
    faction?: string,
    allied?: number,
    ceasefire?: number,
    bind?: number,
    blind?: number,
    disarm?: number,
    slow?: number,
    freeze?: number,
    stun?: number,
    silence?: number,
    vulnerable?: number,
    buffs?: any,
    warningTiles?: any,
    visual_x?: number,
    visual_y?: number,
    Analyze?: boolean,
    /** Number of turns the enemy is temporarily hostile for */
    playWithPlayer?: number,
    playWithPlayerCD?: number,

    IntentAction?: string,
    IntentLeashPoint?: { x: number, y: number, type: string, radius: number },

    CurrentAction?: string,
    RemainingJailLeashTourWaypoints?: number,
    NextJailLeashTourWaypointX?: number,
    NextJailLeashTourWaypointY?: number,
    KinkyDungeonJailTourInfractions?: number,
}


/**
 *@typedef {{
 * JourneyProgression: string[],
 * AttachedWep: string,
 * InventoryAction: string,
 * InventoryActionManaCost: number,
 * SellMarkup: number,
 * CurseLevel: number,
 * UsingConsumable: string,
 * BondageTarget: number,
 * FoodTarget: number,
 * KeysNeeded: boolean,
 * JailRemoveRestraintsTimer: number;
 * KinkyDungeonSpawnJailers: number;
 * KinkyDungeonSpawnJailersMax: number;
 * KinkyDungeonLeashedPlayer: number;
 * KinkyDungeonLeashingEnemy: number;
 * JailGuard: number;
 * GuardTimer: number;
 * GuardTimerMax: number;
 * GuardSpawnTimer: number;
 * GuardSpawnTimerMax: number;
 * GuardSpawnTimerMin: number;
 * KinkyDungeonMaxPrisonReduction: number;
 * KinkyDungeonPrisonReduction: number;
 * KinkyDungeonPrisonExtraGhostRep: number;
 * PrisonGoodBehaviorFromLeash: number;
 * KinkyDungeonJailTourTimer: number;
 * KinkyDungeonJailTourTimerMin: number;
 * KinkyDungeonJailTourTimerMax: number;
 * KinkyDungeonPenanceCostCurrent: number;
 * KinkyDungeonAngel: number;
 * KDPenanceStage: number;
 * SpawnedPartyPrisoners: Record<string, number>;
 * KDPenanceStageEnd: number;
 * AngelCurrentRep: string;
 * KDPenanceMode: string;
 * OrgasmStage: number;
 * OrgasmTurns: number;
 * OrgasmStamina: number;
 * SleepTurns: number;
 * SlowMoveTurns: number;
 * PlaySelfTurns: number;
 * RescueFlag: boolean;
 * KinkyDungeonPenance: boolean;
 * GuardApplyTime: number;
 * WarningLevel: number;
 * AncientEnergyLevel: number;
 * OrigEnergyLevel: number;
 * LastMP: number;
 * LastAP: number;
 * LastSP: number;
 * LastWP: number;
 * Outfit: string,
 * Champion: string,
 * ChampionCurrent: number,
 * LastMapSeed: string,
 * AlreadyOpened: {x: number, y:number}[],
 * Journey: string,
 * CheckpointIndices: number[],
 * PrisonerState: string,
 * TimesJailed: number,
 * JailTurns: number,
 * JailKey: boolean,
 * CurrentDialog: string,
 * CurrentDialogStage: string,
 * OrgasmNextStageTimer: number,
 * DistractionCooldown: number,
 * ConfirmAttack: boolean,
 * CurrentDialogMsg: string,
 * CurrentDialogMsgSpeaker: string,
 * CurrentDialogMsgPersonality: string,
 * CurrentDialogMsgID: number,
 * CurrentDialogMsgData: Record<string, string>,
 * CurrentDialogMsgValue: Record<string, number>,
 * AlertTimer: number,
 * RespawnQueue: {enemy: string, faction: string}[],
 * HeartTaken: boolean,
 * CurrentVibration: KinkyVibration,
 * Edged: boolean,
 * TimeSinceLastVibeStart: Record<string, number>,
 * TimeSinceLastVibeEnd: Record<string, number>,
 * OfferFatigue: number,
 * Favors: Record<string, number>,
 * RoomType: string,
 * MapMod: string,
 * HunterTimer: number,
 * Hunters: number[],
 * Quests: string[],
 * QuestData: Record<string, any>,
 * RevealedTiles: Record<string, number>,
 * RevealedFog: Record<string, number>,
 * PriorJailbreaks: number,
 * PriorJailbreaksDecay: number,
 * PreviousWeapon: string[],
 * PreviousWeaponLock: boolean[],
 * StaminaPause: number,
 * StaminaSlow: number,
 * ManaSlow: number,
 * TempFlagFloorTicks: Record<string, number>,
 * KneelTurns: number,
 * AllowedSpellPages : Record<string, string[]>,
 * KeyringLocations : {x: number, y: number}[],
 * HiddenItems : Record<string, boolean>,
 * ItemPriority : Record<string, number>,
 * CagedTime : number,
 * DelayedActions: KDDelayedAction[],
 * OfferCount: number,
 * ItemID: number,
 * Offhand: string,
 * OffhandOld: string,
 * OffhandReturn: string,
 * ShopkeeperFee: number,
 * DollCount: number,
 * ChestsGenerated: string[],
 * DollRoomCount: number,
 * CollectedHearts: number,
 * CollectedOrbs: number,
 * otherPlaying: number,
 * Training: Record<string, KDTrainingRecord>,
 * QuickLoadout: KDPresetLoadout[],
 * CurrentLoadout: number,
 * HighestLevelCurrent: number,
 * HighestLevel: number,
 * KDChasingEnemies: entity[],
 * ShopRewardProgram: number,
 * ShopRewardProgramThreshold: number,
 * tickAlertTimer: boolean,
 * HostileFactions: string[],
 * MovePoints: number,
 * Wait: number,
 * Class: string,
 * Party: entity[],
 * CapturedParty: entity[],
 * PlayerName: string,
 * QuickLoadout_Weapon: boolean,
 * QuickLoadout_Merge: boolean,
 * ItemsSold: Record<string, number>,
 * MaxParty: number,
 * Crouch: boolean,
 * FocusControlToggle: Record<string, boolean>,
 * FloorRobotType: Record<string, string>,
 * EpicenterLevel: number,
 * BlockTokens: number,
 * DodgeTokens: number,
 * ShieldTokens: number,
 * BlockTokensMax: number,
 * DodgeTokensMax: number,
 * ShieldTokensMax: number,
 * Shield: number,
 * ShieldDamage: number,
 * Balance: number,
 * BalancePause: boolean,
 * Collection: Record<string, KDCollectionEntry>,
 * CollectionSorted: KDCollectionEntry[],
 * HeelPower: number,
 * visionAdjust: number,
 * visionAdjustBlind: number,
 * visionBlind: number,
 * CollectionGuests: number,
 * SelectedEscapeMethod: string,
 * Restriction: number,
 * JourneyX: number,
 * JourneyY: number,
 * ShortcutIndex: number,
 * JourneyMap: KDJourneyMap,
 * JourneyTarget: {x: number, y: number},
 * LastDragon: string,
 * ElevatorsUnlocked: Record<number, boolean>,
 * TeleportLocations: Record<string, {x: number, y: number, type: string, checkpoint: string, level: number}>,
 * MaxVisionDist: number,
 * MinVisionDist: number,
 * NightVision: number,
 * LockoutChance: number,
 * StatMaxBonus: Record<string, number>,
 * QuickLoadouts: Record<string, string[]>
 * }} KDGameDataBase
 */
interface KDGameDataBase {
    JourneyProgression: string[],
    AttachedWep: string,
    InventoryAction: string,
    InventoryActionManaCost: number,
    SellMarkup: number,
    CurseLevel: number,
    UsingConsumable: string,
    BondageTarget: number,
    FoodTarget: number,
    KeysNeeded: boolean,
    JailRemoveRestraintsTimer: number;
    KinkyDungeonSpawnJailers: number;
    KinkyDungeonSpawnJailersMax: number;
    KinkyDungeonLeashedPlayer: number;
    KinkyDungeonLeashingEnemy: number;
    JailGuard: number;
    GuardTimer: number;
    GuardTimerMax: number;
    GuardSpawnTimer: number;
    GuardSpawnTimerMax: number;
    GuardSpawnTimerMin: number;
    KinkyDungeonMaxPrisonReduction: number;
    KinkyDungeonPrisonReduction: number;
    KinkyDungeonPrisonExtraGhostRep: number;
    PrisonGoodBehaviorFromLeash: number;
    KinkyDungeonJailTourTimer: number;
    KinkyDungeonJailTourTimerMin: number;
    KinkyDungeonJailTourTimerMax: number;
    KinkyDungeonPenanceCostCurrent: number;
    KinkyDungeonAngel: number;
    KDPenanceStage: number;
    SpawnedPartyPrisoners: Record<string, number>;
    KDPenanceStageEnd: number;
    AngelCurrentRep: string;
    KDPenanceMode: string;
    OrgasmStage: number;
    OrgasmTurns: number;
    OrgasmStamina: number;
    SleepTurns: number;
    SlowMoveTurns: number;
    PlaySelfTurns: number;
    RescueFlag: boolean;
    KinkyDungeonPenance: boolean;
    GuardApplyTime: number;
    WarningLevel: number;
    AncientEnergyLevel: number;
    OrigEnergyLevel: number;
    LastMP: number;
    LastAP: number;
    LastSP: number;
    LastWP: number;
    Outfit: string,
    Champion: string,
    ChampionCurrent: number,
    LastMapSeed: string,
    AlreadyOpened: { x: number, y: number }[],
    Journey: string,
    CheckpointIndices: number[],
    PrisonerState: string,
    TimesJailed: number,
    JailTurns: number,
    JailKey: boolean,
    CurrentDialog: string,
    CurrentDialogStage: string,
    OrgasmNextStageTimer: number,
    DistractionCooldown: number,
    ConfirmAttack: boolean,
    CurrentDialogMsg: string,
    CurrentDialogMsgSpeaker: string,
    CurrentDialogMsgPersonality: string,
    CurrentDialogMsgID: number,
    CurrentDialogMsgData: Record<string, string>,
    CurrentDialogMsgValue: Record<string, number>,
    AlertTimer: number,
    RespawnQueue: { enemy: string, faction: string }[],
    HeartTaken: boolean,
    CurrentVibration: KinkyVibration,
    Edged: boolean,
    TimeSinceLastVibeStart: Record<string, number>,
    TimeSinceLastVibeEnd: Record<string, number>,
    OfferFatigue: number,
    Favors: Record<string, number>,
    RoomType: string,
    MapMod: string,
    HunterTimer: number,
    Hunters: number[],
    Quests: string[],
    QuestData: Record<string, any>,
    RevealedTiles: Record<string, number>,
    RevealedFog: Record<string, number>,
    PriorJailbreaks: number,
    PriorJailbreaksDecay: number,
    PreviousWeapon: string[],
    PreviousWeaponLock: boolean[],
    StaminaPause: number,
    StaminaSlow: number,
    ManaSlow: number,
    TempFlagFloorTicks: Record<string, number>,
    KneelTurns: number,
    AllowedSpellPages: Record<string, string[]>,
    KeyringLocations: { x: number, y: number }[],
    HiddenItems: Record<string, boolean>,
    ItemPriority: Record<string, number>,
    CagedTime: number,
    DelayedActions: KDDelayedAction[],
    OfferCount: number,
    ItemID: number,
    Offhand: string,
    OffhandOld: string,
    OffhandReturn: string,
    ShopkeeperFee: number,
    DollCount: number,
    ChestsGenerated: string[],
    DollRoomCount: number,
    CollectedHearts: number,
    CollectedOrbs: number,
    otherPlaying: number,
    Training: Record<string, KDTrainingRecord>,
    QuickLoadout: KDPresetLoadout[],
    CurrentLoadout: number,
    HighestLevelCurrent: number,
    HighestLevel: number,
    KDChasingEnemies: entity[],
    ShopRewardProgram: number,
    ShopRewardProgramThreshold: number,
    tickAlertTimer: boolean,
    HostileFactions: string[],
    MovePoints: number,
    Wait: number,
    Class: string,
    Party: entity[],
    CapturedParty: entity[],
    PlayerName: string,
    QuickLoadout_Weapon: boolean,
    QuickLoadout_Merge: boolean,
    ItemsSold: Record<string, number>,
    MaxParty: number,
    Crouch: boolean,
    FocusControlToggle: Record<string, boolean>,
    FloorRobotType: Record<string, string>,
    EpicenterLevel: number,
    BlockTokens: number,
    DodgeTokens: number,
    ShieldTokens: number,
    BlockTokensMax: number,
    DodgeTokensMax: number,
    ShieldTokensMax: number,
    Shield: number,
    ShieldDamage: number,
    Balance: number,
    BalancePause: boolean,
    Collection: Record<string, KDCollectionEntry>,
    CollectionSorted: KDCollectionEntry[],
    HeelPower: number,
    visionAdjust: number,
    visionAdjustBlind: number,
    visionBlind: number,
    CollectionGuests: number,
    SelectedEscapeMethod: string,
    Restriction: number,
    JourneyX: number,
    JourneyY: number,
    ShortcutIndex: number,
    JourneyMap: KDJourneyMap,
    JourneyTarget: { x: number, y: number },
    LastDragon: string,
    ElevatorsUnlocked: Record<number, boolean>,
    TeleportLocations: Record<string, { x: number, y: number, type: string, checkpoint: string, level: number }>,
    MaxVisionDist: number,
    MinVisionDist: number,
    NightVision: number,
    LockoutChance: number,
    StatMaxBonus: Record<string, number>,
    QuickLoadouts: Record<string, string[]>


    // ===============================================

    LockoutChance: number,
    ShortcutIndex: number,
    JourneyProgression: [...KDDefaultJourney],
    JourneyTarget: null,
    JourneyX: number,
    JourneyY: number,
    JourneyMap: Record,
    AttachedWep: "",
    Collection: Record,
    CollectionSorted: [],
    RevealedTiles: Record,
    RevealedFog: Record,
    Balance: number,
    BalancePause: false,
    HeelPower: number,
    SlowMoveTurns: number,
    Shield: number,
    ShieldDamage: number,
    PlayerName: "Ada",
    Party: [],
    CapturedParty: [],
    BlockTokens: number,
    DodgeTokens: number,
    ShieldTokens: number,
    BlockTokensMax: number,
    DodgeTokensMax: number,
    ShieldTokensMax: number,
    MaxParty: KDDefaultMaxParty,
    QuickLoadout_Weapon: true,
    QuickLoadout_Merge: true,
    FocusControlToggle: Record,
    TeleportLocations: Record,

    ItemsSold: Record,
    CurseLevel: number,
    UsingConsumable: "",
    MovePoints: number,
    InventoryAction: "",
    InventoryActionManaCost: number,
    SellMarkup: number,
    BondageTarget: number,
    FoodTarget: number,
    ShopRewardProgram: number,
    ShopRewardProgramThreshold: number,

    QuickLoadouts: Record,
    CurrentLoadout: number,
    Training: Record,
    SpawnedPartyPrisoners: Record,
    CollectedOrbs: number,
    CollectedHearts: number,
    DollRoomCount: number,
    ChestsGenerated: [],
    DollCount: number,

    ElevatorsUnlocked: Record,

    CagedTime: number,
    HiddenItems: Record,
    ItemPriority: Record,
    KeyringLocations: string[],
    AllowedSpellPages: Record,
    PriorJailbreaks: number,
    PriorJailbreaksDecay: number,
    KeysNeeded: false,
    RoomType: "",
    MapMod: "",

    Quests: string[],
    QuestData: Record,

    HunterTimer: number,
    Hunters: [],

    AlertTimer: number,
    OrgasmNextStageTimer: number,
    DistractionCooldown: number,

    JailRemoveRestraintsTimer: number,
    KinkyDungeonSpawnJailers: number,
    KinkyDungeonSpawnJailersMax: number,
    KinkyDungeonLeashedPlayer: number,
    KinkyDungeonLeashingEnemy: number,

    JailGuard: number,
    GuardTimer: number,
    GuardTimerMax: number,
    GuardSpawnTimer: number,
    GuardSpawnTimerMax: number,
    GuardSpawnTimerMin: number,
    KinkyDungeonMaxPrisonReduction: number,
    KinkyDungeonPrisonReduction: number,
    KinkyDungeonPrisonExtraGhostRep: number,
    PrisonGoodBehaviorFromLeash: number,

    KinkyDungeonJailTourTimer: number,
    KinkyDungeonJailTourTimerMin: number,
    KinkyDungeonJailTourTimerMax: number,

    KinkyDungeonPenanceCostCurrent: number,

    KinkyDungeonAngel: number,
    KDPenanceStage: number,
    KDPenanceStageEnd: number,
    AngelCurrentRep: "",
    KDPenanceMode: "",

    OrgasmStage: number,
    OrgasmTurns: number,
    OrgasmStamina: number,

    KinkyDungeonPenance: false,

    RescueFlag: false,

    SleepTurns: number,
    PlaySelfTurns: number,
    GuardApplyTime: number,

    AncientEnergyLevel: number,
    OrigEnergyLevel: number,
    LastAP: number,
    LastSP: KDMaxStatStart,
    LastMP: KDMaxStatStart,
    LastWP: KDMaxStatStart,

    Outfit: "Default",

    Champion: "",
    ChampionCurrent: number,

    WarningLevel: number,
    LastMapSeed: "",

    AlreadyOpened: [],
    Journey: "",
    CheckpointIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],

    TempFlagFloorTicks: Record,

    // "" = not a prisoner
    // "jail" = must remain in cell
    // "parole" = can roam but not allowed to take most actions
    PrisonerState: "",
    TimesJailed: number,
    JailTurns: number,
    JailKey: false,

    CurrentDialog: "",
    CurrentDialogStage: "",
    CurrentDialogMsg: "",
    CurrentDialogMsgSpeaker: "",
    CurrentDialogMsgPersonality: "",
    CurrentDialogMsgData: Record,
    CurrentDialogMsgValue: Record,
    CurrentDialogMsgID: number,

    ConfirmAttack: false,
    RespawnQueue: [],
    HeartTaken: false,

    CurrentVibration: null,
    Edged: false,
    TimeSinceLastVibeStart: Record,
    TimeSinceLastVibeEnd: Record,

    OfferFatigue: number,
    Offhand: "",
    OffhandOld: "",
    OffhandReturn: "",

    Favors: Record,
    PreviousWeapon: ["Unarmed", "Unarmed", "Unarmed", "Unarmed"],
    PreviousWeaponLock: [false, false, false, false],
    QuickLoadout: [],

    StaminaPause: number,
    StaminaSlow: number,
    ManaSlow: number,
    KneelTurns: number,
    DelayedActions: [],

    OfferCount: number,

    KDChasingEnemies: [],

    ItemID: number,
    ShopkeeperFee: number,
    otherPlaying: number,
    CategoryIndex: Record,
    HighestLevel: number,
    HighestLevelCurrent: number,
    tickAlertTimer: false,
    HostileFactions: [],
    Wait: number,
    Class: "",
    EpicenterLevel: number,
    CollectionGuests: number,

    FloorRobotType: Record,
    SelectedEscapeMethod: "Key",

    Crouch: false,
    visionAdjust: number, // Eyes start out fully light adjusted
    visionAdjustBlind: number, // Slowly follows actual visionadjust, used to determine if blindness occurs
    visionBlind: number, // Penalty to vision radius based on overbright
    Restriction: number,
    LastDragon: "",

    MaxVisionDist: number,
    MinVisionDist: number,
    NightVision: number,

    StatMaxBonus: {
        AP: number,
        SP: number,
        MP: number,
        WP: number,
    },
};

interface floorParams {
    /** List of factions allowed to be primary or secondary here */
    factionList?: string[];
    /** This code is run after a worldgen */
    worldGenCode?: () => void;
    tagModifiers?: Record<string, number>;
    globalTags?: Record<string, boolean>;
    shadowColor?: number,
    lightColor?: number,
    background: string,
    openness: number, // Openness of rooms
    density: number, // Density of tunnels (inverse of room spawn chance)
    torchchance?: number,
    torchlitchance?: number,
    music: Record<string, number>,
    /** Will add more/less torches on the main path */
    torchchanceboring?: number,
    torchreplace?: {
        sprite: string,
        unlitsprite?: string,
        brightness: number,
    },
    /** These tiles wont alter wall tiles in this tileset */
    noReplace?: string,
    /** Chance of shrine having mana */
    manaChance?: number,
    crackchance: number,
    foodChance?: number,
    barchance: number,
    brightness: number,
    chestcount: number,
    shrinecount: number,
    shrinechance: number,
    ghostchance: number,
    doorchance: number,
    nodoorchance: number,
    doorlockchance: number,
    doorlocktrapchance?: number,
    minortrapChance?: number,
    chargerchance?: number,
    litchargerchance?: number,
    chargercount?: number,
    trapchance: number,
    barrelChance?: number,
    grateChance: number,
    rubblechance: number,
    brickchance: number,
    cacheInterval: number,
    cageChance?: number,

    wallhookchance?: number,
    ceilinghookchance?: number,

    hallopenness?: number,

    /** FOrces all setpieces to use POIs, useful for tunnel type maps with thick walls to prevent entombe pieces*/
    forcePOI?: boolean,

    gaschance?: number,
    gasdensity?: number,
    gastype?: string,

    wallRubblechance?: number,

    lockmult?: number,

    floodchance?: number,
    forbiddenChance: number, // If a forbidden gold chance is generated. Otherwise a silver chest will appear
    forbiddenGreaterChance: number, // Chance after a forbidden area is generated with a restraint, otherwise its a lesser gold chest

    setpieces?: { Type: string, Weight: number }[],

    shortcuts: { Level: number, checkpoint: string, chance: number }[    ],
    mainpath: { Level: number, checkpoint: string, chance?: number }[],

    traps: {
        Name: string,
        Enemy?: string,
        Spell?: string,
        extraTag?: string,
        Level: number,
        Power: number,
        Weight: number,
        strict?: true
    }[],

    min_width: number,
    max_width: number,
    min_height: number,
    max_height: number,

    ShopExclusives?: string[],
    ShopExclusivesArousal?: string[],

    enemyTags: string[],
    "defeat_outfit": outfitKey,
    /**
     * key required for jailers INSTEAD of "jailer"
     */
    jailType?: string,
    guardType?: string,
    "shrines": { Type: string, Weight: number }[]
}

type KDPerk = {
    /** Determines if this one goes in the debuffs tree */
    debuff?: boolean,
    /** Determines if this one goes in the buffs tree */
    buff?: boolean,
    category: string,
    id: string | number,
    cost: number,
    block?: string[],
    tags?: string[],
    blocktags?: string[],
    blockclass?: string[],
    locked?: boolean,
    outfit?: string,
    require?: string,
    costGroup?: string,
    startPriority?: number,
    requireArousal?: boolean,
}


interface consumable {
    name: string,
    rarity: number,
    type: string,
    shop?: boolean,
    spell?: string,
    potion?: boolean,
    noHands?: boolean,
    arousalMode?: boolean,
    /** Data var */
    data?: Record<string, string | number>,
    /** Requirement that overrides all other requirements */
    prereq?: string,
    /** Requirement in addition to all other requirements such as not being gagged for potions, bound, etc */
    postreq?: string,
    /** Minimum effectiveness when gagged */
    gagFloor?: number,
    /** Max gag amount to use */
    gagMax?: number,
    /** delay before use */
    delay?: number,
    needMouth?: boolean,
    /** Max strictness allowed before the item cant be used */
    maxStrictness?: number,
    mp_instant?: number,
    mpool_instant?: number,
    wp_instant?: number,
    sp_instant?: number,
    ap_instant?: number,
    mp_gradual?: number,
    wp_gradual?: number,
    sp_gradual?: number,
    ap_gradual?: number,
    arousalRatio?: number,
    scaleWithMaxMP?: boolean,
    scaleWithMaxSP?: boolean,
    scaleWithMaxAP?: boolean,
    scaleWithMaxWP?: boolean,
    duration?: number,
    power?: number,
    amount?: number,
    rechargeCost?: number,
    aura?: string,
    buff?: string,
    costMod?: number,
    shrine?: string,
    sfx?: string,
    noConsumeOnUse?: boolean,
    useQuantity?: number,
    /** Support for multiple effects */
    sideEffects?: string[],
}


type KinkyDungeonDress = {
    Item: string;
    Group: string;
    Color: string | string[];
    Filters?: Record<string, LayerFilter>;
    Lost: boolean;
    NoLose?: boolean;
    Property?: any,
    OverridePriority?: number;
    Skirt?: boolean;
}[]


interface weapon {
    arousalMode?: boolean,
    name: string;
    dmg: number;
    chance: number;
    type: string;
    bind?: number;
    bindType?: string;
    distract?: number;
    bindEff?: number;
    distractEff?: number;
    light?: boolean;
    heavy?: boolean;
    boundBonus?: number;
    tease?: boolean;
    rarity: number;
    staminacost?: number;
    magic?: boolean;
    cutBonus?: number;
    playSelfBonus?: number;
    playSelfMsg?: string;
    playSelfSound?: string;
    unarmed: boolean;
    shop: boolean;
    noequip?: boolean;
    sfx: string;
    events?: KinkyDungeonEvent[];
    noHands?: boolean;
    silent?: boolean;
    /** Weapon cant be used with arm bondage */
    clumsy?: boolean;
    /** Skip turns after attacking */
    channel?: number;
    novulnerable?: boolean;
    tags?: string[];
    special?: {
        type: string,
        spell?: string,
        selfCast?: boolean,
        requiresEnergy?: boolean,
        energyCost?: number,
        range?: number,
    };
}


interface spell {
    /** This spell doesnt hurt the target upon directly hitting, only the AoE */
    noDirectDamage?: true,
    /** This spell does not leave a warning to the player */
    hideWarnings?: boolean,
    /** This spell does leave a warning to the player */
    alwaysWarn?: boolean,
    /** Marks a spell as non-magical, so traps dont leave a rune on the ground */
    nonmagical?: boolean,
    /** Marks the spell as a command word spell to enemies */
    commandword?: boolean,
    /** The spell is used to buff allies */
    buffallies?: boolean,
    /** caster will also target themselves */
    selfbuff?: boolean,
    /** Type of binding applied to the power */
    bindType?: string,
    /** Stops the spell from moving more than 1 tile */
    slowStart?: boolean,
    /** Spinrate of the bullet */
    bulletSpin?: number,
    /** Spinrate of the bullet hit */
    hitSpin?: number,
    /** Forces spell to move more than 1 tile at beginning */
    fastStart?: boolean,
    /** Affects aoe type
     * acceptable values are:
     * vert - creates a vertical line
     * horiz - creates a horizontal line
     * box - uses chebyshev distance
     * cross - creates a vertical and horizontal line
     */
    aoetype?: string,
    aoetypetrail?: string,
    secondaryhit?: string,
    upcastFrom?: string,
    upcastLevel?: number,
    hitColor?: number;
    bulletColor?: number;
    trailColor?: number;
    hitLight?: number;
    bulletLight?: number;
    trailLight?: number;
    goToPage?: number;
    tags?: string[];
    effectTile?: effectTileRef,
    effectTileAoE?: number,
    effectTileDurationMod?: number,
    effectTilePre?: effectTileRef,
    effectTileDurationModPre?: number,
    effectTileLinger?: effectTileRef,
    effectTileDurationModLinger?: number,
    effectTileDensityLinger?: number,
    effectTileTrail?: effectTileRef,
    effectTileDurationModTrail?: number,
    effectTileDensityTrail?: number,
    effectTileTrailAoE?: number,
    effectTileDoT?: effectTileRef,
    effectTileDurationModDoT?: number,
    effectTileDensityDoT?: number,
    effectTileDensity?: number,

    /** Hides this spell in the spell screen */
    hide?: boolean,

    shotgunCount?: number,
    shotgunSpread?: number,
    shotgunDistance?: number,
    shotgunSpeedBonus?: number,

    distractEff?: number,
    bindEff?: number,

    damageFlags?: string[],
    /** Wont spawn a trail on the player, ever */
    noTrailOnPlayer?: boolean,
    /** Wont spawn a trail on any entity, ever */
    noTrailOnEntity?: boolean,
    /** Wont spawn a trail on any allied entity, ever */
    noTrailOnAlly?: boolean,
    /** Color of the spell and bullet warningsd */
    color?: string,
    /** Buffs applied by the hit will effect everyone */
    buffAll?: boolean,
    name: string;
    /** spell required to unlock this one */
    prerequisite?: string | string[];
    /** blocked if you have this spell */
    blockedBy?: string[];
    /** Spell is hidden if you didnt learn it */
    hideUnlearnable?: boolean,
    /** Spell is hidden if you didnt learn this spell */
    hideWithout?: string,
    /** Spell is hidden if you DID learn it */
    hideLearned?: boolean,
    /** Automatically learns the spells when you learn it (thru magic screen) */
    autoLearn?: string[],
    /** This spell wont trigger an aggro action */
    noAggro?: boolean;
    /** Whether the spell defaults to the Player faction */
    allySpell?: boolean;
    /** Spell overrides the faction */
    faction?: string;
    /** Whether the spell defaults to the Enemy faction */
    enemySpell?: boolean;
    /** Whether the spell has a direction offset when fired */
    noDirectionOffset?: boolean,
    /** Hide the spell if arousal mode is off */
    arousalMode?: boolean;
    /** Conjure, Illusion, Elements */
    school?: string;
    /** if the type is special, this is the special type */
    special?: string;
    /** Damage of the spell */
    power?: number;
    /** Amount of aoe power */
    aoedamage?: number;
    /** Damage type */
    damage?: string;
    /** size of sprite */
    size?: number;
    /** Prevents multiple instances of the spell from doing damage on the same turn from the same bullet to the same enemy */
    noUniqueHits?: boolean;
    /** AoE */
    aoe?: number;
    /** bind */
    bind?: number;
    /** distract */
    distract?: number;
    /** Bonus daMAGE TO BOUND TATRGETS */
    boundBonus?: number;
    /** outfit applied (special parameter) */
    outfit?: string;
    /** speed */
    speed?: number;
    knifecost?: number;
    staminacost?: number;
    manacost: number;
    chargecost?: number;
    minRange?: number;
    noSprite?: boolean;
    /** Verbal, arms, or legs */
    components?: any[];
    /** Spell level */
    level: number;
    /** Whether the spell is passive (like the summon count up) or active like the bolt or toggle spells*/
    passive?: boolean;
    /** costOnToggle */
    costOnToggle?: boolean;
    /** Type of the spell */
    type: string;
    /** Type of effect on hit */
    onhit?: string;
    /** Duration of the status effect applied */
    time?: number;
    /** For Inert spells, this is the lifetime of the main bullet */
    delay?: number;
    /** Random added onto delay */
    delayRandom?: number;
    /** castRange */
    castRange?: number;
    /** Spell range */
    range?: number;
    /** lifetime of the Hit bullet created by the spell, not the bullet itself in the case of an "inert" bullet*/
    lifetime?: number;
    /** Specifically for the bullet lifetime, currently unused */
    bulletLifetime?: number;
    /** channel turns */
    channel?: number;
    /** Noise spell makes on cast */
    noise?: number;
    /** block */
    block?: number;
    /** played on cast */
    sfx?: string;
    /** Played on damage dealt */
    hitsfx?: string;
    /** Played on bullet impact */
    landsfx?: string;
    /** trailPower */
    trailPower?: number;
    /** trailHit */
    trailHit?: string;
    /** trailLifetime */
    trailLifetime?: number;
    /** trailTime */
    trailTime?: number;
    /** Random number to increase lifetime by */
    lifetimeHitBonus?: number;
    /** Random number to increase trail lifetime by */
    trailLifetimeBonus?: number;
    /** Playereffect of the trail */
    trailPlayerEffect?: any;
    /** trailChance */
    trailChance?: number;
    /** Creates trails on the projectiles itself too */
    trailOnSelf?: boolean;
    /** trailDamage */
    trailDamage?: string;
    /** trailspawnaoe */
    trailspawnaoe?: number;
    /** Casts a spell as a trail */
    trailcast?: any;
    /** trail */
    trail?: string;
    /** Spell points cost to buy */
    spellPointCost?: number;
    /** Whether the spell heals or not */
    heal?: boolean;
    /** Whether AI treats as a buff */
    buff?: boolean;
    /** The spell needs this condition for an enemy to cast it*/
    castCondition?: string;
    /** Player can only cast spell on a creature or player */
    mustTarget?: boolean;
    /** Player cant target player */
    noTargetPlayer?: boolean;
    /** Only target walls */
    WallsOnly?: boolean;
    /** Spell can be dodged */
    evadeable?: boolean;
    /** Targeting location */
    meleeOrigin?: boolean;
    /** Cant hit the same enemy twice per turrn, impoprtant for piercing spells */
    noDoubleHit?: boolean;
    /** Doesnt do spellcast on the hit */
    noCastOnHit?: boolean;
    /** Casts a spellcast during the delay */
    castDuringDelay?: boolean;
    /** Casts spell */
    spellcast?: any;
    /** Casts spell on cast */
    extraCast?: any;
    /** spell cast on hit */
    spellcasthit?: any;
    /** List of buffs applied by the spell */
    buffs?: any[];
    /** Whether the spell is off by default */
    defaultOff?: boolean;
    /** List of events  applied by the spell */
    events?: KinkyDungeonEvent[];
    /** List of events  applied by the spell to its hit */
    hitevents?: KinkyDungeonEvent[];
    /** spell pierces */
    piercing?: boolean;
    /** spell pierces enemies */
    pierceEnemies?: boolean;
    /** spell pierces */
    passthrough?: boolean;
    /** Deals DoT */
    dot?: boolean;
    /** spell pierces */
    noTerrainHit?: boolean;
    /** spell pierces */
    noEnemyCollision?: boolean;
    /** If an enemy has one of these tags it will get hit no matter what*/
    alwaysCollideTags?: string[],
    /** trail pierces */
    piercingTrail?: boolean;
    /** nonVolatile */
    nonVolatile?: boolean;
    /** Cancels automove when cast */
    cancelAutoMove?: boolean;
    /** requireLOS */
    requireLOS?: boolean;
    /** selfTargetOnly */
    selfTargetOnly?: boolean;
    /** AI will only target creatures with this tag */
    filterTags?: string[];
    /** Whether or not sends a message on cast */
    msg?: boolean;
    /** Suppress summon message */
    noSumMsg?: boolean;
    /** Targeted like a bolt, showing the aim line */
    projectileTargeting?: boolean;
    /** CastInWalls */
    CastInWalls?: boolean;
    /** noTargetEnemies */
    noTargetEnemies?: boolean;
    /** Exception list for NoTargetEnemies */
    exceptionFactions?: string[];
    /** noTargetAllies */
    noTargetAllies?: boolean;
    /** Sets the enemy's specialCD shared between others */
    specialCD?: number;
    /** AI wont choose this as first choice */
    noFirstChoice?: boolean;
    /** Player effect */
    playerEffect?: any;
    /** Doesnt send cast message */
    noCastMsg?: boolean;
    /** Casts on self always */
    selfcast?: boolean;
    /** Cant miscast */
    noMiscast?: boolean;
    /** summon */
    summon?: any[];
    /** Spell does not show up in the spells scrreen until learned */
    secret?: boolean;
    /** Enemies summoned by this spell will have their default faction and not the caster's faction */
    defaultFaction?: boolean;

}


type KDLockType = {
    specialActions?: (tile: any, entity: entity) => void;
    canNPCPass: (xx: number, yy: number, MapTile: object, Enemy: entity) => boolean;

    filter: (Guaranteed: boolean, Floor: number, AllowGold: boolean, Type: string, data: any) => boolean;
    weight: (Guaranteed: boolean, Floor: number, AllowGold: boolean, Type: string, data: any) => number;

    consume_key: boolean;
    lockmult: number;

    penalty?: Record<string, number>;

    /* For chests, etc*/
    pickable: boolean;
    /** Replace the pick icon with hacking */
    hackPick?: boolean;
    pick_speed: number;
    pick_diff: number;
    pick_lim?: number;
    /** For restraints */
    canPick: (data: any) => boolean;
    doPick: (data: any) => boolean;
    failPick: (data: any) => string;
    breakChance: (data: any) => boolean;
    unlockable: boolean;
    unlock_diff?: number;
    key: string;
    canUnlock: (data: any) => boolean;
    doUnlock: (data: any) => boolean;
    doLock?: (data: any) => void;
    failUnlock: (data: any) => string;
    removeKeys: (data: any) => void;

    levelStart: (item) => void;
    shrineImmune: boolean;

    commandlevel: number;
    commandable: boolean;
    command_lesser: () => number;
    command_greater: () => number;
    command_supreme: () => number;

    loot_special: boolean;
    loot_locked: boolean;
}


interface KDQuest {
    name: string;
    npc: string;
    visible: boolean;
    nocancel?: boolean,
    tick?: (delta) => void;
    worldgenstart?: () => void;
    accept?: () => void;
    weight: (RoomType: any, MapMod: any, data: any, currentQuestList: any) => number;
    prerequisite: (RoomType: any, MapMod: any, data: any, currentQuestList: any) => boolean;
    tags?: string[],
};

interface KDHexEnchantEventsData {
    variant: { events: KinkyDungeonEvent[], template: string },
}

interface KDHexEnchantWeightData {
    item: string,
}

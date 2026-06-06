// generate by `tsc --declaration`
declare let KDBaseRed: string;
declare let KDBaseOrange: string;
declare let KDBaseYellow: string;
declare let KDBaseRibbon: string;
declare let KDBasePink: string;
declare let KDBaseLime: string;
declare let KDBaseYellowGreen: string;
declare let KDBasePurple: string;
declare let KDBaseLavender: string;
declare let KDBaseGreal: string;
declare let KDBaseGreen: string;
declare let KDBaseNeon: string;
declare let KDBaseMint: string;
declare let KDBaseLightGreen: string;
declare let KDBaseForest: string;
declare let KDBaseElectricBlue: string;
declare let KDBaseCyan: string;
declare let KDBaseTeal: string;
declare let KDBaseLightBlue: string;
declare let KDBaseBlue: string;
declare let KDBaseBaby: string;
declare let KDBaseWhite: string;
declare let KDBaseBlack: string;
declare let KDBaseLightGrey: string;
declare let KDBaseVLightGrey: string;
declare let KDColorList: {
    KDBaseLightGrey: string;
    KDBaseBlack: string;
    KDBaseWhite: string;
    KDBaseBaby: string;
    KDBaseBlue: string;
    KDBaseLightBlue: string;
    KDBaseTeal: string;
    KDBaseCyan: string;
    KDBaseElectricBlue: string;
    KDBaseForest: string;
    KDBaseLightGreen: string;
    KDBaseMint: string;
    KDBaseNeon: string;
    KDBaseGreal: string;
    KDBasePurple: string;
    KDBaseYellowGreen: string;
    KDBaseLime: string;
    KDBasePink: string;
    KDBaseRibbon: string;
    KDBaseYellow: string;
    KDBaseOrange: string;
    KDBaseRed: string;
    KDBaseGreen: string;
};
interface String {
    replaceAt(index: number, character: string): string;
}
declare function parseInt(s: string | number, radix?: number): number;
type MemoizedFunction<T extends Function> = T & {
    clearCache(): void;
};
interface WebGL2RenderingContext {
    program?: WebGLProgram;
    programFull?: WebGLProgram;
    programHalf?: WebGLProgram;
    textureCache?: Map<string, any>;
    maskCache?: Map<string, any>;
}
interface WebGLProgram {
    u_alpha?: WebGLUniformLocation;
    u_color?: WebGLUniformLocation;
    a_position?: number;
    a_texcoord?: number;
    u_matrix?: WebGLUniformLocation;
    u_texture?: WebGLUniformLocation;
    u_alpha_texture?: WebGLUniformLocation;
    position_buffer?: WebGLBuffer;
    texcoord_buffer?: WebGLBuffer;
}
interface HTMLCanvasElement {
    GL?: WebGL2RenderingContext;
}
interface HTMLImageElement {
    errorcount?: number;
}
interface HTMLElement {
    setAttribute(qualifiedName: string, value: string | number): void;
}
interface RGBColor {
    r: number;
    g: number;
    b: number;
}
interface RGBAColor extends RGBColor {
    a: number;
}
interface ItemBundle {
    Group: string;
    Name: string;
    Difficulty?: number;
    Color?: ItemColor;
    Property?: any;
    Craft?: any;
}
type AppearanceBundle = ItemBundle[];
type ItemColor = string | string[];
interface Item {
    Asset?: any;
    Model?: Model;
    Color?: ItemColor;
    Filters?: Record<string, LayerFilter>;
    Properties?: Record<string, LayerPropertiesType>;
    factionFilters?: Record<string, FactionFilterDef>;
    Difficulty?: number;
    Property?: any;
}
interface Character {
    ID: number;
    Name: string;
    Appearance: Item[];
    Pose: string[];
    Palette: string;
    metadata: KDOutfitMetadata;
    HeightRatio?: number;
    HeightModifier: number;
    MemberNumber?: number;
}
interface PlayerCharacter extends Character {
}
interface AssetOverrideHeight {
    Height: number;
    Priority: number;
    HeightRatioProportion?: number;
}
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
interface ICommand {
    Tag: string;
    Description?: string;
    Reference?: string;
    Action?: (this: Optional<ICommand, 'Tag'>, args: string, msg: string, parsed: string[]) => void;
    Prerequisite?: (this: Optional<ICommand, 'Tag'>) => boolean;
    AutoComplete?: (this: Optional<ICommand, 'Tag'>, parsed: string[], low: string, msg: string) => void;
    Clear?: false;
}
type AudioSoundEffect = [string, number];
interface AudioEffect {
    Name: string;
    File: string | string[];
}
interface Window {
    WebFontConfig: object;
}
type HexColor = string;
type Named = {
    name: string;
    inventoryVariant?: string;
};
interface NamedAndTyped extends Named {
    type?: string;
}
interface KDOutfitMetadata {
    name: string;
    palette: string;
    customColors: Record<string, Record<string, LayerFilter>>;
}
interface FactionFilterDef {
    color: string;
    override?: boolean;
    desaturate?: boolean;
}
interface item extends NamedAndTyped {
    onEntity?: number;
    conjured?: boolean;
    id: number;
    linkCache?: string[];
    curse?: string;
    name: string;
    type?: string;
    faction?: string;
    forceFaction?: string;
    flags?: Record<string, number>;
    inventoryVariant?: string;
    events?: KinkyDungeonEvent[];
    quantity?: number;
    lock?: string;
    tetherToLeasher?: boolean;
    tetherToGuard?: boolean;
    tetherEntity?: number;
    tetherLocation?: {
        x: number;
        y: number;
    };
    tx?: number;
    ty?: number;
    tetherLength?: number;
    dynamicLink?: item;
    data?: Record<string, any>;
    pickProgress?: number;
    struggleProgress?: number;
    cutProgress?: number;
    unlockProgress?: number;
    attempts?: number;
    tightness?: number;
    trap?: string;
    showInQuickInv?: boolean;
}
interface consumable extends NamedAndTyped {
    name: string;
    range?: number;
    food?: boolean;
    maxInventory?: number;
    sub?: number;
    rarity: number;
    isSubby?: boolean;
    sneakChance?: number;
    type: string;
    uniqueTags?: string[];
    shop?: boolean;
    spell?: string;
    potion?: boolean;
    latexsolvent?: number;
    noHands?: boolean;
    arousalMode?: boolean;
    data?: Record<string, string | number>;
    itemEffect?: string;
    contains?: string;
    prereq?: string;
    postreq?: string;
    gagFloor?: number;
    gagMax?: number;
    delay?: number;
    needMouth?: boolean;
    maxStrictness?: number;
    mp_instant?: number;
    mpool_instant?: number;
    wp_instant?: number;
    sp_instant?: number;
    ap_instant?: number;
    mp_gradual?: number;
    wp_gradual?: number;
    sp_gradual?: number;
    ap_gradual?: number;
    arousalRatio?: number;
    scaleWithMaxMP?: boolean;
    scaleWithMaxSP?: boolean;
    scaleWithMaxAP?: boolean;
    scaleWithMaxWP?: boolean;
    duration?: number;
    power?: number;
    amount?: number;
    rechargeCost?: number;
    aura?: HexColor;
    buff?: string;
    costMod?: number;
    shrine?: string;
    sfx?: string;
    noConsumeOnUse?: boolean;
    useQuantity?: number;
    sideEffects?: string[];
}
type KDHasTags = {
    tags: any;
};
interface KDRestraintProps extends KDRestraintPropsBase {
    name: string;
    Group: string;
}
interface KDRestraintPropsBase {
    necklaceGagType?: string;
    Filters?: Record<string, LayerFilter>;
    Properties?: Record<string, LayerPropertiesType>;
    forceConjure?: boolean;
    factionFilters?: Record<string, FactionFilterDef>;
    noShrine?: boolean;
    good?: boolean;
    inventory?: boolean;
    power?: number;
    weight?: number;
    minLevel?: number;
    allFloors?: boolean;
    cloneTag?: string;
    escapeChance?: KDEscapeChanceList;
    events?: KinkyDungeonEvent[];
    enemyTags?: Record<string, number>;
    enemyTagsMult?: Record<string, number>;
    playerTags?: Record<string, number>;
    playerTagsMult?: Record<string, number>;
    playerTagsMissing?: Record<string, number>;
    playerTagsMissingMult?: Record<string, number>;
    shrine?: string[];
    debris?: string;
    debrisChance?: number;
    noRecover?: boolean;
    noaffinity?: boolean;
    limited?: boolean;
    unlimited?: boolean;
    struggleBreak?: boolean;
    Security?: {
        level_key?: number;
        level_tech?: number;
        level_magic?: number;
        level_divine?: number;
    };
    npcBondageMult?: number;
    npcBondageType?: string;
    aggroLevel?: number;
    affinity?: {
        Struggle?: string[];
        Cut?: string[];
        Remove?: string[];
        Pick?: string[];
        Unlock?: string[];
    };
    alwaysEscapable?: string[];
    protection?: number;
    protectionCursed?: boolean;
    protectionTotal?: boolean;
    arousalMode?: boolean;
    accessible?: boolean;
    inaccessible?: boolean;
    deepAccessible?: boolean;
    alwaysAccessible?: boolean;
    alwaysInaccessible?: boolean;
    recycleresource?: Record<string, number>;
    renderWhenLinked?: string[];
    requireSingleTagToEquip?: string[];
    requireNoTagToEquip?: string[];
    blockRestraintsWithTag?: string[];
    allowOverrideBasedOnTagFilters?: string[];
    noRecycle?: boolean;
    disassembleAs?: string;
    disassembleCount?: number;
    requireAllTagsToEquip?: string[];
    alwaysRender?: boolean;
    renderExcept?: string[];
    changeRenderType?: Record<string, string>;
    linkPriority?: number;
    linkCategory?: string;
    linkSize?: number;
    linkCategories?: string[];
    linkSizes?: number[];
    noDupe?: boolean;
    ignoreNear?: boolean;
    ignoreSpells?: boolean;
    alwaysStruggleable?: boolean;
    Model?: string;
    Asset?: string;
    value?: number;
    AssetGroup?: string;
    hideTags?: string[];
    Color?: string[] | string;
    maxLevel?: number;
    floors?: Record<string, boolean>;
    helpChance?: {
        Struggle?: number;
        Cut?: number;
        Remove?: number;
        Pick?: number;
        Unlock?: number;
    };
    limitChance?: {
        Struggle?: number;
        Cut?: number;
        Remove?: number;
        Pick?: number;
        Unlock?: number;
    };
    speedMult?: {
        Struggle?: number;
        Cut?: number;
        Remove?: number;
        Pick?: number;
        Unlock?: number;
    };
    struggleMinSpeed?: {
        Struggle?: number;
        Cut?: number;
        Remove?: number;
        Pick?: number;
        Unlock?: number;
    };
    struggleMaxSpeed?: {
        Struggle?: number;
        Cut?: number;
        Remove?: number;
        Pick?: number;
        Unlock?: number;
    };
    struggleMult?: {
        Struggle?: number;
        Cut?: number;
        Remove?: number;
        Pick?: number;
        Unlock?: number;
    };
    limitMult?: {
        Struggle?: number;
        Cut?: number;
        Remove?: number;
        Pick?: number;
        Unlock?: number;
    };
    sfxEscape?: {
        Struggle?: string;
        Cut?: string;
        Remove?: string;
        Pick?: string;
        Unlock?: string;
        NoStamina?: string;
        NoWill?: string;
        NoMagic?: string;
        MagicCut?: string;
        PickBreak?: string;
        KnifeBreak?: string;
        KnifeDrop?: string;
        KeyDrop?: string;
        PickDrop?: string;
        Blocked?: string;
    };
    sfxFinishEscape?: {
        Struggle?: string;
        Cut?: string;
        Remove?: string;
        Pick?: string;
        Unlock?: string;
        Destroy?: string;
    };
    sfxRemove?: string;
    sfx?: string;
    sfxGroup?: string;
    linkedVibeTags?: string[];
    vibeLocation?: string;
    showInQuickInv?: boolean;
    chastity?: boolean;
    chastitybra?: boolean;
    piercing?: boolean;
    crotchrope?: boolean;
    plugSize?: number;
    bindarms?: boolean;
    restricthands?: number;
    bindhands?: number;
    harness?: boolean;
    hobble?: number;
    heelpower?: number;
    blockfeet?: boolean;
    restriction?: number;
    gag?: number;
    blindfold?: number;
    maxwill?: number;
    maxwillEnemy?: number;
    Type?: string;
    removePrison?: boolean;
    forceRemovePrison?: boolean;
    failSuffix?: Record<string, string>;
    customEquip?: string;
    customEscapeSucc?: string;
    specStruggleTypes?: string[];
    remove?: string[];
    removeShrine?: string[];
    slimeLevel?: number;
    addTag?: string[];
    addPose?: string[];
    noRenderPose?: string[];
    biggerVersion?: string;
    addPoseIfTopLevel?: string[];
    forbidPose?: string[];
    removePose?: string[];
    OverridePriority?: number;
    Modules?: number[];
    inventoryAs?: string;
    inventoryAsSelf?: string;
    alwaysKeep?: boolean;
    noJailRemove?: boolean;
    strictness?: number;
    strictnessZones?: string[];
    LinkableBy?: string[];
    DefaultLock?: string;
    HideDefaultLock?: boolean;
    Link?: string;
    UnLink?: string;
    removeOnLeash?: boolean;
    enclose?: boolean;
    ignoreIfNotLeash?: boolean;
    tether?: number;
    leash?: boolean;
    allowRemote?: boolean;
    escapeMult?: number;
    forceOutfit?: string;
    forceOutfitPriority?: number;
    alwaysDressModel?: alwaysDressModel[];
    bypass?: boolean;
    magic?: boolean;
    nonbinding?: boolean;
    binding?: boolean;
    freeze?: boolean;
    immobile?: boolean;
    trappable?: boolean;
    curse?: string;
    difficultyBonus?: number;
    divine?: boolean;
    potionCollar?: boolean;
    allowPotions?: boolean;
    slimeWalk?: boolean;
    soapWalk?: boolean;
    iceWalk?: boolean;
    enchantedDrain?: number;
    enchanted?: boolean;
    special?: boolean;
    factionColor?: number[][];
    armor?: boolean;
    LinkAll?: boolean;
    AlwaysLinkable?: boolean;
    UnderlinkedAlwaysRender?: boolean;
    NoLinkOver?: boolean;
    displayPower?: number;
}
interface restraint extends KDRestraintProps {
    power: number;
    preview?: string;
    original?: string;
    quickBindCondition?: string;
    quickBindMult?: number;
    weight: number;
    minLevel: number;
    deaf?: number;
    Color?: string[] | string;
    tightType?: string;
    cutVulnerability?: number;
    escapeChance: KDEscapeChanceList;
    enemyTags: Record<string, number>;
    enemyTagsMult?: Record<string, number>;
    playerTags: Record<string, number>;
    shrine: string[];
    ignoreFloorTags?: string[];
    ignoreMinLevelTags?: string[];
    ignoreMaxLevelTags?: string[];
    ApplyVariants?: Record<string, {
        weightMod: number;
        weightMult: number;
        playerTags?: Record<string, number>;
        playerTagsMult?: Record<string, number>;
        playerTagsMissing?: Record<string, number>;
        playerTagsMissingMult?: Record<string, number>;
        enemyTags: Record<string, number>;
        enemyTagsMult?: Record<string, number>;
    }>;
}
interface KDEscapeChanceList {
    Struggle?: number;
    Cut?: number;
    Remove?: number;
    Pick?: number;
    Unlock?: number;
}
type outfitKey = string;
type mapKey = string;
interface floorParams {
    successorPositive: Record<string, number>;
    successorNegative: Record<string, number>;
    successorSame: Record<string, number>;
    color: string;
    factionList?: string[];
    worldGenCode?: (coord: WorldCoord) => void;
    beforeWorldGenCode?: (coord: WorldCoord) => void;
    tagModifiers?: Record<string, number>;
    globalTags?: Record<string, boolean>;
    curseTags: string[];
    shadowColor?: number;
    lightColor?: number;
    background: string;
    openness: number;
    density: number;
    torchchance?: number;
    torchlitchance?: number;
    music: Record<string, number>;
    specialChests?: Record<string, number>;
    torchchanceboring?: number;
    torchreplace?: {
        sprite: string;
        unlitsprite?: string;
        brightness: number;
    };
    noReplace?: string;
    manaChance?: number;
    crackchance: number;
    foodChance?: number;
    barchance: number;
    brightness: number;
    chestcount: number;
    shrinecount: number;
    shrinechance: number;
    ghostchance: number;
    doorchance: number;
    nodoorchance: number;
    doorlockchance: number;
    doorlocktrapchance?: number;
    doortrapchance?: number;
    minortrapChance?: number;
    chargerchance?: number;
    litchargerchance?: number;
    chargercount?: number;
    trapchance: number;
    barrelChance?: number;
    grateChance: number;
    rubblechance: number;
    brickchance: number;
    cacheInterval: number;
    cageChance?: number;
    wallhookchance?: number;
    ceilinghookchance?: number;
    hallopenness?: number;
    forcePOI?: boolean;
    gaschance?: number;
    gasdensity?: number;
    gastype?: string;
    wallRubblechance?: number;
    lockmult?: number;
    floodchance?: number;
    forbiddenChance: number;
    forbiddenGreaterChance: number;
    setpieces?: {
        Type: string;
        Weight: number;
    }[];
    traps: {
        Name: string;
        Faction?: string;
        Enemy?: string;
        Spell?: string;
        extraTag?: string;
        Level: number;
        Power: number;
        BlockedByPerks?: string[];
        Weight: number;
        strict?: true;
        teleportTime?: number;
        filterTag?: string;
        filterBackup?: string;
        arousalMode?: boolean;
    }[];
    min_width: number;
    max_width: number;
    min_height: number;
    max_height: number;
    deadend?: number;
    ShopExclusives?: string[];
    ShopExclusivesArousal?: string[];
    enemyTags?: string[];
    enemyTags_single?: string[];
    globalEnemyTags?: string[];
    "defeat_outfit": outfitKey;
    jailType?: string;
    guardType?: string;
    "shrines": {
        Type: string;
        Weight: number;
    }[];
}
interface overrideDisplayItem {
    Item: string;
    Group: string;
    Model?: string;
    Color: string[] | string;
    Filters?: Record<string, LayerFilter>;
    factionColor?: number[][];
    factionFilters?: Record<string, {
        color: string;
        override: boolean;
    }>;
    Property?: any;
    override?: boolean;
    useHairColor?: boolean;
    OverridePriority?: number[] | number;
}
interface alwaysDressModel {
    faction?: string;
    Model: string;
    Group?: string;
    Properties?: Record<string, LayerPropertiesType>;
    Filters?: Record<string, LayerFilter>;
    factionFilters?: Record<string, {
        color: string;
        override?: boolean;
    }>;
    inheritFilters?: boolean;
    override?: boolean;
    useHairColor?: boolean;
}
interface KDLoadout {
    name: string;
    tags?: string[];
    singletag: string[];
    singletag2?: string[];
    forbidtags: string[];
    chance: number;
    items?: string[];
    restraintMult?: number;
    multiplier?: number;
}
interface enemy extends KDHasTags {
    captureAction?: string;
    special?: boolean;
    overrideFactionDefeat?: boolean;
    customDefeat?: string;
    creationScript?: string;
    alwaysKite?: boolean;
    intro?: string;
    nameList?: string;
    teaseMod?: number;
    startingItems?: string[];
    SFX?: {
        death?: string;
    };
    RestraintFilter?: {
        levelBonus?: number;
        bonusRestraints?: number;
        unlimitedRestraints?: boolean;
        forceStock?: boolean;
        invRestraintsOnly?: boolean;
        limitedRestraintsOnly?: boolean;
        powerThresh?: number;
        ignoreInitial?: string[];
        ignoreInitialTag?: string[];
        noRestock?: boolean;
        restockPercent?: number;
        requiredItems?: string[];
    };
    Magic?: {
        castCooldownUnique?: Record<string, number>;
        priority?: Record<string, number>;
    };
    Security?: {
        level_key?: number;
        level_tech?: number;
        level_magic?: number;
    };
    GFX?: {
        AmbushSprite?: string;
        spriteWidth?: number;
        spriteHeight?: number;
        lighting?: boolean;
    };
    Sound?: {
        moveAmount?: number;
        baseAmount?: number;
        castAmount?: number;
        attackAmount?: number;
        alertAmount?: number;
        decay?: number;
        idleSoundName?: string;
        moveSoundName?: string;
        alertSoundName?: string;
    };
    specialScript?: string;
    spawnAISetting?: string;
    wanderAISetting?: string;
    onSpawnScript?: string;
    Behavior?: {
        leashCondition?: string;
        holdStillWhenNear?: boolean;
        behaveAsEnemy?: boolean;
        thorough?: number;
        noPlay?: boolean;
        ensureGroupTied?: string[];
        ensurePlayerTag?: string[];
        ensureGroupTiedArousal?: string[];
        ensurePlayerTagArousal?: string[];
    };
    noOverrideFloor?: boolean;
    summonTags?: string[];
    summonTagsMulti?: string[];
    alwaysBound?: boolean;
    arousalMode?: boolean;
    name: string;
    specialdialogue?: string;
    outOfBoxWeightMult?: number;
    tags: Record<string, boolean>;
    spellResist?: number;
    allied?: boolean;
    willBonus?: number;
    lowpriority?: boolean;
    stunWhenSwap?: boolean;
    pathcondition?: string;
    evasion?: number;
    block?: number;
    blockAmount?: number;
    maxdodge?: number;
    maxblock?: number;
    preferDodge?: boolean;
    preferBlock?: boolean;
    armor?: number;
    data?: Record<string, string>;
    hidetimerbar?: boolean;
    Attack?: {
        mustBindorFail?: boolean;
        noFailifHasWP?: boolean;
    };
    Awareness?: {
        chaseradius?: number;
        hearingMult?: number;
        hearingRadius?: number;
        vision?: number;
        senseSpeed?: number;
    };
    Reputation?: {
        noRepLoss?: boolean;
    };
    followRange?: number;
    AI?: string;
    regen?: number;
    visionRadius?: number;
    nonDirectional?: boolean;
    noFlip?: boolean;
    maxhp?: number;
    maxmana?: number;
    manaregen?: number;
    shield?: number;
    shieldregen?: number;
    stamina?: number;
    sprintspeed?: number;
    startinghp?: number;
    minLevel?: number;
    maxLevel?: number;
    weight?: number;
    movePoints?: number;
    attackPoints?: number;
    attack?: string;
    attackRange?: number;
    terrainTags?: Record<string, number>;
    weightMult?: number;
    floors?: Record<string, boolean>;
    events?: KinkyDungeonEvent[];
    allFloors?: boolean;
    noblockplayer?: boolean;
    triggersTraps?: boolean;
    keepLevel?: boolean;
    accuracy?: number;
    playerBlindSight?: number;
    attackWidth?: number;
    power?: number;
    dmgType?: string;
    teaseAttacks?: string;
    bound?: string;
    outfit?: string;
    style?: string;
    nonHumanoid?: boolean;
    color?: string;
    CountLimit?: boolean;
    noTargetSilenced?: boolean;
    silenceTime?: number;
    spells?: string[];
    startBuffs?: any[];
    noMiscast?: boolean;
    miscastsfx?: string;
    miscastmsg?: string;
    unlockCommandLevel?: number;
    unlockCommandCD?: number;
    selfCast?: Record<string, boolean>;
    spellCooldownMult?: number;
    spellCooldownMod?: number;
    kite?: number;
    playerFollowRange?: number;
    minSpellRange?: number;
    stopToCast?: boolean;
    spellRdy?: boolean;
    castWhileMoving?: boolean;
    noAttack?: boolean;
    disarm?: number;
    fullBoundBonus?: number;
    dropTable?: any[];
    attackWhileMoving?: boolean;
    noSpellsLowSP?: boolean;
    rep?: Record<string, number>;
    factionrep?: Record<string, number>;
    guardChance?: number;
    clusterWith?: string;
    ignorechance?: number;
    difficulty?: number;
    projectileAttack?: boolean;
    buffallies?: boolean;
    stunTime?: number;
    staminaDamage?: number;
    specialCD?: number;
    specialAttack?: string;
    specialIgnoreStam?: boolean;
    specialRemove?: string;
    specialExtraTags?: string[];
    specialRemoveTags?: string[];
    specialMsg?: boolean;
    specialCondition?: string;
    specialPower?: number;
    specialDamage?: string;
    specialCDonAttack?: boolean;
    specialWidth?: number;
    specialRange?: number;
    shrines?: string[];
    followLeashedOnly?: boolean;
    blindSight?: number;
    specialCharges?: number;
    strictAttackLOS?: boolean;
    specialAttackPoints?: number;
    stealth?: number;
    noReveal?: boolean;
    ambushRadius?: number;
    wanderTillSees?: boolean;
    dontKiteWhenDisabled?: boolean;
    bindOnDisableSpecial?: boolean;
    bindOnDisable?: boolean;
    smartBind?: boolean;
    hitsfx?: string;
    useLock?: string;
    attackLock?: string;
    applyFaction?: string;
    defaultFaction?: string;
    tilesMinRange?: number;
    attackMinRange?: number;
    specialMinRange?: number;
    noKiteWhenHarmless?: boolean;
    noSpellsWhenHarmless?: boolean;
    ignoreStaminaForBinds?: boolean;
    sneakThreshold?: number;
    RemoteControl?: {
        remote?: number;
        remoteAmount?: number;
        punishRemote?: number;
        punishRemoteChance?: number;
    };
    crit?: number;
    bypass?: boolean;
    multiBind?: number;
    noLeashUnlessExhausted?: boolean;
    ethereal?: boolean;
    alwaysEvade?: boolean;
    alwaysBlock?: boolean;
    Resistance?: {
        profile?: string[];
        alwaysHitByMagic?: boolean;
        alwaysBypassedByMagic?: boolean;
        block_phys?: number;
        block_magic?: number;
        toughArmor?: boolean;
        toughArmorAlways?: boolean;
    };
    summonRage?: boolean;
    noAlert?: boolean;
    master?: masterInfo;
    pullTowardSelf?: boolean;
    pullDist?: number;
    summon?: any[];
    sneakthreshold?: number;
    blockVisionWhileStationary?: boolean;
    squeeze?: boolean;
    earthmove?: boolean;
    noChaseUnrestrained?: boolean;
    suicideOnSpell?: boolean;
    suicideOnAdd?: boolean;
    suicideOnEffect?: boolean;
    suicideOnLock?: boolean;
    alwaysHostile?: boolean;
    specialsfx?: string;
    stunOnSpecialCD?: number;
    Dash?: {
        noDashOnSidestep?: boolean;
        noDashOnMiss?: boolean;
        noDashOnBlock?: boolean;
        EventOnDashMiss?: boolean;
        EventOnDashBlock?: boolean;
    };
    Defeat?: {
        furnitureTags?: {
            tags: string[];
            count: number;
        }[];
        jailroom?: string;
        useLair?: boolean;
        alwaysForceJailroom?: string;
        specificRestraints?: {
            name: string;
            minlevel: number;
            maxlevel?: number;
            applyVariant?: string;
        }[];
    };
    attackBonus?: number;
    noLeash?: boolean;
    cohesion?: number;
    noSpellLeashing?: boolean;
    projectileTargeting?: boolean;
    ondeath?: any[];
    blindTime?: number;
    tilesMinRangeSpecial?: number;
    convertTiles?: any[];
    pullMsg?: boolean;
    dashThruWalls?: boolean;
    dashThrough?: boolean;
    cohesionRange?: number;
    kiteChance?: number;
    ignoreflag?: string[];
    failAttackflag?: string[];
    failAttackflagChance?: number;
    failAttackflagDuration?: number;
    visionSummoned?: number;
    dependent?: boolean;
    nopickpocket?: boolean;
    attackThruBars?: boolean;
    noCancelAttack?: boolean;
    keys?: boolean;
    rage?: boolean;
    lifespan?: number;
    noDisplace?: boolean;
    spellWhileParole?: boolean;
    playLine?: string;
    blockVision?: boolean;
    hitsfxSpecial?: string;
    misssfx?: string;
    blocksfx?: string;
    cueSfx?: {
        Block?: string;
        Resist?: string;
        Damage?: string;
        Miss?: string;
    };
    effect?: any;
    noSpellDuringAttack?: boolean;
    faction?: string;
    rescueTo?: {
        Unlock?: string;
        Remove?: string;
        Slime?: string;
    };
    noChannel?: boolean;
    focusPlayer?: boolean;
    immobile?: boolean;
    enemyCountSpellLimit?: number;
    Animations?: string[];
    recruitType?: string;
}
interface shopItem {
    cost: any;
    rarity: any;
    costMod?: any;
    shoptype: string;
    consumable?: string;
    countItem?: number;
    quantity?: number;
    name: any;
}
interface weapon extends damageInfo, NamedAndTyped {
    digSpell?: string;
    stamPenType?: string;
    ignoreshield?: boolean;
    shield_crit?: boolean;
    shield_stun?: boolean;
    shield_freeze?: boolean;
    shield_bind?: boolean;
    shield_snare?: boolean;
    shield_slow?: boolean;
    shield_distract?: boolean;
    shield_vuln?: boolean;
    arousalMode?: boolean;
    costMod?: number;
    name: string;
    damage: number;
    chance: number;
    type: string;
    stam50mult?: number;
    evadeable?: boolean;
    nokill?: boolean;
    bind?: number;
    nodisarm?: boolean;
    addBind?: boolean;
    angle?: number;
    crit?: number;
    bindcrit?: number;
    bindType?: string;
    distract?: number;
    bindEff?: number;
    distractEff?: number;
    desireMult?: number;
    light?: boolean;
    heavy?: boolean;
    massive?: boolean;
    boundBonus?: number;
    tease?: boolean;
    rarity: number;
    staminacost?: number;
    time?: number;
    magic?: boolean;
    noDamagePenalty?: boolean;
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
    clumsy?: boolean;
    channel?: number;
    channelslow?: boolean;
    novulnerable?: boolean;
    nocrit?: boolean;
    noblock?: boolean;
    tags?: string[];
    special?: KDWeaponSpecial;
    telekinetic?: boolean;
}
interface KDWeaponSpecial {
    noSkip?: boolean;
    type: string;
    spell?: string;
    prereq?: string;
    selfCast?: boolean;
    requiresEnergy?: boolean;
    energyCost?: number;
    range?: number;
}
interface KinkyDungeonEvent {
    sprite?: string;
    cloneTags?: string[];
    frequencyMax?: number;
    frequencyMin?: number;
    frequencyStep?: number;
    frequencyTag?: string;
    delayedOrder?: number;
    dynamic?: boolean;
    trim?: boolean;
    cost?: number;
    offhand?: boolean;
    offhandonly?: boolean;
    cursetype?: string;
    curse?: boolean;
    targetType?: string;
    attackerType?: string;
    tags?: string[];
    duration?: number;
    always?: boolean;
    bindEff?: number;
    type: string;
    requireFlag?: string;
    trigger: string;
    threshold?: number;
    removeOnUncurse?: boolean;
    restraint?: string;
    sfx?: string;
    vol?: number;
    power?: number;
    keepLock?: boolean;
    distractEff?: number;
    desireMult?: number;
    count?: number;
    player?: boolean;
    bind?: number;
    crit?: number;
    bindcrit?: number;
    distract?: number;
    mult?: number;
    kind?: string;
    original?: string;
    variance?: number;
    damage?: string;
    element?: string;
    buffTypes?: string[];
    damageTrigger?: string;
    dist?: number;
    aoe?: number;
    buffType?: string;
    bullet?: boolean;
    melee?: boolean;
    time?: number;
    bindType?: string;
    addBind?: boolean;
    chance?: number;
    buff?: any;
    lock?: string;
    desc?: string;
    buffSprite?: string;
    msg?: string;
    source?: number;
    condition?: string;
    prereq?: string;
    color?: string;
    filter?: LayerFilter;
    bgcolor?: string;
    edgeOnly?: boolean;
    cooldown?: Record<string, number>;
    requiredTag?: string;
    requireTags?: string[];
    filterTags?: string[];
    StruggleType?: string;
    requireEnergy?: boolean;
    limit?: number;
    energyCost?: number;
    inheritLinked?: boolean;
    spell?: string;
    subMult?: number;
    noLeash?: boolean;
    stun?: number;
    warningchance?: number;
    punishComponent?: string;
    list?: string[];
    humanOnly?: boolean;
    distStealth?: number;
    enemyDialogue?: string;
    escapeMethod?: string;
    enemy?: string;
    prevSlowLevel?: number;
}
type masterInfo = {
    type: string;
    range: number;
    loose?: boolean;
    aggressive?: boolean;
    dependent?: boolean;
    maxDist?: number;
    masterTag?: string;
};
interface String {
    KDReplaceOrAddDmg(dmg: string, replaceString?: string): string;
}
interface KDBuff {
    training?: string;
    id: string;
    power?: number;
    resetDurationPower?: number;
    resetDurationTime?: number;
    type?: string;
    duration?: number;
    infinite?: boolean;
    aura?: HexColor;
    range?: number;
    currentCount?: number;
    maxCount?: number;
    tags?: string[];
    data?: Record<string, any>;
    mushroom?: boolean;
    cancelOnReapply?: boolean;
    player?: boolean;
    enemies?: boolean;
    events?: KinkyDungeonEvent[];
    endFloor?: boolean;
    endSleep?: boolean;
    spell?: any;
    auraSprite?: any;
    noAuraColor?: boolean;
    showHelpless?: boolean;
    replaceSprite?: any;
    replaceSpriteBound?: any;
    replaceSpriteSuff?: any;
    replaceSpriteSuffBound?: any;
    replacePower?: any;
    labelcolor?: string;
    hide?: boolean;
    text?: any;
    textPower?: boolean;
    textSuff?: string;
    desc?: string;
    buffTextReplace?: Record<string, any>;
    buffSprite?: boolean;
    pose?: any;
    buffSpriteSpecific?: string;
    click?: string;
    disableTypes?: string[];
    sfxApply?: string;
    onlyAlly?: boolean;
    noAlly?: boolean;
    flashing?: boolean;
    flag?: string;
}
interface entity {
    lastmove?: number;
    runSpawnAI?: boolean;
    spawnTick?: number;
    tx?: number;
    ty?: number;
    target?: number;
    refreshSprite?: boolean;
    FacilityAction?: string;
    strugglePoints?: number;
    partyLeader?: number;
    bindStun?: number;
    leash?: KDLeashData;
    blockedordodged?: number;
    blocks?: number;
    dodges?: number;
    shield?: number;
    visual_hp?: number;
    visual_boundlevel?: number;
    visual_distraction?: number;
    visual_lifetime?: number;
    master?: masterInfo;
    flip?: boolean;
    sprinted?: boolean;
    exertion?: number;
    playLine?: string;
    outfit?: string;
    outfitBound?: string;
    style?: string;
    intro?: string;
    offX?: number;
    offY?: number;
    scaleX?: number;
    scaleY?: number;
    animTime?: number;
    homeCoord?: WorldCoord;
    spawnX?: number;
    spawnY?: number;
    opinion?: number;
    domVariance?: number;
    hideTimer?: boolean;
    Enemy?: enemy;
    created?: boolean;
    ranOnSpawn?: boolean;
    sound?: number;
    boundTo?: number;
    weakBinding?: boolean;
    player?: boolean;
    keys?: boolean;
    ondeath?: any[];
    data?: Record<string, string>;
    rep?: Record<string, number>;
    factionrep?: Record<string, number>;
    dialogue?: string;
    dialogueDuration?: number;
    dialogueColor?: string;
    dialoguePriority?: number;
    CustomName?: string;
    CustomSprite?: string;
    CustomNameColor?: string;
    CustomPronoun?: string;
    rescue?: boolean;
    personality?: string;
    patrolIndex?: number;
    flags?: Record<string, number>;
    gold?: number;
    noDrop?: boolean;
    droppedItems?: boolean;
    specialdialogue?: string;
    prisondialogue?: string;
    aggro?: number;
    id?: number;
    hp?: number;
    mana?: number;
    AI?: string;
    moved?: boolean;
    playerdmg?: number;
    idle?: boolean;
    summoned?: boolean;
    boundLevel?: number;
    specialBoundLevel?: Record<string, number>;
    distraction?: number;
    desire?: number;
    lifetime?: number;
    temporary?: boolean;
    maxlifetime?: number;
    attackPoints?: number;
    attackBonus?: number;
    movePoints?: number;
    aware?: boolean;
    vp?: number;
    tracking?: boolean;
    revealed?: boolean;
    ambushtrigger?: boolean;
    castCooldown?: number;
    castCooldownSpecial?: number;
    castCooldownUnique?: Record<string, number>;
    specialCharges?: number;
    usingSpecial?: boolean;
    ignore?: boolean;
    specialCD?: number;
    disarmflag?: number;
    channel?: number;
    items?: string[];
    tempitems?: string[];
    x: number;
    y: number;
    targetingX?: number;
    targetingY?: number;
    lastx?: number;
    lasty?: number;
    fx?: number;
    fy?: number;
    action?: string;
    path?: {
        x: number;
        y: number;
    }[];
    gx?: number;
    gy?: number;
    despawnX?: number;
    despawnY?: number;
    goToDespawn?: boolean;
    gxx?: number;
    gyy?: number;
    rage?: number;
    hostile?: number;
    modified?: boolean;
    faction?: string;
    allied?: number;
    ceasefire?: number;
    bind?: number;
    immobile?: number;
    blind?: number;
    disarm?: number;
    slow?: number;
    freeze?: number;
    teleporting?: number;
    teleportingmax?: number;
    stun?: number;
    silence?: number;
    vulnerable?: number;
    buffs?: Record<string, KDBuff>;
    warningTiles?: warningTileEntry[];
    visual_x?: number;
    visual_y?: number;
    Analyze?: boolean;
    playWithPlayer?: number;
    playWithPlayerCD?: number;
    IntentAction?: string;
    IntentLeashPoint?: {
        x: number;
        y: number;
        type: string;
        radius: number;
        entrance?: boolean;
    };
    CurrentAction?: string;
    RemainingJailLeashTourWaypoints?: number;
    NextJailLeashTourWaypointX?: number;
    NextJailLeashTourWaypointY?: number;
    KinkyDungeonJailTourInfractions?: number;
    CurrentRestraintSwapGroup?: string;
    CurrentRestraintSwapIndex?: number;
}
type KinkyDungeonDress = {
    Item: string;
    Group?: string;
    Color: string | string[];
    Filters?: Record<string, LayerFilter>;
    Properties?: Record<string, LayerPropertiesType>;
    factionFilters?: Record<string, FactionFilterDef>;
    Lost: boolean;
    NoLose?: boolean;
    Property?: any;
    OverridePriority?: number;
    Skirt?: boolean;
}[];
interface KinkyDialogueTrigger {
    dialogue: string;
    allowedPrisonStates?: string[];
    allowedPersonalities?: string[];
    blockDuringPlaytime?: boolean;
    talk?: boolean;
    noAlly?: boolean;
    excludeTags?: string[];
    requireTags?: string[];
    requireTagsSingle?: string[];
    requireTagsSingle2?: string[];
    playRequired?: boolean;
    onlyDuringPlay?: boolean;
    allowPlayExceptionSub?: boolean;
    noCombat?: boolean;
    nonHostile?: boolean;
    prerequisite: (enemy: entity, dist: number, AIData: KDAIData) => boolean;
    weight: (enemy: entity, dist: number) => number;
}
interface effectTile {
    x?: number;
    y?: number;
    infinite?: boolean;
    lightColor?: number;
    yoffset?: number;
    xoffset?: number;
    name: string;
    functionName?: string;
    duration: number;
    priority: number;
    data?: any;
    affinities?: string[];
    affinitiesStanding?: string[];
    drawOver?: boolean;
    tags: string[];
    pauseDuration?: number;
    pauseSprite?: string;
    brightness?: number;
    noWalls?: boolean;
    visionBlockRadius?: number;
    skin?: string;
    fade?: string;
    yfade?: string;
    yfadeamount?: number;
    statuses?: Record<string, number>;
    spin?: number;
    spinAngle?: number;
    colortint?: string;
    colorforcetint?: string;
}
interface effectTileRef {
    name: string;
    infinite?: boolean;
    duration?: number;
    data?: any;
    pauseDuration?: number;
    pauseSprite?: string;
    skin?: string;
    statuses?: Record<string, number>;
    colortint?: string;
    colorforcetint?: string;
}
type KDPerk = {
    debuff?: boolean;
    buff?: boolean;
    category: string;
    id: string | number;
    cost: number;
    block?: string[];
    tags?: string[];
    blocktags?: string[];
    blockclass?: string[];
    blockfunc?: string | ((arg: string[]) => boolean | undefined);
    locked?: boolean;
    outfit?: string;
    require?: string;
    costGroup?: string;
    startPriority?: number;
    requireArousal?: boolean;
};
interface SubCastInfo {
    target?: string;
    tx?: number;
    ty?: number;
    mx?: number;
    my?: number;
    targetID?: number;
    noTargetMoveDir?: boolean;
    directional?: boolean;
    randomDirection?: boolean;
    randomDirectionPartial?: boolean;
    randomDirectionFallback?: boolean;
    alwaysRandomBuff?: string;
    aimAtTarget?: boolean;
    spell: string;
    chance?: number;
    countPerCast?: number;
    offset?: boolean;
    spread?: number;
    sfx?: string;
    strict?: boolean;
}
interface BulletTickData {
    bullet: KDBullet;
    delta: number;
    allied: boolean;
    cancelCast: boolean;
    cancelMove: boolean;
}
interface spell {
    nocrit?: boolean;
    bindTags?: string[];
    ignoreshield?: boolean;
    shield_crit?: boolean;
    shield_stun?: boolean;
    shield_freeze?: boolean;
    shield_bind?: boolean;
    shield_snare?: boolean;
    shield_slow?: boolean;
    shield_distract?: boolean;
    shield_vuln?: boolean;
    crit?: number;
    miscastSfx?: string;
    noDirectDamage?: true;
    noDirectHit?: true;
    hideWarnings?: boolean;
    alwaysWarn?: boolean;
    commandword?: boolean;
    buffallies?: boolean;
    noSelfBuff?: boolean;
    selfbuff?: boolean;
    bindType?: string;
    slowStart?: boolean;
    bulletSpin?: number;
    hitSpin?: number;
    fastStart?: boolean;
    aoetype?: string;
    aoetypetrail?: string;
    secondaryhit?: string;
    upcastFrom?: string;
    upcastLevel?: number;
    hitColor?: number;
    bulletColor?: number;
    trailColor?: number;
    hitLight?: number;
    bulletLight?: number;
    trailLight?: number;
    goToPage?: number;
    tags?: string[];
    effectTile?: effectTileRef;
    effectTileAoE?: number;
    effectTileDurationMod?: number;
    effectTilePre?: effectTileRef;
    effectTileDurationModPre?: number;
    effectTileLinger?: effectTileRef;
    effectTileDurationModLinger?: number;
    effectTileDensityLinger?: number;
    effectTileTrail?: effectTileRef;
    effectTileDurationModTrail?: number;
    effectTileDensityTrail?: number;
    effectTileTrailAoE?: number;
    effectTileDoT?: effectTileRef;
    effectTileDoT2?: effectTileRef;
    effectTileDistDoT?: number;
    effectTileDurationModDoT?: number;
    effectTileDensityDoT?: number;
    effectTileDensityFullIfEmpty?: boolean;
    effectTileDensity?: number;
    hide?: boolean;
    shotgunCount?: number;
    shotgunFan?: boolean;
    shotgunSpread?: number;
    shotgunDistance?: number;
    shotgunSpeedBonus?: number;
    distractEff?: number;
    desireMult?: number;
    bindEff?: number;
    nonmagical?: boolean;
    damageFlags?: string[];
    noTrailOnPlayer?: boolean;
    noTrailOnEntity?: boolean;
    noTrailOnAlly?: boolean;
    color?: string;
    buffAll?: boolean;
    name: string;
    customCost?: string;
    quick?: boolean;
    addBind?: boolean;
    prerequisite?: string | string[];
    blockedBy?: string[];
    hideUnlearnable?: boolean;
    hideWithout?: string;
    hideWith?: string;
    hideLearned?: boolean;
    autoLearn?: string[];
    learnPage?: string[];
    noAggro?: boolean;
    itemEffect?: string;
    allySpell?: boolean;
    noFF?: boolean;
    friendlyfire?: boolean;
    noHitAlliedPlayer?: boolean;
    faction?: string;
    enemySpell?: boolean;
    noDirectionOffset?: boolean;
    arousalMode?: boolean;
    school?: string;
    special?: string;
    power?: number;
    aoedamage?: number;
    damage?: string;
    tease?: boolean;
    size?: number;
    noUniqueHits?: boolean;
    aoe?: number;
    bulletAoE?: number;
    bind?: number;
    bindcrit?: number;
    distract?: number;
    boundBonus?: number;
    outfit?: string;
    speed?: number;
    knifecost?: number;
    staminacost?: number;
    manacost: number;
    chargecost?: number;
    minRange?: number;
    noSprite?: boolean;
    learnFlags?: string[];
    increasingCost?: boolean;
    decreaseCost?: boolean;
    classSpecific?: string;
    components?: string[];
    followCaster?: boolean;
    level: number;
    passive?: boolean;
    mixedPassive?: boolean;
    active?: boolean;
    costOnToggle?: boolean;
    type: string;
    noconsume?: boolean;
    quantity?: number;
    onhit?: string;
    time?: number;
    delay?: number;
    delayRandom?: number;
    castRange?: number;
    range?: number;
    lifetime?: number;
    noSource?: boolean;
    bulletLifetime?: number;
    channel?: number;
    noise?: number;
    block?: number;
    sfx?: string;
    hitsfx?: string;
    landsfx?: string;
    trailEvadeable?: boolean;
    trailNoBlock?: boolean;
    trailPower?: number;
    trailHit?: string;
    trailLifetime?: number;
    trailTime?: number;
    lingeringDelayed?: boolean;
    lifetimeHitBonus?: number;
    trailLifetimeBonus?: number;
    trailPlayerEffect?: any;
    trailChance?: number;
    trailOnSelf?: boolean;
    trailDamage?: string;
    trailspawnaoe?: number;
    trailcast?: any;
    trail?: string;
    spellPointCost?: number;
    heal?: boolean;
    buff?: boolean;
    castCondition?: string;
    mustTarget?: boolean;
    noTargetPlayer?: boolean;
    WallsOnly?: boolean;
    evadeable?: boolean;
    noblock?: boolean;
    meleeOrigin?: boolean;
    noDoubleHit?: boolean;
    noCastOnHit?: boolean;
    castDuringDelay?: boolean;
    instantCast?: boolean;
    spellcast?: SubCastInfo;
    extraCast?: SubCastInfo[];
    spellcasthit?: SubCastInfo;
    buffs?: KDBuff[];
    defaultOff?: boolean;
    events?: KinkyDungeonEvent[];
    hitevents?: KinkyDungeonEvent[];
    piercing?: boolean;
    pierceEnemies?: boolean;
    passthrough?: boolean;
    dot?: boolean;
    noTerrainHit?: boolean;
    noEnemyCollision?: boolean;
    alwaysCollideTags?: string[];
    piercingTrail?: boolean;
    nonVolatile?: boolean;
    nonVolatileTrail?: boolean;
    volatile?: boolean;
    volatilehit?: boolean;
    blockType?: string[];
    cancelAutoMove?: boolean;
    requireLOS?: boolean;
    selfTargetOnly?: boolean;
    filterTags?: string[];
    msg?: boolean;
    noSumMsg?: boolean;
    projectileTargeting?: boolean;
    extraDist?: number;
    CastInWalls?: boolean;
    CastInDark?: boolean;
    noTargetEnemies?: boolean;
    exceptionFactions?: string[];
    noTargetAllies?: boolean;
    targetPlayerOnly?: boolean;
    specialCD?: number;
    noFirstChoice?: boolean;
    playerEffect?: any;
    noCastMsg?: boolean;
    selfcast?: boolean;
    noMiscast?: boolean;
    summon?: any[];
    secret?: boolean;
    defaultFaction?: boolean;
    trailBind?: number;
}
interface KDQuest {
    name: string;
    oncancel?: (player: entity, force: boolean, intentional: boolean, success: boolean) => boolean;
    priority?: (player: entity) => number;
    text?: (player: entity) => string[];
    npc: string;
    visible: boolean;
    nocancel?: boolean;
    tick?: (delta: number) => void;
    worldgenstart?: () => void;
    accept?: () => void;
    weight: (RoomType: any, MapMod: any, data: any, currentQuestList?: any) => number;
    prerequisite: (RoomType: any, MapMod: any, data: any, currentQuestList: any) => boolean;
    tags?: string[];
}
interface KDPoint {
    x: number;
    y: number;
}
interface KDJailPoint extends KDPoint {
    type: string;
    entrance?: boolean;
    radius: number;
    requireLeash?: boolean;
    requireFurniture?: boolean;
    direction?: {
        x: number;
        y: number;
    };
    restraint?: string;
    restrainttags?: string[];
}
interface KinkyDialogue {
    image?: string;
    data?: Record<string, string>;
    tags?: string[];
    singletag?: string[];
    excludeTags?: string[];
    inventory?: boolean;
    clickFunction?: (gagged: boolean, player: entity) => boolean | undefined;
    enterFunction?: (gagged: boolean, player: entity, fromstage: string) => void;
    drawFunction?: (gagged: boolean, player: entity, delta: number) => boolean;
    gagFunction?: (player: entity) => boolean | undefined;
    prerequisiteFunction?: (gagged: boolean, player: entity) => boolean;
    greyoutFunction?: (gagged: boolean, player: entity) => boolean;
    greyoutCustomTooltip?: (gagged: boolean, player: entity) => string;
    greyoutTooltip?: string;
    personalities?: string[];
    leadsTo?: string;
    leadsToStage?: string;
    skip?: boolean;
    dontTouchText?: boolean;
    exitDialogue?: boolean;
    response?: string;
    responseGag?: boolean;
    playertext?: string;
    gag?: boolean;
    gagThreshold?: number;
    gagDisabled?: boolean;
    gagRequired?: boolean;
    options?: Record<string, KinkyDialogue>;
    extraOptions?: string;
    outfit?: string;
    chance?: number;
}
interface KinkyVibration {
    sound: string;
    source: string;
    name: string;
    intensity: number;
    location: string[];
    duration: number;
    durationLeft: number;
    denyTime?: number;
    denyTimeLeft?: number;
    denialsLeft?: number;
    alwaysDeny?: boolean;
    denialChance?: number;
    denialChanceLikely?: number;
    edgeTime?: number;
    edgeTimeLeft?: number;
    tickEdgeAtMaxArousal?: boolean;
    loopsLeft?: number;
    edgeOnly?: boolean;
    VibeModifiers: VibeMod[];
}
interface VibeMod {
    sound: string;
    source: string;
    name: string;
    location: string;
    duration: number;
    durationLeft: number;
    intensityMod: number;
    intensitySetpoint?: number;
    edgeOnly?: boolean;
    forceDeny?: boolean;
    bypassDeny?: boolean;
    bypassEdge?: boolean;
    extendDuration?: boolean;
    denyChanceMod?: number;
    denyChanceLikelyMod?: number;
}
interface KDStruggleData {
    angelHelp: boolean;
    cutVulnerability: number;
    minSpeed: number;
    handBondage: number;
    armsBound: boolean;
    handsBound: boolean;
    failSuffix: string;
    restraint: item;
    struggleType: string;
    struggleGroup: string;
    escapeChance: number;
    cutBonus: number;
    origEscapeChance: number;
    lowEscapeChance: number;
    origLimitChance: number;
    helpChance: number;
    limitChance: number;
    strict: number;
    cutSpeed: number;
    affinity: string;
    hasAffinity: boolean;
    restraintEscapeChance: number;
    cost: number;
    noise: number;
    wcost: number;
    escapePenalty: number;
    willEscapePenalty: number;
    canCut: boolean;
    canCutMagic: boolean;
    toolBonus: number;
    cutMultBonus: number;
    cutMult: number;
    toolMult: number;
    buffBonus: number;
    buffMult: number;
    restriction: number;
    struggleTime: number;
    speedMult: number;
    escapeSpeed: number;
    query: boolean;
    maxLimit: number;
    result: string;
    lockType: KDLockType;
    extraLim: number;
    extraLimPenalty: number;
    extraLimThreshold: number;
    upfrontWill?: boolean;
}
interface KDFilteredInventoryItem {
    name: any;
    item: item;
    preview: string;
    preview2?: string;
    previewcolor?: string;
    previewcolorbg?: string;
    key?: string;
}
interface KDInventoryActionDef {
    text?: (player: entity, item: item) => string;
    label?: (player: entity, item: item) => string;
    itemlabel?: (player: entity, item: item) => string;
    labelcolor?: (player: entity, item: item) => string;
    itemlabelcolor?: (player: entity, item: item) => string;
    show?: (player: entity, item: item) => boolean;
    valid: (player: entity, item: item) => boolean;
    highlight?: (player: entity, item: item) => string;
    invalidtooltip?: (player: entity, item: item) => string;
    click: (player: entity, item: item) => void;
    cancel: (player: entity, delta: number) => boolean;
    icon: (player: entity, item: item) => string;
    hotkey?: () => string;
    doubleSize?: boolean;
    hotkeyPress?: () => string;
    alsoShow?: string[];
    autoFilter?: (item: item) => boolean;
}
interface KinkyDungeonSave {
    stats: any;
    KinkyDungeonEffectTiles: any;
    KinkyDungeonTiles: any;
    KinkyDungeonTilesSkin: any;
    KinkyDungeonTilesMemory: any;
    KinkyDungeonRandomPathablePoints: any;
    KinkyDungeonEntities: any;
    KinkyDungeonBullets: any;
    KinkyDungeonStartPosition: any;
    KinkyDungeonEndPosition: any;
    KinkyDungeonGrid: any;
    KinkyDungeonGridWidth: number;
    KinkyDungeonGridHeight: number;
    KinkyDungeonFogGrid: any;
    saveStat: {
        version: string;
        appearance: any[];
        default: KinkyDungeonDress;
        poses: Record<string, boolean>;
        Palette: string;
        metadata: KDOutfitMetadata;
        ConsentArray: Record<string, string>;
        outfit: string;
        name: string;
        level: number;
        sp: string;
        mp: string;
        wp: string;
        dp: string;
    };
    startingClass: string;
    KinkyDungeonCurrentTick: number;
    errorloading: boolean;
    modsmissing: boolean;
    version: string;
    KinkyDungeonPlayerEntity: any;
    level: number;
    checkpoint: string;
    rep: Record<string, number>;
    costs: Record<string, number>;
    pcosts: Record<string, number>;
    orbs: number[];
    chests: number[];
    dress: string;
    gold: number;
    points: number;
    progression: string;
    inventoryVariants: Record<string, KDRestraintVariant>;
    consumableVariants: Record<string, KDConsumableVariant>;
    weaponVariants: Record<string, KDWeaponVariant>;
    grounditems: any;
    perks: string[];
    levels: {
        Elements: number;
        Conjure: number;
        Illusion: number;
    };
    rescued: Record<string, boolean>;
    aid: Record<string, boolean>;
    seed: string;
    statchoice: [string, boolean][];
    mapIndex: Record<string, string>;
    id: number;
    idspell: number;
    choices: number[];
    choices_wep: string[];
    choices_arm: string[];
    choices_con: string[];
    choices2: boolean[];
    buffs: Record<string, any>;
    lostitems: any[];
    caches: number[];
    hearts: number[];
    spells: string[];
    inventory: item[];
    KDGameData: KDGameDataBase;
    KDMapData: KDMapDataType;
    KDWorldMap: Record<string, KDWorldSlot>;
    KDEventData: Object;
    KDCurrentWorldSlot: {
        x: number;
        y: number;
    };
    KDPersistentNPCs: string;
    KDDeletedIDs: string;
    KDPersonalAlt: string;
    flags: [string, number][];
    uniqueHits: [string, boolean][];
    KDCommanderRoles: [number, string][];
    picks: number;
    rkeys: number;
    bkeys: number;
    mana: number;
    manapool: number;
    stamina: number;
    willpower: number;
    distraction: number;
    distractionlower: number;
    wep: any;
    npp: number;
    diff: number;
    inventoryarray?: {
        consumable: item[];
        restraint: item[];
        looserestraint: item[];
        weapon: item[];
        outfit: item[];
    };
    potions?: {
        stamina: number;
        mana: number;
        will: number;
        dist: number;
    };
    journey?: string;
    mistresskey?: number;
    outfitForPreview?: string[];
    arousalMode?: boolean;
    itemMode?: number;
    plug?: boolean;
    plugFront?: boolean;
    piercing?: boolean;
    random?: boolean;
    savemode?: boolean;
    hardmode?: boolean;
    extrememode?: boolean;
    perksmode?: number;
    easymode?: number;
    progressionmode?: string;
    faction: Record<string, Record<string, number>>;
}
interface KDWorldSlot {
    data: Record<string, KDMapDataType>;
    x: number;
    y: number;
    jx: number;
    jy: number;
    color: string;
    name: string;
    main: string;
    outposts: Record<string, string>;
    lairs: Record<string, string>;
    lairsToPlace: Record<string, string[]>;
}
interface KDLabel {
    name: string;
    type: string;
    faction?: string;
    x: number;
    y: number;
    guard?: boolean;
    interesting?: boolean;
    assigned: number;
}
interface RepopQueueData {
    x: number;
    y: number;
    time: number;
    entity: entity;
    loose?: boolean;
}
interface KDBullet {
    type?: string;
    born: number;
    time?: number;
    lifetime?: number;
    reflected?: boolean;
    y: number;
    x: number;
    vx: number;
    vy: number;
    xx?: number;
    yy?: number;
    ox?: number;
    oy?: number;
    visual_x?: number;
    visual_y?: number;
    spriteID?: string;
    bullet: KDBulletData;
    trail?: string;
    trailEffectTile?: effectTileRef;
    shadowBuff?: boolean;
    source?: number;
    delay?: number;
    warnings?: string[];
    alreadyHit?: string[];
    secondary?: boolean;
    collisionUpdate?: boolean;
    faction?: string;
}
interface KDBulletData {
    inheritedflags?: any;
    flags?: any;
    name: string;
    width: number;
    height: number;
    bulletColor?: number;
    bulletLight?: number;
    faction: string;
    spell?: spell;
    damage?: damageInfo;
    lifetime: number;
    passthrough?: boolean;
    noSprite?: boolean;
    hit?: string;
    trail?: boolean;
    source?: number;
    dmgMult?: number;
    dmgBoost?: number;
    bulletSpin?: number;
    hitevents?: KinkyDungeonEvent[];
    effectTile?: effectTileRef;
    effectTileDurationMod?: number;
    playerEffect?: any;
    summon?: Record<string, any>;
    blockType?: string[];
    followPlayer?: boolean;
    followCaster?: number;
    cancelCaster?: number;
    dot?: boolean;
    cast?: SubCastInfo;
    events?: KinkyDungeonEvent[];
    block?: number;
    volatile?: boolean;
    volatilehit?: boolean;
    targetX?: number;
    targetY?: number;
    effectTileTrail?: effectTileRef;
    effectTileDurationModTrail?: number;
    effectTileTrailAoE?: number;
    noEnemyCollision?: boolean;
    alwaysCollideTags?: string[];
    nonVolatile?: boolean;
    noDoubleHit?: boolean;
    pierceEnemies?: boolean;
    piercing?: boolean;
    origin?: Record<string, number>;
    range?: number;
    NoMsg?: boolean;
    aoe?: number;
    noise?: number;
    blockhit?: number;
    blockTypehit?: string[];
    effectTileLinger?: effectTileRef;
    effectTileDurationModLinger?: number;
    aoetype?: string;
}
interface shrineListing {
    type: string;
    quest: string;
    x: number;
    y: number;
}
interface KDMapDataType {
    RespawnQueue: {
        faction: string;
        enemy: string;
    }[];
    SpecialAreas: {
        x: number;
        y: number;
        radius: number;
    }[];
    mapX: number;
    mapY: number;
    RepopulateQueue: RepopQueueData[];
    Checkpoint: string;
    Title: string;
    PrisonState: string;
    enemyTags: string[];
    ExpStair: Record<string, number>;
    PrisonStateStack: string[];
    PrisonType: string;
    ShrineList: shrineListing[];
    LairsToPlace: string[];
    PotentialEntrances: LairEntrance[];
    UsedEntrances: Record<string, LairEntrance>;
    Labels: Record<string, KDLabel[]>;
    flags?: string[];
    data: Record<string, any>;
    Regiments: Record<string, number>;
    GroundItems: {
        x: number;
        y: number;
        name: string;
        amount?: number;
    }[];
    Grid: string;
    Traffic: number[][];
    GridWidth: number;
    GridHeight: number;
    FogGrid: any[];
    FogMemory: any[];
    Tiles: Record<string, any>;
    TilesAlternate: Record<string, any>;
    TilesSkin: Record<string, any>;
    TilesMemory: Record<string, any>;
    EffectTiles: Record<string, Record<string, effectTile>>;
    RandomPathablePoints: Record<string, {
        x: number;
        y: number;
        tags?: string[];
    }>;
    Entities: entity[];
    Bullets: KDBullet[];
    StartPosition: {
        x: number;
        y: number;
    };
    EndPosition: {
        x: number;
        y: number;
    };
    ShortcutPositions: Record<string, {
        x: number;
        y: number;
    }>;
    PatrolPoints: {
        x: number;
        y: number;
    }[];
    MapBrightness: number;
    ConstantX: boolean;
    RoomType: string;
    MapMod: string;
    EscapeMethod: string;
    KillTarget: string;
    KillQuota: number;
    TrapQuota: number;
    TrapsTriggered: number;
    ChestQuota: number;
    ChestsOpened: number;
    QuestQuota: number;
    QuestsAccepted: number;
    KeyQuota: number;
    KeysHeld: number;
    JailPoints: KDJailPoint[];
    ShopItems: shopItem[];
    PoolUses: number;
    PoolUsesGrace: number;
    CategoryIndex: Record<string, {
        category: string;
        tags: string[];
    }>;
    JailFaction: string[];
    GuardFaction: string[];
    MapFaction: string;
    clickHeadpatted: boolean;
    PerkShrines: string[];
    SelectedPerk: number;
}
type KDSideRoom = {
    name: string;
    faction?: string;
    weight: number;
    tags?: string[];
    hidden?: boolean;
    chance: number;
    filter: (slot: KDJourneySlot, side: boolean) => number;
    mapMod: string;
    altRoom: string;
    escapeMethod?: string;
    stairCreation: (tile: any, x: number, y: number) => boolean;
    wandertags: Record<string, number>;
    worldGenScript?: (coord: WorldCoord) => void;
    beforeWorldGenScript?: (coord: WorldCoord) => void;
};
type MapMod = {
    name: string;
    roomType: string;
    jailType?: string;
    guardType?: string;
    weight: number;
    filter: (slot: KDJourneySlot) => number;
    tags: string[];
    faction?: string;
    tagsOverride?: string[];
    bonusTags: Record<string, {
        bonus: number;
        mult: number;
    }>;
    spawnBoxes?: any[];
    bonussetpieces?: {
        Type: string;
        Weight: number;
    }[];
    altRoom: string;
    worldGenScript?: (coord: WorldCoord) => void;
    beforeWorldGenScript?: (coord: WorldCoord) => void;
    escapeMethod?: string;
    noPersistentPrisoners?: boolean;
    noPersistentSpawn?: boolean;
};
type AIType = {
    noOverride?: boolean;
    override?: Record<string, string>;
    strictwander?: boolean;
    guard?: boolean;
    ambush?: boolean;
    ambushtile?: string;
    init: (enemy: entity, player: entity, aidata: KDAIData) => void;
    beforemove: (enemy: entity, player: entity, aidata: KDAIData) => boolean;
    chase: (enemy: entity, player: entity, aidata: KDAIData) => boolean;
    trackvisibletarget: (enemy: entity, player: entity, aidata: KDAIData) => boolean;
    persist: (enemy: entity, player: entity, aidata: KDAIData) => boolean;
    move: (enemy: entity, player: entity, aidata: KDAIData) => boolean;
    follower: (enemy: entity, player: entity, aidata: KDAIData) => boolean;
    followsound: (enemy: entity, player: entity, aidata: KDAIData) => boolean;
    wander_near: (enemy: entity, player: entity, aidata: KDAIData) => boolean;
    wander_far: (enemy: entity, player: entity, aidata: KDAIData) => boolean;
    wandernear_func?: (enemy: entity, player: entity, aidata: KDAIData) => boolean;
    wanderfar_func?: (enemy: entity, player: entity, aidata: KDAIData) => boolean;
    resetguardposition: (enemy: entity, player: entity, aidata: KDAIData) => boolean;
    attack: (enemy: entity, player: entity, aidata: KDAIData) => boolean;
    spell: (enemy: entity, player: entity, aidata: KDAIData) => boolean;
    aftermove: (enemy: entity, player: entity, aidata: KDAIData) => boolean;
    afteridle?: (enemy: entity, player: entity, aidata: KDAIData) => boolean;
    wanderDelay_long?: (enemy: entity, aidata?: KDAIData) => number;
    wanderDelay_short?: (enemy: entity, aidata?: KDAIData) => number;
};
interface KDRuneCountData {
    maxRunes: number;
    runes: number;
    explodeChance: number;
    runeList: any[];
}
interface KDAITriggerData {
    playAllowed?: boolean;
    aggressive?: boolean;
    playerDist?: number;
    allowPlayExceptionSub?: boolean;
    ignoreNoAlly?: boolean;
    ignoreCombat?: boolean;
    canTalk?: boolean;
}
interface KDAIData extends KDAITriggerData {
    playerItems?: item[];
    player?: entity;
    canTalk?: boolean;
    defeat?: boolean;
    idle?: boolean;
    moved?: boolean;
    refreshWarningTiles?: boolean;
    ignore?: boolean;
    harmless?: boolean;
    hostile?: boolean;
    allied?: boolean;
    domMe?: boolean;
    hitsfx?: string;
    highdistraction?: boolean;
    distracted?: boolean;
    bindLevel?: number;
    ignoreLocks?: boolean;
    MovableTiles?: string;
    AvoidTiles?: string;
    attack?: string;
    range?: number;
    width?: number;
    accuracy?: number;
    damage?: string;
    power?: number;
    vibe?: boolean;
    leashing?: boolean;
    addLeash?: boolean;
    targetRestraintLevel?: number;
    addMoreRestraints?: boolean;
    canAggro?: boolean;
    wantsToAttack?: boolean;
    wantsToTease?: boolean;
    canTease?: boolean;
    canAttack?: boolean;
    wantsToCast?: boolean;
    wantsToLeash?: boolean;
    focusOnLeash?: boolean;
    moveTowardPlayer?: boolean;
    SlowLeash?: boolean;
    intentToLeash?: boolean;
    leashed?: boolean;
    holdStillWhenNear?: boolean;
    leashPos?: {
        x: number;
        y: number;
    };
    nearestJail?: KDJailPoint;
    master?: entity;
    kiteChance?: number;
    kite?: boolean;
    ignoreRanged?: boolean;
    patrolChange?: boolean;
    allyFollowPlayer?: boolean;
    dontFollow?: boolean;
    visionMod?: number;
    followRange?: number;
    visionRadius?: number;
    chaseRadius?: number;
    blindSight?: number;
    sneakMult?: number;
    directionOffset?: number;
    playerDistDirectional?: number;
    canSensePlayer?: boolean;
    canSeePlayer?: boolean;
    canSeePlayerChase?: boolean;
    canSeePlayerMedium?: boolean;
    canSeePlayerClose?: boolean;
    canSeePlayerVeryClose?: boolean;
    canShootPlayer?: boolean;
    playChance?: number;
    startedDialogue?: boolean;
    playEvent?: boolean;
}
interface KDJailRestraint {
    Name: string;
    Level: number;
    Variant?: string;
    Condition?: string;
    Priority?: string;
    Lock?: string;
}
type KDEventDataBoolean = KDEventTriggerDataPoint | KDAIData;
interface KDEventTriggerDataPoint {
    point: KDPoint;
    radius: number;
    target: entity;
}
type EnemyEvent = {
    overrideIgnore?: boolean;
    forceattack?: boolean;
    aggressive?: boolean;
    nonaggressive?: boolean;
    play?: boolean;
    noplay?: boolean;
    noMassReset?: boolean;
    decideAttack?: (enemy: entity, target: entity, AIData: KDEventDataBoolean, allied: boolean, hostile: boolean, aggressive: boolean) => boolean;
    decideSpell?: (enemy: entity, target: entity, AIData: KDEventDataBoolean, allied: boolean, hostile: boolean, aggressive: boolean) => boolean;
    weight: (enemy: entity, AIData: KDEventDataBoolean, allied: boolean, hostile: boolean, aggressive: boolean) => number;
    trigger: (enemy: entity, AIData: KDEventDataBoolean) => void;
    arrive?: (enemy: entity, AIData: KDEventDataBoolean) => boolean;
    maintain?: (enemy: entity, delta: number, AIData?: KDEventDataBoolean) => boolean;
    beforeMove?: (enemy: entity, AIData: KDEventDataBoolean, delta: number) => boolean;
    beforeAttack?: (enemy: entity, AIData: KDEventDataBoolean, delta: number) => boolean;
    beforeSpell?: (enemy: entity, AIData: KDEventDataBoolean, delta: number) => boolean;
};
type KDLockType = {
    specialActions?: (tile: any, entity: entity) => void;
    canNPCPass: (xx: number, yy: number, MapTile: object, Enemy: entity) => boolean;
    filter: (Guaranteed: boolean, Floor: number, AllowGold: boolean, Type: string, data: any) => boolean;
    weight: (Guaranteed: boolean, Floor: number, AllowGold: boolean, Type: string, data: any) => number;
    consume_key: boolean;
    lockmult: number;
    penalty?: Record<string, number>;
    pickable: boolean;
    hackPick?: boolean;
    pick_speed: number;
    pick_diff: number;
    pick_lim?: number;
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
    levelStart: (item: any) => void;
    shrineImmune: boolean;
    commandlevel: number;
    commandable: boolean;
    command_lesser: () => number;
    command_greater: () => number;
    command_supreme: () => number;
    entityCanUnlock: (entity: entity, player: entity, data: KDLockEntityCanUnlockData) => boolean;
    entityDoUnlock: (entity: entity, player: entity, data: KDLockEntityDoUnlockData) => boolean;
    entityRemoveKeys: (entity: entity, player: entity, data: KDLockEntityDoUnlockData) => void;
    loot_special: boolean;
    loot_locked: boolean;
};
interface KDLockEntityCanUnlockData {
    entity: entity;
    player?: entity;
    query?: boolean;
    override?: boolean;
}
interface KDLockEntityDoUnlockData {
    entity: entity;
    player?: entity;
    item: item | NPCRestraint;
}
type KDBondageStatus = {
    silence: number;
    bind: number;
    slow: number;
    blind: number;
    disarm: number;
    reduceaccuracy: number;
    toy: number;
    plug: number;
    belt: number;
    immobile: number;
};
type KDMapTile = {
    Labels?: Record<string, KDLabel[]>;
    name: string;
    w: number;
    h: number;
    primInd: string;
    index: Record<string, string>;
    flexEdge?: Record<string, string>;
    flexEdgeSuper?: Record<string, string>;
    scale: number;
    category: string;
    weight: number;
    grid: string;
    POI: any[];
    Keyring?: any[];
    Jail: any[];
    Tiles: Record<string, any>;
    effectTiles: Record<string, Record<string, effectTile>>;
    Skin: Record<string, any>;
    inaccessible: {
        indX1: number;
        indY1: number;
        dir1: string;
        indX2: number;
        indY2: number;
        dir2: string;
    }[];
    tags: string[];
    forbidTags?: string[];
    requireTags?: string[];
    indexTags: string[];
    maxTags: number[];
    bonusTags: number[];
    multTags: number[];
    notTags?: any[];
};
interface KDBondage {
    helpImmune?: boolean;
    color: string;
    enemyBondageMult: number;
    priority: number;
    struggleRate: number;
    healthStruggleBoost: number;
    powerStruggleBoost: number;
    mageStruggleBoost?: number;
    latex?: boolean;
}
interface KDCursedVar {
    variant: (restraint: restraint, newRestraintName: string) => any;
    level: number;
}
interface KDDelayedAction {
    data: any;
    time: number;
    tick: number;
    maxtime: number;
    commit: string;
    update?: string;
    tags: string[];
}
interface KDBondageMachineFunc {
    eligible_player: (tile: any, x: number, y: number, entity: entity) => boolean;
    eligible_enemy: (tile: any, x: number, y: number, entity: entity) => boolean;
    function_player: (tile: any, delta: number, x: number, y: number, entity: entity) => boolean;
    function_enemy: (tile: any, delta: number, x: number, y: number, entity: entity) => boolean;
}
interface KDDroppedItemProp {
    tinyness?: number;
    persistent?: boolean;
}
type KDParticleData = {
    camX?: number;
    camY?: number;
    zIndex: number;
    fadeEase?: string;
    time: number;
    phase?: number;
    scale?: number;
    scale_delta?: number;
    width?: number;
    height?: number;
    rotation?: number;
    rotation_spread?: number;
    vy?: number;
    vy_spread?: number;
    vx?: number;
    vx_spread?: number;
    sin_period?: number;
    sin_period_spread?: number;
    sin_x?: number;
    sin_x_spread?: number;
    sin_y?: number;
    sin_y_spread?: number;
    lifetime: number;
    lifetime_spread?: number;
};
type KDParticleEmitterData = {
    rate: number;
    cd: number;
    camX?: number;
    camY?: number;
    width?: number;
    height?: number;
    zIndex: number;
    fadeEase?: string;
    time: number;
    phase?: number;
    scale?: number;
    scale_delta?: number;
    rotation?: number;
    rotation_spread?: number;
    noFace?: boolean;
    vy?: number;
    vy_spread?: number;
    vx?: number;
    vx_spread?: number;
    sin_period?: number;
    sin_period_spread?: number;
    sin_x?: number;
    sin_x_spread?: number;
    sin_y?: number;
    sin_y_spread?: number;
    lifetime: number;
    lifetime_spread?: number;
};
interface KDCursedDef {
    blockable?: boolean;
    noShrine?: boolean;
    lock?: boolean;
    powerMult?: number;
    powerBoost?: number;
    activatecurse?: boolean;
    customIcon_RemoveFailure?: string;
    customIcon_RemoveSuccess?: string;
    customIcon_hud?: string;
    shrineRemove?: string[];
    level: number;
    weight: (item: any, allHex?: any) => number;
    customStruggle?: (item: item, Curse?: string) => void;
    customInfo?: (item: item, Curse?: string) => void;
    onApply?: (item: item, host?: item) => void;
    condition: (item: item) => boolean;
    remove: (item: item, host: item, specialMethod: boolean) => boolean | void;
    events?: KinkyDungeonEvent[];
    entityCanUnlock: (entity: entity, player: entity, data: KDLockEntityCanUnlockData) => boolean;
    entityDoUnlock: (entity: entity, player: entity, data: KDLockEntityDoUnlockData) => boolean;
}
type KDRestraintVariant = {
    prefix?: string;
    suffix?: string;
    curse?: string;
    lock?: string;
    events: KinkyDungeonEvent[];
    template: string;
    noKeep?: boolean;
    power?: number;
};
type KDWeaponVariant = {
    prefix?: string;
    suffix?: string;
    events: KinkyDungeonEvent[];
    template: string;
};
type KDConsumableVariant = {
    prefix?: string;
    suffix?: string;
    events: KinkyDungeonEvent[];
    template: string;
};
interface KDSpellComponent {
    ignore: (spell: spell, x: number, y: number) => boolean;
    check: (spell: spell, x: number, y: number) => boolean;
    cast?: (spell: spell, data: any) => void;
    stringShort: (ret: string) => string;
    stringLong: (spell: spell) => string;
    partialMiscastChance: (spell: spell, x: number, y: number) => number;
    partialMiscastType: (spell: spell, x: number, y: number) => string;
}
type SpecialCondition = {
    resetCD: boolean;
    criteria: (enemy: entity, AIData: KDAIData) => boolean;
};
type KDEventData_affinity = {
    entity: entity;
    forceTrue: number;
    forceFalse: number;
    affinity: string;
    group: string;
    Message: boolean;
    canStand: boolean;
    msgedstand: boolean;
    groupIsHigh: boolean;
};
type KDEventData_PostApply = {
    player: entity;
    item: item | null;
    host: item;
    keep: boolean;
    Link: boolean;
    UnLink: boolean;
};
type KDEventData_PostApplyNPC = {
    player: entity;
    newitem: NPCRestraint;
    slotsToFill: string[];
    itemslot: string;
    looseitems: item[];
    keep: boolean;
    Link: boolean;
    UnLink: boolean;
    container: Record<string, item>;
    localEntity: entity;
    NPCRestraintEvents: Record<string, NPCRestraint>;
};
type KDEventData_CurseCount = {
    restraints: {
        item: item;
        host: item;
    }[];
    count: number;
    activatedOnly: boolean;
};
interface KDExpressionType {
    EyesPose: string;
    Eyes2Pose: string;
    BrowsPose: string;
    Brows2Pose: string;
    BlushPose: string;
    MouthPose: string;
    FearPose?: string;
}
interface KDExpressionPoseType {
    Arms: string;
    Legs: string;
    Eyes: string;
    Eyes2: string;
    Brows: string;
    Brows2: string;
    Blush: string;
    Mouth: string;
    Fear?: string;
}
type KDExpression = {
    priority: number;
    stackable?: boolean;
    criteria: (C: any, flags: Map<string, number>) => boolean;
    expression: (C: any, flags: Map<string, number>) => KDExpressionType;
};
interface KDPrisonState {
    name: string;
    substate?: boolean;
    substateTimeout?: number;
    refreshState?: string;
    init: (MapParams: floorParams) => string;
    update: (delta: number) => string;
    updateStack?: (delta: number) => void;
    finally?: (delta: number, currentState: string, stackPop: boolean) => void;
}
interface KDPrisonType {
    name: string;
    states: Record<string, KDPrisonState>;
    starting_state: string;
    default_state: string;
    update: (delta: number) => string | void;
}
interface KDPresetLoadout {
    weapon_current: string;
    weapon_other: string;
    armor: string[];
}
interface KDTrainingRecord {
    turns_trained: number;
    turns_skipped: number;
    turns_total: number;
    best_ratio: number;
    training_points: number;
    training_stage: number;
}
interface KDRopeType {
    tags: string[];
}
interface KDSealGroup {
    arousalMode?: boolean;
    level: number;
    disallowGreater?: boolean;
    disallowLesser?: boolean;
    seals: KDSeal[];
}
interface KDSFXGroup {
    sfxEscape?: {
        Struggle?: string;
        Cut?: string;
        Remove?: string;
        Pick?: string;
        Unlock?: string;
        NoStamina?: string;
        NoWill?: string;
        NoMagic?: string;
        MagicCut?: string;
        PickBreak?: string;
        KnifeBreak?: string;
        KnifeDrop?: string;
        KeyDrop?: string;
        PickDrop?: string;
        Blocked?: string;
    };
    sfxFinishEscape?: {
        Struggle?: string;
        Cut?: string;
        Remove?: string;
        Pick?: string;
        Unlock?: string;
        Destroy?: string;
    };
    sfxRemove?: string;
    sfx?: string;
}
interface KDEnemyActionType {
    holdleash?: boolean;
    sprint?: boolean;
    end?: (enemy: any) => void;
    filter?: (enemy: any) => boolean;
    maintain: (enemy: any, delta: any) => boolean;
}
interface KDSeal {
    name: string;
    aura: HexColor;
    aurasprite: string;
    events: KinkyDungeonEvent[];
}
interface KDBoobyTrap {
    minlevel: number;
    filter: (enemy: entity, x: number, y: number, checkpoint: boolean, type: string[]) => boolean;
    weight: (enemy: entity, x: number, y: number, checkpoint: boolean, type: string[]) => number;
    lifetime?: number;
}
interface ApplyVariant {
    nonstackable?: boolean;
    hexes: string[];
    enchants: string[];
    level: number;
    powerBonus: number;
    curse?: string;
    noKeep?: boolean;
    prefix?: string;
    suffix?: string;
    minfloor: number;
    maxfloor?: number;
}
interface SpecialStat {
    PerFloor: (player: entity, amount: number) => number;
    BuffEvents?: (player: entity) => KinkyDungeonEvent[];
    BuffTags?: string[];
}
declare enum PosNeutNeg {
    positive = 1,
    neutral = 0,
    negative = -1
}
declare enum ModifierEnum {
    restraint = 0,
    weapon = 1,
    consumable = 2
}
interface KDEnchantmentType {
    level: number;
    filter: (item: string, allEnchant: string[], data: KDHexEnchantWeightData) => boolean;
    weight: (item: string, allEnchant: string[], data: KDHexEnchantWeightData) => number;
    events: (item: string, Loot: any, curse: string, primaryEnchantment: string, enchantments: string[], data?: KDHexEnchantEventsData) => KinkyDungeonEvent[];
}
interface KDHexEnchantEventsData {
    variant: {
        events: KinkyDungeonEvent[];
        template: string;
    };
}
interface KDHexEnchantWeightData {
    item: string;
}
interface KDEnchantment {
    tags: string[];
    prefix?: string;
    suffix?: string;
    types: Record<ModifierEnum, KDEnchantmentType>;
}
interface KDModifierConditionData {
    element?: string;
    elementdmg?: string;
    Loot: string;
    curse: string;
    primaryEnchantment: string;
    enchantments: string[];
}
interface KDModifierEffectType {
    level: number;
    onSelect?: (item: string, data: KDModifierConditionData) => void;
    filter: (item: string, positive: PosNeutNeg, data: KDModifierConditionData) => boolean;
    weight: (item: string, positive: PosNeutNeg, data: KDModifierConditionData) => number;
    events: (item: string, positive: PosNeutNeg, data: KDModifierConditionData) => KinkyDungeonEvent[];
}
interface KDModifierEffect {
    tags: string[];
    types: Record<ModifierEnum, KDModifierEffectType>;
}
interface KDModifierConditionType {
    level: number;
    filter: (item: string, effect_positive: KDModifierEffect[], effect_neutral: KDModifierEffect[], effect_negative: KDModifierEffect[], data: KDModifierConditionData) => boolean;
    weight: (item: string, effect_positive: KDModifierEffect[], effect_neutral: KDModifierEffect[], effect_negative: KDModifierEffect[], data: KDModifierConditionData) => number;
    events: (item: string, effect_positive: KDModifierEffect[], effect_neutral: KDModifierEffect[], effect_negative: KDModifierEffect[], data: KDModifierConditionData) => KinkyDungeonEvent[];
}
interface KDModifierCondition {
    tags: string[];
    types: Record<ModifierEnum, KDModifierConditionType>;
}
interface KDSpecialEnemyBuff {
    filter: (enemy: entity, type: string[]) => boolean;
    weight: (enemy: entity, type: string[]) => number;
    apply: (enemy: entity, type: string[]) => void;
}
type KDCommanderOrderData = {
    delta: number;
    VavgWeight: number;
    globalIgnore: boolean;
    fleeThresh: number;
    combat: boolean;
    aggressive: boolean;
    invalidChoke: Record<string, boolean>;
};
interface KDCommanderOrder {
    struggleAssist?: boolean;
    capturer?: boolean;
    filter: (enemy: entity, data: KDCommanderOrderData) => boolean;
    weight: (enemy: entity, data: KDCommanderOrderData) => number;
    apply: (enemy: entity, data: KDCommanderOrderData) => void;
    maintain: (enemy: entity, data: KDCommanderOrderData) => boolean;
    update: (enemy: entity, data: KDCommanderOrderData) => boolean | void;
    remove: (enemy: entity, data: KDCommanderOrderData) => void;
    global_before: (data: KDCommanderOrderData) => void;
    global_after: (data: KDCommanderOrderData) => void;
}
type KDCollectionTabDrawDef = (value: KDCollectionEntry, buttonSpacing: number, III: number, x: number, y: number) => number;
interface KDCollectionEntry {
    name: string;
    refreshSprite?: boolean;
    origname?: string;
    color: string;
    type: string;
    sprite: string;
    Facility: string;
    customSprite: boolean;
    escaped?: boolean;
    escapegrace?: boolean;
    personality: string;
    Palette?: string;
    metadata: KDOutfitMetadata;
    spawned?: boolean;
    id: number;
    Enemy?: enemy;
    flags?: Record<string, number>;
    customOutfit?: string;
    outfit?: string;
    hairstyle?: string;
    bodystyle?: string;
    facestyle?: string;
    cosplaystyle?: string;
    status: string;
    oldstatus: string;
    class: string;
    Faction: string;
    Opinion: number;
    Training: number;
    Willpower: number;
}
interface KDFactionProps {
    jailFaction?: string;
    jailRoom?: string;
    lairType?: string;
    nameList?: string[];
    honor: number;
    honor_specific: Record<string, number>;
    weight: (Floor: number, Checkpoint: string, tags: string[], bonustags: Record<string, {
        bonus: number;
        mult: number;
    }>, X: number, Y: number) => number;
    customHiSecDialogue?: (guard: entity) => string;
    customDefeat?: string;
    jailAlliedFaction?: string;
    jailBackupFaction?: string;
    jailOutfit: string;
}
type KDJailGetGroupsReturn = {
    groupsToStrip: string[];
    itemsToApply: {
        item: string;
        variant: string;
    }[];
    itemsToKeep: Record<string, boolean>;
    itemsToStrip: Record<string, boolean>;
};
interface KDLeashData {
    priority: number;
    length: number;
    x: number;
    y: number;
    entity?: number;
    reason?: string;
    restraintID?: number;
    color?: string;
}
type Lore = {
    condition?: () => boolean;
    image?: string;
    noShow?: boolean;
};
type KDJourneySlot = {
    visited: boolean;
    x: number;
    y: number;
    color: string;
    type: string;
    RoomType: string;
    MapMod: string;
    EscapeMethod: string;
    Faction: string;
    SideRooms: string[];
    HiddenRooms: Record<string, boolean>;
    Checkpoint: string;
    Connections: {
        x: number;
        y: number;
    }[];
    protected?: boolean;
};
type KDJourneyMap = {
    [_: string]: KDJourneySlot;
};
type outfit = {
    name: string;
    dress: string;
    shop: boolean;
    rarity: number;
    events?: KinkyDungeonEvent[];
    costMod?: number;
    palette?: string;
};
type KDTile = any;
type KDTrapType = (tile: KDTile, entity: entity, x: number, y: number) => {
    msg: string;
    triggered: boolean;
};
type KDSprites = {
    [_: string]: (x: number, y: number, fog: boolean, noReplace: string) => string;
};
type KDTeaseAttackListsType = {
    [_: string]: string[];
};
type KDTeaseAttacksType = {
    [_: string]: KDTeaseAttack;
};
type KDTeaseAttack = {
    name: string;
    priority: number;
    blockable: boolean;
    dodgeable: boolean;
    filter: (enemy: entity, player: entity, AIData: KDAIData) => boolean;
    apply: (enemy: entity, player: entity, AIData: KDAIData, blocked: boolean, evaded: boolean, damageMod: number) => boolean;
};
type KDPlayerTitle = {
    rapid?: boolean;
    unlockCondition: Function;
    priority: number;
    color: string;
    titleActive: Function;
    titleActivate: Function;
    titleDeactivate: Function;
    category: string;
    icon: string;
};
type KDPlayerTitleData = {
    sub?: boolean;
    dom?: boolean;
    lampstolen?: boolean;
};
declare const zip: any;
declare const guessLanguage: {
    detect(text: string): string;
    info(text: string): [string, string, string];
    code(text: string): [number];
    name(text: string): string;
};
declare const PIXI: typeof import('pixi.js') & typeof import('pixi.js-legacy') & {
    filters: typeof import('pixi-filters');
};
type PIXIContainer = import('pixi.js').Container;
type PIXIMesh = import('pixi.js').Mesh;
type PIXIRenderTexture = import('pixi.js').RenderTexture;
type PIXITexture = import('pixi.js').Texture;
type PIXIText = import('pixi.js').Text;
type PIXISprite = import('pixi.js').Sprite;
type PIXIPlane = import('pixi.js').SimplePlane;
type PIXIBuffer = import('pixi.js').Buffer;
type IArrayBuffer = import('pixi.js').IArrayBuffer;
type PIXIArray = import('pixi.js').ITypedArray;
type PIXIAdjustmentFilter = import('pixi-filters').AdjustmentFilter;
type PIXIFilter = import('pixi.js').Filter;
type PIXIMatrix = import('pixi.js').Matrix;
type PIXIPoint = import('pixi.js').Point;
type PIXIRenderer = import('pixi.js').Renderer;
type ISpriteMaskTarget = import('pixi.js').ISpriteMaskTarget;
type PIXICLEAR_MODES = import('pixi.js').CLEAR_MODES;
type PIXIFilterSystem = import('pixi.js').FilterSystem;
type PIXIUnresolvedAsset = any;
declare enum PosePriConditions {
    rotation = 0,
    offset_x = 1,
    offset_y = 2,
    offset_either = 3
}
type PoseMod = {
    Layer: string;
    offset_x?: number;
    offset_y?: number;
    scale_x?: number;
    scale_y?: number;
    rotation_x_anchor?: number;
    rotation_y_anchor?: number;
    rotation?: number;
};
type PoseProperty = {
    filter_pose?: string[];
    rotation?: number;
    rotation_x_anchor?: number;
    rotation_y_anchor?: number;
    pri_rotation?: number;
    offset_y?: number;
    offset_x?: number;
    offset_xFlip?: number;
    pri_offsetx?: number;
    pri_offsety?: number;
    greedy_offset?: boolean;
    mods?: PoseMod[];
    greedy_mod_conditions?: PosePriConditions[];
    global_default?: string;
    flip?: boolean;
};
type MeshWarpData = any;
type MeshWarp = {
    intensityFunction?: (C: Character, MC: ModelContainer, data: MeshWarpData) => number;
    LayerGroups: {
        [_: string]: string;
    };
    filter_pose?: string[];
    BasicMesh?: {
        [_: string]: number[];
    };
    pri_basic?: number;
};
interface Model extends Namable {
    Name: string;
    Folder: string;
    Layers: Record<string, ModelLayer>;
    Protected?: boolean;
    SuperProtected?: boolean;
    Restraint?: boolean;
    Group?: string;
    RemovePoses?: string[];
    Categories: string[];
    TopLevel?: boolean;
    Parent?: string;
    Parent2?: string[];
    AddPose?: string[];
    AddPoseConditional?: Record<string, string[]>;
    AddPoseIf?: Record<string, string[]>;
    HideLayers?: string[];
    HideLayerGroups?: string[];
    DefaultColor?: string[];
    Filters?: Record<string, LayerFilter>;
    Properties?: Record<string, LayerPropertiesType>;
    factionFilters?: Record<string, FactionFilterDef>;
    LockType?: string;
    ImportBodyFilters?: boolean;
}
interface ModelLayer extends Namable {
    Name: string;
    Layer: string;
    Folder?: string;
    Pri?: number;
    Sprite?: string;
    LockLayer?: boolean;
    SwapLayerPose?: Record<string, string>;
    PrependLayerPrefix?: Record<string, string>;
    SwapPriorityPose?: Record<string, number>;
    Poses?: Record<string, boolean>;
    DisplacementPoses?: string[];
    CancelDisplacementPoses?: string[];
    DisplacementPosesExclude?: string[];
    ErasePosesExclude?: string[];
    DisplacementSprite?: string;
    DisplaceLayers?: Record<string, boolean>;
    DisplaceLayerGroups?: Record<string, boolean>;
    DisplacementMorph?: Record<string, string>;
    DisplaceAmount?: number;
    DisplaceZBonus?: number;
    NoDisplace?: boolean;
    OccludePoses?: string[];
    OccludePosesExclude?: string[];
    OccludeLayers?: Record<string, boolean>;
    OccludeAmount?: number;
    ImportColorFromGroup?: string[];
    ImportColorFromCategory?: string[];
    EraseSprite?: string;
    CancelErasePoses?: string[];
    ErasePoses?: string[];
    EraseLayers?: Record<string, boolean>;
    EraseLayerGroups?: Record<string, boolean>;
    EraseMorph?: Record<string, string>;
    EraseAmount?: number;
    EraseZBonus?: number;
    NoErase?: boolean;
    EraseInvariant?: boolean;
    HidePoseConditional?: string[][];
    RequirePoses?: Record<string, boolean>;
    HidePoses?: Record<string, boolean>;
    MorphPoses?: Record<string, string>;
    GlobalDefaultOverride?: Record<string, boolean>;
    DisplacementSources?: string[];
    DisplacementVeto?: string[];
    NoDispVetoOptIn?: boolean;
    DisplaceSource?: string[];
    DisplaceOptIn?: boolean[];
    NoAppendDisplacement?: boolean;
    NoAppendErase?: boolean;
    AppendPose?: Record<string, string>;
    AppendPoseMulti?: Record<string, string>;
    AppendPoseRequire?: Record<string, boolean>;
    HidePrefixPose?: string[];
    HidePrefixPoseSuffix?: string[];
    HideWhenOverridden?: boolean;
    HideOverrideLayer?: string;
    HideOverrideLayerMulti?: string[];
    ForceSingleOverride?: boolean;
    CrossHideOverride?: boolean;
    DontAlwaysOverride?: boolean;
    NoOverride?: boolean;
    TieToLayer?: string;
    Invariant?: boolean;
    DisplacementInvariant?: boolean;
    NoOffsetDisplacement?: boolean;
    NoOffsetErase?: boolean;
    ApplyFilterToLayerGroup?: Record<string, boolean>;
    ApplyFilter?: string;
    NoColorize?: boolean;
    InheritColor?: string;
    OffsetX?: number;
    OffsetY?: number;
    AnchorModX?: number;
    AnchorModY?: number;
    AddPriWithPose?: Record<string, number>;
}
type LayerFilter = {
    gamma: number;
    saturation: number;
    contrast: number;
    brightness: number;
    red: number;
    green: number;
    blue: number;
    alpha: number;
};
type LayerPropertiesType = {
    LayerBonus?: number;
    XOffset?: number;
    YOffset?: number;
    XPivot?: number;
    YPivot?: number;
    Rotation?: number;
    XScale?: number;
    YScale?: number;
    Protected?: number;
    SuppressDynamic?: number;
    HideOverridden?: number;
    NoOverride?: number;
    ExtraHidePoses?: string[];
    ExtraRequirePoses?: string[];
    ExtraHidePrefixPose?: string[];
    ExtraHidePrefixPoseSuffix?: string[];
    AddPose?: string[];
    DontAddPose?: string[];
    DisplaceAmount?: number;
    EraseAmount?: number;
    NoLoss?: string;
    HideRestraintsTags?: string[];
};
interface Namable {
    Name: string;
}
declare const StandalonePatched = true;
declare const ArcadeDeviousChallenge = false;
declare const ChatRoomCharacter: Character[];
declare const ChatRoomChatLog: {
    Garbled: string;
    Time: number;
    SenderName: string;
}[];
declare const DialogGamingPreviousRoom: string;
declare const MiniGameReturnFunction: string;
declare function ReputationGet(RepType: string): number;
declare function DialogSetReputation(a: string, b: number): void;
declare let ChatRoomCharacterUpdate: (C: Character) => void;
declare function ChatRoomPublishCustomAction(msg: string, LeaveDialog: boolean, Dictionary: any): void;
declare const TypedItemDataLookup: {
    [_: string]: any;
};
declare const ModularItemDataLookup: {
    [_: string]: any;
};
declare function TypedItemSetOption(C: PlayerCharacter, item: Item, options: any, option: any, push?: boolean): void;
declare function TypedItemSetOptionByName(a: Character, b: Item, c: string, d: boolean): void;
declare function ExtendedItemSetType(C: any, Options: any, Option: any): void;
declare function ExtendedItemExit(): void;
declare let MiniGameVictory: boolean;
declare function InventoryRemove(C: Character, AssetGroup: string, Refresh?: boolean): void;
declare function InventoryGetLock(Lock: Item): any;
declare function InventoryWear(C: Character, AssetName: any, AssetGroup: any, ItemColor?: any, Difficulty?: undefined, MemberNumber?: undefined, Craft?: undefined, Refresh?: boolean): void;
declare function InventoryLock(C: Character, Item: Item, Lock: string, MemberNumber: number, Update?: boolean): void;
declare function InventoryUnlock(C: Character, Item: string): void;
declare let KDPatched: boolean;
declare let ServerURL: string;
declare function ServerSend(Message: string, Data: any): void;
declare function ServerPlayerIsInChatRoom(): boolean;
declare function CharacterAppearanceLoadCharacter(C: Character): void;
declare function CharacterChangeMoney(C: Character, amount: number): void;
declare function DrawImage(Image: string, X: number, Y: number, Invert?: boolean): boolean;
declare let CharacterAppearanceBuildCanvas: (C: Character) => void;
declare let CharacterRefresh: (C: Character, push?: boolean) => void;
declare let DefaultPlayer: PlayerCharacter;
declare let KeyPress: number | string;
declare let CurrentModule: string;
declare let CurrentScreen: string;
declare let CurrentCharacter: Character | null;
declare let CurrentOnlinePlayers: number;
declare let CurrentDarkFactor: number;
declare let CommonIsMobile: boolean;
declare let CommonCSVCache: {
    [_: string]: string[][];
};
declare let CutsceneStage: number;
declare let CommonPhotoMode: boolean;
declare let GameVersion: string;
declare const GameVersionFormat: RegExp;
declare let CommonVersionUpdated: boolean;
declare let CommonTouchList: any;
declare const CommonChatTags: {
    SOURCE_CHAR: string;
    DEST_CHAR: string;
    DEST_CHAR_NAME: string;
    TARGET_CHAR: string;
    TARGET_CHAR_NAME: string;
    ASSET_NAME: string;
};
declare const CommonFontStacks: {
    Arial: (string | string[])[];
    TimesNewRoman: (string | string[])[];
    Papyrus: (string | string[])[];
    ComicSans: (string | string[])[];
    Impact: (string | string[])[];
    HelveticaNeue: (string | string[])[];
    Verdana: (string | string[])[];
    CenturyGothic: (string | string[])[];
    Georgia: (string | string[])[];
    CourierNew: (string | string[])[];
    Copperplate: (string | string[])[];
};
declare function CommonIsNumeric(n: any): boolean;
declare function CommonGetFormatDate(): string;
declare function CommonDetectMobile(): boolean;
declare function CommonGetBrowser(): {
    Name: string;
    Version: string;
};
declare function CommonParseCSV(str: string): string[][];
declare function CommonGet(Path: string, Callback: (this: XMLHttpRequest, xhr: XMLHttpRequest) => void, RetriesLeft?: number): void;
declare function CommonGetRetry(Path: string, Callback: (this: XMLHttpRequest, xhr: XMLHttpRequest) => void, RetriesLeft?: number): void;
declare function CommonClick(event: MouseEvent | TouchEvent): void;
declare function CommonTouchActive(X: number, Y: number, W: number, H: number, TL: any): boolean;
declare function CommonKeyDown(event: KeyboardEvent): void;
declare function CommonDynamicFunction(FunctionName: string): void;
declare function CommonDynamicFunctionParams(FunctionName: string): any;
declare function CommonCallFunctionByName(FunctionName: string, ...args: any): any;
declare function CommonCallFunctionByNameWarn(FunctionName: string, ...args: any): any;
declare function CommonSetScreen(NewModule: string, NewScreen: string): void;
declare function CommonTime(): number;
declare function CommonIsColor(Value: string): boolean;
declare function CommonColorIsValid(Color: any): boolean;
declare function CommonRandomItemFromList<T>(ItemPrevious: T, ItemList: T[]): T;
declare function UIItemFromList<T>(ItemPrevious: T, ItemList: T[]): T;
declare function CommonColorsEqual(C1: string | string[], C2: string | string[]): boolean;
declare function CommonArraysEqual(a1: any[], a2: any[]): boolean;
declare function CommonPackItemArray(arr: {
    Group: string;
    Name: string;
    Type?: string | null;
}[]): {
    [group: string]: {
        [name: string]: string[];
    };
};
declare function CommonUnpackItemArray(arr: {
    [group: string]: {
        [name: string]: string[];
    };
}): {
    Group: string;
    Name: string;
    Type?: string;
}[];
declare function CommonDeepEqual(obj1: any, obj2: any): boolean;
declare function CommonArrayConcatDedupe<T>(dest: T[], src: T[]): T[];
declare function CommonNoop(): void;
declare function CommonGetServer(): string;
declare let MouseX: number;
declare let MouseY: number;
declare function MouseIn(Left: number, Top: number, Width: number, Height: number): boolean;
declare function PointIn(X: number, Y: number, Left: number, Top: number, Width: number, Height: number): boolean;
declare function MouseXIn(Left: number, Width: number): boolean;
declare function MouseYIn(Top: number, Height: number): boolean;
declare function MouseHovering(Left: number, Top: number, Width: number, Height: number): boolean;
declare let MainCanvas: CanvasRenderingContext2D;
declare let TempCanvas: CanvasRenderingContext2D;
declare let ColorCanvas: CanvasRenderingContext2D;
declare let CharacterCanvas: CanvasRenderingContext2D;
declare let BlindFlash: boolean;
declare let DrawingBlindFlashTimer: number;
declare const DrawCacheImage: Map<string, HTMLImageElement>;
declare let DrawCacheLoadedImages: number;
declare let DrawCacheTotalImages: number;
declare let DrawLastDarkFactor: number;
declare let DrawLastCharacters: Character[];
declare let DrawHoverElements: Function[];
declare function DrawHexToRGB(color: string): RGBColor;
declare function DrawRGBToHex(color: number[]): string;
declare let PIXICanvas: any;
declare function DrawLoad(): void;
declare function DrawGetImageOnLoad(): void;
declare function DrawGetImageOnError(Img: HTMLImageElement & {
    errorcount?: number;
}, IsAsset: boolean): void;
declare function DrawCircle(CenterX: number, CenterY: number, Radius: number, LineWidth: number, LineColor: string, FillColor?: string, Canvas?: CanvasRenderingContext2D): void;
declare function DrawProgressBar(x: number, y: number, w: number, h: number, value: number, foreground?: string, background?: string): void;
declare function DrawProcess(time: number): void;
declare function DrawProcessHoverElements(): void;
declare let Character: Character[];
declare let CharacterNextId: number;
declare function CharacterReset(CharacterID: number): Character;
declare function CharacterAddPose(C: Character, NewPose: string): void;
declare function CharacterItemsHavePoseAvailable(C: Character, Type: string | undefined, Pose: string): boolean;
declare function CharacterDoItemsSetPose(C: Character, pose: string, excludeClothes?: boolean): boolean;
declare function CharacterNaked(C: Character): void;
declare function CharacterSetActivePose(C: Character, NewPose: string, ForceChange?: boolean): void;
declare function CharacterSetFacialExpression(C: Character, AssetGroup: string, Expression: string, Timer?: number, Color?: string | string[]): void;
declare function CharacterResetFacialExpression(C: Character): void;
declare function CharacterGetCurrent(): Character | null;
declare function CharacterNickname(C: Character): string;
declare function CharacterLoadNPC(id: number, Name: string, Palette?: string, customColors?: Record<string, Record<string, LayerFilter>>): Character;
declare function LoadNPC(id: number, Name: string, metadata: KDOutfitMetadata): Character;
declare function CharacterReleaseTotal(C: Character): void;
declare class TextResPathGenerator {
    static readonly BASE_PATH = "Screens/MiniGame/KinkyDungeon";
    private file_path;
    private file_prefix;
    constructor(base_path: string, file_prefix: string);
    genOriginalPath(): string;
    genTranslationPath(language: string): string;
    genTranslationMap(allowed_languages: LanguageIdentifier[]): Map<LanguageIdentifier, ResourceUrl>;
}
type ResourceLoadOptions = {
    requestInit?: RequestInit;
    signal?: AbortSignal;
    nocache?: boolean;
    retries?: number;
};
type ResourceParser<T> = (response: Response) => Promise<T>;
declare class ResourceLoader {
    private static cache;
    private static parserRegistry;
    static registerParser<T>(type: string, parser: ResourceParser<T>): void;
    static load<T>(url: string, type: string, options?: ResourceLoadOptions): Promise<T>;
    private static fetchWithRetry;
}
declare class TranslationTextParser {
    static parseLines(text: string): string[];
    static parseTranslationText(text: string): LocalizationResources;
}
declare const AvaliableLanguages: readonly ["EN", "CN", "DE", "ES", "JP", "KR", "RU"];
type LanguageIdentifier = (typeof AvaliableLanguages)[number];
declare const NormalSupportedLanguages: ("CN" | "DE" | "ES" | "JP" | "KR" | "RU")[];
type TextResKey = string;
type TextResValue = string;
type TextResMap = Map<TextResKey, TextResValue>;
type LocalizationResources = {
    textTranslationMap: TextResMap;
    tagTranslationMap: TextResMap;
};
type TextGroupId = string;
type ResourceUrl = string;
declare class TextGroupManager {
    private sourceTextGroupMap;
    setGroup(groupId: TextGroupId, sourceText: TextResMap): void;
    removeGroup(groupId: TextGroupId): void;
    getGroup(groupId: TextGroupId): TextResMap;
    appendTextMap(groupId: TextGroupId, sourceText: TextResMap): void;
    appendText(groupId: TextGroupId, key: TextResKey, value: TextResValue): void;
    private mergeMaps;
}
declare class LocalizationService {
    private currentLanguage;
    private localizationMap;
    getCurrentTranslation(): LocalizationResources | null;
    setTranslation(language: LanguageIdentifier, translation: LocalizationResources): void;
    appendTranslation(language: LanguageIdentifier, translation: LocalizationResources): void;
    private mergeLocalizationResources;
    translate(tag: TextResKey, text: TextResValue): string | null;
    setLanguage(lang: LanguageIdentifier): Promise<void>;
}
type LocalizationFileUrlMap = Map<LanguageIdentifier, ResourceUrl>;
type TextResourceConfig = {
    groupId: TextGroupId;
    original: ResourceUrl;
    localizationDictionary: LocalizationFileUrlMap;
    lazyLoad?: boolean;
};
type TemplateParams = {
    [key: string]: string | number | boolean;
};
declare class TextResourceLoader<T> {
    private resourcePromiseCache;
    private abortController;
    pushLoad(url: ResourceUrl, loadType: string): Promise<T>;
    abortAll(): void;
    isLoaded(): boolean;
    clearCache(): void;
    waitAll(): Promise<void>;
}
declare class TextProvider {
    private static _instance;
    readonly defaultGroupId = "default";
    private _debugMode;
    private currentLanguage;
    private textGroupManager;
    private translationServiceGroup;
    private originalTextLoader;
    private translationTextLoader;
    private textResourceConfig;
    private constructor();
    private initializeDefaultConfig;
    setDebugMode(debug: boolean): void;
    static get instance(): TextProvider;
    getText(tag: string, params?: TemplateParams, legacy?: boolean): string;
    hasText(tag: string, params?: TemplateParams): boolean;
    queryResourceConfig(groupId: TextGroupId): TextResourceConfig[];
    appendTextResource(config: TextResourceConfig): void;
    getTextFromGroup(groupId: TextGroupId, tag: string, params?: TemplateParams, legacy?: boolean): string;
    getTextFromGroupStrict(groupId: TextGroupId, tag: string, params?: TemplateParams): string;
    getTranslationService(groupId: TextGroupId): LocalizationService;
    getGroupManager(): TextGroupManager;
    loadAndSetupOriginalText(groupId: TextGroupId, url: ResourceUrl): void;
    loadAndSetupTranslationText(groupId: TextGroupId, url: ResourceUrl, language: LanguageIdentifier): void;
    setLanguage(language: LanguageIdentifier): void;
    readyAll(): Promise<TextProvider>;
    static applyTemplate(text: string, params: TemplateParams): string;
}
declare const textProvider: TextProvider;
declare function TextGet(TextTag: string, params?: TemplateParams): string;
declare function HasText(TextTag: string, params?: TemplateParams): boolean;
declare function TextLoad(): void;
declare function addTextKey(Name: string, Text: string): void;
declare function InventoryGet(C: Character, AssetGroup: string): Item | null;
declare let KDTextBoxStyle: {
    backgroundColor: string;
    fontFamily: string;
    fontSize: string;
    color: string;
    lineHeight: number;
};
interface documentCacheObject_KD {
    x: number;
    y: number;
}
declare let documentcache: Map<Element, documentCacheObject_KD>;
declare function ElementValue(ID: string, Value?: string | null): string;
declare function ElementContent(ID: string, Content?: string): string;
declare function ElementCreateTextArea(ID: string): void;
declare function ElementCreateInput(ID: string, Type: string, Value: string, MaxLength?: string): HTMLInputElement | undefined;
declare function ElementCreateRangeInput(id: string, value: number, min: number, max: number, step: number, thumbIcon?: string, vertical?: boolean): HTMLInputElement;
declare function ElementCreateDropdown(ID: string, Options: string[], ClickEventListener?: EventListenerOrEventListenerObject): void;
declare function ElementCloseAllSelect(elmnt: object): void;
declare function ElementCreateDiv(ID: string): void;
declare function ElementRemove(ID: string): void;
declare function ElementPosition(ElementID: string, X: number, Y: number, W: number, H?: number): void;
declare function ElementPositionFix(ElementID: string, Font: number, X: number, Y: number, W: number, H: number): void;
declare function ElementSetDataAttribute(ID: string, Name: string, Value: string): void;
declare function ElementSetAttribute(ID: string, Name: string, Value: string): void;
declare function ElementScrollToEnd(ID: string): void;
declare function ElementGetScrollPercentage(ID: string): number | null;
declare function ElementIsScrolledToEnd(ID: string): boolean;
declare function ElementFocus(ID: string): void;
declare function ElementToggleGeneratedElements(Screen: string, ShouldDisplay: boolean): void;
declare let TranslationLanguage: string;
declare let TranslationCache: Record<string, string[]>;
declare function TranslationLoad(): void;
declare function GetUserPreferredLanguage(): any;
declare function KDLoadTranslations(text1: string, text2?: string): void;
declare let CharacterAppearancePreviousEmoticon: any;
declare function CharacterAppearanceSetDefault(C: Character): void;
declare function DefaultOutfitMetadata(): KDOutfitMetadata;
declare function CharacterAppearanceNaked(C: Character): void;
declare function CharacterAppearanceSetItem(C: Character, Group: string, ItemAsset: any, NewColor: string | string[], DifficultyFactor?: number, ItemMemberNumber?: number, Refresh?: boolean): void;
declare function CharacterAppearanceStringify(C: Character, metadata: KDOutfitMetadata): string;
declare function AppearanceItemStringify(Item: Item[]): string;
declare function CharacterAppearanceRestore(C: Character, backup: string, clothesOnly?: boolean, noProtected?: boolean): void;
declare function KDRefreshSelectedModel(C: Character): void;
declare function AppearanceItemParse(stringified: string): Item[];
declare function AppearanceCleanup(C: Character): void;
declare enum KDModifierEnum {
    restraint = 0,
    looserestraint = 0,
    weapon = 1,
    consumable = 2
}
declare const cloneDeep: (obj: any) => any;
declare const defaultRestraint: restraint;
declare function KinkyDungeonCreateRestraint(props: KDRestraintProps, displayName?: string, flavorText?: string, functionText?: string): restraint;
declare let KDCursedVariantsCreated: Record<string, Record<string, number>>;
declare function KinkyDungeonAddCursedVariants(Restraint: restraint, Variants: string[]): void;
declare function KinkyDungeonGetCurses(Restraint: string, includeOrig?: boolean, minLevel?: number, maxLevel?: number): string[];
declare function KinkyDungeonGetVariantEffectByList(List: string | string[], Type: ModifierEnum, minLevel?: number, maxLevel?: number): string[];
declare function KinkyDungeonGetVariantEffectByListWeighted(List: string | string[], Type: ModifierEnum, item: string, data: KDModifierConditionData, minLevel?: number, maxLevel?: number, positive?: PosNeutNeg): Record<string, number>;
declare function KinkyDungeonGetVariantConditionByList(List: string | string[], Type: ModifierEnum, minLevel?: number, maxLevel?: number): string[];
declare function KinkyDungeonGetVariantConditionByListWeighted(List: string | string[], Type: ModifierEnum, item: string, data: KDModifierConditionData, minLevel?: number, maxLevel?: number, effect_positive?: KDModifierEffect[], effect_neutral?: KDModifierEffect[], effect_negative?: KDModifierEffect[]): Record<string, number>;
declare function KDGenerateEffectConditionPair(ListEffect: string | string[], ListCondition: string | string[], Type: ModifierEnum, item: string, minLevel: number, maxLevel: number, pos: PosNeutNeg, data: KDModifierConditionData): KinkyDungeonEvent[];
declare function KinkyDungeonGetHexByList(List: string | string[], includeOrig?: boolean, minLevel?: number, maxLevel?: number): string[];
declare function KinkyDungeonGetHexByListWeighted(List: string | string[], item: string, includeOrig?: boolean, minLevel?: number, maxLevel?: number, allHex?: string[]): Record<string, number>;
declare function KinkyDungeonGetEnchantmentsByList(List: string | string[], Type: ModifierEnum, includeOrig?: boolean, minLevel?: number, maxLevel?: number): string[];
declare function KinkyDungeonGetEnchantmentsByListWeighted(List: string | string[], Type: ModifierEnum, item: string, includeOrig?: boolean, minLevel?: number, maxLevel?: number, allEnchant?: string[]): Record<string, number>;
declare function KinkyDungeonGetWeaponsByList(List: string | string[], includeOrig?: boolean, minRarity?: number, maxRarity?: number): string[];
declare function KinkyDungeonGetWeaponsByListWeighted(WeaponList: string, includeOrig?: boolean, minRarity?: number, maxRarity?: number): Record<string, number>;
declare function KinkyDungeonGetCurseByList(List: string | string[], includeOrig?: boolean, minLevel?: number, maxLevel?: number): string[];
declare function KinkyDungeonGetCurseByListWeighted(List: string | string[], item: string, includeOrig?: boolean, minLevel?: number, maxLevel?: number): Record<string, number>;
declare function KinkyDungeonCloneRestraint(clonedName: string, newName: string, props: object): restraint;
declare function KinkyDungeonAddRestraintText(name: string, displayName: string, flavorText: string, functionText: string): void;
declare function KinkyDungeonDupeRestraintText(restraint: string, newRestraint: string): void;
declare function HasPerk(perk: string): boolean;
declare function KDPlayer(): entity;
declare let KDShaders: {
    Adjust: {
        code: string;
    };
    Kawase: {
        code: string;
    };
    Darkness: {
        code: string;
    };
    FogFilter: {
        code: string;
    };
    MultiplyFilter: {
        code: string;
    };
    GammaFilter: {
        code: string;
    };
    Solid: {
        code: string;
    };
};
type KDAS_Result = {
    action: string;
    id: string;
    result: string;
    favorability: number;
    delay: number;
};
type KDAS_Action = {
    action: string;
    id: string;
    group: string;
    index: number;
};
type KDAutoStruggleDataType = {
    lastTick: number;
    lastActionQueue: KDAS_Result[];
    decidedAction: string;
    possibleActions: {
        action: KDAS_Action;
        weight: number;
    }[];
    totalDespair: Record<string, number>;
    currentFocusGroup: string;
    currentFocusIndex: number;
    currentFocusDespair: number;
    currentFocusDespairTarget: number;
    overallDespair: number;
    lastDelay: number;
    wigglePoint: KDPoint;
    wiggleDist: number;
};
declare let KDAutoStruggleData: KDAutoStruggleDataType;
declare let KDAutoStruggleActions: Record<string, {
    itemweight?: (player: entity, item: item) => number;
    playerweight?: (player: entity) => number;
    action: (player: entity) => KDAS_Result;
}>;
declare function KDInitAutoStruggle(): void;
declare function KDAS_UpdateWigglePoint(player: entity, force?: boolean): void;
declare function KDAS_InWigglePoint(player: entity): boolean;
declare function KDAS_GetMovableWigglePoint(player: entity, goCloser: boolean): KDPoint[];
declare function KDAS_SwitchFavor(result: string): number;
declare function KDAS_SwitchDelay(result: string): number;
declare function KDHandleAutoStruggle(player: entity): void;
declare function KDAutoStruggleEvaluate(player: entity): void;
declare function KDAutoStruggleMakeDecision(_player: entity): void;
declare function KDAutoStruggleRunDecision(player: entity): KDAS_Result;
declare function KDAutoWaitIndexID(_player: entity, group: string, index: number, action: string): string;
declare let KDClassReqs: Record<string, () => boolean>;
declare let KDClassSynonyms: {
    Mage: string;
};
declare let KDNoMulticlass: {};
declare let KDClassStart: Record<string, (start: boolean) => void>;
declare let KinkyDungeonClassModeChoice: string;
declare function KDDrawClasses(xOffset?: number, yOffset?: number, filter?: (kurasu: string) => boolean, redout?: (kurasu: string) => string, img?: (kurasu: string) => string, click?: (kurasu: string) => boolean): boolean;
declare let KDParticles: Map<Number, {
    info: any;
    sprite: any;
}>;
declare let KDParticleid: number;
declare let KDParticleEmitters: Map<Number, {
    emitted: any;
    emitter: any;
    sprite: any;
    type: any;
    img: string;
}>;
declare let KDParticleEmitterid: number;
declare function KDAddParticle(x: number, y: number, img: string, _type: string, data: KDParticleData): void;
declare function KDAddParticleEmitter(x: number, y: number, img: string, imgemitted: string, type: string, emitter: KDParticleEmitterData, emitted: KDParticleData): void;
declare function KDUpdateParticles(main_delta: number): void;
declare function KDRemoveParticle(id: number): void;
declare function KDRemoveParticleEmitter(id: number): void;
declare let lastArousalParticle: number;
declare let lastVibeParticle: number;
declare function KDDrawArousalParticles(pinkChance: number, density: number, purpleChance: number): void;
declare function KDDrawVibeParticles(density: number): void;
declare function KDAddShockwave(x: number, y: number, size: number, spr?: string, attachToCamera?: boolean): void;
declare function KDSendGagParticles(entity: entity): void;
declare function KDCreateVibeParticle(): void;
declare function KDCreateArousalParticle(pinkChance: number, purpleChance: number): void;
declare let KDLocks: Record<string, KDLockType>;
declare function KDCyberHostile(player: entity): boolean;
declare function KDCyberAccess(player: entity): boolean;
declare function KDCyberLink(player: entity): boolean;
declare function KDTryHack(player: entity): boolean;
declare function KDCyberUnlock(data: any, base?: number): boolean;
declare function KDCyberActions(_data: any, player: entity, base: number): void;
declare let KDELEMENTS: string[];
declare let KDSPELLELEMENTS: string[];
declare let KDSPELLELEMENTSMAP: {
    fire: string;
    water: string;
    earth: string;
    air: string;
    electric: string;
    ice: string;
};
declare let KDELEMENTSMAP: {
    fire: string;
    soap: string;
    crush: string;
    stun: string;
    electric: string;
    ice: string;
};
declare let KDModifierEffectVariantList: {
    Common: string[];
};
declare let KDModifierConditionVariantList: {
    Common: string[];
};
declare let KDModifierEffects: Record<string, KDModifierEffect>;
declare let KDModifierConditions: Record<string, KDModifierCondition>;
declare function KDGenericEffects(item: string, type: ModifierEnum, pos: KDModifierEffect[], neut: KDModifierEffect[], neg: KDModifierEffect[], data: KDModifierConditionData): KinkyDungeonEvent[];
declare let KDBaseCursedVars: string[];
declare let KDHexVariantList: {
    Base: string[];
    BaseWithSkimpy: string[];
    BaseWithShibari: string[];
    BaseWithSkimpyShibari: string[];
    Common: string[];
    Dragon: string[];
    CursedCollar: string[];
    CursedCollar2: string[];
};
declare let KDEventHexModular: Record<string, {
    level: number;
    weight: (item: string, allHex: string[], data: KDHexEnchantWeightData) => number;
    events: (data: KDHexEnchantEventsData) => KinkyDungeonEvent[];
}>;
declare let KDEnchantVariantList: {
    Common: string[];
    Pair: string[];
    GenDmg: string[];
    Mana: string[];
    Damage: string[];
    Gold: string[];
    Dragon: string[];
    CommonWeapon: string[];
    CommonTrinket: string[];
};
declare function KDGenericMultEnchantmentAmount(amt: number, _item: string, Loot: any, curse: string, primaryEnchantment: string): number;
declare function KDNormalizedMultEnchantmentAmount(amt: number, _item: string, Loot: any, curse: string, primaryEnchantment: string): number;
declare let KDEventEnchantmentModular: Record<string, KDEnchantment>;
declare function KDGetItemPower(item: string): number;
declare function KDGetItemRarity(item: string): number;
declare function KDEnchantDetermineKind(_item: string, _Loot: any, _curse: string, _primaryEnchantment: string, _enchantments: string[], data: KDHexEnchantEventsData, types: string[]): string;
declare let KDAIType: Record<string, AIType>;
declare let KDLoadouts: Record<string, KDLoadout>;
declare let KDApplyVariants: Record<string, ApplyVariant>;
declare const KDMarketRateDecay = 0.98;
declare function KDCalcMarketDecayMultiplier(qty_previous: number, qty_this: number, rate?: number): number;
declare let KDInventoryAction: Record<string, KDInventoryActionDef>;
declare function KDInventoryActionContainer(player: entity): KDContainer;
declare let KinkyDungeonPlayerEntity: any;
declare let KDBaseBalanceDmgLevel: number;
declare let KDShadowThreshold: number;
declare let KDSleepWillFraction: number;
declare let KDSleepWillFractionJail: number;
declare function KDGetSleepWillRegenHealthTo(): number;
declare function KDCanSleep(x: number, y: number): boolean;
declare function KDGetAltSleep(x: number, y: number): string;
declare function KDGetPreferredAltSleepType(): string;
declare function KDCanSleepTooltip(x: number, y: number): string;
declare function KDSleep(entity?: entity, amount?: number): void;
declare function KDSleepTick(): void;
declare let KDOrgAfterglowTime: number;
declare let KDShieldRatio: number;
declare let KDMaxStat: number;
declare let KDMaxStatStart: number;
declare let KDMaxStatStartPool: number;
declare let KDStamDamageThresh: number;
declare let KDStamDamageThreshBonus: number;
declare let KinkyDungeonStatDistractionMax: number;
declare let KDDistractionLowerPercMult: number;
declare let KinkyDungeonStatDistractionLower: number;
declare let KinkyDungeonStatDistractionLowerCap: number;
declare let KinkyDungeonStatDistractionLowerDecayTo: number;
declare let KinkyDungeonStatDistractionLowerDecayRate: number;
declare let KinkyDungeonStatArousalLowerRegenSleep: number;
declare let KinkyDungeonDistractionUnlockSuccessMod: number;
declare let KinkyDungeonStatDistraction: number;
declare let KinkyDungeonCrotchRopeDistraction: number;
declare let KinkyDungeonStatDistractionRegen: number;
declare let KinkyDungeonStatDistractionRegenPerUpgrade: number;
declare let KDNoUnchasteBraMult: number;
declare let KDNoUnchasteMult: number;
declare let KDDistractionDecayMultDistractionMode: number;
declare let KDDistractedAmount: number;
declare let KinkyDungeonStatDistractionMiscastChance: number;
declare let KinkyDungeonMiscastChance: number;
declare let KinkyDungeonVibeLevel: number;
declare let KinkyDungeonTeaseLevel: number;
declare let KinkyDungeonTeaseLevelBypass: number;
declare let KinkyDungeonOrgasmVibeLevel: number;
declare let KinkyDungeonDistractionPerVibe: number;
declare let KinkyDungeonDistractionPerPlug: number;
declare let KinkyDungeonVibeCostPerIntensity: number;
declare let KinkyDungeonStatWillpowerExhaustion: number;
declare let KinkyDungeonSleepTurnsMax: number;
declare let KinkyDungeonStatStaminaMax: number;
declare let KinkyDungeonStatStamina: number;
declare let KinkyDungeonStatStaminaRegen: number;
declare let KinkyDungeonStatStaminaRegenPerUpgrade: number;
declare let KinkyDungeonStatStaminaRegenPerUpgradeWill: number;
declare let KDNarcolepticRegen: number;
declare let KinkyDungeonStatStaminaRegenJail: number;
declare let KinkyDungeonStatStaminaRegenSleep: number;
declare let KinkyDungeonStatStaminaRegenSleepBedMultiplier: number;
declare let KinkyDungeonStatStaminaRegenWait: number;
declare let KinkyDungeoNStatStaminaLow: number;
declare let KDSprintCostBase: number;
declare let KDSprintCostSlowLevel: number[];
declare let KDSprintAdjustSlowed: number;
declare let KinkyDungeonStatWillMax: number;
declare let KinkyDungeonStatWill: number;
declare let KinkyDungeonStatWillRate: number;
declare let KinkyDungeonStatManaMax: number;
declare let KinkyDungeonStatMana: number;
declare let KinkyDungeonStatManaPool: number;
declare let KinkyDungeonStatManaPoolMax: number;
declare let KDManaPoolRatio: number;
declare let KinkyDungeonStatManaRate: number;
declare let KinkyDungeonStatManaRegen: number;
declare let KinkyDungeonStatManaLowRegen: number;
declare let KDMeditationRegen: number;
declare let KinkyDungeonStatManaRegenLowThreshold: number;
declare let KinkyDungeonStatManaPoolRegen: number;
declare let KinkyDungeonStatStaminaRegenPerSlowLevel: number;
declare let KinkyDungeonStatStaminaCostStruggle: number;
declare let KinkyDungeonStatStaminaCostRemove: number;
declare let KinkyDungeonStatStaminaCostTool: number;
declare let KinkyDungeonStatStaminaCostPick: number;
declare let KinkyDungeonStatWillCostStruggle: number;
declare let KinkyDungeonStatWillCostRemove: number;
declare let KinkyDungeonStatWillCostTool: number;
declare let KinkyDungeonStatWillCostPick: number;
declare let KinkyDungeonStatWillCostUnlock: number;
declare let KinkyDungeonStatWillCostEscape: number;
declare let KinkyDungeonStatWillBonusEscape: number;
declare let KinkyDungeonStaminaRate: number;
declare let KinkyDungeonStatBeltLevel: number;
declare let KinkyDungeonStatPlugLevel: number;
declare let KinkyDungeonPlugCount: number;
declare let KinkyDungeonStatVibeLevel: number;
declare let KinkyDungeonStatEdged: boolean;
declare let KinkyDungeonStatDistractionGainChaste: number;
declare let KinkyDungeonSlowLevel: number;
declare let KinkyDungeonBlindLevelBase: number;
declare let KinkyDungeonBlindLevel: number;
declare let KinkyDungeonStatBlind: number;
declare let KinkyDungeonStatFreeze: number;
declare let KinkyDungeonStatBind: number;
declare let KinkyDungeonDeaf: boolean;
declare let KinkyDungeonSleepiness: number;
declare let KinkyDungeonSleepinessMax: number;
declare let KinkyDungeonGold: number;
declare let KinkyDungeonHasCrotchRope: boolean;
declare let KinkyDungeonTorsoGrabChance: number;
declare let KinkyDungeonTorsoGrabChanceBonus: number;
declare let KinkyDungeonWeaponGrabChance: number;
declare let KinkyDungeonInventory: Map<string, Map<string, item>>;
declare function KDInitInventory(): void;
declare let KinkyDungeonPlayerTags: Map<string, boolean>;
declare let NPCTags: Map<Character, Map<string, boolean>>;
declare let KDEntityRestraintMetadata: Map<number, EntityRestraintMetadata>;
interface EntityRestraintMetadata {
    blockedtags: Record<string, number>;
}
declare let KinkyDungeonCurrentDress: string;
declare let KinkyDungeonUndress: number;
declare let KinkyDungeonSpells: spell[];
declare let KinkyDungeonPlayerBuffs: Record<string, KDBuff>;
declare let KinkyDungeonPlayers: any[];
declare let KinkyDungeonDifficulty: number;
declare let KinkyDungeonSubmissiveMult: number;
declare let KinkyDungeonSpellPoints: number;
declare function KinkyDungeonDefaultStats(_Load?: any): void;
declare function KinkyDungeonGetVisionRadius(): number;
declare function KDEntitySenses(entity: entity): {
    radius: number;
    mult: number;
    vision: number;
    visionmult: number;
    blindsight: number;
};
declare function KDDeafLevel(): number;
declare function KinkyDungeonGetHearingRadius(entity?: entity): {
    radius: number;
    mult: number;
};
declare function KDIsAutoAction(): boolean;
declare function KDCancelAutoWait(): void;
declare function KDDisableAutoWait(): void;
declare function KinkyDungeonInterruptSleep(): void;
declare let KDBaseDamageTypes: {
    knockbackTypes: string[];
    knockbackTypesStrong: string[];
    arouseTypes: string[];
    bypassTeaseTypes: string[];
    distractionTypesWeakNeg: string[];
    distractionTypesWeak: string[];
    distractionTypesStrong: string[];
    teaseTypes: string[];
    staminaTypesWeak: string[];
    staminaTypesStrong: string[];
    manaTypesWeak: string[];
    manaTypesStrong: any[];
    willTypesVeryWeak: string[];
    willTypesWeak: string[];
    willTypesStrong: string[];
};
declare function KDGetStamDamageThresh(): number;
declare function KDBulletAlreadyHit(bullet: KDBullet, entity: entity, suppressAdd?: boolean): boolean;
interface damageInfoMinor {
    damage: number;
    type: string;
    time?: number;
    flags?: string[];
    src?: string;
    srctype?: string;
    srctrig?: string;
    distract?: number;
    crit?: number;
    addBind?: boolean;
    bindcrit?: number;
    bind?: number;
    bindType?: string;
    noInterrupt?: boolean;
}
interface damageInfo extends damageInfoMinor {
    name?: string;
    flags?: string[];
    time?: number;
    bind?: number;
    bindEff?: number;
    sfx?: string;
    crit?: number;
    bindcrit?: number;
    bindType?: string;
    distract?: number;
    distractEff?: number;
    desireMult?: number;
    addBind?: boolean;
    realBind?: boolean;
    nodisarm?: boolean;
    nocrit?: boolean;
    noblock?: boolean;
    evadeable?: boolean;
    nokill?: boolean;
    armormult?: number;
    ignoreshield?: boolean;
    boundBonus?: number;
    novulnerable?: boolean;
    tease?: boolean;
    shield_crit?: boolean;
    shield_stun?: boolean;
    shield_freeze?: boolean;
    shield_bind?: boolean;
    shield_snare?: boolean;
    shield_slow?: boolean;
    shield_distract?: boolean;
    shield_vuln?: boolean;
    bindTags?: string[];
    power?: number;
}
declare function KDDoPerkDamageTypeChanges(data: any): void;
declare function KinkyDungeonDealDamage(Damage: damageInfoMinor, bullet?: KDBullet, noAlreadyHit?: boolean, noInterrupt?: boolean, noMsg?: boolean, src?: string): {
    happened: number;
    string: string;
};
declare function KinkyDungeonUpdateDialogue(entity: entity, delta: number): void;
declare function KinkyDungeonSendDialogue(entity: entity, dialogue: string, color: string, duration: number, priority: number, force?: boolean, nooverride?: boolean): void;
declare let KDOrigStamina: number;
declare let KDOrigMana: number;
declare let KDOrigWill: number;
declare let KDOrigCharge: number;
declare let KDOrigBalance: number;
declare let KDOrigDistraction: number;
declare let KDOrigDesire: number;
declare function KDChangeDistraction(src: string, type: string, trig: string, Amount: number, NoFloater?: boolean, lowerPerc?: number, minimum?: number, noEvent?: boolean): number;
declare function KDChangeDesire(src: string, type: string, trig: string, Amount: number, NoFloater: boolean): number;
declare function KDChangeStamina(src: string, type: string, trig: string, Amount: number, NoFloater?: boolean, Pause?: number, NoSlow?: boolean, minimum?: number, slowFloor?: number, Regen?: boolean): void;
declare function KDChangeMana(src: string, type: string, trig: string, Amount: number, NoFloater?: boolean, PoolAmount?: number, Pause?: boolean, spill?: boolean, minimum?: number): void;
declare function KDChangeWill(src: string, type: string, trig: string, Amount: number, NoFloater?: boolean, minimum?: number): number;
declare function KDChangeBalanceSrc(src: string, type: string, trig: string, Amount: number, NoFloater: boolean): number;
declare function KDChangeCharge(src: string, type: string, trig: string, Amount: number, NoFloater?: boolean): void;
declare function KinkyDungeonHasStamina(Cost: number, AddRate?: boolean): boolean;
declare function KinkyDungeonHasWill(Cost: number, AddRate?: boolean): boolean;
declare function KinkyDungeonHasMana(Cost: number, AddRate?: boolean): boolean;
declare function KinkyDungeonSetMaxStats(delta?: any): {
    distractionRate: number;
    staminaRate: number;
};
declare function KinkyDungeonCanUseWeapon(NoOverride?: boolean, e?: boolean, weapon?: weapon): boolean;
declare let KDBlindnessCap: number;
declare let KDBoundPowerLevel: number;
declare let KDNoRegenFlag: boolean;
declare function KDGetDistractionRate(delta: number): number;
declare function KDGetDistractionDesireRate(): number;
declare function KinkyDungeonUpdateStats(delta: number): void;
declare let KDDamageAmpPerks: number;
declare let KDDamageAmpPerksMelee: number;
declare let KDDamageAmpPerksMagic: number;
declare let KDDamageAmpPerksSpell: number;
declare let KDDamageAmpEnvironmental: number;
declare let KDExtraEnemyTags: Record<string, any>;
declare function KDGetEnvironmentalDmg(): number;
declare function KDUpdatePerksBonus(): void;
declare function KinkyDungeonCalculateMiscastChance(): void;
declare function KinkyDungeonGetBlindLevel(): number;
declare function KinkyDungeonCapStats(): void;
declare function KDIsHogtied(C?: Character): boolean;
declare function KDIsKneeling(C?: any): boolean;
declare function KinkyDungeonLegsBlocked(): number | true;
declare function KinkyDungeonCanStand(): boolean;
declare function KinkyDungeonCanKneel(): boolean;
declare function KinkyDungeonCalculateHeelLevel(_delta: number, overrideKneel?: boolean): number;
declare function KinkyDungeonCalculateSlowLevel(delta?: number): void;
declare function KinkyDungeonGagTotal(AllowFlags?: boolean, gagMult?: number): number;
declare function KDIsGaggedFast(): boolean;
declare function KinkyDungeonCanTalk(Loose?: boolean): boolean;
declare function KinkyDungeonCalculateSubmissiveMult(): number;
declare function KinkyDungeonCanPlayWithSelf(): boolean;
declare function KinkyDungeonCanTryOrgasm(): boolean;
declare function KDGetOrgasmCost(): number;
declare function KDGetPlaySelfPower(tease?: number): {
    orig: number;
    final: number;
};
declare function KinkyDungeonDoPlayWithSelf(tease?: number): number;
declare let KinkyDungeonOrgasmVibeLevelPlayPowerMult: number;
declare let KinkyDungeonOrgasmChanceBase: number;
declare let KinkyDungeonOrgasmChanceScaling: number;
declare let KinkyDungeonMaxOrgasmStage: number;
declare let KinkyDungeonOrgasmStageVariation: number;
declare let KinkyDungeonDistractionSleepDeprivationThreshold: number;
declare let KinkyDungeonDistractionPlaySelfThreshold: number;
declare let KinkyDungeonPlaySelfOrgasmThreshold: number;
declare let KinkyDungeonOrgasmTurnsMax: number;
declare let KinkyDungeonOrgasmTurnsCrave: number;
declare let KinkyDungeonPlayWithSelfPowerMin: number;
declare let KinkyDungeonPlayWithSelfPowerMax: number;
declare let KDDesireScalingOrgasmPower: number;
declare let KinkyDungeonPlayWithSelfPowerVibeWand: number;
declare let KinkyDungeonPlayWithSelfChastityPenalty: number;
declare let KinkyDungeonPlayWithSelfBoundPenalty: number;
declare let KinkyDungeonOrgasmExhaustionAmount: number;
declare let KinkyDungeonOrgasmExhaustionAmountWillful: number;
declare let KDOrgasmStageTimerMax: number;
declare let KDWillpowerInvolChanceMult: number;
declare let KDInvolChanceBase: number;
declare let KDPassionInvolChanceMult: number;
declare let KDWillpowerMultiplier: number;
declare let KinkyDungeonOrgasmCost: number;
declare let KinkyDungeonOrgasmCostPercent: number;
declare let KinkyDungeonOrgasmWillpowerCost: number;
declare let KinkyDungeonEdgeCost: number;
declare let KinkyDungeonEdgeWillpowerCost: number;
declare let KinkyDungeonPlayCost: number;
declare let KinkyDungeonOrgasmStunTime: number;
declare let KinkyDungeonPlayWithSelfMult: number;
declare function KDGetPlaySelfThreshold(): number;
declare function KinkyDungeonDoTryOrgasm(Bonus?: number, Auto?: number): void;
declare function KinkyDungeonIsChaste(Breast: boolean): boolean;
declare function KinkyDungeonChastityMult(): number;
declare function KDBuffResist(buffs: any, type: string): number;
declare function KDIsEdged(_player: entity): boolean;
declare function KDForcedToGround(): boolean;
declare function KDBalanceDmgMult(): number;
declare function KDFitnessMult(_player?: any): number;
declare function KDMentalMult(_player: entity): number;
declare function KDEnduranceMult(_player: entity): number;
declare function KDReflexMult(_player: entity): number;
declare function KDPowerMult(_player: entity): number;
declare function KDIsBlindfolded(_player: entity): boolean;
declare function KDCanHack(_player: entity): boolean;
declare function KDGetInertia(player: entity): number;
interface KDKneelData {
    baseRate: number;
    kneelRate: number;
    delta: number;
    msg: boolean;
    minKneel: number;
}
declare function KDIsGrounded(): number | boolean;
declare function KDGetKneelStats(delta: number, msg: boolean): KDKneelData;
interface KDDenialData {
    entity: entity;
    base: number;
    mult: number;
    bonus: number;
}
declare function KDGetDenialLevel(entity: entity): number;
declare let KDDenialDuration: number;
declare let KDDenialFactorBase: number;
declare let KDDenialFromDeny: number;
declare let KDDenialFromOrgasm: number;
declare let KDDenialFromEdge: number;
declare let KDDenialChangeFactor: number;
declare function KDAddDenial(entity: entity, amount: number): void;
declare let KDBaseTrainingMinRatioPercent: number;
declare let KDTrainingTypes: string[];
interface KDTrainingProps {
    color: string;
    showBuff?: boolean;
    dontShowProgress?: boolean;
    prereq: (player: entity) => boolean;
    calc_xpnext?: (player: entity) => number;
    calc_xpmax?: (player: entity) => number;
}
declare let KDTrainingTypeProperties: Record<string, KDTrainingProps>;
declare function KDGetHeelTraining(): number;
declare function KDTrip(delta: number): void;
declare function KDGetRecoverBalance(): number;
declare function KDGetBalanceRate(): number;
declare function KDTripDuration(): number;
declare function KDGetBalanceCost(): number;
declare function KDGetTrainingPercentage(name: string, data: KDTrainingRecord, player: entity, useMin?: boolean, noSoftScale?: boolean): number;
declare function KDGetTrainingMinRatioPercent(name: string, data: KDTrainingRecord, player: entity): number;
declare function KDGetTrainingMinRatioPercentTick(name: string, data: KDTrainingRecord, player: entity): number;
declare function KDAdvanceTraining(player: entity): void;
declare function KDTickTraining(Name: string, trained: boolean, skipped: boolean, total: number, bonus?: number): void;
declare let KDTrainingSoftScale: number;
declare let KDMapTilesList: Record<string, KDMapTile>;
declare let KDMapTilesListEditor: Record<string, KDMapTile>;
declare let KDTileToTest: any;
declare function KDInitTileEditor(): void;
declare let KDEditorTileIndex: string;
declare let KDEditorTileFlex: string;
declare let KDEditorTileFlexSuper: string;
declare let KDEditorTileIndexQuery: string;
declare let KDEditorTileIndexStore: Record<string, string>;
declare let KDEditorTileFlexStore: Record<string, string>;
declare let KDEditorTileFlexSuperStore: Record<string, string>;
declare let KDEditorCurrentMapTileName: string;
declare let KDEditorCurrentMapTile: any;
declare let KDTileIndices: {
    udlr: boolean;
    u: boolean;
    d: boolean;
    l: boolean;
    r: boolean;
    ud: boolean;
    lr: boolean;
    ul: boolean;
    ur: boolean;
    dl: boolean;
    dr: boolean;
    udl: boolean;
    udr: boolean;
    dlr: boolean;
    ulr: boolean;
};
declare let KDEditorTileIndexHover: string;
declare let KDEditorTileNameIndex: number;
declare let KDEditorTileBrush: string;
declare let KDEditorTileBrushIndex: number;
declare let KDEditorTileBrushIndex2: number;
declare let KDTilePalette: {
    Clear: {
        type: string;
        tile: string;
    };
    Wall: {
        type: string;
        tile: string;
    };
    WallReinforced: {
        type: string;
        tile: string;
    };
    '----Spawns----': {
        type: string;
    };
    Spawn: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: any[];
        };
    };
    SpawnGuard: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: any[];
            AI: string;
        };
    };
    Prisoner: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    SpawnLooseGuard: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: any[];
            AI: string;
        };
    };
    SpawnMiniboss: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            AI: string;
        };
    };
    SpawnBoss: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            AI: string;
        };
    };
    '----SpecifcSpawns----': {
        type: string;
    };
    SpawnStatue: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            Label: string;
            tags: string[];
        };
    };
    SpawnStatueRare: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            Label: string;
            tags: string[];
            Chance: number;
        };
    };
    SpawnObstacleDoor: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            tags: string[];
            Label: string;
        };
    };
    SpawnSoulCrys: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            tags: string[];
            Label: string;
        };
    };
    SpawnSoulCrysActive: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            tags: string[];
            Label: string;
        };
    };
    SpawnChaosCrysRare: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            tags: string[];
            Label: string;
            Chance: number;
        };
    };
    SpawnChaosCrys: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            tags: string[];
            Label: string;
        };
    };
    SpawnChaosCrysActive: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            tags: string[];
            Label: string;
        };
    };
    SpawnMushroom: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            tags: string[];
            Label: string;
        };
    };
    SpawnMushroomRare: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: string[];
            tags: string[];
            Label: string;
            Chance: number;
        };
    };
    SpawnCustom: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: any[];
            Label: string;
        };
        customfields: {
            required: {
                type: string;
            };
            tags: {
                type: string;
            };
            filterTags: {
                type: string;
            };
            Label: {
                type: string;
            };
            Chance: {
                type: string;
            };
            AI: {
                type: string;
            };
            force: {
                type: string;
            };
            faction: {
                type: string;
            };
            levelBoost: {
                type: string;
            };
            forceIndex: {
                type: string;
            };
        };
    };
    ForceSpawnCustom: {
        type: string;
        tile: string;
        special: {
            Type: string;
            required: any[];
            Label: string;
        };
        customfields: {
            required: {
                type: string;
            };
            tags: {
                type: string;
            };
            filterTags: {
                type: string;
            };
            Label: {
                type: string;
            };
            Chance: {
                type: string;
            };
            AI: {
                type: string;
            };
            force: {
                type: string;
            };
            faction: {
                type: string;
            };
            levelBoost: {
                type: string;
            };
            forceIndex: {
                type: string;
            };
        };
    };
    '----Tiles----': {
        type: string;
    };
    Brick: {
        type: string;
        tile: string;
    };
    Doodad: {
        type: string;
        tile: string;
    };
    Grate: {
        type: string;
        tile: string;
    };
    Bars: {
        type: string;
        tile: string;
    };
    Bed: {
        type: string;
        tile: string;
    };
    ClamBed: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Skin: string;
        };
    };
    Crack: {
        type: string;
        tile: string;
    };
    LatexPipe: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Skin: string;
        };
    };
    LatexThin: {
        type: string;
        effectTile: string;
    };
    LatexThinBlue: {
        type: string;
        effectTile: string;
    };
    LatexThinGreen: {
        type: string;
        effectTile: string;
    };
    Latex: {
        type: string;
        effectTile: string;
    };
    LatexPink: {
        type: string;
        effectTile: string;
    };
    LatexBlue: {
        type: string;
        effectTile: string;
    };
    LatexGreen: {
        type: string;
        effectTile: string;
    };
    WallHook: {
        type: string;
        tile: string;
    };
    CeilingHook: {
        type: string;
        tile: string;
    };
    '----Deco----': {
        type: string;
    };
    'Rubble(mend)': {
        type: string;
        effectTile: string;
    };
    'Rubble(nomend)': {
        type: string;
        effectTile: string;
    };
    Pipe: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Skin: string;
        };
    };
    InactiveTablet: {
        type: string;
        tile: string;
    };
    BrokenShrine: {
        type: string;
        tile: string;
    };
    BrokenOrb: {
        type: string;
        tile: string;
    };
    BrokenCharger: {
        type: string;
        tile: string;
    };
    Dummy0: {
        type: string;
        tile: string;
        special: {
            Type: string;
            SkinCode: string;
            Skin2: string;
        };
    };
    Dummy1: {
        type: string;
        tile: string;
        special: {
            Type: string;
            SkinCode: string;
            Skin2: string;
        };
    };
    Dummy2: {
        type: string;
        tile: string;
        special: {
            Type: string;
            SkinCode: string;
            Skin2: string;
        };
    };
    '----Doors----': {
        type: string;
    };
    Door: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    DoorAlways: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Priority: boolean;
            AlwaysClose: boolean;
        };
    };
    CyberDoor: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Priority: boolean;
            AlwaysClose: boolean;
            Lock: string;
            DoorSkin: string;
        };
    };
    Door_RedLock: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Priority: boolean;
            AlwaysClose: boolean;
            Lock: string;
        };
    };
    Door_PurpleLock: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Priority: boolean;
            AlwaysClose: boolean;
            Lock: string;
        };
    };
    Door_BlueLock: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Priority: boolean;
            AlwaysClose: boolean;
            Lock: string;
        };
    };
    AutoDoorToggle: {
        type: string;
        tile: string;
        special: {
            Type: string;
            wireType: string;
        };
    };
    AutoDoorOpenToggle: {
        type: string;
        tile: string;
        special: {
            Type: string;
            wireType: string;
        };
    };
    AutoDoorHoldOpen: {
        type: string;
        tile: string;
        special: {
            Type: string;
            wireType: string;
            Label: string;
        };
    };
    AutoDoorHoldClosed: {
        type: string;
        tile: string;
        special: {
            Type: string;
            wireType: string;
            Label: string;
        };
    };
    AutoDoorOpen: {
        type: string;
        tile: string;
        special: {
            Type: string;
            wireType: string;
            Label: string;
        };
    };
    AutoDoorClose: {
        type: string;
        tile: string;
        special: {
            Type: string;
            wireType: string;
            Label: string;
        };
    };
    '----Furniture----': {
        type: string;
    };
    Table: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    TableFood: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Food: string;
        };
    };
    Rubble: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    Sharp: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    SharpAlways: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Always: boolean;
        };
    };
    Barrel: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    BarrelAlways: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Always: boolean;
        };
    };
    Cage: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    AlwaysCage: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    FutureBox: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    FutureBoxStorage: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
            jail: {
                type: string;
                radius: number;
            };
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    DollStand: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    DollStandSpreader: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    DisplayStand: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    LatexDisplayStand: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    DisplayEgyptian: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    OneBarTrap: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    OneBarVibeTrap: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    OneBarSpreaderTrap: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    OneBarSpreaderVibeTrap: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    IceBase: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    CrystalBase: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    'Sybia-n': {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    VineBase: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    ShadowBase: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    Sarco: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Furniture: string;
        };
        jail: {
            type: string;
            radius: number;
        };
    };
    '----Chests----': {
        type: string;
    };
    Chest: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    ChestRed: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Lock: string;
        };
    };
    ChestBlue: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Lock: string;
        };
    };
    ChestOrShrine: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    HighPriorityChest: {
        type: string;
        tile: string;
        special: {
            Priority: boolean;
        };
    };
    SilverChest: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Loot: string;
            Priority: boolean;
        };
    };
    StorageChest: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Loot: string;
            Chance: number;
            refill: boolean;
        };
    };
    KinkyChest: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Loot: string;
            Chance: number;
            refill: boolean;
        };
    };
    ChestCustom: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Loot: string;
        };
        customfields: {
            Loot: {
                type: string;
            };
            Faction: {
                type: string;
            };
            NoTrap: {
                type: string;
            };
            lootTrap: {
                type: string;
            };
            Lock: {
                type: string;
            };
            Priority: {
                type: string;
            };
        };
    };
    GuardedChest: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Label: string;
        };
    };
    GuardedChestLocked: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Lock: string;
            Label: string;
        };
    };
    '----Shrines----': {
        type: string;
    };
    Shrine: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Name: string;
        };
    };
    HighPriorityShrine: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Name: string;
            Priority: boolean;
        };
    };
    '----Hazards----': {
        type: string;
    };
    SpikeTrap: {
        type: string;
        effectTile: string;
    };
    Trap: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Always: boolean;
        };
    };
    PotentialTrap: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    '----Conveyors----': {
        type: string;
    };
    ConveyorUp: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
        };
    };
    ConveyorDown: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
        };
    };
    ConveyorLeft: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
        };
    };
    ConveyorRight: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
        };
    };
    SafetyConveyorUp: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
        };
    };
    SafetyConveyorDown: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
        };
    };
    SafetyConveyorLeft: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
        };
    };
    SafetyConveyorRight: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
        };
    };
    ConveyorUpOn: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorDownOn: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorLeftOn: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorRightOn: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorUpOff: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorDownOff: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorLeftOff: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorRightOff: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorUpSwitch: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorDownSwitch: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorLeftSwitch: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    ConveyorRightSwitch: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            DX: number;
            DY: number;
            wireType: string;
            SwitchMode: string;
        };
    };
    '----Machines----': {
        type: string;
    };
    DollSupply: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    DollSupplyManual: {
        type: string;
        tile: string;
        special: {
            Type: string;
            count: number;
            wireType: string;
            rate: number;
        };
    };
    DollTerminal: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    BondageMachineLatex: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Binding: string;
        };
    };
    BondageMachinePlug: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Binding: string;
        };
    };
    BondageMachineChastity: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Binding: string;
        };
    };
    BondageMachineTape: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Binding: string;
        };
    };
    BondageMachineMetal: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Binding: string;
        };
    };
    BondageMachineDoll: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Binding: string;
        };
    };
    DollDropoffU: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            Overlay: string;
            direction: {
                x: number;
                y: number;
            };
        };
    };
    DollDropoffD: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            Overlay: string;
            direction: {
                x: number;
                y: number;
            };
        };
    };
    DollDropoffR: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            Overlay: string;
            direction: {
                x: number;
                y: number;
            };
        };
    };
    DollDropoffL: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Sprite: string;
            Overlay: string;
            direction: {
                x: number;
                y: number;
            };
        };
    };
    '----Signals----': {
        type: string;
    };
    Button: {
        type: string;
        tile: string;
    };
    Wire: {
        type: string;
        effectTile: string;
    };
    WireVert: {
        type: string;
        effectTile: string;
    };
    WireHoriz: {
        type: string;
        effectTile: string;
    };
    PressurePlate: {
        type: string;
        effectTile: string;
    };
    PressurePlateHold: {
        type: string;
        effectTile: string;
    };
    PressurePlateOneUse: {
        type: string;
        effectTile: string;
    };
    ManaPlate: {
        type: string;
        effectTile: string;
    };
    TeleportPlate: {
        type: string;
        effectTile: string;
    };
    NoTeleportPlate: {
        type: string;
        effectTile: string;
    };
    TeleportPlateMana: {
        type: string;
        effectTile: string;
    };
    '----Lighting----': {
        type: string;
    };
    Torch: {
        type: string;
        effectTile: string;
    };
    PotentialTorch: {
        type: string;
        effectTile: string;
    };
    PriorityCharger: {
        type: string;
        tile: string;
        special: {
            Type: string;
            Priority: boolean;
        };
    };
    Charger: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    UnlockedCharger: {
        type: string;
        tile: string;
        special: {
            Type: string;
            NoRemove: boolean;
        };
    };
    MotionLamp: {
        type: string;
        effectTile: string;
    };
    '----Misc----': {
        type: string;
    };
    POI: {
        type: string;
    };
    OL: {
        type: string;
    };
    NW: {
        type: string;
    };
    Jail: {
        type: string;
    };
    JailPoint: {
        type: string;
        tile: string;
        special: {
            Type: string;
        };
    };
    Keyring: {
        type: string;
    };
    MazeSeed: {
        type: string;
        customfields: {
            newest: {
                type: string;
            };
            oldest: {
                type: string;
            };
            scale: {
                type: string;
            };
            branchchance: {
                type: string;
            };
            hbias: {
                type: string;
            };
            vbias: {
                type: string;
            };
            wobble: {
                type: string;
            };
            pillarToDoodad: {
                type: string;
            };
        };
    };
    MazeBlock: {
        type: string;
    };
    Label: {
        type: string;
        customfields: {
            name: {
                type: string;
            };
            type: {
                type: string;
            };
            faction: {
                type: string;
            };
            guard: {
                type: string;
            };
            interesting: {
                type: string;
            };
        };
    };
};
declare function KDGetTileIndexImg(index: string): {
    u: boolean;
    d: boolean;
    l: boolean;
    r: boolean;
};
declare let KDTE_State: string;
declare function KDDrawTileEditor(): void;
declare function KDDrawEditorTagsUI(): void;
declare let KDEditorTileBrushIndexVisual: number;
declare let KDEditorTileBrushIndex2Visual: number;
declare let KDEditorTileNameIndexVisual: number;
declare function KDDrawEditorUI(): void;
declare let customfieldsElements: any[];
declare function KDTE_CustomUI(): void;
declare let KDTE_lastMouse: number;
declare let KDTEHoldDelay: number;
declare let KDTEmode: number;
declare let KDTE_Scale: number;
declare let KDTE_MAXDIM: number;
declare let KDTELoadConfirm: boolean;
declare function KDTE_Clear(x: number, y: number, force?: boolean): void;
declare let KDTE_Brush: Record<string, (brush: any, curr: string, noSwap: boolean) => void>;
declare let KDTE_Inaccessible: boolean;
declare let KDTE_confirmreset: boolean;
declare let KDTE_confirmcommit: boolean;
declare function KDHandleTileEditor(noSwap?: boolean): void;
declare function KDTE_UpdateUI(Load: boolean): void;
declare function KDTESetIndexToTile(propTile: string): void;
declare function KDTE_CullIndex(tileKeys: string[], brushKeys: string[]): void;
declare function KDTE_CloseUI(): void;
declare function KDTE_Create(w: number, h: number, chkpoint?: string, closed?: boolean, empty?: boolean): void;
declare function KDTE_LoadTile(name: any, loadedTile?: KDMapTile): void;
declare function KDTE_ExportTile(): KDMapTile;
declare function KDTE_SaveTile(_tile?: string): void;
type InaccessibleEntry = {
    indX1: number;
    indY1: number;
    dir1: string;
    indX2: number;
    indY2: number;
    dir2: string;
};
declare function KDTEGetInaccessible(): InaccessibleEntry[];
declare function KDObjFromMapArray(array: any): any;
declare function KDReloadAllEditorTiles(): void;
declare function KDTE_GetField(field: any): any;
declare let KD_GENWEIGHTCUTOFF: number;
declare function KDAddLabel(label: KDLabel): void;
declare function KDMapTilesPopulate(_w: number, _h: number, indices: Record<string, string>, data: any, requiredAccess: Record<string, boolean>, maxTagFlags: Record<string, number>, tagModifiers: Record<string, number>): Record<string, KDMapTile>;
declare function KDGetTileWeight(mapTile: KDMapTile, tags: Record<string, boolean>, tagCounts: Record<string, number>, tagModifiers: Record<string, number>): number;
declare function KD_GetMapTile(index: string, indX: number, indY: number, tilesFilled: Record<string, KDMapTile>, indexFilled: Record<string, string>, tagCounts: Record<string, number>, requiredAccess: Record<string, boolean>, globalTags: Record<string, boolean>, indices: Record<string, string>, tagModifiers: Record<string, number>): string;
declare function KDCheckMapTileFilling(mapTile: KDMapTile, indX: number, indY: number, indices: Record<string, string>, requiredAccess: Record<string, Boolean>, indexFilled: Record<string, string>): boolean;
declare function KDLooseIndexRankingSuspend(indexCheck: string, indexTile: string, w: number, h: number, xx: number, yy: number): boolean;
declare function KDCheckMapTileAccess(mapTile: KDMapTile, indX: number, indY: number, indexFilled: Record<string, string>, _requiredAccess: Record<string, boolean>): boolean;
declare function KD_PasteTile(tile: KDMapTile, x: number, y: number, data: any): string[];
declare function KDGenMaze(startX: number, startY: number, tile: any, seed: any, _MazeBlock: {
    x: number;
    y: number;
}[]): {
    x: number;
    y: number;
}[];
declare let KDEffectTileGen: Record<string, (x: number, y: number, tile: any, tileGenerator: any, data: any) => any>;
declare let KDTileGen: {
    Rubble: (x: any, y: any, tile: any, tileGenerator: any, data: any) => any;
    RubbleNoMend: (x: any, y: any, tile: any, tileGenerator: any, data: any) => any;
    Debris: (x: any, y: any, tile: any, tileGenerator: any, data: any) => any;
    Barrel: (x: any, y: any, tile: any, tileGenerator: any, data: any) => any;
    Spawn: (x: any, y: any, tile: any, tileGenerator: any, data: any) => any;
    ForceSpawn: (x: any, y: any, tile: any, tileGenerator: any, data: any) => any;
    Prisoner: (x: any, y: any, tile: any, tileGenerator: any, data: any) => any;
    Chest: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        NoTrap: any;
        Type: string;
        Lock: any;
        Loot: any;
        Faction: any;
        Roll: number;
        refill: any;
        origloot: any;
        Special: boolean;
        RedSpecial: any;
        lootTrap: any;
    };
    GuardedChest: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        NoTrap: any;
        Type: string;
        Lock: any;
        Loot: any;
        Faction: string;
        refill: any;
        origloot: any;
        Roll: number;
        Special: boolean;
        RedSpecial: any;
        lootTrap: any;
    };
    ChestOrShrine: (x: any, y: any, tile: any, tileGenerator: any, data: any) => any;
    Door: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        Lock: any;
        OL: any;
        RequiredDoor: any;
        DoorSkin: any;
        PotentialDoor?: undefined;
    } | {
        PotentialDoor: boolean;
        OL: any;
        Type?: undefined;
        Lock?: undefined;
        RequiredDoor?: undefined;
        DoorSkin?: undefined;
    };
    Shrine: (x: any, y: any, tile: any, tileGenerator: any, data: any) => any;
    DollDropoff: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Sprite: string;
        Overlay: any;
        Type: string;
    };
    Cage: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        Furniture: string;
    };
    AlwaysCage: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        Furniture: string;
    };
    DisplayStand: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        Furniture: any;
    };
    OneBarTrap: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        Furniture: string;
    };
    OneBarVibeTrap: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        Furniture: string;
    };
    OneBarSpreaderTrap: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        Furniture: string;
    };
    OneBarSpreaderVibeTrap: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        Furniture: string;
    };
    DollStand: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        Furniture: string;
    };
    DollStandSpreader: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        Furniture: string;
    };
    JailBed: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Jail: boolean;
        OL: boolean;
    };
    JailPoint: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Jail: boolean;
        OL: boolean;
    };
    Furniture: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        Furniture: any;
    };
    Table: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Food: string;
        Type: string;
    };
    Trap: (x: any, y: any, tile: any, tileGenerator: any, data: any) => any;
    Charger: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        NoRemove: boolean;
        lightColor: number;
        Light: number;
    };
    Conveyor: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        DX: any;
        DY: any;
        OL: boolean;
        wireType: any;
        SwitchMode: any;
    };
    SafetyConveyor: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        DX: any;
        DY: any;
        OL: boolean;
        wireType: any;
        SwitchMode: any;
        Sfty: boolean;
    };
    DollSupply: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        index: number;
        cd: number;
        rate: any;
        count: any;
        dollType: any;
        SwitchMode: any;
        wireType: any;
    };
    DollTerminal: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        OL: boolean;
    };
    Skin: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Skin: any;
        Skin2: any;
    };
    SkinCode: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        SkinCode: any;
        Skin2: any;
        Skin: any;
    };
    BondageMachine: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        Type: string;
        OL: boolean;
        Binding: any;
    };
    EffectTile: (x: any, y: any, tile: any, tileGenerator: any, data: any) => any;
    AutoDoor: (x: any, y: any, tile: any, tileGenerator: any, data: any) => {
        wireType: any;
    };
};
declare function KDCreateTile(x: number, y: number, tileGenerator: any, data: any): any;
declare function KDCreateEffectTileTile(x: number, y: number, tileGenerator: any, data: any): any;
declare function KDAggregateTileTags(x: any, y: any, w: any, h: any, tilesFilled: any, globalTags: any): any;
declare function KDGetCategoryIndex(x: any, y: any): {
    category: string;
    tags: string[];
};
declare let KDPervertibleFurnitureWeights: Record<string, number>;
declare function KDGetPervertibleFurniture(base?: string, pervertChance?: number): string;
declare function KDGetMapTileWithTags(tag: string): KDMapTile[];
declare function KinkyDungeonSetupCrashHandler(): void;
declare function KinkyDungeonTeardownCrashHandler(): void;
declare function KinkyDungeonOnUncaughtError(event: ErrorEvent): void;
declare function KinkyDungeonGenerateErrorReport(event: ErrorEvent): string;
declare function KinkyDungeonCrashReportStateData(): string;
declare function KinkyDungeonCrashReportErrorDetails(event: ErrorEvent): string;
declare function KinkyDungeonCrashReportSaveData(): string;
declare function KinkyDungeonCrashReportDiagnostics(): string;
declare function KinkyDungeonCrashReportDeviceDetails(): string;
declare function KinkyDungeonStackSanitize(stack: string): string;
declare function KinkyDungeonShowCrashReportModal(report: string): void;
declare function KinkyDungeonErrorImage(src: string): HTMLImageElement;
declare function KinkyDungeonErrorPreamble(content: string[]): HTMLParagraphElement;
declare function KinkyDungeonErrorModalButton(text: string): HTMLButtonElement;
declare function KinkyDungeonErrorCopy(report: string, reportElement: HTMLElement): Promise<boolean>;
declare let KDENABLEDISCORDSYNC: boolean;
declare let KDGenMapCallback: () => string;
declare let KDOptionFilter: string;
declare let KDConsentFilter: string;
declare let LaunchedMenu: boolean;
declare let KDModsAfterGameStart: () => void;
declare let KDModsAfterLoad: () => void;
declare let KDFastWaitTime: number;
declare let KDVeryFastWaitTime: number;
declare let KDNormalWaitTime: number;
declare let KDSlowWaitTime: number;
declare let saveSlotsPerPage: number;
declare let maxSaveSlotPages: number;
declare let currentSavePage: number;
declare let KDFullscreen: boolean;
declare let KDExitButton: boolean;
declare let KDPaletteWidth: number;
declare let KDDefaultPalette: string;
declare let KDCULLTIME: number;
declare let KDLoadingFinishedSet: boolean;
declare let KDStandardRenderException: {
    Consent: any[];
    Intro: any[];
    Logo: any[];
    Game: string[];
    Stats: any[];
    TileEditor: any[];
    Wardrobe: any[];
    GenMap: any[];
};
declare let KDStateBG: {
    GenMap: string;
};
declare let KDClipboardDisabled: boolean;
declare let CanvasWidth: number;
declare let CanvasHeight: number;
declare let KDStartTime: number;
declare let KDEasterEgg: boolean;
declare let KDBigLanguages: string[];
declare let KDBigLanguages2: string[];
declare let KDLanguages: string[];
declare let KinkyDungeonPlayerNeedsRefresh: boolean;
declare let KinkyDungeonNextRefreshCheck: number;
declare const pp: URLSearchParams;
declare let param_branch: string;
declare let param_test: string;
declare let param_localhost: string;
declare let TestMode: string | boolean;
declare let KDDebugMode: boolean;
declare let KDDebug: boolean;
declare let KDDebugPerks: boolean;
declare let KDDebugGold: boolean;
declare let KDDebugLink: boolean;
declare let KDDebugforceadds: boolean;
declare let KDAllModFiles: any[];
declare let KDModFiles: {};
declare let VersionMajor: number;
declare let VersionMinor: number;
declare let VersionPatch: number;
declare let KinkyDungeonPerksConfig: string;
declare let KinkyDungeonSpellsConfig: string;
declare let KDUnlockedPerks: any[];
declare let KinkyDungeonBackground: string;
declare let KinkyDungeonPlayer: Character;
declare let KDSpeakerNPC: any;
declare let KinkyDungeonState: string;
declare let KDIntroProgress: number[];
declare let KDIntroStage: number;
declare let KinkyDungeonRep: number;
declare function KDSetDefaultKeybindings(): void;
declare let KinkyDungeonKeybindings: any;
declare let KinkyDungeonKeybindingsTemp: any;
declare let KinkyDungeonKeybindingCurrentKey: string;
declare let KinkyDungeonKeybindingCurrentKeyRelease: string;
declare let KinkyDungeonNewGame: number;
declare let KinkyDungeonGameRunning: boolean;
declare let KDLose: boolean;
declare let KDLoadingFinished: boolean;
declare let KDLoadingDone: number;
declare let KDLoadingMax: number;
declare let KinkyDungeonKey: string[];
declare let KinkyDungeonKeySpell: string[];
declare let KinkyDungeonKeyTab: string[];
declare let KinkyDungeonKeyWait: string[];
declare let KinkyDungeonKeySkip: string[];
declare let KinkyDungeonKeyEnter: string[];
declare let KinkyDungeonKeySprint: string[];
declare let KinkyDungeonKeyWeapon: string[];
declare let KinkyDungeonKeyUpcast: string[];
declare let KinkyDungeonKeyMenu: string[];
declare let KinkyDungeonKeyToggle: string[];
declare let KinkyDungeonKeySpellPage: string[];
declare let KinkyDungeonKeySwitchWeapon: string[];
declare let KinkyDungeonKeySwitchLoadout: string[];
declare let KinkyDungeonKeyLogFilter: string[];
declare let KinkyDungeonKeyMap: string[];
declare let KDLoadingTextKeys: Record<string, string>;
declare let kdSpecialModePerks: string[];
declare let KDPalettePrefs: Record<string, string>;
declare let KDPalettePrefsNPC: Record<string, string>;
declare let KDPalettePrefsEnchanted: Record<string, string>;
declare let KinkyDungeonGraphicsQuality: boolean;
declare let KDToggleGroups: string[];
declare let KDClothesToggles: {
    name: string;
}[];
declare let KDDefaultKB: {
    Down: string;
    DownLeft: string;
    DownRight: string;
    Left: string;
    Right: string;
    Up: string;
    UpLeft: string;
    UpRight: string;
    SpellWeapon: string;
    Spell1: string;
    Spell2: string;
    Spell3: string;
    Spell4: string;
    Spell5: string;
    Spell6: string;
    Spell7: string;
    Spell8: string;
    Spell9: string;
    Spell0: string;
    Tab1: string;
    Tab2: string;
    Tab3: string;
    Tab4: string;
    Tab5: string;
    Wait: string;
    WaitInterrupt: string;
    ToggleBuff: string;
    Skip: string;
    Enter: string;
    Pass: string;
    Door: string;
    Sprint: string;
    MakeNoise: string;
    PlaySelf: string;
    Crouch: string;
    Upcast: string;
    UpcastCancel: string;
    SpellPage: string;
    QInventory: string;
    Inventory: string;
    Magic: string;
    Log: string;
    Restart: string;
    SwitchWeapon: string;
    SwitchWeaponOffhand: string;
    SwitchWeaponOffhandPrevious: string;
    SwitchWeaponOffhandPrevious2: string;
    SwitchLoadout1: string;
    SwitchLoadout2: string;
    SwitchLoadout3: string;
    AStruggle: string;
    APathfind: string;
    AInspect: string;
    Map: string;
    MsgLog: string;
    ZoomOut: string;
    ZoomIn: string;
    BulletTransparency: string;
    Status: string;
};
declare let KDZoomIndex: number;
declare let KDZoomLevels: number[];
declare let KinkyDungeonRootDirectory: string;
declare let KinkyDungeonGameData: any;
declare let KinkyDungeonGameDataNullTimer: number;
declare let KinkyDungeonGameDataNullTimerTime: number;
declare let KinkyDungeonStreamingPlayers: any[];
declare let KinkyDungeonInitTime: number;
declare let KinkyDungeonSleepTime: number;
declare let KinkyDungeonFreezeTime: number;
declare let KinkyDungeonStunTime: number;
declare let KinkyDungeonPlaySelfTime: number;
declare let KinkyDungeonOrgasmTime: number;
declare let KinkyDungeonAutoWait: boolean;
declare let KinkyDungeonAutoWaitStruggle: boolean;
declare let KinkyDungeonConfigAppearance: boolean;
declare const Consumable = "consumable";
declare const Restraint = "restraint";
declare const LooseRestraint = "looserestraint";
declare const Outfit = "outfit";
declare const Accessory = "accessory";
declare const Weapon = "weapon";
declare const Misc = "misc";
declare const Armor = "armor";
declare let KinkyDungeonStatsChoice: Map<any, any>;
declare let KDJourney: string;
declare let KDOptOut: boolean;
declare let KDDefaultMaxParty: number;
declare let KDDefaultJourney: string[];
declare let KDDefaultAlt: string[];
interface KDGameDataBase {
    PlayerWeaponLastEquipped: string;
    SawFlags: Record<string, Record<string, number>>;
    PersistentItems: Record<string, Record<string, number>>;
    JourneyProgression: string[];
    AttachedWep: string;
    InventoryAction: string;
    InventoryActionTokens: Record<string, string>;
    InventoryActionContainer: string[];
    InventoryActionManaCost: number;
    SellMarkup: number;
    CurseLevel: number;
    UsingConsumable: string;
    BondageTarget: number;
    FoodTarget: number;
    KeysNeeded: boolean;
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
    Outfit: string;
    Champion: string;
    ChampionCurrent: number;
    LastMapSeed: string;
    AlreadyOpened: {
        x: number;
        y: number;
    }[];
    Journey: string;
    CheckpointIndices: number[];
    PrisonerState: string;
    TimesJailed: number;
    JailTurns: number;
    JailKey: boolean;
    CurrentDialog: string;
    CurrentDialogStage: string;
    OrgasmNextStageTimer: number;
    DistractionCooldown: number;
    ConfirmAttack: boolean;
    CurrentDialogMsg: string;
    MasterworkIntro: boolean;
    CurrentDialogMsgSpeaker: string;
    CurrentDialogMsgPersonality: string;
    CurrentDialogMsgID: number;
    CurrentDialogEntity: entity;
    CurrentDialogMsgData: Record<string, string>;
    CurrentDialogMsgValue: Record<string, number>;
    AlertTimer: number;
    HeartTaken: boolean;
    CurrentVibration: KinkyVibration;
    Edged: boolean;
    TimeSinceLastVibeStart: Record<string, number>;
    TimeSinceLastVibeEnd: Record<string, number>;
    OfferFatigue: number;
    Favors: Record<string, number>;
    RoomType: string;
    MapMod: string;
    HunterTimer: number;
    Hunters: number[];
    Quests: string[];
    QuestData: Record<string, any>;
    RevealedTiles: Record<string, number>;
    RevealedFog: Record<string, number>;
    PriorJailbreaks: number;
    PriorJailbreaksDecay: number;
    PreviousWeapon: string[];
    PreviousWeaponLock: boolean[];
    StaminaPause: number;
    StaminaSlow: number;
    ManaSlow: number;
    TempFlagFloorTicks: Record<string, number>;
    KneelTurns: number;
    AllowedSpellPages: Record<string, string[]>;
    KeyringLocations: {
        x: number;
        y: number;
    }[];
    HiddenItems: Record<string, boolean>;
    ItemPriority: Record<string, number>;
    CagedTime: number;
    DelayedActions: KDDelayedAction[];
    OfferCount: number;
    ItemID: number;
    Offhand: string;
    OffhandOld: string;
    OffhandReturn: string;
    ShopkeeperFee: number;
    DollCount: number;
    ChestsGenerated: string[];
    DollRoomCount: number;
    CollectedHearts: number;
    CollectedOrbs: number;
    otherPlaying: number;
    Training: Record<string, KDTrainingRecord>;
    QuickLoadout: KDPresetLoadout[];
    CurrentLoadout: number;
    HighestLevelCurrent: number;
    HighestLevel: number;
    KDChasingEnemies: entity[];
    ShopRewardProgram: number;
    ShopRewardProgramThreshold: number;
    ShopkeepersMurdered: number;
    tickAlertTimer: boolean;
    HostileFactions: string[];
    MovePoints: number;
    Wait: number;
    Class: string;
    Party: entity[];
    CapturedParty: entity[];
    PlayerName: string;
    PlayerPronoun: string;
    QuickLoadout_Weapon: boolean;
    QuickLoadout_Merge: boolean;
    ItemsSold: Record<string, number>;
    MaxParty: number;
    Crouch: boolean;
    FocusControlToggle: Record<string, boolean>;
    FloorRobotType: Record<string, string>;
    EpicenterLevel: number;
    BlockTokens: number;
    DodgeTokens: number;
    ShieldTokens: number;
    BlockTokensMax: number;
    DodgeTokensMax: number;
    ShieldTokensMax: number;
    Shield: number;
    ShieldDamage: number;
    Balance: number;
    BalancePause: boolean;
    NPCRestraints: Record<string, Record<string, NPCRestraint>>;
    Collection: Record<string, KDCollectionEntry>;
    CollectionSorted: KDCollectionEntry[];
    HeelPowerEffective: number;
    HeelPower: number;
    visionAdjust: number;
    visionAdjustBlind: number;
    visionBlind: number;
    CollectionGuests: number;
    SelectedEscapeMethod: string;
    Restriction: number;
    JourneyX: number;
    JourneyY: number;
    ShortcutIndex: string;
    JourneyMap: KDJourneyMap;
    JourneyTarget: {
        x: number;
        y: number;
    };
    LastDragon: string;
    ElevatorsUnlocked: Record<number, string | boolean>;
    TeleportLocations: Record<string, {
        x: number;
        y: number;
        portalpos_x: number;
        portalpos_y: number;
        type: string;
        checkpoint: string;
        level: number;
    }>;
    MaxVisionDist: number;
    MinVisionDist: number;
    NightVision: number;
    LockoutChance: number;
    StatMaxBonus: Record<string, number>;
    LogFilters: Record<string, boolean>;
    NoForceGreet: boolean;
    InteractTargetX: number;
    InteractTargetY: number;
    RegimentID: number;
    Containers: Record<string, KDContainer>;
    FacilitiesData: FacilitiesData;
    Regiments: Record<string, KDRegiment>;
    QuickLoadouts: Record<string, string[]>;
    PersistentNPCCache: Record<string, number[]>;
    NamesGenerated: Record<string, number>;
    Guilt: number;
    LastSave: number;
    SigilsErased: number;
    SealErasedQuota: number;
    DragonCaptured?: boolean;
    DragonTarget?: number;
    IdentifiedObj?: Record<string, number>;
    MaidKnightFloor: number;
    UseJourneyTarget?: boolean;
    AutoRelease: {
        NonNotable: boolean;
        Escaped: boolean;
    };
    WarningTiles: Record<string, WarningTileRecord[]>;
    RecruitedFaction?: string;
    currentTitleAuto: string;
    currentTitle: string;
    oldtitles: string[];
    titlesUnlocked: string[];
    titlesUnlockedCache: Record<string, number>;
    titledata: KDPlayerTitleData;
    RecentProgress: Record<string, ProgressRecord>;
    PreferredJailPoint?: KDJailPoint;
    PreferredJailPointTick?: number;
    HypnoButtons: HypnoButton[];
    originalBody: string;
}
declare let KDGameDataBase: KDGameDataBase;
declare let KDGameData: KDGameDataBase;
declare function KinkyDungeonLeashingEnemy(): entity;
declare let KDJailGuard: any;
declare function KinkyDungeonJailGuard(): entity;
declare let KDAngel: any;
declare function KinkyDungeonAngel(): any;
declare function KDUnlockPerk(Perk?: string): void;
declare function KDLoadPerks(): void;
declare let KDBGColor: string;
declare function KDMapInit(list: any): Record<any, any>;
declare function KDistEuclidean(x: number, y: number): number;
declare function KDistEuclideanSquared(x: number, y: number): number;
declare function KDistChebyshev(x: number, y: number): number;
declare function KDistEuclideanApprox(dx: number, dy: number): number;
declare function KDistTaxicab(x: number, y: number): number;
declare function KDLoadToggles(): void;
declare function KDSaveToggles(): void;
declare function KDMigrateSaveToNewSystem(): Promise<void>;
declare function KDReloadMainData(force: boolean): void;
declare function KinkyDungeonLoad(): void;
declare function KinkyDungeonDeviousDungeonAvailable(): boolean;
declare function KinkyDungeonIsPlayer(): boolean;
declare let KinkyDungeonCreditsPos: number;
declare let KDMaxPatronPerPage: number;
declare let KDMaxPatron: number;
declare let KinkyDungeonPatronPos: number;
declare let KinkyDungeonFastWait: boolean;
declare let KinkyDungeonTempWait: boolean;
declare let KinkyDungeonSexyMode: boolean;
declare let KinkyDungeonClassMode: string;
declare let KinkyDungeonRandomMode: boolean;
declare let KinkyDungeonProgressionMode: string;
declare let KinkyDungeonItemMode: number;
declare let KinkyDungeonEasyMode: number;
declare let KinkyDungeonSaveMode: boolean;
declare let KinkyDungeonHardMode: boolean;
declare let KinkyDungeonExtremeMode: boolean;
declare let KinkyDungeonPerksMode: number;
declare let KinkyDungeonPerkProgressionMode: number;
declare let KinkyDungeonPerkBondageMode: number;
declare let KinkyDungeonPerkBondageVisMode: number;
declare let KinkyDungeonSexyPiercing: boolean;
declare let KinkyDungeonSexyPlug: boolean;
declare let KinkyDungeonSexyPlugFront: boolean;
declare let KDOldValue: string;
declare let KDOldSaveCodeValue: string;
declare let KDOriginalValue: string;
declare let KDConsentArray: Record<string, string>;
declare let KDResetOutfitToggleFlag: boolean;
declare let KDRestart: boolean;
declare let fpscounter: number;
declare let lastfps: number;
declare let dispfps: number;
declare function sleep(msec: number): Promise<unknown>;
declare let KDMarkAsCache: any[];
declare let lastGlobalRefresh: number;
declare let GlobalRefreshInterval: number;
declare let KDGlobalRefresh: boolean;
declare let KDGlobalFilterCacheRefresh: boolean;
declare let KDLogoStartTime: number;
declare let KDLogoEndTime: number;
declare let KDLogoEndTime2: number;
declare function KDOpenFullscreen(): void;
declare function KDCloseFullscreen(): void;
declare let saveError: boolean;
declare let KDErrorText: string;
declare let KDErrorTextTime: number;
declare let KDErrorTextTime_DELAY: number;
declare let KDCurrentHoverButton: KDButtonParamData;
declare let KDCurrentHoverBox: KDButtonParamData;
declare let KDHoverTypes: string[];
declare let KDHoverFunctions: {
    InventoryItem: (hover: any) => void;
};
declare let KDLastScrollableListUpdate: number;
declare let mouseHoldTaken: string;
declare function KinkyDungeonRun(): boolean;
declare let KDLastActiveElement: any;
declare let KDDrawDelta: number;
declare let kdTrackGameBoard: boolean;
declare let kdTrackGameFog: boolean;
declare let kdTrackGameParticles: boolean;
declare let KDlastCull: Map<any, any>;
declare function KDGetCullTime(): number;
declare function KDPurgeFilterSprites(): void;
declare function KDPurgeSpriteRelatedFilters(sprite: PIXISprite | PIXITexture): void;
declare function KDCullSprites(): void;
declare function KDCullSpritesList(list: Map<string, any>): void;
declare function KDCullRTList(list: Map<string, PIXIRenderTexture>): void;
declare function KDCullTexList(list: Map<string, PIXITexture>): void;
interface KDButtonPressData {
    source: string;
}
interface KDButtonParamData {
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    enabled: boolean;
    func?: (bdata: KDButtonPressData) => boolean;
    priority: number;
    scrollfunc?: (amount: number) => void;
    hotkeyPress?: string;
    contextMenu?: string;
    hoverData?: any;
    onHover?: (button: KDButtonParamData) => void;
    Hover?: any;
}
declare let KDButtonsCache: Record<string, KDButtonParamData>;
declare let KDHoldButtonsCache: Record<string, KDButtonParamData>;
declare let KDLastButtonsCache: Record<string, KDButtonParamData>;
declare let KDLastHoldButtonsCache: Record<string, KDButtonParamData>;
declare function DrawButtonKD(name: string, enabled: boolean, Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string, HoveringText?: string, Disabled?: boolean, NoBorder?: boolean, Hover?: Function): void;
declare function DrawHoldButtonKDExTo(Container: PIXIContainer, name: string, func: (bdata: any) => any, enabled: boolean, Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string, HoveringText?: string, Disabled?: boolean, NoBorder?: boolean, FillColor?: string, FontSize?: number, ShiftText?: boolean, options?: any): boolean;
declare function DrawButtonKDEx(name: string, func: (bdata: any) => any, enabled: boolean, Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string | string[], HoveringText?: string, Disabled?: boolean, NoBorder?: boolean, FillColor?: string, FontSize?: number, ShiftText?: boolean, options?: ButtonOptions, Hover?: Function): boolean;
declare function KDRenderMouseTooltip(button: KDButtonParamData): void;
declare function DrawButtonKDExContext(name: string, contextMenu: string, func: (bdata: any) => any, enabled: boolean, Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string | string[], HoveringText?: string, Disabled?: boolean, NoBorder?: boolean, FillColor?: string, FontSize?: number, ShiftText?: boolean, options?: any): boolean;
declare function DrawButtonKDExScroll(name: string, scrollfunc: (amount: number) => boolean | void, func: (bdata: any) => boolean, enabled: boolean, Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string | string[], HoveringText?: string, Disabled?: boolean, NoBorder?: boolean, FillColor?: string, FontSize?: number, ShiftText?: boolean, options?: any, Hover?: Function): boolean;
declare function DrawButtonKDExTo(Container: any, name: string, func: (bdata: any) => boolean, enabled: boolean, Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string | string[], HoveringText?: string, Disabled?: boolean, NoBorder?: boolean, FillColor?: string, FontSize?: number, ShiftText?: boolean, options?: any): boolean;
declare function KDMouseWheel(event: WheelEvent): void;
declare function KDFunctionCycleTabScroll(amount: number): boolean;
declare function KDFunctionOptionsScroll(amount: number): boolean;
declare function KDFunctionPerksScroll(amount: number): boolean;
declare function KDFunctionQuestScroll(amount: number): boolean;
declare function KDFunctionCollectionScroll(amount: number): boolean;
declare function KDFunctionFacilitiesScroll(amount: number): boolean;
declare function KDFunctionContainerScroll(amount: number): boolean;
declare function KDFunctionJourneyMapScroll(amount: number): boolean;
declare function KDFunctionSpellPageScroll(amount: number): boolean;
declare function KDFunctionMagicPageScroll(amount: number): boolean;
declare function KDFunctionMagicSpellPageScroll(amount: number): boolean;
declare function KDFunctionInventoryScroll(amount: number): boolean;
declare function KDFunctionMsgScroll(amount: number): boolean;
declare function KDFunctionRestraintIndexScroll(amount: number): boolean;
declare function KDFunctionDialogueScroll(amount: number): boolean;
declare function KDFunctionShopScroll(amount: number): boolean;
declare function KDProcessButtonScroll(amount: number, padV?: number): boolean;
declare function KDProcessButtons(): any;
declare function KDProcessHoldButtons(): any;
declare function KDClickButton(name: string, source?: string, key?: string): boolean;
declare function KDHoldButton(name: string, source?: string, key?: string): boolean;
declare function MouseInKD(name: string, padX?: number, padV?: number): boolean;
declare function KinkyDungeonGetTraitsCount(): number;
declare function KDSendTrait(_trait: any): void;
declare function KDSendSpell(_spell: any): void;
declare function KDSendSpellCast(_spell: any): void;
declare function KDSendWeapon(_weapon: any): void;
declare function KDSendStatus(_type: any, _data?: any, _data2?: any): void;
declare function KDSendEvent(_type: any): void;
declare function KinkyDungeonLoadStats(): void;
declare let KinkyDungeonGameFlag: boolean;
declare function KDInitializeJourney(Journey: string, Level?: number): void;
declare function KDCommitKeybindings(): void;
declare let afterLoaded: boolean;
declare let KDGameSaveDBStoreName: string;
declare function KinkyDungeonDBOpen(): Promise<IDBDatabase>;
declare function KinkyDungeonDBSave(saveslot: number, gamecode?: string): void;
declare function KinkyDungeonDBLoad(saveslot: number): Promise<string | null>;
declare function KinkyDungeonDBDelete(saveslot: number): Promise<unknown>;
declare let LoadMenuCurrentSave: string;
declare let LoadMenuCurrentSlot: number;
declare let loadedsaveslots: string[];
declare let loadedcloudsaveslots: string[];
declare let loadedsaveNames: string[];
declare let loadedsaveClasses: string[];
declare let loadedsaveFloors: string[];
declare let loadedsaveNG: string[];
declare let loadedSaveforPreview: KinkyDungeonSave;
declare let KDPreviewModel: any;
declare let KDSaveSlot: number;
declare let ModelPreviewLoaded: boolean;
declare let KDDeleteSaveIndex: number;
declare let KDUploadSaveIndex: any;
declare let KDLoadCloudGames: boolean;
declare let KDSlot0: string;
declare let KDCloudLogintype: any;
declare let KDCloudLogintoken: any;
declare let KDCloudLoginiv: any;
declare let KDDiscordLoginname: any;
declare let KDDiscordLoginpfp: any;
declare function KDDrawLoadMenu(): void;
declare function KDUpdateDiscordName(): void;
declare function KDLoginDiscord(): void;
declare function KDLogoutDiscord(): void;
declare function KDSaveGameToCloud(saveslot: any): void;
declare function KDSyncCloudSaveGame(): void;
declare function KinkyDungeonDressModelPreview(): Promise<unknown>;
declare function KinkyDungeonLoadPreview(String: string): KinkyDungeonSave;
declare function KinkyDungeonStartNewGame(Load?: boolean): void;
declare let KDConsentPerkTypes: string[];
declare function KDUpdateConsentSettings(allowBackport: boolean): void;
declare function KDUpdatePlugSettings(evalHardMode: boolean, allow_backport_consent?: boolean): void;
declare function KDUpdateHardMode(): void;
declare let KDHardModeThresh: number;
declare let KDAwaitingModLoad: boolean;
declare function KDHandleMouseDown(): boolean;
declare function KinkyDungeonHandleClick(event: MouseEvent): boolean;
declare function KDMenuTogglesClick(): void;
declare function KinkyDungeonClick(): void;
declare function KDClick(event: MouseEvent): boolean;
declare function KinkyDungeonExit(): void;
declare function KinkyDungeonKeyDown(): void;
declare let mouseDown: boolean;
declare let MouseClicked: boolean;
declare let DisableButtonsOneFrame: boolean;
declare let LastHoldTime: number;
declare let LongHoldThresh: number;
declare let LongHoldPinged: boolean;
declare let HoldStartTime: number;
declare let HoldStartPosX: number;
declare let HoldStartPosY: number;
declare let HoldEndPosX: number;
declare let HoldEndPosY: number;
declare let HoldMoved: boolean;
declare let HoldMoveThresh: number;
declare let KinkyDungeonGameKey: any;
declare function KinkyDungeonGenerateSaveData(): KinkyDungeonSave;
declare let KDSaveQueue: KinkyDungeonSave[];
declare let KDSaveBusy: boolean;
declare function KinkyDungeonSaveGame(ToString?: boolean): KinkyDungeonSave;
declare let KDSaveTimeout: number;
declare function KinkyDungeonCompressSave(save: string): Promise<string>;
declare function KinkyDungeonLoadGame(String?: string, kdloadconsent?: boolean): boolean;
declare let KinkyDungeonSeed: string;
declare let KDRandom: () => number;
declare function KDrandomizeSeed(Native: boolean): void;
declare function KDsetSeed(str: string): void;
declare function xmur3(str: string): () => number;
declare function sfc32(a: number, b: number, c: number, d: number): () => number;
declare let kdSoundCache: Map<string, HTMLAudioElement>;
declare function GetNewAudio(): any;
declare function AudioPlayInstantSoundKD(Path: string, volume?: number): boolean;
declare function hashCode(s: string): number;
declare function TextGetKD(Text: string): string;
declare function KinkyDungeonCheckPlayerRefresh(): void;
declare function CharacterCheckerGetLength(text: string): number;
declare function CharacterCheckerMatchCJK(text: string): string[];
declare function CharacterCheckerHasCJK(text: string): boolean;
declare function CharacterCheckerHasCJKSP(text: string): boolean;
declare function KinkyDungeonGetCanvas(id: string): HTMLCanvasElement;
declare function KDDrawGameSetupTabs(_xOffset?: number, xpad?: number, num?: number): number;
declare function DecompressB64(str: string): string;
declare let KDToggleTab: string;
declare function KDDrawToggleTabs(xOffset: number): void;
declare function KinkyDungeonMultiplayerUpdate(_delay: any): void;
declare let saveFile: any;
declare let KDSAVEEXTENSION: string;
declare let KDOUTFITEXTENSION: string;
declare let KDBACKUPEXTENSION: string;
declare let KDOUTFITBACKUP: string;
declare let KDSaveName: string;
declare function KDLoadSave(files: any): void;
declare function downloadFile(filename: string, text: string): void;
declare let KDBusyLoadingFile: boolean;
declare let KDBusySavingBackup: boolean;
declare function KDLoadBackupDialog(): Promise<void>;
interface KDFullBackupData {
    localStorage: Record<string, string>;
    saveDB: Record<string, string>;
}
declare function KDGenBackupString(): Promise<string>;
declare function KDSaveBackupDialog(filename: string, text: string): Promise<any>;
declare function KDChangeZoom(change: number): void;
declare let KDMinimized: boolean;
declare let KDFocusSounds: number;
declare function KDSoundEnabled(): boolean;
declare function RunGenMapCallback(): Promise<void>;
declare function KDReloadChallenge(): void;
declare let KDCustomToggleTab: {};
declare let KDBaseDelayWaitTime: number;
declare function KDDelayWaitTime(): number;
declare function KDRefreshSleep(): void;
declare let KDCustomOptionsFontSize: {
    UI: number;
};
declare let KDCustomOptionsSize: {
    UI: number;
    ClothesToggles: number;
};
declare let KDCustomOptionsSpacing: {
    UI: number;
    ClothesToggles: number;
};
declare function KDGetWindowCanvasOffset(): {
    x: number;
    y: number;
    width: number;
    height: number;
    widthscale: number;
    heightscale: number;
    canvaswidth: number;
    canvasheight: number;
};
declare function KDResetPlayerTags(player?: entity): void;
declare function KDTogglesDraw(): void;
declare let KDTickleReplaceStrings: string[];
declare function KDTextReplace(text: string, replacestrings: string[], FromSuff?: string, ToSuff?: string): string;
declare let KinkyDungeonPreviousState: string;
declare function KDDrawWardrobeButton(): void;
declare function KDLoadConsentFromSave(saveData: KinkyDungeonSave, override: any): void;
declare function KDFirstRunMainmenu(): void;
declare function KDRunnewConsentCheck(): void;
declare let KDRender: {
    JourneyMap: () => void;
};
declare let KDCustomDrawState: {
    JourneyMap: (xOffset: any) => void;
};
interface KDCreateMapReturnData {
    newMapDataObject: KDMapDataType;
    oldMapDataObject: KDMapDataType;
}
declare function KinkyDungeonCreateMap(MapParams: floorParams, RoomType: string, MapMod: string, Floor: number, testPlacement?: boolean, seed?: boolean, forceFaction?: string, worldLocation?: {
    x: number;
    y: number;
}, useExisting?: boolean, origMapType?: string, direction?: number, forceEscape?: string): KDCreateMapReturnData;
declare let KDStageBossGenerated: boolean;
declare function KinkyDungeonGenNavMap(fromPoint?: {
    x: number;
    y: number;
}): void;
declare function KDLowPriorityNavMesh(): void;
type GridEntry = {
    [_: string]: {
        x: number;
        y: number;
    };
};
declare function KinkyDungeonGetAccessible(startX: number, startY: number, testX?: number, testY?: number, interactable?: string): GridEntry;
declare function KinkyDungeonGetAccessibleRoom(startX: number, startY: number): string[];
declare function KinkyDungeonIsAccessible(testX: number, testY: number): boolean;
declare function KinkyDungeonIsReachable(testX: number, testY: number, testLockX: number, testLockY: number): boolean;
declare function KinkyDungeonGetAllies(): entity[];
declare function KDIsImprisoned(enemy: entity): boolean;
declare function KDCanBringAlly(e: entity): boolean;
declare function KDChooseFactions(factionList: string[], Floor: number, Tags: string[], BonusTags: Record<string, {
    bonus: number;
    mult: number;
}>, Set: boolean): string[];
type SpawnBox = {
    requiredTags: string[];
    tags: string[];
    currentCount: number;
    maxCount: number;
    filterTags?: string[];
    ignoreAllyCount?: boolean;
    bias?: number;
};
declare function KinkyDungeonPlaceEnemies(spawnPoints: any[], InJail: boolean, mapmodtags: string[], BonusTags: any, Floor: number, width: number, height: number, altRoom?: any, randomFactions?: any[], factionEnemy?: any): void;
declare function KinkyDungeonGetClosestSpecialAreaDist(x: number, y: number): number;
declare function KinkyDungeonCreateRectangle(Left: number, Top: number, Width: number, Height: number, Border?: boolean, Fill?: boolean, Padding?: number | boolean, OL?: boolean, NW?: boolean, flexCorner?: boolean, Jail?: boolean): void;
declare function KinkyDungeonPlaceStairs(_startpos: number, width: number, height: number, noStairs: boolean, nostartstairs: boolean, origMapType: string): void;
declare function KinkyDungeonSkinArea(skin: any, X: number, Y: number, Radius: number, NoStairs?: boolean): void;
declare let KDMinBoringness: number;
declare function KinkyDungeonPlaceChests(params: floorParams, chestlist: any[], spawnPoints: any[], shrinelist: any[], treasurechance: number, treasurecount: number, rubblechance: number, Floor: number, width: number, height: number): void;
declare function KinkyDungeonPlaceLore(width: number, height: number): number;
declare function KinkyDungeonPlaceHeart(width: number, height: number, _Floor: number): boolean;
declare function KinkyDungeonPlaceShrines(chestlist: any[], shrinelist: any[], shrinechance: number, shrineTypes: any[], shrinecount: number, shrinefilter: string[], _ghostchance: number, manaChance: number, orbcount: number, filterTypes: string[], Floor: number, width: number, height: number, allowQuests: boolean, allowHearts: boolean): number;
declare function KinkyDungeonPlaceChargers(chargerlist: any[], chargerchance: number, litchargerchance: number, chargercount: number, _Floor: number, width: number, height: number): void;
declare let KinkyDungeonCommercePlaced: number;
declare function KDGetMapParams(): floorParams;
declare function KinkyDungeonGenerateShrine(_Floor: number, filterTypes: string[], manaChance: number): {
    type: any;
    drunk: boolean;
} | {
    type: string;
    drunk?: undefined;
};
declare function KinkyDungeonPlaceSpecialTiles(gaschance: number, gasType: string, _Floor: number, width: number, height: number): void;
declare function KinkyDungeonPlaceBrickwork(brickchance: number, _Floor: number, width: number, height: number): void;
declare function KinkyDungeonPlaceTraps(traps: any[], traptypes: any[], trapchance: number, doorlocktrapchance: number, Floor: number, width: number, height: number): void;
declare function KinkyDungeonPlacePatrols(Count: number, width: number, height: number): void;
declare function KDCheckMainPath(): boolean;
declare function KDPruneEntrances(width: number, height: number): void;
declare let KDFocusableTextFields: string[];
declare let KDSlowedSprintCost: number;
declare let KDMAXGODDESSQUESTS: number;
declare let KDBalanceSprintMult: number;
declare let KDBalanceInertiaMult: number;
declare let KDBalanceAttackMult: number;
declare let KDBalanceCastArmsMult: number;
declare let KDBalanceCastLegsMult: number;
declare let KinkyDungeonGagMumbleChanceRestraint: number;
declare let KinkyDungeonGagMumbleChance: number;
declare let KinkyDungeonGagMumbleChancePerRestraint: number;
declare let MiniGameKinkyDungeonCheckpoint: string;
declare let MiniGameKinkyDungeonLevel: number;
declare let KinkyDungeonMapIndex: Record<string, string>;
declare let KDWorldMap: Record<string, KDWorldSlot>;
declare let KDCurrentWorldSlot: {
    x: number;
    y: number;
};
declare let KDMapData: KDMapDataType;
declare let KDMapExtraData: {
    Boringness: number[];
    VisionGrid: number[];
    ColorGrid: number[];
    ShadowGrid: number[];
    BrightnessGrid: number[];
};
declare let KinkyDungeonUpdateLightGrid: boolean;
declare let KinkyDungeonGrid_Last: string;
declare let KinkyDungeonGridSizeDisplay: number;
declare let KinkyDungeonGridWidthDisplay: number;
declare let KinkyDungeonGridHeightDisplay: number;
declare let KinkyDungeonMoveDirection: MoveDirection;
declare let KinkyDungeonTextMessagePriority: number;
declare let KinkyDungeonTextMessage: string;
declare let KinkyDungeonTextMessageNoPush: boolean;
declare let KinkyDungeonTextMessageTime: number;
declare let KinkyDungeonTextMessageColor: string;
declare let KinkyDungeonActionMessagePriority: number;
declare let KinkyDungeonActionMessage: string;
declare let KinkyDungeonActionMessageNoPush: boolean;
declare let KinkyDungeonActionMessageTime: number;
declare let KinkyDungeonActionMessageColor: string;
declare let KinkyDungeonSpriteSize: number;
declare let KinkyDungeonCanvas: HTMLCanvasElement;
declare let KinkyDungeonContext: any;
declare let KinkyDungeonCanvasFow: HTMLCanvasElement;
declare let KinkyDungeonContextFow: any;
declare let KinkyDungeonCanvasPlayer: HTMLCanvasElement;
declare let KinkyDungeonContextPlayer: any;
declare let KinkyDungeonPOI: any[];
declare let KinkyDungeonStairTiles: string;
declare let KDDefaultAvoidTiles: string;
declare let KinkyDungeonGroundTiles: string;
declare let KDGrowableTiles: string;
declare let KinkyDungeonWallTiles: string;
declare let KDCrackableTiles: string;
declare let KDMendableTiles: string;
declare let KinkyDungeonBlockTiles: string;
declare let KinkyDungeonMovableTilesEnemy: string;
declare let KinkyDungeonMovableTilesSmartEnemy: string;
declare let KDInteractableTiles: string;
declare let KinkyDungeonMovableTiles: string;
declare let KDRandomDisallowedNeighbors: string;
declare let KDTrappableNeighbors: string;
declare let KDTrappableNeighborsLikely: string;
declare let KinkyDungeonTransparentObjects: string;
declare let KinkyDungeonTransparentMovableObjects: string;
declare let KDOpenDoorTiles: string[];
declare let KinkyDungeonTargetTile: any;
declare let KinkyDungeonTargetTileLocation: string;
declare const KinkyDungeonBaseLockChance = 0.12;
declare const KinkyDungeonScalingLockChance = 0.16;
declare const KinkyDungeonBlueLockChance = -0.1;
declare const KinkyDungeonBlueLockChanceScaling = 0.015;
declare const KinkyDungeonBlueLockChanceScalingMax = 0.4;
declare const KinkyDungeonGoldLockChance = -0.25;
declare const KinkyDungeonGoldLockChanceScaling = 0.015;
declare const KinkyDungeonGoldLockChanceScalingMax = 0.25;
declare const KinkyDungeonPurpleLockChance = 0;
declare const KinkyDungeonPurpleLockChanceScaling = 0.02;
declare const KinkyDungeonPurpleLockChanceScalingMax = 0.6;
declare let KinkyDungeonCurrentMaxEnemies: number;
declare let KinkyDungeonNextDataSendTime: number;
declare const KinkyDungeonNextDataSendTimeDelay = 500;
declare let KinkyDungeonNextDataSendTimeDelayPing: number;
declare let KinkyDungeonNextDataSendStatsTimeDelay: number;
declare let KinkyDungeonNextDataSendStatsTime: number;
declare let KinkyDungeonNextDataLastTimeReceived: number;
declare let KinkyDungeonNextDataLastTimeReceivedTimeout: number;
declare let KinkyDungeonLastMoveDirection: any;
declare let KinkyDungeonTargetingSpell: spell;
declare let KDAutoWaitDelayed: boolean;
declare let KinkyDungeonTargetingSpellItem: any;
declare let KinkyDungeonTargetingSpellWeapon: any;
declare let KinkyDungeonMaxLevel: number;
declare let KinkyDungeonLastMoveTimer: number;
declare let KinkyDungeonLastMoveTimerStart: number;
declare let KinkyDungeonLastMoveTimerCooldown: number;
declare let KinkyDungeonLastMoveTimerCooldownStart: number;
declare let KinkyDungeonJailLeash: number;
declare let KinkyDungeonJailLeashY: number;
declare let KinkyDungeonJailLeashX: number;
declare let KinkyDungeonSaveInterval: number;
declare let KinkyDungeonSFX: any[];
declare function KDIsStairExplored(x: any, y: any): boolean;
declare function KDExploreStairs(x: any, y: any): void;
declare function KDDefaultMapData(mapX: number, mapY: number, RoomType?: string, MapMod?: string): KDMapDataType;
declare function KinkyDungeonEffectTilesSet(location: string, value: Record<string, effectTile>): void;
declare function KinkyDungeonEffectTilesGet(location: string, mapData?: KDMapDataType): Record<string, effectTile>;
declare function KDSetPlayerTile(value: any): any;
declare function KDGetPlayerTile(): any;
declare function KinkyDungeonTilesSet(location: string, value: any): any;
declare function KinkyDungeonTilesGet(location: string): any;
declare function KinkyDungeonTilesDelete(location: string): void;
declare function KDClearTile(location: string): void;
declare function KinkyDungeonSkinSet(location: string, value: any): void;
declare function KinkyDungeonSkinGet(location: string): any;
declare function KinkyDungeonSkinDelete(location: string): void;
declare function KDAlreadyOpened(x: number, y: number): boolean;
declare function KinkyDungeonPlaySound(src: string, entity?: entity, vol?: number): void;
declare function KinkyDungeonSetCheckPoint(Checkpoint?: string, _AutoSave?: any, _suppressCheckPoint?: any): void;
declare function KinkyDungeonNewGamePlus(increaseDiff: boolean): void;
declare function KDResetData(Data?: KDGameDataBase): void;
declare function InitPersistentGen(): void;
declare function KDResetEventData(Data?: any): void;
declare function KinkyDungeonInitialize(Level: number, Load?: any): void;
declare function KDInitCanvas(): void;
declare function KDCreateBoringness(noBoring: boolean): void;
declare function KDGetMapSize(): number;
declare function KDGetMazeParams(params: floorParams): {
    oldest: number;
    newest: number;
    chance_STOP: number;
    opennessMult: number;
};
declare function KDGetWorldMapLocation(point: {
    x: number;
    y: number;
}): KDWorldSlot;
declare function KDCreateWorldLocation(x: number, y: number, jx: number, jy: number, _main?: string): void;
declare function KDSaveRoom(slot: {
    x: number;
    y: number;
}, saveconstantX: boolean): KDMapDataType;
declare function KDUnPackEnemies(data: KDMapDataType): void;
declare function KDSyncPersistentEntities(Level: number, data: KDMapDataType, removeMissing?: boolean): void;
declare function KDUnPackEnemy(enemy: entity): boolean;
declare function KDPackEnemy(enemy: entity): void;
declare function KDPackEnemies(data: KDMapDataType): void;
declare function KDLoadMapFromWorld(x: number, y: number, room: string, direction?: number, constantX?: boolean, ignoreAware?: boolean): KDMapDataType;
declare function KDPlacePlayerBasedOnDirection(direction?: number, sideRoomIndex?: string, nomove?: boolean): void;
declare function KDInitTempValues(seed?: boolean): void;
declare function KDUpdateOptionGame(start: any): void;
declare function KDIsHellFloor(Level?: number): boolean;
declare function KDGetEffLevel(): number;
declare function KDGetEffMaxLevel(): number;
declare function KDRandomizeRedLock(): string;
declare function KDGetLockList(Guaranteed?: boolean, Floor?: number, AllowGold?: boolean, Type?: string, Data?: any): Record<string, number>;
declare function KinkyDungeonGenerateLock(Guaranteed?: boolean, Floor?: number, AllowGold?: boolean, Type?: string, Data?: any): string;
declare let KDPlaceMode: {
    MODE_PLACENEW: number;
    MODE_MODIFYPOTENTIALANDEXISTING: number;
    MODE_MODIFYEXISTINGONLY: number;
};
declare function KinkyDungeonPlaceDoors(doorchance: number, doortrapchance: number, nodoorchance: number, doorlockchance: number, trapChance: number, grateChance: number, Floor: number, width: number, height: number, placeMode?: number): any[];
declare function KinkyDungeonReplaceDoodads(Chance: number, barchance: number, wallRubblechance: number, wallhookchance: number, ceilinghookchance: number, width: number, height: number, altType?: any): void;
declare function KinkyDungeonPlaceJailEntrances(width: number, height: number, altType?: any): void;
declare function KinkyDungeonPlaceFurniture(barrelChance: number, cageChance: number, width: number, height: number, altType: any): void;
interface KDFoodData {
    Food: string;
    Weight: number;
    Theft?: string;
    OnEat?: string;
    FilterPerk?: string;
    inedible?: boolean;
}
declare let KDFood: Record<string, KDFoodData>;
declare let KDOnEatScripts: Record<string, (x: number, y: number, tile: any, food: KDFoodData) => void>;
declare function KinkyDungeonPlaceFood(foodChance: number, width: number, height: number, altType: AltType): void;
declare function KinkyDungeonPlaceTorches(torchchance: number, torchlitchance: number, torchchanceboring: number, width: number, height: number, _altType: any, torchreplace: any): void;
declare function KinkyDungeonReplaceVert(width: number, height: number): void;
declare function KinkyDungeonMazeWalls(Cell: any, Walls: GridEntry, WallsList: GridEntry): void;
declare function KinkyDungeonMapSet(X: number, Y: number, SetTo: string, VisitedRooms?: any[]): boolean;
declare function KinkyDungeonMapSetForce(X: number, Y: number, SetTo: string, VisitedRooms?: any[]): boolean;
declare function KinkyDungeonMapDataSet(data: KDMapDataType, X: number, Y: number, SetTo: string): boolean;
declare function KinkyDungeonBoringGet(X: number, Y: number): number;
declare function KinkyDungeonBoringSet(X: number, Y: number, SetTo: number): boolean;
declare function KinkyDungeonMapGet(X: number, Y: number): string;
declare function KinkyDungeonMapDataGet(data: KDMapDataType, X: number, Y: number): string;
declare function KinkyDungeonVisionSet(X: number, Y: number, SetTo: number): boolean;
declare function KinkyDungeonBrightnessSet(X: number, Y: number, SetTo: number, monotonic?: boolean): boolean;
declare function KinkyDungeonColorSet(X: number, Y: number, SetTo: number, monotonic?: boolean): boolean;
declare function KinkyDungeonShadowSet(X: number, Y: number, SetTo: number, monotonic?: boolean): boolean;
declare function KinkyDungeonVisionGet(X: number, Y: number): number;
declare function KinkyDungeonBrightnessGet(X: number, Y: number): number;
declare function KinkyDungeonColorGet(X: number, Y: number): number;
declare function KinkyDungeonShadowGet(X: number, Y: number): number;
declare function KinkyDungeonFogGet(X: number, Y: number): any;
declare function KinkyDungeonFogSet(X: number, Y: number, val: number): any;
declare function KinkyDungeonFogMemoryGet(X: number, Y: number): any;
declare function KinkyDungeonFogMemorySet(X: number, Y: number, val: number): any;
declare let canvasOffsetX: number;
declare let canvasOffsetY: number;
declare const canvasOffsetX_ui = 500;
declare const canvasOffsetY_ui = 164;
interface MoveDirection {
    x: number;
    y: number;
    delta: number;
}
declare let KDDirectionFactor: number;
declare let KDDirectionFactorScale: number;
declare function KinkyDungeonGetDirection(dx: number, dy: number): MoveDirection;
declare function KDGetDirGeometric(dx: number, dy: number): MoveDirection;
declare function KinkyDungeonGetDirectionRandom(dx: number, dy: number): MoveDirection;
declare function KDGetAdjacentTiles(dx: number, dy: number): KDPoint[];
declare let KinkyDungeonAutoWaitSuppress: boolean;
declare function KinkyDungeonControlsEnabled(): boolean;
declare function KDStartSpellcast(tx: number, ty: number, SpellToCast: spell, enemy: any, player: any, bullet: KDBullet, data: any): string;
declare function KinkyDungeonClickGame(event: MouseEvent, _Level?: number): boolean;
declare function KinkyDungeonGetMovable(): string;
declare function KinkyDungeonListenKeyMove(): boolean;
declare let KDShopBuyConfirm: boolean;
declare function KDEnter(): void;
declare function KDCheckCustomKeypress(): boolean;
declare function KinkyDungeonGameKeyDown(): boolean;
declare function KinkyDungeonGameKeyUp(lastPress: number): boolean;
declare function KinkyDungeonSendTextMessage(priority: number, text: string, color: string, time?: number, noPush?: boolean, noDupe?: boolean, entity?: entity, filter?: string): boolean;
declare function KinkyDungeonSendActionMessage(priority: number, text: string, color: string, time: number, noPush?: boolean, noDupe?: boolean, entity?: entity, filter?: string, antifilter?: any): boolean;
declare let KinkyDungeonNoMoveFlag: boolean;
declare function KDAttackCost(weapon?: weapon, noEvent?: boolean): {
    attackCost: number;
    stamPenType: string;
    orig: number;
    bonus: number;
    mult: number;
};
declare function KDShouldCapture(Enemy: entity): boolean;
declare function KDShouldTease(Enemy: entity): boolean;
declare function KinkyDungeonLaunchAttack(Enemy: entity, skip?: number): string;
declare function KDDoAttack(Enemy: entity, teasesub: boolean, attackCost: number, skip: number): {
    result: string;
    skip: number;
};
declare function KDDoCapture(Enemy: entity, attackCost: number, noadvance: boolean, skip: number): void;
declare function KDPlayerCanMove(player: any, x: any, y: any): boolean;
declare function KinkyDungeonMove(moveDirection: {
    x: number;
    y: number;
}, delta: number, AllowInteract: boolean, SuppressSprint?: boolean, forceSprint?: boolean): boolean;
declare function KinkyDungeonWaitMessage(NoTime: boolean, delta: number, msg?: boolean): void;
declare function KinkyDungeonMoveTo(moveX: number, moveY: number, willSprint: boolean, _allowPass: boolean, sprintCost?: number): number;
declare function KDBalanceSprint(): boolean;
declare function KDCanSprint(cost?: number): boolean;
declare let KinkyDungeonLastAction: string;
declare let KinkyDungeonLastTurnAction: string;
declare let KDDrawUpdate: number;
declare let KDVisionUpdate: number;
declare let KDLastTick: number;
declare function KinkyDungeonAdvanceTime(delta: number, NoUpdate?: boolean, NoMsgTick?: boolean): void;
declare let KDEntityFlagCache: Map<any, any>;
declare let KDUpdateEntityFlagCache: boolean;
declare function KDGetEntityFlagCache(): void;
declare let KDItemEventCache: Map<any, any>;
declare let KDUpdateItemEventCache: boolean;
declare function KDGetItemEventCache(): void;
declare let KDAllowDialogue: boolean;
declare let lastFloaterRefresh: number;
declare function KinkyDungeonTargetTileMsg(): boolean;
declare function KDAddAppearance(C: Character, _Group: string, ItemAsset: any, NewColor: string | string[], DifficultyFactor?: number, ItemMemberNumber?: number, _Refresh?: boolean, item?: Item): Item;
declare function KDAddModel(C: Character, _Group: string, ItemModel: Model, NewColor: string | string[], filters: Record<string, LayerFilter>, item?: item, Properties?: Record<string, LayerPropertiesType>, factionFilters?: Record<string, FactionFilterDef>): Item;
declare function KinkyDungeonCloseDoor(x: number, y: number): void;
declare let KDEnemyCache: Map<string, entity>;
declare let KDEnemyEventCache: Map<string, Map<number, boolean>>;
declare let KDUpdateEnemyCache: boolean;
declare let KDIDCache: Map<any, any>;
declare function KDGetEnemyCache(): Map<string, entity>;
declare let KDTileQuery: string;
declare let KDTileLast: any;
declare function KDTile(x?: number, y?: number): any;
declare function KDTileDelete(x?: number, y?: number): void;
declare function KDStunTurns(turns: number, noFlag?: boolean): void;
declare function KDKneelTurns(turns: number): void;
type KDTNamedAndWeighted = {
    name: string;
    weight: number;
};
declare function ListToRecord<T extends KDTNamedAndWeighted>(list: T[]): Record<string, T>;
type KDTWeighted = {
    weight?: number;
};
declare function GetByWeight<T extends KDTWeighted>(list: Record<string, T>): T;
declare function KDGetByWeight(list: Record<string, number>): string;
declare let KDKeyCheckers: {
    Toggles: () => boolean;
    Zoom: () => boolean;
    Shop: () => boolean;
    Dialogue: () => boolean;
};
declare function KDGetAltType(Floor: number, MapMod?: string, RoomType?: string): AltType;
declare function KDCanPassEnemy(_player: entity, Enemy: entity, force?: boolean, ignoreIfAlready?: boolean): boolean;
declare function KDIsInBounds(x: number, y: number, pad?: number): boolean;
declare function KDSprintCost(sprintdata?: any, sprintCost?: number, accountForSlow?: boolean): number;
declare function KDSetMapFlag(map: KDMapDataType, flag: string): void;
declare function KDUpdateForceOutfit(C: Character): void;
declare function KDGenerateBaseTraffic(width?: number, height?: number): void;
declare function KDPruneWorld(): void;
declare function KDEnemyTurnToFace(enemy: entity, x: number, y: number): void;
declare function KDTurnToFace(dx: number, dy: number): boolean;
declare function KDAddRepopQueue(repopdata: RepopQueueData, data: KDMapDataType): void;
declare function KDRepopQueueGet(data: KDMapDataType, x: number, y: number): RepopQueueData[];
declare function KDUpdateRepopQueue(data: KDMapDataType, delta: number): void;
declare function KDTPToSummit(id: number): void;
declare function KDWaitTimeDelayedAction(forceDanger?: boolean): number;
declare function KDDelayedActionStart(): void;
declare function KDTalkToEnemy(Enemy: entity): boolean;
declare function KDFastMoveTo(xx: number, yy: number): number;
declare let KDOverrideWaitTimeThreshold: number;
declare function KDUpdateWaitTime(delay: number, force?: boolean, nooverride?: boolean): void;
declare let KDCustomKeyDown: ((key: any) => boolean)[];
declare let KDCustomKeyUp: any[];
interface KDFailMoveData {
    player: entity;
    moveX: number;
    moveY: number;
    cancelSprint: boolean;
}
declare let KDVibeSounds: {
    ItemVulva: {
        sound: string;
        Audio: any;
        update: boolean;
    };
    ItemButt: {
        sound: string;
        Audio: any;
        update: boolean;
    };
    ItemNipples: {
        sound: string;
        Audio: any;
        update: boolean;
        vol: number;
    };
};
declare let KDVibeSoundRedirect: {
    ItemVulva: string;
    ItemVulvaPiercings: string;
    ItemButt: string;
    ItemNipplesPiercings: string;
    ItemNipples: string;
    ItemPelvis: string;
    ItemBreast: string;
    ItemBoots: string;
};
declare let KDVibeSound: {
    ItemVulva: string;
    ItemButt: string;
    ItemNipples: string;
};
declare let KDResolutionConfirm: boolean;
declare let KDResolution: number;
declare let KDResolutionList: number[];
declare let KDResolutionListIndex: number;
declare let KDVibeVolume: number;
declare let KDVibeVolumeListIndex: number;
declare let KDVibeVolumeList: number[];
declare let KDMusicVolumeMult: number;
declare let KDMusicVolume: number;
declare let KDMusicVolumeListIndex: number;
declare let KDMusicVolumeList: number[];
declare let KDSfxVolume: number;
declare let KDSfxVolumeListIndex: number;
declare let KDSfxVolumeList: number[];
declare let KDAnimSpeed: number;
declare let KDAnimSpeedListIndex: number;
declare let KDAnimSpeedList: number[];
declare let KDGamma: number;
declare let KDGammaListIndex: number;
declare let KDGammaList: number[];
declare let KDCharSize: number;
declare let KDCharSizeListIndex: number;
declare let KDCharSizeList: number[];
declare let KDWToolsToggleScrollModes: string[];
declare let KDWToolsToggleScrollMode: string;
declare let KDWToolsToggleScrollModeIndex: number;
declare let KDWToolsLayerAbbrModes: string[];
declare let KDWToolsLayerAbbrMode: string;
declare let KDWToolsLayerAbbrModeIndex: number;
declare let KDToggles: {
    SoundOffWhenMin: boolean;
    StackOutfitItems: boolean;
    SpellBook: boolean;
    ShowRestraintOnHover: boolean;
    Fullscreen: boolean;
    SkipIntro: boolean;
    SkipTutorial: boolean;
    VibeSounds: boolean;
    Music: boolean;
    Sound: boolean;
    MobileTextures: boolean;
    Bloom: boolean;
    StunFlash: boolean;
    ParticlesFX: boolean;
    ParticlesRestrain: boolean;
    ArousalHearts: boolean;
    VibeHearts: boolean;
    GagParticles: boolean;
    FancyWalls: boolean;
    FancyShadows: boolean;
    LightmapFilter: boolean;
    EnemyAnimations: boolean;
    RetroAnim: boolean;
    DrawArmor: boolean;
    DynamicArmor: boolean;
    HideFloatingWeapon: boolean;
    CrotchRopeOption: boolean;
    ChastityOption: boolean;
    ChastityOption2: boolean;
    ChastityBraOption: boolean;
    SimpleColorPicker: boolean;
    PaletteColorPicker: boolean;
    TransparentUI: boolean;
    Center: boolean;
    TurnCounter: boolean;
    ShowNPCStatuses: boolean;
    ShowSpellRange: boolean;
    ForceWarnings: boolean;
    EnableMinimap: boolean;
    BuffSide: boolean;
    ShowPath: boolean;
    ShowFacing: boolean;
    ShowSameCatSpells: boolean;
    PlayerAura: boolean;
    EnemyAura: boolean;
    OutlineAura: boolean;
    GreyscaleBlindness: boolean;
    NearestNeighbor: boolean;
    LazyWalk: boolean;
    ShiftLatch: boolean;
    Nipples: boolean;
    NippleToysOption: boolean;
    NippleToysHide: boolean;
    NipplePiercingsHide: boolean;
    FlipStatusBars: boolean;
    ForcePalette: boolean;
    RestraintPalette: boolean;
    AutoLoadMods: boolean;
    FlipPlayer: boolean;
    FlipPlayerAuto: boolean;
    Helper: boolean;
    FastFloaters: boolean;
    NoDmgFloaters: boolean;
    NoForceGreet: boolean;
    StruggleBars: boolean;
    ShowJailedNPCSprites: boolean;
    ShowPatronNPCSprites: boolean;
    ShowServantNPCSprites: boolean;
    ShowOtherNPCSprites: boolean;
    ShowZoom: boolean;
    Backgrounds: boolean;
    RawDP: boolean;
    OnlySelfQuickInv: boolean;
    OverrideOutfit: boolean;
    OverrideConsent: boolean;
    SaveOutfit: boolean;
    ModCompat: boolean;
    ApplyPaletteRestraint: boolean;
    ApplyPaletteTransform: boolean;
    NoOutfitPalette: boolean;
    IgnoreApplyCharPalette: boolean;
    AlwaysApplyCharPalette: boolean;
    DefaultApplyCharPalette: boolean;
    Autoloot: boolean;
    OScreenFilter: boolean;
    DistractScreenFilter: boolean;
    MMLabels: boolean;
    HideArmorWardrobe: boolean;
    BindPercent: boolean;
    AutoWaitDelayed: boolean;
    FastMovePassable: boolean;
    FastMoveDoors: boolean;
    ExtraTooltipHeight: boolean;
    ExtraTooltipCycle: boolean;
    HotbarTooltips: boolean;
    ShowExtraStruggle: boolean;
    InvLimit: boolean;
    Headpats: boolean;
    ExtraBuffRow: boolean;
    StruggleContext: boolean;
    TrainingBuff: boolean;
    FlashingWarning: boolean;
    HypnoOverlay: boolean;
    WarningSound: boolean;
};
declare let KDToggleCategories: {
    StackOutfitItems: string;
    OverrideConsent: string;
    FlashingWarning: string;
    StruggleContext: string;
    Headpats: string;
    ExtraBuffRow: string;
    ShowExtraStruggle: string;
    ExtraTooltipHeight: string;
    ExtraTooltipCycle: string;
    HotbarTooltips: string;
    FastMovePassable: string;
    FastMoveDoors: string;
    MMLabels: string;
    RawDP: string;
    Backgrounds: string;
    ShowZoom: string;
    ShowJailedNPCSprites: string;
    ShowPatronNPCSprites: string;
    ShowServantNPCSprites: string;
    ShowOtherNPCSprites: string;
    HypnoOverlay: string;
    StruggleBars: string;
    SpellBook: string;
    FastFloaters: string;
    NoDmgFloaters: string;
    RetroAnim: string;
    HighResDisplacement: string;
    MobileTextures: string;
    OptRender: string;
    Bloom: string;
    StunFlash: string;
    ParticlesFX: string;
    ParticlesRestrain: string;
    ArousalHearts: string;
    VibeHearts: string;
    GagParticles: string;
    FancyWalls: string;
    FancyShadows: string;
    LightmapFilter: string;
    EnemyAnimations: string;
    DrawArmor: string;
    CrotchRopeOption: string;
    ChastityOption: string;
    ChastityOption2: string;
    ChastityBraOption: string;
    SimpleColorPicker: string;
    Nipples: string;
    NippleToysOption: string;
    NippleToysHide: string;
    NipplePiercingsHide: string;
    TransparentUI: string;
    Center: string;
    TurnCounter: string;
    ShowNPCStatuses: string;
    ShowSpellRange: string;
    ForceWarnings: string;
    EnableMinimap: string;
    NoForceGreet: string;
    BuffSide: string;
    ShowPath: string;
    ShowFacing: string;
    ShowSameCatSpells: string;
    PlayerAura: string;
    EnemyAura: string;
    OutlineAura: string;
    NearestNeighbor: string;
    Helper: string;
    FlipStatusBars: string;
    ShowRestraintOnHover: string;
    ForcePalette: string;
    RestraintPalette: string;
    FlipPlayer: string;
    FlipPlayerAuto: string;
    GreyscaleBlindness: string;
    DynamicArmor: string;
    OnlySelfQuickInv: string;
    HideFloatingWeapon: string;
    ApplyPaletteRestraint: string;
    ApplyPaletteTransform: string;
    NoOutfitPalette: string;
    PaletteColorPicker: string;
    IgnoreApplyCharPalette: string;
    AlwaysApplyCharPalette: string;
    DefaultApplyCharPalette: string;
    Autoloot: string;
    TrainingBuff: string;
    HideArmorWardrobe: string;
    BindPercent: string;
    AutoWaitDelayed: string;
    WarningSound: string;
};
declare function KDStopAllVibeSounds(Exceptions?: string[]): void;
declare function KDUpdateVibeSound(Location: string, Sound: string, Volume: number): void;
declare function KDUpdateVibeSounds(): void;
declare function KDSumVibeLocations(): string[];
declare function KDGetVibeLocation(item: item): string[];
declare function KDRandomizeVibeSound(): string;
declare function KinkyDungeonStartVibration(source: string, name: string, locations: string[], intensity: number, duration: number, numLoops?: number, denyTime?: number, denialsLeft?: number, edgeTime?: number, edgeOnly?: boolean, alwaysDeny?: boolean, denialChance?: number, denialChanceLikely?: number, tickEdgeAtMaxArousal?: boolean, vibeMods?: VibeMod[]): void;
declare function KDIsVibeCD(cooldown: Record<string, number>): boolean;
declare function KinkyDungeonAddVibeModifier(source: string, name: string, location: string, intensityMod: number, duration?: number, intensitySetpoint?: number, edgeOnly?: boolean, forceDeny?: boolean, bypassDeny?: boolean, bypassEdge?: boolean, extendDuration?: boolean, denyChanceMod?: number, denyChanceLikelyMod?: number): void;
declare function KinkyDungeonGetDenyChance(chance: number): number;
declare function KinkyDungeonVibratorsDeny(chance: number): boolean;
declare function KinkyDungeonCalculateVibeLevel(delta: number): void;
declare function KinkyDungeonEndVibration(): void;
declare function KinkyDungeonCanOrgasm(): boolean;
declare const KDAim: KDBuff;
declare const KDEquip: KDBuff;
declare const KDAim2: KDBuff;
declare const KDAim3: KDBuff;
declare const KDConduction: KDBuff;
declare const KDDrenched: KDBuff;
declare const KDAdrenaline: KDBuff;
declare const KDAdrenaline2: KDBuff;
declare const KDBurning: KDBuff;
declare const KDTrainingUnit: KDBuff;
declare const KDDisenchant1: KDBuff;
declare const KDDisenchant2: KDBuff;
declare const KDVolcanism: KDBuff;
declare const KDDrenched2: KDBuff;
declare const KDDrenched3: KDBuff;
declare const KDBoundByFate: KDBuff;
declare const KDTaunted: KDBuff;
declare const KDPoisonSleep: KDBuff;
declare const KDPoisonSleepLong: KDBuff;
declare const KDArousalOverTime: KDBuff;
declare const KDArousalOverTime2: KDBuff;
declare const KDEager: KDBuff;
declare const KDMasochist: KDBuff;
declare const KDChilled: KDBuff;
declare const KDSlimed: KDBuff;
declare const KDEncased: KDBuff;
declare const KDEncasedMetal: KDBuff;
declare const KDEncasedDoll: KDBuff;
declare const KDChastity: KDBuff;
declare const KDVibrate1: KDBuff;
declare const KDVibrate2: KDBuff;
declare const KDVibrate3: KDBuff;
declare const KDToySecret: KDBuff;
declare const KDToy: KDBuff;
declare const KDPlugged: KDBuff;
declare const KDDoublePlugged: KDBuff;
declare const KDTaped: KDBuff;
declare const KDGlueVulnLow: KDBuff;
declare const KDGlueResist: KDBuff;
declare const KDDollDebuff: KDBuff;
declare const KDDollDebuff2: KDBuff;
declare const KDSlowed: KDBuff;
declare const KDSlowedSlightly: KDBuff;
declare const KDKnockbackable: KDBuff;
declare const KDAttackSlow: KDBuff;
declare const Silenced: KDBuff;
declare const KDAntiMagicMiscast: KDBuff;
declare const KDUnsteady: KDBuff;
declare const KDUnsteady2: KDBuff;
declare const KDUnsteady3: KDBuff;
declare const KDWaterSlow: KDBuff;
declare const KDNoChill: KDBuff;
declare const KDNoChillNoAura: KDBuff;
declare function KDChillWalk(entity: entity): boolean;
declare const KDRestraintDisarmLight: KDBuff;
declare const KDRestraintReduceAccuracy: KDBuff;
declare const KDBuffReference: Record<string, KDBuff[]>;
declare const KDDisenchantSelf: KDBuff;
declare let KDCustomBuff: Record<string, (entity: entity, buff: KDBuff) => void>;
declare let KDBuffClick: Record<string, (buff: KDBuff, entity: entity, data: any) => void>;
declare let KDJourneyMapMod: {
    Random: boolean;
};
interface KDMapEnemyList {
    enemy: string;
    faction?: string;
    minfloor?: number;
    maxfloor?: number;
    furniture?: Record<string, number>;
    obstacles: Record<string, number>;
    party?: Record<string, number>;
    partytags?: string[];
    partyrequiretags?: string[];
    weightedpartymult?: number;
    randompartymult?: number;
}
declare let KDElevatorHallEnemies: KDMapEnemyList[];
declare let KDDefaultMaxFlags: {
    goldchest: number;
    lessergold: number;
    silverchest: number;
    darkchest: number;
    redchest: number;
    bluechest: number;
    forbidden: number;
    artifact: number;
    jail: number;
    playroom: number;
    supplydepot: number;
    barracks: number;
    robotroom: number;
    laboratory: number;
    library: number;
    armory: number;
    workshop: number;
    tinker: number;
    office: number;
    worship: number;
    graveyard: number;
    well: number;
    wildlife: number;
    range: number;
    arena: number;
    arena_boss: number;
    arena_miniboss: number;
    slimespawn: number;
    beastspawn: number;
    magicspawn: number;
    robotspawn: number;
};
interface AltType {
    name: string;
    Title?: string;
    bossroom?: boolean;
    noReverse?: boolean;
    width: number;
    height: number;
    genType: string;
    skiptunnel?: boolean;
    spawns: boolean;
    chests: boolean;
    shrines: boolean;
    orbs?: number;
    setpieces: Record<string, number>;
    music?: Record<string, number>;
    chargers: boolean;
    notorches?: boolean;
    heart: boolean;
    specialtiles: boolean;
    shortcut: boolean;
    enemies: boolean;
    nojail: boolean;
    nolore?: boolean;
    nokeys: boolean;
    faction?: string;
    nostairs?: boolean;
    notraps?: boolean;
    restricted?: boolean;
    forceCheckpoint?: string;
    noLeave?: boolean;
    noRelease?: boolean;
    releaseOnLowSec?: boolean;
    noClutter?: boolean;
    noTables?: boolean;
    noShrineTypes?: string[];
    tickFlags?: boolean;
    noMusic?: boolean;
    keepMainPath?: boolean;
    musicParams?: string;
    persist?: boolean;
    alwaysRegen?: boolean;
    prune?: boolean;
    keepItems?: boolean;
    constantX?: boolean;
    prisonType?: string;
    beforeWorldGenScript?: (coord: WorldCoord) => void;
    worldGenScript?: (coord: WorldCoord) => void;
    jailType?: string;
    guardType?: string;
    skin?: string;
    useDefaultMusic?: boolean;
    enemyMult?: number;
    useGenParams?: string;
    lightParams?: string;
    bonusTags?: Record<string, {
        bonus: number;
        mult: number;
    }>;
    alwaysAdvance?: boolean;
    noAdvance?: boolean;
    keepRebels?: boolean;
    keepPrisoners?: boolean;
    noWear?: boolean;
    placeJailEntrances?: boolean;
    sameFactionJailOnly?: boolean;
    friendlyFactionOnly?: boolean;
    allowJailEntrances?: boolean;
    nopatrols?: boolean;
    private?: boolean;
    isPrison?: boolean;
    startatstartpos?: boolean;
    nostartstairs?: boolean;
    nobrick?: boolean;
    noboring?: boolean;
    torches?: boolean;
    wanderTags?: Record<string, number>;
    sizeBonus?: boolean;
    loreCheckpoint?: string;
    brightness?: number;
    placeDoors?: boolean;
    noSetpiece?: boolean;
    makeMain?: boolean;
    requireJourneyTarget?: boolean;
    noQuests?: boolean;
    removePartyMembers?: boolean;
    escapeMethod?: string;
    factionSpawnsRequired?: boolean;
    torchreplace?: {
        sprite: string;
        unlitsprite: string;
        brightness: number;
    };
    noFurniture?: boolean;
    noFood?: string;
    doorPlaceMode?: number;
    noPersistentPrisoners?: boolean;
    noPersistentSpawn?: boolean;
    norestock?: boolean;
    events?: KinkyDungeonEvent[];
    data?: any;
    genCriteria?: (iteration: number) => boolean;
    elevatorCondition?: (x: number, y: number) => boolean;
    onExit?: (data: any) => void;
    drawscript?: (_delta: any, CamX: number, CamY: number, CamX_offsetVis: number, CamY_offsetVis: number) => void;
    afterExit?: (data: any) => void;
    loadscript?: (firsttime: boolean) => boolean;
    updatescript?: (delta: number) => void;
}
declare let alts: Record<string, AltType>;
declare let KDJourneyList: string[];
declare let KDJourneyListSkin: {
    Random: string;
    Harder: string;
    Temple: string;
    Explorer: string;
    Doll: string;
};
declare function KinkyDungeonAltFloor(Type: string): AltType;
declare let KinkyDungeonCreateMapGenType: Record<string, (POI: any[], VisitedRooms: any[], width: number, height: number, openness: number, density: number, hallopenness: number, data: any) => void>;
declare function KinkyDungeonCreateMaze(POI: any[], VisitedRooms: any[], width: number, height: number, openness: number, density: number, hallopenness: number, data: any): void;
declare function KinkyDungeonCreateCaldera(POI: any[], VisitedRooms: any, width: number, height: number, openness: number, density: number, _hallopenness: number, data: any): void;
declare let usePrimmMaze: boolean;
declare function KinkyDungeonCreateTileMaze(_POI: any[], VisitedRooms: any[], width: number, height: number, openness: number, density: number, _hallopenness: number, data: any): void;
declare function KinkyDungeonCreateRoom(_POI: any, _VisitedRooms: any[], width: number, height: number, _openness: number, _density: number, _hallopenness: number, _data: any): void;
declare function KinkyDungeonCreateDollStorage(_POI: any, VisitedRooms: any[], _width: number, height: number, _openness: number, _density: number, _hallopenness: number, data: any): void;
declare function KinkyDungeonCreateDollShoppe(_POI: any, VisitedRooms: any[], _width: number, height: number, _openness: number, _density: number, _hallopenness: number, data: any): void;
declare function KinkyDungeonCreateSummit(_POI: any, VisitedRooms: any[], _width: number, _height: number, _openness: number, _density: number, _hallopenness: number, data: any): void;
declare function KinkyDungeonCreateDollRoom(_POI: any, _VisitedRooms: any[], width: number, height: number, _openness: number, _density: number, _hallopenness: number, _data: any): void;
declare function KinkyDungeonCreateDemonTransition(POI: any, VisitedRooms: any[], width: number, height: number, _openness: number, _density: number, _hallopenness: number, data: any): void;
declare function KinkyDungeonCreateDollmaker(_POI: any, _VisitedRooms: any[], _width: number, _height: number, _openness: number, _density: number, _hallopenness: number, data: any): void;
declare function KinkyDungeonCreateWarden(_POI: any, _VisitedRooms: any[], _width: number, _height: number, _openness: number, _density: number, _hallopenness: number, data: any): void;
declare function KinkyDungeonCreateTunnel(_POI: any, VisitedRooms: any[], width: number, height: number, _openness: number, _density: number, _hallopenness: number, data: any): void;
declare function KinkyDungeonCreatePerkRoom(POI: any, VisitedRooms: any[], width: number, height: number, _openness: number, _density: number, _hallopenness: number, _data: any): void;
declare function KinkyDungeonCreateJourneyFloor(_POI: any, VisitedRooms: any[], width: number, height: number, _openness: number, _density: number, _hallopenness: number, _data: any): void;
declare function KinkyDungeonCreateShopStart(_POI: any, VisitedRooms: any[], width: number, height: number, _openness: number, _density: number, _hallopenness: number, data: any): void;
declare function KinkyDungeonCreateGoldVault(_POI: any, VisitedRooms: any[], _width: number, height: number, _openness: number, _density: number, _hallopenness: number, data: any): void;
declare function KinkyDungeonCreateElevatorRoom(_POI: any, VisitedRooms: any[], _width: number, height: number, _openness: number, _density: number, _hallopenness: number, data: any): void;
declare function KinkyDungeonCreateElevatorEgyptian(_POI: any, VisitedRooms: any[], _width: number, height: number, _openness: number, _density: number, _hallopenness: number, data: any): void;
declare function KinkyDungeonCreateElevatorEgyptian2(_POI: any, VisitedRooms: any[], _width: number, height: number, _openness: number, _density: number, _hallopenness: number, data: any): void;
declare function KinkyDungeonCreateTestTile(_POI: any, VisitedRooms: any[], width: number, height: number, _openness: number, _density: number, _hallopenness: number, data: any): void;
declare function KinkyDungeonCreateTutorial(_POI: any, VisitedRooms: any[], width: number, height: number, _openness: number, _density: number, _hallopenness: number, _data: any): void;
declare function KDGenerateShopVisitors(): void;
declare function KDEnumerateShopVisitors(): Record<string, number>;
declare let KDNoDragonLairCheckpoints: string[];
declare let KDDragonList: KDMapEnemyList[];
declare function KDMapgenCreateCave(POI: any, VisitedRooms: any, width: any, height: any, openness: any, density: any, hallopenness: any, data: any): void;
declare function KDGetDragonLairFurnitureZones(spacingX: number, spacingY: number, minDist: number, xCenter: number, yCenter: number): KDPoint[];
declare function KDGetDragonType(): KDMapEnemyList;
declare let KDCreationScripts: Record<string, (entity: entity, coord: WorldCoord) => boolean>;
interface KDLair {
    Name: string;
    RoomType: string;
    OwnerNPC?: number;
    OwnerFaction?: string;
    Entrance: Record<string, string>;
    EntranceTo: Record<string, string>;
    PlaceScriptOverride?: string;
    Hidden?: boolean;
    UpStairsFrom?: string;
    data?: any;
}
declare let KDPersonalAlt: {
    [_: string]: KDLair;
};
interface lairType {
    Entrances?: Record<string, string>;
    DefaultEntrance: string;
    EntrancesFrom?: Record<string, string>;
    DefaultEntranceFrom: string;
    AlwaysHide?: boolean;
}
declare let KDLairTypes: Record<string, lairType>;
declare function KDGenerateLairNameFromEnemy(RoomType: string, enemy: entity): string;
declare function KDGetLairs(slot: KDWorldSlot, id?: number): [string, string][];
declare function KDGetOutposts(slot: KDWorldSlot, faction?: number): [string, string][];
declare function KDAddLair(slot: KDWorldSlot, room: string, alt: string, id: number, hidden: boolean, entrance: string, fromRoom?: string, fromRoomEntrance?: string, entranceFrom?: string, alwaysGet?: boolean): string;
declare function KDOutpostID(faction: string, alt: string, slot: KDPoint): string;
declare function KDAddOutpost(slot: KDWorldSlot, room: string, alt: string, faction: string, hidden: boolean, entrance: string, fromRoom?: string, fromRoomEntrance?: string, entranceFrom?: string, alwaysGet?: boolean): string;
declare function KDDoLairOutpostConnections(slot: KDWorldSlot, id: string, roomFrom: string, entranceType: string, entranceTypeFrom: string): boolean;
declare function KDBuildLairs(): void;
declare function KDFindEntrance(lair: KDLair, data: KDMapDataType): LairEntrance;
declare function KDFindEntranceTo(lairFrom: KDLair, roomTo: string, data: KDMapDataType): LairEntrance;
declare function KDPlaceLairEntrance(lair: KDLair, data: KDMapDataType, entrance: LairEntrance, roomTo?: string): boolean;
interface LairEntrance {
    Type: string;
    x: number;
    y: number;
    Excavate: KDPoint[];
    PlaceScript: string;
    priority?: number;
}
declare let KDLairTypePlaceScript: Record<string, (lair: KDLair, data: KDMapDataType, entrance: LairEntrance, roomTo?: string) => boolean>;
declare let KDLairEntrancePlaceScript: Record<string, (lairData: KDLair, data: KDMapDataType, entrance: LairEntrance, roomTo?: string) => boolean>;
declare function KDGenHighSecCondition(force: boolean, enemy: entity): boolean;
declare let KDLairEntranceFilterScript: Record<string, (lair: KDLair, data: KDMapDataType, entrance: LairEntrance, roomTo?: string) => number>;
declare function KDMakeShortcutStairs(lair: KDLair, point: KDPoint, data: KDMapDataType, roomTo?: string): boolean;
interface KDRegiment {
    id: number;
    location: WorldCoord;
    room: string;
}
declare function KDGetRegiments(location?: {
    x: number;
    y: number;
}, Room?: string): KDRegiment[];
declare function UpdateRegiments(coords: WorldCoord): void;
declare let KDMapTickTime: number;
declare let KDMapTickRange: number;
declare function KDTickMaps(delta: number, minFloor: number, maxFloor: number, onlyMain: false, updateReg: boolean, updateChests: boolean): boolean;
declare let KDRefillChestInterval: number;
declare let KDRefillChestChance: number;
declare function KDRefillChests(data: KDMapDataType): void;
declare function KDRefillTick(x: number, y: number, data: KDMapDataType): void;
declare let KDRefillTypes: {
    Chest: (x: number, y: number, tile: any, data: KDMapDataType) => void;
};
declare let KinkyDungeonBones: {};
declare let KDPatronAdventurers: any[];
declare let KDPatronCustomEnemies: Map<string, ({
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customPlayLine: string;
    customIntro: string;
    customSprite: string;
    customOutfit?: undefined;
    customStyle?: undefined;
} | {
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customPlayLine: string;
    customIntro: string;
    customSprite: string;
    customOutfit: string;
    customStyle?: undefined;
} | {
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customPlayLine: string;
    customIntro: string;
    customSprite: string;
    customOutfit: string;
    customStyle: string;
})[] | ({
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customPlayLine: string;
    customIntro: string;
    customSprite: string;
    pets: {
        Frog: {
            name: string;
            color: string;
            prisoner: boolean;
            free: boolean;
            customPlayLine: string;
            customIntro: string;
            customSprite: string;
        }[];
    };
    customStyle?: undefined;
    customOutfit?: undefined;
} | {
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customPlayLine: string;
    customIntro: string;
    customSprite: string;
    customStyle: string;
    customOutfit: string;
    pets: {
        Frog: {
            name: string;
            color: string;
            prisoner: boolean;
            free: boolean;
            customPlayLine: string;
            customIntro: string;
            customSprite: string;
        }[];
    };
})[] | {
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customPlayLine: string;
    customIntro: string;
}[] | ({
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customPlayLine: string;
    customIntro: string;
    customSprite: string;
    customStyle?: undefined;
    customOutfit?: undefined;
    customOutfitBound?: undefined;
} | {
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customPlayLine: string;
    customStyle: string;
    customOutfit: string;
    customOutfitBound: string;
    customIntro: string;
    customSprite: string;
} | {
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customPlayLine: string;
    customIntro: string;
    customSprite: string;
    customOutfit: string;
    customStyle: string;
    customOutfitBound?: undefined;
})[] | ({
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customPlayLine: string;
    customIntro: string;
    customSprite: string;
    customStyle: string;
    customOutfit: string;
} | {
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customPlayLine: string;
    customIntro: string;
    customSprite: string;
    customStyle?: undefined;
    customOutfit?: undefined;
} | {
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customPlayLine: string;
    customIntro: string;
    customStyle: string;
    customSprite?: undefined;
    customOutfit?: undefined;
})[] | ({
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customPlayLine: string;
    customStyle: string;
    customOutfit: string;
    customSprite: string;
    customIntro?: undefined;
} | {
    name: string;
    color: string;
    prisoner: boolean;
    free: boolean;
    customPlayLine: string;
    customIntro: string;
    customStyle: string;
    customOutfit: string;
    customSprite?: undefined;
})[]>;
declare let KDPatronsSpecial: {
    "Anonymous ": number;
    cyberjoel: number;
    "finn ": number;
    "Samantha Lear": number;
    "Private ": number;
    "Chet Vargas": number;
    "Siegfried K\u00FCbler": number;
    Song: number;
    "The-Fisher-King": number;
    Churro: number;
    "Laioken ": number;
    "Wyatt Wintersoul": number;
    "Dex\u266A ": number;
    "Anthony Royle": number;
    "Shogo ": number;
    "Gamefan ": number;
    "Blox ": number;
    "Jerome Peterson": number;
    "selly-grim ": number;
    "Alexis Octavia": number;
    "Noxgarm ": number;
    Slacker: number;
    "Hellgete ": number;
    "Flame ": number;
    "WATA ": number;
    FrenzyFlame: number;
    "Kieraakari ": number;
    Loudest_Quiet_Person: number;
    Rest: number;
    "atetete ": number;
    "Mechio ": number;
    "Dazman1234 ": number;
    Thefabulousglaceon: number;
    Rika: number;
    "0xA4C1B842": number;
    "LukeB ": number;
    "devan ": number;
    Physicsphail: number;
    Miro: number;
    "Loony ": number;
    WhiteSniper: number;
    Thatguu: number;
    "Somprad ": number;
    "Geng114514 ": number;
    "John  Toenniessen": number;
    "Cat Hawke": number;
    Míša: number;
    "RappyTheToy ": number;
    Diablo200: number;
    "Cerb ": number;
    "isaiah lewis": number;
    Mellenia: number;
    LordFabricator: number;
    "Zero K": number;
    "Dakra ": number;
    "Victor ": number;
    "damit damit": number;
    "nnm711 ": number;
    Dragokahn: number;
    Meekohi: number;
    "Phoenix ": number;
    "zipidyzap ": number;
    Cera: number;
    "CuvyanTaylor ": number;
    "anton allison": number;
    "Shrimpy ": number;
    "Tatsuya Shiba": number;
    "Snekus ": number;
    nuzzels: number;
    "Minescence ": number;
    "HanQing Zhao": number;
    "James Kirkman": number;
    "OTKTamashii ": number;
    "darklink11 ": number;
    Hannes: number;
    "Arentios ": number;
    Nymjii: number;
    Linex: number;
    "Mister Mythe": number;
    "CMDR Salen": number;
    "bl ah": number;
    Salmon: number;
    Trinan: number;
    sqrt10pi: number;
    "hopefast ": number;
    jeepk36: number;
    Shakymunch: number;
    Samsy: number;
    "Pyros51 ": number;
    Aussie895: number;
    Hungvipbcsok: number;
    "hideki hirose": number;
    "Girador ": number;
    "Traynfreek ": number;
    GRASS: number;
    "Heavy Blues": number;
    "Pyron ": number;
    "Kritsanapong Jarutatpimol": number;
    "Hanqing Zhao": number;
    "Yagami Yami": number;
    "Wossa ": number;
    FlameTail: number;
    "\u706B\u62AB\u85A9 \u6C34": number;
    "Sewdah nim": number;
    Crimson: number;
    X27: number;
    Nyarlato: number;
    Nightkin: number;
    Sylicix: number;
    "Null Fame": number;
    "AdventCirno ": number;
    "Sera The Crocsune": number;
    "Masaki Hara": number;
    "Eric Rothman": number;
    "\uC601\uC2B9 \uBC15": number;
    "Claire Stephens": number;
    "koch ": number;
    Joecoolzx: number;
    "\u68EE \u97E9": number;
    "ComradeArmtyom ": number;
    "Hjake2 ": number;
    "Chen yu": number;
    Sinohisaki: number;
    "linlizheng ": number;
    john1304: number;
    Zora: number;
    "suddys ": number;
    "Robert Gomez": number;
    "\u4EA6\u658C \u9673": number;
    Feltenix: number;
    "Aika ": number;
    sCaREaGle: number;
    "Mike Salot": number;
    "Roger Gamer": number;
};
declare let KDPatrons: string[];
declare function KDProcessCustomPatron(Enemy: enemy, e: entity, chanceBoost: number, makePersistent: boolean): any;
declare function KDProcessCustomPatronPet(pets: any[], e: entity, index: number): any;
interface ConsentListData {
    name: string;
    data?: Record<string, string>;
    color: string;
    bordercolor: string;
    textColor: string;
    priority: number;
    perkRed: string;
    perkYellow: string;
    perkGreen: string;
    perkNoRed?: string;
    perkNoYellow?: string;
    perkNoGreen?: string;
    populateFromNoPerks?: boolean;
    dontPopulateFromSave?: boolean;
    label: string;
    tooltip: string;
    prereq?: () => boolean;
}
interface ConsentListEventData {
    list: ConsentListData[];
    player: entity;
    consentsToShow?: string[];
}
declare let KDConsentListBasic: Record<string, ConsentListData>;
declare function KDEnumerateConsentList(sort?: boolean, player?: entity, consentsToShow?: string[]): ConsentListData[];
declare let KDConsent_Sidebar: number;
declare let KDConsent_SideOffset: number;
declare let KDConsent_Buttonstart: number;
declare let KDConsent_Buttonspace: number;
declare let KDShowConsents: string[];
declare let KDUpdatedSeenConsents: boolean;
declare function KDDrawConsentHeader(xOffset: any, sidebar: any, headery: any, linespace: any, ii: any, fontsizeheading: any): any;
declare let KDSeenConsents: string[];
declare let KDCheckedConsentAtStartup: boolean;
declare function KDDrawConsent(xOffset: any): void;
declare let KDConsentListItem: string;
declare function KDGetSafewordDesc(): string;
declare function KDSafewordEnabled(): boolean;
declare let KDMapMods: Record<string, MapMod>;
declare function KDGetMapGenList(count: number, mods: Record<string, MapMod>, slot: KDJourneySlot): MapMod[];
declare let KDSideRooms: Record<string, KDSideRoom>;
declare function KDGetSideRoom(slot: KDJourneySlot, side: boolean, ignore: string[], requireTag?: string): KDSideRoom;
interface AltTypeBoss extends AltType {
    boss: string;
    bossroom: true;
}
declare let bosses: Record<string, AltTypeBoss>;
declare function KinkyDungeonBossFloor(Floor: number): AltTypeBoss;
declare let KDMinimapIcons: Record<string, (_x: number, _y: number) => string>;
declare let KDMinimapLabels: Record<string, (_x: number, _y: number, force: boolean) => string>;
declare let KDDoorKnobChance: number;
declare let KDDoorKnobChanceArms: number;
declare let KDDoorAttractChance: number;
declare let KDDoorAttractChanceArms: number;
declare let KDPERKCOSTMULT: number;
declare let kdStartWeapons: string[];
declare let KDPerkParams: {
    KDEnemyDamageMult: number;
    KDEnemyResistBuff: number;
    KDEnemyArmorBoost: number;
};
declare let KDCategoriesStart: {
    name: string;
    buffs: any[];
    debuffs: any[];
}[];
declare let KDKinkyPerks: string[];
declare let KDPerkIcons: {
    Pacifist: () => boolean;
    BerserkerRage: () => boolean;
    BoundPower: () => boolean;
    UnstableMagic: () => boolean;
    BurningDesire: () => boolean;
    FrigidPersonality: () => boolean;
    ImmovableObject: () => boolean;
    GroundedInReality: () => boolean;
    LikeTheWind: () => boolean;
    LeastResistance: () => boolean;
};
declare let KDPerkUpdateStats: {
    Rigger: () => void;
    Ticklish: () => void;
    Stoic: () => void;
    Lascivious: () => void;
    Unperturbed: () => void;
    PainTolerance: () => void;
    Sticky: () => void;
    EnemyResist: () => void;
    BoundPower: () => void;
    BerserkerRage: () => void;
    Dodge: () => void;
    StartShadow: () => void;
    UnstableMagic: () => void;
    CommonLatex: () => void;
    CommonLeather: () => void;
    CommonMaid: () => void;
    CommonWolf: () => void;
    CommonDress: () => void;
    CommonFuuka: () => void;
    CommonWarden: () => void;
    CommonCyber: () => void;
    CommonExp: () => void;
    CommonKitty: () => void;
    CommonToyPleasure: () => void;
    CommonToyEdge: () => void;
    CommonToyDeny: () => void;
    CommonToyTease: () => void;
};
declare let KDPerkCount: Record<string, () => string>;
declare let KinkyDungeonStatsPresets: Record<string, KDPerk>;
declare function KDGetPerkCost(perk: KDPerk): number;
declare function KinkyDungeonGetStatPoints(Stats: Map<any, any>): number;
declare function KDCanPickPerk(Perk: string, points?: number): boolean;
declare function KDSolvePerkRules(rules: String, validperks: string[]): number;
declare function KDValidatePerk(stat: KDPerk): boolean;
declare function KDPerkBlocked(perk1: string, perk2: string): boolean;
declare function KinkyDungeonCanUnPickStat(Stat: string): boolean;
declare function KDInitPerks(): void;
declare let KDPerkStart: {
    Studious: () => void;
    Submissive: () => void;
    Pacifist: () => void;
    Rigger: () => void;
    Unchained: () => void;
    FuukaCollar: () => void;
    QuakeCollar: () => void;
    WardenBelt: () => void;
    Prisoner: () => void;
    Slayer: () => void;
    Conjurer: () => void;
    Magician: () => void;
    Brawler: () => void;
    NovicePet: () => void;
    SelfBondage: () => void;
    HeelTraining: () => void;
    HeadStartHeels: () => void;
    CorsetTraining: () => void;
    HeadStartCorset: () => void;
    StartLatex: () => void;
    DollmakerVisor: () => void;
    DollmakerMask: () => void;
    StartCyberDollStorage: () => void;
    StartLatexIntegration: () => void;
    StartCyberDoll: () => void;
    StartMaid: () => void;
    StartWolfgirl: () => void;
    StartObsidian: () => void;
    Hogtied: () => void;
    Bandit: () => void;
    Stranger: () => void;
    WrongNeighborhood: () => void;
    Cursed: () => void;
    MC_Trainee: () => void;
    MC_Wizard: () => void;
    MC_Rogue: () => void;
    MC_Peasant: () => void;
    MC_Fighter: () => void;
};
declare let KDPerksFilter: string;
declare let KDPerksButtonWidth: number;
declare let KDPerksButtonWidthPad: number;
declare let KDPerksButtonHeight: number;
declare let KDPerksButtonHeightPad: number;
declare let KDPerksXPad: number;
declare let KDPerksYPad: number;
declare let KDPerksYStart: number;
declare let KDPerksXStart: number;
declare let KDPerksMaxY: number;
declare let KDPerksScroll: number;
declare let KDPerksIndex: number;
declare let KDPerksIndexUI: number;
declare let KDPerksIndexUIWeight: number;
declare let KDCategories: any[];
declare function KinkyDungeonDrawPerks(NonSelectable: boolean): boolean;
declare function drawVertList(list: any[], x: number, y: number, w: number, h: number, max: number, fontSize: number, clickfnc: (a: any) => ((a: any) => boolean), prefix: string): void;
declare function drawHorizList(list: any[], x: number, y: number, w: number, h: number, max: number, fontSize: number, clickfnc: (a: any) => ((a: any) => boolean), prefix: string, reverse: boolean): void;
declare function KDGetRandomPerks(existing: Record<string, boolean>, debuff?: boolean, threshold?: number): string[];
declare function KDGetPerkShrineBondage(perks: string[]): string[];
declare function KDInsertSpellChoiceInFreeSlot(index: number): boolean;
declare const KinkyDungeonMapParams: Record<mapKey, floorParams>;
declare let KDBaseFogMemory: number;
declare let KDRedrawFog: number;
declare let KDRedrawMM: number;
declare let KinkyDungeonSeeAll: boolean;
declare let KDVisionBlockers: Map<any, any>;
declare let KDLightBlockers: Map<any, any>;
declare function KinkyDungeonCheckProjectileClearance(xx: number, yy: number, x2: number, y2: number, playerblock?: boolean): boolean;
declare function KinkyDungeonCheckPathCount(x1: number, y1: number, x2: number, y2: number, allowBars: boolean, blockEnemies: boolean, maxFails: number, blockOnlyLOSBlock: boolean): number;
declare function KinkyDungeonCheckPath(x1: number, y1: number, x2: number, y2: number, allowBars?: boolean, blockEnemies?: boolean, maxFails?: number, blockOnlyLOSBlock?: boolean): boolean;
declare let KDPlayerLight: number;
declare let KDMapBrightnessMult: number;
declare let GiantMapOptimizations: number;
declare let KDSparseLightCache: Record<string, string>;
declare function KinkyDungeonResetFog(): void;
declare function KDGetLightsCache(lights: KDLight[], lightmap: Map<string, number>): Record<string, string>;
declare function KinkyDungeonMakeBrightnessMap(_width: number, _height: number, mapBrightness: number, Lights: any[], delta: number): void;
declare function KDAvgColor(color1: number, color2: number, w1: number, w2: number): number;
declare function KinkyDungeonMakeVisionMap(width: number, height: number, Viewports: any, Lights: any, delta: number, _mapBrightness: number): void;
declare let KDLightCropValue: number;
declare function KDDrawFog(CamX: number, CamY: number, CamX_offset: number, CamY_offset: number, _CamX_offsetVis: number, _CamY_offsetVis: number): void;
declare function KDMinimapWidth(): number;
declare function KDMinimapHeight(): number;
declare function KDUpdateMinimapTarget(force?: boolean): void;
declare let KDExpandMinimap: boolean;
declare let KDMinimapScale: number;
declare let KDMinimapScaleBig: number;
declare let KDMinimapW: number;
declare let KDMinimapH: number;
declare let KDMinimapBaseSize: number;
declare let KDMinimapExpandedSize: number;
declare let KDMinimapExpandedSizeTick: number;
declare let KDMinimapWBig: number;
declare let KDMinimapHBig: number;
declare let KDMinimapAlpha: number;
declare let KDMinimapExpandedZoom: number;
declare let KDMinimapExpandedZoomTick: number;
declare let KDMinimapWCurrent: number;
declare let KDMinimapHCurrent: number;
declare let KDMinimapWTarget: number;
declare let KDMinimapHTarget: number;
declare let KDMinimapSoftTextBoostWidth: number;
declare let KDMinimapSoftTextBoostWidthCMult: number;
declare let KDMMReadabilityBoost: number;
declare let KDMMBoostExp: number;
declare function KDRenderMinimap(x: number, y: number, w: number, h: number, scale: number, alpha: number, gridborders: boolean, blackMap: boolean): void;
declare function KDAllowFog(): boolean;
declare function KDRevealTile(x: number, y: number, amount: number): void;
declare let QuestCompleteWeight: number;
declare let KDDefaultGoddessQuestRep: number;
declare let KDQuests: Record<string, KDQuest>;
declare function KDQuestList(count: number, mods: Record<string, KDQuest>, RoomType: string, MapMod: string, data: any): KDQuest[];
declare function KDQuestWorldgenStart(quests: string[]): void;
declare function KDQuestTick(quests: string[], delta: number): void;
declare function KDRemoveQuest(quest: string, force?: boolean, intentional?: boolean, success?: boolean): boolean;
declare function KDAddQuest(quest: string): void;
declare function KDHasQuest(quest: string): boolean;
declare let KDQuestsIndex: number;
declare let KDQuestsVisible: number;
declare let KDMaxQuests: number;
declare function KinkyDungeonDrawQuest(): void;
declare function KDGetQuestData(quest: string): any;
declare function KDSetQuestData(quest: string, data: any): void;
declare function KDGenQuestTemplate(Name: string, Icon: string, Goddess: string, spawnFunction: (Goddess: string, Flag: string) => void, restraintsCountMult: number, restraintsTags: string[], Loot?: string, Rep?: number): KDQuest;
declare function KDSortQuests(player: entity): void;
declare function FactionQuestDummy(faction: string, npc: string): KDQuest;
declare let KinkyDungeonLostItems: item[];
declare let KDTightRestraintsMod: number;
declare let KDTightRestraintsMult: number;
declare let KDPartialLootRecoveryChance: number;
declare function KinkyDungeonAddLostItems(list: item[], excludeBound: boolean): void;
declare let cursedRestraintCache: {};
declare let KinkyDungeonSpecialLoot: boolean;
declare let KinkyDungeonLockedLoot: boolean;
declare function KinkyDungeonLoot(Level: number, Index: string, Type: string, roll?: number, tile?: any, returnOnly?: boolean, noTrap?: boolean, minWeight?: number, minWeightFallback?: boolean, container?: KDContainer, lootType?: any[]): boolean | any;
declare function KinkyDungeonLootEvent(Loot: any, Floor: number, Replacemsg: string, Lock?: string, container?: KDContainer): string;
declare function KinkyDungeonAddGold(value: number): void;
declare function KDSpawnLootTrap(x: number, y: number, _trap: any, _mult: number, duration: number): void;
declare function KDGenChestTrap(guaranteed: boolean, x: number, y: number, chestType: string, lock: any, noTrap: boolean): any;
declare let KDChestTrapWeights: {
    metalTrap: {
        weight: () => number;
        mult: number;
        time: number;
    };
    leatherTrap: {
        weight: () => number;
        mult: number;
        time: number;
    };
    latexTrap: {
        weight: () => number;
        mult: number;
        time: number;
    };
    ropeTrap: {
        weight: () => number;
        mult: number;
        time: number;
    };
    illusionTrap: {
        weight: () => number;
        mult: number;
    };
    skeletonTrap: {
        weight: () => 0 | 300;
        mult: number;
    };
    zombieTrap: {
        weight: () => 0 | 300;
        mult: number;
    };
    mummyTrap: {
        weight: () => 0 | 300;
        mult: number;
    };
    mushroomTrap: {
        weight: () => 0 | 300;
        mult: number;
    };
};
type trapChestFunc = (guaranteed: boolean, x: number, y: number, chestType: string, lock: any, noTrap: boolean) => {
    trap: string;
    mult: number;
    time: number;
    duration?: number;
};
declare let KDTrapChestType: Record<string, trapChestFunc>;
declare function KDTriggerLoot(Loot: string, Type: string): void;
declare function KDGetWeightedString(WeightList: Record<string, any>, params?: any): any;
declare function KDCanCurse(tags: string[]): boolean;
declare function KDGetCursedEpicenterLoot(enemy: entity): string;
declare function KDSummonCurseTrap(x: number, y: number): entity;
declare function KDGenerateMinorLoot(lootType: string, coord: WorldCoord, tile: any, x: number, y: number, container: KDContainer): void;
declare function KDGetCursedSuffix(armor: string): "" | "Common" | "Cursed";
declare function KDGetCursedTags(item: item): string[];
declare let KDTooltipListExtraCutoff: number;
declare let KDTooltipListExtraCutoffHigh: number;
declare let KDTooltipListExtraPage: number;
declare let KDShowExtraTooltipCycle: number;
declare let KDShowExtraTooltipMaxCycle: number;
declare let KDEnemyStruggleHPExp: number;
declare let KDOpinionThreshold: number;
declare let KDDespawnDistance: number;
declare let KDDebugOverlay2: boolean;
declare let KDEnemiesCache: Map<any, any>;
declare let KinkyDungeonSummonCount: number;
declare let KinkyDungeonEnemyAlertRadius: number;
declare let KDStealthyMult: number;
declare let KDConspicuousMult: number;
declare let commentChance: number;
declare let actionDialogueChance: number;
declare let actionDialogueChanceIntense: number;
declare let KDDefaultEnemyMoveSound: number;
declare let KDDefaultEnemyAttackSound: number;
declare let KDDefaultEnemyCastSound: number;
declare let KDDefaultEnemyIdleSound: number;
declare let KDDefaultEnemyAlertSound: number;
declare let KDEventableAttackTypes: string[];
declare let KDPlayerNoiseSources: {
    Movement: {
        calc: (_player: entity) => 0 | 4;
    };
    Sprint: {
        calc: (_player: entity) => 0 | 9;
    };
};
declare let KDAnims: Record<string, (entity: entity) => boolean>;
declare function KDAnimQuantize(step: number, amount: number): number;
declare function KinkyDungeonRefreshEnemiesCache(): void;
declare function KinkyDungeonGetEnemyByName(Name: string | enemy): enemy;
declare function KinkyDungeonNearestJailPoint(x: number, y: number, filter?: string[], any?: boolean, qualified?: boolean, unnocupied?: boolean, criteria?: (x: any, y: any, point: any) => boolean): KDJailPoint;
declare function KDRandomJailPoint(x: number, y: number, filter?: string[], any?: boolean, qualified?: boolean, unnocupied?: boolean, criteria?: (x: any, y: any, point: any) => boolean, maxTime?: number): KDJailPoint;
declare function KDLockNearbyJailDoors(x: number, y: number): void;
declare function KinkyDungeonRandomJailPoint(filter?: string[], exclude?: KDJailPoint[]): KDJailPoint;
declare function KinkyDungeonNearestPatrolPoint(x: number, y: number): number;
declare let KinkyDungeonFlags: Map<string, number>;
declare function KinkyDungeonSetFlag(Flag: string, Duration: number, Floors?: number): void;
declare function KinkyDungeonUpdateFlags(delta: number): void;
declare function KinkyDungeonGetPatrolPoint(index: number, radius: number, Tiles: string): {
    x: number;
    y: number;
};
declare function KDGetBindAmp(enemy: entity, override?: number): number;
declare function KDHelpless(enemy: entity): boolean;
declare function KDEntityCanCut(enemy: entity, magic?: boolean, requireInteract?: boolean): boolean;
declare function KDEnemyHasSharp(enemy: entity, magic?: boolean): boolean;
declare function KDEnemyHasItem(enemy: entity, item?: string): boolean;
declare function KDIsHopeless(enemy: entity): boolean;
declare function KDEnemyVisionRadius(enemy: entity): number;
declare function KinkyDungeonNearestPlayer(enemy: entity, _requireVision?: boolean, decoy?: boolean, visionRadius?: number, _AI_Data?: KDAIData): any;
declare function KDEnemyHidden(enemy: entity): boolean;
declare let KDDespawnPartyDist: number;
declare function KDEnemyCanDespawn(id: number, mapData: KDMapDataType, PMDist?: number): boolean;
declare function KDEnemyNearTargetExit(entity: entity, mapData: KDMapDataType): boolean;
declare function KDGetShortcutPosition(target: string, x: number, y: number, mapData: KDMapDataType): any;
declare function KDGetNearestExit(x: number, y: number, mapData: KDMapDataType, backup?: boolean): KDPoint;
declare function KDGetNearestExitTo(roomTo: string, mapX: number, mapY: number, x: number, y: number, mapData: KDMapDataType, backup?: boolean): KDPoint;
declare function KinkyDungeonInDanger(): boolean;
declare function KDAmbushAI(enemy: entity): boolean;
declare let KinkyDungeonFastMoveSuppress: boolean;
declare let KinkyDungeonFastStruggleSuppress: boolean;
declare let KDInDanger: boolean;
declare function KinkyDungeonDrawEnemies(_canvasOffsetX: number, _canvasOffsetY: number, CamX: number, CamY: number): void;
declare function KDDrawEnemySprite(board: PIXIContainer, enemy: entity, tx: number, ty: number, CamX: number, CamY: number, StaticView?: boolean, zIndex?: number, id?: string): string;
declare function KDAnimEnemy(Entity: entity): {
    offX: number;
    offY: number;
};
declare function KDSetCollFlag(id: number, flag: string, duration: number): void;
declare function KDCollHasFlag(id: number, flag: string): boolean;
declare function KinkyDungeonSetEnemyFlag(enemy: entity, flag: string, duration?: number): void;
declare function KDSetIDFlag(id: number, flag: string, duration: number): void;
declare function KDEnemyHasFlag(enemy: entity, flag: string): boolean;
declare function KDIDHasFlag(id: number, flag: string): boolean;
declare function KDEntityHasFlag(enemy: entity, flag: string): boolean;
declare function KinkyDungeonDrawEnemiesStatus(canvasOffsetX: number, canvasOffsetY: number, CamX: number, CamY: number): void;
declare let KDLastEnemyWarningDelta: number;
interface WarningTileRecord {
    type: number;
    source: number;
    sx: number;
    sy: number;
    x: number;
    y: number;
}
declare function KinkyDungeonDrawEnemiesWarning(_canvasOffsetX: number, _canvasOffsetY: number, CamX: number, CamY: number): void;
declare function KinkyDungeonBar(x: number, y: number, w: number, h: number, value: number, foreground?: string, background?: string, orig?: number, origColor?: string, notches?: number[], notchcolor?: string, notchbg?: string, zIndex?: number): void;
declare function KinkyDungeonBarTo(canvas: PIXIContainer, x: number, y: number, w: number, h: number, value: number, foreground?: string, background?: string, orig?: number, origColor?: string, notches?: number[], notchcolor?: string, notchbg?: string, zIndex?: number): void;
declare function KinkyDungeonCircleBar(x: number, y: number, r: number, linewidth: number, value: number, rotation: number, foreground?: string, background?: string, orig?: number, origColor?: string, notches?: number[], notchcolor?: string, notchbg?: string, zIndex?: number): void;
declare function KinkyDungeonCircleBarTo(canvas: PIXIContainer, x: number, y: number, r: number, linewidth: number, value: number, rotation: number, foreground?: string, background?: string, orig?: number, origColor?: string, notches?: number[], notchcolor?: string, notchbg?: string, zIndex?: number): void;
declare function KDCanSeeEnemy(enemy: entity, playerDist?: number): boolean;
declare function KDMaxEnemyViewDist(enemy: entity): number;
declare function KDEnemyHasHelp(enemy: entity): boolean;
declare function KDGetHelpers(enemy: entity): entity[];
declare function KDGetEnemyStruggleMod(enemy: entity, force: boolean, defaultSpeed: boolean, hasHelp?: boolean): number;
declare function KDGetEnemyDistractRate(enemy: entity, vibe: number): number;
declare function KDGetEnemyDistractionDamage(enemy: entity, vibe: number): number;
declare function KDGetEnemyReleaseDamage(enemy: entity, nokill?: boolean, intensity?: number): any;
declare let KDMaxBindingBars: number;
declare function KDEaseValue(delta: number, currentval: number, targetval: number, rate: number, minrate: number, eps?: number): number;
declare let KDBarAdvanceRate: number;
declare let KDBarAdvanceRateMin: number;
declare function KDGetMaxShield(enemy: entity): number;
declare function KDGetShieldRegen(enemy: entity): number;
declare function KDEaseBars(enemy: entity, delta: number): void;
declare function KinkyDungeonDrawEnemiesHP(delta: number, canvasOffsetX: number, canvasOffsetY: number, CamX: number, CamY: number, _CamXoffset: number, CamYoffset: number): void;
declare let KDDialogueSlots: {};
declare function KDEnemyName(enemy: entity): string;
declare function KDEnemyNameColor(enemy: entity): string;
declare function KDGetName(id: number): string;
declare function KDGetNameColor(id: number): string;
declare function KDResyncBondage(en: entity): void;
declare function KDSetToExpectedBondage(en: entity, mode?: number): void;
declare function KDFreeNPC(en: entity, rescue?: boolean): void;
declare function KDFreeNPCID(id: number): void;
declare let KDDrewEnemyTooltip: string;
declare let KDDrewEnemyTooltipThisFrame: string;
declare let KDCurrentEnemyTooltip: entity;
declare function KDDrawEnemyTooltip(enemy: entity, offset: number, showExtra: boolean): number;
declare function KDDrawEnemyDialogue(enemy: entity, offset: number): number;
declare function KDGetColor(enemy: entity): string;
declare let KDChampionMax: number;
declare function KinkyDungeonCapture(enemy: entity): boolean;
declare function KDDropStolenItems(enemy: entity, mapData?: KDMapDataType): void;
declare function KDClearStolenItems(enemy: entity): void;
declare function KDConsumeItem(enemy: entity, item: string, includeStolen?: boolean): boolean;
declare function KDGetStolenItems(enemy: entity): string[];
declare function KinkyDungeonEnemyCheckHP(enemy: entity, E: number, mapData: KDMapDataType): boolean;
declare function KDCheckDespawn(enemy: entity, E: number, mapData: KDMapDataType): boolean;
declare function KDDropItems(enemy: entity, mapData: KDMapDataType): void;
declare function KDFavorNPC(Enemy: entity): boolean;
declare function KDGetFavor(Enemy: entity): number;
declare function KDChangeFavor(Enemy: entity, Amount: number): void;
declare function KDAddFavor(Faction: string, Amount: number): void;
declare function KDModFavor(Faction: string, Amount: number): void;
declare function KinkyDungeonCheckLOS(enemy: entity, player: any, distance: number, maxdistance: number, allowBlind: boolean, allowBars: boolean, maxFails?: number): boolean;
declare function KinkyDungeonTrackSneak(enemy: entity, delta: number, player: any, darkmult?: number): number;
declare function KinkyDungeonCalcVisibility(player: any, darkmult?: number): number;
declare function KinkyDungeonMultiplicativeStat(Stat: number): number;
declare function KDBlockDodgeStat(Stat: number): number;
declare function KDNearbyEnemies(x: number, y: number, dist: number, hostileEnemy?: entity, cheb?: boolean, nonhostileEnemy?: entity): entity[];
declare function KDNearbyEntities(x: number, y: number, dist: number): entity[];
declare function KDNearbyTiles(x: number, y: number, dist: number): {
    x: number;
    y: number;
    tile: any;
}[];
declare function KDNearbyMapTiles(x: number, y: number, dist: number): {
    x: number;
    y: number;
    tile: string;
}[];
declare function KDNearbyNeutrals(x: number, y: number, dist: number, neutralEnemy?: entity): entity[];
declare function KinkyDungeonGetRandomEnemyPoint(avoidPlayer: boolean, onlyPlayer?: boolean, Enemy?: entity, playerDist?: number, minDist?: number, ignoreOL?: boolean, maxDist?: number): KDPoint;
declare function KDGetNearestInterestingLabel(x: number, y: number, entity: entity, ignoreID: number, ignoreEntity: boolean, typeFilter?: string, maxDist?: number, _navigable?: boolean): KDLabel;
declare function KDGetNearestGuardLabel(x: number, y: number, entity: entity, ignoreID: number, ignoreEntity: boolean, typeFilter?: string, maxDist?: number, _navigable?: boolean): KDLabel;
declare let RandomPathList: any[];
declare function KinkyDungeonGetRandomEnemyPointCriteria(criteria: (x: number, y: number) => boolean, avoidPlayer: boolean, onlyPlayer: boolean, Enemy?: entity, playerDist?: number, minDist?: number, ignoreOL?: boolean, maxDist?: number): KDPoint;
declare function KinkyDungeonGetNearbyPoint(x: number, y: number, allowNearPlayer?: boolean, Enemy?: entity, Adjacent?: boolean, ignoreOL?: boolean, callback?: (x: number, y: number) => boolean, allowOrigin?: boolean, allowInsideEnemy?: boolean, mapData?: KDMapDataType): KDPoint;
declare function KinkyDungeonTickFlagsEnemy(enemy: entity, delta: number): boolean;
declare function KDTickFlagsRestraint(item: item | NPCRestraint, delta: number): boolean;
declare let KinkyDungeonDamageTaken: boolean;
declare let KinkyDungeonTorsoGrabCD: number;
declare let KinkyDungeonHuntDownPlayer: boolean;
declare function KinkyDungeonHasStatus(enemy: entity): boolean;
declare function KinkyDungeonIsStunned(enemy: entity): boolean;
declare function KinkyDungeonIsDisabled(enemy: entity): boolean;
declare function KinkyDungeonIsSlowed(enemy: entity): boolean;
declare function KinkyDungeonCanCastSpells(enemy: entity): boolean;
interface KDMiscastEventData {
    enemy: entity;
    miscast: number;
    distractionbonus: number;
    silencebonus: number;
}
declare function KDGetEnemyMiscast(enemy: entity): number;
declare function KDCanBind(enemy: entity): boolean;
declare function KDBoundEffects(enemy: entity): number;
declare function KDGetBindEffectMult(enemy: entity): number;
declare function KinkyDungeonUpdateEnemies(maindelta: number, Allied: boolean): void;
declare function KDRunDefeatForEnemy(): void;
declare function KDRunRegularJailDefeatAttempt(CDE: entity, allowMain?: boolean, runBackup?: boolean): boolean;
declare let KDCustomDefeat: string;
declare let KDCustomDefeatEnemy: entity;
declare function KDMakeHostile(enemy: entity, timer?: number): void;
declare function KDCheckVulnerableBackstab(enemy: entity): boolean;
declare function KDGetAI(enemy: entity): string;
declare let KDThoughtBubbles: Map<number, {
    name: string;
    priority: number;
    duration: number;
    index: number;
}>;
declare function KDAddThought(id: number, name: string, priority: number, duration: number): void;
declare function KDGetEnemyPlayLine(enemy: entity): string;
declare function KDEnemyCanTalk(enemy: entity): boolean;
declare let AIData: KDAIData;
declare function KinkyDungeonEnemyLoop(enemy: entity, player: any, delta: number, visionMod: number, playerItems: item[]): {
    idle: boolean;
    defeat: boolean;
    defeatEnemy: entity;
};
declare function KinkyDungeonGetEnemyID(): number;
declare function KinkyDungeonGetSpellID(): number;
declare function KinkyDungeonGetItemID(): number;
declare function KinkyDungeonGetRegimentID(): number;
declare let KinkyDungeonEnemyID: number;
declare let KinkyDungeonSpellID: number;
declare function KinkyDungeonNoEnemy(x: number, y: number, Player?: boolean): boolean;
declare function KDIsImmobile(enemy: entity, strict?: boolean): boolean;
declare function KinkyDungeonCanSwapWith(e: entity, Enemy: entity): boolean;
declare function KinkyDungeonNoEnemyExceptSub(x: number, y: number, Player: boolean, Enemy: entity, mapData?: KDMapDataType): boolean;
declare function KinkyDungeonNoEnemyExceptID(x: number, y: number, Player: boolean, ID: number, mapData?: KDMapDataType): boolean;
declare function KinkyDungeonEnemyAt(x: number, y: number, mapData?: KDMapDataType): entity;
declare function KinkyDungeonEntityAt(x: number, y: number, requireVision?: boolean, vx?: number, vy?: number, player?: boolean, mapData?: KDMapDataType): entity;
declare let KDDefaultEnemySprint: number;
declare function KinkyDungeonEnemyTryMove(enemy: entity, Direction: {
    x: number;
    y: number;
    delta: number;
}, delta: number, x: number, y: number, canSprint: boolean): boolean;
declare function KinkyDungeonEnemyTryAttack(enemy: entity, player: any, Tiles: any, delta: number, _x: number, _y: number, points: number, _replace: any, _msgColor: any, _usingSpecial: boolean, refreshWarningTiles: boolean, attack: string, MovableTiles: string): boolean;
type warningTileEntry = {
    color?: string;
    x: number;
    y: number;
    visual_x: number;
    visual_y: number;
    scale: number;
    x_orig?: number;
    y_orig?: number;
};
declare function KinkyDungeonGetWarningTilesAdj(enemy: entity): warningTileEntry[];
declare function KDCanPickpocketPlayer(_player: entity): boolean;
declare function KDCanPickpocket(enemy: entity): boolean;
declare function KinkyDungeonGetWarningTiles(dx: number, dy: number, range: number, width: number, forwardOffset: number, enemy: entity): warningTileEntry[];
declare function KinkyDungeonFindMaster(enemy: entity): {
    master: entity;
    dist: number;
    info: any;
};
declare function KinkyDungeonEnemyCanMove(enemy: entity, dir: {
    x: number;
    y: number;
    delta: number;
}, MovableTiles: string, AvoidTiles: string, ignoreLocks: boolean, Tries: number): boolean;
declare function KDTileIsMovable(entity: entity, xx: number, yy: number, MovableTiles: string, ignoreLocks?: boolean, allowSub?: boolean): boolean;
declare function KinkyDungeonFindID(id: number, mapData?: KDMapDataType): entity;
declare function KDLookupID(id: number, allowPlayer?: boolean): entity;
declare function KDDash(enemy: entity, player: entity, MovableTiles: string): {
    happened: number;
    Dash: boolean;
};
declare function KinkyDungeonSendEnemyEvent(Event: string, data: any, mapData: KDMapDataType): void;
declare function KDGetIntentEvent(enemy: entity, data: any, play: boolean, allied: boolean, hostile: boolean, aggressive: boolean): (enemy: entity, aiData: KDAIData) => void;
declare function KDGetDir(enemy: entity, target: any, func?: typeof KinkyDungeonGetDirectionRandom): {
    x: number;
    y: number;
    delta: number;
};
declare function KDPullResistance(enemy: entity): number;
declare function KDPushModifier(power: number, enemy: entity, allowNeg?: boolean): number;
declare function KDTieUpEnemy(enemy: entity, amount: number, type?: string, Damage?: any, Msg?: any, Delay?: any): any;
declare function KDPredictStruggle(enemy: entity, struggleMod: number, delta: number, allowStruggleAlwaysThresh?: number): any;
declare let KDDomThresh_Loose: number;
declare let KDDomThresh_Normal: number;
declare let KDDomThresh_Strict: number;
declare let KDDomThresh_Variance: number;
declare let KDDomThresh_PerkMod: number;
declare function KDSetDomVariance(enemy: entity): void;
declare function KDCanDom(enemy: entity, ignoreRelative?: boolean): boolean;
declare function KDPlayerIsNotDom(): boolean;
declare function KDPlayerIsTied(): boolean;
declare function KDIsSubbyPersonality(entity: entity): boolean;
declare function KDIsBrattyPersonality(entity: entity): boolean;
declare function KDIsBrat(enemy: entity): boolean;
declare function KDCaptureNearby(enemy: entity, noParty?: boolean): void;
declare function KDCanCapturePartyMember(en: entity): boolean;
declare function KinkyDungeonGetLoadoutForEnemy(enemy: entity, guaranteed: boolean): string;
declare function KinkyDungeonGetTextForEnemy(key: string, enemy: entity, useName?: boolean, player?: entity): string;
declare function KDPlayerIsDefeated(): number;
declare function KDPlayerIsDisabled(): number | boolean;
declare function KDPlayerIsStunned(): number | boolean;
declare function KDPlayerIsImmobilized(): true | item;
declare function KDPlayerIsSlowed(): number | boolean;
declare function KDEnemyReallyAware(enemy: entity, player: any): boolean;
declare function KDGetAwareTooltip(enemy: entity): {
    suff: string;
    color: string;
};
declare function KDProcessLock(lock: string): string;
declare let KDDefaultRestraintThresh: number;
declare function KDRestockRestraints(enemy: entity, restMult: number): void;
declare function KDDetermineBaseRestCount(enemy: entity, restMult: number): number;
declare function KDStockRestraints(enemy: entity, restMult: number, count?: number): void;
declare function KDSetLoadout(enemy: entity, loadout: string): void;
declare function KDClearItems(enemy: entity): void;
declare function KDAddLostItemSingle(item: string, _quantity?: number): boolean;
declare function KDCanDetect(enemy: entity, player: entity, allowBlind?: boolean): boolean;
declare function KDGetSecurity(enemy: entity, type: string): number;
declare function KDReduceBinding(enemy: entity, bonus: number): void;
declare function KDPlayerDeservesPunishment(_enemy: entity, player: entity): boolean;
declare function KDPlugEnemy(enemy: entity): void;
declare function KDGetTags(enemy: entity, removeSpecial: boolean): Record<string, boolean>;
declare function KDGetExtraTags(enemy: entity, useSpecial: boolean, useGlobalExtra: boolean): Record<string, number>;
declare function KDRunBondageResist(enemy: entity, faction: string, restraintsToAdd: {
    r: restraint;
    v: ApplyVariant;
    iv: string;
}[], blockFunction: (r?: any) => void, restraintFromInventory?: string[], spell?: spell, Lock?: string, Keep?: boolean): {
    r: restraint;
    v: ApplyVariant;
    iv: string;
}[];
declare function KDAssignLeashPoint(enemy: entity): KDJailPoint;
declare function KDGetHighSecLoc(enemy: entity, fromHere?: boolean): KDPoint;
declare function KDGetFallbackJailPoint(direction: number): {
    x: number;
    y: number;
};
declare function KDSelfishLeash(enemy: entity): boolean;
declare function KDEnemyUnfriendlyToMainFaction(enemy: entity): boolean;
declare function KDGetMainFaction(mapData?: KDMapDataType): string;
declare function KDPlayerLeashed(player: entity): boolean;
declare function KDPlayerLeashable(player: entity): boolean;
declare function KDEnemyCanBeVibed(en: entity): boolean;
declare function KDEnemySoundDecay(enemy: entity, delta: number): void;
declare function KDDefaultSound(enemy: entity): number;
declare function KDEnemyAddSound(enemy: entity, amount: number, novisual?: boolean, desc?: string, forcemult?: number): void;
declare function KDCanHearEnemy(entity: entity, enemy: entity, mult?: number): boolean;
declare function KDPlayerSound(entity: entity): number;
declare function KDCanHearSound(entity: entity, sound: number, x: number, y: number, mult?: number): number;
declare function KDPointWanderable(x: number, y: number, mapData?: KDMapDataType): boolean;
declare function KDOverrideIgnore(enemy: entity, player: entity): boolean;
declare function KDIsFlying(enemy: entity): boolean;
declare function KDEnemyCanSignal(enemy: entity): boolean;
declare function KDEnemyCanSignalMap(enemy: entity): boolean;
declare function KDEnemyCanSignalOthers(enemy: entity): boolean;
declare function KDGetDialogueTrigger(enemy: entity, Data: KDAITriggerData, requireTags?: string[]): string;
declare function KDCanOverrideAI(enemy: entity): boolean;
declare function KDGetAIOverride(enemy: entity, index: string): string;
declare function KDGetAITypeOverride(Enemy: enemy, index: string): string;
declare function KDMakeHighValue(enemy: entity): void;
declare function KDGetSpecialBuffList(enemy: entity, types: string[]): Record<string, number>;
declare function KDEnemyRank(enemy: entity): number;
declare function KDEnemyTypeRank(enemy: enemy): number;
declare function KDEnemyCanSprint(enemy: entity): boolean;
declare function KDEnemyChangeSprint(enemy: entity, amt: number): void;
declare let KDShopMoneyBase: number;
declare let KDShopMoneyPerFloor: number;
declare let KDShopMoneyPerRank: number;
declare function KDSetShopMoney(enemy: entity, dontSet?: boolean): number;
declare function KDIsInParty(enemy: entity): boolean;
declare function KDIsInPartyID(id: number): boolean;
declare function KDIsInCapturedParty(enemy: entity): boolean;
declare function KDIsInCapturedPartyID(id: number): boolean;
declare function KDGetPartyRefs(): entity[];
declare function KDCapturedPartyMemberIsOnMap(_enemy: entity): entity;
declare function KDAddToParty(enemy: entity): boolean;
declare function KDAddToCapturedParty(enemy: entity): boolean;
declare function KDRemoveFromParty(enemy: entity, capture: boolean): boolean;
declare function KDRemoveFromPartyID(id: number, capture: boolean): boolean;
declare function KDAddEntity(entity: entity, makepersistent?: boolean, dontteleportpersistent?: boolean, noLoadout?: boolean, mapData?: KDMapDataType): entity;
declare function KDSpliceIndex(index: number, num?: number, mapData?: KDMapDataType): void;
declare function KDDespawnEnemy(enemy: entity, E: number, mapData: KDMapDataType, moveThruExit?: string, moveToX?: number, moveToY?: number): boolean;
declare function KDRemoveEntity(enemy: entity, kill?: boolean, capture?: boolean, noEvent?: boolean, forceIndex?: number, mapData?: KDMapDataType): boolean;
declare function KDGetMaxBlock(entity: entity): number;
declare function KDGetMaxDodge(entity: entity): number;
declare function KDGetBaseBlock(entity: entity): number;
declare function KDGetBaseDodge(entity: entity): number;
declare function KDGetBlockAmount(entity: entity): number;
declare function KDCanBlock(enemy: entity): boolean;
declare function KDCanDodge(enemy: entity): boolean;
declare function KDIsTimeImmune(enemy: entity): boolean;
declare function KDAddDistraction(entity: entity, amt: number, desireMult?: number, noEvent?: boolean): number;
declare function KDToughArmor(entity: entity): boolean;
declare function KDAbsoluteArmor(entity: entity): boolean;
declare function KDIsDisarmed(enemy: entity): boolean;
declare function KDHasArms(enemy: entity): boolean;
declare function KDPlayerFacingAway(player: any, enemy: entity): boolean;
declare function KDGetTeaseAttack(enemy: entity, player: entity, AData: KDAIData): KDTeaseAttack;
declare function KDBasicTeaseAttack(enemy: entity, player: entity, noglobal?: boolean): boolean;
declare function KDGetVibeToys(enemy: entity): string[];
declare function KDGetTeaseDamageMod(enemy: entity): number;
declare function KDPlayerIsRestricted(player: any, enemy: entity): boolean;
declare function KDGetUnassignedGuardTiles(type?: string, ignoreNegative?: boolean): any[];
declare function KDCanIdleFidget(enemy: entity): boolean;
declare function KDRescueRepGain(en: entity): void;
declare function KDRescueEnemy(rescueType: string, en: entity, makePlayer?: boolean): boolean;
declare function KDGetEnemyTypeName(enemy: entity): string;
declare function KDGateAttack(enemy: entity, AID?: KDAIData): boolean;
declare function KDAcceptsLeash(enemy: entity, _leash: KDLeashData): boolean;
declare function KDEnemyAccuracy(enemy: entity, player: entity): number;
declare function KDIsDistracted(enemy: entity): boolean;
declare function KDEnemyRelease(Enemy: entity): boolean;
declare function KDBlockedByPlayer(enemy: entity, dir: {
    x: number;
    y: number;
    delta: number;
}): void;
declare function KDEnemyStruggleTurn(enemy: entity, delta: number, allowStruggleAlwaysThresh?: number, force?: boolean, defaultSpeed?: boolean): void;
declare function KDGetEnemyWillReward(enemy: entity): number;
declare function KDGetEnemyRep(enemy: entity): number;
declare function KDGetEnemyTypeRep(enemy: enemy, faction: string): number;
declare function GetOutfitMetadata(value: KDCollectionEntry | KDPersistentNPC | Character): KDOutfitMetadata;
declare function KDQuickGenNPC(enemy: entity, force: boolean): void;
declare function KDPlayPossible(enemy: entity): boolean;
declare function KDCanApplyBondage(target: entity, player: entity, extraCondition?: (t: entity, p: entity) => boolean, r?: restraint, allowSame?: boolean): boolean;
declare function KDWillingBondage(target: entity, player: entity): boolean;
declare function KDIsSubmissive(entity: entity, threshold?: number): boolean;
declare function KDGetCapturingNPC(enemy: entity, dist?: number): entity;
declare function KDEntityAtRiskOfCapture(enemy: entity, mapData: KDMapDataType): boolean;
declare function KDGetEntityMaxDistraction(entity: entity): number;
declare function KDGetDistraction(entity: entity): number;
declare function KDIsNearbyFurniture(enemy: entity, player: entity, dist: number): boolean;
declare function KDWanderFarEnemyParty(enemy: entity): boolean;
declare function KDApplyBindStun(enemy: entity, amount: number): number;
declare let KDBindStunDecayHPFactor: number;
declare let KDBindStunDecayHPFactorExp: number;
declare let KDBindStunDecayMaxHPFactor: number;
declare let KDBindStunCurrentStunFactor: number;
declare let KDBindStunDecayMaxHPFactorExp: number;
declare function KDEnemyDecayBindStun(enemy: entity, delta: number): void;
declare function KDDoSlow(player: entity, amt: number): void;
declare function KDResetMoveFlags(enemy: entity): void;
declare function KDGetCoordFromMapData(mapData: KDMapDataType): WorldCoord;
declare function KDIsJailbreakProtected(entity: entity): number;
declare function KDGetPushTile(Enemy: entity, dx: number, dy: number): KDPoint;
declare function KDAddFactionForEntity(enemy: entity, forcefaction?: string): string;
declare function KDIsArtificial(enemy: entity): boolean;
declare let KDJailPersonalities: {
    Robot: boolean;
    Dom: boolean;
    Sub: boolean;
};
declare let KDStrictPersonalities: string[];
declare let KDLoosePersonalities: string[];
declare let KDEnemyPersonalities: {
    "": {
        weight: number;
        loose: boolean;
        strict: boolean;
        brat: boolean;
        domVariance: number;
        submissiveness: number;
        tags: {
            robot: number;
            switch: number;
            veryswitch: number;
            nobrain: number;
        };
    };
    Robot: {
        weight: number;
        loose: boolean;
        strict: boolean;
        brat: boolean;
        submissiveness: number;
        tags: {
            robot: number;
            cyborg: number;
            nobrain: number;
        };
    };
    NoBrain: {
        weight: number;
        loose: boolean;
        strict: boolean;
        brat: boolean;
        submissiveness: number;
        tags: {
            nobrain: number;
        };
    };
    Dom: {
        weight: number;
        loose: boolean;
        strict: boolean;
        brat: boolean;
        submissiveness: number;
        tags: {
            minor: number;
            alchemist: number;
            elite: number;
            boss: number;
            robot: number;
            cyborg: number;
            submissive: number;
            dom: number;
            verydom: number;
            nobrain: number;
        };
    };
    Sub: {
        weight: number;
        loose: boolean;
        strict: boolean;
        brat: boolean;
        submissiveness: number;
        tags: {
            minor: number;
            human: number;
            elite: number;
            boss: number;
            robot: number;
            cyborg: number;
            submissive: number;
            sub: number;
            verysub: number;
            nobrain: number;
        };
    };
    Brat: {
        weight: number;
        loose: boolean;
        strict: boolean;
        brat: boolean;
        domMod: number;
        domVariance: number;
        submissiveness: number;
        tags: {
            minor: number;
            brat: number;
            verybrat: number;
            human: number;
            boss: number;
            robot: number;
            nobrain: number;
            cyborg: number;
            submissive: number;
        };
    };
};
declare function KDGetPersonality(enemy: entity): string;
declare function KDGetPersonalityType(Enemy: enemy): string;
declare function KDJailPersonality(enemy: entity): string;
declare let KDNoCaptureTypes: string[];
declare let KinkyDungeonEnemies: enemy[];
declare let KDOndeath: Record<string, (enemy: entity, o: any, mapData: KDMapDataType) => void>;
declare let KDSpecialConditions: Record<string, SpecialCondition>;
declare let KDSpecialBuffs: Record<string, KDSpecialEnemyBuff>;
declare function KDEndEnemyAction(enemy: entity): void;
declare function KDMaintainEnemyAction(enemy: entity, delta: number): void;
declare let KDEnemyAction: Record<string, KDEnemyActionType>;
declare let SpecialPersistentScriptSettingList: Record<string, (npc: KDPersistentNPC, enemy: enemy) => string>;
declare let SpawnAISettingList: Record<string, (npc: KDPersistentNPC, enemy: enemy) => string>;
declare let WanderAISettingList: Record<string, (npc: KDPersistentNPC, enemy: enemy) => string>;
declare let KDIntentEvents: Record<string, EnemyEvent>;
declare function KDResetIntent(enemy: entity, _aiData?: KDEventDataBoolean): void;
declare function KDSettlePlayerInFurniture(enemy: entity, _aiData: KDAIData, tags?: string[], guardDelay?: number, ftype?: string[]): boolean;
declare function KDTryToLeash(enemy: entity, player: entity, delta: number, instant?: boolean, atkOnly?: boolean): void;
declare function KDAttachLeashOrCollar(enemy: entity, player: entity, delta?: number, instant?: boolean, atkOnly?: boolean): void;
declare function KDApplyFurnitureRestraint(x: number, y: number, player: entity): boolean;
declare let KDTeaseAttackLists: KDTeaseAttackListsType;
declare let KDTeaseAttacks: KDTeaseAttacksType;
interface KinkyDungeonEscapeType {
    selectValid: boolean;
    requireMaxQuests?: boolean;
    filterRandom?: (roomType: string, mapMod: string, level: number, faction: string) => number;
    check: () => boolean;
    minimaptext: () => string;
    doortext: () => string;
    worldgenstart?: () => void;
}
declare let KinkyDungeonEscapeTypes: Record<string, KinkyDungeonEscapeType>;
declare function KDEscapeWorldgenStart(method: string): void;
declare let KDCurseUnlockList: {
    Common: string[];
    Dragon: string[];
    Divine: string[];
    CursedCollar: string[];
    CursedCollar2: string[];
    LatexKittyCurse: string[];
};
declare let KDCurses: Record<string, KDCursedDef>;
declare let KDCursedVars: Record<string, KDCursedVar>;
declare function KDBestowCurse(item: item, ev: KinkyDungeonEvent[]): void;
declare function KDSetCurse(item: item, curse: string, force?: boolean): boolean;
declare function KDAddEventVariant(restraint: restraint, newRestraintName: string, ev: KinkyDungeonEvent[], power?: number, lock?: string, enemyTags?: Record<string, number>, noPick?: boolean): any;
declare function KinkyDungeonCurseInfo(item: item, Curse: string): void;
declare function KinkyDungeonCurseStruggle(item: item, Curse: string): void;
declare function KinkyDungeonCurseAvailable(item: item, Curse: string): "" | "Blocked" | "FailCondition";
declare function KinkyDungeonCurseUnlock(group: string, index: number, Curse: string): void;
declare function KDCursePower(curse: string): number;
declare function KDCurseMult(curse: string): number;
type KDSkimpyReplacer = (ret: any, restraint: restraint, newRestraintName: string) => any;
declare let KDSkimpyModelReplace: Record<string, KDSkimpyReplacer>;
declare let KDRopeMapByGroup: {
    ItemTorso: string;
    ItemPelvis: string;
    ItemLegs: string;
    ItemArms: string;
    ItemBreast: string;
};
declare let KDCutAdditionalLimitChance: number;
declare let KDAllyLimitChanceRedMult: number;
declare let KDAllyLimitChanceRedFlat: number;
declare let KDAngelStruggleBonus: {
    Struggle: number;
    Cut: number;
    Remove: number;
    Unlock: number;
    Default: number;
};
declare let KDBaseSpeedMult: {
    Struggle: number;
    Remove: number;
    Cut: number;
    Unlock: number;
    Pick: number;
};
declare let KDWillEscapePenalty: number;
declare let KDWillEscapePenaltyArms: number;
declare let KDWillEscapePenaltyStart: number;
declare let KDWillEscapePenaltyStartArms: number;
declare let KDWillEscapePenaltyEnd: number;
declare let KDMinEscapeRate: number;
declare let KDMinPickRate: number;
declare let KDStruggleTime: number;
declare let KDBaseEscapeSpeed: number;
declare let KDUpfrontWill: boolean;
declare let StruggleTypeHandThresh: {
    Struggle: number;
    Unlock: number;
    Pick: number;
    Cut: number;
    Remove: number;
};
declare let InvFilterShrineBlacklist: string[];
declare let KDRestraintArchetypes: string[];
declare let KDCustomAffinity: Record<string, (data: KDEventData_affinity) => boolean>;
declare function KDGetTightnessEffect(escapeChance: number, struggleType: string, T?: number): number;
declare function KDRestraintPowerMult(player: entity, restraint: restraint, augmentedInventory: string[]): number;
declare function KDGetWillPenalty(StruggleType: string): number;
declare let KinkyDungeonCurrentEscapingItem: any;
declare let KinkyDungeonCurrentEscapingMethod: any;
declare let KinkyDungeonStruggleTime: number;
declare let KinkyDungeonMultiplayerInventoryFlag: boolean;
declare let KinkyDungeonItemDropChanceArmsBound: number;
declare let KinkyDungeonKeyJamChance: number;
declare let KinkyDungeonKeyPickBreakAmount: number;
declare let KinkyDungeonKeyPickBreakAmountBase: number;
declare let KinkyDungeonPickBreakProgress: number;
declare let KinkyDungeonKnifeBreakAmount: number;
declare let KinkyDungeonKnifeBreakAmountBase: number;
declare let KinkyDungeonKnifeBreakProgress: number;
declare let KinkyDungeonEnchKnifeBreakAmount: number;
declare let KinkyDungeonEnchKnifeBreakAmountBase: number;
declare let KinkyDungeonEnchKnifeBreakProgress: number;
declare let KinkyDungeonMaxImpossibleAttempts: number;
declare let KinkyDungeonEnchantedKnifeBonus: number;
declare let KDLocksmithPickBonus: number;
declare let KDLocksmithBonus: number;
declare let KDLocksmithSpeedBonus: number;
declare let KDCluelessPickBonus: number;
declare let KDCluelessBonus: number;
declare let KDCluelessSpeedBonus: number;
declare let KDFlexibleBonus: number;
declare let KDFlexibleSpeedBonus: number;
declare let KDInflexibleMult: number;
declare let KDInflexibleSpeedBonus: number;
declare let KDStrugglePerLevelBonus: number;
declare let KDPainfulChoicePenalty: number;
declare let KDPainfulChoiceBonus: number;
declare let KDPainfulChoiceMax: number;
declare let KDClearVisionBonus: number;
declare let KDUnchainedBonus: number;
declare let KDDamselBonus: number;
declare let KDDamselPickAmount: number;
declare let KDArtistBonus: number;
declare let KDBunnyBonus: number;
declare let KDBunnyKnifeAmount: number;
declare let KDBunnyEnchKnifeAmount: number;
declare let KDSlipperyBonus: number;
declare let KDDollBonus: number;
declare let KDEscapeeBonus: number;
declare let KDDragonBonus: number;
declare let KDStrongBonus: number;
declare let KDWeakBonus: number;
declare let KDBondageLoverAmount: number;
declare let KinkyDungeonRestraintsCache: Map<string, restraint>;
declare function KDRestraint(item: Named): restraint;
declare function KDRest(name: string): restraint;
declare function KDRestraintBondageMult(item: Named, target: entity): number;
declare function KDRestraintBondageType(item: Named): string;
declare function KDGetEntityRestraintList(player: entity, includeDynamic?: boolean): (item | NPCRestraint)[];
declare function KDRestraintBondageConditions(item: Named): string[];
declare function KDRestraintBondageStatus(item: Named): KDBondageStatus;
declare function KDItemIsMagic(item: item): boolean;
declare const KinkyDungeonStrictnessTable: Map<string, string[]>;
declare let KDProgressiveOrder: {};
declare function KDGetProgressiveOrderFun(): any;
declare let KDRestraintsCache: Map<string, {
    r: restraint;
    w: number;
}[]>;
declare let KDTetherGraphics: import("pixi.js").Graphics;
declare let KDGameBoardAddedTethers: boolean;
declare function KinkyDungeonKeyGetPickBreakChance(modifier?: number): number;
declare function KinkyDungeonGetKnifeBreakChance(modifier?: number): number;
declare function KinkyDungeonGetEnchKnifeBreakChance(modifier: number): number;
declare function KinkyDungeonIsLockable(restraint: restraint): boolean;
declare function KinkyDungeonLock(item: item, lock: string, NoEvent?: boolean, Link?: boolean, pick?: boolean, normalUnlock?: boolean, remover?: entity, particleDelay?: number): void;
declare function KDGetCurse(item: item): string;
declare function KDIsBinding(item: item): boolean;
declare function KinkyDungeonSingleRestraintMatchesShrine(item: item, shrine: string, ignoreGold: boolean, ignoreShrine: boolean, forceIgnoreNonBinding: boolean): boolean;
declare function KinkyDungeonAllowTagMatch(item: item, ignoreGold: boolean, ignoreShrine: boolean, forceIgnoreNonBinding: boolean): boolean;
declare function KinkyDungeonCurseOrItemAllowMatch(item: item, ignoreShrine: boolean): boolean;
declare function KinkyDungeonLockAllowMatch(item: item, ignoreGold: boolean): boolean;
declare function KinkyDungeonGetRestraintsWithShrine(shrine: string, ignoreGold?: boolean, recursive?: boolean, ignoreShrine?: boolean, forceIgnoreNonBinding?: boolean, ignoreFavorite?: boolean): item[];
declare function KinkyDungeonRemoveRestraintsWithShrine(shrine: string, maxCount?: number, recursive?: boolean, noPlayer?: boolean, ignoreGold?: boolean, ignoreShrine?: boolean, Keep?: boolean, forceIgnoreNonBinding?: boolean, forceFavorite?: boolean): number;
declare function KDRemoveThisItem(item: item, Keep?: boolean, NoEvent?: boolean, Shrine?: boolean, Remover?: entity, ForceRemove?: boolean): void;
declare function KinkyDungeonRemoveRestraintsWithName(name: string): number;
declare function KinkyDungeonUnlockRestraintsWithShrine(shrine: string): number;
declare function KinkyDungeonPlayerGetLockableRestraints(): item[];
declare function KinkyDungeonPlayerGetRestraintsWithLocks(Locks: string[], recursive?: boolean): item[];
declare function KinkyDungeonRemoveKeysUnlock(lock: string): void;
declare function KinkyDungeonRemoveKeysDropped(lock: string, keytype: string): void;
declare function KinkyDungeonGetKey(lock: string): string;
declare function KinkyDungeonHasGhostHelp(): boolean;
declare function KinkyDungeonHasHelp(): boolean;
declare function KinkyDungeonHasAllyHelp(): boolean;
declare function KinkyDungeonHasAngelHelp(): boolean;
declare function KinkyDungeonIsWearingLeash(): boolean;
declare let KDAffinityList: string[];
declare function KinkyDungeonGetAffinity(Message: boolean, affinity: string, group?: string, entity?: entity): boolean;
declare function KinkyDungeonWallCrackAndKnife(Message: boolean): boolean;
declare function KDIsItemAccessible(item: item): boolean;
declare function KDIsTreeAccessible(item: item): boolean;
declare function KDIsTreeChastity(item: item): boolean;
declare function KDIsTreeChastityBra(item: item): boolean;
declare function KDGroupBlocked(Group: string, _External?: boolean): boolean;
declare function KDGetBlockingSecurity(Group: string, External: boolean, player: entity): item[];
declare function KinkyDungeonCanUseKey(Other?: boolean): boolean;
declare function KinkyDungeonIsHandsBound(ApplyGhost?: boolean, Other?: boolean, Threshold?: number, group?: string, NoEvent?: boolean, query?: boolean): boolean;
declare function KinkyDungeonIsHandsBoundFast(ApplyGhost?: boolean, Other?: boolean, group?: string, NoEvent?: boolean, query?: boolean): boolean;
declare function KDHandBondageTotal(Other?: boolean): number;
declare function KinkyDungeonCanUseFeet(bootsPrevent?: boolean, group?: string): boolean;
declare function KinkyDungeonCanUseFeetLoose(bootsPrevent?: boolean): boolean;
declare function KinkyDungeonIsArmsBound(ApplyGhost?: boolean, Other?: boolean, group?: string, NoEvent?: boolean, query?: boolean): boolean;
declare function KinkyDungeonIsArmsBoundFast(ApplyGhost?: boolean, Other?: boolean, group?: string, NoEvent?: boolean, query?: boolean): boolean;
interface ArmsBoundData {
    hasHelp: boolean;
    query: boolean;
    C: Character;
    ApplyGhost: boolean;
    Other: boolean;
    group: string;
    forceResult: any;
    forceResultPower: number;
    fast?: boolean;
}
interface HandsBoundData {
    hasHelp: boolean;
    query: boolean;
    C: Character;
    ApplyGhost: boolean;
    Other: boolean;
    group: string;
    forceResult: any;
    forceResultPower: number;
    fast?: boolean;
}
declare function KinkyDungeonIsArmsBoundC(C: Character, ApplyGhost?: boolean, Other?: boolean, group?: string, NoEvent?: boolean, query?: boolean): boolean;
declare function KinkyDungeonStrictness(ApplyGhost: boolean, Group: string, excludeItem?: item): number;
declare function KinkyDungeonGetStrictnessItems(Group: string, excludeItem: item): string[];
declare function KinkyDungeonGetPickBaseChance(): number;
declare function KinkyDungeonGetPickBonus(): number;
declare function KinkyDungeonPickAttempt(): boolean;
declare function KinkyDungeonUnlockAttempt(lock: string): boolean;
declare function KDGetRestraintAffinity(item: item, data: any): string;
declare function KDApplyPlayerStruggleBonuses(player: entity, data: KDGetStruggleData, ApplyPlayerBonus: boolean): void;
interface KDGetStruggleData {
    restraint: item;
    escapeChance: any;
    limitChance: any;
    struggleType: string;
    escapeChancePre: number;
    limitChancePre: number;
    ApplyGhost: boolean;
    ApplyPlayerBonus: boolean;
    GoddessBonus: number;
    Msg: boolean;
}
declare function KDGetEscapeChance(restraint: item, StruggleType: string, escapeChancePre: number, limitChancePre: number, ApplyGhost: boolean, ApplyPlayerBonus: boolean, Msg?: boolean): {
    escapeChance: any;
    limitChance: any;
    escapeChanceData: KDGetStruggleData;
};
declare let KDUnboundAffinityOverride: {
    Sticky: boolean;
    Edge: boolean;
    Hook: boolean;
};
declare function KDGetDynamicItem(group: string, index: number): {
    restraint: item;
    host: item;
};
declare function KDGetStruggleData(data: KDStruggleData): string;
declare function KinkyDungeonStruggle(struggleGroup: string, StruggleType: string, index: number, query?: boolean, retData?: KDStruggleData): string;
declare function KinkyDungeonGetRestraintItem(group: string, index?: number): item;
declare function KinkyDungeonRefreshRestraintsCache(): void;
declare function KinkyDungeonGetRestraintByName(Name: string): restraint;
declare function KinkyDungeonGetLockMult(Lock: string, item?: item, curse?: string, restraint?: restraint): number;
declare let KDHeavyRestraintPrefs: string[];
declare let KDNoOverrideTags: string[];
type eligibleRestraintOptions = {
    dontAugmentWeight?: boolean;
    ApplyVariants?: boolean;
    dontPreferVariant?: boolean;
    allowLowPower?: boolean;
    ForceDeep?: boolean;
    noOverpower?: boolean;
    extraOptions?: string[];
    inventoryWeight?: number;
    QuitOnFirst?: boolean;
    willBonus?: number;
    suppressTightPerk?: boolean;
};
type eligibleRestraintItem = {
    restraint: restraint;
    variant?: ApplyVariant;
    weight: number;
    inventoryVariant?: string;
};
declare function KDGetWillPercent(applier: entity, penalty?: number): number;
declare let geteligrest_lastTagsEnemy: KDHasTags;
declare let geteligrest_lastIgnoreTags: string[];
declare let geteligrest_lastExtraTags: Record<string, number>;
declare let geteligrest_lastTags: Map<string, boolean>;
declare function KDGeteligrest_gettags(effLevel: number, enemy: KDHasTags, ignoreTags: string[], extraTags: Record<string, number>): Map<string, boolean>;
declare function KDGetRestraintsEligible(enemy: KDHasTags, Level: number, Index: string, Bypass: boolean, Lock: string, RequireWill?: boolean, LeashingOnly?: boolean, NoStack?: boolean, extraTags?: Record<string, number>, agnostic?: boolean, filter?: {
    requireTags?: string[];
    filterGroups?: string[];
    minPower?: number;
    maxPower?: number;
    onlyLimited?: boolean;
    noUnlimited?: boolean;
    noLimited?: boolean;
    onlyUnlimited?: boolean;
    ignore?: string[];
    require?: string[];
    looseLimit?: boolean;
    ignoreTags?: string[];
    allowedGroups?: string[];
    currentWill?: number;
}, securityEnemy?: entity, curse?: string, filterEps?: number, minWeightFallback?: boolean, useAugmented?: boolean, augmentedInventory?: string[], options?: eligibleRestraintOptions): eligibleRestraintItem[];
declare function KinkyDungeonGetRestraint(enemy: KDHasTags, Level: number, Index: string, Bypass?: boolean, Lock?: string, RequireWill?: boolean, LeashingOnly?: boolean, NoStack?: boolean, extraTags?: Record<string, number>, agnostic?: boolean, filter?: {
    requireTags?: string[];
    filterGroups?: string[];
    minPower?: number;
    maxPower?: number;
    onlyLimited?: boolean;
    noUnlimited?: boolean;
    noLimited?: boolean;
    onlyUnlimited?: boolean;
    ignore?: string[];
    require?: string[];
    looseLimit?: boolean;
    ignoreTags?: string[];
    allowedGroups?: string[];
    currentWill?: number;
}, securityEnemy?: entity, curse?: string, useAugmented?: boolean, augmentedInventory?: string[], options?: eligibleRestraintOptions): any;
declare function KDGetRestraintWithVariants(enemy: KDHasTags, Level: number, Index: string, Bypass: boolean, Lock: string, RequireWill: boolean, LeashingOnly?: boolean, NoStack?: boolean, extraTags?: Record<string, number>, agnostic?: boolean, filter?: {
    requireTags?: string[];
    filterGroups?: string[];
    minPower?: number;
    maxPower?: number;
    onlyLimited?: boolean;
    noUnlimited?: boolean;
    noLimited?: boolean;
    onlyUnlimited?: boolean;
    ignore?: string[];
    require?: string[];
    looseLimit?: boolean;
    ignoreTags?: string[];
    allowedGroups?: string[];
}, securityEnemy?: entity, curse?: string, useAugmented?: boolean, augmentedInventory?: string[], options?: eligibleRestraintOptions): {
    r: restraint;
    v: ApplyVariant;
    iv: string;
};
declare function KinkyDungeonUpdateRestraints(C?: Character, id?: number, _delta?: number, customRestraints?: item[], extraTags?: string[]): Map<string, boolean>;
declare function KDUpdateRestraintMetadata(id: number, delta: number, customRestraints?: item[] | NPCRestraint[]): EntityRestraintMetadata;
declare function KDGetNPCRestraintTags(restraintList: Record<string, NPCRestraint>, extraTags?: string[], id?: number, addTags?: boolean, events?: boolean): Map<string, boolean>;
declare function KDGetCursePower(item: item): number;
declare function KDGetVariantPower(item: item): number;
declare function KDVariantPower(variant: string): number;
declare function KinkyDungeonRestraintPower(item: item, NoLink?: boolean, toLink?: restraint, newLock?: string, newCurse?: string): number;
declare function KDRestraintPower(r: restraint, variant?: string, newLock?: string, newCurse?: string): number;
declare function KinkyDungeonLinkableAndStricter(oldRestraint: restraint, newRestraint: restraint, item?: item, Lock?: string, Curse?: string, ignoreItem?: item, power?: number): boolean;
declare function KDIsEligibleNPC(r: restraint, id: number, tags: Map<string, boolean>, allowOverride?: boolean): string;
declare function KDIsEligible(restraint: restraint, player?: entity, allowOverride?: boolean): boolean;
declare function KinkyDungeonGenerateRestraintTrap(): string;
declare function KDGetLockVisual(item: item): string;
declare function KDGetLockImage(lock: string): string;
declare function KDGetLockImageRoot(lock: string): string;
declare function KDCanAddRestraint(restraint: restraint, Bypass: boolean, Lock: string, NoStack: boolean, r?: item, Deep?: boolean, noOverpower?: boolean, securityEnemy?: entity, useAugmentedPower?: boolean, curse?: string, augmentedInventory?: string[], powerBonus?: number): boolean;
declare function KDGetLinkUnder(currentRestraint: item, restraint: restraint, bypass?: boolean, NoStack?: boolean, Deep?: boolean, securityEnemy?: entity, Lock?: string, Curse?: string, powerBonus?: number, allowOverride?: boolean): item;
declare function KDCanLinkUnder(currentRestraint: item, restraint: restraint, bypass?: boolean, NoStack?: boolean, securityEnemy?: entity, Lock?: string, Curse?: string, ignoreItem?: item, powerBonus?: number, allowOverride?: boolean): boolean;
declare function KDCurrentItemLinkable(currentItem: item, newItem: restraint): boolean;
declare function KDCheckLinkSize(currentRestraint: item, restraint: restraint, bypass?: boolean, NoStack?: boolean, _securityEnemy?: entity, ignoreItem?: item, props?: any, power?: number): boolean;
declare function KDApplyVarToInvVar(restraint: restraint, variant: ApplyVariant): KDRestraintVariant;
declare function KDLinkUnder(restraint: restraint, Tightness?: number, Bypass?: boolean, Lock?: string, Keep?: boolean, _Trapped?: boolean, events?: KinkyDungeonEvent[], faction?: string, Deep?: boolean, Curse?: string, securityEnemy?: entity, _reserved?: boolean, inventoryAs?: string, data?: Record<string, any>, powerBonus?: number, noOverpower?: boolean): number;
declare function KinkyDungeonAddRestraintIfWeaker(restraint: restraint | string, Tightness?: number, Bypass?: boolean, Lock?: string, Keep?: boolean, Trapped?: boolean, events?: KinkyDungeonEvent[], faction?: string, Deep?: boolean, Curse?: string, securityEnemy?: entity, useAugmentedPower?: boolean, inventoryAs?: string, data?: Record<string, any>, augmentedInventory?: string[], variant?: ApplyVariant, powerBonus?: number, NoActionPrune?: boolean, options?: eligibleRestraintOptions): number;
declare function KinkyDungeonIsLinkable(data: any): boolean;
declare function KDCheckLinkTotal(oldRestraint: item, newRestraint: restraint, linkUnderHost?: item, _lock?: string, _curse?: string, _useAugmentedPower?: boolean, _augmentedInventory?: any): boolean;
declare function KDUpdateLinkCaches(restraint: item): void;
declare function KDGetLinkCache(restraint: item): string[];
declare let KinkyDungeonRestraintAdded: boolean;
declare let KinkyDungeonCancelFlag: boolean;
declare function KinkyDungeonAddRestraint(restraint: restraint, Tightness: number, Bypass?: boolean, Lock?: string, Keep?: boolean, Link?: boolean, SwitchItems?: boolean, events?: KinkyDungeonEvent[], faction?: string, Unlink?: boolean, dynamicLink?: item, Curse?: string, autoMessage?: boolean, securityEnemy?: entity, inventoryAs?: string, data?: Record<string, number>, powerBonus?: number, NoEvent?: boolean, ForceRemove?: boolean, NoActionPrune?: boolean, flags?: Record<string, number>): number;
declare function KinkyDungeonRemoveRestraintSpecific(item: item, Keep?: boolean, Add?: boolean, NoEvent?: boolean, Shrine?: boolean, UnLink?: boolean, Remover?: entity, ForceRemove?: boolean): item[];
declare function KinkyDungeonRemoveRestraint(Group: string, Keep?: boolean, Add?: boolean, NoEvent?: boolean, Shrine?: boolean, UnLink?: boolean, Remover?: entity, ForceRemove?: boolean): item[];
declare function KDIInsertRestraintUnderneath(_restraint: restraint): boolean;
declare function KinkyDungeonRemoveDynamicRestraint(hostItem: item, Keep?: boolean, NoEvent?: boolean, Remover?: entity, ForceRemove?: boolean): item[];
declare function KinkyDungeonRestraintTypes(ShrineFilter: string[]): string[];
declare function KinkyDungeonLinkItem(newRestraint: restraint, oldItem: item, tightness: number, Lock?: string, Keep?: boolean, faction?: string, Curse?: string, autoMessage?: boolean, inventoryAs?: string, events?: KinkyDungeonEvent[], data?: Record<string, number>): item;
declare function KinkyDungeonUnLinkItem(item: item, Keep: boolean, _dynamic?: any, ForceRemove?: boolean): item[];
declare function KDCreateDebris(x: number, y: number, options: {
    aoe: number;
    number: number;
    dist: number;
    kind: string;
    duration?: number;
    durationExtra?: number;
}): void;
declare function KDSuccessRemove(StruggleType: string, restraint: item, lockType: KDLockType, index: number, data: any, host: item): boolean;
declare function KDPruneSameStruggleActions(list: KDDelayedAction[], group: string, index: number): KDDelayedAction[];
declare function KDAddDelayedStruggle(amount: number, time: number, _StruggleType: string, struggleGroup: string, index: number, data: KDStruggleData, progress?: number, limit?: number): void;
declare function KDGetManaBonus(bonus: number, penalty: number, threshold: number, bonusscale: number, penaltyscale: number): number;
declare function KDGetItemGoddessBonus(item: item, data?: any): number;
declare function KDChooseRestraintFromListGroupPri(RestraintList: {
    restraint: restraint;
    weight: number;
}[], GroupOrder: string[], skip?: boolean): restraint;
declare function KDChooseRestraintFromListGroupPriWithVariants(RestraintList: eligibleRestraintItem[], GroupOrder: string[], skip?: boolean): {
    r: restraint;
    v: ApplyVariant;
    iv: string;
};
type kdRopeSlimePart = {
    enemyTagSuffix?: string;
    enemyTagSuffix2?: string;
    enemyTagExtra?: Record<string, number>;
};
declare let KDSlimeParts: Record<string, kdRopeSlimePart>;
declare let KDRopeParts: Record<string, kdRopeSlimePart>;
type kdCuffPart = {
    base: boolean;
    enemyTagSuffix?: string;
    enemyTagOverride?: Record<string, number>;
    Link?: string;
    UnLink?: string;
    ModelSuffix?: string;
};
declare let KDCuffParts: Record<string, kdCuffPart>;
declare function KDAddCuffVariants(CopyOf: string, idSuffix: string, ModelSuffix: string, tagBase: string, extraTags: Record<string, number>, allTag: string[], removeTag: string[], addPower: number, properties: KDRestraintPropsBase, extraEvents?: KinkyDungeonEvent[], addStruggle?: KDEscapeChanceList, premultStruggle?: KDEscapeChanceList, addStruggleLink?: KDEscapeChanceList, premultStruggleLink?: KDEscapeChanceList, Filters?: Record<string, LayerFilter>, baseWeight?: number, noGeneric?: boolean, CuffAssets?: Record<string, string>, CuffModels?: Record<string, string>, noLockBase?: boolean, noLockLink?: boolean, Properties?: Record<string, LayerPropertiesType>, ExtraProps?: Record<string, KDRestraintPropsBase>): void;
declare function KDAddRopeVariants(CopyOf: string, idSuffix: string, ModelSuffix: string, tagBase: string, allTag: string[], removeTag: string[], basePower: number, properties: KDRestraintPropsBase, extraEvents: KinkyDungeonEvent[], addStruggle: KDEscapeChanceList, premultStruggle: KDEscapeChanceList, Filters: Record<string, LayerFilter>, baseWeight?: number, Enchantable?: boolean, Properties?: Record<string, LayerPropertiesType>): void;
declare function KDAddHardSlimeVariants(CopyOf: string, idSuffix: string, ModelSuffix: string, tagBase: string, allTag: string[], removeTag: string[], basePower: number, properties: KDRestraintPropsBase, extraEvents?: KinkyDungeonEvent[], addStruggle?: KDEscapeChanceList, premultStruggle?: KDEscapeChanceList, Filters?: Record<string, LayerFilter>, baseWeight?: number, restraintType?: string, Properties?: Record<string, LayerPropertiesType>): void;
declare function KDGetRestraintTags(restraint: restraint): string[];
declare function KDItemDataQuery(item: item, name: string): any;
declare function KDItemDataSet(item: item, name: string, value: number | string): void;
declare function KDItemFlagQuery(item: item, name: string): any;
declare function KDItemFlagSet(item: item, name: string, value: number): void;
declare function KDChangeItemName(item: item, type: string, name: string): void;
declare function KDChangeRestraintType(item: item, type: string, name: string): void;
declare function KDChangeNPCRestraint(inv: NPCRestraint, newRes: string): NPCRestraint;
declare function KDCurseCount(activatedOnly: boolean): number;
declare function KDGetTotalRestraintPower(_player: entity, requireSingleTag: string[], requireAllTags: string[], ignoregold: boolean, ignoreShrine: boolean, forceIgnoreNonBinding?: boolean, forceFavorite?: boolean): number;
declare function KDGetEscapeSFX(restraint: Named): {
    Struggle?: string;
    Cut?: string;
    Remove?: string;
    Pick?: string;
    Unlock?: string;
    NoStamina?: string;
    NoWill?: string;
    NoMagic?: string;
    MagicCut?: string;
    PickBreak?: string;
    KnifeBreak?: string;
    KnifeDrop?: string;
    KeyDrop?: string;
    PickDrop?: string;
    Blocked?: string;
};
declare function KDGetRestraintSFX(restraint: Named): string;
declare function KDGetFinishEscapeSFX(restraint: Named): {
    Struggle?: string;
    Cut?: string;
    Remove?: string;
    Pick?: string;
    Unlock?: string;
    Destroy?: string;
};
declare function KDGetRemoveSFX(restraint: Named): string;
declare function KDHasRemovableCurse(item: item, level: number): boolean;
declare function KDHasRemovableHex(item: item, level: number): boolean;
declare function KDGetRemovableHex(item: item, level: number): KinkyDungeonEvent[];
declare let KDRestraintDebugLog: any[];
declare function KDGetItemName(item: item, type?: string, variant?: any): string;
declare function KDGetRestraintName(restraint: restraint, variant?: ApplyVariant): string;
declare function KDGetConsumableName(consumable: consumable, variant?: ApplyVariant): string;
declare function KDGetWeaponName(weapon: weapon, variant?: ApplyVariant): string;
declare function KDGetItemNameString(name: string): string;
declare function KDGetEventsForRestraint(name: string): KinkyDungeonEvent[];
declare function KDDynamicLinkList(item: item, includeItem?: boolean): item[];
declare function KDDynamicLinkListSurface(item: item): item[];
declare function KDLinkSize(restraint: restraint, index?: number): number;
declare function KDLinkCategorySize(item: item, linkCategory: string, ignoreItem?: item, power?: number): number;
declare function KDGetRestraintHost(item: item): item;
declare function KDLinkItemEvent(e: KinkyDungeonEvent, item: item, data: any): void;
declare function KDGetRestriction(): number;
declare function KDAlwaysKeep(item: item, Remover: entity): boolean;
declare function KDResortRestraints(Group: string, addedItem: item, bypass: boolean, securityEnemy: entity): void;
declare function KDLockoutChance(player: entity): number;
declare function KDLockoutGain(player: entity, data: any, base?: number): void;
declare function KDMaxCutDepth(threshold: number, cutBonus: number, origEscapeChance: number, origLimitChance: number, cutVulnerability?: number): number;
declare function KDMaxStrugglePct(threshold: number, escapeChance: number, limitChance: number): number;
declare function KDGetNecklaceGagType(player: entity): string;
declare function KDAddFurnitureRestraintSet(entity: entity, restraintSet: Record<string, number>, faction?: string, power?: number): number;
declare function KDGetEquipDuration(restraint: string, player: entity): number;
declare function KDDoEquipDelayed(data: any, player: entity): string;
declare function KDDoEquipGenericDelayed(data: any, player: entity): string;
declare function KDGetEvents(item: item | NPCRestraint): KinkyDungeonEvent[];
declare function KDResetPreferenceFlags(): void;
declare function KDGetPreferenceFlags(): string[];
declare function KDUpdatePreferenceFlags(): void;
declare function KDDefaultItemPalette(name: string, variantName: string): string;
declare function KDDefaultNPCItemPalette(name: string): string;
declare function KDGetBaseLimitChance(StruggleType: string): number;
declare function KDSwapEvents(events: KinkyDungeonEvent[], oldRestraint: restraint, newRestraint: restraint): KinkyDungeonEvent[];
declare function KDTest_ListRestraintsWithFeetLinked(): void;
declare let KDRestraintParticleLifetime: number;
declare let KDRestraintParticleLifetimeMult: number;
declare let KDLockParticleLifetime: number;
declare let KDNPCRestraintParticleLifetime: number;
declare let KDNPCLockParticleLifetime: number;
declare let KDRestraintParticleScale: number;
declare let KDLockParticleScale: number;
declare function KDDoRestraintParticlePlayer(restraint: restraint): void;
declare function KDDoRestraintParticle(entity: entity, restraint: restraint): void;
declare function KDDoLockParticlePlayer(lock: string, restraint: restraint, particleDelay?: number): void;
declare function KDRemoveMasterwork(remover: entity): void;
declare function KDCountMasterworks(player: entity, worn?: boolean, inventory?: boolean): number;
declare function KDGetNeededMasterworkCount(): number;
declare function KDHasMasterworkSet(player: entity): boolean;
declare function KDSummonMasterworkTrap(x: number, y: number): entity;
declare function KDSummonLatexKittyTrap(x: number, y: number): entity;
declare let KDLeashPullCost: number;
declare let KDLeashPullKneelTime: number;
declare let KDLeashablePersonalities: {
    "": (entity: entity, leasher: entity) => boolean;
    Dom: (entity: entity, leasher: entity) => boolean;
    Sub: (entity: entity, leasher: entity) => boolean;
    Brat: (entity: entity, leasher: entity) => boolean | KDLeashData;
};
declare let KDLeashTick: {
    [_: string]: (delta: number, entity: entity, leasher: entity) => boolean;
};
declare let KDLeashReason: {
    [_: string]: (entity: entity) => boolean;
};
declare function KDGetLeashedToCount(entity: entity): number;
declare function KDGetLeashedTo(entity: entity): entity[];
declare function KDGetTetherLength(entity: entity): number;
declare function KDIsPlayerTethered(entity: entity): boolean;
declare function KDUpdateLeashCondition(entity: entity, noDelete?: boolean): boolean;
declare function KinkyDungeonAttachTetherToEntity(dist: number, entity: entity, player: entity, reason?: string, color?: string, priority?: number, item?: item): KDLeashData;
declare function KDIsPlayerTetheredToLocation(player: entity, x: number, y: number, entity?: entity): boolean;
declare function KDIsPlayerTetheredToEntity(player: entity, entity: entity): boolean;
declare function KDBreakTether(player: entity, mapData?: KDMapDataType): boolean;
declare function KinkyDungeonDrawTethers(CamX: number, CamY: number): void;
declare function KDBreakAllLeashedTo(entity: entity, reason?: string): void;
declare function KinkyDungeonUpdateTether(delta: number, Msg: boolean, Entity: entity, xTo?: number, yTo?: number): boolean;
declare function KDWillingLeash(entity: entity): boolean;
declare let KDAOETypes: {
    slash: (bx: any, by: any, xx: any, yy: any, rad: any, modifier: string, ox: any, oy: any) => boolean;
    arc: (bx: any, by: any, xx: any, yy: any, rad: any, modifier: string, ox: any, oy: any) => boolean;
    cross: (bx: any, by: any, xx: any, yy: any, rad: any, modifier: string, ox: any, oy: any) => boolean;
    Xcross: (bx: any, by: any, xx: any, yy: any, rad: any, modifier: string, ox: any, oy: any) => boolean;
    crossCrack: (bx: any, by: any, xx: any, yy: any, rad: any, modifier: string, ox: any, oy: any) => boolean;
    XcrossCrack: (bx: any, by: any, xx: any, yy: any, rad: any, modifier: string, ox: any, oy: any) => boolean;
};
interface KDStruggleButtonGetData {
    StruggleType: string;
    x: number;
    y: number;
    ButtonWidth: number;
    sg: any;
    item: item;
}
interface KDStruggleButtonData extends KDStruggleButtonGetData {
    btn: string;
    button_index: number;
}
interface KDStruggleGroupReturn {
    i: number;
    allowed: boolean;
    type: string;
    action?: (bdata: any) => boolean;
    image?: string;
}
declare let KDStruggleButtons: Record<string, (data: KDStruggleButtonData, i: number, query: boolean, target: entity, entity: entity) => KDStruggleGroupReturn>;
declare function KDGetStruggleButtons(data: KDStruggleButtonGetData): string[];
declare function KDGetStruggleContextMenu(item: item, sg: StruggleGroup, target: entity, entity: entity): string[];
declare let KDUISmoothness: number;
declare let KDInteracting: boolean;
declare let KinkyDungeonStruggleGroups: StruggleGroup[];
declare let KinkyDungeonStruggleGroupsBase: string[];
declare let KDDrawStruggleEnum: {
    ALMOSTALL: number;
    MOST: number;
    FULL: number;
    STRUGGLE: number;
    NONE: number;
};
declare let KDDrawMaxStruggle: number;
declare let KDDrawStruggleIcon: {
    [x: number]: string;
};
declare let KinkyDungeonDrawStruggle: number;
declare let KDPlayerSetPose: boolean;
declare let KDToggleXRay: number;
declare let KDBulletTransparency: boolean;
declare let KD_XRayHidden: string[];
declare let KinkyDungeonDrawStruggleHover: boolean;
declare let KinkyDungeonDrawState: string;
declare let KinkyDungeonDrawStatesModal: string[];
declare let KinkyDungeonSpellValid: boolean;
declare let KinkyDungeonCamX: number;
declare let KinkyDungeonCamY: number;
declare let KinkyDungeonCamXLast: number;
declare let KinkyDungeonCamYLast: number;
declare let KinkyDungeonCamXVis: number;
declare let KinkyDungeonCamYVis: number;
declare let KinkyDungeonTargetX: number;
declare let KinkyDungeonTargetY: number;
declare let KinkyDungeonLastDraw: number;
declare let KinkyDungeonLastDraw2: number;
declare let KinkyDungeonDrawDelta: number;
declare let KD_HUD_RESTRAINTINFOFONTSIZE: number;
declare let KD_HUD_RESTRAINTINFOLINESIZE: number;
declare const KinkyDungeonLastChatTimeout = 10000;
declare let KinkyDungeonStatBarHeight: number;
declare let KinkyDungeonToggleAutoPass: boolean;
declare let KinkyDungeonToggleAutoSprint: boolean;
declare let KinkyDungeonInspect: boolean;
declare let KinkyDungeonFastMove: boolean;
declare let KinkyDungeonFastMovePath: any[];
declare let KinkyDungeonFastStruggle: boolean;
declare let KinkyDungeonFastStruggleType: string;
declare let KinkyDungeonFastStruggleGroup: string;
declare let KDMinBuffX: number;
declare let KDMinBuffXTarget: number;
declare let KDToggleShowAllBuffs: boolean;
declare let KDFocusControls: string;
declare let KDFocusControlButtons: {
    AutoPass: {
        HelplessEnemies: boolean;
        HelplessAllies: boolean;
        Summons: boolean;
        Allies: boolean;
        Neutral: boolean;
        Shop: boolean;
        Special: boolean;
    };
    AutoPath: {
        SuppressBeforeCombat: boolean;
        SuppressDuringCombat: boolean;
        StepDuringCombat: boolean;
    };
    AutoWait: {
        Slow: boolean;
        Normal: boolean;
        Fast: boolean;
        VeryFast: boolean;
    };
};
declare let KDFocusControlButtonsExclude: {
    AutoPathStepDuringCombat: string[];
    AutoPathSuppressDuringCombat: string[];
    AutoWaitSlow: string[];
    AutoWaitFast: string[];
    AutoWaitVeryFast: string[];
    AutoWaitNormal: string[];
};
declare let KDFocusHoverEnter: number;
declare let KDFocusHoverDelay: number;
declare let KDFocusHoverLast: string;
declare let KDBuffSprites: {
    Camo: boolean;
    Drenched: boolean;
    StoneSkin: boolean;
    Conduction: boolean;
    Ignite: boolean;
    Burning: boolean;
    Unsteady: boolean;
    Unsteady2: boolean;
    Chilled: boolean;
    ChillWalk: boolean;
    Slimed: boolean;
    LightningRod: boolean;
    PoisonDagger: boolean;
    Cutting: boolean;
    Slippery: boolean;
    ScrollVerbal: boolean;
    ScrollArms: boolean;
    ScrollLegs: boolean;
    Empower: boolean;
    SlimeMimic: boolean;
    d_SlimeMimic: boolean;
    DisenchantSelf: boolean;
    LeatherBurst: boolean;
    TabletElements: boolean;
    TabletConjure: boolean;
    TabletIllusion: boolean;
    TabletRope: boolean;
    TabletWill: boolean;
    TabletMetal: boolean;
    TabletLatex: boolean;
    TabletLeather: boolean;
    AvatarFire: boolean;
    AvatarWater: boolean;
    AvatarEarth: boolean;
    AvatarAir: boolean;
    DistractionCast: boolean;
    ManaBurst: boolean;
    BoundByFate: boolean;
    Taunted: boolean;
    GreaterInvisibility: boolean;
    Invisibility: boolean;
    Haunted: boolean;
    Cursed: boolean;
    GhostDeal: boolean;
    GhostDealPleasure: boolean;
    DildoBatBuff: boolean;
    Corrupted: boolean;
    CursedDistract: boolean;
    ForcedSubmission: boolean;
    CursingCircle: boolean;
};
declare let KDStatsSkipLine: {
    info: number;
    training: number;
    status: number;
    dmg: number;
    resist: number;
};
declare let KDStatsSkipLineBefore: {
    kinky: number;
    curse: number;
    perk: number;
};
declare let KDStatsOrder: {
    info: number;
    status: number;
    training: number;
    resist: number;
    dmg: number;
    help: number;
    buffs: number;
    perk: number;
    kinky: number;
    curse: number;
};
declare let KDUIColor: string;
declare let KDUIAlpha: number;
declare let KDUIAlphaHighlight: number;
declare let KDModalArea_x: number;
declare let KDModalArea_y: number;
declare let KDModalArea_width: number;
declare let KDModalArea_height: number;
declare let KDModalArea: boolean;
declare let KDConfirmDeleteSave: boolean;
declare let KDConfirmUpload: boolean;
declare function KDHandleGame(): boolean;
declare function KDGetDungeonName(coord: WorldCoord): string;
declare function KinkyDungeonDrawInterface(_showControls: boolean): void;
declare function KDRenderHotbarTooltip(button: KDButtonParamData): void;
declare function KDRenderHotbarTooltipSpell(button: KDButtonParamData): void;
declare function KDDrawSpellChoices(): void;
declare function KDCycleSpellPage(reverse?: boolean, noWrap?: boolean, force?: boolean): void;
declare function KinkyDungeonCanSleep(): boolean;
declare function KDLinspace(min: number, max: number, steps: number): number[];
declare function KDSteps(max: number, step: number, maxStep?: number): number[];
declare function KDDrawStatusBars(x: number, y: number, width?: number): void;
declare function KDDrawWeaponSwap(x: number, y: number): boolean;
declare let KDLastKneelTurns: number;
declare function KinkyDungeonDrawActionBar(_x: number, _y: number): void;
declare function KDAutoStruggleClick(): void;
declare let KinkyDungeonCrystalWarningTime: number;
declare let KinkyDungeonCrystalWarningDuration: number;
declare function KinkyDungeonActivateWeaponSpell(instant?: boolean): boolean;
declare function KinkyDungeonRangedAttack(x?: number, y?: number): boolean;
declare function KinkyDungeonHandleHUD(): boolean;
declare let KDStruggleGroupLinkIndex: {};
declare function KDGetAdjacentGroups(group: string, max?: number): string[];
declare function KinkyDungeonUpdateStruggleGroups(): void;
interface StruggleGroup {
    group: string;
    left: boolean;
    y: number;
    icon: string;
    name: string;
    lock: string;
    magic: boolean;
    noCut: boolean;
    curse: string;
    blocked: boolean;
}
declare function KDCanStruggle(item: item): boolean;
declare function KDCanRemove(item: item): boolean;
declare function KDGetItemLinkIndex(inv: item, _allowInaccessible?: boolean): number;
declare function KDGetItemLinkHost(inv: item): item;
declare function KDDrawNavBar(skip: number, _quit?: boolean): void;
declare function KDCullSpellChoices(): void;
declare let currentHighlightedItem: item;
declare let currentHighlightedItemNoReset: boolean;
declare let currentDrawnSG: StruggleGroup;
declare let currentDrawnSGlayers: any[];
declare let currentDrawnSGLength: number;
declare function KDSetFocusControl(control: string): void;
declare function KDInitFocusControl(control: string): void;
declare function KDSetFocusControlToggle(key: any, value: any): void;
declare function KDInputFocusControlToggle(key: string, value: boolean): void;
declare function KDDrawMMButtons(MinimapX: number, MinimapY: number, zIndex: number): void;
declare function KDDrawRightMMButtons(MinimapX: number, MinimapY: number, zIndex: number, MinimapWidth: number): void;
declare let KDMMLabels_Chest: boolean;
declare let KDMMLabels_Shrine: boolean;
declare let KDMMLabels_Other: boolean;
declare function KDDrawMinimap(MinimapX: number, MinimapY: number): void;
declare function KDDrawPartyMembers(PartyX: number, PartyY: number, tooltips: object[]): void;
interface statInfo {
    text: string;
    icon?: string;
    overIcon?: string;
    count?: string;
    category: string;
    priority?: number;
    color: string;
    bgcolor: string;
    countcolor?: string;
    buffData?: any;
    click?: string;
    buffid?: string;
    flashing?: boolean;
}
declare function KDGetStatsWeaponCast(): Record<string, statInfo>;
declare function KDProcessBuffIcons(minXX: number, minYY: number, side?: boolean): void;
declare function KDDrawBuffIcons(minXX: number, minYY: number, statsDraw: Record<string, statInfo>, side: boolean): void;
declare let KDLastStruggleTypeTooltip: string;
declare function KDDrawStruggleGroups(): void;
declare function KDTightnessRank(tightness: number): string;
declare function KDTrySetFocusControl(control: string): void;
declare function KDGetTrainingXPNext(training: string, player: entity): number;
declare function KDGetTrainingXPMax(training: string, player: entity): number;
declare function KDCanCallGuardHelp(player: entity): boolean;
declare let KDAlreadyEquippedWeaponErrorIcon: string;
declare function KDDrawResourcesQuick(): boolean;
declare let lastExtraTooltipCycleTimeAuto: number;
declare let lastExtraTooltipCycleTimeAuto_Delay: number;
declare let lastExtraTooltipCycleTimeAuto_ManualDelay: number;
declare let KDGamePlayerZIndex: number;
declare let KDMenuPlayerZIndex: number;
interface KDLight {
    x: number;
    y: number;
    y_orig?: number;
    x_orig?: number;
    visualxoffset?: number;
    visualyoffset?: number;
    brightness: number;
    color: number;
    nobloom?: boolean;
}
declare let KDDebugOverlay: boolean;
declare let CHIBIMODEND: PoseMod[];
declare let CHIBIMOD: PoseMod[];
declare let KDInspectCamera: {
    x: number;
    y: number;
};
declare let KDRecentRepIndex: number;
declare let KDWallReplacers: string;
declare let KinkyDungeonSuppressSprint: boolean;
declare let KDReturnButtonXX: number;
declare let KDIntenseFilter: any;
declare let KDButtonHovering: boolean;
declare let KDDistractionFlashTime: number;
declare let KDDistractionFlashStrengthTime: number;
declare let KDDistractionFlashStrength: number;
declare let KDDistractionFlashLastTime: number;
declare let KDAnimTick: number;
declare let KDAnimTickInterval: number;
declare let KDAnimTime: number;
declare let KDFloatAnimTime: number;
declare let KDSquishyAnimTime: number;
declare let KDBreathAnimTime: number;
declare let KDFlipPlayer: boolean;
declare let KDBaseButtonAlpha: number;
declare let pixiview: HTMLCanvasElement;
declare let pixirenderer: any;
declare let pixirendererKD: any;
declare let kdgamefog: import("pixi.js").Graphics;
declare let kdBGMask: import("pixi.js").Graphics;
declare let kdgamefogsmoothDark: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdgamefogsmooth: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdgamesound: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdsolidcolorfilter: import("pixi.js").Filter;
declare let kdoutlinefilter: import("pixi-filters").OutlineFilter;
declare let KDOutlineFilterCache: Map<any, any>;
declare let kdminimap: import("pixi.js").Graphics;
declare let kdmapboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdlightmap: any;
declare let kdlightmapGFX: any;
declare let npcTooltipContainer: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdbrightnessmap: any;
declare let kdbrightnessmapGFX: any;
declare let kddarkdesaturatefilter: import("pixi.js").Filter;
declare let kdfogfilter: import("pixi.js").Filter;
declare let kdgammafilterstore: number[];
declare let kdgammafilter: import("pixi.js").Filter;
declare let kdmultiplyfilter: import("pixi.js").Filter;
declare let KDBoardFilters: import("pixi.js").Filter[];
declare let kdenemyboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdenemystatusboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdbulletboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdeffecttileboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdUItext: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdstatusboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdfloatercanvas: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kddialoguecanvas: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdenemydialoguecanvas: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kditemsboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdwarningboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdwarningboardOver: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdgameboard: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdui: import("pixi.js").Graphics;
declare let kdcanvas: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let kdpalettecontainer: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let statusOffset: number;
declare let kdparticles: import("pixi.js").Container<import("pixi.js").DisplayObject>;
declare let KDTextWhite: string;
declare let KDTextGray3: string;
declare let KDTextGraymid: string;
declare let KDBookTextNew: string;
declare let KDTextTanNew: string;
declare let KDBookTextSB: string;
declare let KDTextTanSB: string;
declare let KDBookText: string;
declare let KDTextTan: string;
declare let KDTextGray2: string;
declare let KDTextGray1: string;
declare let KDTextGray05: string;
declare let KDTextGray0: string;
declare let KDTextGreen1: string;
declare let KDTextBlue1: string;
declare let KDTextRed1: string;
declare let KDTextRedBG: string;
declare let KDCurseColor: string;
declare let KDGoodColor: string;
declare let KDTutorialColor: string;
declare let kdSpritesDrawn: Map<string, boolean>;
declare let kdRTlastLookup: Map<string, number>;
declare let kdTexlastLookup: Map<string, number>;
declare let kdlightsprites: Map<string, any>;
declare let kdpixisprites: Map<string, any>;
declare let kdRTcache: Map<string, PIXIRenderTexture>;
declare let kdRTSpritecache: Map<PIXIRenderTexture, PIXISprite>;
declare let kdTexcache: Map<string, PIXITexture>;
declare let kdminimapsprites: Map<string, any>;
declare let kdpixifogsprites: Map<string, any>;
declare let kdpixibrisprites: Map<string, any>;
declare let kdFilterSprites: Map<PIXISprite | PIXITexture, {
    hash: string;
    filter: PIXIFilter;
}[]>;
declare let kdprimitiveparams: Map<string, any>;
declare let kdpixitex: Map<string, any>;
declare function KDWallVert(x: number, y: number, noReplace?: string): boolean;
declare function KDWallVertAbove(x: number, y: number, noReplace?: string): boolean;
declare function KDWallVertBoth(x: number, y: number, noReplace?: string): boolean;
declare function KDWallHorizTunnel(x: number, y: number): boolean;
declare function KDWallVertTunnel(x: number, y: number): boolean;
declare let KDChainablePillar: string;
declare const KDSprites: KDSprites;
declare const KDOverlays: KDSprites;
declare const KDOverlays2: KDSprites;
declare function KinkyDungeonGetSprite(code: string, x: number, y: number, Fog: boolean, noReplace: string): string;
declare function KinkyDungeonGetSpriteOverlay2(code: string, x: number, y: number, Fog: boolean, noReplace: string): string;
declare function KinkyDungeonGetSpriteOverlay(code: string, x: number, y: number, Fog: boolean, noReplace: string): string;
declare let KDSpecialChests: {
    silver: string;
    shadow: string;
    lessershadow: string;
    kitty: string;
    robot: string;
};
declare let KDLastKeyTime: Record<string, number>;
declare function KDDoModalX(_bdata: any): void;
declare function KDGetSpellRange(spell: spell): number;
declare function KinkyDungeonDrawPlayerNameInMenus(): void;
declare let KDAutowait_Slow: number;
declare let KDAutowait_Med: number;
declare let KDAutowait_Fast: number;
declare let KDAutowait_Max: number;
declare let KDHypnoAngle: number;
declare let KDHypnoTime: number;
declare let KDHypnoWaveTime: number;
declare let KDHypnoIntensity: number;
declare function KinkyDungeonDrawGame(): void;
declare function KDShouldDrawFloaters(): boolean;
declare function KDDrawArousalScreenFilter(_y1: number, _h: number, _Width: number, _ArousalOverride: number, _Color?: string, _AlphaBonus?: number): void;
declare function KDCanAttack(): boolean;
declare let KinkyDungeonFloaters: any[];
declare let KinkyDungeonLastFloaterTime: number;
declare let KDTimescale: number;
declare let KDBulletSpeed: number;
declare let KDEntitiesFloaterRegisty: Map<any, any>;
declare let KDFloaterSpacing: number;
declare function KinkyDungeonSendFloater(Entity: entity, Amount: number | string, Color: string, Time?: number, LocationOverride?: boolean, suff?: string, size?: number, prefix?: string): void;
declare let KDFloaterGridRes: number;
declare let KDFloaterGridCache: Record<string, number>;
declare let KDFloaterGridWipedOutAlpha: number;
declare function KinkyDungeonDrawFloaters(CamX: number, CamY: number, onlyAbs?: boolean): void;
declare function KDEase(value: number): number;
declare let KinkyDungeonMessageToggle: boolean;
declare let KinkyDungeonMessageLog: any[];
declare let KDLogDist: number;
declare let KDMSGFontSize: number;
declare let KDLogHeight: number;
declare let KDMaxLog: number;
declare let KDLogTopPad: number;
declare let KDLogIndex: number;
declare let KDLogIndexInc: number;
declare let KDMsgWidth: number;
declare let KDMsgWidthMin: number;
declare let KDMsgX: number;
declare let KDMsgFadeTime: number;
declare let KDMaxConsoleMsg: number;
declare let KDLogFilters: string[];
declare let KDLogFilterDefault: {
    TotalDamage: boolean;
};
declare function KinkyDungeonDrawMessages(NoLog?: boolean, shiftx?: number, noBG?: boolean, width?: number): void;
declare function KDhexToRGB(h: string): {
    r: string;
    g: string;
    b: string;
};
declare function KinkyDungeonUpdateVisualPosition(Entity: any, amount: number): number;
declare function KinkyDungeonSetTargetLocation(helper?: boolean, mx?: number, my?: number): void;
declare function KDGetMoveDirection(): {
    x: number;
    y: number;
};
declare function KinkyDungeonSetMoveDirection(): void;
type RectParams = {
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    Color: string;
    zIndex: number;
    LineWidth?: number;
    alpha?: number;
};
type CircParams = {
    Left: number;
    Top: number;
    Radius: number;
    StartAngle: number;
    EndingAngle: number;
    CounterClockwise: boolean;
    Color: string;
    zIndex: number;
    LineWidth?: number;
    alpha?: number;
    Rotation?: number;
};
type CircleParams = {
    Left: number;
    Top: number;
    Radius: number;
    Color: string;
    zIndex: number;
    LineWidth?: number;
    alpha?: number;
};
declare let KDBoxThreshold: number;
declare let KDButtonColor: string;
declare let KDButtonColorIntense: string;
declare let KDBorderColor: string;
declare let KDUIColorHighlight: string;
declare let KDHighlightColor: string;
declare let KDStrongHighlightColor: string;
declare function DrawBoxKD(Left: number, Top: number, Width: number, Height: number, Color: string, NoBorder?: boolean, Alpha?: number, zIndex?: number): void;
declare function DrawBoxKDTo(Container: PIXIContainer, Left: number, Top: number, Width: number, Height: number, Color: string, NoBorder?: boolean, Alpha?: number, zIndex?: number, bordercolor?: string): void;
declare let KDFont: string;
declare function DrawTextFitKD(Text: string, X: number, Y: number, Width: number, Color: string, BackColor?: string, FontSize?: number, Align?: string, zIndex?: number, alpha?: number, border?: number, unique?: boolean, font?: string, wordwrap?: boolean): number;
declare function DrawTextFitKDgetHeight(Text: string, X: number, Y: number, Width: number, Color: string, BackColor?: string, FontSize?: number, Align?: string, zIndex?: number, alpha?: number, border?: number, unique?: boolean, font?: string, wordwrap?: boolean, valign?: string): number;
type TextParamsType = {
    Text: string;
    X: number;
    Y: number;
    Width?: number;
    Color: string;
    BackColor: string;
    FontSize?: number;
    align?: string;
    zIndex?: number;
    alpha?: number;
    border?: number;
    unique?: boolean;
    font?: string;
    wordwrap?: boolean;
    valign?: string;
};
declare function DrawTextFitKDTo(Container: PIXIContainer, Text: string, X: number, Y: number, Width: number, Color: string, BackColor?: string, FontSize?: number, Align?: string, zIndex?: number, alpha?: number, border?: number, unique?: boolean, font?: string, wordwrap?: boolean): number;
declare function DrawTextFitKDTo2(Container: PIXIContainer, Map: Map<string, any>, Text: string, X: number, Y: number, Width: number, Color: string, BackColor?: string, FontSize?: number, Align?: string, zIndex?: number, alpha?: number, border?: number, unique?: boolean, font?: string): number;
declare function DrawTextKD(Text: string, X: number, Y: number, Color: string, BackColor?: string, FontSize?: number, Align?: string, zIndex?: number, alpha?: number, border?: number): number;
declare let KDAllowText: boolean;
declare function DrawTextVisKD(Container: PIXIContainer, Map: Map<string, any>, id: string, Params: TextParamsType): number[];
declare function DrawRectKD(Container: PIXIContainer, Map: Map<string, any>, id: string, Params: RectParams): boolean;
declare function DrawCircleKD(Container: PIXIContainer, Map: Map<string, any>, id: string, Params: RectParams): boolean;
declare function DrawCrossKD(Container: PIXIContainer, Map: Map<string, any>, id: string, Params: RectParams): boolean;
declare function FillCircleKD(Container: PIXIContainer, Map: Map<string, any>, id: string, Params: CircleParams): boolean;
declare function FillRectKD(Container: PIXIContainer, Map: Map<string, any>, id: string, Params: RectParams): boolean;
declare function FillCircleBarKD(Container: PIXIContainer, Map: Map<string, any>, id: string, Params: CircParams): boolean;
type ButtonOptions = {
    noTextBG?: boolean;
    alpha?: number;
    textalpha?: number;
    zIndex?: number;
    unique?: boolean;
    scaleImage?: boolean;
    centered?: boolean;
    centerText?: boolean;
    tint?: string;
    hotkey?: string;
    hotkeyPress?: string;
    wrap?: boolean;
    filters?: any[];
    font?: string;
    fontSize?: number;
    maxWidth?: number;
    spritealpha?: number;
    bordercolor?: string;
    fillcolor?: string;
    hoverData?: any;
    onHover?: (button: KDButtonParamData) => void;
};
declare function DrawButtonVis(Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string | string[], HoveringText?: string, Disabled?: boolean, NoBorder?: boolean, FillColor?: string, FontSize?: number, ShiftText?: boolean, Stretch?: boolean, zIndex?: number, options?: ButtonOptions): void;
declare function DrawButtonVisTo(Container: PIXIContainer, Left: number, Top: number, Width: number, Height: number, Label: string, Color: string, Image?: string | string[], HoveringText?: string, Disabled?: boolean, NoBorder?: boolean, FillColor?: string, FontSize?: number, ShiftText?: boolean, Stretch?: boolean, zIndex?: number, options?: ButtonOptions): void;
declare function DrawCheckboxVis(Left: number, Top: number, Width: number, Height: number, Text: string, IsChecked: boolean, Disabled?: boolean, TextColor?: string, CheckImage?: string, options?: ButtonOptions): void;
declare function DrawCheckboxKDEx(name: string, func: (bdata: any) => boolean, enabled: boolean, Left: number, Top: number, Width: number, Height: number, Text: string, IsChecked: boolean, Disabled?: boolean, TextColor?: string, CheckImage?: string, options?: ButtonOptions): void;
declare function DrawCheckboxKDExTo(canvas: PIXIContainer, name: string, func: (bdata: any) => boolean, enabled: boolean, Left: number, Top: number, Width: number, Height: number, Text: string, IsChecked: boolean, Disabled?: boolean, TextColor?: string, CheckImage?: string, options?: ButtonOptions): void;
declare function DrawBackNextButtonVis(Left: number, Top: number, Width: number, Height: number, Label: string, _Color: string, Image?: string, _BackText?: () => string, _NextText?: () => string, Disabled?: boolean, ArrowWidth?: number, _NoBorder?: boolean, options?: ButtonOptions): void;
declare function KDDrawMap(CamX: number, CamY: number, CamX_offset: number, CamY_offset: number, _CamX_offsetVis: number, _CamY_offsetVis: number, Debug?: boolean): any;
declare function KDDraw(Container: PIXIContainer, Map: Map<string, any>, id: string, Image: string, Left: number, Top: number, Width: number, Height: number, Rotation?: number, options?: any, Centered?: boolean, SpritesDrawn?: Map<string, boolean>, Scale?: number, Nearest?: boolean): any;
declare let KDAdaptiveTexCache: Map<string, number>;
declare let KDAdaptiveTexCacheThreshold: number;
declare let KDAdaptiveTexCacheMax: number;
declare function KDTickAdaptiveTexCache(delta: number): void;
declare function KDDoAdaptiveTexCache(id: string, delta: number): boolean;
declare function KDGetOrMakeRenderTexture(Image: string, Nearest: boolean, id: string, filters: PIXIFilter[], force?: boolean, useAtlas?: boolean, resolution?: number): PIXITexture;
declare function KDDrawRT(Container: PIXIContainer, Map: Map<string, any>, id: string, filterid: string, Image: string, Left: number, Top: number, Width: number, Height: number, Rotation?: number, options?: any, Centered?: boolean, SpritesDrawn?: Map<string, boolean>, Scale?: number, Nearest?: boolean, baseFilters?: PIXIFilter[], force?: boolean, useAtlas?: boolean, resolution?: number, autoAdd?: boolean): any;
declare let OPTIONS_NEAREST: {
    scaleMode: import("pixi.js").SCALE_MODES;
};
declare let errorImg: {};
declare function KDTex(Image: string, Nearest?: boolean): PIXITexture;
declare function string2hex(str: string): number;
declare function GetAdjacentList(list: string[], index: number, width: number): {
    left: string[];
    right: string[];
};
declare function KDEnumLights(data: {
    lights: KDLight[];
    maplights: KDLight[];
    effecttilelights: KDLight[];
}): void;
declare function KDUpdateVision(CamX?: number, CamY?: number, _CamX_offset?: number, _CamY_offset?: number): void;
declare function KDObjectTooltip(x: number, y: number, fallback: string): string;
declare let KDTileTooltips: Record<string, (x: number, y: number) => {
    color: string;
    text: string;
    desc?: string;
    noInspect?: boolean;
}>;
declare function KDGetTileColor(x: number, y: number): string;
declare function KDDrawTileTooltip(maptile: string, x: number, y: number, offset: number): number;
declare let KDEffectTileTooltips: Record<string, {
    color: string;
    code: (tile: effectTile, x: number, y: number, TooltipList: any[]) => void;
}>;
declare function KDETileTooltipSimple(tile: effectTile, TooltipList: any[], color: string, extra?: string, descColor?: string, extraColor?: string): void;
declare function KDDrawEffectTileTooltip(tile: effectTile, x: number, y: number, offset: number): number;
declare function KDDrawTooltip(TooltipList: any[], offset: number, hidebg?: boolean): number;
declare let NPCTooltipZoomRatio: number;
declare let NPCTooltipZoomCurrent: number;
declare let NPCTooltipZoomX: number;
declare let NPCTooltipZoomY: number;
declare let NPCTooltipZoomIn: boolean;
declare let KDTempElements: Map<any, any>;
declare let KDDrawnElements: Map<any, any>;
declare function KDTextArea(Name: string, Left: number, Top: number, Width: number, Height: number): {
    Element: any;
    Created: boolean;
};
declare function KDTextField(Name: string, Left: number, Top: number, Width: number, Height: number, Type?: string, Value?: string, MaxLength?: string, TextSize?: number): {
    Element: any;
    Created: boolean;
};
declare function KDCullTempElements(): void;
declare function KDElementPosition(ElementID: string, X: number, Y: number, W: number, H?: number, FS?: number): void;
declare function KDShowQuickInv(): boolean;
declare let KDUpdateFog: boolean;
declare let KDLastCamPos: {
    x: number;
    y: number;
};
declare let KDDrawPlayer: boolean;
declare function KDPlayerDrawPoseButtons(C: Character): void;
declare function KDGetLightColor(x: number, y: number): number;
declare function KDGetLightColorGreyscale(x: number, y: number): number;
declare function KDMouseInModalArea(): boolean;
declare function KDPointInModalArea(X: number, Y: number): boolean;
declare function KDPointInPlayableArea(X: number, Y: number): boolean;
declare function KDMouseInPlayableArea(): boolean;
declare function KDHotkeyToText(hotkey: string): string;
declare function KDGetTargetRetType(x: number, y: number): string;
declare let KDPIXIPaletteFilters: Map<string, PIXIFilter[]>;
declare function KDDrawCustomPalettes(palettes: Record<string, Record<string, LayerFilter>>, paletteID: string, x: number, y: number, w: number, scale: number, selected: string, callback?: (s: string) => void, text?: string, deffault?: string): void;
declare function KDDrawPalettes(x: number, y: number, w: number, scale: number, selected: string, callback?: (s: string) => void, text?: string, deffault?: string): void;
declare function KDGetOutlineFilter(color: number, alpha: number, quality: number, thickness: number): PIXIFilter;
declare function KDClearOutlineFilterCache(): void;
declare let KDForceAllCull: boolean;
declare let KDLastFilterSpritesSanitize: number;
declare function KDDoGraphicsSanitize(): void;
declare function KDGetFontMult(font?: string): any;
declare let KDCustomDraw: {
    Bondage: () => void;
};
type InvColorFilterData = {
    restraints: Record<string, NPCRestraint>;
    id: number;
    entity: entity;
    player: entity;
    force: boolean;
};
declare let KDCustomDrawInvColorFilter: {
    Bondage: (data: InvColorFilterData) => (inv: any) => string;
};
declare function KDPlayerZoom(PlayerModel: ModelContainer): number;
declare function KDDrawChibi(Character: Character, x: number, y: number, zoom: number): import("pixi.js").Mesh<import("pixi.js").MeshMaterial>;
declare function MouseOverChar(): boolean;
declare function KDGetBoxShiftOffset(x: number, y: number, w: number, h: number, xpad?: number, ypad?: number): KDPoint;
declare let KDContextMenuFontSizeMobile: number;
declare let KDContextMenuFontSize: number;
declare function KDDrawContextMenu(draw: boolean, mouseX: number, mouseY: number, options: string[], optionImages: Record<string, string>, optionActions: Record<string, (mouseX: number, mouseY: number) => void>, optionGrey: Record<string, boolean>, optionText: Record<string, string>, optionColor: Record<string, string>): string;
declare function KDSpellValid(x: number, y: number, spellRange: number, projAimOverride?: boolean): boolean;
declare let KDStatusFadeSpeed: number;
declare let KDStatusToggle: boolean;
declare let KDMouseOtherStatusFade: number;
declare let KDMousePlayableAreaStatusFade: number;
declare function KDDoStatusFade(delta: number): void;
declare function KDCanConsentIngame(): boolean;
declare let KDCurrentProgressMainSelection: string;
declare function KinkyDungeonDrawProgress(xOffset?: number): void;
interface ProgressListData {
    name: string;
    data?: Record<string, string>;
    progress: number;
    color: string;
    failcolor?: string;
    bordercolor: string;
    textColor: string;
    level?: number;
    priority: number;
    drawType: string;
    drawData: ProgressListDrawData;
}
interface ProgressListEventData {
    list: ProgressListData[];
    trainings: ProgressListData[];
    player: entity;
}
interface ProgressListDrawData {
    type: string;
    name: string;
    progressString: string;
    bonusprogress?: string;
    failpercentage?: string;
}
interface ProgressListDrawTrainingData extends ProgressListDrawData {
}
declare function KDEnumerateTrainingProgress(data: ProgressListEventData): void;
declare function KDEnumerateMainProgress(data: ProgressListEventData): void;
declare function KDEnumerateProgressItems(sort?: boolean, player?: entity): ProgressListData[];
declare function KDDrawProgressList(xOffset: any): void;
declare let KDProgressDrawTypes: Record<string, (container: PIXIContainer, z: number, id: string, data: ProgressListData, drawData: ProgressListDrawData, x: number, y: number, width: number, height: number) => void>;
interface ProgressTag {
    key: string;
    keyparams?: any;
    descparams?: any;
    tag: string;
    desc: string;
    value: number;
}
interface ProgressRecord {
    currentFloorList: ProgressTag[];
    lastFloorList: ProgressTag[];
    currentLevelList: ProgressTag[];
}
declare function AddProgressFloor(type: string, name: string, item: ProgressTag, force: boolean): boolean;
declare function AddProgressLevel(type: string, name: string, item: ProgressTag, force: boolean): boolean;
declare function TickProgressRecord(): void;
declare function LevelUpProgressRecord(type: string, name: string): void;
declare let KDScrollableListDataset: Record<string, KDScrollableListData>;
interface KDScrollableListData {
    index: number;
    x: number;
    y: number;
    w: number;
    h: number;
    num_per_page: number;
    zIndex: number;
    allowWrap: boolean;
    visual_index: number;
    click_hold_y: number;
    click_hold_y_index: number;
    max: number;
    min: number;
    selectedindex: number;
    items: any[];
    lastUpdated: number;
    updateInterval: number;
}
declare let KDScrollableListExp: number;
declare let KDScrollableListMin: number;
declare let KDScrollBarSpacingW: number;
declare let KDScrollBarW: number;
declare function ShouldUpdateList(name: string, reset?: boolean): boolean;
declare function ForceUpdateList(name: string): void;
declare function PopulateList(name: string, x: number, y: number, w: number, h: number, z: number, num_per_page: number, list: any[], allowWrap?: boolean): KDScrollableListData;
declare function KDFixScrollableList(name: string, pad?: number): boolean;
declare function KDScrollScrollableLists(mouseX: number, mouseY: number, scrollAmount: number): boolean;
declare function KDScrollScrollableList(name: string, amount: number): boolean;
declare function KDUpdateScrollableLists(delta: number): void;
declare let KDPIXIScrollableListContainers: Record<string, PIXIContainer>;
declare function KDDrawScrollableList(name: string, useContainer: boolean, drawCallback: (container: PIXIContainer, isClickable: boolean, item: any, index: number, visualIndex: number, isSelected: boolean, selectedIndex: number, list: KDScrollableListData) => boolean, drawBG?: boolean, horizontal?: boolean, scrollbarSize?: number, scrollSuff?: string, scrollhotkeyUp?: string, scrollhotkeyDown?: string, alpha?: number, alphaborder?: number, color?: string, pad?: number): any;
declare let KDContextMenu: boolean;
declare let KDContextX: number;
declare let KDContextY: number;
declare let KDContextXX: number;
declare let KDContextYY: number;
declare let KDContextW: number;
declare let KDContextH: number;
declare let KDContextStage: string;
declare let KDGetContextActions: {
    RestraintContext: (draw: any, mouseX: any, mouseY: any, data: any) => {
        options: string[];
        optionImages: Record<string, string>;
        optionActions: Record<string, (mouseX: number, mouseY: number) => void>;
        optionGrey: Record<string, boolean>;
        optionText: Record<string, string>;
        optionColor: Record<string, string>;
    };
    Game: (draw: any, mouseX: any, mouseY: any, data: any) => {
        options: string[];
        optionImages: Record<string, string>;
        optionActions: Record<string, (mouseX: number, mouseY: number) => void>;
        optionGrey: Record<string, boolean>;
        optionText: Record<string, string>;
        optionColor: Record<string, string>;
    };
};
declare let KDDrawGameContextMenu: {
    RestraintContext: (draw: any, mouseX: any, mouseY: any) => string[];
    Game: (draw: any, mouseX: any, mouseY: any) => string[];
};
declare function KDGetGameContextActionsVanilla(draw: boolean, options: string[], optionImages: Record<string, string>, optionActions: Record<string, (mouseX: number, mouseY: number) => void>, optionGrey: Record<string, boolean>, optionText: Record<string, string>, optionColor: Record<string, string>): void;
declare function KDGetRestraintContextActionsVanilla(item: item, sg: StruggleGroup, index: number, target: entity, entity: entity, draw: boolean, options: string[], optionImages: Record<string, string>, optionActions: Record<string, (mouseX: number, mouseY: number) => void>, optionGrey: Record<string, boolean>, optionText: Record<string, string>, optionColor: Record<string, string>): void;
declare function KDContextMenuWeaponSpecialSuff(special: KDWeaponSpecial): "" | "attack" | "ignite" | "hitorspell" | "selfcast";
declare function KDShowInventory(container: string[]): void;
declare let KinkyDungeonKilledEnemy: any;
declare let KinkyDungeonAlert: number;
declare let KDMaxPreviousWeapon: number;
declare let KDMINDAMAGENOISE: number;
declare let KDDMGSOUNDMULT: number;
declare let KDBaseDodgeRemovalChance: number;
declare let KDBrawlerAmount: number;
declare let KDClumsyAmount: number;
declare let KDUnfocusedParams: {
    AmountMin: number;
    AmountMax: number;
    ThreshMin: number;
    ThreshMax: number;
};
interface KDBulletVisual {
    end: boolean;
    temporary: boolean;
    zIndex: number;
    spin: number;
    spinAngle: number;
    name: string;
    size: number;
    spriteID: string;
    xx: number;
    yy: number;
    visual_x: number;
    visual_y: number;
    aoe?: number;
    updated: boolean;
    vx: number;
    vy: number;
    scale: number;
    alpha: number;
    delay: number;
}
declare let KDDodgeAmount: number;
declare let KinkyDungeonMissChancePerBlind: number;
declare let KinkyDungeonBlockMissChancePerBlind: number;
declare let KinkyDungeonMissChancePerSlow: number;
declare let KinkyDungeonBulletsVisual: Map<string, KDBulletVisual>;
declare let KinkyDungeonBulletsID: Record<string, any>;
declare let KDVulnerableDmg: number;
declare let KDVulnerableHitMult: number;
declare let KDVulnerableBlockHitMult: number;
declare let KDPacifistReduction: number;
declare let KDEnemyResistHPMult: number;
declare let KDRiggerDmgBoost: number;
declare let KDRiggerBindBoost: number;
declare let KDStealthyHPMult: number;
declare let KDStealthyEvaMult: number;
declare let KDResilientHPMult: number;
declare let KDStealthyEnemyCountMult: number;
declare let KDBoundPowerMult: number;
declare let KDBerserkerAmp: number;
declare let KDUnstableAmp: number;
declare let KDFightParams: {
    KDFreezeMeleeMult: number;
    KDFreezeShatterMult: number;
};
declare let KinkyDungeonOpenObjects: string;
declare let KinkyDungeonMeleeDamageTypes: string[];
declare let KinkyDungeonTeaseDamageTypes: string[];
declare let KinkyDungeonPacifistDamageTypes: string[];
declare let KinkyDungeonStunDamageTypes: string[];
declare let KinkyDungeonBindDamageTypes: string[];
declare let KinkyDungeonFreezeDamageTypes: string[];
declare let KinkyDungeonSlowDamageTypes: string[];
declare let KinkyDungeonVulnerableDamageTypes: string[];
declare let KinkyDungeonMeltDamageTypes: string[];
declare let KinkyDungeonShatterDamageTypes: string[];
declare let KinkyDungeonDismantleDamageTypes: string[];
declare let KinkyDungeonIgnoreShieldTypes: string[];
declare let KinkyDungeonIgnoreBlockTypes: string[];
declare let KDTorchExtinguishTypes: string[];
declare let KDSlimeExtinguishTypes: string[];
declare let KDIgnitionSources: string[];
declare let KDDamageEquivalencies: {
    frost: string;
    souldrain: string;
    drain: string;
    shock: string;
    blast: string;
    estim: string;
};
declare let KDDamageBinds: {
    glue: string;
    ice: string;
    frost: string;
    crush: string;
};
declare let KDSpellTagBinds: {
    rope: string;
    leather: string;
    chain: string;
    metal: string;
    vine: string;
    nature: string;
};
declare let KDResistanceProfiles: {
    rope: Record<any, any>;
    construct: Record<any, any>;
    catgirl: Record<any, any>;
    alchemist: Record<any, any>;
    slime: Record<any, any>;
};
declare let KinkyDungeonDamageTypesExtension: {
    tickle: string;
    grope: string;
    pain: string;
    happygas: string;
    poisongas: string;
    charm: string;
};
declare let KinkyDungeonBindingDamageTypes: string[];
declare let KinkyDungeonDistractDamageTypes: string[];
declare let KinkyDungeonMasochistDamageTypes: string[];
declare let KinkyDungeonPlayerWeapon: string;
declare let KinkyDungeonPlayerDamageDefault: weapon;
declare let KinkyDungeonPlayerDamage: weapon;
declare let KinkyDungeonDamageTypes: {
    heal: {
        name: string;
        color: string;
        bg: string;
        harmless: boolean;
    };
    holy: {
        name: string;
        color: string;
        bg: string;
    };
    acid: {
        name: string;
        color: string;
        bg: string;
    };
    soap: {
        name: string;
        color: string;
        bg: string;
    };
    cold: {
        name: string;
        color: string;
        bg: string;
    };
    arcane: {
        name: string;
        color: string;
        bg: string;
    };
    ice: {
        name: string;
        color: string;
        bg: string;
    };
    frost: {
        name: string;
        color: string;
        bg: string;
    };
    fire: {
        name: string;
        color: string;
        bg: string;
    };
    poison: {
        name: string;
        color: string;
        bg: string;
    };
    poisongas: {
        name: string;
        color: string;
        bg: string;
    };
    happygas: {
        name: string;
        color: string;
        bg: string;
    };
    charm: {
        name: string;
        color: string;
        bg: string;
    };
    soul: {
        name: string;
        color: string;
        bg: string;
    };
    drain: {
        name: string;
        color: string;
        bg: string;
    };
    souldrain: {
        name: string;
        color: string;
        bg: string;
    };
    electric: {
        name: string;
        color: string;
        bg: string;
    };
    estim: {
        name: string;
        color: string;
        bg: string;
    };
    glue: {
        name: string;
        color: string;
        bg: string;
    };
    stun: {
        name: string;
        color: string;
        bg: string;
    };
    chain: {
        name: string;
        color: string;
        bg: string;
    };
    tickle: {
        name: string;
        color: string;
        bg: string;
    };
    plush: {
        name: string;
        color: string;
        bg: string;
    };
    crush: {
        name: string;
        color: string;
        bg: string;
    };
    grope: {
        name: string;
        color: string;
        bg: string;
    };
    slash: {
        name: string;
        color: string;
        bg: string;
    };
    pierce: {
        name: string;
        color: string;
        bg: string;
    };
    pain: {
        name: string;
        color: string;
        bg: string;
    };
    unarmed: {
        name: string;
        color: string;
        bg: string;
    };
    magic: {
        name: string;
        color: string;
        bg: string;
    };
    melee: {
        name: string;
        color: string;
        bg: string;
    };
    spell: {
        name: string;
        color: string;
        bg: string;
    };
};
declare function KDWeapon(item: Named): weapon;
declare function KDWep(name: string): weapon;
declare function KinkyDungeonFindWeapon(Name: string): weapon;
declare function KDWeaponCanCut(weapon: string, MagicOnly?: boolean): boolean;
declare function KinkyDungeonWeaponCanCut(RequireInteract: boolean, MagicOnly?: boolean): boolean;
declare function KDSetWeapon(Weapon: string, forced?: boolean): void;
declare function KinkyDungeonGetPlayerWeaponDamage(HandsFree?: boolean, NoOverride?: boolean): weapon;
declare function isUnarmed(weapon: weapon): boolean;
declare function isUnarmedUnlessBrawler(weapon: weapon): boolean;
declare let KinkyDungeonEvasionPityModifier: number;
declare let KinkyDungeonEvasionPityModifierIncrementPercentage: number;
declare let KDDefaultCrit: number;
declare let KDDefaultBindCrit: number;
declare function KinkyDungeonGetCrit(accuracy?: number, Damage?: damageInfo, Enemy?: entity, weapon?: weapon): number;
declare function KinkyDungeonGetBindCrit(accuracy?: number, Damage?: damageInfo, Enemy?: entity, weapon?: weapon): number;
declare function KDGetSpellAccuracy(): number;
declare function KDGetSlowMult(Enemy: entity): number;
declare let KDSTAMPENTYPE: {
    Weapon: {
        onEvasion: (data: any) => void;
    };
    Staff: {
        onAttack: (data: any) => void;
    };
};
declare function KinkyDungeonGetEvasion(Enemy?: entity, NoOverride?: boolean, IsSpell?: boolean, IsMagic?: boolean, cost?: boolean, forceWeapon?: item): number;
declare function KinkyDungeonAggro(Enemy: entity, Spell: spell, Attacker: entity, Faction?: string): void;
declare function KDPlayerEvasionPenalty(): number;
declare function KDPlayerBlockPenalty(): number;
declare function KDRestraintBlockPenalty(): number;
declare function KDCalcRestraintBlock(): number;
declare function KinkyDungeonPlayerEvasion(Event?: boolean): number;
declare function KinkyDungeonPlayerBlock(_Event?: boolean): number;
declare function KinkyDungeonPlayerBlockLinear(): number;
declare function KinkyDungeonGetPlayerStat(stat: any, mult?: number): number;
declare function KDRestraintBlockPower(block: any, power: number): number;
declare function KinkyDungeonEvasion(Enemy: entity, IsSpell?: boolean, IsMagic?: boolean, Attacker?: entity, chance?: number, forceWeapon?: item): boolean;
declare function KinkyDungeonGetImmunity(tags: any, profile: any, type: any, resist: any, mode?: number): boolean;
declare let KDDamageQueue: any[];
declare function KDArmorFormula(DamageAmount: number, Armor: number): number;
declare function KDDamageEnemy(Enemy: entity, Damage: damageInfo, Ranged: boolean, NoMsg: boolean, Spell?: spell, bullet?: KDBullet, attacker?: entity, Delay?: any, noAlreadyHit?: boolean, noVuln?: boolean, Critical?: any, Attack?: boolean, Weapon?: weapon, forceWeapon?: item): {
    weapon: weapon;
    forceWeapon: item;
    allowConjuredRestraint: boolean;
    useRealRestraint: boolean;
    shieldBlocked: boolean;
    aggro: boolean;
    faction: string;
    enemy: entity;
    spell: spell;
    bullet: KDBullet;
    attacker: entity;
    nocrit: boolean;
    crit: number;
    bindcrit: number;
    type: string;
    bufftype: string | number;
    time: number;
    dmg: number;
    bind: number;
    bindType: string;
    flags: string[];
    boundBonus: number;
    bindEff: number;
    distract: number;
    distractEff: number;
    desireMult: number;
    incomingDamage: damageInfo;
    dmgDealt: number;
    dmgShieldDealt: number;
    armormult: number;
    freezebroke: boolean;
    froze: number;
    vulnerable: boolean;
    vulnConsumed: boolean;
    critical: any;
    forceCrit: boolean;
    customCrit: boolean;
    noblock: boolean;
    blocked: boolean;
    Delay: any;
    ignoreshield: boolean;
    shield_crit: boolean;
    shield_stun: boolean;
    shield_freeze: boolean;
    shield_bind: boolean;
    shield_snare: boolean;
    shield_slow: boolean;
    shield_distract: boolean;
    shield_vuln: boolean;
    tease: boolean;
    stunResist: number;
    distractMult: any;
};
declare function KinkyDungeonDamageEnemy(Enemy: entity, Damage: damageInfo, Ranged: boolean, NoMsg: boolean, Spell?: spell, bullet?: KDBullet, attacker?: entity, Delay?: any, noAlreadyHit?: boolean, noVuln?: boolean, Critical?: any, Attack?: boolean, Weapon?: weapon, forceWeapon?: item): number;
declare function KinkyDungeonDisarm(Enemy: entity, suff?: string): boolean;
declare function KinkyDungeonAttackEnemy(Enemy: entity, Damage: damageInfo, chance?: number, bullet?: any, weapon?: weapon, forceWeapon?: item): boolean;
declare let KDBulletWarnings: Record<string, any>[];
declare let KDUniqueBulletHits: Map<any, any>;
declare function KDUpdateBulletEffects(b: any, d: number): void;
declare function KinkyDungeonUpdateBullets(delta: number, Allied?: boolean): void;
declare function KinkyDungeonUpdateSingleBulletVisual(b: KDBullet, end: boolean, delay?: number): void;
declare function KinkyDungeonUpdateBulletVisuals(delta: number): void;
interface extraWarningTileEntry {
    duration: number;
    delay: number;
    warning: warningTileEntry;
}
declare let KinkyDungeonExtraWarningTiles: extraWarningTileEntry[];
declare function KinkyDungeonCreateWarningTile(x: number, y: number, color?: string, duration?: number, delay?: number, x_orig?: number, y_orig?: number): void;
declare function KinkyDungeonParseExtraWarningTiles(delta: number): void;
declare let KinkyDungeonCurrentTick: number;
declare function KinkyDungeonUpdateBulletsCollisions(delta: number, Catchup?: boolean): void;
declare function KDCheckCollideableBullets(entity: entity, force: boolean): void;
declare function KinkyDungeonBulletHit(b: KDBullet, born: number, outOfTime?: boolean, outOfRange?: boolean, d?: number, dt?: number, end?: boolean): void;
declare function KinkyDungeonSummonEnemy(x: number, y: number, summonType: string | enemy, count: number, rad: number, strict?: boolean, lifetime?: number, hidden?: boolean, goToTarget?: boolean, faction?: string, hostile?: boolean, minrad?: number, startAware?: boolean, noBullet?: boolean, hideTimer?: boolean, pathfind?: boolean, mod?: string, boundTo?: number, weakBinding?: boolean, teleportTime?: number, ox?: number, oy?: number, temporary?: boolean): entity[];
declare function KinkyDungeonBulletDoT(b: KDBullet): void;
declare function KinkyDungeonBulletTrail(b: KDBullet): boolean;
declare function KinkyDungeonBulletsCheckCollision(bullet: KDBullet, AoE: boolean, force: boolean, d: number, inWarningOnly?: boolean, _delta?: number): boolean;
declare function KDBulletAoECanHitEntity(bullet: KDBullet, enemy: entity): boolean;
declare function KDBulletCanHitEntity(bullet: KDBullet, enemy: entity, inWarningOnly?: boolean, overrideCollide?: boolean): boolean;
declare function KDBulletEffectTiles(bullet: KDBullet): void;
declare function KDBulletHitPlayer(bullet: KDBullet, player: entity): void;
interface HealData {
    enemy: entity;
    amount: number;
    source: number;
    bullet: KDBullet;
}
declare function KDHealNPC(enemy: entity, amount: number, source: number, bullet?: KDBullet): void;
declare function KDBulletHitEnemy(bullet: KDBullet, enemy: entity, d: number, nomsg: boolean): void;
declare function KDBulletID(bullet: KDBullet, enemy: entity): string;
declare function KDSetBulletFlag(bullet: KDBullet, flag: string, value: boolean): void;
declare function KDSetBulletInheritedFlag(bullet: KDBullet, flag: string, value: boolean): void;
declare function KDBulletHasFlag(bullet: KDBullet, flag: string): boolean;
declare function KinkyDungeonLaunchBullet(x: number, y: number, targetx: number, targety: number, speed: number, bullet: KDBulletData, miscast: boolean, ox: number, oy: number): KDBullet;
interface LaunchBulletData {
    b: KDBullet;
    bullet: KDBulletData;
    miscast: boolean;
    cancel: boolean;
}
declare let KDLastFightDelta: number;
declare let KDWarningFlashPerDelta: number;
declare let KDWarningFlashBPerDelta: number;
declare let KDWarningFlashSpeed: number;
declare function KinkyDungeonDrawFight(_canvasOffsetX: number, _canvasOffsetY: number, CamX: number, CamY: number): void;
declare function KinkyDungeonSendWeaponEvent(Event: string, data: any, forceWeapon?: item): void;
declare function KinkyDungeonSendBulletEvent(Event: string, b: KDBullet, data: any): void;
declare function KDHealRepChange(enemy: entity, amount: number): void;
declare function KDApplyGenBuffs(entity: entity, buff: string, time: number): void;
declare function KDSilenceEnemy(enemy: entity, time: number): void;
declare function KDBlindEnemy(enemy: entity, time: number): void;
declare function KDDisarmEnemy(enemy: entity, time: number): void;
declare let KDConditions: Record<string, (e: KinkyDungeonEvent, data: any) => boolean>;
declare function KDCheckCondition(e: KinkyDungeonEvent, data: any): boolean;
declare let KDPrereqs: Record<string, (enemy: entity, e: KinkyDungeonEvent, data: any) => boolean>;
declare function KDCheckPrereq(enemy: entity, prereq?: string, e?: KinkyDungeonEvent, data?: any): boolean;
declare function KDBulletAoEMod(b: KDBullet): string;
declare function KDBulletTrailAoEMod(b: any): any;
declare function AOECondition(bx: number, by: number, xx: number, yy: number, rad: number, modifier?: string, originX?: number, originY?: number): boolean;
declare function KDCreateParticle(xx: number, yy: number, name: string): void;
declare function KDIsTeasing(damage: damageInfo): boolean;
declare function KDDealEnvironmentalDamage(x: number, y: number, aoe: number, damage: damageInfo, Attacker?: entity): void;
declare function KDDealEnvDamageToPlayer(player: entity, damage: damageInfo, Attacker?: entity): void;
declare function KDDealEnvDamageToEnemy(enemy: entity, damage: damageInfo, Attacker?: entity): boolean;
declare function KDCanOffhand(item: item): boolean;
declare function KDWeaponNoDamagePenalty(weapon: Named): boolean;
declare function KDWeaponIsMagic(weapon: Named): boolean;
declare function KDEvasiveManeuversCost(): number;
declare function KDEntityBlocksExp(entity: entity): boolean;
declare function KDCrackTile(x: number, y: number, allowCrack: boolean, data: any): void;
declare function KDBindEnemyWithTags(id: number, tags: string[], amount?: number, power?: number, forceConjure?: boolean, maxTries?: number, allowOverride?: boolean, allowVariants?: boolean, maxAdded?: number, faction?: string, overrideWill?: number): string[];
declare function KDWeaponStamPenType(weapon: weapon): string;
declare function KDEnemyShieldRegenStopTime(enemy: entity): number;
declare function KDAddWarning(tile: WarningTileRecord): void;
declare function KDGetWarnings(x: number, y: number): WarningTileRecord[];
declare function KDBulletRound(x: number): number;
declare let KinkyDungeonStatStaminaCostAttack: number;
declare let KDWeaponLootList: Record<string, Record<string, number>>;
declare let KinkyDungeonWeapons: Record<string, weapon>;
declare let KinkyDungeonInputQueue: {
    type: string;
    data: any;
}[];
declare let KDInputTypes: Record<string, (data: any) => string>;
declare function KDProcessInput(type: string, data: any): string;
declare function KDSendInput(type: string, data: any, _frame?: boolean, noUpdate?: boolean, process?: boolean): string;
declare function KDProcessInputs(ReturnResult?: boolean): string;
declare function KDInteract(x: number, y: number, dist?: number): boolean;
interface KDFurnitureDef {
    restraintSetLevelBonus?: number;
    floor: string;
    sprite: string;
    restraintTag: string;
    restraintSetTags?: Record<string, number>;
    tickFunction: (delta: number) => void;
    forceFaction?: string;
    lockType?: string;
    dollsleep?: boolean;
}
declare let KDFurniture: Record<string, KDFurnitureDef>;
declare let KinkyDungeonManaCost: number;
declare let KDEmpowerSprite: string;
declare let KDMaxEmpower: number;
declare let KDConfirmClearSpells: boolean;
declare let KinkyDungeonBookScale: number;
declare let KDFlashMana: number;
declare let KinkyDungeonMysticSeals: number;
declare let KinkyDungeonCurrentBook: string;
declare let KinkyDungeonCurrentPage: number;
declare let KinkyDungeonCurrentSpellsPage: number;
declare let KinkyDungeonBooks: string[];
declare let KinkyDungeonPreviewSpell: any;
declare let KinkyDungeonDisplayLore: boolean;
declare let KinkyDungeonSpellChoices: number[];
declare let KinkyDungeonWeaponChoices: string[];
declare let KinkyDungeonArmorChoices: string[];
declare let KinkyDungeonConsumableChoices: string[];
declare let KinkyDungeonSpellChoicesToggle: boolean[];
declare let KinkyDungeonSpellChoiceCount: number;
declare let KinkyDungeonSpellChoiceRenderRows: number;
declare let KinkyDungeonSpellChoiceCountPerPage: number;
declare let KDSpellPage: number;
declare let KinkyDungeonSpellOffset: number;
declare let KinkyDungeonSpellChoiceOffset: number;
declare let KDPlayerHitBy: any[];
declare let KDSchoolColors: {
    Elements: string;
    Conjure: string;
    Illusion: string;
};
declare let KinkyDungeonMiscastPityModifier: number;
declare let KinkyDungeonMiscastPityModifierIncrementPercentage: number;
declare let KDSpellComponentTypes: Record<string, KDSpellComponent>;
declare function KinkyDungeonSearchSpell(list: spell[], name: string): spell;
declare let KDSpellMemo: {};
declare function KinkyDungeonFindSpell(name: string, SearchEnemies?: boolean): spell;
declare function KinkyDungeonDisableSpell(Name: string): void;
declare let KinkyDungeonSpellPress: string;
declare function KinkyDungeonResetMagic(): void;
declare let KDRefreshSpellCache: boolean;
declare function KDPushSpell(spell: spell): void;
declare let KDSpellCache: Map<any, any>;
declare let KDUpcastFromCache: Map<any, any>;
declare let KDEventSpells: Map<any, any>;
declare function KDUpdateSpellCache(): void;
declare function KDHasSpell(name: string): boolean;
declare function KDGetUpcast(name: string, Level: number): spell;
declare function KDHasUpcast(name: string): boolean;
declare function KDCanUpcast(): boolean;
declare function KDEmpower(_data: any, _entity: any): void;
declare function KinkyDungeoCheckComponentsPartial(spell: spell, x: number, y: number, includeFull: boolean, noOverride?: boolean): string[];
declare function KinkyDungeoCheckComponents(spell: spell, x?: number, y?: number, noOverride?: boolean): {
    components: string[];
    failed: string[];
};
declare function KinkyDungeonHandleSpellChoice(SpellChoice: number): spell;
declare function KDSpellIgnoreComp(spell: spell, x?: number, y?: number, components?: string[]): boolean;
declare function KinkyDungeonHandleSpellCast(spell: spell): spell;
declare function KinkyDungeonClickSpell(i: number): {
    spell: any;
    clicked: boolean;
};
declare let KDSwapSpell: number;
declare function KinkyDungeonHandleSpell(ind?: number): boolean;
declare function KinkyDungeonGetStaminaCost(Spell: spell, Passive?: boolean, Toggle?: boolean): number;
declare function KinkyDungeonGetManaCost(Spell: spell, Passive?: boolean, Toggle?: boolean): number;
declare function KinkyDungeonGetChargeCost(Spell: spell, Passive?: boolean, Toggle?: boolean): number;
declare function KinkyDungeonGetCost(Spell: spell): number;
declare function KinkyDungeonMakeNoiseSignal(enemy: entity, mult?: number, hideShockwave?: boolean): entity[];
declare function KinkyDungeonMakeNoise(radius: number, noiseX: number, noiseY: number, hideShockwave?: boolean, attachToEntity?: boolean): entity[];
declare function KDDoGaggedMiscastFlag(data: any, components: string[]): void;
interface GaggedmiscastEventData {
    gaggedMiscastFlag: boolean;
    miscastChance: number;
    gaggedMiscastType: string;
    lastPartialChance: number;
}
declare function KDDoGaggedMiscastFlagEvent(spell: spell, targetX: number, targetY: number, miscastChance: number, components: string[]): GaggedmiscastEventData;
declare function KinkyDungeonCastSpell(targetX: number, targetY: number, spell: spell, enemy: entity, player: any, bullet?: KDBullet, forceFaction?: string, castData?: any): {
    result: string;
    data: any;
};
declare function KinkyDungeonClickSpellChoice(I: number, CurrentSpell: number): void;
declare function KinkyDungeonClickItemChoice(I: number, name: string): void;
declare function KinkyDungeonHandleMagic(): boolean;
declare function KDGetPrerequisite(spell: spell): string;
declare function KinkyDungeonCheckSpellPrerequisite(spell: spell): boolean;
declare function KinkyDungeonDetectLanguageForMaxWidth(str: string, maxWidthTranslate: number, maxWidthEnglish: number): number;
declare function KinkyDungeonWordWrap(str: string, maxWidthTranslate: number, maxWidthEnglish: number): string;
declare function KinkyDungeonTestWhite(x: string, language: string): boolean;
declare function KDSchoolColor(school: string): string;
declare function KinkyDungeonDrawMagic(): void;
declare let selectedFilters: string[];
declare let genericfilters: string[];
declare let KDSpellListIndex: number;
declare let KDSpellListIndexVis: number;
declare let KDMaxSpellPerColumn: number;
declare let KDMaxSpellYY: number;
declare function KDFilterSpellPages(): any[];
declare function KDFilterSpellPageNames(): any[];
declare let KDMagicFilter: string;
declare function KDFilterSpell(spell: spell): boolean;
declare function KinkyDungeonListSpells(Mode: string): spell;
declare let MagicSpellsUIShift: number;
declare function KinkyDungeonDrawMagicSpells(): void;
declare function KinkyDungeonHandleMagicSpells(): boolean;
declare function KinkyDungeonSpellIndex(Name: string): number;
declare function KinkyDungeonSetPreviewSpell(spell: spell): void;
declare function KinkyDungeonGetCompList(spell: spell): string;
declare function KinkyDungeonSendMagicEvent(Event: string, data: any, forceSpell?: spell): void;
declare function KDCastSpellToEnemies(fn: (en: entity) => boolean, tX: number, tY: number, spell: spell): boolean;
declare function KDMatchTags(tags: string[], entity: entity): boolean;
declare function KinkyDungeonLoadSpellsConfig(): void;
declare function KinkyDungeonSaveSpellsConfig(): void;
declare function KDDrawHotbar(xLoc: number, _yLoc: number, _name: string, _fn: (I: number) => void): void;
declare function KDClearChoices(): void;
declare function KDGetRandomSpell(context?: string, maxSpellLevel?: number): spell;
declare function KDGetRandomSpells(count: number, context?: string, maxSpellLevel?: number): spell[];
declare function KinkyDungeonGetUnlearnedSpells(minlevel: number, maxlevel: number, SpellList: spell[]): spell[];
declare function KinkyDungeonSpellChoiceAssign(spell: spell | string, hotbarslot?: number): void;
declare function KinkyDungeonSpellChoiceUnassign(spell: spell | string): void;
declare function KinkyDungeonSpellAdd(spellobject: spell | string, index?: number): boolean;
declare function KinkyDungeonSpellRemove(spellobject: spell | string): void;
declare function KDShockCollarCost(): number;
declare function KDCurrIndex(): string;
declare function KDGetSpellOrigin(spell: any): any;
declare let KDSpellMasteryReqs: Record<string, string[]>;
declare function KDUpdateSpellMasteryReqs(category: string): string[];
declare function KDDrawSpellInfo(showbg: boolean, xOffset: number, yOffset: number, spell: spell, showExtra: boolean): void;
declare function KDDoMiscast(miscastChance: number, gaggedMiscastFlag: boolean, gaggedMiscastType: string): boolean;
interface MiscastEventData {
    spell: spell;
    targetX: number;
    targetY: number;
    originX: number;
    originY: number;
    flags: {
        miscastChance: number;
    };
    enemy: entity;
    bullet: KDBullet;
    player: entity;
}
declare function KDDoToggleMiscast(spell: spell, player: entity): boolean;
type KDSpellSpecialCode = (spell: spell, data: any, targetX: number, targetY: number, tX: number, tY: number, entity: entity, enemy: entity, moveDirection: MoveDirection, bullet: any, miscast: boolean, faction: string, cast: any, selfCast: boolean) => void | string;
declare let KinkyDungeonSpellSpecials: Record<string, KDSpellSpecialCode>;
declare let KDCommandCaptureBindings: Record<string, (spell: spell, entity: entity, faction: string, bullet: any, miscast: any, attacker: entity, counter: number) => void>;
declare let KDCommandBindBindings: Record<string, (spell: spell, x: number, y: number, faction: string, bullet: any, miscast: any, attacker: entity, counter?: number) => void>;
declare function KDRescueSlime(en: entity, rescuer: entity): void;
declare function KDEssenceMoteDuration(): number;
declare function KDAddEssenceMoteDP(): void;
declare let KDCommandWord: spell;
declare let KDBondageSpell: spell;
declare let KDZeroResistanceSpell: spell;
declare let KinkyDungeonSpellsStart: spell[];
declare let filters: string[];
declare let filtersExtra: string[][];
declare let KDColumnLabels: string[][];
declare let KinkyDungeonSpellPages: string[];
declare let KinkyDungeonSpellPagesDefault: {
    All: boolean;
    Upgrade: boolean;
    Class: boolean;
    Upgrades: boolean;
    Elements: boolean;
    Conjure: boolean;
    Illusion: boolean;
};
declare let KDSpellColumns: {};
declare function KDAddSpellPage(page: string, columnLabels?: string[]): void;
declare let KinkyDungeonLearnableSpells: string[][][];
declare function KDDefineSpellPage(page: string, list: string[][]): void;
declare let KinkyDungeonSpellList: Record<string, spell[]>;
declare let KinkyDungeonSpellListEnemies: spell[];
declare let KDSpecialBondage: Record<string, KDBondage>;
declare let KDMagicDefs: {
    RopeKraken_TentacleCost: number;
    RopeKraken_TentacleThreshold: number;
    RopeKraken_TentacleCountMin: number;
    RopeKraken_TentacleCountShare: number;
    SarcoKraken_TentacleCost: number;
    SarcoKraken_TentacleThreshold: number;
    SarcoKraken_TentacleCountMin: number;
    SarcoKraken_TentacleCountMax: number;
    SarcoKraken_TentacleCountShare: number;
    SlimeKraken_TentacleCost: number;
    SlimeKraken_TentacleThreshold: number;
    SlimeKraken_TentacleCountMin: number;
    SlimeKraken_TentacleCountShare: number;
};
declare let KDCastConditions: Record<string, (enemy: entity, target: entity, spell?: spell) => boolean>;
declare let KDPlayerCastConditions: Record<string, (player: entity, x: number, y: number) => boolean>;
declare let KDCustomCost: Record<string, (data: any) => void>;
declare let KDPlayerEffects: Record<string, (target: any, damage: string, playerEffect: any, spell: spell, faction: string, bullet: any, entity: entity) => {
    sfx: string;
    effect: boolean;
}>;
declare function KDPlayerEffectRestrain(spell: any, count: number, tags: string[], faction: string, _noDeep?: boolean, bypass?: boolean, allowEvade?: boolean, allowBlock?: boolean, allowBondageResist?: boolean, Lock?: string, options?: any): {
    r: restraint;
    v: ApplyVariant;
    iv: string;
}[];
declare function KDTestSpellHits(spell: spell, allowEvade?: number, allowBlock?: number): boolean;
declare function KinkyDungeonPlayerEffect(target: any, damage: string, playerEffect: any, spell?: spell, faction?: string, bullet?: any, entity?: entity): boolean;
declare function KDTripleBuffKill(Name: string, Target: entity, time: number, FinalEffect?: (target: entity) => void, buffType?: string, FirstEffect?: (target: entity) => void, SecondEffect?: (target: entity) => void, ThirdEffect?: (target: entity) => void): void;
declare function KDAdvanceSlime(resetSlimeLevel: boolean, restraint?: string): boolean;
declare function KDApplyBubble(entity: entity, time: number, damage?: number): void;
declare let KDSpecialStats: Record<string, SpecialStat>;
declare function KDAddSpecialStat(stat: string, entity: entity, amount: number, Msg: boolean, max?: number, color?: string): void;
declare function KDIsImmuneToSpores(entity: entity): boolean;
declare function KDIsImmuneToGas(entity: entity): boolean;
declare function KDIsImmuneToDrugs(entity: entity): boolean;
declare let KinkyDungeonShrineBaseCosts: Record<string, number>;
declare let KDRewardProgramScaling: number;
declare let KDRewardProgramBase: number;
declare let KDWillShrineWill: number;
declare let KinkyDungeonOrbAmount: number;
declare let KDShrineRemoveCount: number;
declare let KDMaxGoddessBonus: number;
declare let KDMinGoddessBonus: number;
declare let KinkyDungeonShrineBaseCostGrowth: Record<string, number>;
declare let KinkyDungeonShopIndex: number;
declare let KinkyDungeonShrinePoolChancePerUse: number;
declare let KinkyDungeonShrineCosts: Record<string, number>;
declare let KinkyDungeonShrineTypeRemove: string[];
declare function KinkyDungeonShrineInit(): void;
declare function KDGoddessColor(Name: string): string;
declare function KinkyDungeonShrineAvailable(type: string): boolean;
declare let KDLevelsPerCheckpoint: number;
declare function KinkyDungeonGenerateShop(Level: number): any[];
declare function KinkyDungeonItemCost(item: any, noScale?: boolean, sell?: boolean): number;
interface PriceGougingValueData {
    base: number;
    bonus: number;
    mult: number;
}
declare function KDPriceGougingValueMult(player: entity): number;
declare function KinkyDungeonShrineCost(type: string): number;
declare function KDAddBasic(item: item | shopItem): void;
declare function KinkyDungeonPayShrine(type: string, mult?: number): void;
declare function KinkyDungeonHandleShrine(): boolean;
declare function KinkyDungeonDrawShrine(): void;
declare let KDGoddessRevengeMobTypes: Record<string, {
    require: string[];
    requireSingle: string[];
    filter?: string[];
}>;
declare function KDSummonRevengeMobs(_x: number, _y: number, Goddess: string, mult?: number, LevelBoost?: number): number;
declare function KDCanDrinkShrine(Bottle: boolean): boolean;
declare function KinkyDungeonGetSetPieces(Dict: any): any[];
declare function KinkyDungeonGetMapShrines(Dict: any): any[];
declare function KinkyDungeonTakeOrb(Amount: number, X: number, Y: number): void;
declare function KinkyDungeonDrawOrb(): void;
declare let KDOrbX: number;
declare let KDOrbY: number;
declare function KinkyDungeonHandleOrb(): boolean;
declare let KDPerkConfirm: boolean;
declare let KDPerkOrbPerks: any[];
declare let KDPerkOrbBondage: any[];
declare let KDPerkOrbMethod: string;
declare function KinkyDungeonTakePerk(Amount: number, X: number, Y: number): void;
declare function KinkyDungeonDrawPerkOrb(): void;
declare function KDGetPosNegColor(value: number): string;
declare function KDGetGoddessBonus(shrine: string): number;
declare function KDDrawRestraintBonus(shrine: string, x: number, y: number, width?: number, FontSize?: number, align?: string, zIndex?: number, alpha?: number, forceColor?: string): void;
declare function KDGetShrineQuest(map: KDMapDataType, tile: any): string;
declare function KDSetShrineQuest(map: KDMapDataType, tile: any, quest: string): void;
declare function KDGetPerkRarityColor(cost: number): string;
declare let TileTypeTooltipOverride: {
    Trap: {
        DisplayStandTrap: string;
        SybTrap: string;
        DisplayTrap: string;
        CageTrap: string;
        FutureBoxTrap: string;
        DisplayEgyptianTrap: string;
        BedTrap: string;
        OneBarTrap: string;
        OneBarVibeTrap: string;
        OneBarSpreaderTrap: string;
        OneBarSpreaderVibeTrap: string;
    };
    Furniture: {
        LatexDisplayStand: string;
        DisplayStand: string;
        DisplayEgyptian: string;
        Cage: string;
        Barrel: string;
        Bed: string;
        FutureBox: string;
        Sarcophagus: string;
        IceBase: string;
        CrystalBase: string;
        Syb: string;
        ShadowBase: string;
        VineBase: string;
        OneBarTrap: string;
        OneBarVibeTrap: string;
        DollStandReal: string;
        DollStandSpreaderReal: string;
        OneBarSpreaderTrap: string;
        OneBarSpreaderVibeTrap: string;
    };
};
declare let ObjectTypeTooltipOverride: {
    Trap: {
        DisplayStandTrap: string;
        DisplayTrap: string;
        CageTrap: string;
        FutureBoxTrap: string;
        DisplayEgyptianTrap: string;
        OneBarVibeTrap: string;
        OneBarTrap: string;
        OneBarSpreaderVibeTrap: string;
        OneBarSpreaderTrap: string;
        BedTrap: string;
        SybTrap: string;
    };
};
declare let KDObjectMessages: Record<string, () => boolean>;
declare let KDObjectClick: Record<string, (x: number, y: number) => boolean>;
declare let KDObjectInteract: Record<string, (x: number, y: number, dist?: number) => boolean>;
declare let KDTileInteract: Record<string, (x: number, y: number, dist?: number) => boolean>;
declare let KDObjectHandle: Record<string, () => boolean>;
declare let KDObjectDraw: Record<string, () => void>;
declare function KinkyDungeonDrawDoor(): void;
declare function KinkyDungeonDrawLock(): void;
declare function KinkyDungeonDrawGhost(): void;
declare function KinkyDungeonDrawAngel(): void;
declare function KinkyDungeonElevatorMessage(): boolean;
declare function KinkyDungeonGhostMessage(): boolean;
declare function KinkyDungeonAngelMessage(): boolean;
declare function KinkyDungeonFoodMessage(Tile?: any): boolean;
declare function KinkyDungeonMakeGhostDecision(): void;
declare function KinkyDungeonDrawCharger(): void;
declare function KinkyDungeonDrawTablet(): void;
declare function KinkyDungeonDrawFood(): void;
declare let KDChargerLight: number;
declare let KDChargerColor: number;
declare let KDLeylineLightColor: number;
declare let KDLeylineLight: number;
declare function KinkyDungeonHandleCharger(): boolean;
declare function KDHandleModalArea(): boolean;
declare let KDAlwaysUnlockedElevFloors: {
    Summit: boolean;
};
declare let KDElevatorFloorIndex: {
    Summit: {
        Floor: number;
        RoomType: string;
        MapMod: any;
        Checkpoint: string;
        MapFaction: string;
        EscapeMethod: string;
    };
};
declare function KDIsElevatorFloorUnlocked(num: string | number): boolean;
declare function KDElevatorToFloor(floor: number, RoomType: string, x?: number): void;
declare let KDBuyableStats: string[];
declare let KDStat: {
    AP: {
        getMax: (_player: any) => number;
        getCurrent: (_player: any) => number;
    };
    SP: {
        getMax: (_player: any) => number;
        getCurrent: (_player: any) => number;
    };
    MP: {
        getMax: (_player: any) => number;
        getCurrent: (_player: any) => number;
    };
    WP: {
        getMax: (_player: any) => number;
        getCurrent: (_player: any) => number;
        getAmnt2: (amnt: number) => number;
    };
};
declare let KDStatChoice: string;
declare function KDDrawHeartTablet(): void;
declare function KDDrawOrb(): void;
declare function KDGetGhostThresh(): number;
declare function KDTablesAreFlippable(mapData: any): boolean;
declare function KDGetGhostLock(buff: KDBuff, entity: entity): string;
declare let KDDroppedItemProperties: Record<string, KDDroppedItemProp>;
type GroundItem = {
    x: number;
    y: number;
    name: string;
    amount?: number;
};
declare function KinkyDungeonItemDrop(x: number, y: number, dropTable: any[], summoned: boolean): boolean | GroundItem;
declare function KinkyDungeonDropItem(Item: any, Origin: any, PreferOrigin: boolean, noMsg?: boolean, allowEnemies?: boolean): boolean;
declare function KinkyDungeonItemEvent(Item: any, nomsg?: boolean): boolean;
declare function KDAllowUseItems(Message: boolean, _x?: number, _y?: number): boolean;
declare function KinkyDungeonItemCheck(x: number, y: number, _Index: number, autoEquip?: boolean): void;
declare function KDCanSeeDroppedItem(item: GroundItem): boolean;
declare function KDGetItemType(item: Named): string;
declare function KDGetItemImage(item: Named | item, entity: entity, equipped?: boolean): string;
declare function KDGetItemImageFromString(item: string, entity: entity, equipped?: boolean): string;
declare function KinkyDungeonDrawItems(_canvasOffsetX: number, _canvasOffsetY: number, CamX: number, CamY: number): void;
declare function KinkyDungeonDrawHeart(): void;
declare function KinkyDungeonHandleHeart(): boolean;
declare let KDCustomItems: {
    LeylineMap: () => {
        sfx: any;
        replace: any;
        priority: any;
        color: any;
    };
};
declare function KDDrawItemsTooltip(items: any[], offset: number): number;
declare let KDNaughtySetting: boolean;
declare let KinkyDungeonOutfitCache: Map<any, any>;
declare let KDProtectedCosplay: string[];
declare function KDOutfit(item: Named): outfit;
declare function KinkyDungeonRefreshOutfitCache(): void;
declare let KDClothOverrides: Record<string, Record<string, number>>;
declare let KinkyDungeonDefaultDefaultDress: KinkyDungeonDress;
declare let KinkyDungeonCheckClothesLoss: boolean;
declare function KDGetDressList(): {
    [_: string]: KinkyDungeonDress;
};
declare function KinkyDungeonInitializeDresses(): void;
declare let KinkyDungeonNewDress: boolean;
declare function KinkyDungeonDressSet(C?: Character): void;
declare let KDCharacterDress: Map<any, any>;
declare function KinkyDungeonSetDress(Dress: string, Outfit?: string, Character?: Character, NoRestraints?: boolean): void;
declare let KDNaked: boolean;
declare let KDRefresh: boolean;
declare let KDLastForceRefresh: number;
declare let KDLastForceRefreshInterval: number;
declare function KinkyDungeonDressPlayer(Character?: Character, NoRestraints?: boolean, Force?: boolean, npcRestraints?: Record<string, NPCRestraint>, customInventory?: item[], customPlayerTags?: Map<string, boolean>, customFaction?: string, noDressOutfit?: boolean, forceUseOutfit?: boolean): void;
declare let KDRefreshCharacter: Map<any, any>;
declare function KDInitProtectedGroups(C: Character): void;
declare function KinkyDungeonWearForcedClothes(C: Character, restraints?: item[], extraForceDress?: alwaysDressModel[], customFaction?: string, forceCustomFaction?: boolean): void;
declare function KDCharacterAppearanceSetColorForGroup(Player: Character, Color: ItemColor, Group: string): void;
declare function KinkyDungeonGetOutfit(Name: string): any;
declare function KDInventoryWear(Character: Character, AssetName: string, AssetGroup: string, _par?: string, color?: ItemColor, filters?: Record<string, LayerFilter>, Properties?: Record<string, LayerPropertiesType>, factionFilters?: Record<string, FactionFilterDef>): Item;
declare function KDCharacterNaked(Character: Character): void;
declare function KDCharacterAppearanceNaked(C: Character): void;
declare function KDApplyItem(C: Character, inv: item, tags: any, customFaction?: string, forceCustomFaction?: boolean): void;
declare function KinkyDungeonSendOutfitEvent(Event: string, data: any): void;
declare function KDGetRemovePoses(C: Character, PoseList: Record<string, boolean>): string[];
declare function KDGetExtraPoses(C: Character): string[];
declare function KDGetEntityFlags(C: Character): Map<string, number>;
declare function KDUpdateTempPoses(Character: Character): void;
declare function KDGetPalettes(C: Character, safe?: boolean, includeDefault?: boolean, defaultOverride?: Record<string, Record<string, LayerFilter>>): Record<string, Record<string, LayerFilter>>;
declare function GetPalette(C: Character, palette: string, safeChar?: boolean, safeMain?: boolean): Record<string, LayerFilter>;
declare function KDGetFactionFilters(faction: string): Record<string, LayerFilter>;
declare function KinkyDungeonHeadpatModal(): void;
declare let KDDefaultRestraintPaletteThreshold: number;
declare function KDGetRestraintsPalette(C: Character): string;
declare function KDGetPlayerPalette(C: Character): string;
declare let DefaultStyles: string[];
declare function KDGetMapData(coord: WorldCoord): KDMapDataType;
declare function KDCoordToPoint(coord: {
    mapX: number;
    mapY: number;
}): KDPoint;
declare function KDGetEntrancePoints(map: WorldCoord, includeShortcuts?: boolean, includeStart?: boolean, includeEnd?: boolean): Record<string, KDPoint>;
declare function KDGetEntrancesInRoom(map: WorldCoord, includePotential?: boolean, includeShortcuts?: boolean, includeStart?: boolean, includeEnd?: boolean): Record<string, boolean>;
declare let KDCustomExpTmp: Record<number, KDExpressionType>;
declare let KDCustomExp: Record<number, KDExpressionType>;
declare let KDExpressionPoses: string[];
declare let KDExpressions: Record<string, KDExpression>;
interface KDPersistentNPC {
    Name: string;
    id: number;
    entity: entity;
    trueEntity?: entity;
    mapX: number;
    mapY: number;
    room: string;
    captured: boolean;
    captureFaction?: string;
    captureCaptor?: number;
    collect: boolean;
    opinion: number;
    jailed?: boolean;
    special?: boolean;
    permanent?: boolean;
    alwaysEscape?: boolean;
    wanderAI?: string;
    spawnAI?: string;
    specialScript?: string;
    deactivated?: boolean;
    outfit?: string;
    hairstyle?: string;
    bodystyle?: string;
    facestyle?: string;
    cosplaystyle?: string;
    metadata?: KDOutfitMetadata;
    Palette?: string;
    storedParty?: entity[];
    persistentParty?: number[];
    partyLeader?: number;
    spawned?: boolean;
    fromType?: number;
    fromIndex?: string;
    nextWanderTick?: number;
    nextSpawnTick?: number;
    nextScriptTick?: number;
    data?: PersistentNPCData;
}
interface PersistentNPCData {
    wanderTarget?: WorldCoord;
    MaidKnightHeavyID?: number;
    MaidKnightLightID?: number;
}
declare function KDPersistentAddData(id: number, key: string, data: any): boolean;
declare function KDPersistentGetData(id: number, key: string): any;
interface WorldCoord {
    mapX: number;
    mapY: number;
    room: string;
}
declare function KDGetEnemyStoredParty(partyid: number): entity[];
declare function KDGetEnemyPersistentParty(partyid: number): entity[];
declare function KDGetEnemyStoredPartyIDs(partyid: number): number[];
declare function KDGetEnemyPersistentPartyIDs(partyid: number): number[];
declare function KDGetEnemyParty(partyid: number): entity[];
declare function KDGetEnemyPartyIDs(partyid: number): number[];
declare function KDNPCInParty(pmid: number, partyid: number): boolean;
declare function KDStoreEnemyPartyMember(enemy: entity, partyid: number, location?: WorldCoord): boolean;
declare function KDPopEnemyPartyMember(pmid: number, partyid: number, freeFromParty?: boolean): entity;
declare function KDDespawnParty(partyid: number, mapData: KDMapDataType): void;
declare function KDChangeParty(pmid: number, partyid: number): boolean;
declare function KDIsPartyLeaderCapturedOrGone(partyid: number): boolean;
declare function KDIsInEnemyParty(entity: entity): boolean;
declare function KDPurgeParty(partyid: number): void;
declare function KDPersistentWatch(): void;
declare function KDWatchMainPersistent(): void;
declare function KDMakePersistent(e: entity, custom: any, special?: boolean): void;
declare function KDPurgePartyGlobal(pid: number): void;
declare function KDGetPartyOnLevel(partyid: number, spawnedOnly: boolean): entity[];
declare function KDGetPartyAtCoord(partyid: number, spawnedOnly: boolean, coord: WorldCoord): entity[];
declare function KDMovePersistentNPC(id: number, coord: WorldCoord): boolean;
declare function coordHash(coord: WorldCoord): string;
declare let KDPersistentNPCs: {
    [_: string]: KDPersistentNPC;
};
declare let KDDeletedIDs: {
    [_: string]: number;
};
declare function KDGetPersistentNPCCache(coord: WorldCoord): number[];
declare function KDGetPersistentNPCInlevel(coord: WorldCoord): number[];
declare function KDUpdatePersistentNPC(id: number, force?: boolean): void;
declare function KDRefreshPersistentNPC(id: number): void;
declare function KDGetGlobalEntity(id: number): entity;
declare function KDIsNPCPersistent(id: number): boolean;
declare function KDGetPersistentNPC(id: number, entity?: entity, force?: boolean, location?: WorldCoord, special?: boolean): KDPersistentNPC;
declare function KDGetCurrentLocation(): WorldCoord;
declare function KDGetNPCLocation(id: number): WorldCoord;
declare function KDCompareLocation(loc1: WorldCoord, loc2: WorldCoord): boolean;
declare function KDCheckBrokenDespawned(): void;
declare function KDRepopulatePersistentNPCs(): void;
declare function KDSpawnPersistentNPCs(coord: WorldCoord, searchEntities: boolean): number[];
declare function KDRunPersistentNPCScripts(coord: WorldCoord, searchEntities: boolean): number[];
declare function KDWanderPersistentNPCs(coord: WorldCoord, searchEntities: boolean): number[];
declare function IsPNPCActive(npc: KDPersistentNPC): boolean;
declare function KDGetCapturedPersistent(Level: number, RoomType: string, MapMod: string, faction: string, sameLocation?: boolean): KDPersistentNPC[];
declare function KDSetSpawnAndWanderAI(npc: KDPersistentNPC, customSpawnAI: string, customWanderAI: string): void;
declare function KDSetSpecialScript(npc: KDPersistentNPC, specialScript: string): void;
declare function KDNPCCanWander(id: number): boolean;
declare function KDGetSideroomWanderTags(slot: KDWorldSlot): Record<string, Record<string, number>>;
declare function KDGetLairWanderTags(roomFilter: string, slot: KDWorldSlot): Record<string, Record<string, number>>;
declare function KDGetWeightedAvgWithTags(tags: Record<string, number>, rooms: Record<string, Record<string, number>>): Record<string, number>;
declare function KDGetPersistentWanderWeightsForRoom(AITags: Record<string, number>, coord: WorldCoord, includeMain?: boolean): Record<string, number>;
interface PersistentSpawnAI {
    cooldown: number;
    filter: (id: number, mapData: KDMapDataType) => boolean;
    chance: (id: number, mapData: KDMapDataType) => number;
    doSpawn: (id: number, mapData: KDMapDataType, entity?: entity) => boolean;
}
declare let KDPersistentSpawnAIList: Record<string, PersistentSpawnAI>;
declare function KDNPCHealPercent(entity: entity): number;
interface PersistentWanderAI {
    cooldown: number;
    filter: (id: number, mapData: KDMapDataType) => boolean;
    chance: (id: number, mapData: KDMapDataType) => number;
    doWander: (id: number, mapData: KDMapDataType, entity: entity) => boolean;
}
declare let KDPersistentWanderAIList: Record<string, PersistentWanderAI>;
declare function KDStandardWander(id: number, mapData: KDMapDataType, entity: entity, AITagFunc: () => Record<string, number>): boolean;
declare function KDStandardLairWander(id: number, mapData: KDMapDataType, entity: entity, modeAlternate: boolean, duration: number, AITagFunc: () => Record<string, number>): boolean;
declare function KDStandardTargetedWander(id: number, mapData: KDMapDataType, entity: entity, modeAlternate: boolean, target: WorldCoord, AITagFunc: () => Record<string, number>): boolean;
interface PersistentNPCScript {
    cooldown: number;
    filter: (id: number, mapData: KDMapDataType) => boolean;
    chance: (id: number, mapData: KDMapDataType) => number;
    doScript: (id: number, mapData: KDMapDataType, entity: entity) => boolean;
}
declare let KDPersistentScriptList: Record<string, PersistentNPCScript>;
declare let KDLatexDmg: number;
declare let KDLatexBind: number;
declare let KDBubbleDmg: number;
declare let KDEffectTiles: Record<string, effectTile>;
declare let KinkyDungeonOutfitsBase: outfit[];
declare let KinkyDungeonDresses: Record<string, KinkyDungeonDress>;
interface ItemEffect {
    name: string;
    range?: number;
    components: string[];
    onUse: (item: item, quantity: number, user: entity, target: entity, tx: number, ty: number) => ItemEffectResult;
    onMiscast: (result: ItemEffectResult, item: item, quantity: number, user: entity, target: entity, tx: number, ty: number) => ItemEffectResult;
    onFailure: (result: ItemEffectResult, item: item, quantity: number, user: entity, target: entity, tx: number, ty: number) => ItemEffectResult;
    canAttempt: (item: item, quantity: number, user: entity, target: entity, tx: number, ty: number) => boolean;
    onAttempt: (item: item, quantity: number, user: entity, target: entity, tx: number, ty: number) => ItemAttemptResult;
    delayedTags?: string[];
}
interface ItemEffectResult {
    success: boolean;
    componentfailure: string;
    miscast: boolean;
    affected: entity[];
    consumed: number;
    time: number;
}
interface ItemAttemptResult {
    success: boolean;
    componentfailure: string;
    failureChance: number;
    miscastChance: number;
    miscast: boolean;
    time: number;
    delayed?: boolean;
    quantity: number;
}
declare function KDConsumable(item: Named): consumable;
declare function KinkyDungeonFindConsumable(Name: string): consumable;
declare function KinkyDungeonFindBasic(Name: string): any;
declare function KinkyDungeonFindConsumableOrBasic(Name: string): consumable | any;
declare function KinkyDungeonGetInventoryItem(Name: string, Filter?: string): itemPreviewEntry;
declare function KinkyDungeonConsumableCount(Name: string): number;
declare function KinkyDungeonItemCount(Name: string): number;
declare function KinkyDungeonGetShopItem(_Level: number, Rarity: number, _Shop: boolean, ShopItems: any[], uniqueTags?: Record<string, boolean>): any;
interface KDChangeConsumableData {
    src: string;
    type: string;
    trig: string;
    item: item;
    consumable: consumable;
    Quantity: number;
    container?: KDContainer;
    cancel: boolean;
}
declare function KDChangeConsumable(src: string, type: string, trig: string, consumable: consumable, Quantity: number, container?: KDContainer): boolean;
declare function KinkyDungeonChangeConsumable(consumable: consumable, Quantity: number, container?: KDContainer): boolean;
declare function KDAddConsumable(name: string, Quantity: number, container?: KDContainer): boolean;
declare function KinkyDungeonConsumableEffect(Consumable: consumable, type: string, inv: item): void;
declare function KinkyDungeonConsumableEffectNPC(Consumable: consumable, entity: entity, type: string, inv: item): void;
declare function KinkyDungeonPotionCollar(): boolean;
declare function KinkyDungeonCanDrink(byEnemy?: boolean, strict?: boolean): boolean;
declare function KinkyDungeonAttemptConsumable(Name: any, Quantity: number, target?: entity, tx?: number, ty?: number): boolean;
declare function KinkyDungeonUseConsumable(Name: string, Quantity: number): boolean;
declare function KDGetCheapestLatexSolvent(tag?: string): string;
declare let KDItemEffects: Record<string, ItemEffect>;
declare function KDGetGagMult(Consumable: consumable, entity: entity, msg: boolean): {
    gagFloor: number;
    gagMult: number;
};
declare function KDTargetConsumable(inv: item, Quantity: number, itemEffect?: string): ItemEffectResult;
declare function KDStandardConsumableHandsCheck(item: item, Quantity: number): boolean;
interface KDInventoryMaxData {
    item: item;
    max: number;
    bonus: number;
    mult: number;
    entity: entity;
}
declare function KDGetItemBaseMax(item: item): number;
declare function KDMaxInventoryStorage(item: item, entity: entity): number;
declare function KDIsFood(item: item): boolean;
declare let KDMaxRarity: number;
declare let KinkyDungeonConsumables: Record<string, consumable>;
declare let KDCookies: Record<string, consumable>;
declare let KDRechargeCost: number;
declare let KDSellCriteria: Record<string, (seller: entity) => boolean>;
declare let KinkyDungneonBasic: {
    Key: {
        name: string;
        rarity: number;
        shop: boolean;
    };
    Keyring: {
        name: string;
        rarity: number;
        shop: boolean;
    };
    RedKey: {
        name: string;
        rarity: number;
        shop: boolean;
    };
    BlueKey: {
        name: string;
        rarity: number;
        costMod: number;
        shop: boolean;
    };
    "3Bola": {
        name: string;
        consumable: string;
        quantity: number;
        rarity: number;
        shop: boolean;
    };
    "3Bomb": {
        name: string;
        consumable: string;
        quantity: number;
        rarity: number;
        shop: boolean;
    };
    "2Dynamite": {
        name: string;
        consumable: string;
        quantity: number;
        rarity: number;
        shop: boolean;
    };
    "2C4": {
        name: string;
        consumable: string;
        quantity: number;
        rarity: number;
        shop: boolean;
    };
    "3Flash": {
        name: string;
        consumable: string;
        quantity: number;
        rarity: number;
        shop: boolean;
    };
    "3Flashbang": {
        name: string;
        consumable: string;
        quantity: number;
        rarity: number;
        shop: boolean;
    };
    "3Smoke": {
        name: string;
        consumable: string;
        quantity: number;
        rarity: number;
        shop: boolean;
    };
    MaidUniform: {
        name: string;
        outfit: string;
        rarity: number;
        shop: boolean;
        ignoreInventory: string;
        uniqueTags: string[];
    };
    Bast: {
        name: string;
        outfit: string;
        rarity: number;
        shop: boolean;
        ignoreInventory: string;
        uniqueTags: string[];
    };
    Bountyhunter: {
        name: string;
        outfit: string;
        rarity: number;
        shop: boolean;
        ignoreInventory: string;
        uniqueTags: string[];
    };
    Dragon: {
        name: string;
        outfit: string;
        rarity: number;
        shop: boolean;
        ignoreInventory: string;
        uniqueTags: string[];
    };
    BlueSuit: {
        name: string;
        outfit: string;
        rarity: number;
        shop: boolean;
        ignoreInventory: string;
        uniqueTags: string[];
    };
    Elven: {
        name: string;
        outfit: string;
        rarity: number;
        shop: boolean;
        ignoreInventory: string;
        uniqueTags: string[];
    };
    ElementalDress: {
        name: string;
        outfit: string;
        rarity: number;
        shop: boolean;
        ignoreInventory: string;
        uniqueTags: string[];
    };
};
declare let KinkyDungneonShopRestraints: {
    SlimeWalkers: {
        name: string;
        rarity: number;
        shop: boolean;
    };
    SarielPanties: {
        name: string;
        rarity: number;
        shop: boolean;
    };
    ElvenPanties: {
        name: string;
        rarity: number;
        shop: boolean;
    };
    DivineBelt: {
        name: string;
        rarity: number;
        shop: boolean;
        uniqueTags: string[];
    };
    DivineBelt2: {
        name: string;
        rarity: number;
        shop: boolean;
        uniqueTags: string[];
    };
    DivineBra: {
        name: string;
        rarity: number;
        shop: boolean;
        uniqueTags: string[];
    };
    DivineBra2: {
        name: string;
        rarity: number;
        shop: boolean;
        uniqueTags: string[];
    };
    DusterGag: {
        name: string;
        rarity: number;
        shop: boolean;
    };
    GasMask: {
        name: string;
        rarity: number;
        shop: boolean;
    };
    PotionCollar: {
        name: string;
        rarity: number;
        shop: boolean;
    };
    Sunglasses: {
        name: string;
        rarity: number;
        shop: boolean;
        uniqueTags: string[];
    };
    Sunglasses2: {
        name: string;
        rarity: number;
        shop: boolean;
        uniqueTags: string[];
    };
};
declare let KDConsumableEffects: Record<string, (Consumable: consumable, entity: entity, inv: item) => void>;
declare let KDConsumablePrereq: Record<string, (item: item, Quantity: number) => boolean>;
declare let KDBasicPotionFields: {
    onMiscast: (result: ItemEffectResult, inv: item, quantity: number, user: entity, target: entity, tx: number, ty: number) => ItemEffectResult;
    onFailure: (result: ItemEffectResult, inv: item, quantity: number, user: entity, target: entity, tx: number, ty: number) => ItemEffectResult;
    canAttempt: (inv: item, quantity: number, user: entity, target: entity, tx: number, ty: number) => boolean;
    onAttempt: (inv: item, quantity: number, user: entity, target: entity, tx: number, ty: number) => ItemAttemptResult;
};
interface PotionEffect {
    playerEffect: (inv: item, quantity: number, user: entity, target: entity, tx: number, ty: number) => ItemEffectResult;
    entityEffect: (inv: item, quantity: number, user: entity, target: entity, tx: number, ty: number) => ItemEffectResult;
    tileEffect: (inv: item, quantity: number, user: entity, target: entity, tx: number, ty: number) => ItemEffectResult;
}
declare function KDGetPotionRange(item: item, itemEffect: string): number;
declare function KDPotionOnUse(itemEffect: string, inv: item, quantity: number, user: entity, target: entity, tx: number, ty: number, playerEffect: (inv: item, quantity: number, user: entity, target: entity, tx: number, ty: number) => ItemEffectResult, entityEffect: (inv: item, quantity: number, user: entity, target: entity, tx: number, ty: number) => ItemEffectResult, tileEffect: (inv: item, quantity: number, user: entity, target: entity, tx: number, ty: number) => ItemEffectResult): ItemEffectResult;
declare function KDCanAttemptPotion(inv: item, quantity: number, user: entity, target: entity, tx: number, ty: number): boolean;
declare function KDAttemptPotion(inv: item, quantity: number, user: entity, target: entity, tx: number, ty: number): ItemAttemptResult;
declare let KDPotionTypes: Record<string, PotionEffect>;
declare let KDPotionActions: Record<string, ItemEffect>;
declare let KDAlternateInventoryScreens: {
    [_: string]: (selected: KDFilteredInventoryItem, xOffset: number, yOffset: number, prefix: string) => boolean;
};
declare let KDCurrentAlternateInventory: string;
declare function KDRenderAlternateInventory(selected: KDFilteredInventoryItem, xOffset: number, yOffset: number, prefix: string): boolean;
declare let KDPreventAccidentalClickTime: number;
declare let KDInventoryActionSpacing: number;
declare let KDInventoryActionPerRow: number;
declare let KinkyDungeonFilters: string[];
declare let KDInventoryActionsDefault: Record<string, (item: item) => string[]>;
declare let KDConfigHotbar: boolean;
declare let KDConfigRestraintColor: boolean;
declare let KDWeaponTags: {
    magic: boolean;
    light: boolean;
    bow: boolean;
    noHands: boolean;
    clumsy: boolean;
    offhand: boolean;
    shield: boolean;
    heavy: boolean;
    massive: boolean;
    illum: boolean;
    hypno: boolean;
};
declare let KDInvFilter: string;
declare let KDFilterTransform: {
    armor: string;
};
declare let KinkyDungeonRestraintVariants: Record<string, KDRestraintVariant>;
declare let KinkyDungeonWeaponVariants: Record<string, KDWeaponVariant>;
declare let KinkyDungeonConsumableVariants: Record<string, KDConsumableVariant>;
declare function KDGetRestraintVariant(item: item): KDRestraintVariant;
declare function KDGetConsumableVariant(item: item): KDConsumableVariant;
declare function KDGetWeaponVariant(item: item): KDWeaponVariant;
declare let KDInventoryUseIconConfig: Record<string, boolean>;
declare let KDFilterIndex: Record<string, number>;
declare let KDMaxFilters: number;
declare let KDFilterFilters: Record<string, Record<string, boolean>>;
declare let KDSpecialFilters: Record<string, Record<string, (item: item, handle: boolean) => boolean>>;
declare let KinkyDungeonCurrentFilter: string;
declare let KinkyDungeonCurrentPageInventory: number;
declare let KinkyDungeonShowInventory: boolean;
declare let KinkyDungeonInventoryOffset: number;
declare let KinkyDungeonContainerOffset: number;
declare let KDConfirmOverInventoryAction: boolean;
declare function KDCloseQuickInv(): void;
declare function KDRestraintSpecial(item: Named): boolean;
declare let KDWeaponSwitchPref: number;
declare function KDSwitchWeapon(weapon?: string, pref?: number, container?: KDContainer): void;
declare function KinkyDungeonHandleInventory(): boolean;
declare function KinkyDungeonInventoryAddWeapon(Name: string, container?: KDContainer): void;
declare function KinkyDungeonInventoryAddLoose(Name: string, UnlockCurse?: string, faction?: string, quantity?: number, container?: KDContainer): void;
declare function KinkyDungeonInventoryAddOutfit(Name: string, container?: KDContainer): void;
declare function KDInvAddWeapon(container: KDContainer | null, Name: string): void;
declare function KDInvAddLoose(container: KDContainer | null, Name: string, UnlockCurse?: string, faction?: string, quantity?: number): void;
declare function KDInventoryType(item: item): string;
declare function KinkyDungeonFullInventory(): any[];
declare function KinkyDungeonFullLooseInventory(): any[];
declare function KinkyDungeonFullLooseInventoryKeepOutfit(): any[];
declare function KinkyDungeonInventoryLength(): number;
declare function KinkyDungeonInventoryAdd(item: item, container?: KDContainer): void;
declare function KDInvAdd(container: KDContainer | null, item: item): void;
declare function KinkyDungeonInventoryRemove(item: item, container?: KDContainer): void;
declare function KinkyDungeonInventoryRemoveSafe(item: item, container?: KDContainer): void;
declare function KinkyDungeonInventoryGet(Name: string, container?: KDContainer): item | null;
declare function KinkyDungeonInventoryGetSafe(Name: string, container?: KDContainer): item | null;
declare function KinkyDungeonInventoryGetLoose(Name: string, container?: KDContainer): item | null;
declare function KinkyDungeonInventoryGetWorn(Name: string): item | null;
declare function KinkyDungeonInventoryGetConsumable(Name: string, container?: KDContainer): item | null;
declare function KinkyDungeonInventoryGetWeapon(Name: string, container?: KDContainer): item | null;
declare function KinkyDungeonInventoryGetOutfit(Name: string, container?: KDContainer): item | null;
declare function KinkyDungeonAllRestraint(): item[];
declare function KDAllInventorySafe(): item[];
declare function KinkyDungeonAllRestraintDynamic(): {
    item: item;
    host: item;
}[];
declare function KDAllRestraintDynamicList(): item[];
declare function KinkyDungeonAllLooseRestraint(): item[];
declare function KinkyDungeonAllConsumable(): item[];
declare function KinkyDungeonAllOutfit(): item[];
declare function KinkyDungeonAllWeapon(): item[];
type itemPreviewEntry = {
    name: string;
    item: item;
    preview: string;
    preview2?: string;
    previewcolor?: string;
    previewcolorbg?: string;
    key?: string;
};
declare function KDGetItemPreview(item: item): itemPreviewEntry;
declare function KDGetGroupPreviewImage(Group: string): string;
declare function KDGetRestraintPreviewImage(restraint: restraint): string;
declare function KinkyDungeonFilterInventory(Filter: string, enchanted?: boolean, ignoreHidden?: boolean, ignoreFilters?: boolean, click?: string, namefilter?: string, overrideInventory?: Record<string, item>, ignoreFilterList?: string[], ignoreAutoFilter?: boolean): itemPreviewEntry[];
declare function KDInventoryItemHover(item: any): {
    type: string;
    item: any;
    name: string;
    TitleTextColor: string;
    TitleTextColorBack: string;
    ItemMods: any[];
};
declare function KinkyDungeonDrawInventorySelected(item: {
    name: any;
    item: item;
    preview: string;
    preview2?: string;
    key?: string;
}, noscroll?: boolean, _treatAsHover?: boolean, xOffset?: number, yOffset?: number): boolean;
declare let KDInventoryDrawContainerHotkeys: {
    Chest: {
        up: () => string;
        down: () => string;
        left: () => string;
        right: () => string;
    };
};
declare let KinkyDungeonCurrentPageContainer: number;
declare function KDDrawInventoryContainer(xOffset: number, yOffset: number, filteredInventory: KDFilteredInventoryItem[], filter: string, CurrentFilter: string, itemcallback?: (item: KDFilteredInventoryItem, x: number, y: number, w: number, h: number, different: boolean) => void, colorcallback?: (item: KDFilteredInventoryItem) => string, prefix?: string, nosearch?: boolean): {
    selected: KDFilteredInventoryItem;
    tooltipitem: KDFilteredInventoryItem;
};
declare function KDDrawInventoryFilters(xOffset: any, yOffset?: number, filters?: any[], addFilters?: any[], spacing?: number): void;
declare let KD_invactiontextwidth: number;
declare let KD_invactiontextanchorx_offset: number;
declare let KD_invactiontextanchory: number;
declare function KinkyDungeonDrawInventory(): void;
declare function KinkyDungeonSendInventoryEvent(Event: string, data: any): void;
declare function KDSendNPCRestraintEvent(Event: string, data: any): void;
declare function KinkyDungeonSendInventorySelectedEvent(Event: string, data: any): void;
declare function KinkyDungeonSendInventoryIconEvent(Event: string, data: any): void;
declare let KinkyDungeonInvDraw: any[];
declare function KinkyDungeonQuickGrid(I: number, Width: number, Height: number, Xcount: number): KDPoint;
declare let KDScrollOffset: {
    Consumable: number;
    Restraint: number;
    Weapon: number;
};
declare let KDItemsPerScreen: {
    Consumable: number;
    Restraint: number;
    Weapon: number;
};
declare let KDNumOfQuickLoadouts: number;
declare let KDQuickLoadoutSave: boolean;
declare let KDScrollAmount: number;
declare let KDInventoryStatus: {
    HideQuickInv: boolean;
    DropQuickInv: boolean;
    SortQuickInv: boolean;
    FilterQuickInv: boolean;
};
declare function KinkyDungeonDrawQuickInv(): void;
declare function KinkyDungeonhandleQuickInv(NoUse?: boolean): boolean;
declare function KDDropItemInv(name: string, player?: entity, playerDropped?: boolean): void;
declare function KDSortInventory(_player: entity): void;
declare function KDLoadQuickLoadout(num: number, clearFirst: boolean): void;
declare function KDSaveQuickLoadout(num: number): void;
declare function KDRemoveInventoryVariant(Name: string, _Prefix?: string): void;
declare function KDRemoveWeaponVariant(Name: string, _Prefix?: string): void;
declare function KDRemoveConsumableVariant(Name: string, _Prefix?: string): void;
declare function KDPruneInventoryVariants(worn?: boolean, loose?: boolean, lost?: boolean, ground?: boolean, hotbar?: boolean, entities?: boolean, npcrestraints?: boolean, containers?: boolean): void;
declare function KDMorphToInventoryVariant(item: item, variant: KDRestraintVariant, prefix?: string, curse?: string, forceMorph?: boolean): void;
declare function KDGiveWeaponVariant(variant: KDWeaponVariant, prefix?: string, forceName?: string, suffix?: string, container?: KDContainer): void;
declare function KDGiveConsumableVariant(variant: KDConsumableVariant, prefix?: string, forceName?: string, suffix?: string, Quantity?: number, container?: KDContainer): void;
declare function KDReturnInventoryVariant(variant: KDRestraintVariant, prefix?: string, curse?: string, ID?: string, forceName?: string, suffix?: string, faction?: string, powerBonus?: number, quantity?: number): item;
declare function KDGiveInventoryVariant(variant: KDRestraintVariant, prefix?: string, curse?: string, ID?: string, forceName?: string, suffix?: string, faction?: string, powerBonus?: number, quantity?: number, container?: KDContainer): void;
declare function KDGetInventoryVariant(variant: KDRestraintVariant, prefix?: string, curse?: string, ID?: string, forceName?: string, suffix?: string, faction?: string, powerBonus?: number, quantity?: number): item;
declare function KDEquipInventoryVariant(variant: KDRestraintVariant, prefix?: string, Tightness?: number, Bypass?: boolean, Lock?: string, Keep?: boolean, Trapped?: boolean, faction?: string, Deep?: boolean, curse?: string, securityEnemy?: entity, useAugmentedPower?: boolean, _inventoryAs?: string, ID?: string, suffix?: string, powerBonus?: number, NoActionPrune?: boolean, data?: any): number;
declare function KDItem(item: Named): weapon | restraint | outfit | consumable;
declare function KDItemNoRestraint(item: Named): weapon | outfit | consumable;
declare function KDGiveItem(name: string, quantity?: number): boolean;
declare function KDDrawHotbarBottom(selected: KDFilteredInventoryItem, spells: boolean, selectSpell: spell, xshift?: number, allowOverflow?: boolean): void;
declare function KinkyDungeonAttemptQuickRestraint(Name: string): boolean;
declare function KDIsUnidentified(item: item): boolean;
declare function KDIsUnidentifiedString(name: string): boolean;
declare function KDAlternateInventoryRender(): boolean;
declare function KDResetAlternateInventoryRender(): void;
declare function KDIsGeneric(item: item): boolean;
declare function KDCalculateGoldCost(data: any): any;
declare let KDLore: Record<string, Record<string, Lore>>;
declare let KinkyDungeonCurrentLore: string;
declare let KDLoreImg: Record<string, string>;
declare let KDLoreEnemy: Record<string, string>;
declare let KinkyDungeonCurrentLoreTab: string;
declare let KinkyDungeonCurrentLoreTabs: string[];
declare let KinkyDungeonCurrentLoreItems: string[];
declare let KinkyDungeonCurrentLoreItemOffset: number;
declare let KinkyDungeonCurrentLoreTabOffset: number;
declare let KinkyDungeonLoreScale: number;
declare let KinkyDungeonRepeatLoreChance: number;
declare let KinkyDungeonGenericLoreChance: number;
declare let KinkyDungeonNewLoreList: string[];
declare function KinkyDungeonNewLore(): boolean;
declare function KinkyDungeonUpdateTabs(exploredLore: Record<string, number>): void;
declare function KinkyDungeonDrawLore(): void;
declare function KDDrawLoreRepTabs(xOffset?: number): void;
declare let KDInvBG: string;
declare function KDDrawInventoryTabs(xOffset: number, drawBG?: boolean): void;
declare let KDProgressEnabled: boolean;
declare function KinkyDungeonUpdateLore(exploredLore: Record<string, number>): void;
declare function KinkyDungeonHandleLore(): boolean;
declare function KDNewLore(tabs: string | string[], id: string, label: string, title: string, text: string, condition?: () => boolean, image?: string, noShow?: string[], enemy?: string): void;
declare const KDANGER = -19;
declare const KDRAGE = -31;
declare const KDPLEASED = 15;
declare const KDFRIENDLY = 35;
declare let KDStatRep: string[];
declare let KDRepColor: {
    Passion: string;
    Frustration: string;
};
declare let KDRepNameColor: {
    Leather: string;
    Latex: string;
    Rope: string;
    Metal: string;
    Will: string;
    Elements: string;
    Conjure: string;
    Illusion: string;
};
declare let KDFactionGoddess: {
    Metal: {
        Angel: number;
        Demon: number;
        Nevermere: number;
        AncientRobot: number;
        Elemental: number;
    };
    Rope: {
        Angel: number;
        Demon: number;
        KinkyConstruct: number;
        Dressmaker: number;
        Bountyhunter: number;
        Bast: number;
        AncientRobot: number;
    };
    Elements: {
        Angel: number;
        Demon: number;
        Witch: number;
        Apprentice: number;
        Elemental: number;
        AncientRobot: number;
    };
    Leather: {
        Angel: number;
        Demon: number;
        Elf: number;
        Dragon: number;
        Bandit: number;
        Elemental: number;
        AncientRobot: number;
    };
    Latex: {
        Angel: number;
        Demon: number;
        Maidforce: number;
        Alchemist: number;
        Nevermere: number;
        AncientRobot: number;
    };
    Will: {
        Angel: number;
        Demon: number;
        Elf: number;
        Bast: number;
        Apprentice: number;
        AncientRobot: number;
    };
    Conjure: {
        Angel: number;
        Demon: number;
        Alchemist: number;
        Witch: number;
        Apprentice: number;
        Dressmaker: number;
        AncientRobot: number;
    };
    Illusion: {
        Angel: number;
        Demon: number;
        Witch: number;
        Apprentice: number;
        Maidforce: number;
        Bountyhunter: number;
        AncientRobot: number;
    };
};
declare let KinkyDungeonGoddessRep: Record<string, number>;
declare let KinkyDungeonRescued: Record<string, boolean>;
declare let KinkyDungeonAid: Record<string, boolean>;
declare let KDRepSelectionMode: string;
declare let KDBlessedRewards: Record<string, string[]>;
declare function KDPearlRequirement(): boolean;
declare function KDGetBlessings(): string[];
declare function KinkyDungeonInitReputation(): void;
declare function KinkyDungeonRepName(Amount: number): string;
declare function KDBarColor(value: number): string;
declare let KDREPALLIED: number;
declare let KDREPFRIENDLY: number;
declare let KDREPFAVORABLE: number;
declare let KDREPANNOYED: number;
declare let KDREPHOSTILE: number;
declare let KDREPWANTED: number;
declare function KinkyDungeonRepNameFaction(Amount: number): string;
declare function KDRepBarColor(value: number): string;
declare function KinkyDungeonChangeFactionRep(Rep: string, Amount: number): boolean;
declare function KinkyDungeonChangeRep(Rep: string, Amount: number): boolean;
declare function KinkyDungeonHandleReputation(): boolean;
declare function KinkyDungeonDrawReputation(): void;
declare let KDFactionRepIndex: number;
declare let KDMaxFactionsPerBar: number;
declare function KinkyDungeonDrawFactionRep(): string;
declare let KinkyDungeonPenanceCosts: Record<string, number>;
declare let KinkyDungeonPenanceRepBonus: number;
declare let KinkyDungeonPenanceRepBonusFail: number;
declare let KinkyDungeonPenanceCostGrowth: number;
declare let KinkyDungeonPenanceCostDefault: number;
declare function KinkyDungeonPenanceCost(rep: string): number;
declare function KinkyDungeonCanPenance(_rep: string, value: number): boolean;
declare function KinkyDungeonAidManaCost(_rep: string, value: number): number;
declare function KinkyDungeonAidManaAmount(_rep: string, _value: number): number;
declare function KinkyDungeonCanAidMana(_rep: string, value: number): boolean;
declare function KinkyDungeonRescueTiles(): {
    x: number;
    y: number;
}[];
declare function KinkyDungeonCanRescue(rep: string, value: number): boolean;
declare function KinkyDungeonUpdateAngel(_delta: number): void;
declare let KDTrapTypes: Record<string, KDTrapType>;
declare let KDTrapTypesStepOff: {
    DoorLock: (tile: any, entity: entity, x: number, y: number) => {
        msg: string;
        triggered: boolean;
    };
};
declare let KinkyDungeonTrapMoved: boolean;
declare function KinkyDungeonHandleStepOffTraps(entity: entity, x: number, y: number, moveX: number, moveY: number): void;
declare function KinkyDungeonHandleTraps(entity: entity, x: number, y: number, Moved: boolean): void;
declare function KDTrigPanic(chest?: boolean): void;
type TrapTypeGoddess = {
    Name: string;
    Enemy?: string;
    Spell?: string;
    Level: number;
    Power: number;
    Weight: number;
    strict?: true;
    teleportTime?: number;
};
declare function KinkyDungeonGetGoddessTrapTypes(): TrapTypeGoddess[];
declare function KinkyDungeonGetTrap(trapTypes: any[], Level: number, tags: string[]): {
    StepOffTrap: any;
    Name: any;
    Restraint: any;
    Enemy: any;
    FilterTag: any;
    FilterBackup: any;
    Spell: any;
    Power: any;
    extraTag: any;
    Hostile: any;
    Faction: any;
};
declare function KDSmokePuff(x: number, y: number, radius: number, density: number, nomsg?: boolean): void;
declare function KDSteamPuff(x: number, y: number, radius: number, density: number, nomsg?: boolean): void;
declare let KDCancelEvents: {
    JourneyChoice: (_x: any, _y: any, _tile: any, data: any) => string;
};
declare let KDCancelFilters: {
    JourneyChoice: (_x: any, _y: any, _tile: any, data: any) => "" | "JourneyChoice";
    ProtectOldSaves: (_x: any, _y: any, _tile: any, data: any) => "" | "NoJourneyTarget";
};
declare function KDWettable(entity: entity): boolean;
declare function KDConducting(entity: entity): boolean;
declare function KinkyDungeonHandleTilesEnemy(enemy: entity, _delta: number): void;
declare function KDPeripheralTileEffects(_delta: number): void;
declare function KinkyDungeonUpdateTileEffects(delta: number): void;
declare let KinkyDungeonChestConfirm: boolean;
declare function KinkyDungeonHandleMoveToTile(toTile: string): void;
declare function KDCanEscape(method: string): boolean;
declare function KDGetEscapeMinimapText(method: string): string;
declare function KDGetEscapeDoorText(method: string): string;
declare function KDGetEscapeMethod(_level: number): string;
declare function KDGetRandomEscapeMethod(RoomType: string, MapMod: string, Level: number, Faction: string): string;
declare function KDEffectTileTags(x: number, y: number, mapData?: KDMapDataType): Record<string, boolean>;
declare function KDEffectTileTagsLoc(loc: string, mapData?: KDMapDataType): Record<string, boolean>;
declare let KinkyDungeonConfirmStairs: boolean;
declare function KinkyDungeonHandleMoveObject(moveX: number, moveY: number, moveObject: string): boolean;
declare function KDHasEffectTile(x: number, y: number): boolean;
declare function KDGetEffectTiles(x: number, y: number, mapData?: KDMapDataType): Record<string, effectTile>;
declare function KDGetEffectTilesLoc(str: string, mapData?: KDMapDataType): Record<string, effectTile>;
declare function KDGetSpecificEffectTile(x: number, y: number, tile?: string): effectTile;
declare function KDCreateEffectTile(x: number, y: number, tile: effectTileRef, durationMod: number): effectTile;
declare function KDInteractNewTile(newTile: effectTile): void;
declare function KDCreateAoEEffectTiles(x: number, y: number, tile: effectTileRef, durationMod?: number, rad?: number, avoidPoint?: {
    x: number;
    y: number;
}, density?: number, mod?: string): void;
declare function KDRemoveAoEEffectTiles(x: number, y: number, tagsToRemove: string[], rad: number, avoidPoint?: {
    x: number;
    y: number;
}, density?: number, mod?: string): void;
declare function KDApplyAlpha(id: string, alpha: number, fade: string, delta: number): number;
declare let KDTileModes: Record<string, boolean>;
declare function KDEasePosition(x: number, y: number, tx: number, ty: number, speed: number, delta: number, ease: string): KDPoint;
declare let KDLastEffTileUpdate: number;
declare function KDDrawEffectTiles(_canvasOffsetX: number, _canvasOffsetY: number, CamX: number, CamY: number): void;
declare let TileYFade: Record<string, number>;
declare function KDCanSeeEffectTile(tile: effectTile): boolean;
declare function KDUpdateEffectTiles(delta: number): void;
declare function KinkyDungeonUpdateSingleEffectTile(delta: number, entity: entity, tile: effectTile): void;
declare function KinkyDungeonUpdateSingleEffectTileStandalone(delta: number, tile: effectTile): void;
declare function KinkyDungeonBulletInteractionSingleEffectTile(b: any, tile: effectTile, d: number): void;
declare function KDEffectTileInteractions(x: number, y: number, b: any, d: number): void;
declare function KDMoveEntity(enemy: entity, x: number, y: number, willing: boolean, dash?: boolean, forceHitBullets?: boolean, ignoreBlocked?: boolean, noEvent?: boolean, mapData?: KDMapDataType): boolean;
declare function KDStaggerEnemy(enemy: entity): void;
declare function KDMovePlayer(moveX: number, moveY: number, willing: boolean, sprint?: boolean, forceHitBullets?: boolean, suppressNoise?: boolean, noEvent?: boolean): boolean;
declare function KDSlip(dir: {
    x: number;
    y: number;
}): boolean;
declare function KDInferno(existingTile: effectTile, newTile: effectTile, duration: number): boolean;
declare function KDGrow(tile: effectTile, type: string, duration?: number, chance?: number, refreshDuration?: number): boolean;
declare function KDIgnition(b: any, tile: effectTile, _d: any): void;
declare function KDConveyor(_delta: number, X: number, Y: number, unwilling?: boolean): void;
declare function KDTickSpecialStats(): void;
declare function KDAdvanceLevel(data: any, closeConnections?: boolean, query?: boolean): {
    x: number;
    y: number;
};
interface KDAdvanceEventData {
    toTile: string;
    altRoom: AltType;
    altRoomNext: AltType;
    AdvanceAmount: number;
    dataOverride: object;
}
declare let KDAdvanceAmount: Record<string, (altRoom: AltType, altRoomNext: AltType, tile: any) => {
    AdvanceAmount: number;
    dataOverride: object;
}>;
type KDTileType = any;
declare function KDShouldLock(x: number, y: number, tile: KDTileType): boolean;
declare function KDShouldUnLock(x: number, y: number, tile: KDTileType): boolean;
declare let KDDangerousTiles: string;
declare function KDIsTileDangerous(entity: entity, x: number, y: number, mapData: KDMapDataType): boolean;
declare let KDPotentialDangers: Record<string, (entity: entity, x: number, y: number, mapData: KDMapDataType, tags: Record<string, boolean>) => boolean>;
declare function KDAdvanceOneFloor(): void;
declare function KDRoomUnwanderable(altType: string): boolean;
declare let KDStairsAltAction: {
    RandomTeleport: (_toTile: any, _suppressCheckPoint: any) => void;
    Null: (_toTile: any, _suppressCheckPoint: any) => void;
};
declare function KDGoThruTile(x: number, y: number, suppressCheckPoint: boolean, force: boolean, willing: boolean, forceInstant?: boolean): void;
declare function KDPostStairSave(): void;
declare function KinkyDungeonHandleStairs(toTile: string, suppressCheckPoint?: boolean): void;
declare let KDHandsfreeChestTypes: string[];
declare let KDCornerTiles: {
    A: boolean;
    a: boolean;
    c: boolean;
    o: boolean;
    O: boolean;
    '-': boolean;
    '=': boolean;
    '+': boolean;
    B: boolean;
    M: boolean;
    m: boolean;
    F: boolean;
};
declare let KDTileUpdateFunctionsLocal: Record<string, (delta: number, X?: number, Y?: number) => void>;
declare let KDBondageMachineFunctions: Record<string, KDBondageMachineFunc>;
declare function KDBasicRestraintsMachine_Player(tags: string[], count: number, msg: string): number;
declare let KDTileUpdateFunctions: Record<string, (delta: number) => boolean>;
declare let KDMoveObjectFunctions: Record<string, (moveX: number, moveY: number) => boolean>;
declare let KDEffectTileFunctionsStandalone: Record<string, (delta: any, tile: effectTile) => boolean>;
declare function KDSlimeImmuneEntity(entity: entity): boolean;
declare function KDSoapImmuneEntity(entity: entity): boolean;
declare function KDSlimeWalker(entity: entity): boolean;
declare function KDSoapWalker(entity: entity): boolean;
declare function KDSlimeImmune(enemy: entity): boolean;
declare function KDSoapImmune(enemy: entity): boolean;
declare let KDEffectTileFunctions: Record<string, (delta: number, entity: entity, tile: effectTile) => boolean>;
declare let KDEffectTileCreateFunctionsCreator: Record<string, (newTile: effectTile, existingTile: effectTile) => boolean>;
declare let KDActivateMapTile: Record<string, (tile: any, x: number, y: number) => boolean>;
declare let KDEffectTileCreateFunctionsExisting: Record<string, (newTile: effectTile, existingTile: effectTile) => boolean>;
declare let KDEffectTileMoveOnFunctions: Record<string, (entity: entity, tile: effectTile, willing: boolean, dir: {
    x: number;
    y: number;
}, sprint: boolean) => {
    cancelmove: boolean;
    returnvalue: boolean;
}>;
declare let KDEffectTileBulletFunctions: Record<string, (b: any, tile: effectTile, d: any) => boolean>;
declare function KDAttemptDoor(moveX: number, moveY: number): void;
declare function KDShrineEffectRadius(entity: entity, player?: entity): number;
declare let KDAltarUpdateFunction: {
    Will: (x: any, y: any, tile: any, delta: any) => void;
};
interface KDPointCostSource extends KDPoint {
    g: number;
    f: number;
    s: string;
}
declare let KDPathCache: Map<string, KDPoint[]>;
declare let KDPathCacheIgnoreLocks: Map<string, KDPoint[]>;
declare let KDSmartMovable: Map<any, any>;
declare let KDMovable: Map<any, any>;
declare function KDUpdateDoorNavMap(): void;
declare function KDIsMovable(x: number, y: number): boolean;
declare function KDIsSmartMovable(x: number, y: number): boolean;
declare let KDPathfindingCacheHits: number;
declare let KDPathfindingCacheFails: number;
declare let KDPFTrim: number;
declare function KinkyDungeonFindPath(startx: number, starty: number, endx: number, endy: number, blockEnemy: boolean, blockPlayer: boolean, ignoreLocks: boolean, Tiles: string, RequireLight?: boolean, noDoors?: boolean, needDoorMemory?: boolean, Enemy?: entity, trimLongDistance?: boolean, heuristicOverride?: (x: number, y: number, xx: number, yy: number) => number, taxicab?: boolean, ignoreTrafficLaws?: boolean, allowPassable?: boolean, ignoreAllWeighting?: boolean, Leashtarget?: number): KDPoint[];
declare function KinkyDungeonGetPath(closed: Map<string, KDPointCostSource>, xx: number, yy: number, endx?: number, endy?: number): KDPoint[];
declare function KDSetPathfindCache(PathMap: Map<string, KDPoint[]>, newPath: KDPoint[], endx: number, endy: number, Tiles: string, Finalindex: string): void;
declare function KDUpdateBuffsOnLoad(): void;
declare function KinkyDungeonSendBuffEvent(event: string, data: any): void;
declare function KinkyDungeonTickBuffs(entity: entity, delta: number, endFloor: boolean): void;
declare function KinkyDungeonTickBuffTag(entity: entity, tag: string, amout?: number): void;
declare function KDEntityHasBuffTags(entity: entity, tag: string): boolean;
declare function KDGetBuffsWithTag(entity: entity, tag: string): Record<string, KDBuff>;
declare function KinkyDungeonRemoveBuffsWithTag(entity: entity, tags: string[]): void;
declare function KinkyDungeonUpdateBuffs(delta: number, endFloor: boolean): void;
declare function KDUpdatePlayerShield(PlayerBuffs?: Record<string, KDBuff>): void;
declare function KDDamagePlayerShield(Amount: number, Player: entity): void;
declare function KDBuffEnabled(list: Record<string, KDBuff>, buff: KDBuff, onlyPositiveDuration: boolean): boolean;
declare let KDBuffedStatTypeMemo: Map<Record<string, KDBuff>, Record<string, KDBuff[]>>;
declare let KDBuffedStatTypeMemoUpdate: Map<Record<string, KDBuff>, string[]>;
declare function KDUpdateBuffedStatTypeMemo(list: Record<string, KDBuff>): void;
declare function KinkyDungeonGetBuffedStat(list: Record<string, KDBuff>, Stat: string, onlyPositiveDuration?: boolean): number;
declare function KinkyDungeonGetMaxBuffedStat(list: Record<string, KDBuff>, Stat: string, onlyPositiveDuration: boolean): number;
declare function KinkyDungeonExpireBuff(entity: entity, key: string): void;
declare function KDUpdateBuffStatMemo(list: Record<string, KDBuff>, stat: string): void;
declare function KinkyDungeonApplyBuffToEntity(entity: entity, origbuff: KDBuff, changes?: Record<string, any>): KDBuff;
declare function KDApplyBuff(list: Record<string, KDBuff>, origbuff: KDBuff, changes: Record<string, any>, entity: entity): KDBuff;
declare function KinkyDungeonGetbuff(list: Record<string, KDBuff>, buffId: string): KDBuff;
declare function KinkyDungeonHasBuff(list: Record<string, KDBuff>, buffId: string, excludeNoDuration?: boolean): boolean;
declare function KDEntityHasBuff(entity: entity, buffId: string, excludeNoDuration?: boolean): boolean;
declare function KDEntityBuffedStat(entity: entity, stat: string, onlyPositiveDuration?: boolean): number;
declare function KDEntityMaxBuffedStat(entity: entity, stat: string, onlyPositiveDuration?: boolean): number;
declare function KDEntityGetBuff(entity: entity, buffId: string): KDBuff;
declare let KinkyDungeonAttackTwiceFlag: boolean;
declare let KinkyDungeonSlimeParts: ({
    group: string;
    restraint: string;
    noUnmasked: boolean;
} | {
    group: string;
    restraint: string;
    noUnmasked?: undefined;
})[];
declare let KDAlertCD: number;
declare let KDHeelPowerGrowthExponent: number;
declare let KDEventDataReset: {};
declare let KDSoundDescBase: SoundDescData[];
declare let KDShockwaveDataBase: ShockwaveData[];
declare let KDEventDataBase: {
    SlimeLevel: number;
    SlimeLevelStart: number;
    CurseHintTick: boolean;
    ActivationsThisTurn: number;
    sounddesc: SoundDescData[];
    shockwaves: ShockwaveData[];
};
interface SoundDescData {
    x: number;
    y: number;
    desc: string;
    shockwave: ShockwaveData;
    lastShockwave: number;
    shockwavePeriod: number;
}
interface ShockwaveData {
    x: number;
    y: number;
    radius: number;
    sprite: string;
}
declare let KDEventData: {
    SlimeLevel: number;
    SlimeLevelStart: number;
    CurseHintTick: boolean;
    ActivationsThisTurn: number;
    sounddesc: SoundDescData[];
    shockwaves: ShockwaveData[];
};
declare function KDMapHasEvent(map: Record<string, any>, event: string): boolean;
declare function KinkyDungeonSendEvent(Event: string, data: any, forceSpell?: spell, forceWeapon?: item, mapData?: KDMapDataType): void;
declare function KinkyDungeonResetEventVariables(): void;
declare function KinkyDungeonResetEventVariablesTick(delta: number): void;
declare let KDEventMapInventoryIcon: Record<string, Record<string, (e: KinkyDungeonEvent, item: item, data: any) => void>>;
declare function KinkyDungeonHandleInventoryIconEvent(Event: string, e: KinkyDungeonEvent, item: item, data: any): void;
declare let KDEventMapInventorySelected: Record<string, Record<string, (e: KinkyDungeonEvent, item: item, data: any) => void>>;
declare function KinkyDungeonHandleInventorySelectedEvent(Event: string, kinkyDungeonEvent: KinkyDungeonEvent, item: item, data: any): void;
declare let KDEventMapInventory: Record<string, Record<string, (e: KinkyDungeonEvent, item: item, data: any, slot?: string) => void>>;
declare function KinkyDungeonHandleInventoryEvent(Event: string, e: KinkyDungeonEvent, item: item, data: any, slot?: string): void;
declare const KDEventMapBuff: Record<string, Record<string, (e: KinkyDungeonEvent, buff: KDBuff, item: entity, data: any) => void>>;
declare function KinkyDungeonHandleBuffEvent(event: string, e: KinkyDungeonEvent, buff: KDBuff, entity: entity, data: any): void;
declare let KDEventMapOutfit: Record<string, Record<string, (e: KinkyDungeonEvent, outfit: outfit, data: any) => void>>;
declare function KinkyDungeonHandleOutfitEvent(Event: string, e: KinkyDungeonEvent, outfit: outfit, data: any): void;
declare let KDEventMapSpell: Record<string, Record<string, (e: KinkyDungeonEvent, spell: spell, data: any) => void>>;
declare function KinkyDungeonHandleMagicEvent(Event: string, e: KinkyDungeonEvent, spell: spell, data: any): void;
declare let KDEventMapWeapon: Record<string, Record<string, (e: KinkyDungeonEvent, weapon: weapon, data: any) => void>>;
declare function KinkyDungeonHandleWeaponEvent(Event: string, e: KinkyDungeonEvent, weapon: weapon, data: any): void;
declare let KDEventMapBullet: Record<string, Record<string, (e: KinkyDungeonEvent, b: KDBullet, data: any) => void>>;
declare function KinkyDungeonHandleBulletEvent(Event: string, e: KinkyDungeonEvent, b: any, data: any): void;
declare let KDEventMapEnemy: Record<string, Record<string, (e: KinkyDungeonEvent, enemy: entity, data: any) => void>>;
declare function KinkyDungeonHandleEnemyEvent(Event: string, e: KinkyDungeonEvent, enemy: entity, data: any): void;
declare let KDEventMapGeneric: Record<string, Record<string, (e: string, data: any) => void>>;
declare function KinkyDungeonHandleGenericEvent(Event: string, data: any): void;
declare function KDEventPrereq(_e: string, item?: item, tags?: any): string | true;
declare function KDIsHumanoid(enemy: entity): boolean;
declare function KDTriggerSpell(spell: spell, data: any, Passive: boolean, Toggle: boolean): void;
declare function KDAddTraineeWP(player: entity, powerAdded: number): void;
declare const KDDamageHealEfficiencyBase = 0.8;
declare function KDGetDamageHealEfficiency(player: entity): number;
declare function KDClampDamageWP(player: entity): void;
declare function KDAddDamageWP(player: entity, powerAdded: number): void;
declare let KDHypnoResetTime: number;
declare let KDMaxHypnosis: number;
declare function KDAddTrance(player: entity, powerAdded: number): void;
declare function KDAddArcaneEnergy(player: entity, powerAdded: number): void;
declare let KDHardModeReplace: {
    WitchShock: string;
    WitchChain: string;
    Drone: string;
    CaptureBot: string;
    EnforcerBot: string;
    Alchemist: string;
    WolfgirlPet: string;
    WolfApprentice: string;
    WolfTapeDrones: string;
    Bandit: string;
    BanditHunter: string;
    BanditGrappler: string;
    SmallSlime: string;
    FastSlime: string;
    LatexCubeSmall: string;
    LatexCube: string;
    Dragon: string;
    DragonShield: string;
    ElementalFire: string;
    Pixie: string;
    Statue: string;
    SoulCrystal: string;
    ShadowHand: string;
    ShadowGhast: string;
    Gag: string;
    Scarves: string;
    RopeSnake: string;
    LearnedRope: string;
    Apprentice: string;
    Apprentice2: string;
    HighWizard: string;
    Dressmaker: string;
    Mummy: string;
    Cleric: string;
    BlindZombie: string;
    FastZombie: string;
    Ninja: string;
    Maidforce: string;
    MaidforcePara: string;
    LesserSkeleton: string;
    Skeleton: string;
    OldDrone: string;
};
declare function KinkyDungeonSendAltEvent(Event: string, data: any): void;
declare function KinkyDungeonHandleAltEvent(Event: string, e: KinkyDungeonEvent, alt: any, data: any): void;
declare let KDEventMapAlt: Record<string, Record<string, (e: KinkyDungeonEvent, alt: any, data: any) => void>>;
declare function KinkyDungeonSendFacilityEvent(Event: string, data: any): void;
declare function KinkyDungeonHandleFacilityEvent(Event: string, e: KinkyDungeonEvent, fac: string, data: any): void;
declare let KDEventMapFacility: Record<string, Record<string, (e: KinkyDungeonEvent, fac: string, data: any) => void>>;
declare function KDStunResist(data: any): void;
declare function KDAddEvent(map: any, trigger: any, type: any, code: any): void;
declare function KDTargetEnemy(en: entity, onlyHostileAggro?: boolean): boolean;
declare let KDTodayDate: Date;
declare function KDProcessSeasonalTags(tags: string[]): void;
declare function KinkyDungeonAddTags(tags: string[], Floor: number): void;
declare let KDPerkToggleTags: string[];
declare function KinkyDungeonGetEnemy(enemytags: string[], Level: number, Index: string, Tile: string, requireTags?: string[], alliances?: {
    requireHostile?: string;
    requireAllied?: string;
    requireNonHostile?: string;
    requireNonFriendly?: string;
}, bonusTags?: Record<string, {
    bonus: number;
    mult: number;
}>, filterTags?: string[], requireSingleTag?: string[], minWeight?: number, minWeightFallback?: boolean, noOverrideFloor?: boolean): enemy;
declare function KDEntityCanBeGuard(en: entity, faction: string, requireTags: string[]): boolean;
declare function KinkyDungeonCallGuard(x: number, y: number, _noTransgress: boolean, normalDrops: boolean, requireTags?: string[], faction?: string, jailtag?: string): entity;
declare let KinkyDungeonTotalSleepTurns: number;
declare let KinkyDungeonSearchTimer: number;
declare let KinkyDungeonSearchTimerMin: number;
declare let KinkyDungeonFirstSpawn: boolean;
declare let KinkyDungeonSearchStartAmount: number;
declare let KinkyDungeonSearchHuntersAmount: number;
declare let KinkyDungeonSearchEntranceAdjustAmount: number;
declare let KinkyDungeonSearchEntranceChaseAmount: number;
declare function KinkyDungeonHandleWanderingSpawns(delta: number): void;
declare let HunterPulse: number;
declare let HunterSpawnTimer: number;
declare let KDMainFactionSecurityMod: number;
declare let KDMaxCageTime: number;
declare let KDMaxKeys: number;
declare let KDJailFilters: string[];
declare function KDAssignGuardAction(guard: entity, xx: number, yy: number): void;
declare function KDGetJailEvent(guard: entity, xx: number, yy: number): (g: entity, x: number, y: number) => void;
declare function KinkyDungeonLoseJailKeys(Taken?: boolean, boss?: boolean, enemy?: entity): void;
declare function KinkyDungeonUpdateJailKeys(): void;
declare function KinkyDungeonAggroFaction(faction: string, noAllyRepPenalty?: boolean, securityPenalty?: number): boolean;
declare function KinkyDungeonPlayerIsVisibleToJailers(): any;
declare function KDCalcPlayChance(playChance: number, enemy: entity): number;
declare function KinkyDungeonCanPlay(enemy: entity): boolean;
declare function KinkyDungeonCheckRelease(modifier?: number): number;
declare let KDMaxAlertTimer: number;
declare let KDMaxAlertTimerAggro: number;
declare function KinkyDungeonAggroAction(action: string, data: {
    enemy?: entity;
    x?: number;
    y?: number;
    faction?: string;
    force?: boolean;
}): void;
declare let KDLocalChaseTypes: string[];
declare let KDSevereTypes: string[];
declare let KDMaxGuiltPerAggro: number;
declare let KDGuiltMult: number;
declare function KinkyDungeonStartChase(enemy: entity, Type: string, faction?: string, force?: boolean): void;
declare function KinkyDungeonPlayExcuse(enemy: entity, Type: string): void;
declare function KDSetPlayCD(enemy: entity, mult: number, base?: number): void;
declare function KinkyDungeonGetJailRestraintForGroup(Group: string, jailRestraintList?: KDJailRestraint[], lock?: string): {
    restraint: restraint;
    variant: string;
};
declare function KinkyDungeonGetJailRestraintsForGroup(Group: string, jailRestraintList?: KDJailRestraint[], agnostic?: boolean, lock?: string, ignoreLevel?: boolean, _ignoreWorn?: boolean): {
    restraint: restraint;
    variant: string;
    def: KDJailRestraint;
}[];
declare function KDJailCondition(r: KDJailRestraint): boolean;
declare function KDPriorityCondition(r: KDJailRestraint): boolean;
declare function KinkyDungeonGetJailRestraintLevelFor(Name: string): number;
declare function KinkyDungeonInJail(filter: string[]): boolean;
declare function KinkyDungeonPlaceJailKeys(): void;
declare function KinkyDungeonHandleJailSpawns(delta: number, useExistingGuard?: boolean): void;
declare function KinkyDungeonLockableItems(): item[];
declare function KinkyDungeonMissingJailUniform(): any[];
declare function KinkyDungeonTooMuchRestraint(): any[];
declare function KDPutInJail(player: entity, enemy: entity, point: {
    x: number;
    y: number;
}): boolean;
declare function KinkyDungeonHandleLeashTour(xx: number, yy: number, type: string): void;
declare function KDGetEffSecurityLevel(faction?: string, Cap?: boolean): number;
declare function KinkyDungeonJailGuardGetLeashWaypoint(xx: number, yy: number, type: string): void;
declare function KinkyDungeonJailGetLeashPoint(xx: number, yy: number, enemy: entity): {
    x: number;
    y: number;
};
declare function KinkyDungeonPlayerInCell(any?: boolean, qualified?: boolean, filter?: string[]): boolean;
declare function KinkyDungeonPointInCell(x: number, y: number, radius?: number): boolean;
declare function KinkyDungeonPassOut(noteleport?: boolean): void;
declare function KDGetJailDoor(x: number, y: number): {
    tile: any;
    x: number;
    y: number;
};
declare function KDGetSawFlag(flag: string, faction: string): number;
declare function KDDefeatedPlayerTick(nodefeat?: boolean): void;
declare function KDEnterDemonTransition(): void;
declare function KDCreateDragonLair(dragon: entity, lairType: string, slot: KDWorldSlot): string;
declare function KDAddDefeatRestraints(enemy: entity, allowFurniture: boolean): void;
declare function KDEnterDragonLair(dragon: entity, lairType?: string): void;
declare function KDEnterDollTerminal(willing: boolean, cancelDialogue?: boolean, forceOutfit?: boolean): void;
declare function KDApplyLivingCollars(): void;
declare function KDRemovePrisonRestraints(): void;
declare function KDResetDialogue(): void;
declare function KinkyDungeonDefeat(PutInJail?: boolean, leashEnemy?: entity): void;
declare function KDRepairRubble(JailBorderOnly: boolean): void;
declare function KDEnemyIsTemporary(enemy: entity): boolean;
declare function KDKickEnemies(nearestJail: any, ignoreAware: boolean, Level: number, noCull?: boolean, ignoreEntities?: entity[]): boolean;
declare function KDResetAllIntents(nonHostileOnly?: boolean, endPlay?: number, _player?: void): void;
declare function KDResetAllAggro(_player?: void): void;
declare function KDForceWanderFar(player: any, radius?: number): void;
declare function KDWanderEnemy(en: entity): void;
declare function KDKickEnemy(e: entity, minDist?: number, force?: boolean): void;
declare function KDKickEnemyLocal(e: entity): void;
declare function KinkyDungeonStripInventory(KeepPicks?: boolean, KeepOutfit?: boolean): void;
declare function KinkyDungeonStripOutfits(KeepOutfit?: boolean): void;
declare function KDExpireFlags(enemy: entity): void;
declare function KDGetJailRestraints(overrideTags?: string[], requireJail?: boolean, requireParole?: boolean): KDJailRestraint[];
declare function KDSetWorldSlot(x: number, y: number, jx?: number, jy?: number): void;
declare let KDCustomDefeats: Record<string, (enemy: entity) => void>;
declare let KDCustomDefeatUniforms: {
    WolfgirlHunters: () => void;
    MaidSweeper: () => void;
    DollShoppe: () => void;
    CyberDoll: () => void;
    RopeDojo: () => void;
    Adventurer: () => void;
    ElementalSlave: () => void;
};
declare function KDFixPlayerClothes(faction: string, itemsList?: item[]): void;
declare function KDResetGuardSpawnTimer(): void;
declare let KDChestRank: {
    gold: number;
    lessergold: number;
    silver: number;
    storage: number;
};
declare let KDChestPenalty: {
    gold: number;
    lessergold: number;
    silver: number;
    storage: number;
};
declare function KDChestSecurity(data: {
    enemy?: entity;
    x?: number;
    y?: number;
    faction?: string;
}): number;
declare function KDGetHiSecDialogue(enemy: entity): string;
declare function KDGetLeashFaction(leashEnemy: entity): string;
declare function KDGetLeashJailRoom(leashEnemy: entity): string;
declare function KDHasEntranceToJailRoom(jailRoom: string, map: WorldCoord, allowMainInstead: boolean): boolean;
declare function KDGetEntranceToJailRoom(jailRoom: string, map: WorldCoord): KDPoint;
declare function KDApplyJailOutfit(): void;
declare function KDGetFurnitureCriteria(entity: entity): (x: number, y: number, point: KDJailPoint) => boolean;
declare function KDGetNearestFactionGuard(x: number, y: number): entity;
declare function KDPrisonCommonGuard(player: entity, _call?: boolean, suppressCall?: boolean): entity;
declare function KDPrisonGetGroups(_player: entity, jailLists: string[], lock: string, maxPower: number): KDJailGetGroupsReturn;
declare function KDPrisonTick(_player: entity): boolean;
declare function KDPrisonIsInFurniture(player: entity): boolean;
declare function KDGoToSubState(_player: entity, state: string): string;
declare function KDPopSubstate(_player: entity): string;
declare function KDSetPrisonState(_player: entity, state: string): string;
declare function KDCurrentPrisonState(_player: entity): string;
declare function KDDoUniformRemove(player: entity, guard: entity, jailGroups: string[], lockType: string, power: number): string;
declare function KDDoUniformApply(player: entity, guard: entity, jailGroups: string[], lockType: string, power: number): string;
declare let KDCYBERPOWER: number;
declare let KDJAILPOWER: number;
declare let KDPRISONGROUPS: string[][];
declare let KDPrisonTypes: Record<string, KDPrisonType>;
declare function KDLostJailTrack(player: any): "" | "Furniture" | "InTraining" | "Unaware";
declare function KDLostJailTrackCell(player: any): "" | "Furniture" | "InTraining" | "Unaware" | "InCell";
declare function KDGetJailEnemy(): enemy;
declare let KDJailStripSearchTime: number;
declare let KDJailStripSearchTempTime: number;
declare function KDShouldStripSearchPlayer(player: entity, allowFlag?: boolean): boolean;
declare function KDDoStripSearchRemove(player: entity, guard: entity): string;
declare let KDSetpieceAttempts: number;
declare let KDSetPieces: ({
    Name: string;
    tags: string[];
    Radius: number;
    xPad?: undefined;
    yPad?: undefined;
    xPadEnd?: undefined;
    yPadEnd?: undefined;
    Max?: undefined;
    Prereqs?: undefined;
    noPOI?: undefined;
} | {
    Name: string;
    tags: string[];
    Radius: number;
    xPad: number;
    yPad: number;
    xPadEnd: number;
    yPadEnd: number;
    Max?: undefined;
    Prereqs?: undefined;
    noPOI?: undefined;
} | {
    Name: string;
    tags: string[];
    Radius: number;
    Max: number;
    xPad?: undefined;
    yPad?: undefined;
    xPadEnd?: undefined;
    yPadEnd?: undefined;
    Prereqs?: undefined;
    noPOI?: undefined;
} | {
    Name: string;
    tags: string[];
    Radius: number;
    Prereqs: string[];
    Max: number;
    xPad: number;
    yPad: number;
    xPadEnd: number;
    yPadEnd: number;
    noPOI?: undefined;
} | {
    Name: string;
    tags: string[];
    Radius: number;
    Max: number;
    xPad: number;
    yPad?: undefined;
    xPadEnd?: undefined;
    yPadEnd?: undefined;
    Prereqs?: undefined;
    noPOI?: undefined;
} | {
    Name: string;
    tags: string[];
    noPOI: boolean;
    Radius: number;
    xPad: number;
    yPad: number;
    xPadEnd: number;
    yPadEnd: number;
    Max?: undefined;
    Prereqs?: undefined;
})[];
declare let KDCountSetpiece: Map<any, any>;
type ChestEntry = {
    x: number;
    y: number;
    priority: boolean;
    Faction: string;
    NoTrap: boolean;
};
type ShrineEntry = {
    x: number;
    y: number;
    priority: boolean;
};
type SpawnEntry = {
    x: number;
    y: number;
    required: string[];
    AI: string;
    tags?: string[];
    ftags?: string[];
    faction?: string;
    force?: boolean;
    keys?: boolean;
    priority?: boolean;
    noPlay?: boolean;
    levelBoost?: number;
    forceIndex?: string;
};
declare function KinkyDungeonPlaceSetPieces(POI: any, trapLocations: {
    x: number;
    y: number;
}[], chestlist: ChestEntry[], shrinelist: ShrineEntry[], chargerlist: any[], spawnPoints: SpawnEntry[], InJail: boolean, width: number, height: number): void;
declare function KDGetFavoredSetpieces(POI: any, setpieces: any[]): any[];
declare function KDGetFavoringSetpieces(Name: string, tags: string[], POI: any, POIBlacklist?: Map<any, boolean>): any;
declare function KinkyDungeonGetSetPiece(POI: any, setpieces: any[], pieces: Map<string, any>): any;
declare function KinkyDungeonGenerateSetpiece(POI: any, Piece: any, InJail: boolean, trapLocations: {
    x: number;
    y: number;
}[], chestlist: ChestEntry[], shrinelist: ShrineEntry[], _chargerlist: any[], spawnPoints: SpawnEntry[], forcePOI: boolean, altType: any, MapParams: floorParams): {
    Pass: boolean;
    Traps: {
        x: number;
        y: number;
    }[];
};
declare function KDUnblock(x: number, y: number): boolean;
interface KDSpawnResult {
    id: number;
    persistent: boolean;
    entity: entity;
    success: boolean;
}
declare function SetpieceSpawnPrisoner(x: number, y: number, persistentOnly?: boolean, lock?: string, faction?: string, sameLocation?: boolean): KDSpawnResult;
declare function KDTorch(X: number, Y: number, altType: any, MapParams: any): void;
declare function KDTorchUnlit(X: number, Y: number, altType: any, MapParams: any): void;
declare function KDChest(X: number, Y: number, loot?: string, faction?: string): void;
declare function KDCreateDoors(Left: number, Top: number, Width: number, Height: number, openChance?: number, convertDoodads?: boolean): void;
declare function KDPlaceChest(cornerX: number, cornerY: number, _radius: number, chestlist: ChestEntry[], spawnPoints: SpawnEntry[], NoAddToChestList?: boolean): string;
declare function KDAddPipes(pipechance: number, pipelatexchance: number, thinlatexchance: number, heavylatexspreadchance: number): void;
declare function KDGetNPCRestraintJailDialogueType(restraint: NPCRestraint): "PrisonerLatex" | "PrisonerJail";
declare function KDImprisonEnemy(e: entity, noJam: boolean, dialogue?: string, restrainttags?: string[], restraintSet?: Record<string, number>, faction?: string, force?: boolean, LevelBonus?: number, Lock?: string): boolean;
declare let KDDialogueData: {
    CurrentDialogueIndex: number;
};
declare let KDDialogueDelay: number;
declare function KDPersonalitySpread(Min: number, Avg: number, Max: number, Enemy?: entity): number;
declare function KinkyDungeonCanPutNewDialogue(): boolean;
declare function KDBasicCheck(PositiveReps: string[], NegativeReps: string[], Modifier?: number): number;
declare function KDDialogueApplyPersonality(allowed: string[]): void;
declare function KDGetDialogue(): KinkyDialogue;
declare let KDMaxDialogue: number;
declare let KDOptionOffset: number;
declare let KDdialoguecheckPrereqMap: Map<KinkyDialogue, [number, boolean]>;
declare let KDdialoguecheckGreyoutMap: Map<KinkyDialogue, [number, boolean]>;
declare let KDdialoguecheckPrereqInterval: number;
declare function KDCheckDialoguePrereq(entry: KinkyDialogue, gagged: boolean, player: entity): boolean;
declare function KDCheckDialogueGreyout(entry: KinkyDialogue, gagged: boolean, player: entity): boolean;
declare function KDDrawDialogue(delta: number): void;
declare let DialogueSpacingA: number;
declare let DialogueSpacingB: number;
declare function KDIncreaseOfferFatigue(Amount: number): void;
declare function KDEnemyHelpfulness(enemy: entity): number;
declare function KDGetSpeaker(global?: boolean): entity;
declare function KDDialogueEnemy(): entity;
declare function KDGetSpeakerFaction(): string;
declare function KDPleaseSpeaker(Amount: number): void;
declare function KDAddOpinion(enemy: entity, Amount: number): number;
declare function KDAddOpinionCollection(enemy: KDCollectionEntry, Amount: number): number;
declare function KDAllySpeaker(Turns: number, Follow: boolean): void;
declare function KDAggroSpeaker(Turns?: number, NoAlertFlag?: boolean): void;
declare function KDBasicDialogueSuccessChance(checkResult: number): number;
declare function KDAgilityDialogueSuccessChance(checkResult: number): number;
declare function KDOffensiveDialogueSuccessChance(checkResult: number): number;
declare let KinkyDungeonDialogueTimer: number;
declare function KDStartDialog(Dialogue: string, Speaker?: string, Click?: boolean, Personality?: string, enemy?: entity): void;
declare function KDDoDialogue(data: any): void;
declare function KDStartDialogInput(Dialogue: string, Speaker?: string, Click?: boolean, Personality?: string, enemy?: entity): void;
declare function KDDialogueGagged(): boolean;
declare function KDHandleDialogue(): boolean;
declare function DialogueCreateEnemy(x: number, y: number, Name: string, persistentid?: number, noLoadout?: boolean): entity;
declare function DialogueGetEnemy(Name: string, persistentid?: number): entity;
declare function KDRunCreationScript(entity: entity, coord: WorldCoord): void;
declare function KDRunOnSpawnScript(entity: entity, coord: WorldCoord): void;
declare function KDAllyDialogue(name: string, requireTags: string[], requireSingleTag: string[], excludeTags: string[], weight: number): KinkyDialogue;
declare let KDPrisonRescues: Record<string, {
    speaker: string;
    faction: string;
}>;
declare function KDPrisonerRescue(name: string, faction: string, enemytypes: string[]): KinkyDialogue;
declare function KDRecruitDialogue(name: string, faction: string, outfitName: string, goddess: string, restraints: string[], restraintscount: number, restraintsAngry: string[], restraintscountAngry: number, requireTags: string[], requireSingleTag: string[], excludeTags: string[], chance: number): KinkyDialogue;
declare let KDMaxSellItems: number;
declare function KDShopDialogue(name: string, items: string[], requireTags: string[], requireSingleTag: string[], chance: number, itemsdrop: string[]): KinkyDialogue;
declare function KDShopBuyDialogue(name: string): KinkyDialogue;
declare let KDOfferCooldown: number;
type refuseFunc = (firstRefused: boolean) => boolean;
declare function KDYesNoTemplate(setupFunction: refuseFunc, yesFunction: refuseFunc, noFunction: refuseFunc, domFunction: refuseFunc): KinkyDialogue;
declare function KDDialogueTriggerOffer(name: string, goddess: string[], restraintTags: string[], allowedPrisonStates: string[], allowedPersonalities: string[], requireTagsSingle: string[], requireTagsSingle2: string[], requireTags: string[], excludeTags: string[], requireFlags: string[], excludeFlags: string[], Lock?: string, WeightMult?: number): KinkyDialogueTrigger;
declare function KDYesNoBasic(name: string, goddess: string[], antigoddess: string[], restraint: string[], diffSpread: number[], OffdiffSpread: number[], count?: number, countAngry?: number, Lock?: string, Ally?: boolean, Flags?: {
    name: string;
    duration: number;
    floors?: number;
}[], CurseList?: string, HexList?: string, EnchantList?: string, hexlevelmin?: number, hexlevelmax?: number, enchantlevelmin?: number, enchantlevelmax?: number): KinkyDialogue;
declare function KDSaleShop(name: string, items: string[], requireTags: string[], requireSingleTag: string[], chance: number, markup: number, itemsdrop?: string[], multiplier?: number): KinkyDialogue;
declare function DialogueBringNearbyEnemy(x: number, y: number, radius: number, unaware?: boolean): entity;
declare function DialogueBringSpecific(x: number, y: number, enemy: entity): entity;
declare function KDIsSubmissiveEnough(_enemy?: entity): boolean;
declare function KDGetModifiedOpinion(enemy: entity, allowFaction?: boolean, allowSub?: boolean, allowPerk?: boolean, allowOnlyPosNegFaction?: number): number;
declare function KDAddOffer(Amount: number): void;
declare function KDGetOfferLevelMod(): number;
declare function KDRunChefChance(player: entity, force?: boolean): void;
declare function KDItemSubThreshold(item: string, nomult?: boolean): number;
declare function KDGetShopCost(enemy: entity, sell: boolean): number;
declare function KDAggroMapFaction(): void;
declare function DialogueAddCursedEnchantedHexed(restraint: restraint, enemy?: entity, Curse?: string, HexList?: string, EnchantList?: string, hexlevelmin?: number, hexlevelmax?: number, enchantlevelmin?: number, enchantlevelmax?: number, returnOnly?: boolean, inventory?: boolean, Lock?: string): item;
declare function KDGetPlayerUntieBindAmt(enemy: entity): number;
declare function KDUntieEnemy(enemy: entity, amount: number, includeConjured?: boolean, includeUnlocked?: boolean): void;
declare function KDAggroViaDialogue(enemy: entity, unaware: boolean, aggroothers: boolean): void;
declare function KDIsGenderAmbiguous(player: entity): boolean;
declare function KDIsMaster(player: entity): boolean;
declare function KDGetHonorific(player: entity, lowercase?: boolean): string;
declare function KDGetHonorificIntimate(player: entity, lowercase?: boolean): string;
declare function KDGetSubTitle(player: entity, lowercase?: boolean): string;
declare function KDGetDiminutive(player: entity, lowercase?: boolean): string;
interface KDPronounData {
    player: entity;
    type: string;
    pronoun: string;
    priority: number;
    lowercase: boolean;
}
declare function KDGetPronoun(player: entity, type?: string, lowercase?: boolean, override?: string): string;
declare function KDGetPronounThey(player: entity, override?: string): string;
declare function KDGetPronounThem(player: entity, override?: string): string;
declare function KDGetPronounTheir(player: entity, override?: string): string;
declare function KDGetPronounTheyve(player: entity, override?: string): string;
declare function KDGetPronounTheyre(player: entity, override?: string): string;
declare function KDGetPronounthey(player: entity, override?: string): string;
declare function KDGetPronounthem(player: entity, override?: string): string;
declare function KDGetPronountheir(player: entity, override?: string): string;
declare function KDGetPronountheyve(player: entity, override?: string): string;
declare function KDGetPronountheyre(player: entity, override?: string): string;
declare function KDGetTheyThem_s(player: entity, override?: string): string;
declare function KDGetTheyThem_es(player: entity, override?: string): string;
declare function KDGetTheyThem_has(player: entity, override?: string): string;
declare function KDGetTheyThem_is(player: entity, override?: string): string;
declare function KDGetGenericDialogueParams(player: entity, enemy?: entity, extraparams?: Record<string, string>): Record<string, string>;
declare let KinkyDungeonMaxDialogueTriggerDist: number;
declare let KDDialogueTriggers: Record<string, KinkyDialogueTrigger>;
declare function KDDefaultPrereqs(enemy: entity, AIData: any, dist: number, maxdist: number, chance: number, restraintTags: string[], force: boolean, Lock?: string): boolean;
declare function KDShopTrigger(name: string): KinkyDialogueTrigger;
declare function KDRecruitTrigger(name: string, dialogue: KinkyDialogue): KinkyDialogueTrigger;
declare function KDBossTrigger(name: string, enemyName: string[]): KinkyDialogueTrigger;
declare function KDBossLose(name: string, enemyName: string[], tags: string[], condition?: () => boolean): KinkyDialogueTrigger;
declare function KinkyDungeonGetShopForEnemy(enemy: entity, guaranteed?: boolean): string;
declare let KDDialogueParams: {
    ShopkeeperHelpFee: number;
    ShopkeeperHelpFeePerLevel: number;
    ShopkeeperHelpFeePerPower: number;
    ShopkeeperHelpFeeFreebiePower: number;
    ShopkeeperFee: number;
    ShopkeeperFeePerLevel: number;
    ShopkeeperFeePunishThresh: number;
    ChefChance: number;
    KDTableFlipWP: number;
    MasterworkCount: number;
};
declare let KDResertNGTags: string[];
declare let KDShopPersonalities: string[];
declare let KDShops: Record<string, {
    name: string;
    tags: string[];
    singletag: string[];
    chance: number;
    items?: string[];
    itemsdrop?: string[];
}>;
declare let KDRecruitDialog: Record<string, {
    name: string;
    outfit: string;
    tags: string[];
    singletag: string[];
    excludeTags: string[];
    chance: number;
}>;
declare let KDAllyDialog: Record<string, {
    name: string;
    tags: string[];
    singletag: string[];
    excludeTags: string[];
    weight: number;
}>;
declare let KDSleepBedPercentage: number;
declare let KDDialogue: Record<string, KinkyDialogue>;
declare function KDShopkeeperMaxHelpPower(): number;
declare function KDMakeIntoDoll(player: entity): void;
declare enum KDSkillCheckType {
    Fitness = "Fitness",
    Agility = "Agility"
}
declare let KDSkillCheckTypes: Record<KDSkillCheckType, ((en: entity, player: entity, target: entity, diffMod: number) => number)>;
declare function KDGetSkillCheck(en: entity, player: entity, target: entity, type: KDSkillCheckType, diffMod?: number): number;
declare function KinkyDungeonAggressive(enemy?: entity, player?: entity): boolean;
declare function KDAllied(enemy: entity): boolean;
declare function KDHostile(enemy: entity, enemy2?: entity): boolean;
declare function KDOpinionRepMod(enemy: entity, player: entity): number;
declare function KDIsServant(value: KDCollectionEntry): boolean;
declare function KDGetFaction(enemy: entity | string): string;
declare function KDGetFactionOriginal(enemy: entity): string;
declare function KDFactionHostile(a: string, b: string | entity, mod?: number, modfree?: number): boolean;
declare function KDFactionAllied(a: string, b: string | entity, threshold?: number, _mod?: number): boolean;
declare function KDFactionFavorable(a: string, b: string | entity): boolean;
declare function KDGetFactionProps(list: string[], Floor: number, Checkpoint: string, tags: string[], bonustags: Record<string, {
    bonus: number;
    mult: number;
}>, X?: number, Y?: number): Record<string, number>;
declare function KDGetHonor(a: string, b: string): number;
declare let KinkyDungeonFactionColors: {
    Jail: string[];
    Slime: string[];
    Latex: string[];
    Dressmaker: string[];
    Alchemist: string[];
    Elf: string[];
    Bountyhunter: string[];
    AncientRobot: string[];
    Dollsmith: string[];
    Mushy: string[];
    Apprentice: string[];
    Witch: string[];
};
declare let KinkyDungeonFactionFilters: Record<string, Record<string, LayerFilter>>;
declare let KDFactionNoCollection: string[];
declare let KDFactionProperties: Record<string, KDFactionProps>;
declare let KDHiddenFactions: string[];
declare let KinkyDungeonHiddenFactions: Map<string, boolean>;
declare function KinkyDungeonHiddenFactionsPush(str: any): void;
declare let KDFactionSecurityMod: {
    Dressmaker: {
        level_magic: number;
        level_key: number;
    };
    Witch: {
        level_magic: number;
        level_key: number;
    };
    Elemental: {
        level_magic: number;
    };
    Mushy: {
        level_magic: number;
        level_tech: number;
    };
    Apprentice: {
        level_magic: number;
        level_key: number;
    };
    Elf: {
        level_magic: number;
        level_key: number;
    };
    Bast: {
        level_magic: number;
    };
    AncientRobot: {
        level_tech: number;
        level_key: number;
    };
    Nevermere: {
        level_tech: number;
        level_key: number;
    };
    Maidforce: {
        level_tech: number;
        level_magic: number;
        level_key: number;
    };
    Alchemist: {
        level_tech: number;
        level_magic: number;
    };
    Bountyhunter: {
        level_tech: number;
        level_key: number;
    };
};
declare let KDBaseSecurity: {
    level_key: number;
};
declare let KDPiousFactions: {
    Angel: number;
};
declare let KinkyDungeonTooltipFactions: string[];
declare let KinkyDungeonFactionTag: Record<string, string>;
declare let KinkyDungeonFactionJailTag: {
    Bountyhunter: string;
    Bandit: string;
    Alchemist: string;
    Nevermere: string;
    Apprentice: string;
    RopeDojo: string;
    Dressmaker: string;
    DollShoppe: string;
    Witch: string;
    Elemental: string;
    Owners: string;
    Dragon: string;
    Maidforce: string;
    Delinquent: string;
    Bast: string;
    Elf: string;
    AncientRobot: string;
    ShadowClan: string;
    Debate: string;
    Wolfhunter: string;
    Extraplanar: string;
    DubiousWitch: string;
    Virus: string;
    Dollsmith: string;
    Warden: string;
};
declare let KinkyDungeonFactionRelationsBase: Record<string, Record<string, number>>;
declare let KinkyDungeonFactionRelations: Record<string, Record<string, number>>;
declare function KDFactionRelation(a: string, b: string): number;
declare let KDFactionRelations: Map<string, Map<string, number>>;
declare function KDInitFactions(Reset?: boolean): void;
declare function KDSetFactionRelation(a: string, b: string, relation: number): void;
declare function KDChangeFactionRelation(a: string, b: string, amount: number, AffectRivals?: boolean): void;
declare let KDNeedsParams: {
    FrustrationPerTurn: number;
    FrustrationPerDesire: number;
    FrustrationPerOrgasm: number;
    FrustrationPerVibeLevel: number;
    PassionPerTurn: number;
    PassionPerDesire: number;
    PassionPerOrgasm: number;
    PassionPerVibeLevel: number;
    PassionPerPlay: number;
};
declare function KDFixNeeds(): void;
declare function KDTickNeeds(delta: number): void;
declare function KDNeedsPlaySelf(_data: any, _mult?: number): void;
declare function KDNeedsOrgasm(_data: any, _mult?: number): void;
declare function KDNeedsEdge(_data: any, _mult?: number): void;
declare function KDNeedsDeny(_data: any, _mult?: number): void;
declare let KDBaseJailTickSub: number;
declare let KDJailEvents: Record<string, {
    weight: (guard: any, xx: any, yy: any) => number;
    trigger: (guard: any, xx: any, yy: any) => void;
}>;
declare function KDCanSpawnShopkeeper(override?: boolean): boolean;
type guardAction_num = (guard: entity, xx: number, yy: number) => number;
type guardAction_bool = (guard: entity, xx: number, yy: number) => boolean;
type guardAction_void = (guard: entity, xx: number, yy: number, delta: number) => void;
type guardActionEntry = {
    weight: guardAction_num;
    assignable?: guardAction_bool;
    assign: guardAction_void;
    handle: guardAction_void;
};
declare let KDGuardActions: Record<string, guardActionEntry>;
declare let KinkyDungeonJailRemoveRestraintsTimerMin: number;
declare let KinkyDungeonJailedOnce: boolean;
declare let KDJailReleaseTurns: {
    minSub: number;
    releaseTurns: number;
}[];
declare let KDSecurityLevelHiSec: number;
declare let KDJailOutfits: Record<string, {
    overridelowerpriority: boolean;
    priority: number;
    jail: boolean;
    parole: boolean;
    restraints: KDJailRestraint[];
}>;
declare let KDJailConditions: Record<string, (r: KDJailRestraint) => boolean>;
declare function KDRunTests(): void;
declare function KDTestMapGen(count: number, Ranges: number[], Checkpoints: string[]): boolean;
declare function KDTestFullRunthrough(GameLoops: number, Init: boolean, NGP: boolean): boolean;
declare function KDTestjailer(iter: number): void;
declare function KDAddTestVariant(name: string): void;
declare function KDListMissingModels(): void;
declare function KDCheckForMissingModelLayers(): void;
declare function KDCheckForBadModels(): void;
declare function KDGetMissingSpellNames(): string;
declare let KDBasicArmorWeight: number;
declare let KDBasicArmorWeight_Cursed: number;
declare let KDEnchantedRestraintsWeight: number;
declare let KDAdvancedArmorWeight: number;
declare let KDAdvancedArmorWeight_Cursed: number;
declare let KD_hexchance_Default: number;
declare let KD_hexscale_Default: number;
declare let KD_enchantchance_Default: number;
declare let KD_enchantscale_Default: number;
declare let KD_hexchance_EnchantedRestraints: number;
declare let KD_hexscale_EnchantedRestraints: number;
declare let KDBasicArmor: {
    name: string;
    minLevel: number;
    weight: number;
    armor: string;
    cursesuffix: string;
    hexlist: string;
    enchantlist: string;
    hexchance: number;
    enchantchance: number;
    alwaysenchanthex: boolean;
    hexscale: number;
    enchantscale: number;
    unlockcurse: string[];
    hexlevelmin: number;
    hexlevelmax: number;
    enchantlevelmin: number;
    enchantlevelmax: number;
    nouncursed: string[];
    message: string;
    messageColor: string;
    messageTime: number;
    allFloors: boolean;
}[];
declare let KDAdvancedArmor: {
    name: string;
    minLevel: number;
    weight: number;
    armor: string;
    cursesuffix: string;
    hexlist: string;
    enchantlist: string;
    hexchance: number;
    enchantchance: number;
    alwaysenchanthex: boolean;
    hexscale: number;
    enchantscale: number;
    unlockcurse: string[];
    hexlevelmin: number;
    hexlevelmax: number;
    enchantlevelmin: number;
    enchantlevelmax: number;
    nouncursed: string[];
    message: string;
    messageColor: string;
    messageTime: number;
    allFloors: boolean;
}[];
declare let KDGoldArmor: any[];
declare let KDGoldArmor2: any[];
declare let KDGoldArmorGoddess: any[];
declare let KDGoldArmor2Goddess: any[];
declare let KDSilverArmor: any[];
declare let KDEnchantedRestraints: ({
    name: string;
    minLevel: number;
    weight: number;
    armortags: string[];
    armor: string;
    cursesuffix: string;
    maxEnchants: number;
    faction: string;
    hexlist: string;
    enchantlist: string;
    hexchance: number;
    enchantchance: number;
    alwaysenchanthex: boolean;
    hexscale: number;
    unlockcurse: string[];
    hexlevelmin: number;
    hexlevelmax: number;
    enchantlevelmin: number;
    enchantlevelmax: number;
    message: string;
    messageColor: string;
    messageTime: number;
    allFloors: boolean;
    amtMult?: undefined;
} | {
    name: string;
    minLevel: number;
    weight: number;
    armortags: string[];
    armor: string;
    cursesuffix: string;
    maxEnchants: number;
    amtMult: number;
    faction: string;
    hexlist: string;
    enchantlist: string;
    hexchance: number;
    enchantchance: number;
    alwaysenchanthex: boolean;
    hexscale: number;
    unlockcurse: string[];
    hexlevelmin: number;
    hexlevelmax: number;
    enchantlevelmin: number;
    enchantlevelmax: number;
    message: string;
    messageColor: string;
    messageTime: number;
    allFloors: boolean;
} | {
    name: string;
    minLevel: number;
    weight: number;
    armortags: string[];
    armor: string;
    cursesuffix: string;
    amtMult: number;
    faction: string;
    hexlist: string;
    enchantlist: string;
    hexchance: number;
    enchantchance: number;
    alwaysenchanthex: boolean;
    unlockcurse: string[];
    hexlevelmin: number;
    hexlevelmax: number;
    enchantlevelmin: number;
    enchantlevelmax: number;
    message: string;
    messageColor: string;
    messageTime: number;
    allFloors: boolean;
    maxEnchants?: undefined;
    hexscale?: undefined;
})[];
declare let KDShadowRestraints: any[];
declare let KinkyDungeonLootTable: {
    rubble: ({
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites?: undefined;
        key?: undefined;
        count?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        arousalMode?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        key?: undefined;
        count?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        arousalMode?: undefined;
    } | {
        name: string;
        key: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites?: undefined;
        count?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        arousalMode?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        count: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites?: undefined;
        key?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        arousalMode?: undefined;
    } | {
        name: string;
        minLevel: number;
        weapon: string;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        prerequisites?: undefined;
        key?: undefined;
        count?: undefined;
        arousalMode?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        prerequisites?: undefined;
        key?: undefined;
        count?: undefined;
        weapon?: undefined;
        arousalMode?: undefined;
    } | {
        name: string;
        arousalMode: boolean;
        minLevel: number;
        weight: number;
        weapon: string;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites?: undefined;
        key?: undefined;
        count?: undefined;
    })[];
    shelf: ({
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        key?: undefined;
    } | {
        name: string;
        key: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        weapon?: undefined;
        noweapon?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        weapon?: undefined;
        noweapon?: undefined;
        key?: undefined;
    })[];
    pearl: {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
    }[];
    shadow: any[];
    kitty: ({
        name: string;
        minLevel: number;
        weight: number;
        armor: string;
        amtMult: number;
        maxEnchants: number;
        cursesuffix: string;
        prerequisites: string[];
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        weapon?: undefined;
        noweapon?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        armor?: undefined;
        amtMult?: undefined;
        maxEnchants?: undefined;
        cursesuffix?: undefined;
        prerequisites?: undefined;
        faction?: undefined;
        hexlist?: undefined;
        enchantlist?: undefined;
        hexchance?: undefined;
        enchantchance?: undefined;
        alwaysenchanthex?: undefined;
        hexscale?: undefined;
        unlockcurse?: undefined;
        hexlevelmin?: undefined;
        hexlevelmax?: undefined;
        enchantlevelmin?: undefined;
        enchantlevelmax?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        goddess: string;
        goddessWeight: number;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        armor?: undefined;
        amtMult?: undefined;
        maxEnchants?: undefined;
        cursesuffix?: undefined;
        prerequisites?: undefined;
        faction?: undefined;
        hexlist?: undefined;
        enchantlist?: undefined;
        hexchance?: undefined;
        enchantchance?: undefined;
        alwaysenchanthex?: undefined;
        hexscale?: undefined;
        unlockcurse?: undefined;
        hexlevelmin?: undefined;
        hexlevelmax?: undefined;
        enchantlevelmin?: undefined;
        enchantlevelmax?: undefined;
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        armor?: undefined;
        amtMult?: undefined;
        maxEnchants?: undefined;
        cursesuffix?: undefined;
        prerequisites?: undefined;
        faction?: undefined;
        hexlist?: undefined;
        enchantlist?: undefined;
        hexchance?: undefined;
        enchantchance?: undefined;
        alwaysenchanthex?: undefined;
        hexscale?: undefined;
        unlockcurse?: undefined;
        hexlevelmin?: undefined;
        hexlevelmax?: undefined;
        enchantlevelmin?: undefined;
        enchantlevelmax?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
    } | {
        name: string;
        max: number;
        minLevel: number;
        weight: number;
        count: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        submissive: number;
        armor?: undefined;
        amtMult?: undefined;
        maxEnchants?: undefined;
        cursesuffix?: undefined;
        prerequisites?: undefined;
        faction?: undefined;
        hexlist?: undefined;
        enchantlist?: undefined;
        hexchance?: undefined;
        enchantchance?: undefined;
        alwaysenchanthex?: undefined;
        hexscale?: undefined;
        unlockcurse?: undefined;
        hexlevelmin?: undefined;
        hexlevelmax?: undefined;
        enchantlevelmin?: undefined;
        enchantlevelmax?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
    })[];
    robot: ({
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
    } | {
        name: string;
        max: number;
        minLevel: number;
        weight: number;
        count: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        submissive: number;
        weapon?: undefined;
        noweapon?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        weapon?: undefined;
        noweapon?: undefined;
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        goddess: string;
        goddessWeight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
    })[];
    lessershadow: any[];
    storage: ({
        name: string;
        key: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        weapon?: undefined;
        noweapon?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        key?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        key?: undefined;
    })[];
    kinky: ({
        name: string;
        minLevel: number;
        weight: number;
        count: number;
        armortags: string[];
        armor: string;
        faction: string;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        weaponlist?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
    } | {
        name: string;
        weaponlist: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        count?: undefined;
        armortags?: undefined;
        armor?: undefined;
        faction?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        count?: undefined;
        armortags?: undefined;
        armor?: undefined;
        faction?: undefined;
        weaponlist?: undefined;
    })[];
    blue: {
        name: string;
        magic: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        max: number;
    }[];
    tutorial1: {
        name: string;
        minLevel: number;
        weight: number;
        lock: string;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        power: number;
    }[];
    tutorial2: {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        power: number;
    }[];
    magicWeapon: {
        name: string;
        weaponlist: string;
        enchantlist: string;
        enchantchance: number;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    }[];
    pair: {
        name: string;
        minLevel: number;
        weight: number;
        armor: string;
        amtMult: number;
        maxEnchants: number;
        minEnchants: number;
        noForceEquip: boolean;
        unlockcurse: string[];
        cursechance: number;
        cursescale: number;
        cursesuffix: string;
        enchantlist: string;
        enchantchance: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    }[];
    gendmgtest: {
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        maxEnchants: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    }[];
    chest: ({
        name: string;
        minLevel: number;
        weight: number;
        armor: string;
        cursesuffix: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        enchantscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        nouncursed: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    } | {
        name: string;
        spell: string;
        nospell: string[];
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        noweapon?: undefined;
        weapon?: undefined;
        redspecial?: undefined;
        key?: undefined;
        arousalMode?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        notag?: undefined;
        trap?: undefined;
        power?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        spell?: undefined;
        nospell?: undefined;
        prerequisites?: undefined;
        weapon?: undefined;
        redspecial?: undefined;
        key?: undefined;
        arousalMode?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        notag?: undefined;
        trap?: undefined;
        power?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        spell?: undefined;
        nospell?: undefined;
        prerequisites?: undefined;
        noweapon?: undefined;
        weapon?: undefined;
        redspecial?: undefined;
        key?: undefined;
        arousalMode?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        notag?: undefined;
        trap?: undefined;
        power?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        spell?: undefined;
        nospell?: undefined;
        prerequisites?: undefined;
        redspecial?: undefined;
        key?: undefined;
        arousalMode?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        notag?: undefined;
        trap?: undefined;
        power?: undefined;
    } | {
        name: string;
        redspecial: number;
        key: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        spell?: undefined;
        nospell?: undefined;
        prerequisites?: undefined;
        noweapon?: undefined;
        weapon?: undefined;
        arousalMode?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        notag?: undefined;
        trap?: undefined;
        power?: undefined;
    } | {
        name: string;
        arousalMode: boolean;
        minLevel: number;
        weight: number;
        weapon: string;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        spell?: undefined;
        nospell?: undefined;
        prerequisites?: undefined;
        redspecial?: undefined;
        key?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        notag?: undefined;
        trap?: undefined;
        power?: undefined;
    } | {
        name: string;
        weaponlist: string;
        enchantlist: string;
        enchantchance: number;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        spell?: undefined;
        nospell?: undefined;
        prerequisites?: undefined;
        noweapon?: undefined;
        weapon?: undefined;
        redspecial?: undefined;
        key?: undefined;
        arousalMode?: undefined;
        notag?: undefined;
        trap?: undefined;
        power?: undefined;
    } | {
        name: string;
        notag: string[];
        arousalMode: boolean;
        trap: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        power: number;
        spell?: undefined;
        nospell?: undefined;
        noweapon?: undefined;
        weapon?: undefined;
        redspecial?: undefined;
        key?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        spell?: undefined;
        nospell?: undefined;
        noweapon?: undefined;
        weapon?: undefined;
        redspecial?: undefined;
        key?: undefined;
        arousalMode?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        notag?: undefined;
        trap?: undefined;
        power?: undefined;
    })[];
    lost_items: {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
    }[];
    lost_clothes: {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    }[];
    cache: ({
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        maxEnchants: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        amtMult?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        maxEnchants: number;
        amtMult: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        amtMult: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        maxEnchants?: undefined;
        hexscale?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armor: string;
        cursesuffix: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        enchantscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        nouncursed: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon?: undefined;
        weapon?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        weapon?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        goddess?: undefined;
        goddessWeight?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        goddess: string;
        goddessWeight: number;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    })[];
    magicrestraint: ({
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        maxEnchants: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        amtMult?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        maxEnchants: number;
        amtMult: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        amtMult: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        maxEnchants?: undefined;
        hexscale?: undefined;
    })[];
    wizard: ({
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        armor: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        norestraint: string[];
        weapon?: undefined;
        noweapon?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        magic?: undefined;
        prerequisites?: undefined;
        hexlist?: undefined;
        hexchance?: undefined;
        alwaysenchanthex?: undefined;
        hexscale?: undefined;
        enchantscale?: undefined;
        maxEnchants?: undefined;
        minEnchants?: undefined;
        unlockcurse?: undefined;
        hexlevelmin?: undefined;
        hexlevelmax?: undefined;
        enchantlevelmin?: undefined;
        enchantlevelmax?: undefined;
        nouncursed?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        armor?: undefined;
        norestraint?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        magic?: undefined;
        prerequisites?: undefined;
        hexlist?: undefined;
        hexchance?: undefined;
        alwaysenchanthex?: undefined;
        hexscale?: undefined;
        enchantscale?: undefined;
        maxEnchants?: undefined;
        minEnchants?: undefined;
        unlockcurse?: undefined;
        hexlevelmin?: undefined;
        hexlevelmax?: undefined;
        enchantlevelmin?: undefined;
        enchantlevelmax?: undefined;
        nouncursed?: undefined;
    } | {
        name: string;
        weaponlist: string;
        enchantlist: string;
        enchantchance: number;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        armor?: undefined;
        norestraint?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        magic?: undefined;
        prerequisites?: undefined;
        hexlist?: undefined;
        hexchance?: undefined;
        alwaysenchanthex?: undefined;
        hexscale?: undefined;
        enchantscale?: undefined;
        maxEnchants?: undefined;
        minEnchants?: undefined;
        unlockcurse?: undefined;
        hexlevelmin?: undefined;
        hexlevelmax?: undefined;
        enchantlevelmin?: undefined;
        enchantlevelmax?: undefined;
        nouncursed?: undefined;
    } | {
        name: string;
        magic: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        armor?: undefined;
        norestraint?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        weaponlist?: undefined;
        enchantlist?: undefined;
        enchantchance?: undefined;
        hexlist?: undefined;
        hexchance?: undefined;
        alwaysenchanthex?: undefined;
        hexscale?: undefined;
        enchantscale?: undefined;
        maxEnchants?: undefined;
        minEnchants?: undefined;
        unlockcurse?: undefined;
        hexlevelmin?: undefined;
        hexlevelmax?: undefined;
        enchantlevelmin?: undefined;
        enchantlevelmax?: undefined;
        nouncursed?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armor: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        enchantscale: number;
        maxEnchants: number;
        minEnchants: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        nouncursed: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        norestraint?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        weaponlist?: undefined;
        magic?: undefined;
        prerequisites?: undefined;
    })[];
    gold: ({
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        maxEnchants: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        amtMult?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        maxEnchants: number;
        amtMult: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        hexscale: number;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armortags: string[];
        armor: string;
        cursesuffix: string;
        amtMult: number;
        faction: string;
        hexlist: string;
        enchantlist: string;
        hexchance: number;
        enchantchance: number;
        alwaysenchanthex: boolean;
        unlockcurse: string[];
        hexlevelmin: number;
        hexlevelmax: number;
        enchantlevelmin: number;
        enchantlevelmax: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        maxEnchants?: undefined;
        hexscale?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
        arousalMode?: undefined;
        notag?: undefined;
        norestraint?: undefined;
        armor?: undefined;
    } | {
        name: string;
        max: number;
        minLevel: number;
        weight: number;
        count: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        submissive: number;
        arousalMode?: undefined;
        notag?: undefined;
        norestraint?: undefined;
        armor?: undefined;
    } | {
        name: string;
        arousalMode: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        notag: string[];
        norestraint: string[];
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
        armor?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        norestraint: string[];
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
        arousalMode?: undefined;
        notag?: undefined;
        armor?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        armor: string;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        norestraint: string[];
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
        arousalMode?: undefined;
        notag?: undefined;
    })[];
    lessergold: any[];
    silver: any[];
    RopeQuest: any[];
    LatexQuest: any[];
    LeatherQuest: any[];
    MetalQuest: any[];
    WillQuest: any[];
    ElementsQuest: any[];
    ConjureQuest: any[];
    IllusionQuest: any[];
};
type lootEventFunc = (Loot: any, Floor: number, Replacemsg: string, Lock: string, container?: KDContainer) => {
    value: number;
    Replacemsg: string;
};
declare let KDLootEvents: Record<string, lootEventFunc>;
interface KDMinorLootEntry {
    rarity: number;
    options: any[];
}
declare let KDMinorLootTable: {
    chest: {
        rarity: number;
        extraQuantity: number;
        options: ({
            name: string;
            minLevel: number;
            weight: number;
            allFloors: boolean;
            message: string;
            messageColor: string;
            quantity?: undefined;
            extraQuantity?: undefined;
        } | {
            name: string;
            minLevel: number;
            weight: number;
            quantity: number;
            extraQuantity: number;
            allFloors: boolean;
            message: string;
            messageColor: string;
        } | {
            name: string;
            minLevel: number;
            weight: number;
            quantity: number;
            allFloors: boolean;
            message: string;
            messageColor: string;
            extraQuantity?: undefined;
        })[];
    };
};
declare let KDMusicLoopTracksChance: {
    "AREA1-GRAVEYARD.ogg": number;
    "AREA2-ANCIENTTOMBS.ogg": number;
    "GENERIC-DOLLRACK.ogg": number;
    "AREA4-MAGICLIBRARY.ogg": number;
    "AREA5-UNDERGROUNDJUNGLE.ogg": number;
    "AREA6-CRYSTALCAVE.ogg": number;
    "AREA7-LOSTTEMPLE.ogg": number;
    "AREA8-ORRERY.ogg": number;
    "AREA9-BELLOWS.ogg": number;
    "Shopping.ogg": number;
    "MachinedPerfection_Loopable.ogg": number;
    "SlimyScience.ogg": number;
};
declare let KDMusicUpdateTime: number;
declare let KDMusicUpdateDuration: number;
declare let KDMusicY: number;
declare let KDMusicYMax: number;
declare let KDMusicYSpeed: number;
declare let KDMusicToast: string;
declare let WriteMusicToast: boolean;
declare function KDSendMusicToast(song: string, extraLen?: number): void;
declare function KDDrawMusic(delta: number): void;
declare let KDCurrentSong: string;
declare let KDNewSong: string;
declare let KDLastSong: string;
declare let KDCurrentLoops: number;
declare let KDCurrentFade: number;
declare let KDMusicFadeTime: number;
declare let KDMusicFadeInTime: number;
declare let KDMusicTickRate: number;
declare let KDCurrentMusicSound: HTMLAudioElement;
declare let KDCurrentMusicSoundUpdate: any;
declare let allowMusic: boolean;
declare function KDGetCurrentCheckpoint(): string;
declare function KDGetMusicCheckpoint(): any;
declare let lastKDMusicTick: number;
declare function KDUpdateMusic(): void;
declare let KDMusicBusy: boolean;
declare let KDMusicForce: boolean;
declare function KDPlayMusic(Sound: string, Volume?: number, force?: boolean): void;
declare function KDEndMusic(): void;
declare let KDDefaultNames: string[];
declare let KDNameList: {
    default: string[];
    nevermere: string[];
    bountyhunter: string[];
    japanese: string[];
    elf: string[];
    dragonheart: string[];
    maid: string[];
    russian: string[];
    elemental: string[];
    witch: string[];
    aztec: string[];
    space: string[];
    italian: string[];
    Fuuka: string[];
    TheWarden: string[];
    TheWardenFighter: string[];
    TheWardenWizard: string[];
    TheWardenRogue: string[];
    TheWardenDoll: string[];
    Dollmaker: string[];
    MaidKnightHeavy: string[];
    MaidKnightLight: string[];
    chinese: string[];
    vampire: string[];
    french: string[];
    science: string[];
    cthulu: string[];
    demon: string[];
    cyborg: string[];
    bast: string[];
    DragonGirl: string[];
};
declare function KDDelayedActionPrune(tags: string[]): void;
declare function KDAddDelayedAction(action: KDDelayedAction): void;
declare let KDDelayedActionUpdate: Record<string, (action: KDDelayedAction) => void>;
declare let KDDelayedActionCommit: Record<string, (action: KDDelayedAction) => void>;
declare let KDCommanderChokes: Record<string, {
    x: number;
    y: number;
    neighbors: number;
}>;
declare let KDUpdateChokes: boolean;
declare let KDStruggleAssisters: Record<string, number>;
declare let KDCapturers: Record<string, number>;
declare let KDCommanderRoles: Map<number, string>;
declare let KDCOMMANDERMAXNEIGHBORS: number;
declare let KDChokeTiles: string[];
declare function KDCommanderUpdate(delta: number): void;
declare function KDCommanderUpdateChokes(_data: KDCommanderOrderData): void;
declare function KDCommanderUpdateRoles(data: KDCommanderOrderData): void;
declare function KDCommanderUpdateOrders(data: KDCommanderOrderData): void;
declare function KDGetOrdersList(enemy: entity, data: KDCommanderOrderData): Record<string, number>;
declare let KDAwareEnemies: number;
declare let KDEnemiesTargetingPlayer: number;
declare let KDAssaulters: number;
declare let KDAssaulterList: any[];
declare let KDMaxAssaulters: number;
declare let KDStationedChokepoints: {};
declare let KDStationedChokepointsDist: {};
declare let KD_Avg_VX: number;
declare let KD_Avg_VY: number;
declare let KDCommanderOrders: Record<string, KDCommanderOrder>;
declare function KDGetBarricade(enemy: entity, x: number, y: number, checkpoint?: boolean, type?: string[]): string;
declare let KDBarricades: Record<string, KDBoobyTrap>;
declare function KDGetTrapSpell(enemy: entity, x: number, y: number, checkpoint?: boolean, type?: string[]): string;
declare let KDBoobyTraps: Record<string, KDBoobyTrap>;
declare function KDWillingToHelp(en: entity, enemy: entity): boolean;
declare let KDJourneyGraphics: import("pixi.js").Graphics;
declare let KDJourneyGraphicsLower: import("pixi.js").Graphics;
declare let KDJourneyGraphicsUpper: import("pixi.js").Graphics;
declare let KDGameBoardAddedJourney: boolean;
declare let KDMapModRefreshList: MapMod[];
declare let KDJourneySlotTypes: Record<string, (Predecessor: KDJourneySlot, x: number, y: number, forceCheckpoint?: string) => KDJourneySlot>;
declare function KDCreateJourneyArea(Width: number, PreviousSlot: KDJourneySlot, FinalConnection: KDJourneySlot, continueCheckpoints?: boolean): KDJourneySlot[];
declare function KDCommitJourneySlots(slots: KDJourneySlot[]): void;
declare function KDJourneySlotSuccessor(Slot: KDJourneySlot, xOffset: number, yOffset: number, forceCheckpoint?: string): KDJourneySlot;
declare function KDCullJourneyMap(): void;
declare let KDJourneyIndex: number;
declare function KDRenderJourneyMap(X: number, Y: number, Width?: number, Height?: number, ScaleX?: number, ScaleY?: number, xOffset?: number, yOffset?: number, spriteSize?: number, TextOffset?: number, allowScroll?: boolean, allowChoose?: boolean): void;
declare function KDGetLairName(lair: string): string;
declare function KDInitJourneyMap(Level?: number): void;
declare function KDDrawJourneyLine(x1: number, y1: number, x2: number, y2: number, color: number, Canvas?: import("pixi.js").Graphics, width?: number, alpha?: number): void;
declare function KDGetJourneySuccessorCheckpoint(previousCheckpoint: any, x: any): string;
declare let KDUI_CurrentContainer: string;
declare let KDUI_ContainerBackScreen: string;
declare let KDUI_Container_LastSelected: string;
interface KDContainer {
    name: string;
    location?: WorldCoord;
    point?: KDPoint;
    items: Record<string, item>;
    lock: string;
    type: string;
    validation?: string;
    filters?: string[];
}
declare function KDAddContainer(name: string, point?: KDPoint, location?: WorldCoord, appendCoords?: boolean, filters?: string[]): KDContainer;
declare function KDGetContainerName(name: string, point?: KDPoint, location?: WorldCoord): string;
declare function KDGetContainer(name: string, point?: KDPoint, location?: WorldCoord, create?: boolean, filters?: string[]): KDContainer;
declare function KDGetContainerFromTile(name: string, tile: any, point?: KDPoint, location?: WorldCoord, create?: boolean, filters?: string[]): KDContainer;
declare function KDDrawContainer(name: string, xOffset?: number, filters?: string[], invMsg?: string): void;
declare function KDCanDrop(item: item): boolean;
declare function KDValidateContainer(container: KDContainer): string;
declare let KDSpecialContainers: {
    WardenChest: (container: KDContainer) => "" | "KDWardenNeedSummit";
    PlayerChest: (container: KDContainer) => string;
};
declare let KDContainerVal: {};
declare let GroupHeights: {
    [_: string]: number;
};
declare let KDPoseHeights: {
    [_: string]: number;
};
interface GroupHeightData {
    C: Character;
    group: string;
    height: number;
}
declare function KDGetGroupHeight(C: Character, group: string): number;
declare let GroupDepths: {
    [_: string]: number;
};
declare let KDPoseDepths: {
    [_: string]: number;
};
interface GroupDepthData {
    C: Character;
    group: string;
    depth: number;
}
declare function KDGetGroupDepth(C: Character, group: string): number;
declare function KDGetPotentialBlockingRestraints(Group: string, _External?: boolean, specificItem?: item | NPCRestraint, player?: entity): (item | NPCRestraint)[];
declare function KDGetBlockersToAddRestraint(restraint: restraint, player?: entity, bypass?: boolean): (item | NPCRestraint)[];
declare function KDEnemyPassesSecurity(Group: string, enemy: entity): string;
interface KDCanPassSecurityData {
    blockers: KDBlockingItemToData[];
    success: boolean;
}
declare function KDEnemyCanPassSecurity(entity: entity, player: entity, item: item | NPCRestraint, group: string, bypass?: boolean): KDCanPassSecurityData;
interface KDBlockingItemToData {
    item: item | NPCRestraint;
    reason: string;
}
declare function KDGetAllBlockingItemsToRestraintsWithShrineTag(entity: any, player: any, tag: any): (item | NPCRestraint)[];
declare function KDGetBlockingItemsTo(entity: any, player: any, item: any, nounlock: any): KDBlockingItemToData[];
declare function KDGetBlockingItems(entity: any, player: any, group: any, nounlock: any): KDBlockingItemToData[];
declare function KDEnemyCantUnlock(entity: entity, item: item | NPCRestraint, player?: entity): string;
declare function KDEnemyCantUnlockRestraint(entity: entity, restraint: restraint, useDefaultLock?: boolean, useCurse?: boolean, player?: entity): string;
declare let KDGlobalEnemyRankRemoveModifier: number;
interface KDEnemyCantUnlockRestraintData {
    removeDiff: number;
    struggleDiff: number;
    enemyMod: number;
}
declare function KDEnemyCanUnlockLock(entity: entity, lock: string, item?: item | NPCRestraint, player?: entity): boolean;
declare function KDEnemyCanUncurseCurse(entity: entity, curse: string, item?: item | NPCRestraint, player?: entity): boolean;
declare function KDValidateTagForItem(tag: string, item: item | NPCRestraint): boolean;
declare function KDValidateTagForRestraint(tag: string, restraint: restraint): boolean;
declare let KDTagValidationForItem: Record<string, (tag: string, item: item | NPCRestraint) => boolean>;
declare let KDTagValidationForRestraint: Record<string, (tag: string, restraint: restraint) => boolean>;
interface HypnoButton {
    x: number;
    y: number;
    width: number;
    height: number;
    alpha: number;
    clicked?: boolean;
    duration: number;
    startTick: number;
    buff: string;
    amount: number;
    extratrance: number;
    textKey: string;
    textData: Record<string, string>;
    alphaRate: number;
    textKey_after: string;
    callback?: string;
    callbackdata?: any;
    player?: number;
}
declare let KDDollHypnoSuggestions: number;
declare let KDHypnoDefaultAlphaRate: number;
declare let KDMaxHypnoButtons: number;
declare function KDDrawHypnoOverlay(xoff: number, yoff: number, alpha: number): void;
declare let KDStandardHypnoDuration: number;
declare let KDMaxHypnoButtonPlacementAttempts: number;
declare let KDStandardHypnoHeight: number;
declare let KDStandardHypnoWidth: number;
declare function KDAddHypnoButton(buff: string, amount: number, textKey: string, textData?: Record<string, string>, textKey_after?: string, callback?: {
    name: string;
    data: any;
}, player?: number, duration?: number, extraTrance?: number, x?: number, y?: number): HypnoButton;
declare function KDDrawHypnoButton(button: HypnoButton, x: number, y: number, alpha: number): void;
declare let KDHypnoCallbacks: Record<string, (data: any) => void>;
declare let KDMagicLocks: string[];
declare let KDKeyedLocks: string[];
declare let KDFeetRopeLink: string[];
declare let KDFormFitting: string[];
declare let KDHarnessLink: string[];
declare let KDCorsetLink: string[];
declare let KDBindable: string[];
declare let KDBindableWrist: string[];
declare let KDBindableMinusCuffs: string[];
declare let KDDevices: string[];
declare let KDTallBootsLink: string[];
declare let KDTallBootsRender: string[];
declare let KDElbowBind: string[];
declare let KDBoxBind: string[];
declare let KDWrappable: string[];
declare let KDArmbinderLink: string[];
declare let KDBoxbinderLink: string[];
declare let KDDressLink: string[];
declare let KDJacketLink: string[];
declare let KDJacketRender: string[];
declare let KDTransportLink: string[];
declare let KDLegbinderLink: string[];
declare let KDLegbinderRender: string[];
declare let KDLegRopesBind: string[];
declare let KDLegRopesRender: string[];
declare let KDArmRopesRender: string[];
declare let KDBeltsBind: string[];
declare let KDBeltsRender: string[];
declare let KDTapeLink: string[];
declare let KDTapeRender: string[];
declare let KDRubberLink: string[];
declare let KDBlindfoldLink: string[];
declare let KDVisorLink: string[];
declare let KDWrappingLink: string[];
declare let KDMaskLink: string[];
declare let KDStuffingLink: string[];
declare let KDBallGagLink: string[];
declare let KDFlatGagLink: string[];
declare let KDMuzzleGagLink: string[];
declare let KDPlugGagLink: string[];
declare let KDCollarLink: string[];
declare let KDCollarRender: string[];
declare let KDHighCollarRender: string[];
declare let KDCollarModuleLink: string[];
declare let KDGlovesLink: string[];
declare let KDSocksLink: string[];
declare let KDBeltLink: string[];
declare const KinkyDungeonRestraints: restraint[];
declare let KDControlHarnessCategories: Record<string, any>;
declare let KDSFXGroups: Record<string, KDSFXGroup>;
declare let KDCollectionTab: string;
declare let KDCurrentFacilityTarget: string;
declare let KDCurrentFacilityCollectionType: string[];
declare let KDCurrentRestrainingTarget: number;
declare let KDCollectionTabStatus: string;
declare let KDCollectionTabStatusOptions: string[];
declare let KDPromotableStatus: string[];
declare let KDSummonableStatus: string[];
declare let KDFacilityCollectionDataTypes: string[];
declare let KDFacilityCollectionDataTypeMap: {
    Prisoners: string;
    Servants: string;
};
declare let KDCollectionTabButtons: string[];
declare let KDCollectionTabButtonFilter: {
    FacilityQuick: () => number;
};
declare let KDCollFilter: string;
type CollectionFilterItem = {
    Current: number;
    Options: string[];
    FilterCode: Record<string, (value: KDCollectionEntry) => boolean>;
};
declare let KDCollectionFilters: Record<string, CollectionFilterItem>;
declare function KDDrawCollectionFilters(x: number, y: number): void;
declare function KDDrawCollectionTabOptions(x: number, y: number): void;
declare function KinkyDungeonDrawCollection(xOffset?: number): void;
declare function KinkyDungeonDrawBondage(xOffset?: number): void;
declare function KDCollectionImage(id: number): string;
declare function KDAddOpinionPersistent(id: number, amount: number): void;
declare function KDGetModifiedOpinionID(id: number, allowFaction?: boolean, allowSub?: boolean, allowPerk?: boolean, allowOnlyPosNegFaction?: number): number;
declare function KDCapturable(enemy: entity): boolean;
declare function KDCapturableType(enemy: enemy): boolean;
declare function KDAddCollection(enemy: entity, type?: string, status?: string, servantclass?: string): void;
declare function KDUpdatePersistentNPCFlags(delta: number): void;
declare function KDUpdateCollectionFlags(delta: number): void;
declare function KDGetCharacter(entity: entity): Character;
declare function KDGetCharacterID(C: Character): number;
declare function KDGetCharacterEntity(C: Character): entity;
declare let KDRenameNPC: boolean;
declare let KDToggleBigView: boolean;
declare function KDDrawSelectedCollectionMember(value: KDCollectionEntry, x: number, y: number, index: number, tab?: string): void;
declare let KDLastRestrainingTarget: number;
declare let KDLastRestrainingTargetTime: number;
declare let KDLastRestrainingTargetTimeDelay: number;
declare function KDDrawCollectionRestrain(id: number, x: number, y: number): void;
declare function KDGetVirtualCollectionEntry(id: number): KDCollectionEntry;
declare function KDGetVirtualCollectionEntryEntity(enemy: entity): KDCollectionEntry;
declare function KDDrawCollectionRestrainMain(id: number, x: number, y: number): void;
declare function KDIsImprisonedByEnemy(id: number): boolean;
declare function KDNPCUnavailable(id: number, status: string): boolean;
declare let KDNPCChar: Map<number, Character>;
declare let KDNPCChar_ID: Map<Character, number>;
declare let KDNPCStyle: Map<any, any>;
declare let KDCollectionSelected: number;
declare let KDCollectionIndex: number;
declare let KDCollectionGuestRows: number;
declare let KDCollectionRows: number;
declare let KDCollectionColumns: number;
declare let KDCollectionSpacing: number;
declare let KDDrawnCollectionInventory: KDCollectionEntry[];
declare function KDResetCollectionUI(): void;
declare function KDDrawCollectionInventory(x: number, y: number, drawCallback?: (value: KDCollectionEntry, X: number, Y: number) => void): void;
declare function KDValidateEscapeGrace(value: KDCollectionEntry): boolean;
declare function KDSortCollection(): void;
declare function KDGenEnemyName(enemy: entity): string;
declare function KDGetEnemyName(enemy: entity): string;
declare let KDCollectionTabScreen: {};
declare let KDCollectionTabDraw: Record<string, KDCollectionTabDrawDef>;
declare function KDDrawNPCBars(value: KDCollectionEntry, x: number, y: number, width: number): number;
declare function KDCanPromote(value: KDCollectionEntry): boolean;
declare function KDRemoveFromAllFacilities(id: number): void;
declare function KDApplyRecruitType(value: KDCollectionEntry): void;
declare function KDPromote(value: KDCollectionEntry): void;
declare function KDIsInSummit(): boolean;
declare function KDTickAutorelease(): void;
declare function KDDoCollect(entity: entity): boolean;
declare function KDDefectIfPossible(entity: entity, defectTo?: string): boolean;
declare function KDGenCharForCollection(value: KDCollectionEntry, enemyType: enemy): void;
interface CollectionWanderType {
    spawnRoom: string;
    spawnCondition?: (value: KDCollectionEntry, entity: entity) => entity;
    spawnConditionRemote?: (value: KDCollectionEntry) => entity;
    maintain: (value: KDCollectionEntry, entity: entity, delta: number) => void;
    onChangeFacility: (value: KDCollectionEntry, entity: entity, fromFacility: string, toFacility: string) => string;
}
declare function KDTickCollectionWanderCollectionEntry(value: KDCollectionEntry): void;
declare function KDTickCollectionWanderEntity(entity: entity, delta: number): void;
declare function KDChangeEntityFacilityAction(entity: entity, action: string): void;
declare function KDSetServantSpawnTemplate(e: entity): void;
declare function KDSetPrisonerSpawnTemplate(e: entity): void;
declare let KDCollectionWanderTypes: Record<string, CollectionWanderType>;
interface CustomCancel {
    cancel: () => void;
    condition: () => boolean;
}
declare function KDNonContextActions(mobile: boolean, textArea: boolean): boolean;
declare let KDCustomCancels: {
    condition: () => boolean;
    cancel: () => boolean;
}[];
declare function KDDrawManagement(x: number, y: number, width: number): number;
declare function KDGetManagementEfficiency(): number;
declare function KDDrawWarden(x: number, y: number, width: number): number;
declare function KDUpdateWarden(delta: number): void;
declare let KDWardenChestFilters: string[];
declare let KDPlayerChestFilters: string[];
declare let KDSelectedRecyclerCategory: string;
declare let KDSelectedRecyclerItem: string;
declare let KDRecyclerCatsPerRow: number;
declare let KDRecyclerItemsPerRow: number;
declare let KDRecyclerCatSpacing: number;
interface RecyclerResource {
    Yield: number;
    Rate: number;
}
declare let RecyclerResources: Record<string, RecyclerResource>;
interface RecyclerOutputs {
    Rope: number;
    Leather: number;
    Metal: number;
    Latex: number;
    Rune: number;
}
declare function KDBaseRecycleOutputs(): RecyclerOutputs;
declare function KDGetRecyclerRate(Servants: number[]): Record<string, number>;
declare function KDRecycleItem(item: item, count: number, container: KDContainer): RecyclerOutputs;
declare function KDChangeRecyclerInput(amount: RecyclerOutputs, mult?: number): void;
declare function KDChangeRecyclerResources(amount: RecyclerOutputs, mult?: number): void;
declare function KDHasRecyclerResources(amount: RecyclerOutputs, mult?: number): boolean;
declare function KDHasRecyclerInput(amount: RecyclerOutputs): boolean;
declare function KDRecycleString(item: item, quantity: number, container: KDContainer): string;
declare function KDDrawRecycler(x: number, y: number, width: number): number;
declare function KDDrawRecyclerBlueprints(cats: KDBlueprintCategory[], x: number, y: number, width: number): void;
declare function KDListRecyclerCats(): KDBlueprintCategory[];
declare function KDMapToRecycleOutputs(amount: Record<string, number>): RecyclerOutputs;
declare function KDRecyclerResources(restraint: restraint, mult?: number, variant?: string): Record<string, number>;
declare function KDAutoGenRestraintBlueprint(name: string, category: string, applyvariant: string, mult?: number, forceResourceCost?: Record<string, number>, bonusResource?: Record<string, number>, count?: number): KDBlueprint;
declare function KDRecycleResourceString(allowZero?: boolean, prefix?: string, noLabel?: boolean): string;
interface KDBlueprint {
    name: string;
    item: string;
    type: string;
    applyvariant?: string;
    recyclecost?: Record<string, number>;
    count?: number;
    recyclecategory?: string;
    prereq: () => boolean;
}
interface KDBlueprintCategory {
    name: string;
    prereq: () => boolean;
    items: KDBlueprint[];
}
declare let KDRecyclerCategories: Record<string, KDBlueprintCategory>;
declare function KDDrawCuddleLounge(x: number, y: number, width: number): number;
declare let KDCuddleLoungePersonalityMult: {
    Servant: {
        Brat: number;
        Sub: number;
        Dom: number;
    };
    Prisoner: {
        Brat: number;
        Sub: number;
        Dom: number;
    };
};
declare function KDCuddleLoungeGain(): {
    servants: number;
    prisoners: number;
    servantPoints: number;
    prisonerPoints: number;
};
declare let FacilitiesIndex: number;
interface FacilitiesData {
    Recycler_Rope: number;
    Recycler_Latex: number;
    Recycler_Metal: number;
    Recycler_Leather: number;
    Recycler_Rune: number;
    RecyclerInput_Rope: number;
    RecyclerInput_Latex: number;
    RecyclerInput_Metal: number;
    RecyclerInput_Leather: number;
    RecyclerInput_Rune: number;
    Servants_Recycler: number[];
    Prisoners_Recycler: number[];
    Servants_CuddleLounge: number[];
    Prisoners_CuddleLounge: number[];
    Servants_Management: number[];
    Servants_Warden: number[];
    Warden_TightenedCount: number;
}
declare let FacilitiesDataBase: FacilitiesData;
declare function InitFacilities(): void;
declare let FacilityValidationTags: string[];
declare function KDValidateAllFacilities(): void;
declare function KDUpdateFacilities(delta: number): void;
declare function KinkyDungeonDrawFacilities(xOffset?: number): void;
declare function KDValidateServant(value: KDCollectionEntry, facility: string, type: string): boolean;
declare function KDFixupBossServants(): void;
declare function KDDrawFacilitiesList(xOffset: any): void;
declare function KDGetServantEnemy(servant: KDCollectionEntry): enemy;
declare let KDFacilityCollectionCallback: (id: number) => boolean;
declare function KDDrawServantPrisonerList(facility: string, x: number, y: number, width: number, spacing?: number, setCallback?: (id: number) => boolean): number;
interface Facility {
    draw: (x: number, y: number, wdith: number) => number;
    update: (delta: number) => boolean;
    priority: number;
    prereq: () => boolean;
    locked?: () => boolean;
    ping?: (XXQuik: number, YYQuik: number, quikCurrentCol: number, quikSpacing: number, quikSize: number) => void;
    goldCost: () => number;
    maxPrisoners: () => number;
    maxServants: () => number;
    events?: KinkyDungeonEvent[];
    defaultData: Record<string, any>;
    servantPrisonerCallback?: (number: any) => boolean;
}
declare let KDFacilityTypes: Record<string, Facility>;
declare let KDNPCBindingSelectedSlot: NPCBindingSubgroup;
declare let KDNPCBindingSelectedRow: NPCBindingGroup;
declare let KDSelectedGenericRestraintType: string;
declare let KDSelectedGenericBindItem: string;
declare let UpdateRestraintBindingData: boolean;
declare let KDNPCRestraintBindingData: Record<string, string[]>;
interface NPCRestraint extends Named {
    name: string;
    inventoryVariant?: string;
    events?: KinkyDungeonEvent[];
    powerbonus?: number;
    lock: string;
    variant?: string;
    curse?: string;
    id: number;
    faction?: string;
    conjured?: boolean;
    flags?: Record<string, number>;
}
declare function KDNPCRestraintSlotOrder(): string[];
declare function KDDrawNPCRestrain(npcID: number, restraints: Record<string, NPCRestraint>, x: number, y: number): void;
declare let KDNPCBindingPalette: boolean;
declare let KDNPCBindingGeneric: boolean;
declare let KDDefaultNPCBindPalette: string;
declare function KDGetNPCRestraints(id: number): Record<string, NPCRestraint>;
declare function KDSetNPCRestraints(id: number, restraints: Record<string, NPCRestraint>): void;
declare function KDSetNPCRestraint(id: number, slot: string, restraint: NPCRestraint, NoEvents?: boolean, slotsToFill?: string[], container?: any, bypass?: boolean): item[];
declare function KDSetBindingSlot(sgroup: NPCBindingSubgroup, row: NPCBindingGroup): boolean;
declare function KDNPCRestraintSize(restraint: restraint, sgroup: NPCBindingSubgroup, row: NPCBindingGroup): number;
declare function KDGetRestraintsForCharacter(char: any): (item | NPCRestraint)[];
declare function KDGetRestraintsForEntity(entity: entity): (item | NPCRestraint)[];
declare function KDGetRestraintsForID(id: number): (item | NPCRestraint)[];
declare function KDNPCRestraintValidLayers(restraint: restraint, sgroup: NPCBindingSubgroup, row: NPCBindingGroup, restraints?: Record<string, NPCRestraint>, allowSameID?: number, power?: number): NPCBindingSubgroup[];
declare function KDRowItemIsValid(restraint: restraint, sgroup: NPCBindingSubgroup, row: NPCBindingGroup, restraints: Record<string, NPCRestraint>, treatAsEmpty?: boolean, power?: number): boolean;
declare function KDGetEncaseGroupRow(id: string): NPCBindingGroup;
declare function KDGetEncaseGroupSlot(id: string): NPCBindingSubgroup;
declare function KDNPCRefreshBondage(id: number, player: number, force?: boolean, allowConjured?: boolean, container?: Record<string, item>): void;
interface SetNPCRestraintData extends NPCRestraint {
    slot: string;
    restraint: string;
    restraintid: number;
    npc: number;
    player: number;
    force?: boolean;
    noInventory?: boolean;
}
declare function KDNPCRestraintTieUp(id: number, restraint: NPCRestraint, mult?: number): void;
declare function KDCanEquipItemOnNPC(r: restraint, id: number, willing: boolean, lock: string, curse: string, allowSame?: boolean): string;
declare function KDFreeNPCRestraints(id: number, player: number): void;
declare function KDInputSetNPCRestraint(data: SetNPCRestraintData, container?: Record<string, item>, bypass?: boolean): boolean;
declare function KDReturnNPCItem(item: item, container?: Record<string, item>): void;
declare function KDGetRestraintBondageStats(item: Named, target: entity): KDBondageStats;
declare function KDGetExpectedBondageAmount(id: number, target: entity, allowConjured?: boolean, includeUnlocked?: boolean): Record<string, number>;
declare function KDGetExpectedBondageAmountTotal(id: number, target: entity, allowConjured?: boolean, includeUnlocked?: boolean): number;
declare function KDGetNPCStrugglePoints(id: number): Record<string, number>;
declare function KDGetNPCEscapableRestraints(id: number, target: entity, bypass: boolean, helper: entity): {
    slot: string;
    inv: NPCRestraint;
    points: number;
    target: number;
}[];
declare function KDNPCStruggleTick(id: number, delta: number): {
    slot: string;
    inv: NPCRestraint;
    points: number;
    target: number;
};
declare function KDNPCDoStruggle(id: number, slot: string, restraint: NPCRestraint, chance: number): string;
declare function KDWantsToEscape(value: KDCollectionEntry): boolean;
declare function KDIsOKWithRestraining(value: KDCollectionEntry): boolean;
declare function KDCollectionNPCEscapeTicks(ticks?: number): void;
declare function KDRunNPCEscapeTick(id: number, ticks: number): void;
declare function KDNPCStruggleThreshMult(enemy: entity): number;
declare function KDNPCStruggleThreshMultType(enemy: enemy): number;
declare function KDTriggerNPCEscape(maxNPC?: number): number;
declare function KDNPCEscape(entity: entity): void;
declare let KDGenericMatsPerRow: number;
declare let KDGenericMatsPerRowShowAll: number;
declare let KDShowAllGenericCategories: boolean;
declare let KDGenericBindsPerRow: number;
declare let KDGenericBindSpacing: number;
interface KDDrawGenericRestrainCategoriesData {
    allSlots: boolean;
    showCategories: boolean;
    cats: RestraintGenericType[];
    selectedcat: RestraintGenericType;
    index: number;
    iin: number;
    x: number;
    y: number;
    secondXX: number;
    XX: number;
    YY: number;
    categoryItem: item;
    highlightedItem: string;
    colCounter: number;
    matsPerRow: number;
}
declare function KDDrawGenericRestrainCategories(data: KDDrawGenericRestrainCategoriesData, slot: NPCBindingSubgroup): void;
declare function KDDrawGenericNPCRestrainingUI(cats: RestraintGenericType[], x: number, y: number, currentItem: NPCRestraint, slot: NPCBindingSubgroup, id: number, callback: (currentItem: NPCRestraint, restraint: restraint, slot: NPCBindingSubgroup, item: item, count: number, itemtype: RestraintGenericTypeSlot) => void, categoryItem: item, showCategories: boolean, showOtherSlots: boolean, matsPerRow: number, bindsPerRow: number, toff?: number): void;
declare function KDDrawGenericCharacterRestrainingUI(cats: RestraintGenericType[], x: number, y: number, currentItem: NPCRestraint, slot: NPCBindingSubgroup, id: number, callback: (currentItem: NPCRestraint, restraint: restraint, slot: NPCBindingSubgroup, item: item, count: number, itemtype: RestraintGenericTypeSlot) => void, categoryItem: item, showCategories: boolean, showOtherSlots: boolean, matsPerRow: number, bindsPerRow: number, toff?: number, callbackPlayer?: (currentItem: item, restraint: restraint, item: item, count: number) => void, canAddcallback?: (restraint: restraint) => boolean): void;
interface canNPCRemoveData {
    restraint: NPCRestraint;
    slot: string;
    canRemove: boolean;
    canRemovePower: number;
    id: number;
    entity: entity;
    encased: boolean;
    helper: entity;
}
declare function KDCanNPCRemoveItem(id: number, restraint: NPCRestraint, slot: string, bypass: boolean, helper?: entity, entity?: entity): boolean;
declare function KDCanOverwriteNPCRestraint(toAdd: NPCRestraint, current: NPCRestraint): boolean;
declare let KDAutoBindRestraints: Record<string, NPCRestraint>;
declare let KDAutoBindRestraintsName: string;
declare let KDCollQuickFacSpacing: number;
declare let KDCollQuickFacSize: number;
declare let KDCollectionReleaseSelection: Record<string, boolean>;
declare function KDCanRelease(id: number): boolean;
declare function KDCanRemoveGuest(id: number): boolean;
declare function KDCanRansom(id: number): boolean;
declare function KDRansomValue(id: number): number;
declare function KDIsInPlayerBase(id: number): boolean;
declare function KDReleasePenalty(id: number, player: number): void;
declare function KDReleasePenaltyEntity(entity: entity, player: number): void;
declare function KDReleaseNPC(id: number, player: number): void;
interface NPCBindingGroup {
    id: string;
    encaseGroup: NPCBindingSubgroup;
    layers: NPCBindingSubgroup[];
}
interface NPCBindingSubgroup {
    id: string;
    allowedTags: string[];
    allowedGroups: string[];
    encasedBy: string[];
    requirePerk?: string;
    noPerk?: string;
}
declare let NPCBindingRestraintSize: {
    Heels: number;
    Straitjackets: number;
    PlugGags: number;
    Yokes: number;
    Fiddles: number;
    Spreaderbars: number;
    Petsuits: number;
};
declare let NPCBindingMouthSlots: string[];
declare let NPCBindingNeckSlots: string[];
interface KDBondageStats {
    level: number;
    type: string;
    mult: number;
    amount: number;
    conditions?: string[];
    stayconditions?: string[];
}
declare let KDDeviceRow: NPCBindingGroup;
declare let NPCBindingGroups: NPCBindingGroup[];
declare let KDBondageConditions: Record<string, (r: restraint, id: number, willing: boolean, lock: string, curse: string) => string>;
declare let KDQuickBindConditions: Record<string, (target: entity, player: entity, restraint: restraint, item: item) => boolean>;
interface RestraintGenericType {
    raw?: string;
    consumableRaw?: string;
    items: RestraintGenericTypeSlot[];
}
interface RestraintGenericTypeSlot {
    count: number;
    restraint: string;
    icon?: string;
    variant?: string;
    events?: KinkyDungeonEvent[];
    powerbonus?: number;
    inventoryVariant?: string;
}
declare let KDRestraintGenericTypes: Record<string, RestraintGenericType>;
declare let KDGenericRestraintRawCache: Record<string, {
    raw: string;
    count: number;
}>;
declare let KDGenericRestraintRawOriginalCache: Record<string, {
    name: string;
    count: number;
}[]>;
declare let KDGenericRestraintRawInfo: Record<string, string>;
declare function KDRefreshRawCache(): void;
declare let onlineModsLoaded: boolean;
declare let onlineModsDeleted: boolean;
declare const kdModList = "KinkyDungeonModList";
declare const getOnlineModNameList: () => string[];
declare const batchSaveMods: (files: File[]) => Promise<void>;
declare const autoLoadMods: () => Promise<File[]>;
declare const kdModStore = "KinkyDungeonModSave";
declare function KinkyDungeonModDbOpen(): Promise<IDBDatabase>;
declare function KinkyDungeonModSave(file: File, fileName: string): Promise<{
    success: boolean;
    msg?: string;
    err?: string;
}>;
declare function KinkyDungeonModLoad(modName: string): Promise<File>;
declare function KinkyDungeonModDelete(modName: string): Promise<unknown>;
declare let KDModsLoaded: boolean;
declare let KDMods: Record<string, File>;
declare let KDModInfo: Record<string, MODJSON>;
declare let KDModIndex: number;
declare let KDModCount: number;
declare let KDModSpacing: number;
declare let KDGetMods: boolean;
declare let KDOffline: boolean;
declare let KDModCompat: {
    "KinkyDungeonHiddenFactions.push(": string;
    "KDSetNPCLocation(": string;
    "KinkyDungeonChangeDesire(": string;
    "KinkyDungeonChangeCharge(": string;
    "KinkyDungeonChangeWill(": string;
    "KinkyDungeonChangeStamina(": string;
    "KinkyDungeonChangeMana(": string;
    "KDChangeBalance(": string;
    "KinkyDungeonChangeDistraction(": string;
    "KinkyDungeonCanPickStat(": string;
};
declare function CharacterLoadCanvas(): void;
declare let KDModToggleTab: string;
declare let KDModListPage: number;
declare let KDModPage: number;
declare let KDModSettings: {};
declare let KDModConfigs: {};
declare let KDModFileCount: number;
interface MODJSON {
    modname: string;
    moddesc: string;
    author: string;
    modbuild: string;
    gamemajor: number;
    gameminor: number;
    gamepatch_min: number;
    gamepatch_max: number;
    priority: number;
    dependencies?: Record<string, number>;
    optional?: Record<string, string>;
    incompatibilities?: Record<string, string>;
    loadbefore?: string[];
    loadafter?: string[];
    fileorder?: string[];
}
declare function KDLoadModJSON(json: string): MODJSON;
declare function KDGetModsLoad(execute: any): Promise<void>;
declare function KDDrawMods(): void;
declare function getFileInput(callback?: any, ...callbackArgs: any[]): void;
declare function getFileInputType(Type?: string, callback?: any, ...callbackArgs: any[]): void;
declare function KDLoadMod(files: any[]): Promise<void>;
declare let KDExecuted: boolean;
declare let KDLoading: boolean;
declare function KDExecuteModsAndStart(): Promise<void>;
declare function KDUpdateModInfo(): Promise<void>;
declare let KDModLoadOrder: {
    mod: File;
    name: string;
    fileorder: string[];
}[];
declare function KDExecuteMods(): Promise<void>;
declare function KDDrawModConfigs(): void;
declare function KDLoadModSettings(): void;
declare const model: {
    getEntries(file: any, options: any): any;
    getURL(entry: any, options: any): Promise<string>;
    getEntryFile: (entry: any, creationMethod: any, onend: any, onprogress: any) => void;
};
declare const OGVCompat: any;
declare const OGVPlayer: any;
declare const PIXIWidth = 2000;
declare const PIXIHeight = 1000;
declare let isSafari: boolean;
declare let OGVSupported: boolean;
declare let resolution: number;
declare var PIXIapp: import("pixi.js").Application<import("pixi.js").ICanvas>;
declare let ticker: import("pixi.js").Ticker;
declare let ContextLostAlready: boolean;
declare let ContextLostFixedAlready: boolean;
declare let TimerRunInterval: number;
declare let TimerLastTime: number;
declare let CurrentTime: number;
declare let TimerLastCycleCall: number;
declare function MainRun(Timestamp: number): void;
declare function KeyDown(event: KeyboardEvent): void;
declare function Click(event: MouseEvent): void;
declare function TouchStart(event: TouchEvent): void;
declare function TouchEnd(event: TouchEvent): void;
declare function TouchMove(touch: Touch): void;
declare function MouseMove(event: MouseEvent, allowOffsetting: boolean): void;
declare function LoseFocus(event: MouseEvent): void;
declare let erasefragment: string;
declare let erasevertex: string;
declare let occlusionfragment: string;
declare let occlusionvertex: string;
declare let displacefragment: string;
declare let displacevertex: string;
declare class EraseFilter extends PIXI.Filter {
    maskSprite: ISpriteMaskTarget;
    maskMatrix: PIXIMatrix;
    constructor(sprite: ISpriteMaskTarget);
    apply(filterManager: PIXIFilterSystem, input: PIXIRenderTexture, output: PIXIRenderTexture, clearMode: PIXICLEAR_MODES): void;
    get map(): PIXITexture;
    set map(value: PIXITexture);
}
declare class DisplaceFilter extends PIXI.Filter {
    maskSprite: ISpriteMaskTarget;
    maskMatrix: PIXIMatrix;
    scale: PIXIPoint;
    constructor(sprite: ISpriteMaskTarget, scale?: number);
    apply(filterManager: PIXIFilterSystem, input: PIXIRenderTexture, output: PIXIRenderTexture, clearMode: PIXICLEAR_MODES): void;
    get map(): PIXITexture;
    set map(value: PIXITexture);
}
declare class OcclusionFilter extends PIXI.Filter {
    maskSprite: ISpriteMaskTarget;
    maskMatrix: PIXIMatrix;
    scale: PIXIPoint;
    constructor(sprite: ISpriteMaskTarget, scale?: number);
    apply(filterManager: PIXIFilterSystem, input: PIXIRenderTexture, output: PIXIRenderTexture, clearMode: PIXICLEAR_MODES): void;
    get map(): PIXITexture;
    set map(value: PIXITexture);
}
declare let KDFontName: string;
interface KDFontDef {
    alias: string;
    src: string;
    mono: boolean;
    width: number;
}
declare let KDBaseFonts: (string | KDFontDef)[][];
declare let KDFonts: Map<any, any>;
declare let KDFontsAlias: Map<any, any>;
declare let KDSelectedFont: string;
declare let KDSelectedFontListIndex: number;
declare let KDSelectedFontList: any[];
declare let KDButtonFont: string;
declare let KDButtonFontListIndex: number;
declare let KDButtonFontList: any[];
declare let KDOptimizeDisplacementMapInfo: Record<string, {
    xPad: number;
    yPad: number;
}>;
declare let DisplacementMaps: any[];
declare let DisplacementScale: number;
declare let displacementList: string[];
declare let linearList: any[];
declare let nearestList: string[];
declare let CurrentLoading: string;
declare let lastProgress: number;
declare function incrementProgress(amount: any): (progress: any) => void;
declare let buildSuff: string;
declare function LoadTextureAtlas(list: any, scale_mode: any, preload?: boolean): Promise<void>;
declare function PreloadDisplacement(list: any): Promise<void>;
declare function load(): Promise<void>;
declare function ToNamedMap<N extends Namable>(Named: N[]): {
    [_: string]: N;
};
declare function ToMap(Array: string[], ...Extra: string[]): {
    [_: string]: boolean;
};
declare function ToMapSubtract(Array: string[], Subtract: string[], ...Extra: string[]): {
    [_: string]: boolean;
};
declare function ToMapDefault(Array: string[], Default?: string): {
    [_: string]: string;
};
declare function ToMapDupe(Array: string[], ExtraMap?: Record<string, string>): {
    [_: string]: string;
};
declare function GenPlaceholderModelNames(): string;
declare function getOldPronounPairs(): any[];
declare let LAYERS_BASE: string[];
interface metaLayerBound {
    id: string;
    start: string;
    end: string;
}
declare let metaLayerBoundaries: metaLayerBound[];
declare let LayerGroups: {
    Breastplate: {
        [_: string]: boolean;
    };
    ChestBinding: {
        [_: string]: boolean;
    };
    TopBinding: {
        [_: string]: boolean;
    };
    CrotchRope: {
        [_: string]: boolean;
    };
    ButtSleeves: {
        [_: string]: boolean;
    };
    NeckCorsetOverStraps: {
        [_: string]: boolean;
    };
    BustierPoses: {
        [_: string]: boolean;
    };
    BustierPoses2: {
        [_: string]: boolean;
    };
    BustSize: {
        [_: string]: boolean;
    };
    SlimeLegs: {
        [_: string]: boolean;
    };
    SlimeFeet: {
        [_: string]: boolean;
    };
    Shoes: {
        [_: string]: boolean;
    };
    BelowShoes: {
        [_: string]: boolean;
    };
    SlimeAnkles: {
        [_: string]: boolean;
    };
    SlimeTorsoLower: {
        [_: string]: boolean;
    };
    Petsuit: {
        [_: string]: boolean;
    };
    Legbinder: {
        [_: string]: boolean;
    };
    SlimeThighs: {
        [_: string]: boolean;
    };
    Boots: {
        [_: string]: boolean;
    };
    Heels: {
        [_: string]: boolean;
    };
    BalletHeels: {
        [_: string]: boolean;
    };
    BalletHeelsCuffs: {
        [_: string]: boolean;
    };
    HeelRight: {
        [_: string]: boolean;
    };
    LegbinderRight: {
        [_: string]: boolean;
    };
    BalletHeelRight: {
        [_: string]: boolean;
    };
    Arms: {
        [_: string]: boolean;
    };
    ArmsAll: {
        [_: string]: boolean;
    };
    ArmsAllAndHarness: {
        [_: string]: boolean;
    };
    Rope1: {
        [_: string]: boolean;
    };
    RopeTorso: {
        [_: string]: boolean;
    };
    CorsetTorso: {
        [_: string]: boolean;
    };
    TightChastityBelt: {
        [_: string]: boolean;
    };
    PetsuitArms: {
        [_: string]: boolean;
    };
    RopeFore: {
        [_: string]: boolean;
    };
    RopeThighs: {
        [_: string]: boolean;
    };
    RopeCalf: {
        [_: string]: boolean;
    };
    FootRightKneel: {
        [_: string]: boolean;
    };
    Stockings: {
        [_: string]: boolean;
    };
    StockingLeft: {
        [_: string]: boolean;
    };
    StockingRight: {
        [_: string]: boolean;
    };
    ShoeLeft: {
        [_: string]: boolean;
    };
    ShoeRight: {
        [_: string]: boolean;
    };
    ToeTie: {
        [_: string]: boolean;
    };
    Ribbon1: {
        [_: string]: boolean;
    };
    RibbonTorso: {
        [_: string]: boolean;
    };
    RibbonFore: {
        [_: string]: boolean;
    };
    CorsetBra: {
        [_: string]: boolean;
    };
    ShirtCutoffBra: {
        [_: string]: boolean;
    };
    MaidArmPoofRight: {
        [_: string]: boolean;
    };
    RibbonThighs: {
        [_: string]: boolean;
    };
    RibbonCalf: {
        [_: string]: boolean;
    };
    RibbonToeTie: {
        [_: string]: boolean;
    };
    LegCuffs: {
        [_: string]: boolean;
    };
    Yoke: {
        [_: string]: boolean;
    };
    Fiddle: {
        [_: string]: boolean;
    };
    Cuffs: {
        [_: string]: boolean;
    };
    Mitts: {
        [_: string]: boolean;
    };
    MittL: {
        [_: string]: boolean;
    };
    MittR: {
        [_: string]: boolean;
    };
    RightHand: {
        [_: string]: boolean;
    };
    HairHelmet: {
        [_: string]: boolean;
    };
    HairBlockBF: {
        Blindfold: boolean;
    };
    EarsHelmet: {
        [_: string]: boolean;
    };
    Waistbelts: {
        [_: string]: boolean;
    };
    Skirts: {
        [_: string]: boolean;
    };
    SkirtsMinusLB: {
        [_: string]: boolean;
    };
    Xray: {
        [_: string]: boolean;
    };
    WrappingLegsOver: {
        WrappingLegsOver2: boolean;
        LegbinderLegsOver2: boolean;
        WrappingLegsOver: boolean;
        LegbinderLegsOver: boolean;
        WrappingLegs: boolean;
        WrappingLegs2: boolean;
    };
    BindWristLeft: {
        BindWristLeft: boolean;
        BindForeWristLeft: boolean;
        BindCrossWristLeft: boolean;
    };
    BindWristRight: {
        BindWristRight: boolean;
        BindForeWristRight: boolean;
        BindCrossWristRight: boolean;
    };
    XrayFace: {
        [_: string]: boolean;
    };
    FaceGag: {
        [_: string]: boolean;
    };
    XrayPanties: {
        [_: string]: boolean;
    };
    XrayBra: {
        [_: string]: boolean;
    };
    Bubble: {
        [_: string]: boolean;
    };
    All: {
        [_: string]: boolean;
    };
};
declare let LayerProperties: {
    ShoeLeftOver: {
        Parent: string;
    };
    ShoeLeftUnder: {
        Parent: string;
    };
    ShoeRightOver: {
        Parent: string;
    };
    ShoeRightUnder: {
        Parent: string;
    };
    FurnitureFront: {
        Parent: string;
    };
    FurnitureBack: {
        Parent: string;
    };
    Glasses: {
        Parent: string;
    };
    Eyes: {
        Parent: string;
    };
    Hair: {
        Parent: string;
    };
    HairFront: {
        Parent: string;
    };
    Ahoge: {
        Parent: string;
    };
    HairOver: {
        Parent: string;
    };
    HairMiddle: {
        Parent: string;
    };
    HairBack: {
        Parent: string;
    };
    HairPonytail: {
        Parent: string;
    };
    Mouth: {
        Parent: string;
    };
    Blush: {
        Parent: string;
    };
    Fear: {
        Parent: string;
    };
    Brows: {
        Parent: string;
    };
    Ears: {
        Parent: string;
    };
    Nose: {
        Parent: string;
    };
    InflatableHead: {
        Parent: string;
    };
    Hat: {
        Parent: string;
    };
    Hood: {
        Parent: string;
    };
    HeadbandDeco: {
        Parent: string;
    };
    Headband: {
        Parent: string;
    };
    Mask: {
        Parent: string;
    };
    MaskOver: {
        Parent: string;
    };
    MouthProp: {
        Parent: string;
    };
    Goggles: {
        Parent: string;
    };
    BlindfoldWrap: {
        Parent: string;
    };
    Blindfold: {
        Parent: string;
    };
    GagOver: {
        Parent: string;
    };
    GagMuzzleStraps: {
        Parent: string;
    };
    GagMuzzle: {
        Parent: string;
    };
    GagFlatStraps: {
        Parent: string;
    };
    GagFlat: {
        Parent: string;
    };
    GagStraps: {
        Parent: string;
    };
    Gag: {
        Parent: string;
    };
    GagUnder: {
        Parent: string;
    };
    Circlet: {
        Parent: string;
    };
    CircletUnder: {
        Parent: string;
    };
    HatBack: {
        Parent: string;
    };
    AnimalEars: {
        Parent: string;
    };
    AnimalEarsFront: {
        Parent: string;
    };
    Tail: {
        Parent: string;
    };
};
declare let Hardpoints: Record<string, Hardpoint>;
declare let LAYER_INCREMENT: number;
declare let MODELHEIGHT: number;
declare let MODELWIDTH: number;
declare let MODEL_SCALE: number;
declare let MODEL_XOFFSET: number;
declare let ARMPOSES: string[];
declare let WRISTHIDELEFT: string[];
declare let WRISTHIDERIGHT: string[];
declare let SHOULDERPOSES: string[];
declare let HIDEARMPOSES: any[];
declare let FOREARMPOSES: string[];
declare let CROSSARMPOSES: string[];
declare let HANDRIGHTPOSES: string[];
declare let HANDLEFTPOSES: string[];
declare let FOREHANDRIGHTPOSES: string[];
declare let FOREHANDLEFTPOSES: string[];
declare let LEGPOSES: string[];
declare let ANKLERIGHTPOSES: string[];
declare let ANKLELEFTPOSES: string[];
declare let FOOTRIGHTPOSES: string[];
declare let FOOTLEFTPOSES: string[];
declare let CALFRIGHTPOSES: string[];
declare let CALFLEFTPOSES: string[];
declare let KNEELPOSES: string[];
declare let HOGTIEPOSES: string[];
declare let STANDPOSES: string[];
declare let CLOSEDPOSES: string[];
declare let SPREADPOSES: string[];
declare let SPREADCLOSEDPOSES: string[];
declare let EYETYPES: string[];
declare let EYEPOSES: string[];
declare let EYE2POSES: string[];
declare let BROWTYPES: string[];
declare let BROWPOSES: string[];
declare let BROW2POSES: string[];
declare let MOUTHPOSES: string[];
declare let BLUSHPOSES: string[];
declare let FEARPOSES: string[];
declare let STANDARD_DEFAULTS: string[];
declare let PoseProperties: {
    [_: string]: PoseProperty;
};
declare function ModelGetMaxPose(Poses: {
    [_: string]: boolean;
}, CheckVar: string, FilterVar?: string | null): string;
declare function ModelGetPoseOffsets(Poses: {
    [_: string]: boolean;
}, Flip: boolean): {
    X_Offset: number;
    Y_Offset: number;
};
declare function ModelGetPoseRotation(Poses: {
    [_: string]: boolean;
}): {
    rotation: number;
    X_Anchor: number;
    Y_Anchor: number;
};
declare function ModelGetPoseMods(Poses: {
    [_: string]: boolean;
}): {
    [_: string]: PoseMod[];
};
declare function CheckPoseOrTags(C: Character, tag: string, tags?: Map<string, boolean>, tagsOnly?: boolean): boolean;
declare function KDGetAvailablePosesLegs(C: Character, tags?: Map<string, boolean>, tagsOnly?: boolean): string[];
declare function KDGetAvailablePosesArms(C: Character, tags?: Map<string, boolean>): string[];
declare function RefreshTempPoses(Character: Character, Restraints: boolean, Buffs?: boolean): void;
declare function KDRefreshPoseOptions(Character: Character): void;
declare function KDRefreshPoseOptionsMC(MC: ModelContainer): void;
declare let KDArmorPoses: string[];
declare let KDLEGBINDTAGS: string[];
declare let SHOWMESHPOINTS: boolean;
declare let StruggleAnimation: boolean;
declare let RenderCharacterQueue: Map<any, any>;
declare let RenderCharacterLock: Map<any, any>;
declare let KDFilterCacheToDestroy: PIXIFilter[];
declare let KDFilterDrawn: Map<PIXIFilter, boolean>;
declare let KDRenderTexToDestroy: PIXITexture[];
declare let KDMeshToDestroy: PIXIMesh[];
declare let KDSpritesToCull: PIXISprite[];
declare let KDCulling: boolean;
declare let KDSubmeshEditor: boolean;
declare let KDSubmeshChosen: string;
declare function InitLayers(layers: string[]): {
    [_: string]: number;
};
declare function InitLayersLookup(ModelLayers: {
    [_: string]: number;
}): Map<number, string>;
declare function InitMetaLayers(bounds: metaLayerBound[]): {
    forward: Record<string, string[]>;
    reverse: Record<string, string>;
    order: Record<string, number>;
};
declare let ModelLayers: {
    [_: string]: number;
};
declare let ModelLayersLookup: Map<number, string>;
declare let metaLayersData: {
    forward: Record<string, string[]>;
    reverse: Record<string, string>;
    order: Record<string, number>;
};
declare let metaLayerForward: Record<string, string[]>;
declare let metaLayerReverse: Record<string, string>;
declare let metaLayerOrder: Record<string, number>;
declare let ModelDefs: {
    [_: string]: Model;
};
declare function AddModel(Model: Model, Strings?: Record<string, string>): void;
declare let KDCurrentModels: Map<Character, ModelContainer>;
interface Submesh {
    mesh: PIXIMesh;
    rt: PIXIRenderTexture;
    container: PIXIContainer;
    matrix: PIXIArray;
    hash: number;
    lhash: number;
}
interface ContainerInfo {
    readonly SpriteList: Map<string, any>;
    readonly SpritesDrawn: Map<string, any>;
    readonly Container: PIXIContainer;
    readonly SpriteGroups: Map<string, PIXIContainer>;
    readonly Submeshes: Map<string, Submesh>;
    readonly Mesh: PIXIMesh;
    readonly RenderTexture: PIXIRenderTexture;
    readonly Matrix: PIXIArray;
    Zoom: number;
}
declare class ModelContainer {
    HighestPriority: {
        [_: string]: number;
    };
    HiddenLayers: {
        [_: string]: number;
    };
    XRayFilters: string[];
    Character: Character;
    Models: Map<string, Model>;
    Containers: Map<string, ContainerInfo>;
    ContainersDrawn: Map<string, ContainerInfo>;
    Poses: Record<string, boolean>;
    TempPoses: Record<string, boolean>;
    readonly Update: Set<string>;
    readonly ForceUpdate: Set<string>;
    readonly Refresh: Set<string>;
    readonly Mods: Map<string, PoseMod[]>;
    readonly EndMods: Map<string, PoseMod[]>;
    constructor(Character: Character, Models: Map<string, Model>, Containers: Map<string, ContainerInfo>, ContainersDrawn: Map<string, ContainerInfo>, Poses: Record<string, boolean>);
    addModel(Model: Model, Filters?: Record<string, LayerFilter>, LockType?: string, Properties?: Record<string, LayerPropertiesType>, factionFilters?: Record<string, FactionFilterDef>): void;
    updateModel(Name: string): void;
    removeModel(Model: string): void;
}
declare function ToLayerMap(Layers: ModelLayer[]): {
    [_: string]: ModelLayer;
};
declare function GetModelLayers(ModelName: string, PrependString?: string, AppendString?: string, InheritColor?: string, PriBonus?: number, layerSwap?: string, Folder?: string, noTieToLayer?: boolean): ModelLayer[];
declare function GetModelLayersNoOverride(ModelName: string, PrependString?: string, AppendString?: string, InheritColor?: string, PriBonus?: number, layerSwap?: string, Folder?: string): ModelLayer[];
declare function GetModelWithExtraLayers(NewModel: string, BaseModel: string, Layers: ModelLayer[], Parent?: string, TopLevel?: boolean, ExtraProps?: object): Model;
declare function GetModelWithDifferentLayers(NewModel: string, BaseModel: string, Layers: ModelLayer[], Parent?: string, TopLevel?: boolean, ExtraProps?: object): Model;
declare function GetModelRestraintVersion(BaseModel: string, Parent: boolean, extraAddPoses?: string[], removeRemovePoses?: string[]): Model;
declare function GetModelFashionVersion(BaseModel: string, Parent: boolean, removeOptionSwap?: boolean): Model;
declare function GetOverCorset(BaseModel: string): Model;
declare function DisposeCharacter(C: Character, resort?: boolean, deleteSpecial?: boolean): void;
declare function DisposeEntity(id: number, resort?: boolean, deleteSpecial?: boolean, deletePersistent?: boolean): void;
declare function DrawCharacter(C: Character, X: number, Y: number, Zoom: number, IsHeightResizeAllowed?: boolean, DrawCanvas?: PIXIContainer, Blend?: any, StartMods?: PoseMod[], zIndex?: number, flip?: boolean, extraPoses?: string[], containerID?: string, EndMods?: PoseMod[]): PIXIMesh;
declare let DrawModel: typeof DrawCharacter;
declare function LayerIsHidden(MC: ModelContainer, l: ModelLayer, m: Model, Mods: PoseMod[]): boolean;
declare function LayerLayer(MC: ModelContainer, l: ModelLayer, m: Model, Mods?: PoseMod[]): string;
declare function LayerPri(MC: ModelContainer, l: ModelLayer, m: Model, Mods?: PoseMod[]): number;
declare function KDLayerPropName(l: ModelLayer, Poses: Record<string, boolean>, props: Record<string, LayerPropertiesType>): string;
declare function DrawCharacterModels(containerID: string, MC: ModelContainer, X: any, Y: any, Zoom: any, StartMods: PoseMod[], ContainerContainer: ContainerInfo, refreshfilters: boolean, flip: boolean, EndMods: PoseMod[]): boolean;
declare function FilterHash(filter: any): string;
declare const KDAdjustmentFilterCache: Map<string, PIXIFilter[]>;
declare function ModelDrawLayer(MC: ModelContainer, Model: Model, Layer: ModelLayer, Poses: Record<string, boolean>): boolean;
declare function ModelLayerHidden(drawLayers: {
    [_: string]: boolean;
}, MC: ModelContainer, Model: Model, Layer: ModelLayer, Poses: {
    [_: string]: boolean;
}): boolean;
declare function ModelLayerString(Model: Model, Layer: ModelLayer, Poses: {
    [_: string]: boolean;
}): string;
declare function ModelLayerStringCustom(Model: Model, Layer: ModelLayer, Poses: {
    [_: string]: boolean;
}, Sprite: string, Path?: string, useModelFolder?: boolean, forceInvariant?: boolean, forceMorph?: Record<string, string>, noAppend?: boolean): string;
declare function LayerSprite(Layer: ModelLayer, Poses: {
    [_: string]: boolean;
}): string;
declare function LayerSpriteCustom(Layer: ModelLayer, Poses: {
    [_: string]: boolean;
}, Sprite: string, forceInvariant?: boolean, forceMorph?: Record<string, string>, noAppend?: boolean): string;
declare function GetTrimmedAppearance(C: Character): Item[];
declare function IsModelLost(C: Character, Name: string): boolean;
declare function UpdateModels(C: Character, Xray?: string[], customFaction?: string): void;
declare function ForceRefreshModels(C: Character): void;
declare function ForceRefreshModelsAsync(C: Character, ms?: number): Promise<void>;
declare function KDGetColorableLayers(Model: Model, Properties: boolean): {
    name: string;
    layer: string;
}[];
declare function KDGeneratePoseArray(ArmsPose?: string | undefined, LegsPose?: string | undefined, EyesPose?: string | undefined, BrowsPose?: string | undefined, BlushPose?: string | undefined, MouthPose?: string | undefined, Eyes2Pose?: string | undefined, Brows2Pose?: string | undefined, ExtraPose?: string | undefined, FearPose?: string | undefined): {
    [_: string]: boolean;
};
declare let PoseCheckArray: {
    Arms: string[];
    Legs: string[];
    Eyes: string[];
    Eyes2: string[];
    Brows: string[];
    Brows2: string[];
    Blush: string[];
    Mouth: string[];
    Fear: string[];
};
declare function KDGetPoseOfType(C: Character, Type: string): string;
declare function GetUnnamedModels(): void;
interface Hardpoint {
    Parent: string;
    X: number;
    Y: number;
    OffsetX?: number;
    OffsetY?: number;
    Angle: number;
}
declare function GetModelLoc(C: Character, X: number, Y: number, ZoomInit: number, hp: Hardpoint, Flip: boolean, NoMods?: boolean): {
    x: number;
    y: number;
    angle: number;
};
declare function GetModelLocInverse(C: Character, X: number, Y: number, ZoomInit: number, hp: Hardpoint, Flip: boolean): {
    x: number;
    y: number;
    angle: number;
};
declare function GetHardpointLoc(C: Character, X: number, Y: number, ZoomInit: number, Hardpoint: string, Flip: boolean): {
    x: number;
    y: number;
    angle: number;
};
declare function DrawModelProcessPoses(MC: ModelContainer, extraPoses: string[], flip: boolean): any[];
declare function RenderModelContainer(MC: ModelContainer, C: Character, containerID: string): void;
declare function RenderMCSubmeshes(MC: ModelContainer, C: Character, containerID: string): void;
declare function KDCullModelContainerContainer(MC: ModelContainer, containerID: string): boolean;
declare function adjustFilter(filter: any): import("pixi-filters").AdjustmentFilter;
declare class Transform {
    ox: number;
    oy: number;
    ax: number;
    ay: number;
    sx: number;
    sy: number;
    rot: number;
    constructor(ox?: number, oy?: number, ax?: number, ay?: number, sx?: number, sy?: number, rot?: number);
    get(): {
        x: number;
        y: number;
        sx: number;
        sy: number;
        rot: number;
    };
    recursiveTransform(ox: number, oy: number, ax: number, ay: number, sx: number, sy: number, rot: number): Transform;
    apply(transform: any): Transform;
}
declare function KDModelIsProtected(m: Model): boolean;
declare function KDContainerClear(Container: ContainerInfo): void;
declare function KDSetFilterSprite(info: {
    hash: string;
    filter: PIXIFilter;
}, sprite: PIXISprite): void;
declare function KDGetLayerFromPri(pri: number): string;
declare function KDGetSpriteGroup(pri: number): string;
declare function KDGetStringHash(str: string): number;
declare let SubmeshEditorClosest: number;
declare let SubmeshEditorClosestDist: number;
declare let SubmeshEditorBuffer: number[];
declare let SubmeshEditorBufferOrig: number[];
declare let KDTemplateZeroMesh: number[];
declare let KDTemplateEmptyMesh: number[];
declare let MeshWarps: {
    [_: string]: MeshWarp;
};
declare function ModelGetMaxMeshWarp(Poses: {
    [_: string]: boolean;
}, SG: string, CheckVar: string, FilterVar?: string | null): string;
declare let slimefilter: {
    gamma: number;
    saturation: number;
    contrast: number;
    brightness: number;
    red: number;
    green: number;
    blue: number;
    alpha: number;
};
declare let tapefilter: {
    gamma: number;
    saturation: number;
    contrast: number;
    brightness: number;
    red: number;
    green: number;
    blue: number;
    alpha: number;
};
declare let KDModelStyles: Record<string, Record<string, string[]>>;
declare let KDModelFace: {
    [_: string]: KinkyDungeonDress;
};
declare let KDModelHair: {
    [_: string]: KinkyDungeonDress;
};
declare let KDModelBody: {
    [_: string]: KinkyDungeonDress;
};
declare let KDModelCosplay: {
    [_: string]: KinkyDungeonDress;
};
declare let KDModelDresses: {
    [_: string]: KinkyDungeonDress;
};
declare let KDConfirmType: string;
declare let KinkyDungeonReplaceConfirm: number;
declare let lastFastPaletteUpdate: number;
declare let KDCanRevertFlag: boolean;
declare let KDSelectedPaletteLayer: string;
declare let GenericPaletteLayers: string[];
declare let GenericPaletteLayerSprites: {
    Highlight: string;
    DarkNeutral: string;
    LightNeutral: string;
    Catsuit: string;
    None: string;
};
declare let ColorPickerFilterCode: Record<string, string>;
declare let ColorPickerFilter: Record<string, PIXIAdjustmentFilter>;
declare let KDCurrentColorFilterCode: {};
declare let KDCurrentColorFilter: {};
declare let KDCurrentOutfit: number;
declare let KDMaxOutfits: number;
declare let KDMaxOutfitsDisplay: number;
declare let KDMaxOutfitsIndex: number;
declare let KDOutfitInfo: any[];
declare let KDOutfitStore: {};
declare let KDOutfitOriginalStore: {};
declare let lastFilterUpdate: number;
declare let FilterUpdateInterval: number;
declare let KDModelListMax: number;
declare let KDModelListViewSkip: number;
declare let KDShowCharacterPalette: boolean;
declare let KDCurrentCharacterPalettes: Record<string, Record<string, LayerFilter>>;
declare let KDModelList_Categories_index: number;
declare let KDModelList_Categories_viewindex: {
    index: number;
};
declare let KDModelList_Categories: any[];
declare let KDModelList_Toplevel_index: number;
declare let KDModelList_Toplevel_viewindex: {
    index: number;
};
declare let KDModelList_Toplevel: any[];
declare let KDModelList_Sublevel_index: number;
declare let KDModelList_Sublevel_viewindex: {
    index: number;
};
declare let KDModelList_Sublevel: any[];
declare let KDModelListFilter: string;
declare let KDRefreshProps: boolean;
declare let KDCategoryFilterSpecial: Record<string, (C: Character, m: Model, stage: number, level: number) => boolean>;
declare let KDCategoryFilterSpecialSubClick: Record<string, (C: Character, en: any, index: number, name: string) => ((_bdata: any) => boolean)>;
declare let KDCategoryFilterSpecialSubNoBorder: Record<string, (C: Character, en: any, index: number, name: string) => boolean>;
declare let KDCategoryFilterSpecialTopClick: Record<string, (C: Character, en: any, index: number, name: string) => ((_bdata: any) => boolean)>;
declare let KDCategoryFilterSpecialTopNoBorder: Record<string, (C: Character, en: any, index: number, name: string) => boolean>;
declare let KDWardrobeCategories: string[];
declare let KDSelectedModel: Model;
declare let KDColorSliders: LayerFilter;
declare let KDProps: LayerPropertiesType;
declare let KDColorSliderColor: {
    red: string;
    green: string;
    blue: string;
};
declare let KDCurrentLayer: string;
declare let KDCurrentLayerOrig: string;
declare let KDSavedColorCount: number;
declare let KDSavedColorPerRow: number;
declare let KDSavedColors: any[];
declare let KDWardrobe_PoseArms: string[];
declare let KDWardrobe_PoseLegs: string[];
declare let KDWardrobe_PoseEyes: string[];
declare let KDWardrobe_PoseEyes2: string[];
declare let KDWardrobe_PoseBrows: string[];
declare let KDWardrobe_PoseBrows2: string[];
declare let KDWardrobe_PoseMouth: string[];
declare let KDWardrobe_PoseBlush: string[];
declare let KDWardrobe_PoseFear: string[];
interface NPCPoseStruct {
    CurrentPoseArms?: string;
    CurrentPoseLegs?: string;
    CurrentPoseEyes?: string;
    CurrentPoseBrows?: string;
    CurrentPoseBlush?: string;
    CurrentPoseMouth?: string;
    CurrentPoseEyes2?: string;
    CurrentPoseBrows2?: string;
    CurrentPoseFear?: string;
}
declare let KDNPCPoses: Map<Character, NPCPoseStruct>;
declare let NPCDesiredPoses: Map<Character, KDExpressionPoseType>;
declare function KDInitCurrentPose(blank?: boolean, C?: Character): void;
declare function KDDrawSavedColors(X: number, y: number, max: number, C: Character): void;
declare let KDPropsSlider: boolean;
declare function KDDrawColorSliders(X: number, Y: number, C: Character, Model: Model): void;
declare function KDUpdateChar(C: Character): void;
declare let KDLayerIndex: number;
declare function KDDrawPoseButtons(C: Character, X?: number, Y?: number, allowRemove?: boolean, dress?: boolean, updateDesired?: boolean): void;
declare function KDUpdateModelList(level?: number, C?: Character): void;
declare function KDChangeWardrobe(C: Character): void;
declare function KDDrawModelList(X: number, C: Character): void;
declare function KDCanForcePose(C: Character): boolean;
declare let KDDefaultWardrobePalettes: Record<string, Record<string, LayerFilter>>;
declare let KDWardrobePreviewRestraints: string;
declare function KDDrawSubmeshEditor(): void;
declare function KDDrawWardrobe(_screen: string, Character: Character): void;
declare let KDToolsDisplayPoses: boolean;
declare let KDWardrobeCallback: any;
declare let KDWardrobeRevertCallback: any;
declare let KDWardrobeResetCallback: any;
declare function KDSaveCodeOutfit(C: Character, clothesOnly?: boolean): void;
declare function KDRestoreOutfit(): void;
declare function KDSaveOutfitInfo(): void;
declare function KDRefreshOutfitInfo(): void;
declare function hslToRgb(h: number, s: number, l: number): number[];
declare function hueToRgb(p: number, q: number, t: number): number;
declare function rgbToHsl(r: number, g: number, b: number): number[];
declare let KDVisualBrightness: number;
declare function KDLoadOutfit(files: File[]): void;
declare function KDLoadOutfitDirect(files: File[], Char: Character): void;
declare function KDGetCharMetadata(C: Character): KDOutfitMetadata;
declare function KDDrawWardrobeToolsButtons(X: any, Y: any, C: any, Model: any): void;
declare function KDWardrobeToolsDraw(C: Character): boolean;
declare let KDWToolsPivotAimEnabled: boolean;
declare let KDWToolsPivotAim2: boolean;
declare let KDWToolsPivotAimRefresh: boolean;
declare function CenterPivotToMouse(C: Character, CurrentLayer: LayerPropertiesType, Parent?: string): void;
declare function KDWToolsDrawPivotPoint(C: Character, CurrentLayer: LayerPropertiesType, Zoom: number, Parent: string): void;
declare let KDWToolsDraggingEnabled: boolean;
declare let KDWToolsIsDraggingNow: boolean;
declare let KDWToolsDraggingDelta: {
    x: number;
    y: number;
    Scroll: number;
    zIndex: number;
};
declare let KDWToolsDraggingRefresh: boolean;
declare let KDWToolsDraggingScrollRefresh: boolean;
declare let KDWToolsDraggingShiftKey: boolean;
declare let KDWToolsDraggingCtrlKey: boolean;
declare let KDWToolsDraggingLazyRefresh: number;
declare function ApplyDragDisplacement(C: any, CurrentLayer: any, Parent: string): void;
declare let KDWToolsDrawSettingsMenuEnabled: boolean;
declare function KDWToolsDrawSettingsMenu(X: any, Y: any, C: any, Model: any, Width: any): void;
declare function KDWToolsDrawOptionEntry(X: any, Y: any, Width: any, Height: any, Label: any, funcPrev: any, funcNext: any, zIndex?: any, alpha?: number): void;
declare function KDGetLayerPropFields(): Record<keyof LayerPropertiesType, string>;
declare function KDGetAbbreviations(context?: string): {
    Right: string;
    Left: string;
    Dress: string;
    Spread: string;
    Closed: string;
    Hogtie: string;
    Kneel: string;
    KneelClosed: string;
    Yoked: string;
    Free: string;
    Boxtie: string;
    Wristtie: string;
    Up: string;
    Crossed: string;
    Front: string;
};
declare function KDAbbreviate(str: string, context?: string): string;
declare function KDDrawColorPicker(id: string, currentLayerName: string, targetFilter: LayerFilter, targetFilters: Record<string, LayerFilter>, YY: number, X?: number, width?: number, callback_reset?: () => void, callback_paste?: (parsed: LayerFilter) => void, callback_pastefield?: (parsed: LayerFilter) => void, callback_update?: (key: string) => boolean, callback_updatewheel?: (r: number, g: number, b: number) => void, callback_updateadv?: (key: string) => void, callback_textfield?: (r: number, g: number, b: number) => void, callback_palette?: (key: string, override: boolean, desaturate: boolean) => void, palette?: string, pid?: string, factionFilterDef?: FactionFilterDef, debug?: boolean): {
    YY: number;
    updated: boolean;
};
declare function KDGetPreviewRestraints(preview: string): Record<string, NPCRestraint>;
declare function KDDressWardrobeChar(C: Character, forcedress?: boolean): void;
declare let KDlastSelectedModel: Model;
declare function KinkyDungeonExportWardrobeDataToClipboardOrModal(data: string, title?: string): void;
declare function KinkyDungeonWardrobePopup(data: string, title?: string): void;
declare let KDWardrobePreviewRestraintsListI: number;
declare let KDWardrobePreviewRestraintsList: Record<string, Record<string, NPCRestraint>>;
interface EligibleRestraintEntry {
    restraint: restraint;
    applyVariant: ApplyVariant;
    lock: string;
    curse?: string;
    forceConjure: boolean;
    row: NPCBindingGroup;
    slot: NPCBindingSubgroup;
    faction?: string;
    weight?: number;
}
declare let KDOverrideDeviceNPCBinding: boolean;
declare function KDGetNPCBindingSlotForItem(restraint: restraint, id: number, treatAsEmpty?: boolean, power?: number): {
    row: NPCBindingGroup;
    sgroup: NPCBindingSubgroup;
};
declare function KDGetBulletBindingTags(bindType: string, playerEffect: any, merge: boolean): string[];
declare function KDGetNPCRestraintPower(restraint: NPCRestraint): number;
declare function KDGetByRestraintEligibleEntry(entries: EligibleRestraintEntry[]): EligibleRestraintEntry;
declare let KDDefaultNPCEps: number;
declare function KDGetNPCEligibleRestraints_fromTags(id: number, tags: string[], options: {
    forceEffLevel?: number;
    allowedRestraints?: restraint[];
    allowedRestraintNames?: string[];
    noOverride?: boolean;
    allowVariants?: boolean;
    forceLock?: string;
    fallbackLock?: string;
    forceCurse?: string;
    fallbackCurse?: string;
    forceConjure?: boolean;
    currentWill?: number;
    requireTags?: string[];
    eps?: number;
}): EligibleRestraintEntry[];
declare let KDBindTypeTagLookup: Record<string, string[]>;
interface PathCondition {
    query: (attemptingNPC: entity, thisNPC: entity) => boolean;
    displaceAttempt?: (power: number, thisNPC: entity) => boolean;
    doPassthrough: (attemptingNPC: entity, thisNPC: entity, mapdata: KDMapDataType) => number;
    doDisplace?: (power: number, thisNPC: entity, mapdata: KDMapDataType) => boolean;
}
declare let KDPathConditions: Record<string, PathCondition>;
interface LeashCondition {
    check: (enemy: entity, player: entity) => boolean;
}
declare let KDLeashConditions: Record<string, LeashCondition>;
declare function KDMurderShopkeeper(count: number): void;
declare let KDPlayerTitlesEnabled: string | boolean;
declare let KDUnlockedTitles: any;
declare function PlayerTitleTick(force: boolean): void;
declare let KDTitleTabCurrentTitle: string;
declare let KDTitleTabCurrentDesc: string;
declare let KDTitleTabCurrentIcon: string;
declare let KDTitleTabCurrentTitleSelected: string;
declare let KDTitleTabCurrentCategory: string;
declare let KDTitleTabCurrentOffset: number;
declare let KDTitleTabTitlesOffset: number;
declare function KinkyDungeonDrawTitles(): void;
declare function KDPlayerTitlesRefreshCategories(): void;
declare let KDPlayerTitles: Record<string, KDPlayerTitle>;
declare let KDPlayerTitleCategories: Record<string, string[]>;

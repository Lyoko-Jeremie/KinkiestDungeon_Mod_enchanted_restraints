import {cloneDeep, assign} from 'lodash';


const GameOriginalFunctionCode = {
    // KDEquipInventoryVariant.toString()
    KDEquipInventoryVariant:
        `function KDEquipInventoryVariant(variant, prefix = "", Tightness, Bypass, Lock, Keep, Trapped, faction, Deep, curse, securityEnemy, useAugmentedPower, _inventoryAs, ID = "", suffix = "", powerBonus = 0) {
    KDUpdateItemEventCache = true;
    let origRestraint = KinkyDungeonGetRestraintByName(variant.template);
    let events = origRestraint.events ? JSON.parse(JSON.stringify(origRestraint.events)) : [];
    let newname = prefix + variant.template + (ID || (KinkyDungeonGetItemID() + "")) + (curse ? curse : "");
    if (prefix)
        variant.prefix = prefix;
    if (suffix)
        variant.suffix = suffix;
    if (curse) {
        variant = JSON.parse(JSON.stringify(variant));
        variant.curse = curse;
    }
    if (powerBonus)
        variant.power = powerBonus;
    if (!KinkyDungeonRestraintVariants[newname])
        KinkyDungeonRestraintVariants[newname] = variant;
    if (variant.events)
        Object.assign(events, variant.events);
    return KinkyDungeonAddRestraintIfWeaker(origRestraint, Tightness, Bypass, Lock, Keep, Trapped, events, faction, Deep, curse, securityEnemy, useAugmentedPower, newname, undefined, undefined, undefined, powerBonus);
}`,
};

export type GameOriginalFunctionNameType = keyof typeof GameOriginalFunctionCode;

export function checkGameOriginalChange(funcName: GameOriginalFunctionNameType) {
    const f = (window as any)[funcName];
    if (!f) {
        return false;
    }
    return f.toString() !== GameOriginalFunctionCode[funcName];
}

function Custom_KDEquipInventoryVariant(
    additional: {
        variantChangCallback?: (variant: KDRestraintVariant) => KDRestraintVariant;
    },
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
) {
    KDUpdateItemEventCache = true;
    let origRestraint = KinkyDungeonGetRestraintByName(variant.template);
    let events = origRestraint.events ? JSON.parse(JSON.stringify(origRestraint.events)) : [];
    let newname = prefix + variant.template + (ID || (KinkyDungeonGetItemID() + "")) + (curse ? curse : "");
    if (prefix) variant.prefix = prefix;
    if (suffix) variant.suffix = suffix;
    if (curse) {
        variant = JSON.parse(JSON.stringify(variant));
        variant.curse = curse;
    }
    if (powerBonus) variant.power = powerBonus;
    // insert code here v v v v v v v v
    variant = additional.variantChangCallback ? additional.variantChangCallback(variant) : variant;
    // insert code here ^ ^ ^ ^ ^ ^ ^ ^
    if (!KinkyDungeonRestraintVariants[newname])
        KinkyDungeonRestraintVariants[newname] = variant;
    if (variant.events)
        Object.assign(events, variant.events);
    return KinkyDungeonAddRestraintIfWeaker(origRestraint, Tightness, Bypass, Lock, Keep, Trapped, events, faction, Deep, curse, securityEnemy, useAugmentedPower, newname, undefined, undefined, undefined,
        powerBonus
    );
}



// need hook :
//
// function KDGenericMultEnchantmentAmount(amt: number, _item: string, Loot: any, curse: string, primaryEnchantment: string): number
// function KDNormalizedMultEnchantmentAmount(amt: number, _item: string, Loot: any, curse: string, primaryEnchantment: string): number

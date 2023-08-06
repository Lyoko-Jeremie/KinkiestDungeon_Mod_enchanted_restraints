/**
 * set a lock unlock failed notice for item
 * @param curse {string} lock type, often is "MistressKey"
 * @param itemName {string}
 * @param text {string | undefined} the notice string . if undefined, use the default KinkyDungeonCurseStruggleMistressKey
 */
export const addCurseStruggleString = (curse: string, itemName: string, text?: string) => {
    // unlock failed notice
    // function KinkyDungeonCurseStruggle(item, Curse) {
    if (curse === "MistressKey") {
        const newText = text || TextGetKD(`KinkyDungeonCurseStruggleMistressKey`);
        addTextKey("KinkyDungeonCurseStruggle" + curse + itemName, newText);
    } else {
        if (text) {
            addTextKey("KinkyDungeonCurseStruggle" + curse, text);
        } else {
            console.error('addCurseStruggleString invalid', itemName, curse);
        }
    }
}


/**
 * copy RestraintText from old to new , with optional name process function
 * @param newRestraintId {string}
 * @param oldRestraintId {string}
 * @param nameP {((old:string)=>string) | undefined} name process function
 * @param desc1P {((old:string)=>string) | undefined} desc1 process function
 * @param desc2P {((old:string)=>string) | undefined} desc2 process function
 */
export const DupeRestraintText = (newRestraintId: string, oldRestraintId: string, nameP?: (old: string) => string, desc1P?: (old: string) => string, desc2P?: (old: string) => string) => {
    const baseKey = `Restraint${newRestraintId}`;
    const oldKey = `Restraint${oldRestraintId}`;

    addTextKey(baseKey, nameP ? nameP(TextGetKD(oldKey)) : TextGetKD(oldKey));
    addTextKey(`${baseKey}Desc`, desc1P ? desc1P(TextGetKD(`${oldKey}Desc`)) : TextGetKD(`${oldKey}Desc`));
    addTextKey(`${baseKey}Desc2`, desc2P ? desc2P(TextGetKD(`${oldKey}Desc2`)) : TextGetKD(`${oldKey}Desc2`));
}
/**
 * copy RestraintText from old to new , with optional name process function
 * @param newRestraintId {string}
 * @param oldRestraintId {string}
 * @param nameP {((old:string)=>string) | undefined} name process function
 * @param desc1P {((old:string)=>string) | undefined} desc1 process function
 * @param desc2P {((old:string)=>string) | undefined} desc2 process function
 */
export const copyTKeyF = (newRestraintId: string, oldRestraintId: string, nameP?: (old: string) => string, desc1P?: (old: string) => string, desc2P?: (old: string) => string) => {
    DupeRestraintText(newRestraintId, oldRestraintId, nameP, desc1P, desc2P);
    // if (TranslationLanguage === "CN") {
    // 	DupeRestraintText(newRestraintId, oldRestraintId, nameP, desc1P, desc2P);
    // } else if (sEnglish) {
    // 	DupeRestraintText(newRestraintId, oldRestraintId, nameP, desc1P, desc2P);
    // }
};


/**
 * @param it {string}
 * @param s1 {string}
 * @param s2 {string | undefined}
 * @param sEnglish {string | undefined}
 */
export const addTKeyF1 = (it: string, s1: string, s2?: string, sEnglish?: string) => {
    // addTextKey("Restraint" + it + "Desc", s1);
    // addTextKey("Restraint" + it + "Desc2", s2 || s1);
    if (TranslationLanguage === "CN") {
        KinkyDungeonAddRestraintText(it, s1, s1, s2 || s1);
    } else if (sEnglish) {
        KinkyDungeonAddRestraintText(it, sEnglish, sEnglish, sEnglish);
    }
};
export const addTKeyF2 = (oldName: string, name: string, displayName: string, flavorText?: string, sEnglish?: string) => {
    // from KinkyDungeonDupeRestraintText
    const oldKey = `Restraint${oldName}`;
    const baseKey = `Restraint${name}`;

    addTextKey(baseKey, displayName);
    addTextKey(`${baseKey}Desc`, TextGetKD(`${oldKey}Desc`));
    addTextKey(`${baseKey}Desc2`, TextGetKD(`${oldKey}Desc2`));
    // if (TranslationLanguage === "CN") {
    // 	KinkyDungeonAddRestraintText(name, displayName, flavorText, flavorText || displayName);
    // } else if (sEnglish) {
    // 	KinkyDungeonAddRestraintText(name, sEnglish, sEnglish, sEnglish);
    // }
};

// function KDGetItemPreview(item) {
// 	let ret = null;
// 	let Group = "";
// 	if (item.type == Restraint && KDRestraint(item).Group) Group = KDRestraint(item).Group;
// 	else if (item.type == LooseRestraint && KDRestraint(item).Group) Group = KDRestraint(item).Group;
// 	if ((item.type == Restraint || item.type == LooseRestraint) && KDRestraint(item).AssetGroup) Group = KDRestraint(item).AssetGroup;
// 	if (Group == "ItemMouth2" || Group == "ItemMouth3") Group = "ItemMouth";
//
// 	if (item.type == Restraint) {
// 		ret = {name: item.name, item: item, preview: `Assets/Female3DCG/${Group}/Preview/${KDRestraint(item).Asset}.png`};
// 	}
// 	else if (item.type == LooseRestraint) {
// 		ret = {name: KDRestraint(item).name, item: item, preview: `Assets/Female3DCG/${Group}/Preview/${KDRestraint(item).Asset}.png`};
// 	}
// 	else if (item.type == Consumable) ret = {name: KDConsumable(item).name, item: item, preview: KinkyDungeonRootDirectory + `/Items/${KDConsumable(item).name}.png`};
// 	else if (item.type == Weapon) ret = {name: KDWeapon(item).name, item: item, preview: KinkyDungeonRootDirectory + `/Items/${KDWeapon(item).name}.png`};
// 	else if (item.type == Outfit) ret = {name: KDOutfit(item) ? KDOutfit(item).name : "Prisoner", item: item, preview: KinkyDungeonRootDirectory + `/Outfits/${KDOutfit(item).name}.png`};
// 	//else if (item && item.name) ret.push({name: item.name, item: item, preview: ``});
// 	return ret;
// }

export function frozenClone<T extends any>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

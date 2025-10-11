// /**
//  * @type {Record<string, KDLockType>}
//  */
// let KDLocks = {
export const KDLocksTypeInstance = new class {
    get KDLocks(): LockList[] {
        return Object.getOwnPropertyNames(KDLocks) as unknown as LockList[];
    }
}

export enum LockList {
    None = "None",
    Rubber = "Rubber",
    Crystal = "Crystal",
    ExCrystal = "ExCrystal",
    Cyber = "Cyber",
    Cyber2 = "Cyber2",
    Cyber3 = "Cyber3",
    White = "White",
    Red = "Red",
    Red_Med = "Red_Med",
    Red_Hi = "Red_Hi",
    HiSec = "HiSec",
    Masterwork = "Masterwork",
    Disc = "Disc",
    Blue = "Blue",
    Gold = "Gold",
    Divine = "Divine",
    Divine2 = "Divine2",
    Purple = "Purple",
}

export function LockList2RealLock(lock?: LockList, defaultLock = LockList.Gold): string | undefined {
    if (lock === undefined || lock === null) {
        return defaultLock;
    } else if (!KDLocksTypeInstance.KDLocks.includes(lock)) {
        return defaultLock;
    } else if (lock === LockList.None) {
        return undefined;
    } else {
        return lock;
    }
}

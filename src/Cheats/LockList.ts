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
    Rubber = "Rubber",
    Cyber = "Cyber",
    Cyber2 = "Cyber2",
    Cyber3 = "Cyber3",
    White = "White",
    Red = "Red",
    Red_Med = "Red_Med",
    Red_Hi = "Red_Hi",
    HiSec = "HiSec",
    Disc = "Disc",
    Blue = "Blue",
    Gold = "Gold",
    Divine = "Divine",
    Divine2 = "Divine2",
    Purple = "Purple",
    None = "None",
}

export function LockList2RealLock(lock?: LockList, defaultLock = LockList.Gold): string {
    if (lock === undefined || lock === null) {
        return defaultLock;
    } else if (!KDLocksTypeInstance.KDLocks.includes(lock)) {
        return defaultLock;
    } else if (lock === LockList.None) {
        return "";
    } else {
        return lock;
    }
}

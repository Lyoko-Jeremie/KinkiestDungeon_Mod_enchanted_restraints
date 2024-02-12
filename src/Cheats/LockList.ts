// /**
//  * @type {Record<string, KDLockType>}
//  */
// let KDLocks = {
export enum LockList {
    Purple = "Purple",
    Red = "Red",
    Red_Med = "Red_Med",
    Red_Hi = "Red_Hi",
    White = "White",
    Blue = "Blue",
    Gold = "Gold",
    Rubber = "Rubber",
    Secure = "Secure",
    HiSec = "HiSec",
    Disc = "Disc",
    Divine = "Divine",
    Divine2 = "Divine2",
    None = "None",
}

export function LockList2RealLock(lock?: LockList, defaultLock = LockList.Gold): string {
    if (lock === undefined || lock === null) {
        return defaultLock;
    } else if (lock === LockList.None) {
        return "";
    } else {
        return lock;
    }
}

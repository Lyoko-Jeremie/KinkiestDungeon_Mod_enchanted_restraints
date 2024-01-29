export enum LockList {
    Purple = "Purple",
    Red = "Red",
    White = "White",
    Blue = "Blue",
    Gold = "Gold",
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

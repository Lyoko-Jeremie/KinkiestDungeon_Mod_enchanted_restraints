
export class DebugSee {
    ShowAllRestraint() {
        console.log(KinkyDungeonAllRestraint());
        return KinkyDungeonAllRestraint();
    }

    ShowAllRestraintDynamic() {
        console.log(KinkyDungeonAllRestraintDynamic());
        return KinkyDungeonAllRestraintDynamic();
    }

    ShowAllRestraintDynamicName() {
        console.log(KinkyDungeonAllRestraintDynamic().map((r) => KDRestraint(r.item).name));
        return KinkyDungeonAllRestraintDynamic().map((r) => KDRestraint(r.item).name);
    }

    ShowAllChoice() {
        return Array.from(KinkyDungeonStatsChoice.entries()).filter(T => T[1]);
    }
}

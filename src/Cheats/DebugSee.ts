
export class DebugSee {
    ShowAllRestraint() {
        console.log(window.KinkyDungeonAllRestraint());
        return window.KinkyDungeonAllRestraint();
    };

    ShowAllRestraintDynamic() {
        console.log(window.KinkyDungeonAllRestraintDynamic());
        return window.KinkyDungeonAllRestraintDynamic();
    };

    ShowAllRestraintDynamicName() {
        console.log(window.KinkyDungeonAllRestraintDynamic().map((r) => window.KDRestraint(r.item).name));
        return window.KinkyDungeonAllRestraintDynamic().map((r) => window.KDRestraint(r.item).name);
    };

    ShowAllChoice() {
        return Array.from(window.KinkyDungeonStatsChoice.entries()).filter(T => T[1]);
    };
}

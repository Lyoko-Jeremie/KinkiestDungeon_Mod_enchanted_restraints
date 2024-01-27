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
        return KinkyDungeonAllRestraintDynamic().map((r) => {
            const T = KDRestraint(r.item);
            const nameKD = TextGetKD(`Restraint${T.name}`)
            return `${T.name} [${nameKD}]`;
        });
    }

    ShowAllChoice() {
        return Array.from(KinkyDungeonStatsChoice.entries()).filter(T => T[1]);
    }
}

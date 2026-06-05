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
            const lockKey = r.item.lock;
            let lockName = '';
            if (lockKey) {
                const k1 = TextGet(`Kinky${lockKey}Lock`);
                const k2 = TextGet(`Kinky${lockKey}LockType`);
                const name = k1 === `Kinky${lockKey}Lock` ? k2 : k1;
                lockName = `[${lockKey} ${name}]`
            } else {
                lockName = '[]';
            }
            return `${T.name} [${nameKD}]` + lockName;
        });
    }

    ShowAllRestraintDynamicNameTable() {
        const l: {
            name: string,
            nameKD: string,
            lockName: string,
            lockType: string,
        }[] = KinkyDungeonAllRestraintDynamic().map((r) => {
            const d: {
                name: string,
                nameKD: string,
                lockName: string,
                lockType: string,
            } = {} as any;
            const T = KDRestraint(r.item);
            d.name = T.name;
            d.nameKD = TextGetKD(`Restraint${T.name}`);
            const lockKey = r.item.lock;
            d.lockName = TextGet(`Kinky${lockKey}Lock`) ?? '';
            d.lockType = TextGet(`Kinky${lockKey}LockType`) ?? '';
            return d;
        });
        return l;
    }

    ShowAllChoice() {
        return Array.from(KinkyDungeonStatsChoice.entries()).filter(T => T[1]);
    }
}

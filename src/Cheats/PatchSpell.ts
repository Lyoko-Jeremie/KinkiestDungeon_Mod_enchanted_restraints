import {isNumber} from "lodash";


export class PatchSpell {

    isPatched = false;

    public PatchAllSpell() {
        if (this.isPatched) {
            console.log('PatchSpell was patched. skip.');
            return;
        }
        this.isPatched = true;

        for (const k of this.fk) {
            const f = (this as any)[k];
            if (f) {
                try {
                    f();
                } catch (e) {
                    console.error(`PatchSpell.${k}() error:`, e);
                }
            }
        }
    }

    fk = [
        // 'PatchEnemySense',
        'PatchLeap',
    ];

    // 闪现
    protected PatchLeap() {
        for (let k of ['Leap', 'Leap2', 'Leap3']) {
            const n = KinkyDungeonSpellList['Conjure'].find(T => T.name === k);
            if (!n) {
                console.error(`${k} not found. cannot patch it.`);
                return;
            }
            if (!isNumber(n.range)) {
                console.error(`${k}.range not isNumber. cannot patch it.`);
                return;
            }
            n.range *= 10;
        }
        console.log("Leap patched.");
    }

    // 声波定位 视野缩小
    protected PatchEnemySense() {
        const n = KinkyDungeonSpellList['Illusion'].find(T => T.name === "EnemySense");
        if (!n) {
            console.error("EnemySense not found. cannot patch it.");
            return;
        }
        const calcVision = n.events?.find(T => T.trigger === 'calcVision');
        if (!calcVision) {
            console.error("EnemySense.calcVision not found. cannot patch it.");
            return;
        }
        if (!isNumber(calcVision.mult)) {
            console.error("EnemySense.calcVision.mult not isNumber. cannot patch it.");
            return;
        }
        calcVision.mult = 2;        // 0.1
        console.log("EnemySense patched.");
    }
}

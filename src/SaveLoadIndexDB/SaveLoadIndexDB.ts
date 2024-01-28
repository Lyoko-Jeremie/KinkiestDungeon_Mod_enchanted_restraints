import * as IdbKv from 'idb-keyval';
import moment from 'moment';
import {SaveLoad} from "../Cheats/SaveLoad";

export class SaveLoadIndexDB {
    customStore: IdbKv.UseStore;

    constructor(
        public SaveLoad: SaveLoad,
    ) {
        this.customStore = IdbKv.createStore('ModEnchantedRestraints', 'SaveLoadIndexDBStore');
    }

    public addSave() {
        const s = this.SaveLoad.GameSaveDataString();
        return this.save(s);
    }

    public async loadGame(time: string) {
        const s = await this.load(time);
        if (s) {
            // this.SaveLoad.LoadGameSaveString(s);

            // use the KK building load impl, not impl myself. because the load task too complex
            localStorage.setItem('KinkyDungeonSave', s);
            KinkyDungeonStartNewGame(true);
        }
    }

    getTimeString() {
        return moment().format('YYYY-MM-DD_HH:mm:ss.SSS');
    }

    save(saveData: string) {
        return IdbKv.set(this.getTimeString(), saveData, this.customStore);
    }

    public list() {
        return IdbKv.keys<string>(this.customStore);
    }

    load(time: string) {
        return IdbKv.get<string>(time, this.customStore);
    }

    delete(time: string) {
        return IdbKv.del(time, this.customStore);
    }

    clear() {
        return IdbKv.clear(this.customStore);
    }
}

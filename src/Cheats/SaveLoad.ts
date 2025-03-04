import * as LZString from 'lz-string';

export class SaveLoad {
    async AsyncGetGameSaveDataString() {
        // const save = LZString.compressToBase64(JSON.stringify(KinkyDungeonSaveGame(true)));
        const save = await KinkyDungeonCompressSave(KinkyDungeonSaveGame(true));
        console.log(save);
        return save;
    }

    GameSaveDataString() {
        const save = LZString.compressToBase64(JSON.stringify(KinkyDungeonSaveGame(true)));
        // const save = await KinkyDungeonCompressSave(KinkyDungeonSaveGame(true));
        console.log(save);
        KinkyDungeonSaveGame(false);
        return save;
    }

    GameSaveNow() {
        KinkyDungeonSaveGame(false);
    }

    async CopyGameSaveDataStringToClipboard() {
        try {
            const T = await navigator.clipboard.writeText(KinkyDungeonSaveGame(true));
            console.log('CopyGameSaveDataStringToClipboard ok');
            return true;
        } catch (E) {
            console.error(E);
            return false;
        }
    }

    LoadGameSaveString(s: string) {
        // return KinkyDungeonLoadGame(s);

        // use the building load impl, not impl myself. because the load task too complex
        localStorage.setItem('KinkyDungeonSave', s);
        KinkyDungeonStartNewGame(true);
    }

    async LoadGameSaveStringFromClipboard() {
        let a = false;
        let b = false;
        try {
            const s = await navigator.clipboard.readText();
            console.log('CopyGameSaveDataStringToClipboard ok');
            a = true;

            // we use it to check ours save data is valid
            // this will load, but not start a new game
            b = KinkyDungeonLoadGame(s);
            if (!b) {
                return [a, b];
            }

            // use the building load impl, not impl myself. because the load task too complex
            localStorage.setItem('KinkyDungeonSave', s);
            KinkyDungeonStartNewGame(true);
            return [a, b];
        } catch (E) {
            console.error(E);
            return [a, b];
        }
    }
}

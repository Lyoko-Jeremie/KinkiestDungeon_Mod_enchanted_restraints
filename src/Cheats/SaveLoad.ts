export class SaveLoad {
    GameSaveDataString() {
        console.log(KinkyDungeonSaveGame(true));
        return KinkyDungeonSaveGame(true);
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
        KinkyDungeonLoadGame(s);
    }

    async LoadGameSaveStringFromClipboard() {
        let a = false;
        let b = false;
        try {
            const s = await navigator.clipboard.readText();
            console.log('CopyGameSaveDataStringToClipboard ok');
            a = true;

            b = KinkyDungeonLoadGame(s);
            return [a, b];
        } catch (E) {
            console.error(E);
            return [a, b];
        }
    }
}

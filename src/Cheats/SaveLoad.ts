
export class SaveLoad {
    GameSaveDataString() {
        console.log(KinkyDungeonSaveGame(true));
        return KinkyDungeonSaveGame(true);
    }

    GameSaveNow() {
        KinkyDungeonSaveGame(false);
    }

    CopyGameSaveDataStringToClipboard() {
        navigator.clipboard.writeText(KinkyDungeonSaveGame(true)).then(T => {
            console.log('CopyGameSaveDataStringToClipboard ok');
        }).catch(E => {
            console.error(E);
        });
    }

    LoadGameSaveString(s: string) {
        KinkyDungeonLoadGame(s);
    }

    LoadGameSaveStringFromClipboard() {
        navigator.clipboard.readText().then(s => {
            KinkyDungeonLoadGame(s);
            console.log('CopyGameSaveDataStringToClipboard ok');
        }).catch(E => {
            console.error(E);
        });
    }
}

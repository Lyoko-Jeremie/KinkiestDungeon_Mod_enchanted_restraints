
export class SaveLoad {
    GameSaveDataString() {
        console.log(window.KinkyDungeonSaveGame(true));
        return window.KinkyDungeonSaveGame(true);
    }

    GameSaveNow() {
        window.KinkyDungeonSaveGame(false);
    }

    CopyGameSaveDataStringToClipboard() {
        navigator.clipboard.writeText(window.KinkyDungeonSaveGame(true)).then(T => {
            console.log('CopyGameSaveDataStringToClipboard ok');
        }).catch(E => {
            console.error(E);
        });
    }

    LoadGameSaveString(s: string) {
        window.KinkyDungeonLoadGame(s);
    }

    LoadGameSaveStringFromClipboard() {
        navigator.clipboard.readText().then(s => {
            window.KinkyDungeonLoadGame(s);
            console.log('CopyGameSaveDataStringToClipboard ok');
        }).catch(E => {
            console.error(E);
        });
    }
}

export class MapGet {

// function KDDrawMap(CamX, CamY, CamX_offset, CamY_offset, Debug) {
    MapGet = () => {
        const m = structuredClone(window.KinkyDungeonGrid);
        return m.replaceAll("1", " ");
    };
    MapRoiGet = () => {
        const m = structuredClone(window.KinkyDungeonGrid);
        return m.replaceAll(/[^\D\n]/g, " ");
    };
    MapSsGet = () => {
        const m = structuredClone(window.KinkyDungeonGrid);
        return m.replaceAll(/[^SsH\n]/g, " ");
    };
    MapKGet = () => {
        let m = structuredClone(window.KinkyDungeonGrid);
        m = m.replaceAll(/[^SsH\n]/g, "█");
        let mm = m.split("\n");
        let k = window.KDGameData.KeyringLocations;
        k.forEach(K => {
            let r = m[K.y].split("");
            r[K.x] = "▓";
            mm[K.y] = r.join("");
        });
        m = mm.join("\n");
        return m;
    };
    MapKRoiGet = () => {
        let m = structuredClone(window.KinkyDungeonGrid);
        m = m.replaceAll(/[^\D\n]/g, "█");
        let mm = m.split("\n");
        let k = window.KDGameData.KeyringLocations;
        k.forEach(K => {
            let r = m[K.y].split("");
            r[K.x] = "▓";
            mm[K.y] = r.join("");
        });
        m = mm.join("\n");
        return m;
    };
    MapKSsMGet = () => {
        let m = structuredClone(window.KinkyDungeonGrid);
        m = m.replaceAll("1", "░");
        m = m.replaceAll(/[SsH]/g, "█");
        let mm = m.split("\n");
        let k = window.KDGameData.KeyringLocations;
        k.forEach(K => {
            let r = m[K.y].split("");
            r[K.x] = "▓";
            mm[K.y] = r.join("");
        });
        {
            let r = m[window.KinkyDungeonPlayerEntity.y].split("");
            r[window.KinkyDungeonPlayerEntity.x] = "◘";
            mm[window.KinkyDungeonPlayerEntity.y] = r.join("");
        }
        m = mm.join("\n");
        return m;
    };
    MapKKSsMGet = () => {
        let m = structuredClone(window.KinkyDungeonGrid);
        m = m.replaceAll("1", "░");
        m = m.replaceAll(/[SsH]/g, "█");
        let mm = m.split("\n");
        let k = window.KDGameData.KeyringLocations;
        k.forEach(K => {
            let r = m[K.y].split("");
            r[K.x] = "▓";
            mm[K.y] = r.join("");
        });
        {
            let r = m[window.KinkyDungeonPlayerEntity.y].split("");
            r[window.KinkyDungeonPlayerEntity.x] = "◘";
            mm[window.KinkyDungeonPlayerEntity.y] = r.join("");
        }
        window.KinkyDungeonGroundItems.forEach(T => {
            if (T.name === "Keyring") {
                let r = m[T.y].split("");
                r[T.x] = "▓";
                mm[T.y] = r.join("");
            }
        });
        m = mm.join("\n");
        return m;
    };
// let KDSprites = {
// let KDOverlays = {
// KDGameData.KeyringLocations
// KinkyDungeonTiles
// KinkyDungeonTilesGet(RX + "," + RY)
// KinkyDungeonGroundItems.push({x:slot.x, y:slot.y, name: "Keyring"});

}

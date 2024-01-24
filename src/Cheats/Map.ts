export class MapGet {

    getMapGrid(): string {
        if (typeof KinkyDungeonGrid === "undefined") {
            // new version 5.0
            return KDMapData.Grid;
        } else {
            // old version
            return KinkyDungeonGrid;
        }
    }

    setMapGrid(mapString: string) {
        if (typeof KinkyDungeonGrid === "undefined") {
            // new version 5.0
            KDMapData.Grid = mapString;
        } else {
            // old version
            KinkyDungeonGrid = mapString;
        }
    }

    get MapGrid() {
        return this.getMapGrid();
    }

    set MapGrid(mapString: string) {
        this.setMapGrid(mapString);
    }

    getMapGroundItems() {
        if (typeof KinkyDungeonGroundItems === "undefined") {
            // new version 5.0
            return KDMapData.GroundItems as { x: number, y: number, name: string, amount?: number }[];
        } else {
            // old version
            return KinkyDungeonGroundItems as { x: number, y: number, name: string, amount?: number }[];
        }
    }

// function KDDrawMap(CamX, CamY, CamX_offset, CamY_offset, Debug) {
    MapGet = () => {
        const m = structuredClone(this.MapGrid);
        return m.replaceAll("1", " ");
    };
    MapRoiGet = () => {
        const m = structuredClone(this.MapGrid);
        return m.replaceAll(/[^\D\n]/g, " ");
    };
    MapSsGet = () => {
        const m = structuredClone(this.MapGrid);
        return m.replaceAll(/[^SsH\n]/g, " ");
    };
    MapKGet = () => {
        let m = structuredClone(this.MapGrid);
        m = m.replaceAll(/[^SsH\n]/g, "█");
        let mm = m.split("\n");
        let k = KDGameData.KeyringLocations;
        k.forEach(K => {
            let r = m[K.y].split("");
            r[K.x] = "▓";
            mm[K.y] = r.join("");
        });
        m = mm.join("\n");
        return m;
    };
    MapKRoiGet = () => {
        let m = structuredClone(this.MapGrid);
        m = m.replaceAll(/[^\D\n]/g, "█");
        let mm = m.split("\n");
        let k = KDGameData.KeyringLocations;
        k.forEach(K => {
            let r = m[K.y].split("");
            r[K.x] = "▓";
            mm[K.y] = r.join("");
        });
        m = mm.join("\n");
        return m;
    };
    MapKSsMGet = () => {
        let m = structuredClone(this.MapGrid);
        m = m.replaceAll("1", "░");
        m = m.replaceAll(/[SsH]/g, "█");
        let mm = m.split("\n");
        let k = KDGameData.KeyringLocations;
        k.forEach(K => {
            let r = mm[K.y].split("");
            r[K.x] = "▓";
            mm[K.y] = r.join("");
        });
        {
            let r = mm[KinkyDungeonPlayerEntity.y].split("");
            r[KinkyDungeonPlayerEntity.x] = "◘";
            mm[KinkyDungeonPlayerEntity.y] = r.join("");
        }
        this.getMapGroundItems().forEach(T => {
            if (T.name === "Keyring") {
                let r = mm[T.y].split("");
                r[T.x] = "▓";
                mm[T.y] = r.join("");
            }
        });
        m = mm.join("\n");
        return m;
    };
    MapKKSsMGet = (ignoreY?: boolean) => {
        let m = structuredClone(this.MapGrid);
        m = m.replaceAll("1", "░");
        if (ignoreY) {
            m = m.replaceAll("Y", " ");
        }
        m = m.replaceAll(/[SsH]/g, "█");
        let mm = m.split("\n");
        let k = KDGameData.KeyringLocations;
        k.forEach(K => {
            let r = mm[K.y].split("");
            r[K.x] = "▓";
            mm[K.y] = r.join("");
        });
        {
            let r = mm[KinkyDungeonPlayerEntity.y].split("");
            r[KinkyDungeonPlayerEntity.x] = "◘";
            mm[KinkyDungeonPlayerEntity.y] = r.join("");
        }
        this.getMapGroundItems().forEach(T => {
            if (T.name === "Keyring") {
                let r = mm[T.y].split("");
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


    ReplaceMapLibY() {
        if (typeof KinkyDungeonGrid === "undefined") {
            KDMapData.Grid = KDMapData.Grid.replaceAll("1", "Y");
        } else {
            KinkyDungeonGrid = KinkyDungeonGrid.replaceAll("1", "Y");
        }
    }

    drawMapCanvas_KKSs(node: HTMLCanvasElement, blockSize = 16) {
        let m = this.MapKKSsMGet();
        let mm = m.split("\n");

        node.width = mm[0].split('').length * blockSize;
        node.height = mm.length * blockSize;
        node.style.width = node.width + 'px';
        node.style.height = node.height + 'px';

        const ctx: CanvasRenderingContext2D = node.getContext("2d")!;
        let y = 0;
        let x = 0;
        for (const l of mm) {
            if (l.length > 0) {
                x = 0;
            } else {
                continue;
            }
            for (const c of l.split('')) {

                if (c === '█') {
                    ctx.fillStyle = "black";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === '░') {
                    ctx.fillStyle = "gray";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === '▓') {
                    ctx.fillStyle = "yellow";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === '◘') {
                    ctx.fillStyle = "blue";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === '0') {
                    // ignore
                } else if (c === 'G') {
                    ctx.fillStyle = "#00dfff";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === 'T') {
                    ctx.fillStyle = "#ff9fff";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === 'Y') {
                    ctx.fillStyle = "#ff2bff";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                }

                const tile = KDMapData.Tiles[(x) + "," + (y)];
                if (tile) {
                    if (tile.Type === "Trap") {
                        ctx.fillStyle = "rgba(255,0,0,0.5)";
                        ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                    }
                }

                if (c !== '░') {

                    // 设置文字样式
                    ctx.fillStyle = 'rgba(0,255,248,0.63)'; // 文字颜色
                    ctx.font = `${blockSize - 2}px Arial`; // 文字大小和字体
                    ctx.textAlign = 'center'; // 文字在方块内居中
                    ctx.textBaseline = 'middle'; // 文字基线设置为中间

                    // 绘制文字
                    ctx.fillText(c, x * blockSize + blockSize / 2, y * blockSize + blockSize / 2);

                }

                ++x;
            }
            ++y;
        }

        return {
            x: x,
            y: y,
            blockSize: blockSize,
            ctx: ctx,
        };
    }

    drawMapCanvas_KSs(node: HTMLCanvasElement, blockSize = 16) {
        let m = this.MapKSsMGet();
        let mm = m.split("\n");

        node.width = mm[0].split('').length * blockSize;
        node.height = mm.length * blockSize;
        node.style.width = node.width + 'px';
        node.style.height = node.height + 'px';

        const ctx: CanvasRenderingContext2D = node.getContext("2d")!;
        let y = 0;
        let x = 0;
        for (const l of mm) {
            if (l.length > 0) {
                x = 0;
            } else {
                continue;
            }
            for (const c of l.split('')) {

                if (c === '█') {
                    ctx.fillStyle = "black";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === '░') {
                    ctx.fillStyle = "gray";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === '▓') {
                    ctx.fillStyle = "yellow";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === '◘') {
                    ctx.fillStyle = "blue";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === '0') {
                    // ignore
                } else if (c === 'G') {
                    ctx.fillStyle = "#ff9fff";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                }

                // 设置文字样式
                ctx.fillStyle = 'rgba(0,255,248,0.63)'; // 文字颜色
                ctx.font = `${blockSize - 2}px Arial`; // 文字大小和字体
                ctx.textAlign = 'center'; // 文字在方块内居中
                ctx.textBaseline = 'middle'; // 文字基线设置为中间

                // 绘制文字
                ctx.fillText(c, x * blockSize + blockSize / 2, y * blockSize + blockSize / 2);

                ++x;
            }
            ++y;
        }

        return {
            x: x,
            y: y,
            blockSize: blockSize,
            ctx: ctx,
        };

    }

    // 开全图
    MapOpenFull() {
        KDMapData.FogGrid.fill(3);
    }

    MapOpenNone() {
        KDMapData.FogGrid.fill(0);
    }

    // KDMapData.Tiles
    // KinkyDungeonTilesSet(location, value)
    // function KD_PasteTile
    //

    // KinkyDungeonTilesSet((x + xx) + "," + (y + yy), {
    // Type: "Trap",
    // Trap: "BedTrap",
    // });
    //    "BarrelTrap",

    // "c" : (delta) => { // Unopened chest
    // "L" : (delta) => { // Barrel
    // let KDFurniture = {

    SetAllBedAreTrap() {
        let m = structuredClone(this.MapGrid);
        let mm = m.split("\n");
        for (let y = 0; y < mm.length; y++) {
            const mmm = mm[y];
            for (let x = 0; x < mmm.length; x++) {
                const c = mmm[x];
                if (c === 'B') {
                    KDMapData.Tiles[(x) + "," + (y)] = {
                        Type: "Trap",
                        Trap: "BedTrap",
                    };
                }
            }
        }
    }

    // function KinkyDungeonPlaceTraps( traps, traptypes, trapchance, doorlocktrapchance, Floor, width, height) {
    // if (hosttile == 'L' && KinkyDungeonStatsChoice.has("Nowhere") && KDRandom() < 0.25) {
    //     let tile = KinkyDungeonTilesGet(X + "," + Y) ? KinkyDungeonTilesGet(X + "," + Y) : {};
    //     KinkyDungeonTilesSet(X + "," + Y, Object.assign(tile, {
    //         Type: "Trap",
    //         Trap: tile.Furniture ? tile.Furniture + "Trap" : "BarrelTrap",
    //     }));
    // }

    SetAllBarrelAreTrap() {
        let m = structuredClone(this.MapGrid);
        let mm = m.split("\n");
        for (let y = 0; y < mm.length; y++) {
            const mmm = mm[y];
            for (let x = 0; x < mmm.length; x++) {
                const c = mmm[x];
                if (c === 'L') {
                    const tile = KDMapData.Tiles[(x) + "," + (y)];
                    if (tile) {
                        tile.Type = "Trap";
                        tile.Trap = tile.Furniture ? tile.Furniture + "Trap" : "BarrelTrap";
                    } else {
                        KDMapData.Tiles[(x) + "," + (y)] = {
                            Type: "Trap",
                            Trap: "BarrelTrap",
                        };
                    }
                }
            }
        }
    }

    // KinkyDungeonPlayerEntity

    //
    //	'Y': (moveX, moveY) => { // Open the chest
    // 		let allowManip = KDAllowUseItems(true);
    // 		if (allowManip) {
    // 			let chestType = KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint] == "lib" ? "shelf" : "rubble";
    // 			KinkyDungeonLoot(MiniGameKinkyDungeonLevel, KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint], chestType);
    // 			if (KDToggles.Sound) AudioPlayInstantSoundKD(KinkyDungeonRootDirectory + "Audio/Coins.ogg");
    // 			KinkyDungeonMapSet(moveX, moveY, 'X');
    // 			KDGameData.AlreadyOpened.push({x: moveX, y: moveY});
    // 		} else {
    // 			KinkyDungeonSendActionMessage(6, TextGet("KDCantTouchThat"), "#ff8800",1, false, true);
    // 		}
    // 		return true;
    // 	},
    //

    AllLibChestReset() {
        this.MapGrid = this.MapGrid.replaceAll('X', 'Y')
    }

}

import {uniq} from 'lodash';
import fabric from 'fabric';

function getRandomIndex(max: number, min: number = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
}

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

        const dataW = mm[0].split('').length;
        const dataH = mm.length;
        node.width = (dataW + 2) * blockSize;
        node.height = (dataH + 2) * blockSize;
        node.style.width = node.width + 'px';
        node.style.height = node.height + 'px';

        const ctx: CanvasRenderingContext2D = node.getContext("2d")!;
        let y = 0;
        let x = 0;
        // additional row
        for (let xx = 0; xx < dataW; xx++) {

            if (xx % 10 === 0) {
                ctx.fillStyle = "rgb(255,232,80)";
                ctx.fillRect((xx + 1) * blockSize, y * blockSize, blockSize, blockSize);
            } else {
                ctx.fillStyle = "rgb(22,53,82)";
                ctx.fillRect((xx + 1) * blockSize, y * blockSize, blockSize, blockSize);
            }

            ctx.font = `${blockSize}px Arial`; // 文字大小和字体
            ctx.textAlign = 'center'; // 文字在方块内居中
            ctx.textBaseline = 'middle'; // 文字基线设置为中间
            ctx.fillStyle = 'rgb(31,155,154)'; // 文字颜色
            ctx.fillText(`${xx % 10}`, (xx + 1) * blockSize + blockSize / 2, y * blockSize + blockSize / 2);
        }
        ++y;
        for (const l of mm) {
            if (l.length > 0) {
                x = 0;
            } else {
                continue;
            }
            // additional col
            if (y > 0) {
                if ((y - 1) % 10 === 0) {
                    ctx.fillStyle = "rgb(255,232,80)";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else {
                    ctx.fillStyle = "rgb(22,53,82)";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                }
                ctx.font = `${blockSize}px Arial`; // 文字大小和字体
                ctx.textAlign = 'center'; // 文字在方块内居中
                ctx.textBaseline = 'middle'; // 文字基线设置为中间
                ctx.fillStyle = 'rgb(31,155,154)'; // 文字颜色
                ctx.fillText(`${(y - 1) % 10}`, x * blockSize + blockSize / 2, y * blockSize + blockSize / 2);
            }
            ++x;
            for (const c of l.split('')) {
                const realY = (y - 1);
                const realX = (x - 1);

                if (c === '█') {
                    // up/down stair
                    ctx.fillStyle = "black";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === '░') {
                    // blank/wall
                    ctx.fillStyle = "rgba(255,255,255,0.5)";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === '▓') {
                    // Keyring
                    ctx.fillStyle = "yellow";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === '◘') {
                    // player
                    ctx.fillStyle = "#00ffff";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === 'G') {
                    // ghost
                    ctx.fillStyle = "#00dfff";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === 'T') {
                    // Trap
                    ctx.fillStyle = "#ff9fff";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === 'Y') {
                    // Chest (shelf(lib)/rubble)
                    ctx.fillStyle = "#ff2bff";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === '0' || c === '2') {
                    // floor
                    ctx.fillStyle = "rgba(0,146,255,0.68)";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (KDCornerTiles[c as keyof typeof KDCornerTiles]) {
                    // is CornerTiles
                    ctx.fillStyle = "rgba(0,255,248,0.63)";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === 'D') {
                    // Door
                    ctx.fillStyle = "rgba(206,206,206,0.25)";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else if (c === 'b') {
                    // window
                    ctx.fillStyle = "rgba(206,206,206,0.25)";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                }

                const tile = KDMapData.Tiles[realX + "," + realY];
                if (tile) {
                    if (tile.Type === "Trap") {
                        ctx.fillStyle = "rgba(255,0,0,0.5)";
                        ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                    }
                    if (tile.Type === "Shrine") {
                        if (tile.Quest) {
                            // ShrineAuraQuest
                            ctx.fillStyle = "rgb(173,106,255)";
                            ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                        }
                    }
                }

                if (c !== '░') {

                    // 设置文字样式
                    ctx.fillStyle = 'rgba(0,255,248,0.75)'; // 文字颜色
                    ctx.font = `${blockSize - 2}px Arial`; // 文字大小和字体
                    ctx.textAlign = 'center'; // 文字在方块内居中
                    ctx.textBaseline = 'middle'; // 文字基线设置为中间

                    if (c === '◘') {
                        // player
                        ctx.fillStyle = "#ff00ff";
                    }

                    // 绘制文字
                    ctx.fillText(c, x * blockSize + blockSize / 2, y * blockSize + blockSize / 2);

                }

                const ent = KDMapData.Entities.find((T: { x: number, y: number }) => T.x === realX && T.y === realY);
                if (ent) {

                    ctx.font = `bold ${blockSize + 3}px Arial`; // 文字大小和字体
                    ctx.textAlign = 'center'; // 文字在方块内居中
                    ctx.textBaseline = 'middle'; // 文字基线设置为中间

                    if ((ent.items as string[])?.find(T => T === 'Keyring')) {
                        ctx.fillStyle = 'rgba(255,255,0,1)'; // 文字颜色
                        // draw a circle char
                        ctx.fillText('◯', x * blockSize + blockSize / 2, y * blockSize + blockSize / 2);
                    } else {
                        ctx.fillStyle = 'rgb(255,202,204,1)'; // 文字颜色
                        // draw a rect char
                        ctx.fillText('▢', x * blockSize + blockSize / 2, y * blockSize + blockSize / 2);
                    }


                }

                ++x;
            }
            // additional col
            if (y > 0) {
                if ((y - 1) % 10 === 0) {
                    ctx.fillStyle = "rgb(255,232,80)";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                } else {
                    ctx.fillStyle = "rgb(22,53,82)";
                    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                }
                ctx.font = `${blockSize}px Arial`; // 文字大小和字体
                ctx.textAlign = 'center'; // 文字在方块内居中
                ctx.textBaseline = 'middle'; // 文字基线设置为中间
                ctx.fillStyle = 'rgb(31,155,154)'; // 文字颜色
                ctx.fillText(`${(y - 1) % 10}`, x * blockSize + blockSize / 2, y * blockSize + blockSize / 2);
            }

            ++y;
        }
        // additional row
        for (let xx = 0; xx < dataW; xx++) {

            if (xx % 10 === 0) {
                ctx.fillStyle = "rgb(255,232,80)";
                ctx.fillRect((xx + 1) * blockSize, y * blockSize, blockSize, blockSize);
            } else {
                ctx.fillStyle = "rgb(22,53,82)";
                ctx.fillRect((xx + 1) * blockSize, y * blockSize, blockSize, blockSize);
            }

            ctx.font = `${blockSize}px Arial`; // 文字大小和字体
            ctx.textAlign = 'center'; // 文字在方块内居中
            ctx.textBaseline = 'middle'; // 文字基线设置为中间
            ctx.fillStyle = 'rgb(31,155,154)'; // 文字颜色
            ctx.fillText(`${xx % 10}`, (xx + 1) * blockSize + blockSize / 2, y * blockSize + blockSize / 2);
        }

        return {
            x: x,
            y: y,
            blockSize: blockSize,
            ctx: ctx,
        };
    }

    drawMapCanvas_KKSs_fabric(node: HTMLCanvasElement, clickCallback: (x: number, y: number) => any, blockSize = 16,) {
        let m = this.MapKKSsMGet();
        let mm = m.split("\n");

        const dataW = mm[0].split('').length;
        const dataH = mm.length;

        // 设置原生节点尺寸
        node.width = (dataW + 2) * blockSize;
        node.height = (dataH + 2) * blockSize;

        // 1. 初始化 Fabric Canvas
        // 注意：如果这个函数会被反复调用，建议在外部持有 fabricCanvas 实例，
        // 这里使用 new fabric.Canvas 会重新包装原节点。
        const canvas = new fabric.Canvas(node, {
            selection: false,          // 禁用拖拽框选，提升手感
            renderOnAddRemove: false   // 【性能关键】等所有格子全加完再统一渲染
        });

        // 如果是重复利用同一个 canvas，需要清空之前的对象
        canvas.clear();

        const fabricObjects: fabric.Object[] = []; // 收集所有对象

        // 辅助函数：快速生成 Fabric 矩形
        const createRect = (left: number, top: number, fill: string) => {
            return new fabric.Rect({
                left: left + blockSize / 2,
                top: top + blockSize / 2,
                width: blockSize,
                height: blockSize,
                fill: fill,
                selectable: false, // 禁用单体拖拽
                evented: false     // 禁用单体事件，交由底层画布统一处理点击
            });
        };

        // 辅助函数：快速生成 Fabric 文字
        const createText = (text: string, left: number, top: number, fill: string, fontSize: number, isBold = false) => {
            return new fabric.Text(text, {
                // 文字定位点设为中心
                left: left + blockSize / 2,
                top: top + blockSize / 2,
                originX: 'center',
                originY: 'center',
                fill: fill,
                fontSize: fontSize,
                fontFamily: 'Arial',
                fontWeight: isBold ? 'bold' : 'normal',
                selectable: false,
                evented: false // 防止文字遮挡底下的点击事件
            });
        };

        let y = 0;
        let x = 0;

        // --- 上边框 (additional row) ---
        for (let xx = 0; xx < dataW; xx++) {
            const isYellow = (xx % 10 === 0);
            const fill = isYellow ? "rgb(255,232,80)" : "rgb(22,53,82)";
            fabricObjects.push(createRect((xx + 1) * blockSize, y * blockSize, fill));
            fabricObjects.push(createText(`${xx % 10}`, (xx + 1) * blockSize, y * blockSize, 'rgb(31,155,154)', blockSize));
        }
        ++y;

        // --- 地图主体内容 ---
        for (const l of mm) {
            if (l.length > 0) {
                x = 0;
            } else {
                continue;
            }

            // 左侧边框 (additional col)
            if (y > 0) {
                const isYellow = ((y - 1) % 10 === 0);
                const fill = isYellow ? "rgb(255,232,80)" : "rgb(22,53,82)";
                fabricObjects.push(createRect(x * blockSize, y * blockSize, fill));
                fabricObjects.push(createText(`${(y - 1) % 10}`, x * blockSize, y * blockSize, 'rgb(31,155,154)', blockSize));
            }
            ++x;

            for (const c of l.split('')) {
                const realY = (y - 1);
                const realX = (x - 1);
                const left = x * blockSize;
                const top = y * blockSize;

                // 绘制底色 Rect
                let bgColor = "rgba(255,255,255,0)"; // 默认透明
                if (c === '█') bgColor = "black";
                else if (c === '░') bgColor = "rgba(255,255,255,0.5)";
                else if (c === '▓') bgColor = "yellow";
                else if (c === '◘') bgColor = "#00ffff";
                else if (c === 'G') bgColor = "#00dfff";
                else if (c === 'T') bgColor = "#ff9fff";
                else if (c === 'Y') bgColor = "#ff2bff";
                else if (c === '0' || c === '2') bgColor = "rgba(0,146,255,0.68)";
                else if (KDCornerTiles[c as keyof typeof KDCornerTiles]) bgColor = "rgba(0,255,248,0.63)";
                else if (c === 'D' || c === 'b') bgColor = "rgba(206,206,206,0.25)";

                fabricObjects.push(createRect(left, top, bgColor));

                // 绘制附加 Tile 图层
                const tile = KDMapData.Tiles[realX + "," + realY];
                if (tile) {
                    if (tile.Type === "Trap") {
                        fabricObjects.push(createRect(left, top, "rgba(255,0,0,0.5)"));
                    }
                    if (tile.Type === "Shrine" && tile.Quest) {
                        fabricObjects.push(createRect(left, top, "rgb(173,106,255)"));
                    }
                }

                // 绘制底层字符文字
                if (c !== '░') {
                    const textColor = c === '◘' ? "#ff00ff" : 'rgba(0,255,248,0.75)';
                    fabricObjects.push(createText(c, left, top, textColor, blockSize - 2));
                }

                // 绘制 Entity (实体覆盖层文字)
                const ent = KDMapData.Entities.find((T: { x: number, y: number }) => T.x === realX && T.y === realY);
                if (ent) {
                    const hasKeyring = (ent.items as string[])?.find(T => T === 'Keyring');
                    const entChar = hasKeyring ? '◯' : '▢';
                    const entColor = hasKeyring ? 'rgba(255,255,0,1)' : 'rgb(255,202,204,1)';
                    fabricObjects.push(createText(entChar, left, top, entColor, blockSize + 3, true));
                }

                ++x;
            }

            // 右侧边框 (additional col)
            if (y > 0) {
                const isYellow = ((y - 1) % 10 === 0);
                const fill = isYellow ? "rgb(255,232,80)" : "rgb(22,53,82)";
                fabricObjects.push(createRect(x * blockSize, y * blockSize, fill));
                fabricObjects.push(createText(`${(y - 1) % 10}`, x * blockSize, y * blockSize, 'rgb(31,155,154)', blockSize));
            }
            ++y;
        }

        // --- 下边框 (additional row) ---
        for (let xx = 0; xx < dataW; xx++) {
            const isYellow = (xx % 10 === 0);
            const fill = isYellow ? "rgb(255,232,80)" : "rgb(22,53,82)";
            fabricObjects.push(createRect((xx + 1) * blockSize, y * blockSize, fill));
            fabricObjects.push(createText(`${xx % 10}`, (xx + 1) * blockSize, y * blockSize, 'rgb(31,155,154)', blockSize));
        }

        // 2. 批量添加到画布并触发单次渲染 (性能最佳)
        fabricObjects.forEach(obj => canvas.add(obj));
        canvas.renderAll();

        // 3. 核心功能：绑定鼠标点击事件 (全局监听，数学解算坐标)
        canvas.on('mouse:down', (options) => {
            // 获取点击在 Canvas 里的相对坐标
            const pointer = canvas.getScenePoint(options.e);

            // 数学反推：将像素坐标转换为网格坐标
            const gridX = Math.floor(pointer.x / blockSize);
            const gridY = Math.floor(pointer.y / blockSize);

            // 减去 1，因为最外圈有一层坐标轴
            const realX = gridX - 1;
            const realY = gridY - 1;

            // 判断是否点在了合法地图区域内
            if (realX >= 0 && realX < dataW && realY >= 0 && realY < dataH) {
                console.log(`[Mod] 请求瞬移坐标: X:${realX}, Y:${realY}`);

                // ==========================================
                // 在这里接入你的游戏瞬移逻辑，例如：
                // KDMapData.Player.x = realX;
                // KDMapData.Player.y = realY;
                // 重新渲染游戏主画布 / 关闭当前地图 UI 等
                // ==========================================

                clickCallback(realX, realY);
            }
        });

        return {
            x: x,
            y: y,
            blockSize: blockSize,
            canvasFabric: canvas, // 注意：返回的是 Fabric 的 Canvas 实例，不再是 ctx
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
                    // blank/wall
                    ctx.fillStyle = "#707070";
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
                } else if (c === 'A') {
                    // Shrine
                    if (KDMapData.Tiles[x + "," + y]?.Quest) {
                        // ShrineAuraQuest
                        console.log('ShrineAuraQuest', [x, y, KDMapData.Tiles[x + "," + y].Quest]);
                        ctx.fillStyle = "rgb(173,106,255)";
                        ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                    } else {
                        // ctx.fillStyle = "rgba(206,206,206,0.25)";
                        // ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
                    }
                }


                // 设置文字样式
                ctx.fillStyle = 'rgba(0,255,248,0.63)'; // 文字颜色
                ctx.font = `${blockSize - 2}px Arial`; // 文字大小和字体
                ctx.textAlign = 'center'; // 文字在方块内居中
                ctx.textBaseline = 'middle'; // 文字基线设置为中间

                if (c === '░') {
                    // blank/wall
                    ctx.fillStyle = "#c5c5c5";
                }

                // 绘制文字
                ctx.fillText(c, x * blockSize + blockSize / 2, y * blockSize + blockSize / 2);

                const ent = KDMapData.Entities.find((T: { x: number, y: number }) => T.x === x && T.y === y);
                if (ent) {

                    ctx.font = `bold ${blockSize + 2}px Arial`; // 文字大小和字体
                    ctx.textAlign = 'center'; // 文字在方块内居中
                    ctx.textBaseline = 'middle'; // 文字基线设置为中间

                    if ((ent.items as string[])?.find(T => T === 'Keyring')) {
                        ctx.fillStyle = 'rgba(255,255,0,1)'; // 文字颜色
                        // draw a circle char
                        ctx.fillText('◯', x * blockSize + blockSize / 2, y * blockSize + blockSize / 2);
                    }

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

    // 开全图
    MapOpenFull() {
        KDMapData.FogGrid.fill(3);
    }

    MapOpenNone() {
        KDMapData.FogGrid.fill(0);
    }

    protected SetMapTrap(callback: (x: number, y: number, n: string) => string | undefined) {
        let m = structuredClone(this.MapGrid);
        let mm = m.split("\n");
        for (let y = 0; y < mm.length; y++) {
            const mmm = mm[y];
            for (let x = 0; x < mmm.length; x++) {
                const c = mmm[x];
                callback(x, y, c) || c;
            }
        }
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

    // KDMapData.Tiles[]
    // Record<string, {}>
    // "14,39": {
    //   "Type": "Trap",
    //   "Spell": "TrapLatexBubble",
    //   "Power": 3
    // }
    // "14,39": {
    //   "Type": "Trap",
    //   "Trap": "SpecificSpell",
    //   "Spell": "TrapLatexBubble",
    //   "Power": 3
    // }
    //
    // KinkyDungeonMapParams[(KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint] || MiniGameKinkyDungeonCheckpoint)] as floorParams
    // .traps
    //
    // function KinkyDungeonPlaceTraps(traps: any[], traptypes: any[],
    //
    //      let t = KinkyDungeonGetTrap(traptypes, Floor, []);
    //		=	return {
    // 				StepOffTrap: trapWeights[L].trap.StepOffTrap,
    // 				Name: trapWeights[L].trap.Name,
    // 				Restraint: trapWeights[L].trap.Restraint,
    // 				Enemy: trapWeights[L].trap.Enemy,
    // 				FilterTag: trapWeights[L].trap.filterTag,
    // 				FilterBackup: trapWeights[L].trap.filterBackup,
    // 				Spell: trapWeights[L].trap.Spell,
    // 				Power: trapWeights[L].trap.Power,
    // 				extraTag: trapWeights[L].trap.extraTag,
    // 				Hostile: undefined,
    // 				Faction: undefined,
    // 			};
    //      KinkyDungeonMapSet(trap.x, trap.y, 'T');
    //      KinkyDungeonTilesSet(trap.x + "," + trap.y, {
    //      	Type: "Trap",
    //      	Trap: t.Name,
    //      	Restraint: t.Restraint,
    //      	Enemy: t.Enemy,
    //      	Hostile: t.Hostile,
    //      	Faction: t.Faction,
    //      	FilterTag: t.FilterTag,
    //      	FilterBackup: t.FilterBackup,
    //      	Spell: t.Spell,
    //      	extraTag: t.extraTag,
    //      	Power: t.Power,
    //      	OL: tile?.OL,
    //      });
    // function KDCreateEffectTile(x: number, y: number, tile: effectTileRef, durationMod: number): effectTile
    // KDEffectTiles: Record<string, effectTile>
    //   tile: effectTileRef
    //      let duration = (tile.duration ? tile.duration : KDEffectTiles[tile.name].duration) + KDRandom() * (durationMod ? durationMod : 0);
    // 		let tt = Object.assign({x: x, y: y}, KDEffectTiles[tile.name]);
    // 		Object.assign(tt, tile);
    // 		tt.duration = duration;
    // 		if (!KinkyDungeonEffectTilesGet(x + "," + y)) {
    // 			KinkyDungeonEffectTilesSet(x + "," + y, {});
    // 		}
    // 		KDGetEffectTiles(x, y)[tt.name] = tt;
    // 		createdTile = tt;
    // 		KDInteractNewTile(createdTile);
    // 		return createdTile;

    SetTrapAt(position?: { x: number, y: number }, trapSpell?: string/* = 'TrapLatexBubble'*/) {
        let altType = KDGetAltType(MiniGameKinkyDungeonLevel);
        let drawFloor = altType?.skin ? altType.skin : (KinkyDungeonMapIndex[MiniGameKinkyDungeonCheckpoint] || MiniGameKinkyDungeonCheckpoint);
        // floorParams
        const traps = KinkyDungeonMapParams[drawFloor].traps;
        if (!traps) {
            console.warn('No traps found for floor', drawFloor);
            return;
        }
        // 		"traps": [
        // 			{Name: "CustomSleepDart", Level: 0, Power: 1, Weight: 20},
        // 			{Name: "SpecificSpell", Spell: "TrapRopeWeak", Level: 0, Power: 3, Weight: 30},
        // 			{Name: "SpecificSpell", Spell: "TrapRopeStrong", Level: 0, Power: 3, Weight: 30},
        // 			{Name: "SpecificSpell", Spell: "TrapLeatherWeak", Level: 0, Power: 3, Weight: 30},
        // 			{Name: "SpecificSpell", Spell: "TrapMagicChainsWeak", Level: 0, Power: 3, Weight: 30},
        // 			{Name: "SpecificSpell", Spell: "TrapLatexBubble", Level: 0, Power: 3, Weight: 30, BlockedByPerks: ["BubbleOptout"]},
        // 			{Name: "SpecificSpell", Spell: "TrapLatexBall", Level: 0, Power: 3, Weight: 7, BlockedByPerks: ["SlimeOptout"]},
        // 			{Name: "SpawnEnemies", Enemy: "Dressmaker", strict: true, Level: 0, Power: 2, Weight: 10},
        // 			{Name: "SpawnEnemies", Enemy: "Librarian", strict: true, Level: 4, Power: 1, Weight: 5},
        // 			{Name: "SpecificSpell", Spell: "TrapLinks", Level: 4, Power: 1, Weight: 40},
        //
        // 			{Name: "SpawnEnemies", Enemy: "Gag", strict: true, Level: 0, Power: 2, Weight: 10, filterTag: "ItemMouthFull", filterBackup: "BookBondage"},
        // 			{Name: "SpawnEnemies", Enemy: "Cuffs", strict: true, Level: 0, Power: 2, Weight: 10, filterTag: "ItemArmsFull", filterBackup: "BookBondage"},
        // 			{Name: "SpawnEnemies", Enemy: "AnimBlindfold", strict: true, Level: 0, Power: 2, Weight: 10, filterTag: "ItemHeadFull", filterBackup: "BookBondage"},
        // 			{Name: "SpawnEnemies", Enemy: "AnimYoke", strict: true, Level: 0, Power: 2, Weight: 10, filterTag: "ItemArmsFull", filterBackup: "BookBondage"},
        // 			{Name: "SpawnEnemies", Enemy: "AnimArmbinder", strict: true, Level: 0, Power: 2, Weight: 10, filterTag: "ItemArmsFull", filterBackup: "BookBondage"},
        // 			{Name: "SpawnEnemies", Enemy: "AnimHarness", strict: true, Level: 0, Power: 2, Weight: 10, filterTag: "ItemTorsoFull", filterBackup: "BookBondage"},
        // 			{Name: "SpawnEnemies", Enemy: "AnimChastity", strict: true, Level: 0, Power: 2, Weight: 10, arousalMode: true, filterTag: "ItemPelvisFull", filterBackup: "BookBondage"},
        // 			{Name: "SpawnEnemies", Enemy: "AnimStraitjacket", strict: true, Level: 0, Power: 2, Weight: 10, filterTag: "ItemArmsFull", filterBackup: "BookBondage"},
        // 		],
        const trapList = traps.filter(T => T.Name === 'SpecificSpell' && !!T.Spell?.startsWith('Trap'));

        // console.log('traps', traps);
        // console.log('trapList', trapList);

        if (trapList.length === 0) {
            console.warn('No traps found for spell');
            return;
        }

        const pos = position ?? this.PlayerPosition();
        let trap;
        if (trapSpell) {
            trap = trapList.find((trap) => trap.Spell === trapSpell);
        } else {
            trap = trapList[getRandomIndex(trapList.length)];
        }
        if (!trap) {
            console.warn('No trap found for spell', trapSpell);
            return;
        }
        KinkyDungeonMapSet(pos.x, pos.y, 'T')/* ? console.log('SetMap Ok') : console.warn('SetMap Failed')*/;
        const TilesData = KinkyDungeonTilesSet(pos.x + "," + pos.y, {
            Type: "Trap",
            Trap: trap?.Name,
            Restraint: (<any>trap)?.Restraint,
            Enemy: trap?.Enemy,
            // Hostile: (<any>trap)?.Hostile,
            // Faction: trap?.Faction,
            FilterTag: trap?.filterTag,
            FilterBackup: trap?.filterBackup,
            Spell: trap?.Spell,
            extraTag: trap?.extraTag,
            Power: trap?.Power,
            // OL: tile?.OL,
        });
        // console.log('TilesData', TilesData);

    }

    FillAll0ToTap() {
        this.SetMapTrap((x, y, c) => {
            if (c === '0') {
                this.SetTrapAt({x, y});
            }
            return c;
        });
    }

    FillAll2ToTap() {
        this.SetMapTrap((x, y, c) => {
            if (c === '2') {
                this.SetTrapAt({x, y});
            }
            return c;
        });
    }

    SetAllBedAreTrap() {
        this.SetMapTrap((x, y, c) => {
            if (c === 'B') {
                KDMapData.Tiles[(x) + "," + (y)] = {
                    Type: "Trap",
                    Trap: "BedTrap",
                };
            }
            return c;
        });
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
        this.SetMapTrap((x, y, c) => {
            if (c === 'L') {
                const tile = KDMapData.Tiles[(x) + "," + (y)];
                const j = KDMapData.JailPoints.find((T: {
                    x: number,
                    y: number,
                    type: string
                }) => T.x === x && T.y === y);
                // if (j && tile) {
                //     // ignore it
                //     return;
                // }
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
            return c;
        });
    }

    SetAll_L_AreDisplayStand() {
        this.SetMapTrap((x, y, c) => {
            if (c === 'L') {
                const tile = KDMapData.Tiles[(x) + "," + (y)];
                const j = KDMapData.JailPoints.find((T: {
                    x: number,
                    y: number,
                    type: string
                }) => T.x === x && T.y === y);
                if (j) {
                    j.type = "furniture";
                } else {
                    KDMapData.JailPoints.push({x: x, y: y, type: "furniture", radius: 1});
                }
                KDMapData.Tiles[(x) + "," + (y)] = {Type: "Trap", Furniture: "DisplayStand", Trap: "DisplayStandTrap"};
            }// DollStand
            return c;
        });
    }

    SetAll_L_AreCage() {
        this.SetMapTrap((x, y, c) => {
            if (c === 'L') {
                const tile = KDMapData.Tiles[(x) + "," + (y)];
                const j = KDMapData.JailPoints.find((T: {
                    x: number,
                    y: number,
                    type: string
                }) => T.x === x && T.y === y);
                if (j) {
                    j.type = "furniture";
                } else {
                    KDMapData.JailPoints.push({x: x, y: y, type: "furniture", radius: 1});
                }
                KDMapData.Tiles[(x) + "," + (y)] = {Type: "Trap", Furniture: "Cage", Trap: "CageTrap"};
            }
            return c;
        });
    }

    // function KinkyDungeonMapSet(X, Y, SetTo, VisitedRooms)
    // KDTrapTypes : Record<string, KDTrapType>
    // let KDTileGen
    // const KDOverlays = {
    // KDMapData.JailPoints
    // 	"L": (x, y, Fog, noReplace) => {
    // 		if (KinkyDungeonTilesGet(x + "," + y)) {
    // 			let furn = KinkyDungeonTilesGet(x + "," + y).Furniture ? KDFurniture[KinkyDungeonTilesGet(x + "," + y).Furniture] : "";
    // 			if (furn) {
    // 				return furn.sprite;
    // 			}
    // 		}
    // 	},


    // ResetAllTrap() {
    //     let m = structuredClone(this.MapGrid);
    //     let mm = m.split("\n");
    //     for (let y = 0; y < mm.length; y++) {
    //         const mmm = mm[y];
    //         for (let x = 0; x < mmm.length; x++) {
    //             const c = mmm[x];
    //             if (c === 'L') {
    //                 const tile = KDMapData.Tiles[(x) + "," + (y)];
    //                 if (tile) {
    //                     tile.Type = "Trap";
    //                     tile.Trap = tile.Furniture ? tile.Furniture + "Trap" : "BarrelTrap";
    //                 } else {
    //                     KDMapData.Tiles[(x) + "," + (y)] = {
    //                         Type: "Trap",
    //                         Trap: "BarrelTrap",
    //                     };
    //                 }
    //             }
    //         }
    //     }
    // }

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

    // KDSpecialChests
    // let KDSpecialChests = {
    // 	"silver" : "ChestSilver",
    // 	"shadow" : "ChestShadow",       // the de-buff `Cursed` Wears Chest
    // 	"lessershadow" : "ChestShadow",
    // 	"kitty" : "Chests/Kitty",
    // 	"robot" : "Chests/Robot",
    // };
    //
    // KinkyDungeonMapSet(cornerX + 2, cornerY + 2, 'C');
    // KinkyDungeonTilesSet((cornerX + 2) + "," + (cornerY + 2), {
    // 	Loot: "shadow", Roll: KDRandom(),
    // 	lootTrap: KDGenChestTrap(true, cornerX + 2, cornerY + 2, "shadow", undefined, false)}
    // );
    SetAllChestsToSpecialChests(
        type: (keyof SpecialChestsType) | HandsFreeChestType,
    ) {
        this.SetMapTrap((x, y, c) => {
                if (c === 'C') {
                    const tile = KDMapData.Tiles[(x) + "," + (y)];
                    if (tile) {
                        KDMapData.Tiles[(x) + "," + (y)].Loot = type;
                        if (type === 'shadow') {
                            KDMapData.Tiles[(x) + "," + (y)].lootTrap =
                                KDGenChestTrap(true, x, y, "shadow", undefined, false);
                        }
                    }
                }
                return c;
            }
        );
    }

    GetAllSpecialChestsType() {
        return uniq(Object.getOwnPropertyNames(KDSpecialChests).concat(KDHandsfreeChestTypes));
    }

// 	"c": (x, y, Fog, noReplace) => {
// 		return (KinkyDungeonTilesGet(x + "," + y) && (KinkyDungeonTilesGet(x + "," + y).Loot == "gold" || KinkyDungeonTilesGet(x + "," + y).Loot == "lessergold")) ? "ChestGoldOpen" :
// 		((KinkyDungeonTilesGet(x + "," + y) && (KDSpecialChests[KinkyDungeonTilesGet(x + "," + y).Loot])) ? KDSpecialChests[KinkyDungeonTilesGet(x + "," + y).Loot] + "Open" :
// 			((KinkyDungeonTilesGet(x + "," + y) && (KinkyDungeonTilesGet(x + "," + y).Loot == "blue")) ? "ChestBlueOpen" :
// 			((KinkyDungeonTilesGet(x + "," + y) && (KinkyDungeonTilesGet(x + "," + y).Loot == "dark")) ? "ChestDarkOpen" :
// 			((KinkyDungeonTilesGet(x + "," + y) && (KinkyDungeonTilesGet(x + "," + y).Loot == "pearl" || KinkyDungeonTilesGet(x + "," + y).Loot == "lesserpearl")) ? "ChestPearlOpen" : "ChestOpen"))));
// 	},
//
// 	"C": (x, y, Fog, noReplace) => {
// 		return (KinkyDungeonTilesGet(x + "," + y) && (KinkyDungeonTilesGet(x + "," + y).Loot == "gold" || KinkyDungeonTilesGet(x + "," + y).Loot == "lessergold")) ? "ChestGold" :
// 		((KinkyDungeonTilesGet(x + "," + y) && (KDSpecialChests[KinkyDungeonTilesGet(x + "," + y).Loot])) ? KDSpecialChests[KinkyDungeonTilesGet(x + "," + y).Loot] :
// 		((KinkyDungeonTilesGet(x + "," + y) && (KinkyDungeonTilesGet(x + "," + y).Loot == "blue")) ? "ChestBlue" :
// 		((KinkyDungeonTilesGet(x + "," + y) && (KinkyDungeonTilesGet(x + "," + y).Loot == "dark")) ? "ChestDark" :
// 		((KinkyDungeonTilesGet(x + "," + y) && (KinkyDungeonTilesGet(x + "," + y).Loot == "pearl" || KinkyDungeonTilesGet(x + "," + y).Loot == "lesserpearl")) ? "ChestPearl" : "Chest"))));
// 	},
    ReSetAllChests() {
        this.MapGrid = this.MapGrid.replaceAll('c', 'C');
    }

    ListAllCheatsInMap() {
        const cheatsList: any[] = [];
        this.SetMapTrap((x, y, c) => {
                if (c === 'C') {
                    const tile = KDMapData.Tiles[(x) + "," + (y)];
                    if (tile) {
                        cheatsList.push({
                            x: x,
                            y: y,
                            LootType: tile.Loot,
                            tile: tile,
                        });
                    }
                }
                return c;
            }
        );
        console.log('ListAllCheats', cheatsList);
        return cheatsList;
    }

    PlayerMove(x: number, y: number) {
        // function KDMovePlayer(moveX: number, moveY: number, willing: boolean, sprint?: boolean, forceHitBullets?: boolean, suppressNoise?: boolean, noEvent?: boolean): boolean
        return KDMovePlayer(x, y, true, false, false, false, false);
    }

    PlayerJump(x: number, y: number) {
        return KDMovePlayer(x, y, true, false, false, false, true);
    }

    PlayerPosition() {
        return {x: KinkyDungeonPlayerEntity.x, y: KinkyDungeonPlayerEntity.y};
    }

    CanEscape() {
        let escapeMethod = KDGetEscapeMethod(MiniGameKinkyDungeonLevel);
        let escape = KDCanEscape(escapeMethod);
        let escapeText = KDGetEscapeMinimapText(escapeMethod);
        return {
            escape,
            escapeText,
        };
    }

}

const SpecialChestsList = {
    silver: "ChestSilver",
    shadow: "ChestShadow",
    lessershadow: "ChestShadow",
    kitty: "Chests/Kitty",
    robot: "Chests/Robot",
} as const;

type SpecialChestsType = typeof SpecialChestsList;

// let KDHandsfreeChestTypes = ["shadow", "lessershadow", "gold", "robot", "kitty"];
const HandsfreeChestTypes = ["shadow", "lessershadow", "gold", "robot", "kitty"] as const;

type HandsFreeChestType = typeof HandsfreeChestTypes[number];

// Charm Trap
// 绷带陷阱
// Ribbon Trap
// 丝带陷阱
// Shackle Trap
// 镣铐陷阱
// Mummy Trap
// 木乃伊陷阱
// Rope Trap
// 绳陷阱
// Holy Rope Trap
// 神圣绳陷阱
// Belt Trap
// 束带陷阱
// Cable Trap
// 钢索陷阱
// Slime Trap
// 粘液陷阱
// Chain Trap
// 锁链陷阱
// Shadow Latex Trap
// 暗影乳胶陷阱
//
// KinkyDungeonSpellTrapCharmWeak,Charm Trap
// KinkyDungeonSpellTrapRibbons,Ribbon Trap
// KinkyDungeonSpellTrapShackleWeak,Shackle Trap
// KinkyDungeonSpellTrapMummyWeak,Mummy Trap
// KinkyDungeonSpellTrapRopeWeak,Rope Trap
// KinkyDungeonSpellTrapRopeStrong,Rope Trap
// KinkyDungeonSpellTrapRopeHoly,Holy Rope Trap
// KinkyDungeonSpellTrapLeatherWeak,Belt Trap
// KinkyDungeonSpellTrapCableWeak,Cable Trap
// KinkyDungeonSpellTrapSlimeWeak,Slime Trap
// KinkyDungeonSpellTrapMagicChainsWeak,Chain Trap
// KinkyDungeonSpellTrapShadowLatex,Shadow Latex Trap
// KinkyDungeonSpellTrapObsidian,Demonic Sigil
// KinkyDungeonSpellTrapCrystal,Unstable Crystals
// KinkyDungeonSpellTrapLustCloud,Gas Trap
// KinkyDungeonSpellTrapSCloud,Gas Trap
// KinkyDungeonSpellTrapLatex,Latex Engulfment
// KinkyDungeonSpellTrapSleepDart,Sleep Dart
// KinkyDungeonSpellSleepDart,Sleep Dart


// KinkyDungeonEscapeList.js
// let KinkyDungeonEscapeTypes = {


//
// if (KinkyDungeonStatsChoice.get("escapeselect")) {
//     DrawTextFitKD(TextGet("KDEscapeMethod_" + KDPerkOrbMethod), 1250, 200 + count * pspacing, Twidth, "#ffffff", KDTextGray2, 30);
//     DrawTextFitKD(TextGet("KDEscapeMethodDesc_" + KDPerkOrbMethod), 1250, 235 + count * pspacing, Twidth, "#ffffff", KDTextGray2, 22);
//

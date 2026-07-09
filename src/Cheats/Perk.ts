export function addCheatPerk() {
    KinkyDungeonStatsPresets['CheatPerk1'] = {
        startPriority: 1001,
        category: "Start",
        id: "CheatPerk1",
        cost: -100,
        tags: ["start"]
    }
    KinkyDungeonStatsPresets['CheatPerk2'] = {
        startPriority: 1002,
        category: "Start",
        id: "CheatPerk2",
        cost: -1000,
        tags: ["start"]
    }
    KDLoadPerks();

    const textKeyPrefix = 'KinkyDungeonStat';
    const textKeyDescPrefix = 'KinkyDungeonStatDesc';
    addTextKey(textKeyPrefix + 'CheatPerk1', '作弊 Perk 1');
    addTextKey(textKeyDescPrefix + 'CheatPerk1', '过来，我让你看个好康的。');
    addTextKey(textKeyPrefix + 'CheatPerk2', '作弊 Perk 2');
    addTextKey(textKeyDescPrefix + 'CheatPerk2', '真的不康康这个吗？！');

    // @ts-ignore
    KDPerkUpdateStats['CheatPerk1'] = () => {
    };
    // @ts-ignore
    KDPerkUpdateStats['CheatPerk2'] = () => {
    };

}


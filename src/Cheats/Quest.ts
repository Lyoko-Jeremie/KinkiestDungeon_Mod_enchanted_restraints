export class Quest {
    ListAllQuestWithInfo = () => {
        return Object.values(KDQuests)
            .map(T => this.GetQuestText(T.name))
            .filter(T => !!T) as NonNullable<ReturnType<Quest['GetQuestText']>>[];
    };
    ListAllQuest = () => {
        return Object.values(KDQuests).map(T => T.name);
    };
    ListAllQuestHasAcceptWithInfo = () => {
        return Object.values(KDQuests).filter(T => T.accept)
            .map(T => this.GetQuestText(T.name))
            .filter(T => !!T) as NonNullable<ReturnType<Quest['GetQuestText']>>[];
    };
    ListAllQuestHasAccept = () => {
        return Object.values(KDQuests).filter(T => T.accept).map(T => T.name);
    };
    ListNowAcceptedQuest = (): NonNullable<ReturnType<Quest['GetQuestText']>>[] => {
        return KDGameData.Quests.map(T => KDQuests[T])
            .filter(T => T?.name)
            .map(T => this.GetQuestText(T.name))
            .filter(T => !!T) as NonNullable<ReturnType<Quest['GetQuestText']>>[];
    };
    AcceptQuest = (questName: string) => {
        if (!questName || !KDQuests[questName]) {
            console.error('RemoveQuest() unknown questName:', questName);
            return;
        }
        KDAddQuest(questName);
    };
    RemoveQuest = (questName: string) => {
        if (!questName || !KDQuests[questName]) {
            console.error('RemoveQuest() unknown questName:', questName);
            return;
        }
        KDRemoveQuest(questName);
    };
    RemoveAllQuest = () => {
        KDGameData.Quests.map(T => KDQuests[T])
            .filter(T => T?.name)
            .map(T => KDRemoveQuest(T.name));
    };
    GetQuestText = (questName: string) => {
        const q = KDQuests[questName];
        if (q) {
            return {
                key: q.name,
                name: TextGet(`KDQuest_${q.name}`),
                Fail: TextGet(`KDQuestFail_${q.name}`),
                Succeed: TextGet(`KDQuestSucceed_${q.name}`),
                SucceedSub: TextGet(`KDQuestSucceedSub_${q.name}`),
                hasAccept: !!q.accept,
                accepted: KDGameData.Quests.includes(q.name),
            };
        }
        return undefined;
    };
    UnlockAllQuestLock = () => {
        for (let inv of KinkyDungeonAllRestraintDynamic()) {
            if (inv.item.lock == "Divine") KinkyDungeonLock(inv.item, "");
        }
    };

}

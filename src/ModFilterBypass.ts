export class ModFilterBypass {
    constructor(public winRef: Window) {
        // this.installHook();
        setTimeout(this.waitKDLoadingFinished, 100);
    }

    bootFileList: string[] = [
        'enchanted_restraints.ks.bypass'
    ];

    async bootFile() {
        console.log('bootFile()...');
        let reader = new FileReader();
        for (const filename of this.bootFileList) {
            const f = KDModFiles[KinkyDungeonRootDirectory + filename];
            if (!f) {
                console.log(`ModFilterBypass: bootFile: ${filename} not found`);
                continue;
            }

            let blob = await fetch(f).then(r => r.blob());

            let file = new File([blob], filename);
            reader.onload = function (event) {
                console.log("ModFilterBypass EXECUTING FILE : " + file.name);
                if (typeof event.target?.result === "string") {
                    eval(event.target.result);
                }
            };
            reader.readAsText(file);
        }
    }

    old_KDLoadPerks?: Function

    installHook() {
        this.old_KDLoadPerks = KDLoadPerks;
        const self = this;
        KDLoadPerks = () => {
            self.hook_KDLoadPerks();
            self.old_KDLoadPerks!.apply(this, arguments);
        }
    }

    hook_KDLoadPerks() {
        this.bootFile();
    }

    waitInitCounter = 0;
    waitKDLoadingFinished = () => {
        if (this.waitInitCounter > 100) {
            // don't wait it
            console.log('[KinkiestDungeon enchanted_restraints Mod [ModFilterBypass]] (waitInitCounter > 100) dont wait it');
            return;
        }
        //@ts-ignore
        if (!KDLoadingFinished) {
            ++this.waitInitCounter;
            setTimeout(this.waitKDLoadingFinished, 500);
            return;
        }
        this.bootFile();
        console.log('[KinkiestDungeon enchanted_restraints Mod [ModFilterBypass]] waitKDLoadingFinished ok');
    };
}

if (!window.gEnchantedRestraintsModFilterBypass) {
    window.gEnchantedRestraintsModFilterBypass = new ModFilterBypass(window);
} else {
    console.log('gEnchantedRestraintsModFilterBypass already exists');
}




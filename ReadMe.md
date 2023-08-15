## this is a [KinkiestDungeon](https://github.com/Ada18980/KinkiestDungeon) game's cheat Mod

this mod add some Enchanted Restraints to game for fun.


---
## how to use

download the ` enchanted_restraints.zip` Zip file from [release page](https://github.com/Lyoko-Jeremie/KinkiestDungeon_Mod_enchanted_restraints/releases), load it in main menu right bottom `Mod` menu, then start the game.

all the function must call in the develop console, press F12 to open it

---
## mod function

all the usage fun in the `Mod_EnchantedRestraints` or `KinkyDungeonMod_EnchantedRestraints`

example: 

> Apply Custom new Restraints in this Mod : `Mod_EnchantedRestraints.ApplyModRestraint()`

> Bootstrap all base Cheat when new game start : `Mod_EnchantedRestraints.Cheats.BootstrapAllGood()`

> Init a SpellChoice when new game start : `Mod_EnchantedRestraints.Cheats.BootstrapSpellChoicesTable()`

> enable the FullStat Cheat : `Mod_EnchantedRestraints.Cheats.FullStatOn()`

> disable the FullStat Cheat : `Mod_EnchantedRestraints.Cheats.FullStatOff()`

### follow is the api list:

```js

// Apply all the new Restraints in this Mod
Mod_EnchantedRestraints.ApplyModRestraint()

// ===vvvvvvvv=== follow it cheats api list, and some function origin game not export ===vvvvvvvv===

// enable the FullStat
Mod_EnchantedRestraints.Cheats.FullStatOn()
// disable the FullStat
Mod_EnchantedRestraints.Cheats.FullStatOff()
// Add some Distraction
Mod_EnchantedRestraints.Cheats.AddDistraction(/*add offset [option = 10]*/)
//
Mod_EnchantedRestraints.Cheats.SetSpellPoints(/*Points [option = 10000]*/)
//
Mod_EnchantedRestraints.Cheats.SetAncientEnergy(/*AncientEnergy [option , 0.0~1.0]*/)
// add all the keys*1000 and gold*10000000
Mod_EnchantedRestraints.Cheats.AddManyKeys()
// add all the Potion*1000
Mod_EnchantedRestraints.Cheats.AddManyPotion()
// add all the Weapon to Inventory
Mod_EnchantedRestraints.Cheats.AddAllWeapon()
// add all the Outfit to Inventory
Mod_EnchantedRestraints.Cheats.AddAllOutfit()
// add all the Consumables*1000 , keys are not Consumables
Mod_EnchantedRestraints.Cheats.AddAllConsumables()
// add all the Restraints to Inventory
Mod_EnchantedRestraints.Cheats.AddAllRestraints()
// Remove All first layer Restraint , maybe need exe many time to remove all Restraint
Mod_EnchantedRestraints.Cheats.RemoveAllRestraint()
// Remove All layer Restraint , it will remove Restraint link
Mod_EnchantedRestraints.Cheats.RemoveAllRestraintDynamic()
//
Mod_EnchantedRestraints.Cheats.DebugSee.ShowAllRestraint()
//
Mod_EnchantedRestraints.Cheats.DebugSee.ShowAllRestraintDynamic()
//
Mod_EnchantedRestraints.Cheats.DebugSee.ShowAllRestraintDynamicName()
// wear Restraints of Slime
Mod_EnchantedRestraints.Cheats.WearSlime(/*key name [option]*/)
// wear Restraints of Wolf
Mod_EnchantedRestraints.Cheats.WearWolf(/*key name [option]*/)
// wear Restraints of Glue
Mod_EnchantedRestraints.Cheats.WearGlue(/*key name [option]*/)
// wear Restraints of Dress
Mod_EnchantedRestraints.Cheats.WearDress(/*key name [option]*/)
// wear Restraints of Crystal
Mod_EnchantedRestraints.Cheats.WearCrystal(/*key name [option]*/)
// wear Restraints of Bandit
Mod_EnchantedRestraints.Cheats.WearBandit(/*key name [option]*/)
// wear Restraints of Ice
Mod_EnchantedRestraints.Cheats.WearIce(/*key name [option]*/)
// wear Restraints of Ribbon
Mod_EnchantedRestraints.Cheats.WearRibbon(/*key name [option]*/)
// wear Restraints of Enchanted
Mod_EnchantedRestraints.Cheats.WearEnchanted(/*key name [option]*/)
// wear Restraints of Kitty
Mod_EnchantedRestraints.Cheats.WearKitty(/*key name [option]*/)
// wear Restraints of MageArmor
Mod_EnchantedRestraints.Cheats.WearMageArmor(/*key name [option]*/)
// wear Restraints of MysticDuct
Mod_EnchantedRestraints.Cheats.WearMysticDuct(/*key name [option]*/)
// wear Restraints of Divine
Mod_EnchantedRestraints.Cheats.WearDivine(/*key name [option]*/)
// wear Restraints of Vibe
Mod_EnchantedRestraints.Cheats.WearVibe(/*key name [option]*/)
// wear Restraints of Crystal
Mod_EnchantedRestraints.Cheats.WearCrystal(/*key name [option]*/)
// wear Restraints of ShadowHand
Mod_EnchantedRestraints.Cheats.WearShadowHand(/*key name [option]*/)

// make All Relations Full
Mod_EnchantedRestraints.Cheats.FullAllRelations()
// make All Goddess Full
Mod_EnchantedRestraints.Cheats.FullAllGoddess()

// add a Choice
Mod_EnchantedRestraints.Cheats.AddOneChoice(/*the choice key name*/)
// add some good Choice
Mod_EnchantedRestraints.Cheats.AddCheatChoice()
// add some bad Choice
Mod_EnchantedRestraints.Cheats.AddCheatChoiceNegative()
// show all Choice now enabled
Mod_EnchantedRestraints.Cheats.DebugSee.ShowAllChoice()
// enable HardMode, 
// the HardMode auto enable when bad Choice point - good Choice point > 10 in origin game
Mod_EnchantedRestraints.Cheats.HardModeEnable()
// disable HardMode
Mod_EnchantedRestraints.Cheats.HardModeDisable()

// export Save Game String, this function implement in origin game code but not have a GUI
Mod_EnchantedRestraints.Cheats.SaveLoad.GameSaveDataString()
// load Save Game String
Mod_EnchantedRestraints.Cheats.SaveLoad.LoadGameSaveString(/*Game Save String from GameSaveDataString()*/)




```

```js

// follow are keys can be lock in Restraints,
// but some of Restraints have its special lock cannot to be lock by special key
Mod_EnchantedRestraints.Cheats.LockList = {
    Purple: "Purple", // unlock by command magic, dont need key
    Red: "Red",
    White: "White",
    Blue: "Blue",   // unlock by magic key
    Gold: "Gold",   // unlock by MistressKey
};

// and game have MistressKey lock, GhostLock, they are be a special lock set in  Restraints config
// MistressKey lock unlock by MistressKey
// GhostLock unlock by Ectoplasm

```

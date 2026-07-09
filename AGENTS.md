# AGENTS.md

***Follow Content Must Read With UTF-8 Encoding***

## 项目说明
这是一个 KinkiestDungeon 游戏的 作弊 Mod 项目

## 开发指南
当前环境是 PowerShell
所有源码内容使用 UTF-8 编码
当前操作系统上有 ripgrep (rg) ， 可以使用 `rg` 命令进行文件内容搜索

## 目录结构
- src ： 源码目录
- PortableSimpleUi ： 一个简易的 UI 库，由于游戏是在启动后手动加载并执行mod编译后生成的js文件的，故UI框架需要在已经启动完毕的网页上支持完全异步侧载。PortableSimpleUi使用ZoneJs等多种方法来实现双向绑定。
- PortableUi ： 废弃的 UI 库，已被 PortableSimpleUi 替代。不要使用。
- src/Cheats ： 游戏作弊功能模块
- src/FunctionPatch ： 函数挂钩工具
- src/GM_config_TS ： 旧版的基于 Tampermonkey 的 UI 库，现在已经切换为使用 PortableSimpleUi 库来实现 UI 功能。
- src/GreasemonkeyScript ： 旧版的基于 Tampermonkey 的 UI 库，的实现版本，已弃用，正在迁移到 PortableSimpleUi 库来实现 UI 功能的 `src/GUI_PortableSimpleUi`。
- src/GUI_StringTable ： 用于实现 i18n 的模块
- src/GUI_PortableSimpleUi ： 使用 PortableSimpleUi 库来实现 UI 功能的 UI ，当前开发的版本。
- src/RestraintsPatch ： 此 Mod 附带的远古套装补丁模块，用于添加具有额外乐趣的服装到游戏中。
- src/Sound ： 游戏音效模块，现在主要用于实现外挂的 叮 叮 的提示声。
- src/SaveLoadIndexDB ： 游戏存档模块，主要用于实现外挂的额外存档功能。

以下是已经弃用的模块：
- src/GM_config_TS
- src/GreasemonkeyScript
- src/GUI_PortableUi
- src/TweakPanel
- src/GuiTweakPane.ts



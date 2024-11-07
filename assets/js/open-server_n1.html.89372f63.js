"use strict";(self.webpackChunknoteop=self.webpackChunknoteop||[]).push([[80],{6262:(e,i)=>{i.A=(e,i)=>{const r=e.__vccOpts||e;for(const[e,l]of i)r[e]=l;return r}},1729:(e,i,r)=>{r.r(i),r.d(i,{comp:()=>t,data:()=>o});var l=r(641);const a={},t=(0,r(6262).A)(a,[["render",function(e,i){return(0,l.uX)(),(0,l.CE)("div",null,i[0]||(i[0]=[(0,l.Fv)('<div class="hint-container tip"><p class="hint-container-title">前言</p><p>本文转载自<a href="https://my.minecraft.kim/tech/140/" target="_blank" rel="noopener noreferrer">一条龙服务：开服从入门到精通</a>本文原文发布于 GitHub，完整版可见于<a href="https://guide.minecraft.kim/" target="_blank" rel="noopener noreferrer">此处</a> 。</p><p>之所以想写这一篇一条龙教程，实在是因为国人开服，功利心很重，不需要过程，只需要结果。有的人开服，喜欢网上抓一个整合包就开起来，自己不会改，但是只要能得到「结果」就好了。在这个大环境下，国内服务器圈弥漫着一股粗制滥造和模板化的问题。而真正想从零开始的小白服主，又很难找到一个精准，完全的开服教程，往往要东拼西凑，获得经验。</p><p>本文的初衷是一条龙服务，为希望认真学习开服技术的小白服主们提供全面的服务。通过循序渐进的方式，通过夹杂着故事的技术讲解，为小白服主们揭开服务端的神秘面纱。</p><p>本文为本人耗时多天完成，难免有一定纰漏，如有技术上或语言上的问题欢迎指正。同时，本文还会持续更新，如果您有什么不理解的开服问题需要详细了解，也欢迎回复告诉我您的想法。</p><p><strong>本文的贡献者:</strong><br> - <a href="https://www.mcbbs.net/home.php?mod=space&amp;uid=495221" target="_blank" rel="noopener noreferrer">贺兰星辰</a>(主要编写者)<br> - <a href="https://github.com/TheZihanGu" target="_blank" rel="noopener noreferrer">TheZihanGu</a><br> - <a href="https://github.com/Subilan" target="_blank" rel="noopener noreferrer">Subilan</a><br> - <a href="https://github.com/iceBear67" target="_blank" rel="noopener noreferrer">iceBear67</a><br> - <a href="https://github.com/LDS-XiaoYe" target="_blank" rel="noopener noreferrer">晓夜</a><br> - 以及所有对本文提出过宝贵意见的人</p><h4 id="阅读前-请先了解以下事项" tabindex="-1"><a class="header-anchor" href="#阅读前-请先了解以下事项"><span>阅读前，请先了解以下事项:</span></a></h4><ul><li>本文 <strong>不</strong> 适用于非 Java 版</li><li>本文 <strong>不</strong> 讨论代理服务端</li><li>本文 <strong>不</strong> 讨论如何进行端口映射，端口转发等工作</li><li>本文所有操作均视为您的操作系统环境已显示文件拓展名。且重命名文件时均包含拓展名</li><li>如无特殊说明，本文均采用 <a href="https://creativecommons.org/licenses/by-nc/3.0/cn/" target="_blank" rel="noopener noreferrer">CC BY-NC 3.0 中国大陆</a> 协议授权</li></ul><p>如果您已经准备好了，烦请继续向下阅读<br> 请 <strong>务必</strong> 注意查看标注的每一个注释，他们都非常有用。</p></div><h1 id="一、服务端核心介绍" tabindex="-1"><a class="header-anchor" href="#一、服务端核心介绍"><span>一、服务端核心介绍</span></a></h1><p><strong>服务端核心</strong>(简称核心，有时也被叫做服务端)是指开服时用于直接或间接启动Minecraft服务器的一类文件，文件名一般以<code>.jar</code>结尾。<br> 一般情况下，我们使用 <code>CMD/PowerShell</code> (可执行文件名以.bat为结尾)或是 <code>*nix Shell</code> (可执行文件名以.sh为结尾)运行这样的程序以启动服务器。</p><h2 id="为什么要说「直接或间接」" tabindex="-1"><a class="header-anchor" href="#为什么要说「直接或间接」"><span>为什么要说「直接或间接」</span></a></h2><p>一般情况下，一个服务器的大部分运行代码都存在那一个小小的罐子(指<code>核心</code>)里，且这些核心通常直接修改Minecraft的代码来分发。<br> 但是某些服务端核心里，用于运行服务器核心代码完全不在这个文件里，为什么呢？<br> 这是因为 <a href="https://account.mojang.com/documents/minecraft_eula" target="_blank" rel="noopener noreferrer">Mojang 的最终用户许可协议 (EULA)</a>规定，未经授权的任何人都<strong>不能二次分发 Minecraft 二进制文件</strong>，以及作为 End User 的我们<strong>您不得分发我们的游戏或软件的任何 Mod 化版本</strong>(摘自Mojang Eula)</p><blockquote><p>或许有读者会好奇: <code>那么，如果我就是这样干了，又怎么样？</code><br> 那么你应该看看<code>CraftBukkit</code>的下场。<br> CraftBukkit 服务端因为本体直接包含 Minecraft 代码，违反了 Mojang EULA 和千禧年数字版权法 (DMCA)，面临被起诉的风险，最终被迫停止开发。</p></blockquote><p>有趣的是，仍然会有「直接」启动的核心存在。像是 Spigot，Paper..那么他们为什么没有被起诉？</p><h2 id="buildtools" tabindex="-1"><a class="header-anchor" href="#buildtools"><span>BuildTools</span></a></h2><p>他们(大部分)不提供带有Minecraft代码的文件，而是提供了 <code>BuildTools</code>（构建方法）。通过 BuildTools，我们可以在自己的计算机上合成<code>可直接运行的服务端核心</code>，以此绕过了Mojang EULA和DMCA的规定(他们管直接分发但是不管间接)</p><blockquote><p>注意: 即使如此，BuildTools 并不是「间接启动核心」，他只是让发布者间接发布了可以直接启动的核心</p></blockquote><h2 id="「间接启动」核心" tabindex="-1"><a class="header-anchor" href="#「间接启动」核心"><span>「间接启动」核心</span></a></h2><p>但是 BuildTools 的过程通常非常慢，它还需要很多乱七八糟的东西..因此有些核心放弃 BuildTools，用了其他方法。</p><h3 id="paperclip" tabindex="-1"><a class="header-anchor" href="#paperclip"><span>PaperClip</span></a></h3><p>PaperMC(一种服务端核心的团队) 会把每一次的更新制作成一个个补丁文件的形式。</p><p>用户下载到的文件将会是一个补丁安装器，该核心安装器<em>从 Mojang 下载未经过修改的 Minecraft</em> 后，现场给你打补丁。</p><p><s>paperclip: (人家本质也是 BuildTools 啦..)</s></p><h2 id="什么是-cmd-什么又是-nix-shell-为什么我们不能直接双击-jar-运行服务端核心" tabindex="-1"><a class="header-anchor" href="#什么是-cmd-什么又是-nix-shell-为什么我们不能直接双击-jar-运行服务端核心"><span>什么是 CMD，什么又是 *nix Shell?为什么我们不能直接双击 jar 运行服务端核心?</span></a></h2><p>TL;DR</p><p>你当然可以这样启动服务器，但是你没法设置 Java 进程参数。</p><h3 id="cmd-是什么" tabindex="-1"><a class="header-anchor" href="#cmd-是什么"><span>CMD 是什么?</span></a></h3><p>CMD/Command，本教程中泛指<code>Microsoft Windows</code>的<code>命令提示符</code>。</p><blockquote><p>如果你是 Windows 用户，按下 Win+R，输入<code>cmd</code>后回车，弹出的窗口就是 CMD</p></blockquote><p>在 CMD 中，你可以运行程序，设定命令行参数。</p><h3 id="nix-shell-是什么" tabindex="-1"><a class="header-anchor" href="#nix-shell-是什么"><span>*nix Shell 是什么?</span></a></h3><p>*nix 是<code>unix-like</code>的意思。包含了基于<code>Linux</code>,<code>Unix</code>内核开发的发行版(「macos 基于 unix 哦」)</p><p>Shell 起到和 Windows 中命令提示符的作用，他可以启动程序，设定命令行参数。</p><p>...</p><p>启动一个Minecraft服务端需要若干参数限制运行条件，因此我们需要使用这些特殊的程序来修改参数。</p><p>要注意的是，不只是通过命令行添加参数，某些「开服器」也可以，后面将会提到。</p><h2 id="主流服务端核心列表" tabindex="-1"><a class="header-anchor" href="#主流服务端核心列表"><span><strong>主流服务端核心列表</strong></span></a></h2><p>那么说完上面的，那么现在究竟有哪些核心，他们有什么区别呢?<br> 注意: 为了方便查阅，我们将会用<strong>粗体</strong>表示推荐使用的服务端核心，使用<em>斜体</em>表示另类，冷门，不推荐使用的服务端核心。<br> 注意:此处我们只会介绍目前还在积极更新的，或是有一定历史意义的服务端核心，对于刚出生就夭寿的，无意义的服务端，此处不多赘述</p><p>你需要知道的东西:</p><ul><li>API —— 应用开发接口，作为初学者你可以把它看作平台/规范</li></ul><h3 id="_1-vanilla" tabindex="-1"><a class="header-anchor" href="#_1-vanilla"><span><strong>1. Vanilla</strong></span></a></h3><p>对于 Java 版来说，绝大多数服务端的始祖便是 Mojang 提供的官方服务端了，按照习惯，我们把官服叫做 Vanilla(香草，代指纯净[纯净服务端有歧义])</p><p>其实他本身的名字应该是 Minecraft_Server(但是大多数情况下我们不会用这个名字)</p><p>Vanilla 有以下的属性</p><ul><li>不支持除了原生 Minecraft 外的任何特性内容</li><li>Mojang 官方支持</li><li>自带原生 GUI 控制台窗口</li><li>相对比其他服务端来说，性能较差</li></ul><p>根据以上属性，我们可以发现 Vanilla 基本上啥都干不了，就是原生兼容好，因此比较适合开<strong>原版的服务器</strong>(比如<strong>玩玩命令方块小游戏地图啊，基友联机啊</strong>之类的)</p><p>下载 Vanilla:</p><ol><li>前往正版启动器手动选择版本下载</li><li>前往第三方下载站下载（如GetBukkit:<a href="https://getbukkit.org/download/vanilla%EF%BC%89" target="_blank" rel="noopener noreferrer">https://getbukkit.org/download/vanilla）</a></li></ol><h3 id="_2-craftbukkit-有时被称为-bukkit-10" tabindex="-1"><a class="header-anchor" href="#_2-craftbukkit-有时被称为-bukkit-10"><span><strong>2. CraftBukkit(有时被称为 Bukkit[10])</strong></span></a></h3><p>仅用 Vanilla 我们无法快速，高效地通过编程拓展游戏内容。因此，CraftBukkit 诞生。<br> CraftBukkit 是一个实现了 BukkitAPI 的服务端，这意味着开发者们可以通过 BukkitAPI 提供的(有限的)内容来拓展服务器逻辑，增强趣味性。</p><p>社区开发者们发布<code>Bukkit插件</code>，多数情况下我们只需要放到<code>plugins</code>文件夹即可使用。</p><p>CraftBukkit 有以下的属性:</p><ul><li>基于 Vanilla 二次开发</li><li><strong>可以</strong> 安装支持 BukkitAPI 的插件</li><li>性能较差</li></ul><p><em>为什么不推荐?:CraftBukkit 虽然是跨时代性的，但他和 Vanilla 的性能一样差(甚至更差)，因此在后来的日子里诞生了很多自带优化的服务端，CraftBukkit 对于我们来说只是一个过去时代的丰碑罢了，并不能满足实际使用需求了</em><br><em>讲个题外话，CraftBukkit 曾经的开发者现在要么离开了自己心爱的项目，要么去了 SpigotMC 团队，有一个人挺不寻常，他叫 Searge，他最后收到了 Mojang 的邀请，前去开发 Minecraft 了。对于有的 Mod 开发者来说，你应当知道 Mod Code Pack(MCP)也是由 Searge 等人发起的，而MCP使用的映射名「Srg 名」，也是为了纪念 Searge 这位巨佬</em></p><p>下载 CraftBukkit:</p><ol><li>BukkitDev官方:<a href="http://dl.bukkit.org/" target="_blank" rel="noopener noreferrer">http://dl.bukkit.org/</a> (由于Mojang EULA和DMCA的要求，已停止服务)</li><li>SpigotMC官方:<a href="https://hub.spigotmc.org/jenkins/job/BuildTools/" target="_blank" rel="noopener noreferrer">https://hub.spigotmc.org/jenkins/job/BuildTools/</a> (CraftBukkit不直接提供，你只能通过BuildTools手动构建)</li><li>使用第三方下载站下载已经构建好的CraftBukkit（如GetBukkit:<a href="https://getbukkit.org/download/craftbukkit%EF%BC%89" target="_blank" rel="noopener noreferrer">https://getbukkit.org/download/craftbukkit）</a></li></ol><details class="hint-container details"><summary>注释 4</summary><p>[10]: 把 CraftBukkit 称作 Bukkit 其实是不负责任的，Bukkit 其实是一个规范，他仅包含接口，不包含实现，我们不应将两者划等号。</p></details><h3 id="_3-spigot" tabindex="-1"><a class="header-anchor" href="#_3-spigot"><span><strong>3. Spigot</strong></span></a></h3><p>CraftBukkit 是挺好，但是他性能和 Vanilla 一样捉急，甚至装多了插件还可能会更差，人们急切需要一个能够优化服务端处理逻辑，提升服务器性能的服务端，曾经有过多种这样的服务端，有的可能优化了TNT爆炸逻辑，有的可能优化了耕田逻辑，但是活到最后的，是包含了他们之中绝大部分优化功能的 <strong>Spigot</strong>。<br> Spigot 由 SpigotMC 团队开发，可以说是 CraftBukkit 的正统续作，他不仅完全兼容 BukkitAPI 规范，还提供了更多独有的开发API<a href="Spigot%E6%8F%90%E4%BE%9B%E7%9A%84%E7%8B%AC%E6%9C%89API%E8%A2%AB%E7%A7%B0%E4%BD%9CSpigotAPI%EF%BC%8C%E5%85%B6%E7%8B%AC%E7%AB%8B%E4%BA%8ECraftBukkit%E5%8E%9F%E7%94%9F%E7%9A%84BukkitAPI(%E8%99%BD%E7%84%B6CraftBukkit%E7%8E%B0%E5%9C%A8%E7%94%B1SpigotMC%E5%90%8C%E6%97%B6%E7%BB%B4%E6%8A%A4%EF%BC%8C%E4%BD%86%E4%BE%9D%E7%84%B6%E6%8A%8A%E4%B8%80%E4%BA%9BAPI%E5%88%86%E5%BC%80%E4%BA%86)%EF%BC%8C%E5%90%8E%E9%9D%A2%E8%A6%81%E6%8F%90%E7%9A%84Paper%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%B9%9F%E5%90%8C%E6%A0%B7%E6%8F%90%E4%BE%9B%E4%BA%86PaperAPI%EF%BC%8C%E5%90%8CSpigotAPI%E5%92%8CBukkitAPI%E9%9A%94%E7%A6%BB%E4%BA%86%E8%B5%B7%E6%9D%A5%E3%80%82%E8%BF%99%E4%B9%9F%E6%98%AF%E6%9C%8D%E4%B8%BB%E4%BB%AC%E5%BC%80%E6%9C%8D%E6%97%B6%E6%9F%90%E4%BA%9B%E6%8F%92%E4%BB%B6%E5%9C%A8%E4%B8%8D%E5%90%8C%E7%9A%84%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%9C%89%E4%B8%8D%E5%90%8C%E7%9A%84%E8%BF%90%E8%A1%8C%E6%83%85%E5%86%B5(%E6%9C%89%E7%9A%84%E8%83%BD%E7%94%A8%E6%9C%89%E7%9A%84%E4%B8%8D%E8%83%BD%E4%BA%86)%E7%9A%84%E5%8E%9F%E5%9B%A0%E3%80%82%E6%AD%A4%E5%A4%84%E7%8B%AC%E6%9C%89%E4%B9%9F%E6%98%AF%E6%8C%87%E5%9C%A8%E5%BD%93%E6%97%B6%EF%BC%8C%E7%8E%B0%E5%9C%A8%E5%8F%AA%E8%A6%81%E5%9F%BA%E4%BA%8ESpigot%E7%9A%84%E6%A0%B8%E5%BF%83%E9%83%BD%E5%BA%94%E6%94%AF%E6%8C%81SpigotAPI%E3%80%82">14</a>，最重要的是，这个服务端优化很好，因此十分稳定。(spigot yyds</p><p>Spigot 有以下的属性:</p><ul><li>基于 CraftBukkit</li><li><strong>可以</strong> 安装支持 BukkitAPI,SpigotAPI 的插件</li><li>稳定性好</li><li>性能较好</li></ul><p>下载 Spigot:</p><ol><li>SpigotMC 官方:<a href="https://hub.spigotmc.org/jenkins/job/BuildTools/" target="_blank" rel="noopener noreferrer">https://hub.spigotmc.org/jenkins/job/BuildTools/</a> (Spigot不直接提供，你只能通过BuildTools手动构建)</li><li>使用第三方下载站下载已经构建好的Spigot（如GetBukkit:<a href="https://getbukkit.org/download/spigot%EF%BC%89" target="_blank" rel="noopener noreferrer">https://getbukkit.org/download/spigot）</a></li></ol><details class="hint-container details"><summary>注释 5</summary></details><h3 id="_4-paper-曾用名-paperspigot-有时被称为-paperclip-15" tabindex="-1"><a class="header-anchor" href="#_4-paper-曾用名-paperspigot-有时被称为-paperclip-15"><span>4. <strong>Paper</strong>(曾用名 PaperSpigot，有时被称为 PaperClip[15])</span></a></h3><p>一方面是认为 Spigot 更新太慢了，又一方面是认为 Spigot 的 BuildTools 太麻烦了，还一方面是因为 Spigot 的优化还 不 够 劲，因此，一群人创建了 Paper。</p><p>Paper 有以下的属性:</p><ul><li>基于 Spigot</li><li><strong>可以</strong> 安装支持 BukkitAPI,SpigotAPI,PaperAPI 的插件</li><li><em>部分</em>自带原生 GUI 控制台窗口[16]</li><li>稳定性较好</li><li>性能好</li><li>更新迅速</li><li>提供了更多的优化和服务端个性化选项[17],[18]</li><li>构建、使用方便</li><li>搭载了较为先进的 Aikar&#39;s Timings® 性能分析系统[19]</li></ul><p><em>为什么推荐?:Paper 是一个兼具稳定，性能，拓展的服务端核心，不仅提供了很多有效的优化，更有很多自定义选项供服主选择，几乎 100% 兼容 BukkitAPI 插件也是人们选择 Paper的主要原因</em></p><p>下载 Paper:</p><ol><li>PaperMC 官方: <a href="https://papermc.io/downloads" target="_blank" rel="noopener noreferrer">https://papermc.io/downloads</a> (对于旧版本核心，你可以前往页末的<code>LEGACY</code>标签下载不受支持的旧版的 Paper 核心</li></ol><details class="hint-container details"><summary>注释 6</summary><p>[15]: 此处 PaperClip 应当指的是 Paper 的<strong>补丁安装器</strong>，不含 Paper 核心本体，但因为用补丁安装器安装补丁并启动服务器基本感觉是一气呵成的所以大家总是把 PaperClip 当做 Paper 本体。<br> [16]: 之所以说部分支持，是因为大部分版本Spigot是把这个丑到爆炸的控制台删掉了的(即只能使用 CMD 或 Linux Shell 开服)，但自某个高于 1.15 的版本起，Paper 又恢复了这个控制台以防你手贱双击打开了JAR但没有办法操控服务器，但这会导致在你不指定<code>nogui</code>参数时用命令行开服依然会把那个控制台给召唤出来。<br> [17]: 位于<code>.\\paper.yml</code>。其实Spigot也是有这样的文件的，位于<code>.\\spigot.yml</code>，同理，CraftBukkit 也有，位于<code>.\\bukkit.yml</code>，下游服务端是同时拥有上游服务端的这些文件的，因此新的服务端定义的新的文件提供了上游服务端所没有的新特性供服主们设定，而不是相互挤兑冲突。<br> [18]: Hey，也许你是一个生电玩家转生的新手服主，希望开一个生电服，如果如此，请切记<strong>不要</strong>使用 Paper，Paper 内含对包括 0tick 等 Minecraft 原版「特性」的修复，可能会导致你和你的玩家感到疑惑，因此，你应当使用 <strong>Spigot</strong>。<br> [19]: Timings 是一种自 Spigot 开始自带的性能分析器，允许你通过一个网页查看一段时间内服务器的总耗能情况，据此推断出哪些插件，或是哪些世界，或是哪些生物卡服。Spigot 也有 Timings，但是是旧版的，一般称作 Spigot Timings，虽也是由 Aikar 设计但是网页界面观感和功能都相差甚远。Aikar&#39;s Timings 同时也搭载在 Sponge 核心中。</p></details><h3 id="_5-tuinity" tabindex="-1"><a class="header-anchor" href="#_5-tuinity"><span><strong>5. Tuinity</strong></span></a></h3><p>众所周知，Paper 是开源的，那么这意味着，所有人都可以通过Paper所在的代码托管网站 <em>Github</em> 向 PaperMC 团队提交各种各样的漏洞修复/性能优化代码，而 PaperMC 团队也可以选择性的将这些代码合并到自己的项目中，完成一次协作。前往 Paper 的 Github 的 <a href="https://github.com/PaperMC/Paper/pulls" target="_blank" rel="noopener noreferrer">Pull Request</a> 界面，你可以看到这里依然还有超过 60 个的代码合并请求尚在活跃状态但未被 PaperMC 团队合并。这些提交中可能包含着诸如视距优化这样的刚需，也包含对开发者有益的API更新。</p><p>但Paper就是不合并，你也没办法。</p><p>因此，一名叫做 <em>Spottedleaf</em> 的大佬站了出来，Fork[20]了 Paper 的仓库，然后把那一堆PR[21]全合并了，又作了一些改动，最后，Tuinity 横空出世了</p><p>曾经一段时间内，Tuinity 仅支持JRE11[22]作为其运行环境 但现在 Tuinity 只需 JRE8+ 即可运行</p><p>启动 Tuinity 会生成 tuinity.yml，在其中可设置单玩家怪物生成，分离视距等高级参数。即使你不会设置这些参数，Tuinity 自身自带的一个个优化也足以你的服务器使用。</p><p>Tuinity 有以下的属性:</p><ul><li>基于 Paper</li><li><strong>可以</strong> 安装基于 BukkitAPI,SpigotAPI,PaperAPI,TuinityAPI 的插件</li><li><strong>不可以</strong> 安装基于任何 API 的模组</li><li>性能极佳</li><li>更新较快</li><li>较为稳定</li></ul><p>下载 Tuinity:</p><ol><li>CodeMC 自动构建站: <a href="https://ci.codemc.io/job/Spottedleaf/job/Tuinity/" target="_blank" rel="noopener noreferrer">https://ci.codemc.io/job/Spottedleaf/job/Tuinity/</a></li></ol><details class="hint-container details"><summary>注释 7</summary><p>[20]: 指使用 Git 克隆(拷贝)别人的代码仓库到自己的名下的行为<br> [21]: 即 Pull Request，拉取请求，就是上面说的那些希望合并的代码<br> [22]: 即 Java Runtime Environment(Version 11)，Java11 的运行环境。同理，后文中 JRE8+ 也指 Java8 以上的运行环境</p></details><h3 id="_6-akarin-torch-23" tabindex="-1"><a class="header-anchor" href="#_6-akarin-torch-23"><span><strong>6. Akarin/Torch[23]</strong></span></a></h3><p>用 <em>Akarin Project</em> 开发者们的原话来说，Akarin 是一个 <strong>「来自新纬度的服务端」</strong> <em>(A server software from the &#39;new dimension&#39;.)</em>，其本质原因是 Akarin 以 <strong>多线程</strong> *(Multi-Threaded)*著称。</p><p>那么在此之前，我们需要了解什么是多线程。简单的来说，人一般情况下只能专心干一件事情，那么我们可以把这种行为叫做单线程;如果你能一下干多个事情，那么这就是所谓多线程——从软件或者硬件上实现多个线程并发执行的技术。</p><p>在 Akarin 之前，绝大多数的服务端的核心任务都是由主线程这一条线程完成的，如果同时有很多事情要做，那么他得做完了一个再做另外一个，这就有可能引起卡顿。</p><p>如果做的这件事情无线重复，或是要花费太长时间以至于连服务器的基本运行事件都给挡住了，那么就会引起<strong>堵塞</strong>，导致服务器瞬卡甚至崩溃。</p><p>通过使用 Akarin，我们可以将主线程本应完成的动作转移到其他子线程同时执行，极大的减缓了服务器压力。</p><p>当然，因为这是一个新技术，同时让一个本不兼容多线程的东西兼容多线程是一个很难的工程，因此总会有不稳定因素。</p><p>Akarin 有如下的属性:</p><ul><li>基于 Paper/Tuinity[24]</li><li><strong>可以</strong> 安装基于 BukkitAPI,SpigotAPI,PaperAPI，<strong>可能可以</strong>安装基于 TuinityAPI 的插件</li><li><strong>不可以</strong> 安装基于任何 API 的模组</li><li>性能极佳</li><li>支持多线程</li><li>更新不快</li><li>不太稳定</li></ul><p>下载 Akarin:</p><ol><li>Github Actions: <a href="https://github.com/Akarin-project/Akarin/actions" target="_blank" rel="noopener noreferrer">https://github.com/Akarin-project/Akarin/actions</a></li><li>JosephWorks Jenkins: <a href="http://josephworks.ddns.net:8080/job/Akarin-project/" target="_blank" rel="noopener noreferrer">http://josephworks.ddns.net:8080/job/Akarin-project/</a></li></ol><details class="hint-container details"><summary>注释 8</summary><p>[23]: Torch，前称 TorchSpigot，是一个支持 1.8.8 的优化核心，是Akarin服务端的前身。由于在部分代码和统计系统上，Akarin 仍使用*「Torch」<em>表示 Akarin 服务端，因此这里同时将 Torch 写上<br> [24]: 自1.14开始，Akarin 开始使用 <em>Tuinity</em> 作为其项目前置，而不是原来的</em>Paper*，同时因此该服务端对不同API的插件兼容性需注意使用的服务端版本</p></details><p>如果你看到了这里，那么恭喜你，你已经结束了所有<strong>主流</strong> BukkitAPI 系服务端的介绍，接下来是一些搭载 ForgeAPI 或 FabricAPI 的模组服务端，两个基于 SpongeAPI 的服务端和两个魔怔猎奇基于其他API的服务端介绍，如果你不需要了解这些，请直接跳到下一节。</p><h3 id="_7-vanillaforge" tabindex="-1"><a class="header-anchor" href="#_7-vanillaforge"><span><strong>7. VanillaForge</strong></span></a></h3><p>让我们把视线调转回刚开始的 Vanilla，如果说 Bukkit 让修改服务端变成了可能，那么就一定有一个东西能够让修改客户端变为可能，而Forge就是。<br> VanillaForge 则是一个 Vanilla+ForgeAPI 的服务端，他允许你安装 ForgeMod，处理自定义物品，自定义方块，自定义实体操作。</p><p>VanillaForge 有如下的属性:</p><ul><li>基于 Vanilla</li><li><strong>可以</strong> 安装支持 ForgeAPI 的模组</li><li>稳定性较好</li><li>性能较差</li><li>可插拔性强，易于更新[25]</li></ul><p>下载 VanillaForge:</p><ol><li>前往 Forge 官网下载 Forge Installer，并选择 install server 模式，将安装目录指向运行过一次的 Vanilla 服务端: <a href="http://files.minecraftforge.net/" target="_blank" rel="noopener noreferrer">http://files.minecraftforge.net/</a></li></ol><details class="hint-container details"><summary>注释 9</summary><p>[25]: 为什么要可以强调“可插拔性强，易于更新”呢，因为后面你将会看到，所有BukkitAPI+ForgeAPI的服务端（甚至Sponge系服务端)都需要糅合自己的API和ForgeAPI的代码，这导致Forge的部分代码和库是强制写死在服务端上的，你不能手动更新Forge版本。但VanillaForge只支持ForgeAPI，因此没有这个问题</p></details><h3 id="_8-cauldron-mcpc" tabindex="-1"><a class="header-anchor" href="#_8-cauldron-mcpc"><span><strong>8. Cauldron/MCPC+</strong></span></a></h3><p>那么究竟有没有能同时兼容 BukkitAPI 和 ForgeAPI 的服务端呢?<br> 答案是当然，最初搞出来这个玩意的服务端叫做 MCPC+，自1.7.10 起改名为 Cauldron，随后停更。<br> 同时你也将看到，由于「糅合」的复杂性和难以维护性，因此每一个 BukkitAPI+ForgeAPI 服务端几乎都只维护一个主流版本，这也是此类服务端遍地开花的一个主要原因。<br> Cauldron 有如下的属性:</p><ul><li>已停更</li><li>基于 Spigot</li><li><strong>可以</strong> 安装支持 BukkitAPI,SpigotAPI 的插件</li><li><strong>可以</strong> 安装支持 ForgeAPI 的模组</li><li>支持至最高 1.7.10</li></ul><p><em>为什么不推荐?:同 CraftBukkit 一样，Cauldron 也已然成为了一个时代的奠基人和里程碑，其原始的完整代码仓库现在甚至无法被找到，我们也只能在各式各样的第三方构建站看到他的身影。只闻其声，不闻其形。</em></p><p>下载 Cauldron:</p><ol><li>前往第三方构建站下载</li></ol><h3 id="_9-kcauldron" tabindex="-1"><a class="header-anchor" href="#_9-kcauldron"><span><strong>9. KCauldron</strong></span></a></h3><p>KCauldron 是 Cauldron 的优化版/继承。</p><p>KCauldron 有如下的属性:</p><ul><li>已停更</li><li>基于 Cauldron</li><li><strong>可以</strong> 安装基于 BukkitAPI,SpigotAPI 的插件</li><li><strong>可以</strong> 安装基于 ForgeAPI 的模组</li><li>仅支持 1.7.10</li></ul><p>下载 KCauldron:<br> 1.前往第三方构建站下载</p><h3 id="_10-thermos" tabindex="-1"><a class="header-anchor" href="#_10-thermos"><span><strong>10. Thermos</strong></span></a></h3><p>Thermos 是 KCauldron 的优化版。</p><p>Thermos 有如下的属性:</p><ul><li>已停更</li><li>基于 KCauldron</li><li><strong>可以</strong> 安装基于 BukkitAPI,SpigotAPI 的插件</li><li><strong>可以</strong> 安装基于 ForgeAPI 的模组</li><li>仅支持 1.7.10</li></ul><p>下载Thermos:</p><ol><li>Github Releases: <a href="https://github.com/CyberdyneCC/Thermos/releases" target="_blank" rel="noopener noreferrer">https://github.com/CyberdyneCC/Thermos/releases</a></li></ol><h3 id="_11-contigo" tabindex="-1"><a class="header-anchor" href="#_11-contigo"><span><strong>11. Contigo</strong></span></a></h3><p>Contigo 是 Thermos 的优化版/继承。</p><p>Contigo 有如下的属性:</p><ul><li>已停更</li><li>基于 Thermos</li><li><strong>可以</strong> 安装基于 BukkitAPI,SpigotAPI 的插件</li><li><strong>可以</strong> 安装基于 ForgeAPI 的模组</li><li>仅支持 1.7.10</li></ul><p>下载 Contigo:</p><ol><li>Github Releases: <a href="https://github.com/djoveryde/Contigo/releases" target="_blank" rel="noopener noreferrer">https://github.com/djoveryde/Contigo/releases</a></li></ol><h3 id="_12-uranium" tabindex="-1"><a class="header-anchor" href="#_12-uranium"><span>12. Uranium</span></a></h3><p>Uranium 是一款基于 KCauldron 的 BukkitAPI+ForgeAPI 服务端，其整合了部分Thermos对服务端的修复，同时进行了一些输入书与笔虚体问题的BUG修复。其最大的特点<a href="%E4%BB%85%E4%BB%A3%E8%A1%A8%E4%B8%AA%E4%BA%BA%E8%A7%82%E7%82%B9">26</a>是强制使用 UTF-8 编码作为配置文件编码[27]和通过 UraniumPlus Mod 令 1.7.10 客户端支持 Title 和 Actionbar[28]。</p><p>Uranium 有如下的属性:</p><ul><li>基于 KCauldron</li><li><strong>可以</strong> 安装基于 BukkitAPI,SpigotAPI 的插件</li><li><strong>可以</strong> 安装基于 ForgeAPI 的模组</li><li>仅支持 1.7.10</li></ul><p>下载 Uranium:</p><ol><li>Jenkins CI: <a href="https://ci.uraniummc.cc/job/Uranium-dev/" target="_blank" rel="noopener noreferrer">https://ci.uraniummc.cc/job/Uranium-dev/</a></li></ol><details class="hint-container details"><summary>注释 10</summary><p>[27]: 事实上，我们看到的所有文本，其内容都是经过编码存储在计算机上的，对于 Minecraft 服务端来说，在 1.7.10 版本，Windows 使用 ANSI 编码，而 Linux 使用 UTF-8 编码，这引起了诸多不便，因此 Uranium 强制在所有操作系统上运行该服务端，文件编码均为UTF-8，简化了使用流程<br> [28]: Title 是自 1.8 引入的，在客户端上显示大标题和副标题的功能;Actionbar 是自 1.8 引入的，在客户端物品栏上方显示字幕的功能</p></details><h3 id="_13-catserver" tabindex="-1"><a class="header-anchor" href="#_13-catserver"><span>13. CatServer</span></a></h3><p>不同于 Cauldron 系，CatServer 支持 1.12.2 的 BukkitAPI+ForgeAPI，发展至今已十分稳定，同时也拥有独特的优化和 BUG 修复。</p><p>CatServer 有如下的属性:</p><ul><li>基于 Spigot</li><li><strong>可以</strong> 安装基于 BukkitAPI,SpigotAPI 的插件</li><li><strong>可以</strong> 安装基于 ForgeAPI 的模组</li><li>稳定性好</li><li>性能较好</li><li>更新较快</li><li>仅支持 1.12.2</li></ul><p><em>为什么推荐?:CatServer 历经多年的打磨，其已经非常稳定，同时因为 1.12.2 版本从技术上讲依然是一个稳定的年轻版本，因此使用 CatServer 开 Mod 服或许是你的不二之选</em><br><em>又一个题外话:如果你刚入服主圈，那么你可能不知道，由于作为第一个支持高版本的 BukkitAPI+ForgeAPI 服务端，CatServer 有过一段艰苦，黑暗的发展历史，从“抄袭风波”到收购风波，从付费风波再到“后门风波”，CatServer 曾有过一段饱受诟病的日子，甚至还和下面某些服务端作者产生过争执......笔者作为那段时代的亲历者，只能用一句话来形容那时:<br> “黑，真他妈的黑啊”</em></p><p>下载 CatServer:</p><ol><li>Github Releases: <a href="https://github.com/Luohuayu/CatServer/releases" target="_blank" rel="noopener noreferrer">https://github.com/Luohuayu/CatServer/releases</a></li></ol><p>下载 CatServer-Async[29]:</p><ol><li>Github Releases: <a href="https://github.com/Luohuayu/CatServer/releases/tag/Async-final" target="_blank" rel="noopener noreferrer">https://github.com/Luohuayu/CatServer/releases/tag/Async-final</a></li></ol><details class="hint-container details"><summary>注释 11</summary><p>[29]: 即 CatServer 的多线程版本，用开发者的话来说，「由于多线程版存在过多兼容性问题无法修复, 不再提供更新, 也不推荐使用.」，该版本最后停更于<code>Mar 19,2020</code>。本文笔者也不推荐使用此版本</p></details><h3 id="_14-mohist-曾用名-pfcraft" tabindex="-1"><a class="header-anchor" href="#_14-mohist-曾用名-pfcraft"><span>**14. Mohist(曾用名 PFCraft)</span></a></h3><p>Mohist 和下面的 Magma 一样，都有一点「另类」，他们本体基于 Paper，而不是 Spigot，这意味着这两个服务端不仅可以享受 Paper 带来的漏洞修复和优化，还可以让你轻松使用基于 PaperAPI 开发的插件。</p><p>Mohist 还支持控制台信息国际化[30]，可选择服务端 Mod 语言[31]，内置插件管理器[32]等等非常实用的功能。</p><p>但是很遗憾，由于 Mohist 本身工程量大难以维护，也由于 Mohist 开发组重组，近几个月内的 Mohist 稳定性并不是很好。</p><p>Mohist 有如下的属性:</p><ul><li>基于 Paper</li><li><strong>可以</strong> 安装基于 BukkitAPI,SpigotAPI,PaperAPI 的插件</li><li><strong>可以</strong> 安装基于 ForgeAPI 的模组</li><li>稳定性较差</li><li>性能较好</li><li>更新较快</li><li>控制台/模组本地化支持</li><li>内置插件管理器</li><li>支持 1.12.2,1.15.2[35]</li></ul><p><em>说个题外话:笔者曾有幸参与了 Mohist 控制台信息的简体中文、繁体中文本地化工作，并亲眼见证了 Mohist 从使用高峰到现在的开发过程。Mohist 的原开发者 Mgazul 是个好人，而且能在家庭条件十分有限的情况下，开发出 Mohist 并开源供大家使用，可以说是我们这个圈子的幸运。</em></p><p>下载 Mohist-1.12.2:</p><ol><li>CodeMC Jenkins CI: <a href="https://ci.codemc.io/job/Mohist-Community/job/Mohist-1.12.2/" target="_blank" rel="noopener noreferrer">https://ci.codemc.io/job/Mohist-Community/job/Mohist-1.12.2/</a></li></ol><p>下载 Mohist-1.15.2:</p><ol><li>CodeMC Jenkins CI: <a href="https://ci.codemc.io/job/Mohist-Community/job/Mohist-1.15.2/" target="_blank" rel="noopener noreferrer">https://ci.codemc.io/job/Mohist-Community/job/Mohist-1.15.2/</a></li></ol><details class="hint-container details"><summary>注释 12</summary><p>[30]: 该功能会自动本地化控制台信息，为你展示你能看得懂文字(Mohist 现支持简体中文和繁体中文的控制台本地化)，效果大约如下:</p><figure><img src="https://i.loli.net/2019/05/25/5ce8f8ca8abef72303.png" alt="Mohist-控制台本地化" tabindex="0" loading="lazy"><figcaption>Mohist-控制台本地化</figcaption></figure><p>[31]: 在一般服务端下，在服务端安装的 Mod 仅能限制默认的美式英文(en_US)本地化语言文本，这导致客户端无法按照本地语言显示文本，即使有汉化也没法看。但 Mohist 通过这项功能解决了这个问题<br> [32]: 一般来说，服务端插件在服务器启动以后便不能，安装、卸载、更新，要想那么做，得先关闭服务器，这很耗时，插件管理器允许你通过执行指令，在服务器开启的情况下热配置插件。著名的插件管理器 PlugMan 和 Yum 两个插件，而 Mohist 自带了他们的部分功能<br> [35]: 有消息称 Mohist 开发组正在研发/测试 1.16 版本的 Mohist，且 Mohist 代码仓库中确实存在标签为「1.16.x」的代码分支(空仓库)</p></details><h3 id="_15-magma" tabindex="-1"><a class="header-anchor" href="#_15-magma"><span>15. Magma</span></a></h3><p>Magma 同样是一个基于 Paper[36]的 BukkitAPI+ForgeAPI 服务端。</p><p>Magma 有如下的属性:</p><ul><li>基于 Paper</li><li><strong>可以</strong> 安装基于 BukkitAPI,SpigotAPI,PaperAPI[^36]的插件</li><li><strong>可以</strong> 安装基于 ForgeAPI 的模组</li><li>稳定性较好</li><li>性能较好</li><li>更新较快</li><li>支持 1.12.2,1.15.2[37]</li></ul><p>下载 Magma-1.12.2:</p><ol><li>Github Releases: <a href="https://github.com/magmafoundation/Magma/releases" target="_blank" rel="noopener noreferrer">https://github.com/magmafoundation/Magma/releases</a> (稳定版，请下载-server结尾的版本，-installer结尾的版本暂无法使用)</li><li>Jenkins CI: <a href="https://ci.hexeption.dev/job/Magma%20Foundation/job/Magma/job/master/" target="_blank" rel="noopener noreferrer">https://ci.hexeption.dev/job/Magma Foundation/job/Magma/job/master/</a> (开发版)</li></ol><p>下载 Magma-1.12.2-全Paper特性支持版:</p><ol><li>Jenkins CI: <a href="https://ci.hexeption.dev/job/Magma%20Foundation/job/Magma/job/feature%252Ffull-paper-support/" target="_blank" rel="noopener noreferrer">https://ci.hexeption.dev/job/Magma Foundation/job/Magma/job/feature%252Ffull-paper-support/</a> (开发版)</li></ol><p>下载 Magma-1.15.2:</p><ol><li>Jenkins CI: <a href="https://ci.hexeption.dev/job/Magma%20Foundation/job/Magma-1.15.x/job/1.15.x/lastSuccessfulBuild/" target="_blank" rel="noopener noreferrer">https://ci.hexeption.dev/job/Magma Foundation/job/Magma-1.15.x/job/1.15.x/lastSuccessfulBuild/</a> (开发版)</li></ol><details class="hint-container details"><summary>注释 13</summary><p>[36]: Magma 的主要发行版本并未应用所有 PaperAPI 和 Paper 的补丁，这可能会带来一些问题<br> [37]: 根据 Magma 项目说明，Magma 尚在积极开发对 1.16 版本的支持，同时，Magma-1.15.2 目前仅处于 Beta 测试版阶段，可能尚不稳定</p></details><h3 id="_16-arclight" tabindex="-1"><a class="header-anchor" href="#_16-arclight"><span>16. Arclight</span></a></h3><p>Arclight 是一款「在 Forge 上使用 Mixin 实现的 Bukkit 服务端」，提供了 1.14.4 和 1.15.2 两个高版本的 BukkitAPI+ForgeAPI 支持</p><p>Arclight 有如下的属性:</p><ul><li>基于 Spigot</li><li><strong>可以</strong> 安装基于 BukkitAPI,SpigotAPI 的插件</li><li><strong>可以</strong> 安装基于 ForgeAPI 的模组</li><li>稳定性相对较好</li><li>性能较好</li><li>更新较快</li><li>支持 1.14.4,1.15.2</li></ul><p>下载 Arclight(1.14.4,1.15.2):</p><ol><li>Github Releases: <a href="https://github.com/IzzelAliz/Arclight/releases" target="_blank" rel="noopener noreferrer">https://github.com/IzzelAliz/Arclight/releases</a></li><li>AppVeyor CI: <a href="https://ci.appveyor.com/project/IzzelAliz/arclight/build/artifacts" target="_blank" rel="noopener noreferrer">https://ci.appveyor.com/project/IzzelAliz/arclight/build/artifacts</a></li></ol><p>如果你看到了这里，那么恭喜你已经结束了所有**主流 **BukkitAPI+ForgeAPI 服务端的了解，接下来是一些搭载 FabricAPI 的模组服务端，两个基于 SpongeAPI 的服务端和两个基于其他 API 的服务端介绍，如果你不需要了解这些，请直接跳到下一节。</p><h3 id="_17-spongevanilla-spongeforge" tabindex="-1"><a class="header-anchor" href="#_17-spongevanilla-spongeforge"><span>17. SpongeVanilla&amp;SpongeForge</span></a></h3><p>让我们再将目光转回 CraftBukkit 时期。一群人做出 BukkitAPI 以后，发现这个东西实在是太垃圾了:对 Mod 兼容性差，没有开发文档，代码规范随意，这不是他们想要的那个 API。于是，一群人离开了 Bukkit 开发团队，转而开始制作他们心目中的那个完美的 API 框架——幸运的是，他们做出来了，这就是 SpongeAPI 和他的服务端实现:Sponge</p><p>Sponge 分为 SpongeVanilla 和 SpongeForge 两个版本:前者需要与 Vanilla 一起使用，他通过注入<a href="%E6%98%AF%E4%B8%80%E7%A7%8D%E5%B0%86%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BB%A3%E7%A0%81%E5%AF%BC%E5%85%A5%E5%88%B0%E5%B7%B2%E6%9C%89%E7%9A%84%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A8%8B%E5%BA%8F%E5%86%85%EF%BC%8C%E4%BB%8E%E8%80%8C%E6%94%B9%E5%8F%98%E5%8E%9F%E7%A8%8B%E5%BA%8F%E7%9A%84%E8%A1%8C%E4%B8%BA%E7%9A%84%E8%A1%8C%E4%B8%BA">38</a>的方式，允许你在 Vanilla 服务端上安装基于 SpongeAPI 的插件；后者实现在 Forge 上，允许你在 VanillaForge 上安装基于 SpongeAPI 的插件（同时享受安装基于 ForgeAPI 的模组），需要提到的是，在 SpongeForge 中，其其实是作为一个 <strong>ForgeMod</strong> 来使用（即将其放入<code>.\\mods</code>中并启动服务端），而非作为一个完整的服务端运行核心文件。</p><p>很遗憾的是，由于生不逢时，Sponge 并没有得到大多数开发者的支持，因此基于 SpongeAPI 开发的插件少之甚少，主流 BukkitAPI 插件迁移至 SpongeAPI 的更是屈指可数，因此对于普通服主来说，使用 Sponge 会导致在插件支持上落后于 Bukkit 使用者。</p><p>同时，由于自 1.13 起，由于 Minecraft 源代码的大幅度改动导致ForgeAPI大幅度改动其代码，致使 Sponge 始终难以兼容 1.13 及以上版本，直到最近才发布了对 1.14.4版本的支持</p><p>SpongeVanilla 有如下属性:</p><ul><li><strong>可以</strong> 安装支持 Sponge 的插件</li><li>性能相对很好</li><li>更新较快</li><li>稳定性很好</li><li>社区支持友好</li><li>插件生态较差</li><li>支持至最高 1.14.4</li></ul><p>SpongeForge 有如下属性:</p><ul><li>基于 ForgeAPI</li><li><strong>可以</strong> 安装支持 SpongeAPI 的插件</li><li><strong>可以</strong> 安装支持 ForgeAPI 的模组</li><li>性能相对很好</li><li>更新较快</li><li>稳定性很好</li><li>社区支持友好</li><li>插件生态较差</li><li>对模组兼容性较差，但插件对模组兼容性极佳</li><li>支持至最高 1.14.4</li></ul><p>下载 SpongeVanilla:</p><ol><li>SpongePowered 官方: <a href="https://www.spongepowered.org/downloads/spongevanilla/stable/" target="_blank" rel="noopener noreferrer">https://www.spongepowered.org/downloads/spongevanilla/stable/</a></li></ol><p>下载 SpongeForge:</p><ol><li>SpongePowered 官方: <a href="https://www.spongepowered.org/downloads/spongeforge/stable/" target="_blank" rel="noopener noreferrer">https://www.spongepowered.org/downloads/spongeforge/stable/</a></li></ol><p><em>题外话:曾经有一段时间，Sponge 是市面上唯一一个支持 1.8+ 高版本插件+模组的服务端，当Bukkit阵营始终停留在 1.7.10 时，已经支持之 1.12.2 的 Sponge 收到了大部分神奇宝贝服服主的欢迎</em></p><details class="hint-container details"><summary>注释 14</summary></details><h3 id="_18-vanillafabric" tabindex="-1"><a class="header-anchor" href="#_18-vanillafabric"><span>18. VanillaFabric</span></a></h3><p>前面我们提到了<code>由于自1.13起，Minecraft源代码的大幅度改动</code>，这导致了 CraftBukkit/Spigot，Sponge，Forge 等项目分别出现了时常不同的窗口期，这段时间内这些项目都没有发布对新版本的支持。<br> 在这段长达半年的窗口期中，涌现了几个新的 ModAPI，抛去因为夹带私货和停止支持的 RiftAPI，便只剩下了在当时乃至现在最流行的新生代 API——Fabric[39]</p><p>Fabric 和 Rift 不同，他不是在那段窗口期诞生的替代产品，他早自 1.12 时代就已出现，只不过和 Sponge 一样同样生不逢时，虽然设计先进，但大多数开发者当时依然只依赖于 Forge 开发模组而不是 Fabric，知道窗口期的来临，Fabric 才得以重获新生，得到了一部分开发者的支持[40]。</p><p>Fabric 是<strong>模块化</strong>[41]的，这意味着他不想高耦合的 Forge，每次 Minecraft 源代码更新就要折腾一阵子推倒重来，他完全可以拆出不兼容的模块，并更换上兼容新版本的模块以快速发布更新，这也是 Fabric 甚至有针对每一个 Minecraft 预览版(Snapshot)的支持的原因。</p><p>VanillaFabric 则和 VanillaForge 类似，是基于 Vanilla 的实现了 FabricAPI 支持的服务端，他允许你安装 FabricMod。</p><p>VanillaFabric 有以下属性:</p><ul><li>基于 Vanilla</li><li><strong>可以</strong> 安装支持 FabricAPI 的模组</li><li>稳定性较好</li><li>性能相对较好</li><li>可插拔性强，易于更新</li></ul><p>下载 VanillaFabric:</p><ol><li>前往 Fabric 官网下载 Fabric Installer，并选择 install server 模式，将安装目录指向运行过一次的 Vanilla 服务端: <a href="https://fabricmc.net/use/" target="_blank" rel="noopener noreferrer">https://fabricmc.net/use/</a></li></ol><details class="hint-container details"><summary>注释 15</summary><p>[39]: 此处很显然不严谨，Fabric 本体是一个模组加载器（Mod Loader），不是一个 ModAPI，Fabric 的 ModAPI 是 FabricAPI，但因为 Fabric 的模块化设计，FabricAPI 作为 FabricMod 与 Fabric 本体（Fabric Loader）分离，不默认提供，因此 FabricAPI 又不能代表 Fabric，故如此表示<br> [40]: 虽然设计确实先进，但随着 Forge 发布对新版本的支持，Fabric 又逐渐趋向没落，只留下来了一些或是小型的，或是客户端向模组的青睐，比如 ReplayMod<br> [41]: 是指将一整个代码项目设计成由多个互不相关又互相联系的模块，方便维护的代码设计模式</p></details><h3 id="_19-fukkit" tabindex="-1"><a class="header-anchor" href="#_19-fukkit"><span><em>19.Fukkit</em></span></a></h3><p>Fukkit是一款实现了 BukkitAPI+FabricAPI 支持的服务端，现已停更归档，因此不多赘述，也不提供下载地址。</p><p><em>为什么不推荐?:已归档，不稳定</em></p><p>如果你看到了这里，那么恭喜你已经结束了所有<strong>主流</strong>服务端的介绍，接下来是两个<em>看看就好</em>的服务端的介绍，如果你不需要了解这些，请直接跳到下一节。</p><h3 id="_20-glowstone" tabindex="-1"><a class="header-anchor" href="#_20-glowstone"><span><em>20.Glowstone</em></span></a></h3><p>如果你是个聪明人，你会发现上面的所有服务端都基于 Mojang 提供的官方服务端 Vanilla，那么有没有不依赖于 Vanilla 的服务端呢，答案是有，这就是 Glowstone。</p><p>Glowstone 完全不依赖任何 Mojang 的源码，因此他非常的自由，不会受到 Mojang EULA 和 DMCA 的管控。</p><p>Glowstone 有如下属性:</p><ul><li>少更新</li><li><strong>可以</strong> 安装支持 BukkitAPI,SpigotAPI,PaperAPI,GlowstoneAPI 的插件</li><li>稳定性不好</li><li>性能较好</li><li>缺少很多原版内容</li><li>仅支持 1.12.2</li></ul><p><em>为什么不推荐?:由于 Glowstone 不基于 Vanilla，所有 Vanilla 负责的游戏行为都由其自行处理，因此 Vanilla 提供的一些东西未在 Glowstone 中提供，Bukkit同理。这会导致一些Bukkit插件无法在 Glowstone 运行，因此对于绝大多数服主都不友好，故不推荐使用</em></p><p>下载 Glowstone:</p><ol><li>Glowstone 官方: <a href="https://glowstone.net/#downloads" target="_blank" rel="noopener noreferrer">https://glowstone.net/#downloads</a></li></ol><h3 id="_21-cuberite" tabindex="-1"><a class="header-anchor" href="#_21-cuberite"><span>21. Cuberite</span></a></h3><p>Cuberite 同样完全不依赖任何 Mojang 的源码，因此他非常的自由，不会受到 Mojang EULA 和 DMCA 的管控。</p><p>而且，Cuberite 支持跨版本运行，1.8-1.12.2 的客户端均能加入到你的 Cuberite 服务器中</p><p>说起来你可能不信，Cuberite 甚至还能在 Android™️ 上运行。</p><p>Cuberite 有如下属性:</p><ul><li>少更新</li><li>Android™️ 跨平台支持</li><li><strong>可以</strong> 安装支持 CuberiteAPI 的插件</li><li>稳定性不好</li><li>性能较好</li><li>缺少很多原版内容</li><li>同时支持 1.8-1.12.2[43]</li></ul><p>*为什么不推荐?:比起GlowStone，他连BukkitAPI都不支持。</p><p>下载 Cuberite:</p><ol><li>Cuberite 官方: <a href="https://cuberite.org/" target="_blank" rel="noopener noreferrer">https://cuberite.org/</a></li></ol><p>[43]: 来自其官网说明，但根据其开源项目提交日志，Cuberite 应已支持 1.14 版本的连接，并正在尝试对 1.15 的特性进行兼容</p><p>最后，以上服务端的迭代关系大致如下:<br><img src="https://s1.ax1x.com/2020/07/30/anMron.png" alt="anMron.png" loading="lazy"></p><p>至此，你已经完成第一节的所有学习，并基本了解了所有主流服务端以及其迭代关系。动核心」，他只是让发布者间接发布了可以直接启动的核心</p>',215)]))}]]),o=JSON.parse('{"path":"/open-server/n1.html","title":"一、服务端核心介绍","lang":"zh-CN","frontmatter":{"title":"一、服务端核心介绍"},"headers":[{"level":2,"title":"为什么要说「直接或间接」","slug":"为什么要说「直接或间接」","link":"#为什么要说「直接或间接」","children":[]},{"level":2,"title":"BuildTools","slug":"buildtools","link":"#buildtools","children":[]},{"level":2,"title":"「间接启动」核心","slug":"「间接启动」核心","link":"#「间接启动」核心","children":[{"level":3,"title":"PaperClip","slug":"paperclip","link":"#paperclip","children":[]}]},{"level":2,"title":"什么是 CMD，什么又是 *nix Shell?为什么我们不能直接双击 jar 运行服务端核心?","slug":"什么是-cmd-什么又是-nix-shell-为什么我们不能直接双击-jar-运行服务端核心","link":"#什么是-cmd-什么又是-nix-shell-为什么我们不能直接双击-jar-运行服务端核心","children":[{"level":3,"title":"CMD 是什么?","slug":"cmd-是什么","link":"#cmd-是什么","children":[]},{"level":3,"title":"*nix Shell 是什么?","slug":"nix-shell-是什么","link":"#nix-shell-是什么","children":[]}]},{"level":2,"title":"主流服务端核心列表","slug":"主流服务端核心列表","link":"#主流服务端核心列表","children":[{"level":3,"title":"1. Vanilla","slug":"_1-vanilla","link":"#_1-vanilla","children":[]},{"level":3,"title":"2. CraftBukkit(有时被称为 Bukkit[10])","slug":"_2-craftbukkit-有时被称为-bukkit-10","link":"#_2-craftbukkit-有时被称为-bukkit-10","children":[]},{"level":3,"title":"3. Spigot","slug":"_3-spigot","link":"#_3-spigot","children":[]},{"level":3,"title":"4. Paper(曾用名 PaperSpigot，有时被称为 PaperClip[15])","slug":"_4-paper-曾用名-paperspigot-有时被称为-paperclip-15","link":"#_4-paper-曾用名-paperspigot-有时被称为-paperclip-15","children":[]},{"level":3,"title":"5. Tuinity","slug":"_5-tuinity","link":"#_5-tuinity","children":[]},{"level":3,"title":"6. Akarin/Torch[23]","slug":"_6-akarin-torch-23","link":"#_6-akarin-torch-23","children":[]},{"level":3,"title":"7. VanillaForge","slug":"_7-vanillaforge","link":"#_7-vanillaforge","children":[]},{"level":3,"title":"8. Cauldron/MCPC+","slug":"_8-cauldron-mcpc","link":"#_8-cauldron-mcpc","children":[]},{"level":3,"title":"9. KCauldron","slug":"_9-kcauldron","link":"#_9-kcauldron","children":[]},{"level":3,"title":"10. Thermos","slug":"_10-thermos","link":"#_10-thermos","children":[]},{"level":3,"title":"11. Contigo","slug":"_11-contigo","link":"#_11-contigo","children":[]},{"level":3,"title":"12. Uranium","slug":"_12-uranium","link":"#_12-uranium","children":[]},{"level":3,"title":"13. CatServer","slug":"_13-catserver","link":"#_13-catserver","children":[]},{"level":3,"title":"**14. Mohist(曾用名 PFCraft)","slug":"_14-mohist-曾用名-pfcraft","link":"#_14-mohist-曾用名-pfcraft","children":[]},{"level":3,"title":"15. Magma","slug":"_15-magma","link":"#_15-magma","children":[]},{"level":3,"title":"16. Arclight","slug":"_16-arclight","link":"#_16-arclight","children":[]},{"level":3,"title":"17. SpongeVanilla&SpongeForge","slug":"_17-spongevanilla-spongeforge","link":"#_17-spongevanilla-spongeforge","children":[]},{"level":3,"title":"18. VanillaFabric","slug":"_18-vanillafabric","link":"#_18-vanillafabric","children":[]},{"level":3,"title":"19.Fukkit","slug":"_19-fukkit","link":"#_19-fukkit","children":[]},{"level":3,"title":"20.Glowstone","slug":"_20-glowstone","link":"#_20-glowstone","children":[]},{"level":3,"title":"21. Cuberite","slug":"_21-cuberite","link":"#_21-cuberite","children":[]}]}],"git":{"createdTime":1730480287000,"updatedTime":1731008066000,"contributors":[{"name":"ii59","email":"1692737558@.com","commits":3}]},"readingTime":{"minutes":29.42,"words":8825},"filePathRelative":"open-server/n1.md","localizedDate":"2024年11月1日"}')}}]);
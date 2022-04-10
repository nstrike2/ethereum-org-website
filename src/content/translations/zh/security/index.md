---
title: 以太坊安全和预防欺诈措施
description: 在以太坊上保持安全
lang: zh
sidebar: true
---

# 以太坊安全和预防欺诈措施 {#introduction}

随着人们对加密货币的兴趣越来越大，学习使用加密货币时的最佳做法是至关重要的。 加密货币是非常有趣和令人兴奋的，但也存在严重的风险。 如果您前期投入少量的工作，你就可以降低这些风险。

<Divider />

## 网络安全 101 {#web-security}

### 使用强密码 {#use-strong-passwords}

[超过 80% 的账户被黑客攻击是由于密码薄弱或被盗造成的](https://cloudnine.com/ediscoverydaily/electronic-discovery/80-percent-hacking-related-breaches-related-password-issues-cybersecurity-trends/)。 一个很长的字符、数字和符号组合是保证您的账户安全的最好方法。

个人常犯的一个错误是使用两到三个常见的、具有相关性的词典词汇的组合。 像这样的密码是不安全的，因为它们很容易被称为[字典攻击](https://wikipedia.org/wiki/Dictionary_attack)的简单黑客技术所攻击。

```md
弱密码示例：CuteFluffyKittens!

强密码示例：ymv\*azu.EAC8eyp8umf
```

另一个常见错误是使用容易通过[社交工程](<https://wikipedia.org/wiki/Social_engineering_(security)>)猜出或发现的密码。 在密码中加入母亲的婚前姓氏、孩子或宠物的名字或出生日期是不安全的，会增加密码被黑客攻击的风险。

#### 强密码设置方法： {#good-password-practices}

- 在密码生成器或你所填写的表格允许的范围内，将密码设得越长越好
- 混合使用大写字母、小写字母、数字和符号
- 不要在密码中使用个人详细资料，如姓氏
- 避免使用字典中的常见词汇

[关于创建强密码的更多内容](https://terranovasecurity.com/how-to-create-a-strong-password-in-7-easy-steps/)

### 使用独立的密码 {#use-unique-passwords}

如果密码数据被泄露，强密码也无法提供足够的保护。 网站  [Have I Been Pwned](https://haveibeenpwned.com)  允许您检查您的账户是否参与了存储在其数据库中的任何数据入侵。 如果有，**您应该立刻更改泄露的密码**。  为每个帐户设置独立的密码可以降低当你的一个密码被破解时黑客进入你所有账户的风险。

### 使用密码管理器 {#use-password-manager}

<InfoBanner emoji=":bulb:">
  <div>
    使用密码管理器可以创建唯一的强密码并记住它们！ 我们<strong>强烈</strong>推荐使用它，而且它们大部分是免费的。
  </div>
</InfoBanner>

记住为每个账户设置的唯一强密码并不现实。 密码管理器为您的所有密码提供了一个安全、加密的存储空间，您可以通过一个强主密码进行访问。 他们还在注册新服务时生成建议使用的强密码，这样你就不必自行创建密码了。 许多密码管理器也会告诉你是否涉及数据泄露，让你在任何恶意攻击之前更改密码。

![使用密码管理器的示例](./passwordManager.png)

#### 尝试一个密码管理器： {#try-password-manager}

- [Bitwarden](https://bitwarden.com/)
- [KeePass](https://keepass.info/)
- [LastPass](https://www.lastpass.com/)
- [1Password](https://1password.com/)

### 2FA（双重身份验证） {#two-factor-authentication}

为了证明您是本人，有不同的唯一证明可以用来验证。 这些被称为**因素**的三个主要因素是：

- 您知道的信息（例如密码或安全问题）
- 生理特征（如指纹或虹膜/面部识别）
- 你私有的（安全密钥或你手机上的认证程序）

使用**双重身份验证 (2FA)** 为您的在线账户提供额外的*安全因素*，因此仅知道您的密码（您知道的信息）不足以访问一个账户。 最常见的是，双重验证是一个随机的 6 位数代码，被称为**基于时间的一次性密码（TOTP）**，您可以通过身份验证程序应用程序（如 Google authenticator 或 Authy）生成。 这是一种“你私有的”，因为生成随机时间密码的种子文件存储在你的设备上。

<InfoBanner emoji=":lock:">
  <div>
    注意：使用基于短信的 2FA 很容易遭受
    <a href="https://www.vice.com/en/article/3kx4ej/sim-jacking-mobile-phone-fraud">
      SIM 卡盗用
    </a>
     并不安全。 为了获得最佳安全性，请使用诸如{" "}
    <a href="https://mashable.com/article/how-to-set-up-google-authenticator">
      Google 身份验证器
    </a>
     或 <a href="https://authy.com/">Authy</a> 之类的服务。
  </div>
</InfoBanner>

#### 安全密钥 {#security-keys}

对于那些想要进阶使用 2FA 的人，请考虑使用安全密钥。 安全密钥是物理硬件身份验证设备，其工作方式与身份验证程序应用程序相同。 使用安全密钥是最安全的 2FA 使用方式。 这些密钥中有许多采用了 FIDO 通用第二因素 (U2F) 标准。 [了解更多关于 FIDO U2F](https://www.yubico.com/authentication-standards/fido-u2f/) 的信息。

查看更多 2FA 相关信息：

<YouTube id="m8jlnZuV1i4" start="3479" />

### 卸载浏览器扩展程序 {#uninstall-browser-extensions}

Chrome 扩展程序或 Firefox 插件等浏览器扩展程序可以增强浏览器的功能并提高用户体验，但它们也存在风险。 大多数浏览器扩展程序默认请求获得“读取和更改网站数据”的权限，几乎允许它们对您的数据做任何事情。 Chrome 扩展程序总是自动更新，因此旧版本安全的扩展程序可能会在更新后被加入恶意代码。 大多数浏览器扩展程序都不会试图窃取您的数据，但您应该知道它们可以。

#### 通过以下方式保持安全： {#browser-extension-safety}

- 只安装来自受信任来源的浏览器扩展程序
- 删除不使用的浏览器扩展程序
- 在本地安装 Chrome 扩展程序以停止自动更新（高级）

[更多关于浏览器扩展程序的风险](https://www.kaspersky.co.uk/blog/browser-extensions-security/12750/)

<Divider />

## 加密货币安全 101 {#crypto-security}

### 提升您的知识水平 {#level-up-your-knowledge}

人们在网络中被骗的主要原因之一通常是缺乏了解。 例如，如果您不了解以太坊网络是去中心化的，不为任何人所拥有，您就很容易上当受骗。有人假装成客户服务人员，承诺用您的私钥找回您丢失的 ETH。 了解以太坊如何运作是一项值得的投资。

<DocLink to="/what-is-ethereum/">
  以太坊简介
</DocLink>

<DocLink to="/eth/">
  什么是以太币 (ETH)？
</DocLink>
<Divider />

## 钱包安全 {#wallet-security}

### 不要把您的私钥给别人 {#protect-private-keys}

**无论任何原因，永远不要与他人分享您的私钥！**

您钱包的私钥就像您的以太坊钱包的密码。 这是阻止知道您的钱包地址的人榨干您账户中所有资产的唯一方法。

<DocLink to="/wallets/">
  什么是以太坊钱包？
</DocLink>

#### 不要将您的助记词/私钥截图 {#screenshot-private-keys}

如果将您的助记词或私钥截图，您有可能将它们同步到云端，并有可能使它们被黑客获取。 从云端获取私钥是黑客最常见的攻击方式。

### 使用硬件钱包 {#use-hardware-wallet}

硬件钱包为私钥提供离线存储。 它们被认为是存储私钥最安全的钱包选项。

即使黑客控制了你的电脑，将私钥保持在离线状态，可以大大降低被黑客攻击的风险。

#### 尝试以下硬件钱包: {#try-hardware-wallet}

- [Ledger](https://www.ledger.com/)
- [Trezor](https://trezor.io/)

### 发送交易前仔细检查 {#double-check-transactions}

不小心将加密货币发送到错误的钱包地址是一个常见的错误。 **在以太坊上发送交易是不可逆的。**除非您认识地址所有者并能说服他们把您的资金退回来，否则您将没有办法找回您的资金。

在发送交易之前，请务必确保您发送的地址与接收人的地址完全匹配。 在与智能合约进行交互时，建议在签名前阅读交易消息。

### 设置智能合约的支出限额 {#spend-limits}

与智能合约进行交互时，不得允许无限制支出限额。 无支出限额可以让智能合约掏空您的钱包。 相反，只将支出限额设置为交易所需金额。

许多以太坊钱包提供限额保护，以防止账户被掏空。

[探索具有限额保护的钱包](/wallets/find-wallet/?filters=has_limits_protection)

<Divider />

## 常见的骗术 {#common-scams}

骗子总是想方设法从您身上骗走您的资金。 完全阻止骗子是不可能的，但我们可以通过了解所使用的大多数技术来降低他们的成功率。 虽然骗术层出不穷，但是他们的本质相同。 不出意外，请记住：

- 始终保持怀疑态度
- 没有人会给您免费或打折 ETH！
- 没有人需要获取您的私钥或个人信息

### 赠品诈骗 {#giveaway}

加密货币中最常见的骗局之一是赠品诈骗。 赠品诈骗有多种形式，但一般前提是，如果您将 ETH 发送到所提供的钱包地址，您将会收到双倍的 ETH。 *因此，它也称为“买一送一”诈骗。*

这些骗局通常规定在有限时间内索取赠品，以鼓励人们做出错误的决定，并制造一种虚假的紧迫感。

#### 社交媒体黑客攻击 {#social-media-hacks}

最出名的一次发生在 2020 年 7 月，当时很多知名人士和组织的 Twitter 账户被黑。 黑客使用被盗的账户发布了一个比特币赠送活动。 尽管这些欺骗性的推文很快就被发现并删除，但黑客们还是成功骗走了 11 个比特币（截止 2021 年 9 月，这些比特币价值 50 万美元）。

![Twitter 上的一个诈骗案例](./appleTwitterScam.png)

#### 名人的赠品 {#celebrity-giveaway}

名人的赠品是赠品诈骗的另一种常见形式。 骗子会录制名人的视频采访或会议演讲，并在 YouTube 上进行直播——看起来好像名人正在接受直播视频采访，为加密货币赠送活动背书。

除最常使用的 Vitalik Buterin 以外，此类骗局也使用了网络上许多其他知名人士（例如 Elon Musk 或 Charles Hoskinson）。 在直播中加入一位知名人士会让骗局看起来有一种合法性（这看起来有点牵强，但 Vitalik 参与其中，所以肯定没问题！）。

**赠品活动通常是骗局。 如果您把钱转到这些账户，您将永远失去它们。**

![YouTube 上的一个诈骗案例](./youtubeScam.png)

### 技术支持诈骗 {#support-scams}

加密货币是一种相对年轻且常被误解的技术。 利用这一点的一种常见的骗局是技术支持诈骗 (Support scams)，骗子会冒充受欢迎的加密货币钱包、交易所或区块链的支持人员。

很多关于以太坊的讨论都发生在 Discord 上。 骗子通常会通过在公开的 Discord 频道中搜索寻求支持的问题，然后冒充支持人员向询问者发送私人信息以找到他们的目标。 通过建立信任，骗子试图诱使您透露您的私钥或将您的资金发送到他们的钱包。

![Discord 上的一个技术支持诈骗案例](./discordScam.png)

一般来说，员工永远不会通过私人的非官方渠道与您交流。 在处理支持问题时，要牢记一些简单的事情：

- 永远不要分享您的私钥、助记词或密码
- 绝不允许任何人远程访问您的电脑
- 切勿通过官方指定以外的渠道沟通

<InfoBanner emoji=":lock:">
  <div>
    请注意：尽管支持类型的骗局通常发生在 Discord 上，但它们也在任何讨论加密货币聊天应用程序（包括电子邮件）上普遍存在。
  </div>
</InfoBanner>

### 网络钓鱼诈骗 {#phishing-scams}

网络钓鱼诈骗是另一种越来越常见的诈骗手段，他们试图窃取您钱包中的资金。

一些网络钓鱼电子邮件要求用户点击链接，将其重新定向到仿冒网站，并要求他们输入助记词、重置密码或发送电子邮件。 还有一些可能会让您在不知情的情况下安装恶意软件来感染您的电脑，并让骗子访问您的电脑文件。

如果你收到一封来历不明的邮件，请记住:

- 永远不要打开您不认识的电子邮件地址中的链接或附件
- 切勿将你的个人信息或密码泄露给任何人
- 删除来历不明的电子邮件

[更多关于避免网络钓鱼诈骗的内容](https://support.mycrypto.com/staying-safe/mycrypto-protips-how-not-to-get-scammed-during-ico)

### 加密货币交易经纪人诈骗 {#broker-scams}

他们自称是专业的加密货币经纪人，他们会收取您的钱，代您投资。 这一提议通常伴随着不切实际的回报承诺。 在骗子收到您的钱后，他们可能会诱导您，要求您拿出更多的资金，这样您就不会错过进一步的投资收益，或者他们也可能就完全消失了。

这些骗子利用 YouTube 上的虚假账户，找到他们的目标，然后开始看似自然地开始有关经纪人的交谈。 这些对话通常会收到很多点赞，以增加真实性，但这些“赞”都是来自机器人账户。

**不要相信互联网上的陌生人，让他们代您投资。 您将失去您的加密货币。**

![YouTube 上的交易经纪人诈骗案例](./brokerScam.png)

### 加密货币矿池骗局 {#mining-pool-scams}

在矿池骗局中会有人主动联系您，并声称您可以通过加入以太坊矿池获得大量回报。 骗子会提出要求，并一直与您保持联系。 基本上，骗子会试图让您相信，用当您加入一个以太坊矿池时，您的加密货币将被用来创建 ETH，您将以 ETH 的形式获得红利。 最终会发生的是，您会发现您的加密货币只能获得微薄的回报。 这只是为了引诱您投入更多的资金。 最终，您所有的钱都会被送到一个未知的地址，而骗子要么会消失，要么在某些情况下会继续保持联系，就像最近发生的一个案例一样。

总之，要提防那些在社交媒体上与您联系并要求您加入矿池的人。 一旦您失去您的加密货币，它就永远回不来了。

有些事情要记住：

- 警惕任何与您联系，告诉您如何使用加密货币赚钱的人
- 做好关于赌注、流动性池或其他加密货币投资方式的调研
- 这种计划即使有，也很少是合法的。 如果是的话，它们会成为主流，您会听说过它们。

[有人在矿池骗局中损失 20 万美元](https://www.reddit.com/r/CoinBase/comments/r0qe0e/scam_or_possible_incredible_payout/)

### Eth2 代币骗局 {#eth2-token-scam}

在 2022 年[合并](/upgrades/merge/)来临之前，骗子们尝试使用“Eth2”这个新概念来欺骗用户，将他们的以太币兑换为“ETH2”代币。 实际上合并并没有产生任何“ETH2”或者任何其它新代币。 当前您所拥有的以太币在合并之后仍然是一样的以太币，而不用进行任何的兑换。

骗子们可能会以“技术支持”的面貌出现，告诉您需要把手中的 ETH 存到指定地址，这样你就可以得到“ETH2”。 实际上，并没有官方的[以太坊技术支持](/community/support/)，也没有新代币。 永远不要把您钱包的助记词和陌生人分享。

### 空投骗局 {#airdrop-scams}

空投骗局通常是先构建一个诈骗项目，并向您的钱包空投一种资产（NFT，代币），然后把诈骗的网站发给您，让您去获取这些空投的资产。 当您试图获取资产时，网站会要求您使用自己的以太坊钱包登录，并“批准”一笔交易。 实际上，这个交易会将您账户的公私密钥都发给骗子。 这种骗局的另一种方式是让您确认一笔可以把资金转移到骗子账户的交易。

[关于空投骗局的更多信息](https://www.youtube.com/watch?v=LLL_nQp1lGk)

<Divider />

## 延伸阅读 {#further-reading}

### 网络安全 {#reading-web-security}

- [This is why you shouldn’t use texts for two-factor authentication](https://www.theverge.com/2017/9/18/16328172/sms-two-factor-authentication-hack-password-bitcoin) - _The Verge_
- [Up to 3 million devices infected by malware-laced Chrome and Edge add-ons](https://arstechnica.com/information-technology/2020/12/up-to-3-million-devices-infected-by-malware-laced-chrome-and-edge-add-ons/) - _Dan Goodin_
- [How to Create a Strong Password — That You Won’t Forget](https://www.avg.com/en/signal/how-to-create-a-strong-password-that-you-wont-forget) - _AVG_
- [What is a security key?](https://help.coinbase.com/en/coinbase/getting-started/verify-my-account/security-keys-faq) - _Coinbase_

### 加密货币安全 {#reading-crypto-security}

- [Protecting Yourself and Your Funds](https://support.mycrypto.com/staying-safe/protecting-yourself-and-your-funds) - _MyCrypto_
- [4 Ways to Stay Safe in Crypto](https://www.coindesk.com/tech/2021/04/20/4-ways-to-stay-safe-in-crypto/) - _CoinDesk_
- [Security Guide For Dummies And Smart People Too](https://medium.com/mycrypto/mycryptos-security-guide-for-dummies-and-smart-people-too-ab178299c82e) - _MyCrypto_
- [Crypto Security: Passwords and Authentication](https://www.youtube.com/watch?v=m8jlnZuV1i4) - _Andreas M. Antonopoulos_

### 防诈骗指南 {#reading-scam-education}

- [Staying Safe: Common Scams](https://support.mycrypto.com/staying-safe/common-scams) - _MyCrypto_
- [Avoiding Scams](https://bitcoin.org/en/scams) _Bitcoin.org_

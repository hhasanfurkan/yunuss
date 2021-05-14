module.exports = {
name:"para-çek",
code:`
$setUserVar[param;$sum[$getUserVar[param;$authorID];$message];$authorID]
$setUserVar[banka;$sub[$getUserVar[banka;$authorID];$message];$authorID]
$onlyIf[$isNumber[$message]!=false;**Lütfen Sayı Gir!**]
$argsCheck[>1;**Çekeceğin Miktarı Yazmalısın!**]
$title[Kawaii Bankdan Para Çekildi]
$onlyIf[$message<=$getUserVar[banka;$authorID];**Dostum, Bankanda Yeterli Miktar da Paran Yok!**]

$description[**Bakanızdan \`$message\` TL Bakiye Çektiniz,**
**Şuanki Nakit Bakiyeniz: \`$getUserVar[param]\`**]
$footer[Furkim Development]
$addTimestamp`
}
module.exports = {
name:"para-sil",
code:` 
$onlyForIDs[655981789407346718;Bu Komut Sahibim'e Özeldir.]
$argsCheck[>2;Sileceğim Kişiyi Etiketlemelisin ve Ne kadar miktar Sileceğimi yazmalısın Furkim Üyesi!]
$description[\`$username[$mentioned[1]]#$discriminator[$mentioned[1]]\` **Kişisinin** \`$noMentionMessage TL\` **Miktarında Parası Silinmiştir.**]
$setUserVar[param;$sub[$getUserVar[param;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$onlyIf[$isNumber[$noMentionMessage]!=false;Sileceğim Miktar Para Değil! D-Dostum Naptın Sen :D]`
}
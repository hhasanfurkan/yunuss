module.exports = {
name:"para-ekle",
code:`
$onlyForIDs[655981789407346718;Bu Komut Sahibim'e Özeldir.]
$argsCheck[>2;Ekeyeceğim Kişiyi Etiketlemelisin ve Ne kadar miktar ekleyeceğimi yazmalısın Furkim Üyesi!]
$description[\`$username[$mentioned[1]]#$discriminator[$mentioned[1]]\` **Kişisine** \`$noMentionMessage TL\` **Miktarında Para Eklenmiştir.**]
$setUserVar[param;$sum[$getUserVar[param;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$onlyIf[$isNumber[$noMentionMessage]!=false;Ekleyeceğim Miktar Para Değil! D-Dostum Naptın Sen :D]`
}
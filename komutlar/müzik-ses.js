module.exports = ({
  name:"ses",
  aliases:['sound','voice'],
 code:`
$addCmdReactions[🔊]
$volume[$message]
$onlyIf[$voiceID[$clientID]!=;**Müzik Çalmazken Kullanamazsın!**]
$onlyIf[$voiceID!=;**Bir Ses Kanalına Girmezsen Kullanamazsın!**]
$suppressErrors[**Müzik Çalmazken Kullanamazsın!**]
$onlyIf[$message<=100;Maximum 100 olarak ayarlanabilir]
$onlyIf[$isNumber[$message]!=false**Bir Sayı Girmelisin!**]
$argsCheck[1;Lütfen Bir Ses Seviyesi Gir!**]
$onlyForIDs[$getServerVar[şarkı]**Bu Komutu Sadece Şarkıyı Başlatan \`$userTag[$getServerVar[şarkı]]\` Kullanıcısı Kullanabilir**]`
})
module.exports = ({
  name:"bass",
  aliases:['Bass','BASS'],
 code:`
$addCmdReactions[🔊]
$volume[$message]
$onlyIf[$voiceID[$clientID]!=;**Müzik Çalmazken Kullanamazsın!**]
$onlyIf[$voiceID!=;**Bir Ses Kanalına Girmezsen Kullanamazsın!**]
$suppressErrors[**Müzik Çalmazken Kullanamazsın!**]
$onlyIf[$isNumber[$message]!=false;**\`0 ile ∞\` Arasında Bir Bass Seviyesi Girmelisin!**]
$argsCheck[1;**\`0 ile ∞\` Arasında Bir Bass Seviyesi Girmelisin!**]
$onlyForIDs[$getServerVar[şarkı];**Bu Komutu Sadece Şarkıyı Başlatan \`$userTag[$getServerVar[şarkı]]\` Kullanıcısı Kullanabilir!**]`
})
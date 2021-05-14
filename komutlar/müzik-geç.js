module.exports = ({
  name:"geç",
  aliases:['skip'],
 code:`
$addCmdReactions[⏯]
$let[geç;$skipSong]
$onlyIf[$voiceID[$clientID]!=;**Müzik Çalmazken Kullanamazsın!**]
$onlyIf[$voiceID!=;**Bir Ses Kanalına Girmezsen Kullanamazsın!**]
$suppressErrors[**Müzik Çalmazken Kullanamazsın!**]
$onlyForIDs[$getServerVar[şarkı];**Bu Komutu Sadece Şarkıyı Başlatan \`$userTag[$getServerVar[şarkı]]\` Kullanıcısı Kullanabilir!**]`
})
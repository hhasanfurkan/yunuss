module.exports = ({
  name:"tekrarla",
  aliases:['loop'],
 code:`
$addCmdReactions[🔁]
$let[geç;$skipSong]
$let[şarkı;$playSong[$songInfo[title];...;yes;yes;:x:**\`$songInfo[title]\` Adında Bir Müzik Bulamadım!**]]
$onlyIf[$voiceID[$clientID]!=;**Müzik Çalmazken Kullanamazsın!**]
$onlyIf[$voiceID!=;**Bir Ses Kanalına Girmezsen Kullanamazsın!**]
$suppressErrors[**Müzik Çalmazken Kullanamazsın!**]
$onlyForIDs[**Bu Komutu Sadece Şarkıyı Başlatan \`$userTag[$getServerVar[şarkı]]\` Kullanıcısı Kullanabilir!**]`
})
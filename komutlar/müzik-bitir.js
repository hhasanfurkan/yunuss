module.exports = ({
  name:"çık",
  aliases:['leave','bitir'],
 code:`
$addCmdReactions[⏹]
$djsEval[message.member.voice.channel.leave();]
$onlyIf[$voiceID[$clientID]!=;**Müzik Çalmazken Kullanamazsın!**]
$onlyIf[$voiceID!=;**Bir Ses Kanalına Girmezsen Kullanamazsın!**]
$suppressErrors[**Müzik Çalmazken Kullanamazsın!**]
$onlyForIDs[$getServerVar[şarkı];**Bu Komutu Sadece Şarkıyı Başlatan \`$userTag[$getServerVar[şarkı]]\` Kullanıcısı Kullanabilir!**]`
})
module.exports = ({
  name:"çal",
  aliases:['play'],
 code:`$author[Müzik Çalmaya Başlıyor;$authorAvatar]
$description[**Aranan Müzik:** \`$message\`
**Bulunan Müzik:** $replaceText[$get[şarkı];;$songInf[title];-1]
**Müzik Açıklaması:** \`$songInfo[description]\`
**Müzik uzunluğu:** \`$replaceText[$replaceText[$songInfo[duration];Seconds;Saniye;-1];Second;Saniye;-1]\`
**Müzik Linki:** [Tıkla]($songInfo[url])
**Müzik Kanalı:** [$songInfo[publisher]]($songInfo[publisher_url])
**Çalan Kişi:** \`$userTag[$authorID]\`]
$thumbnail[$songInfo[thumbnail]]
$color[303136]
$footer[Aradığınız Şarkı Sıraya Eklendi Sıraya Bakmak için kf-queue Yazın]
$setServerVar[şarkı;$authorID]
$let[$playSong[$message;...;yes;yes;:x: **\`$message\` Adında Bir Müzik Bulamadım!**]]
$suppressErrors[**Müzik Çalmazken Kullanamazsın!**]
$onlyIf[$voiceID!=;**Bir Ses Kanalına Girmezsen Kullanamazsın!**]
$argsCheck[>1;**Lütfen Bir Müzik Adı Gir!**]`
}) 
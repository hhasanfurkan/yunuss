module.exports = {
name:"dm-mesaj",
code:`
$argsCheck[>1;**Lütfen Birini Etiketle**]
$argsCheck[>2;**Lütfen Bir Mesaj Yaz**]
$suppressErrors[**Kişinin DM'si Kapalıydı O Yüzden Mesaj Atamadım!**]
$deletecommand
$channelSendMessage[$channelID;**Mesaj Başarıyla Gönderildi!**]
$dm[$mentioned[1]]
$description[**Merhaba Ben !        ๖ۣۜShooter_Faund  ✣'nin Botu Shooter_Faund,**
**Aşağıda Bilgilirini Verdiğim Kişi Sana Benim Tarafımdan Mesaj Gönderdi.**

**Mesaj:** $noMentionMessage
**Gönderen Kişi:** <@$authorID>
**Alıcı:**  <@$mentioned[1]>]`
}
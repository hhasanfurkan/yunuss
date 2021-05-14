module.exports = {
    name:"sunucubilgi",
    code:`
    $color[RED]
  $author[**$serverName[$guildID]** Sunucu Analizi;$serverIcon]
  $description[$thumbnail[$serverIcon]
   
   Sunucudaki Emoji Sayısı **$emojiCount**
   Sunucudaki Rol Sayısı **$roleCount**
   Kullanıcı Bilgi **$membersCount**
   Kanallar **$sub[$channelCount;$channelCount[category]]**
   Metin Kanalı: **$channelCount[text]**
   Sesli Kanalı: **$channelCount[voice]** 
   Katagori: **$channelCount[category]**
   $addField[Sunucudaki Takviye Sayısı;**$serverBoostCount**;yes]
   $addField[Sunucu Kuruluş Tarihi;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$guildID;time];and;ve;-1];seconds;Saniye;-1];minutes;Dakika;-1];hours;Saat;-1];days;Gün;-1];months;Ay;-1];weeks;Hafta;-1];years;Yıl;-1];yes] $addField[Sunucunun Bölgesi;**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverRegion;us-west; Batı Amerika;1];us-east; Doğu Amerika;1];us-central;Amerika;1];us-south; Güney Amerika;1];singapore;Singapur;1];southafrica; Güney Afrika;1];sydney;Sydney;1];europe;Avrupa;1];brazil;Brazilya;1];hongkong;Hong Kong;1];russia;Rusya;1];japan;Japonya;1];india; Hindistan;1]**;yes]
   $addField[👑 Sunucu Sahibi;<@$ownerID>;yes] 

  ]
  `
  }
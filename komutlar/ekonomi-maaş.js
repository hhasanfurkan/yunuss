module.exports = {
  name:"maaş",
  code:`
$cooldown[24h;24 Saat Sonra Maaşını Almaya Gel]
$description[**1200Tl Maaşını Aldın Kawaii Fire Üyesi**]
$setUserVar[param;$sum[$getUserVar[param;$authorID];1200];$authorID]`
}
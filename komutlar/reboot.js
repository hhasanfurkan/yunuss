module.exports = {
    name: "reboot", 
    aliases:['restart','yeniden-başlat','r'],
    code: `
    $reboot[furki.js]
    $wait[1s]
    $channelSendMessage[$channelID;{title:Yeniden Başlatma İşlemi}{description:$username[$clientID] **Yeniden Başlatılıyor.** **Yeniden Başlatılmadan Önceki Uptime: \`$replaceText[$replaceText[$replaceText[$replaceText[$uptime;d; Gün;-1];h; Saat;-1];m; Dakika;-1];s; Saniye;-1]\`**} {thumbnail:https://cdn.discordapp.com/attachments/825539441539678208/833297770341335060/id.gif}{color:RED}]
    $onlyForIDs[655981789407346718;Bu komutu sadece **$userTag[655981789407346718]** kullanabilir]
    `
    }
module.exports = {
name:"çalış",
code:`  
$cooldown[30m; %time% dinlenmeye ihtiyacın var!]
$author[Furkim, Çalıştın]
$footer[Furkim Development]
$description[**$randomText[Sekreter;Aşçı;Hemşire;Polis;Developer]** olarak \`$random[1;24]\` saat işte çalıştın **$random[200;1500]TL** kazandın]
$color[$random[1;99999]]
$setUserVar[param;$sum[$getUserVar[param];$random[200;1500]]]`
}
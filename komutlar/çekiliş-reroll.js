bot.command({
    name: "reroll",
    code: `
$setServerVar[cekilis;undefined]
$editMessage[$message[1];{title:Çekiliş Bitti 🎉}{description:Ödül: \`$messageSlice[1]\` 🎉
   Yapan Kişi: **$userTag[$authorID]**
   Kazanan: $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;hiçbiri, yeterli katılımcı yoktu.];false;<@$randomText[$joinSplitText[;]]>.]}{color:RANDOM}{footer: Çekiliş Sona Erdi.:$authorAvatar}]
   $channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;Yeterli katılımcı yoktu.];false;Kazanan: <@$randomText[$joinSplitText[;]]>, Tebrikler!]]
$removeSplitTextElement[$findTextSplitIndex[$clientID]]
$textSplit[$replaceText[$getReactions[$channelID;$message[1];🎉;id];$clientID,;];,]
   $onlyIf[$isNumber[$message[1]]!=false;{title: Yanlış Kullanım}{description:Yeni girdiğiniz mesaj ID'si. Bu örneği izleyin:
   \`\`\`
$getServervar[prefix]reroll <mesaj idsi>
   \`\`\`}{color:RED}]
$suppressErrors
   `
   })
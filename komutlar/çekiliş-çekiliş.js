module.exports = {
  name:"param",
  code:`
$color[$random[0;99999]]
$description[<@$mentioned[1;yes]> **Üyesinin Üstünde \`$getUserVar[param;$mentioned[1;yes]]\` TL'si Var**
<@$mentioned[1;yes]> **Üyesinin Bankasında \`$getUserVar[banka;$mentioned[1;yes]]\` TL'si Var**]
$onlyIf[$message==;]`
}
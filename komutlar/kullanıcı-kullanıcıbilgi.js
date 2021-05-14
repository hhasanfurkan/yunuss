module.exports = {
    name:"kullanıcıbilgi",
    code:`
    $color[$getRoleColor[$highestRole[$mentioned[1;yes]]]]
    $description[$thumbnail[$userAvatar[$mentioned[1;yes]]]
    **KULLANICI BİLGİ**
    
    **Kullanıcı İsmi**
    $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]
    
    **Sunucudaki İsmi**                                  
    $nickname[$mentioned[1;yes]]
    **Oynuyor Kısmı**
    $replaceText[$getCustomStatus[$mentioned[1;yes]];none;Bir Şey Oynamıyor;-1]
    
    **Discord Kimliği**        
    $mentioned[1;yes] 
    **Discord'a Gİrdiği Yer**
    $replaceText[$replaceText[$replaceText[$replaceText[$platform[$mentioned[1;yes]];mobile;📱 Telefon;-1];desktop;
  💻 Masaüstü;-1];none;Kişi Çevrimdışı;-1];web;İnternet Tarayıcısı;-1]
    **Bot mu**
    $replaceText[$replaceText[$isBot[$mentioned[1;yes]];false;Hayır;-1];true;Evet;-1]
    
    **Hesap Kurulma Tarihi**
    $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$mentioned[1;yes];time];years;Yıl;-1];months;Ay;-1];week;Hafta;-1];days;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;ve;-1];seconds;Saniye Önce Kuruldu !;-1]
    
    **Rolleri**
    $userRoles[$mentioned[1;yes];mentions]
    ]
    `
  }

const questionBank = {
  romantik: {
    emoji: "❤️",
    giris: [
      "Beni düşündüğünde","Gözlerime baktığında","Elimi tuttuğunda","Bana sarıldığında","Sesimi duyduğunda",
      "İlk tanıştığımız günü düşündüğünde","Geleceğimizi hayal ettiğinde","Beni özlediğinde","Ben yanında olduğumda","Kalbini dinlediğinde"
    ],
    devam: [
      "en çok ne hissediyorsun","aklına gelen ilk güzel şey ne oluyor","bizim aşkımızı hangi kelime anlatır",
      "benim hangi huyum seni mutlu ediyor","birlikte yapmak istediğin en güzel şey ne",
      "hangi anımızı tekrar yaşamak isterdin","beni neden seviyorsun","bizim için ne hayal ediyorsun",
      "seni en çok ne mutlu ediyor","bana söylemek istediğin en romantik şey ne"
    ]
  },
  eglenceli: {
    emoji: "😂",
    giris: [
      "Bir gün görünmez olsak","Beraber tatile çıksak","Bir filmde oynasak","Telefonlarımız yer değiştirse","Bir yarışmaya katılsak",
      "Birlikte çocuk olsak","Aynı evde mahsur kalsak","Bir günlüğüne zengin olsak","Beraber yemek yapsak","Dünyayı gezsek"
    ],
    devam: [
      "ilk ne yapardık","en komik olay ne olurdu","hangimiz daha çok panik yapardı","hangimiz daha saçma karar verirdi",
      "bizi görenler ne derdi","en çok neye gülerdik","kim daha çok yemek yerdi","kim daha çok uyurdu",
      "hangi konuda tatlı kavga ederdik","hangimiz daha romantik davranırdı"
    ]
  },
  derin: {
    emoji: "🌙",
    giris: [
      "İlişkimiz hakkında düşündüğünde","Gelecek hayallerini düşündüğünde","Bana güven konusunda","Zor zamanlarda","Kalbini dinlediğinde",
      "Gerçek sevgiyi düşündüğünde","Bizim bağımızı düşündüğünde","Kendini bana anlatmak istesen","Birlikte büyümeyi düşündüğünde","Hayatı düşündüğünde"
    ],
    devam: [
      "sence en önemli şey ne","bana söylemek istediğin ama söyleyemediğin bir şey var mı","bizim en güçlü yanımız ne",
      "neyi daha iyi yapmamızı isterdin","sana kendini en güvende hissettiren şey ne","ilişkimiz sana ne öğretti",
      "benden en çok ne bekliyorsun","hangi konuda daha çok anlaşılmak istersin","bizim için en büyük hayalin ne","sence sevgi nasıl korunur"
    ]
  },
  cesur: {
    emoji: "🔥",
    giris: [
      "Bana bakınca","Ben sana yaklaştığımda","Beni düşündüğünde","Aramızdaki çekimi düşündüğünde","Bana sarıldığında",
      "Yan yana olduğumuzda","Bana söylemek isteyip çekindiğinde","Kalbin hızlandığında","Beni kıskandığında","Benimle baş başa kaldığında"
    ],
    devam: [
      "aklından geçen ilk şey ne oluyor","seni en çok etkileyen şey ne","bende en çekici bulduğun şey ne",
      "bana itiraf etmek istediğin tatlı bir şey var mı","hangi anı unutamıyorsun","beni en çok ne zaman özlüyorsun",
      "aramızdaki en özel şey ne","bana hangi cümleyi söylemek isterdin","beni hangi halimle daha çok seviyorsun","sence aramızdaki enerji nasıl"
    ]
  }
};

const ekler = [
  "dürüstçe","kalbinden geldiği gibi","hiç düşünmeden","tek kelimeyle","romantik şekilde",
  "komik şekilde","çok samimi olarak","gözlerime bakarak","mesaj olarak yazsan","şu an cevap versen",
  "içinden geldiği gibi","en tatlı halinle","utanmadan","gülerek","ciddi ciddi",
  "gece konuşuyor olsak","yanımdayken","beni özlemişken","sürpriz yapmak istesen","bir not yazsan"
];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function randomItem(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateQuestion(){
  const category = document.getElementById("category").value;
  const data = questionBank[category];

  const question =
    `${data.emoji} ${randomItem(data.giris)}, ${randomItem(ekler)} ${randomItem(data.devam)}?`;

  document.getElementById("question").innerText = question;
}

function addFavorite(){
  const question = document.getElementById("question").innerText;

  if(question.includes("Soru oluşturmak")){
    alert("Önce soru oluştur ❤️");
    return;
  }

  favorites.push(question);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  alert("Favorilere eklendi ⭐");
}

function showFavorites(){
  if(favorites.length === 0){
    alert("Henüz favori soru yok ❤️");
    return;
  }

  alert(favorites.slice(-10).join("\n\n"));
}

window.onload = generateQuestion;

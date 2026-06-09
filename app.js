const questionBank = {
  romantik: {
    emoji: "❤️",
    giris: ["Bana ilk mesajını attığında",
"Benimle ilgili bir anıyı hatırladığında",
"Birlikte gün batımını izlesek",
"Uzun süre görüşemesek",
"Ben sana sürpriz yapsam",
"Sabah uyandığında beni düşünsen",
"Benimle ilgili bir şarkı duysan",
"Bir fotoğrafımıza baktığında",
"Birlikte çıktığımız ilk yeri hatırladığında",
"Adımı duyduğunda",
"Benim için bir mektup yazsan",
"Birlikte taşınmayı düşünsen",
"Yıllar sonrasını hayal etsen",
"Mutlu olduğunda beni düşündüğünde",
"Canın sıkkınken bana sarılsan",
"Ben sana sevdiğimi söylesem",
"Birlikte yıldızları izlesek",
"Benimle uzun bir yolculuğa çıksan",
"Eski mesajlarımızı okusan",
"Birlikte kahve içsek",
"Yağmur altında yürürken beni düşünsen",
"Birlikte yeni bir şehir keşfetsek",
"En sevdiğin anımızı hatırlasan",
"Birlikte sessizce otursak",
"Ben sana teşekkür etsem",
"Birlikte ev kursak",
"Birlikte yaşlanmayı düşünsen",
"Ben seni özlediğimi söylesem",
"İlk kez el ele tuttuğumuz anı hatırlasan",
"Kalbin beni özlediğinde"
  
    ],
  devam: [
  "en çok ne hissediyorsun",
"beni neden seviyorsun",
"bana söylemek istediğin şey ne",
"beni farklı yapan şey ne",
"hangi anımız kalbinde özel bir yerde",
"birlikte gerçekleştirmek istediğin hayal ne",
"beni görünce ilk aklına ne geliyor",
"bizim hakkımızda en sevdiğin şey ne",
"beni üç kelimeyle nasıl anlatırsın",
"benim hangi davranışım seni gülümsetiyor",
"beni en çok ne zaman özlüyorsun",
"hangi anımızı sonsuza kadar saklamak isterdin",
"gelecekte bizim için en büyük dileğin ne",
"beni düşündüğünde yüzünde gülümseme oluşturan şey ne",
"hangi özelliğim seni etkiliyor",
"bana dair unutamadığın şey ne",
"benimle yapmak istediğin yeni şey ne",
"ilişkimizde seni en mutlu eden an hangisi",
"beni neden hayatında istiyorsun",
"kalbin bana ne söylemek isterdi"
    ]
  },
  eglenceli: {
  emoji: "😂",

  giris: [
    "Bir gün görünmez olsak",
    "Birlikte çocuk olsak",
    "Aynı evde mahsur kalsak",
    "Bir yarışmaya katılsak",
    "Telefonlarımız yer değiştirse"
  ],

  devam: [
    "ilk ne yapardık",
    "en komik olay ne olurdu",
    "bizi görenler ne derdi",
    "hangi konuda tatlı kavga ederdik",
    "hangimiz daha komik olurdu"
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

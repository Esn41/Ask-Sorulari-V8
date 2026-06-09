const data = {
  romantik: {
    emoji: "❤️",
    baslangic: [
      "İlk tanıştığımız güne dönsen",
      "Benimle geleceği düşündüğünde",
      "Birlikte yaşlanmayı hayal ettiğinde",
      "Beni özlediğinde",
      "Yanımda kendini mutlu hissettiğinde"
    ],
    konu: [
      "bana",
      "bizim ilişkimize",
      "aşkımıza",
      "geleceğimize",
      "en güzel anımıza"
    ],
    bitis: [
      "ne söylemek isterdin?",
      "hangi duyguyla bakarsın?",
      "en çok neyi seviyorsun?",
      "hangi hayali kurarsın?",
      "kalbinden geçen ilk şey ne olur?"
    ]
  },

  eglenceli: {
    emoji: "😂",
    baslangic: [
      "Beraber görünmez olsak",
      "Bir günlüğüne yer değiştirsek",
      "Bir filmde çift olsak",
      "Birlikte tatile çıksak",
      "Aynı evde mahsur kalsak"
    ],
    konu: [
      "ilk olarak",
      "en komik şekilde",
      "kimseye söylemeden",
      "çocuk gibi davranarak",
      "birlikte"
    ],
    bitis: [
      "ne yapardık?",
      "en çok neye gülerdik?",
      "hangimiz daha komik olurdu?",
      "hangi saçma kararı verirdik?",
      "bizi görenler ne derdi?"
    ]
  },

  derin: {
    emoji: "🌙",
    baslangic: [
      "İlişkimizi düşündüğünde",
      "Geleceğe baktığında",
      "Kalbinin sesini dinlediğinde",
      "Zor zamanları düşündüğünde",
      "Gerçek sevgiyi tarif etsen"
    ],
    konu: [
      "bizim için",
      "benimle ilgili",
      "ilişkimizde",
      "hayatında",
      "kalbinde"
    ],
    bitis: [
      "en önemli şey ne?",
      "neyi değiştirmek isterdin?",
      "sana ne öğretti?",
      "en çok neye güveniyorsun?",
      "hangi duyguyu hissediyorsun?"
    ]
  },

  cesur: {
    emoji: "🔥",
    baslangic: [
      "Bana ilk baktığında",
      "Beni düşündüğünde",
      "Yan yana olduğumuzda",
      "Bana söylemek isteyip çekindiğinde",
      "Aramızdaki çekimi düşündüğünde"
    ],
    konu: [
      "bende",
      "aramızda",
      "kalbinde",
      "hislerinde",
      "aklında"
    ],
    bitis: [
      "en çok ne dikkatini çekiyor?",
      "bana itiraf etmek istediğin şey ne?",
      "seni en çok ne etkiliyor?",
      "hangi anı unutamıyorsun?",
      "bana ne söylemek isterdin?"
    ]
  }
};

let questionCount = 0;
let lastQuestion = "";

function randomItem(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateQuestion(){
  const category = document.getElementById("category").value;
  const d = data[category];

  let question = "";

  do {
    question = `${d.emoji} ${randomItem(d.baslangic)}, ${randomItem(d.konu)} ${randomItem(d.bitis)}`;
  } while(question === lastQuestion);

  lastQuestion = question;

  document.getElementById("question").innerText = question;

  questionCount++;
  const count = document.getElementById("count");
  if(count) count.innerText = questionCount;
}

function addFavorite(){
  const question = document.getElementById("question").innerText;
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if(!favorites.includes(question)){
    favorites.push(question);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("⭐ Favorilere eklendi!");
  } else {
    alert("Bu soru zaten favorilerde ❤️");
  }
}

function showFavorites(){
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if(favorites.length === 0){
    alert("Henüz favori soru yok ❤️");
    return;
  }

  alert(favorites.join("\n\n"));
}

function copyQuestion(){
  const text = document.getElementById("question").innerText;
  navigator.clipboard.writeText(text);
  alert("📋 Soru kopyalandı!");
}

function shareWhatsApp(){
  const text = document.getElementById("question").innerText;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
}

function randomCategory(){
  const categories = ["romantik", "eglenceli", "derin", "cesur"];
  const random = randomItem(categories);

  document.getElementById("category").value = random;
  generateQuestion();
}

window.onload = generateQuestion;

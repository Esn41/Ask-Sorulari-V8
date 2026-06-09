const kaliteliSorular = {
  romantik: [
    "❤️ Beni ilk gördüğünde ne hissettin?",
    "❤️ Benimle ilgili en güzel anın ne?",
    "❤️ Beni neden seviyorsun?",
    "❤️ Benim hangi davranışım seni mutlu ediyor?",
    "❤️ Birlikte yaşamak istediğin en güzel hayal ne?"
  ],
  eglenceli: [
    "😂 Beraber görünmez olsak ilk ne yapardık?",
    "😂 Benim en komik huyum ne?",
    "😂 Beraber tatile çıksak en çok neye gülerdik?",
    "😂 Bir filmde çift olsak hangi film olurdu?",
    "😂 Hangimiz daha çok trip atar?"
  ],
  derin: [
    "🌙 İlişkimiz sana ne öğretti?",
    "🌙 Sence gerçek sevgi nedir?",
    "🌙 Bana en çok hangi konuda güveniyorsun?",
    "🌙 Benden en çok ne bekliyorsun?",
    "🌙 Gelecekte bizim için en büyük hayalin ne?"
  ],
  cesur: [
    "🔥 Bende seni en çok etkileyen şey ne?",
    "🔥 Bana ilk ne zaman farklı hissettin?",
    "🔥 Aramızdaki en özel çekim ne?",
    "🔥 Bana itiraf etmek istediğin tatlı bir şey var mı?",
    "🔥 Bende en çekici bulduğun özellik ne?"
  ]
};

let questionCount = 0;

function randomItem(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateQuestion(){
  const category = document.getElementById("category").value;
  const list = kaliteliSorular[category];
  const question = randomItem(list);

  document.getElementById("question").innerText = question;

  questionCount++;
  document.getElementById("count").innerText = questionCount;
}

function addFavorite(){
  const question = document.getElementById("question").innerText;
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.push(question);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  alert("⭐ Favorilere eklendi!");
}

function showFavorites(){
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if(favorites.length === 0){
    alert("Henüz favori soru yok ❤️");
    return;
  }

  alert(favorites.join("\n\n"));
}

function shareWhatsApp(){
  const text = document.getElementById("question").innerText;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
}

function copyQuestion(){
  const text = document.getElementById("question").innerText;
  navigator.clipboard.writeText(text);
  alert("📋 Soru kopyalandı!");
}

function randomCategory(){
  const categories = ["romantik", "eglenceli", "derin", "cesur"];
  const random = randomItem(categories);

  document.getElementById("category").value = random;
  generateQuestion();
}

window.onload = generateQuestion;

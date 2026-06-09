const questions = {
  romantik: [
    "❤️ Beni ilk gördüğünde ne hissettin?",
    "❤️ Benimle ilgili en güzel anın hangisi?",
    "❤️ Beni neden seviyorsun?",
    "❤️ Birlikte yaşlanmak hakkında ne düşünüyorsun?",
    "❤️ Bizim hikayemizi tek kelimeyle anlatır mısın?"
  ],

  eglenceli: [
    "😂 Hangimiz daha komik?",
    "😂 Bir günlüğüne yer değiştirseydik ne yapardın?",
    "😂 Beraber görünmez olsak ilk ne yapardık?",
    "😂 Benim en komik huyum ne?",
    "😂 Bir film karakteri olsam kim olurdum?"
  ],

  derin: [
    "🌙 Hayatındaki en önemli ders neydi?",
    "🌙 Sence gerçek mutluluk nedir?",
    "🌙 Kendinde değiştirmek istediğin bir şey var mı?",
    "🌙 Gelecekteki kendine ne söylemek isterdin?",
    "🌙 Hayatının amacı ne olabilir?"
  ],

  cesur: [
    "🔥 Bana söylemek isteyip söyleyemediğin bir şey var mı?",
    "🔥 Bende en çekici bulduğun özellik ne?",
    "🔥 İlk görüşte hakkımda ne düşündün?",
    "🔥 Sana göre en cesur kararın neydi?",
    "🔥 Aramızdaki en özel şey ne?"
  ]
};

let questionCount = 0;

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateQuestion() {
  const category = document.getElementById("category").value;
  const question = randomItem(questions[category]);

  document.getElementById("question").innerText = question;

  questionCount++;
  const counter = document.getElementById("count");
  if (counter) {
    counter.innerText = questionCount;
  }
}

function addFavorite() {
  const question = document.getElementById("question").innerText;

  let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.push(question);

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

  alert("⭐ Favorilere eklendi!");
}

function showFavorites() {
  let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.length === 0) {
    alert("Henüz favori soru yok ❤️");
    return;
  }

  alert(favorites.join("\n\n"));
}

function copyQuestion() {
  const text =
    document.getElementById("question").innerText;

  navigator.clipboard.writeText(text);

  alert("📋 Kopyalandı!");
}

function randomCategory() {
  const categories = [
    "romantik",
    "eglenceli",
    "derin",
    "cesur"
  ];

  const random =
    categories[Math.floor(Math.random() * categories.length)];

  document.getElementById("category").value = random;

  generateQuestion();
}

function shareWhatsApp() {
  const text =
    document.getElementById("question").innerText;

  window.open(
    `https://wa.me/?text=${encodeURIComponent(text)}`,
    "_blank"
  );
}

window.onload = function () {
  generateQuestion();
};

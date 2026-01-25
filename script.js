// ===== TARİH =====
const dateEl = document.getElementById("date");
const today = new Date();
dateEl.innerText = today.toLocaleDateString("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long"
});

// ===== MOTİVASYON CÜMLELERİ =====
const motivasyonlar = [
  "Bugün zorlanıyorsan, yarın anlatacak bir hikâyen olacak.",
  "Kimsenin görmediği anlarda çalışırsan, herkesin konuştuğu biri olursun.",
  "Başarı sabah erken kalkmayı sever.",
  "Bahaneler rahatlatır, emek kazandırır.",
  "Yorulmak bırakmak için değil, güçlendiğini anlamak içindir.",
  "Herkes ister ama az kişi bedel öder.",
  "Bugün verdiğin mücadele, yarınki özgürlüğündür.",
  "Sessiz ilerleyenler en gürültülü sonuçları alır.",
  "Kolay olsaydı herkes yapardı.",
  "Disiplin, motivasyon yokken bile seni taşır.",
  "Vazgeçmediğin her gün seni büyütür.",
  "Başarı bir anda gelmez, her gün inşa edilir.",
  "Şu an zor geliyorsa doğru yoldasın.",
  "Kimse inanmazken kendine sadık kal.",
  "Bugün sabret, yarın seçen ol.",
  "Çalışmak sıkıcı olabilir ama pişmanlık daha beterdir.",
  "Hedefin büyükse fedakârlık da büyük olur.",
  "Yoruldun diye durma, durursan unutulursun.",
  "Kendinle yarıştığında hep kazanırsın.",
  "Başarı cesareti sever ama disiplini ödüllendirir."
];

// Random motivasyon göster
document.getElementById("motivationText").innerText =
  motivasyonlar[Math.floor(Math.random() * motivasyonlar.length)];

// ===== YAPILACAKLAR =====
function addTask() {
  const input = document.getElementById("taskInput");
  if (!input.value) return;

  const li = document.createElement("li");
  li.innerText = input.value;

  // Tamamlananlar için tıklama
  li.onclick = () => {
    document.getElementById("doneList").appendChild(li);
  };

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// ===== KRONOMETRE =====
let seconds = 0;
let timer;

function startTimer() {
  if (timer) return;
  timer = setInterval(() => {
    seconds++;
    updateTimer();
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  updateTimer();
}

function updateTimer() {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  document.getElementById("timer").innerText = `${h}:${m}:${s}`;
}

// ===== MOOD / GÜNÜN NASILDI =====
function setMood(text) {
  document.getElementById("moodResult").innerText = text;
}

// ===== HAFTALIK ÇİZELGE =====
// Basit örnek, her görevi ekleyince hafta gününe ekleme yapabilirsiniz
const weekList = document.getElementById("weekList");
const weekdays = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
weekdays.forEach(day => {
  const li = document.createElement("li");
  li.innerText = `${day}: 0 dk`;
  weekList.appendChild(li);
});

// Günlük çalışma süresi ekleme (kronometre bitince)
function addToWeek(dayIndex, minutes) {
  const li = weekList.children[dayIndex];
  const current = parseInt(li.innerText.split(": ")[1]);
  li.innerText = `${weekdays[dayIndex]}: ${current + minutes} dk`;
}

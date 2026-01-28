/* SEKME GEÇİŞİ */
document.querySelectorAll(".tab-button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

/* TARİH */
const today = new Date();
document.getElementById("today-date").innerText =
  today.toLocaleDateString("tr-TR", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

/* MOTİVASYON */
const quotes = [
  "Bugün zorlanıyorsan, yarın anlatacak bir hikâyen olacak.",
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
  "Çalışmak sıkıcı olabilir ama pişmanlık daha beterdir.",
  "Hedefin büyükse fedakârlık da büyük olur.",
  "Yoruldun diye durma, durursan unutulursun.",
  "Kendinle yarıştığında hep kazanırsın.",
  "WorkUp zamanı."
];
document.getElementById("motivation").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];

/* HAFTALIK PLAN */
const tableBody = document.querySelector("#weeklyTable tbody");
document.getElementById("addRowBtn").onclick = () => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td contenteditable>Ders</td>
    <td contenteditable></td>
    <td contenteditable></td>
    <td contenteditable></td>
    <td contenteditable></td>
    <td contenteditable></td>
    <td contenteditable></td>
    <td contenteditable></td>
    <td class="delete">❌</td>
  `;
  row.querySelector(".delete").onclick = () => row.remove();
  tableBody.appendChild(row);
};

/* KRONOMETRE */
let time = 0, timer;
function startTimer() {
  if (timer) return;
  timer = setInterval(() => {
    time++;
    document.getElementById("timer-display").innerText =
      String(Math.floor(time / 60)).padStart(2, "0") + ":" + String(time % 60).padStart(2, "0");
  }, 1000);
}
function stopTimer() {
  clearInterval(timer);
  timer = null;
}
function resetTimer() {
  stopTimer();
  time = 0;
  document.getElementById("timer-display").innerText = "00:00";
}

/* NET */
function calcNet(type) {
  const correct = document.getElementById(`${type}-correct`).value;
  const wrong = document.getElementById(`${type}-wrong`).value;
  const net = correct - wrong / 4;
  document.getElementById(`${type}-result`).textContent =
    "Net: " + net.toFixed(2);
}

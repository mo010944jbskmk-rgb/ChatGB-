const screens = document.querySelectorAll(".screen");
const music = document.getElementById("music");
const click = document.getElementById("click");
const startBtn = document.getElementById("startBtn");

let score = 0;

// كتابة المقدمة
const introMsg = "في قصص حب بتبدأ بضحكة 😂❤️";
let i = 0;

function typeIntro(){
  if(i < introMsg.length){
    document.getElementById("introText").innerHTML += introMsg[i];
    i++;
    setTimeout(typeIntro, 70);
  }
}
typeIntro();

// تغيير الشاشة
function show(id){
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// صوت
function playSound(){
  if(click){
    click.currentTime = 0;
    click.play();
  }
}

// زر البداية (الحل للمشكلة)
startBtn.addEventListener("click", () => {
  playSound();
  if(music){
    music.play().catch(()=>{});
  }
  show("q1");
});

function answer(val){
  playSound();
  score += val;
  show("memory");
}

function toConfession(){
  playSound();
  show("confession");
  typeConfession();
}

const confession = "بحبك عشان بتضحكيني قبل أي حاجة 😂❤️";
let c = 0;

function typeConfession(){
  if(c < confession.length){
    document.getElementById("confessText").innerHTML += confession[c];
    c++;
    setTimeout(typeConfession, 60);
  }
}

function toFinal(){
  playSound();
  show("final");
}

function endYes(){
  playSound();
  alert("مبروك 😂❤️ قصة حب رسمية");
}

function endNo(){
  playSound();
  alert("ماشي… بس الضحك لسه مخلصش 😅");
}

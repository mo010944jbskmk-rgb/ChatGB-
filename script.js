const screens = document.querySelectorAll(".screen");
const music = document.getElementById("music");
const click = document.getElementById("click");

let score = 0;

// intro typing
const introMsg = "في قصص حب بتبدأ صدفة… وفي قصص بتبدأ بضحكة 😂❤️";
let i = 0;
function typeIntro(){
  if(i < introMsg.length){
    document.getElementById("introText").innerHTML += introMsg[i];
    i++;
    setTimeout(typeIntro,70);
  }
}
typeIntro();

function show(id){
  screens.forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function sound(){
  click.currentTime = 0;
  click.play();
}

function start(){
  sound();
  music.play();
  show("q1");
}

function answer(val){
  sound();
  score += val;

  if(score >= 15){
    show("q2");
  }else{
    show("memory");
  }
}

function toConfession(){
  sound();
  show("confession");
  typeConfession();
}

const confession = "يمكن بحبك عشان ضحكتك قبل جمالك… ويمكن عشان الاتنين مع بعض 😂❤️";
let c = 0;
function typeConfession(){
  if(c < confession.length){
    document.getElementById("confessText").innerHTML += confession[c];
    c++;
    setTimeout(typeConfession,60);
  }
}

function toFinal(){
  sound();
  show("final");
}

function endYes(){
  sound();
  if(score >= 20){
    alert("ده مش حب… ده مشروع جواز رسمي 😂❤️🔥");
  }else{
    alert("حب لطيف وضحك حلو… والباقي ييجي لوحده 😌");
  }
}

function endNo(){
  sound();
  alert("ماشي… بس خلي بالك ممكن أرجع أضحكك تاني 😂🖤");
}
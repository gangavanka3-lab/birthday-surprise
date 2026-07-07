// Loading screen

setTimeout(function(){

document.getElementById("loader").style.display="none";

document.getElementById("mainPage").style.display="flex";

startIntro();

},5000);


// Movie introduction

function startIntro(){

const lines=document.querySelectorAll(".intro-line");

let delay=0;

lines.forEach((line)=>{

setTimeout(()=>{

line.classList.add("show");

},delay);

delay+=2000;

});

setTimeout(()=>{

document.getElementById("startBtn").style.display="inline-block";

},delay+500);

}


// Button



document.addEventListener("click",function(e){

if(e.target.id==="startBtn"){

document.getElementById("mainPage").style.display="none";

document.getElementById("giftPage").style.display="flex";

}

});

document.addEventListener("click", function (e) {

    // Open Gift Page
    if (e.target.id === "startBtn") {

        document.getElementById("mainPage").style.display = "none";
        document.getElementById("giftPage").style.display = "flex";

        return;
    }

    // Click on Gift Box or any of its parts
    if (e.target.closest(".gift-box")) {

        const gift = document.querySelector(".gift-box");
        const lid = document.querySelector(".lid");
        const music = document.getElementById("music");

        gift.classList.add("shake");

        setTimeout(() => {

    gift.classList.remove("shake");

    lid.classList.add("open");

    createConfetti();

setTimeout(() => {

    console.log("Birthday page is now visible");

    document.getElementById("giftPage").style.display = "none";

    document.getElementById("birthdayPage").style.display = "flex";

    //createBalloons();

    createHearts();
    startGallery();
    

}, 2000);

    console.log("Trying to play music...");

    music.currentTime = 0;

    music.play()
        .then(() => {
            console.log("✅ Music started");
        })
        .catch((err) => {
            console.error("❌ Music Error:", err);
        });

}, 1500);

    }

});
function createConfetti() {

    const container = document.getElementById("confetti");
    container.innerHTML = "";
    const colors = [
        "#ff4081",
        "#00e5ff",
        "#ffd600",
        "#76ff03",
        "#ff1744",
        "#7c4dff",
        "#ffffff"
    ];

    for (let i = 0; i < 150; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * window.innerWidth + "px";

        piece.style.top = "-20px";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        piece.style.animationDelay =
            (Math.random() * 2) + "s";

        piece.style.animation =
    "fall " + (Math.random() * 3 + 2) + "s linear forwards";

        container.appendChild(piece);

    }

}
//createBalloons();

function createBalloons(){
    console.log("🎈 Balloons Created");
    const container = document.getElementById("balloons");
    container.innerHTML = "";
    for(let i=0;i<20;i++){
        const balloon = document.createElement("div");
        balloon.className = "balloon";
       balloon.innerHTML = "🎈";

balloon.style.color = "red";
balloon.style.fontSize = "40px";

        balloon.style.left = Math.random()*100 + "%";

        balloon.style.animationDuration = (6 + Math.random()*4) + "s";

        balloon.style.animationDelay = (Math.random()*3) + "s";

        container.appendChild(balloon);

    }

}
//createHearts();
function createHearts(){
  console.log("❤️ Hearts Created");
const container=document.getElementById("hearts");

for(let i=0;i<30;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heart.style.animationDelay=Math.random()*3+"s";

container.appendChild(heart);

}

}
const photos=[

"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg",
"images/photo5.jpg",
"images/photo6.jpg",
"images/photo7.jpg",
"images/photo8.jpg",
"images/photo9.jpg",
"images/photo10.jpg",
"images/photo11.jpg",
"images/photo12.jpg",
"images/photo13.jpg",
"images/photo14.jpg",
"images/photo15.jpg",
"images/photo16.jpg",
"images/photo17.jpg",
"images/photo18.jpg",
"images/photo19.jpg",
"images/photo20.jpg"

];

let currentPhoto=0;

function startGallery(){

const image=document.getElementById("galleryImage");

setInterval(()=>{

currentPhoto++;

if(currentPhoto>=photos.length){

currentPhoto=0;

}

image.style.opacity=0;

setTimeout(()=>{

image.src=photos[currentPhoto];

image.style.opacity=1;

},500);

},3000);

}
/* ========================= */
/* Birthday Letter */
/* ========================= */

const birthdayLetter = `

Dear Sucharitha,

Happy Birthday! 🎂❤️

On this special day, I wish you endless happiness, good health, success, and beautiful memories.

May every dream you have come true, and may every new day bring you more reasons to smile.

Keep shining, keep believing in yourself, and never stop being the wonderful person you are.

I hope this little surprise brings a smile to your face.

Once again,

Happy Birthday!


`;

document.getElementById("letterBtn").onclick = function(){

document.getElementById("birthdayPage").style.display="none";

document.getElementById("letterPage").style.display="flex";

typeLetter();

};

document.getElementById("continueCake").onclick = function () {

document.getElementById("letterPage").style.display = "none";

    document.getElementById("cakePage").style.display = "flex";

};

function typeLetter(){

const element=document.getElementById("letterText");

element.innerHTML="";

let i=0;

const typing=setInterval(()=>{

element.innerHTML+=birthdayLetter.charAt(i);

i++;

if(i>=birthdayLetter.length){

clearInterval(typing);

}

},35);

}
/* ========================= */
/* Cake */
/* ========================= */

document.getElementById("continueCake").onclick=function(){

document.getElementById("letterPage").style.display="none";

document.getElementById("cakePage").style.display="flex";

};
document.getElementById("blowBtn").onclick = function () {

    document.getElementById("flame").style.display = "none";

    const candle = document.querySelector(".candle");

    // Smoke
    for (let i = 0; i < 8; i++) {

        const smoke = document.createElement("div");

        smoke.className = "smoke";

        smoke.style.left = (50 + (Math.random() * 20 - 10)) + "%";

        smoke.style.animationDelay = (i * 0.12) + "s";

        candle.appendChild(smoke);

        setTimeout(() => {
            smoke.remove();
        }, 3500);

    }

    // Fireworks after smoke
    setTimeout(() => {

        createFireworks();
        console.log("Fireworks function running");

        document.getElementById("wishMessage").style.display = "block";

    }, 2000);

    setTimeout(() => {

    document.getElementById("wishMessage").style.display = "none";

    }, 6000);

    setTimeout(()=>{

document.getElementById("cakePage").style.display="none";

document.getElementById("finalPage").style.display="flex";

},8000);

}
function createFireworks(){

    const container = document.getElementById("fireworks");

    const colors = [
        "#ff1744",
        "#ffd600",
        "#00e5ff",
        "#76ff03",
        "#ff69b4",
        "#ff9100",
        "#ffffff"
    ];

    for(let i=0;i<8;i++){

        const x = Math.random()*window.innerWidth;
        const y = Math.random()*window.innerHeight*0.6;

        setTimeout(()=>{

            for(let j=0;j<40;j++){

                const particle=document.createElement("div");

                particle.className="particle";

                particle.style.left=x+"px";
                particle.style.top=y+"px";

                particle.style.background=
                colors[Math.floor(Math.random()*colors.length)];

                const angle=Math.random()*360;
                const distance=80+Math.random()*120;

                particle.style.setProperty("--x",
                Math.cos(angle*Math.PI/180)*distance+"px");

                particle.style.setProperty("--y",
                Math.sin(angle*Math.PI/180)*distance+"px");

                console.log(
                particle.style.getPropertyValue("--x"),
                particle.style.getPropertyValue("--y")
                );

                container.appendChild(particle);

                console.log("Particle created");

                setTimeout(()=>{
                    particle.remove();
                },1800);

            }

        },i*500);

    }

}
document.getElementById("replayBtn").onclick=function(){

location.reload();

}
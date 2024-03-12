const hourVar = document.getElementById('hour');
const minutesVar = document.getElementById('minute');
const secondsVar = document.getElementById('seconds');
const amOrpm = document.getElementById('ampm');
const btnBackground = document.getElementById('changeBackground');



// Background-URL-Objekt mit Links

// quelle der bilder: https://unsplash.com/de/s/fotos/open-source

const backgroundList = [
    "url('img/open.jpg')",
    "url('img/ocean.jpg')",
    "url('img/kaffee.jpg')",
    "url('img/mountains.jpg')"
]

let imageIndex = Math.floor(Math.random()*backgroundList.length);

function loadBackgroundImage() {
    document.body.style.backgroundImage = backgroundList[imageIndex]; 
}

loadBackgroundImage();


function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h>12) {
        h=h-12;
        ampm = "PM";
    }

    // Formatierung damit immer zweistellig HH:MM:SS

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourVar.innerText = h;
    minutesVar.innerText = m;
    secondsVar.innerText = s;
    amOrpm.innerText = ampm;
    setTimeout(()=>{
        updateClock();
    }, 1000)
}

function changeBackground(){
    if(imageIndex === 0) {
        imageIndex=backgroundList.length-1;
        loadBackgroundImage();   
    } else {
        imageIndex-=1;
        loadBackgroundImage();
    }
}

function loadBackgroundImage() {
    document.body.style.backgroundImage = backgroundList[imageIndex]; 
}


updateClock();



btnBackground.addEventListener('click', () => {
    changeBackground();
})



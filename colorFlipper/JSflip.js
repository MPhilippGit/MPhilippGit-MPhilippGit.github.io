const colors = ["red", "blue", "rgba(133,122,200)","#f15025"];
const btn = document.getElementById('btnsimple');
const color = document.getElementById('color');

btn.addEventListener('click', function(){
    // get random number 0-3

    
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    const randomPar = Math.random();
    return parseInt(randomPar*colors.length);
}


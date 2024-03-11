const number = document.querySelector("h1");
const rstbtn = document.getElementById('btnres');
const incbtn = document.getElementById('btninc');
const decbtn = document.getElementById('btndec');
const heading = document.getElementById('heading');
let countNumber = 0;


//reset
rstbtn.addEventListener('click', function(){
    countNumber = 0;
    number.innerHTML = countNumber;
    console.log(document.querySelector("h1").innerHTML);
    checkValue();
});


//decrese
decbtn.addEventListener('click', function(){
    countNumber -= 1;
    number.innerHTML = countNumber;
    console.log(heading.textContent);
    checkValue();
});

//increase
incbtn.addEventListener('click', function(){
    countNumber += 1;
    number.innerHTML = countNumber;
    console.log(document.querySelector("h1").innerHTML);
    checkValue();
});

function checkValue() {
    if (countNumber === 69) {
        heading.textContent = "Counter(nice)";
    } else {
        heading.textContent = "Counter";
    }
}




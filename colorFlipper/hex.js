const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let hexNumber = "";
const btn = document.getElementById('btnsimple');
const color = document.getElementById('color');

btn.addEventListener('click', function(){
    //random hex nummer
    getRandomColor();
    document.body.style.backgroundColor = "#" + hexNumber;
    color.textContent = "#" + hexNumber;
    hexNumber = "";
});

function getRandomColor(){
        for (let i = 0; i < 6; i++) {
            x= parseInt(100*Math.random());
            while (x > 15) {
                x= parseInt(100*Math.random());
            }
            hexNumber = hexNumber.concat(hex[x]);
        }
        console.log(hexNumber);
        return hexNumber;      
    }
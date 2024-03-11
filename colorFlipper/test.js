const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let hexNumber = "";

for (let i = 0; i < 6; i++) {
    x= parseInt(100*Math.random());
    while (x > 15) {
        x= parseInt(100*Math.random());
    }
    hexNumber = hexNumber.concat(hex[x]);
}
console.log(hexNumber);
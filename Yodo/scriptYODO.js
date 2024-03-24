const toggleBtn = document.querySelectorAll('.bossCheck');
const toggleMiniBtn = document.querySelectorAll('.minibossCheck');
const punktestand = document.getElementById('points');
const npcPlus = document.getElementById('npcPlus');
const npcMinus = document.getElementById('npcMinus');
const npcPoints = document.getElementById('npcPoints');
let points = 0;
let npcCounter = 0;

toggleBtn.forEach(button => {
    button.addEventListener('click', function() {
      // Toggle the 'active' class on all buttons
        console.log(this.classList.contains('active'))
        if(!this.classList.contains('active')) {
            this.classList.toggle('active');
            points += 5;
            this.innerText = '✔';
        } else {
            this.classList.toggle('active');
            points -= 5;
            this.innerText = '➖';
        }
        updatePoints();
      });
    });

function updatePoints() {
    punktestand.innerText = points;
    npcPoints.innerText = npcCounter;
}

toggleMiniBtn.forEach(button => {
    button.addEventListener('click', function() {
        // Toggle the 'active' class on all buttons
        console.log(this.classList.contains('active'))
        if(!this.classList.contains('active')) {
            this.classList.toggle('active');
            points += 3;
            this.innerText = '✔';
        } else {
            this.classList.toggle('active');
            points -= 3;
            this.innerText = '➖';
            
        }
        updatePoints();
        });
    });

npcPlus.addEventListener('click', function(){
    if (npcCounter >= 7) { return }
    points += 1;
    updatePoints();
    npcCounter += 1;
    npcPoints.innerText = npcCounter;
});

npcMinus.addEventListener('click', function(){
    if (npcCounter === 0) { return}
    points -= 1;
    npcCounter -= 1;
    updatePoints();
});
const contactBtn = document.getElementById('contactBtn');
const contactInformation = document.querySelector('.contactInformation');

contactBtn.addEventListener('click', () => {
    showContact();
    console.log('check12');
})

function showContact() {
    contactInformation.style.opacity = 1;
}
const contactBtn = document.getElementById('contactBtn');
const closeBtn = document.getElementById('closeContact');
const contactInformation = document.querySelector('.contactInformation');

let contactOp = 'none';

contactBtn.addEventListener('click', () => {
    showContact();
})

closeBtn.addEventListener('click', () => {
    closeContact();
})

function showContact() {
    contactOp = contactOp === 'none' ? 'block' : 'none';
    contactInformation.style.display = contactOp;
}
function closeContact() {
    contactInformation.style.display = 'none';
}
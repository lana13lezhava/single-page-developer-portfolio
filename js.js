const form = document.getElementById('contactForm');
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const messageEl = document.getElementById('message');
const nameEror = document.getElementById('nameEror');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

form.addEventListener('submit', (e) => {
    let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    let isValid = true;
    if (nameEl.value.trim() === "") {
        e.preventDefault();
        nameEror.innerHTML = 'Name is required';
        nameEl.style.borderBottom = '2px solid red';
        isValid = false;
    } else if (nameEl.value.length < 3) {
        e.preventDefault(); // Prevent submission if the name is too short
        nameEror.innerHTML = 'Name must be at least 3 characters.';
        nameEl.style.borderBottom = '2px solid red';
    } else {
        nameEror.innerHTML = '';
        nameEl.style.borderBottom = '2px solid green';
    }
    if (!emailEl.value.match(emailPattern)) {
        e.preventDefault();
        emailError.innerHTML = 'Valid Email is required';
        emailEl.style.borderBottom = '2px solid red';
    } else {
        emailError.innerHTML = '';
        emailEl.style.borderBottom = '2px solid green';
    }
    if (messageEl.value.trim() === "") {
        e.preventDefault();
        messageError.innerHTML = 'Message is required';
        messageEl.style.borderBottom = '2px solid red';
    } else if (messageEl.value.length < 8) {
        e.preventDefault(); // Prevent submission if message is too short
        messageError.innerHTML = 'Message must be at least 8 characters.';
        messageEl.style.borderBottom = '2px solid red';
    } else {
        messageError.innerHTML = '';
        messageEl.style.borderBottom = '2px solid green';
    }
});
// navBar
const toggle = document.querySelector('.toggle')
const navLinks = document.querySelector('nav ul')
toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

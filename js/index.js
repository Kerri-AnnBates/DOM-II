// Your code goes here

const header = document.querySelector('header');
let scrollPosition = 0;

document.addEventListener('scroll', (e) => {
    scrollPosition = window.scrollY;

    if(scrollPosition != 0) {
        header.style.backgroundColor = 'slategrey';
    } else {
        header.style.backgroundColor = 'white';
    }
});

const mainNav = document.querySelector('nav');
const mainLogo = document.querySelector('.logo-heading');

window.addEventListener('load', (e) => {
    mainNav.classList.add('slide-from-right');
});

window.addEventListener('load', (e) => {
    mainLogo.classList.add('slide-from-left');
});
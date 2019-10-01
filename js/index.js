// Your code goes here

// scroll event.
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

// Load event.
const mainNav = document.querySelector('nav');
const mainLogo = document.querySelector('.logo-heading');

window.addEventListener('load', (e) => {
    mainNav.classList.add('slide-from-right');
});

window.addEventListener('load', (e) => {
    mainLogo.classList.add('slide-from-left');
});

// Mouseover and mouseleave event.
const mainImage = document.querySelector('.intro img');

mainImage.addEventListener('mouseover', (e) => {
    e.target.style.transform = 'scale(1.4)';
    e.target.style.transition = 'all 1s';
});
mainImage.addEventListener('mouseleave', (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.transition = 'all 1s';
});

// wheel event.
const firstContentImage = document.querySelectorAll('.img-content img')[0];
let rotatedeg = 0;

firstContentImage.addEventListener('wheel', (e) => {
    e.preventDefault();
    let scrollDirection = e.deltaY;
    if(scrollDirection > 0) {
        e.target.style.transform = `rotate(${rotatedeg += 1}deg)`;
    } else {
        e.target.style.transform = `rotate(${rotatedeg -= 1}deg)`;
    }
    
    console.log('wheel fired');
});

// double click.
const firstDestination = document.querySelectorAll('.content-pick .destination')[0]
const doubleClickBtn = firstDestination.children[2];
console.log(doubleClickBtn)

doubleClickBtn.addEventListener('dblclick', (e) => {
    e.target.classList.add('watch-me-bounce');
});
doubleClickBtn.addEventListener('animationend', (e) => {
    console.log('Transition ended');
    e.target.classList.remove('watch-me-bounce');
});
// Your code goes here

// 1. scroll event.
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

// 2. Load event.
const mainNav = document.querySelector('nav');
const mainLogo = document.querySelector('.logo-heading');

window.addEventListener('load', (e) => {
    mainNav.classList.add('slide-from-right');
    mainLogo.classList.add('slide-from-left');
});

// 3. & 4. Mouseover and mouseleave event.
const mainImage = document.querySelector('.intro img');

mainImage.addEventListener('mouseover', (e) => {
    e.target.style.transform = 'scale(1.4)';
    e.target.style.transition = 'all 1s';
});
mainImage.addEventListener('mouseleave', (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.transition = 'all 1s';
});

// 5. wheel event.
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

// 6. & 7. double click & animationend event.
const firstDestination = document.querySelectorAll('.content-pick .destination')[0]
const doubleClickBtn = firstDestination.children[2];
const allDestinations = document.querySelectorAll('.content-pick .destination');
const alldestbtn = document.querySelectorAll('.content-pick .destination .btn');

doubleClickBtn.addEventListener('dblclick', (e) => {
    e.target.classList.add('watch-me-bounce');
});
doubleClickBtn.addEventListener('animationend', (e) => {
    console.log('Transition ended');
    e.target.classList.remove('watch-me-bounce');
});

// Example of stopping propagation.
allDestinations.forEach(section => {
    section.addEventListener('click', (e) => {
        e.stopPropagation();
        e.target.style.backgroundColor = 'blue';
    });
});

alldestbtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.target.style.color = 'blue';
    });
});

// 8. resize event.
const heading = document.querySelectorAll('h2');
window.addEventListener('resize', (e) => {
    
    heading.forEach(header => {
        header.style.color = 'blue';
    });
});

// 9.kydown event.
const modal = document.querySelector('.modal');
document.addEventListener('keydown', (e) => {
    if(e.key === 'g') {
        console.log(e)
        modal.classList.toggle('show-modal');
    }
});

// 10. click event.
mainLogo.addEventListener('click', (e) => {
    e.target.style.color = '#fdbd52';
});

// stop defautlt
const links = document.querySelectorAll('nav a');
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});
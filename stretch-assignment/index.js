const blockRed = document.querySelector('.block--red');
const blockBlue = document.querySelector('.block--blue');
const blockGreen = document.querySelector('.block--green');
const blockPink = document.querySelector('.block--pink');
const blockGray = document.querySelector('.block--gray');
const allBlocks = document.querySelectorAll('.blocks');

allBlocks.forEach((block) => {
    block.addEventListener('click', (e) => {    let parentContainer = e.target.parentNode;
        parentContainer.removeChild(e.target);
        parentContainer.prepend(e.target);
    });
    
    // block.addEventListener('mousedown', (e) => {
    //     console.log(e.clientX);
        
    //     let keepMoving = setInterval(() => {
    //         console.log(e.target);
    //     }, 100);
    // })
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};

const sr = ScrollReveal ( {
    distance: '40px',
    duration: 2500,
    reset: true 
});

sr.reveal('.container h6' , {delay:150, origin: 'left'});
sr.reveal('.container h3' , {delay:250, origin: 'right'});
sr.reveal('.container h1' , {delay:350, origin: 'top'});
sr.reveal('.container p' , {delay:450, origin: 'left'});
sr.reveal('.main-btnn' , {delay:600, origin: 'bottom'});
sr.reveal('.social' , {delay:750, origin: 'right'});
const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');


//
navButton.addEventListener('click', () => {
    navBar.classList.toggle('open');
    navButton.classList.toggle('open');
});

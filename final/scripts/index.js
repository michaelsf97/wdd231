const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');


//
navButton.addEventListener('click', () => {
    console.log('Clicked');
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

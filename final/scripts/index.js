const navButton = document.getElementById('#ham-btn');
const navBar = document.getElementById('#nav-bar');


//
navButton.addEventListener('click', () => {
    console.log('Clicked');
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

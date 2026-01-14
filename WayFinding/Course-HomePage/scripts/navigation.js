document.getElementById('lastModified').textContent = 'lastModified: ' + document.lastModified;

const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

// Toggle the show class off and on

navButton.addEventListener('click', () => {
    console.log('Clicked');
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});






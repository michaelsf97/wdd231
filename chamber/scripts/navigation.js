fetch('members.json')
.then(response => response.json())
.then(data => {
    console.log(data);
});

/* HAMBURGER BUTTON */
const navButton = document.querySelector('#hamb-btn');
const navBar = document.querySelector('#nav-bar');

// Toggle the show class

navButton.addEventListener('click', () => {
    console.log('Clicked');
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});


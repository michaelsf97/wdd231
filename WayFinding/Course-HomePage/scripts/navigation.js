document.getElementById('lastModified').textContent = 'lastModified: ' + document.lastModified;

const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

// Toggle the show class off and on

navButton.addEventListener('click', () => {
    console.log('Clicked');
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});


const year = document.querySelector('#currentyear');
const month = document.querySelector('#currentmonth');
const day = document.querySelector('#day');
const dayofweek = document.querySelector('#dayofweek');

const today = new Date();

year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;
month.innerHTML = `getMonth(): <span class="highlight">${today.getMonth()}</span>`;
day.innerHTML = `getDate(): <span class="highlight">${today.getDate()}</span>`;
dayofweek.innerHTML = `getDay(): <span class="highlight">${today.getDay()}</span>`;



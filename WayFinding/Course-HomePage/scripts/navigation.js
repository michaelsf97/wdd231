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

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const today = new Date();
const currentMonth = monthNames[today.getMonth()]; // "January"
const date = today.getDate(); // 13
const day = dayNames[today.getDay()]; // "Tuesday"

year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;
month.innerHTML = `getMonth(): <span class="highlight">${currentMonth}</span>`;
day.innerHTML = `getDate(): <span class="highlight">${date}</span>`;
dayofweek.innerHTML = `getDay(): <span class="highlight">${day}</span>`;




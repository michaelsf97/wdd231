const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');


//

let currentSlide = 0;
const slides = document.getElementsByClassName('slide');

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[index].style.display = 'block';
}

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;
  showSlide(currentSlide);
}
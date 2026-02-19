const hamButton = document.getElementById('ham-btn');
const navBar = document.getElementById('nav-bar');

if (hamButton && navBar) {
  hamButton.addEventListener('click', () => {
    console.log('Clicked');
    hamButton.classList.toggle('show');
    navBar.classList.toggle('show');
  });
} else {
  console.error('Missing #ham-btn or #nav-bar in HTML.');
}

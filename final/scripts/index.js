const hamButton = document.getElementById('#ham-btn');
const navBar = document.getElementById('#nav-bar');

if (hamButton && navBar) {
  hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navBar.classList.toggle('open');
  });
} else {
  console.error('Missing #ham-btn or #nav-bar in HTML.');
}

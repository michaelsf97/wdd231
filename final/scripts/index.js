const hambBtn = document.getElementById('hamb-btn');
const navBar = document.getElementById('nav-bar');

if (hambBtn && navBar) {
  hambBtn.addEventListener('click', () => {
    navBar.classList.toggle('open');
    hambBtn.classList.toggle('open');
    hambBtn.setAttribute('aria-expanded', String(navBar.classList.contains('open')));
  });
}

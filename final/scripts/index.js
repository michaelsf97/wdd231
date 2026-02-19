const hambBtn = document.getElementById('hamb-btn');
const navBar = document.getElementById('nav-bar');

if (hambBtn && navBar) {
  hambBtn.addEventListener('click', () => {
    navBar.classList.toggle('open');
    hambBtn.classList.toggle('open');

    const expanded = navBar.classList.contains('open');
    hambBtn.setAttribute('aria-expanded', String(expanded));
  });
} else {
  console.error('Missing #hamb-btn or #nav-bar in HTML');
}

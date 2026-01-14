const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

// Toggle the show class off and on
navButton.addEventListener('click', () => {
  console.log('Clicked');
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});

// If you want to inject this CSS via JavaScript, use a template string:
const style = document.createElement('style');
style.textContent = `
.noto-sans-jp-<uniquifier> {
  font-family: "Noto Sans JP", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
`;
document.head.appendChild(style);

const nav = document.getElementsByClassName('nav');
const mobileNav = document.getElementsByClassName('mobile-nav');
const humberger = document.getElementById('humberger');
const close = document.getElementById('closemenu');
const porfolioLink = document.getElementById('portfolioLink');
const aboutLink = document.getElementById('aboutLink');
const contactLink = document.getElementById('contactLink');

function closeFunction() {
  mobileNav[0].classList.remove('open');
  nav[0].classList.remove('close');
  mobileNav[0].classList.add('close');
  nav[0].classList.add('openFlex');
}

porfolioLink.addEventListener('click', () => {
  closeFunction();
});
aboutLink.addEventListener('click', () => {
  closeFunction();
});
contactLink.addEventListener('click', () => {
  closeFunction();
});

humberger.addEventListener('click', () => {
  mobileNav[0].classList.remove('close');
  nav[0].classList.remove('openFlex');
  mobileNav[0].classList.add('open');
  nav[0].classList.add('close');
});
close.addEventListener('click', () => {
  closeFunction();
});

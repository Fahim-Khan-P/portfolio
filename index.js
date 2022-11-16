const nav = document.getElementsByClassName('nav');
const mobileNav = document.getElementsByClassName('mobile-nav');
const humberger = document.getElementById('humberger');
const close = document.getElementById('closemenu');

humberger.addEventListener('click', () => {
  mobileNav[0].classList.remove('close');
  nav[0].classList.remove('openFlex');
  mobileNav[0].classList.add('open');
  nav[0].classList.add('close');
});
close.addEventListener('click', () => {
  mobileNav[0].classList.remove('open');
  nav[0].classList.remove('close');
  mobileNav[0].classList.add('close');
  nav[0].classList.add('openFlex');
});

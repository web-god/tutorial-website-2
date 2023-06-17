const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = document.getElementById('close-nav-btn');
const navbar = document.getElementById('navbar');

openNavBtn.addEventListener('click', () => {
  navbar.classList.add('show');
  openNavBtn.classList.add('hide');
  closeNavBtn.classList.remove('hide');
});

closeNavBtn.addEventListener('click', () => {
  navbar.classList.remove('show');
  openNavBtn.classList.remove('hide');
  closeNavBtn.classList.add('hide');
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((navLink) => {
      navLink.classList.remove('active');
    });
    link.classList.add('active');
  });
});


const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', () => {desktopMenu.classList.toggle('inactive');} );
burgerMenu.addEventListener('click', () => {mobileMenu.classList.toggle('activoM');} );

console.log('Ketchup');
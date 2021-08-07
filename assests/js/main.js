

// MOBILE MENU //

const menuIcon = document.querySelector('.hamburger-menu');
const navlist = document.querySelector('.nav-list');

menuIcon.addEventListener("click", () => {

  menuIcon.classList.toggle('change');
  navlist.classList.toggle('slide-menu');
  
});

function myFunction(){

  menuIcon.classList.remove('change');
  navlist.classList.remove('slide-menu');
  
}
let line_box = document.querySelector('.line-box');
let left_nav = document.querySelector('.navbar-left');
let navbar = document.querySelector('.navbar');
let nav_link = document.querySelector('.nav-link-click');

let right_nav = document.querySelector('.ul-class');
line_box.addEventListener('click', () => {
    navbar.classList.toggle('h-nav');
    right_nav.classList.toggle('a-hidden');
    left_nav.classList.toggle('a-hidden');
});

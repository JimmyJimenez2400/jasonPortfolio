const headerLinks = document.querySelector('.header-links');
const headerItems = document.querySelectorAll('.headerItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (headerLinks.classList.contains('showMenu')) {
    headerLinks.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    headerLinks.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

headerItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu);
});

let currentIndex = 0;
const imgDuration = 3000;
const carousel = document.getElementById('carousel');
let carouselSlides = carousel.children;
console.log(carouselSlides);
const imgArray = ['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg'];

//Make a function carousel that's parameter will take in an array
//inside we wanna go through the array based on length
//we want to add a class of active that will showcase the img INSIDE the carousel
//then remove that class of 'active' and turn into deactive, so it doesn't show on screen

function Carousel(imgArray) {
  for (let i = 0; i < imgArray.length; i++) {
    let img = document.createElement('img');
    img.src = imgArray[i];
    carousel.appendChild(img);
  }
}

function slideShow() {
  function fadeIn(e) {
    e.className = 'fadeIn';
  }

  function fadeOut(e) {
    e.className = '';
  }

  fadeOut(carouselSlides[currentIndex]);

  currentIndex++;
  if (currentIndex == carouselSlides.length) {
    currentIndex = 0;
  }

  fadeIn(carouselSlides[currentIndex]);

  setTimeout(function () {
    slideShow();
  }, imgDuration);
}

Carousel(imgArray);
slideShow();

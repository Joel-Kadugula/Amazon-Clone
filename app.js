let navSearch = document.querySelector(".nav-search");
let SearchSelect = document.querySelector(".search-select");
let searchIcon = document.querySelector(".search-icon");
let searchInput = document.querySelector(".search-input");
let logo = document.querySelector(".nav-logo");

logo.addEventListener("click" , (event) => {
  location.reload();
});

searchInput.addEventListener("click" , () => {
  navSearch.classList.add("searchBarColor");
});

searchInput.addEventListener("blur" , () => {
  navSearch.classList.remove("searchBarColor")
});

SearchSelect.addEventListener("click" , () => {
  SearchSelect.classList.add("searchBarColor");
});

SearchSelect.addEventListener("blur" , () => {
  SearchSelect.classList.remove("searchBarColor");
});

searchIcon.addEventListener("click" , () => {
  searchIcon.classList.add("searchBarColor");
});

document.addEventListener("click", (event) => {
  if (!searchIcon.contains(event.target)) {  // If click is outside searchIcon
    searchIcon.classList.remove("searchBarColor");
  }
});

const images = ['hero.jpg', 'hero2.jpg', 'hero3.jpg' , 'hero4.jpg' , 'hero5.jpg'];

let currentImageIndex = 0;

function changeBackground () {

  const heroSection = document.querySelector(".hero-section");

  currentImageIndex = (currentImageIndex + 1) % images.length;

  heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;

}

setInterval(changeBackground, 5000);



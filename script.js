const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-wrap");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("close");
});

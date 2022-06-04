const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-wrap");
const dropdown = document.querySelectorAll(".menu-wrap>ul>li");
console.log(dropdown);

dropdown.forEach((link) => {
  link.addEventListener("click", () => {
    link.querySelector("ul").classList.toggle("active");
    link.querySelector("span").classList.toggle("rotate");
  });
});

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("close");
});

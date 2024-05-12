const hamContainer = document.querySelector(".hamburger__container");
const hamburger = document.querySelector(".nav__hamburger");
const closeIcon= document.querySelector(".nav__close")
const container = document.querySelector(".nav-list-container");
const navLinks = document.querySelector(".nav__links");

hamContainer.addEventListener("click", () => {
    hamburger.classList.toggle('active')
    closeIcon.classList.toggle('active')
    navLinks.classList.toggle('active')
    container.classList.toggle('active')
});

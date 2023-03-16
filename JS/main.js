const nav = document.getElementById("nav");
const navButton = document.getElementById("nav-button");
const navImg = document.getElementById("nav-button-img");

navButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  document.querySelector("html").classList.toggle("hidden");
  if (nav.classList.contains("open")) {
    navImg.src = "/IMG/icons/nav-close.svg";
  } else {
    navImg.src = "/IMG/icons/nav-open.svg";
  }
});

AOS.init();

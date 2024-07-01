const menu = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

menu.addEventListener("click", () => {
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }

  // or simply use 'toggle' option

  links.classList.toggle("show-links");
});

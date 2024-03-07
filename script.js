document.addEventListener("DOMContentLoaded", function () {
  // variables
  const burger = document.querySelector(".navbar-burger");
  const navBarMenu = document.querySelector(".navbar-menu");
  const textArea = document.querySelector("textarea");

  // eventos
  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    navBarMenu.classList.toggle("is-active");
  });
  // funciones
});

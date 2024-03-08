document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const burger = document.querySelector(".navbar-burger");
  const navBarMenu = document.querySelector(".navbar-menu");

  // Eventos
  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    navBarMenu.classList.toggle("is-active");
  });

  // Funciones

});

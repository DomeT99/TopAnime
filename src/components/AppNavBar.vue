<template>
  <nav
    class="is-black navbar is-spaced has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="../assets/Image/LogoCut.webp"/>
      </a>
      <a
        role="button"
        class="navbar-burger"
        data-target="navMenu"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" id="navMenu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item"> Home </router-link>
        <router-link to="/search" class="navbar-item"> Search </router-link>
        <router-link to="/about" class="navbar-item"> About </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    this.openHamburger();
  },
  methods: {
    openHamburger() {
      //Metodo apertura menu hamburger mobile
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );

      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    },
  },
};
</script>

<template>
  <div>
    <header class="header_nuxt shadow-sm bg-white">
      <nav class="container mx-auto p-4 gap-4 flex justify-center">
        <nuxt-link class="font-bold" to="/">BitzCraft</nuxt-link>
        <ul class="flex gap-4">
          <li><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
          <li><nuxt-link to="/signin">Signin</nuxt-link></li>
          <li><nuxt-link to="/menu">Menu</nuxt-link></li>
        </ul>
      </nav>
    </header>

    <!-- ouput page content -->
    <div>
      <slot />
    </div>
  </div>
</template>
<style scoped>
.router-link-exact-active {
  color: green;
}
.header_nuxt a {
  text-decoration: none;
  color: #000;
  font-size: 39px;
}

/* resposive */
@media screen and (max-width: 2000px) {
  .header_nuxt a {
    font-size: 27px;
  }
  .header_nuxt ul.flex.gap-4 {
    margin: 0;
  }
}
@media screen and (max-width: 1600px) {
  .header_nuxt a {
    font-size: 23px;
  }
}
@media screen and (max-width: 1400px) {
  .header_nuxt a {
    font-size: 20px;
  }
}
@media screen and (max-width: 990px) {
  .header_nuxt a {
    font-size: 18px;
  }
  .header_nuxt ul.flex.gap-4 {
    gap: 13px !important;
  }
}
@media screen and (max-width: 767px) {
  .header_nuxt a {
    font-size: 16px;
  }
  .header_nuxt nav.container {
    padding: 16px 0 !important;
  }
}
</style>

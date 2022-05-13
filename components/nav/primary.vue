<template>
  <nav class="nav">
      <NuxtLink class="nav-logo" to="/piscina/analisis">MaPi</NuxtLink>
      <!-- <ul>
          <li>PISCINA</li>
          <li>BLOG</li>
          <li>TIENDA</li>
      </ul> -->
      <section>
          <NuxtLink v-if="$route.path != '/signin'" class="nav-signin" to="/signin">Iniciar sesión</NuxtLink>
      </section>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
    $color-primary: #EA7F54
    .nav
        background-color: $color-primary
        height: 48px
        display: flex
        align-items: center
        color: white
        justify-content: space-between
        padding: 0 25px
        z-index: 2

        &-logo
            font-size: 24px
            font-weight: normal
            text-decoration: none

        &-signin
            margin: 0
            font-size: 22px
            cursor: pointer
            text-decoration: none

        ul
            display: flex
            li
                list-style: none
                margin: 0 30px
                font-size: 18px
            
            
            
</style>
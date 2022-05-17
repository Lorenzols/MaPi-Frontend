<template>
  <nav class="nav">
      <NuxtLink class="nav-logo" to="/piscina/analisis">MaPi</NuxtLink>
      <!-- <ul>
          <li>PISCINA</li>
          <li>BLOG</li>
          <li>TIENDA</li>
      </ul> -->
      <section v-if="$store.state.session.status">
          <p>Iniciado</p>
          <p>ID: {{this.$store.state.session.id}}</p>
      </section>
      <section v-else>
          <NuxtLink v-if="$route.path != '/signin'" class="nav-signin" to="/signin">Iniciar sesión</NuxtLink>
          <p>{{this.$store.state.session.status}}</p>
          <p>{{this.$store.state.session.id}}</p>
      </section>

      <li class="nav-item" @click="logout">
            <!-- <nuxt-link class="nav-link active" aria-current="page" to="/signin">Logout</nuxt-link> -->
            <p>adioos</p>
        </li>
        <p>{{this.$store.state.auth.loggedIn}}</p>
  </nav>
</template>

<script>
export default {
    methods: {
      async logout() {
          console.log("adios")
          await this.$auth.logout();  // this method will logout the user and make token to false on the local storage of the user browser
          this.$router.push("/signin")
      } 
    }
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
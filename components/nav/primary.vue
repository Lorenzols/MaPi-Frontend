<template>
  <nav class="nav">
      <h1>Mapi</h1>
      <ul>
          <li>PISCINA</li>
          <li>BLOG</li>
          <li>TIENDA</li>
      </ul>
      <section>
          <h1>Iniciar sesión</h1>
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

        h1
            margin: 0

        ul
            display: flex
            li
                list-style: none
                margin: 0 8px
            
            
            
</style>
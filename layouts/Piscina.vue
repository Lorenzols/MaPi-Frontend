<template>
  <section>
      <nav-primary />
      <section class="c-piscina">
         <Nuxt />
      </section>
      <footer-primary/>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="sass">
  $color-secundary: #522C1D
  *
    margin: 0
    padding: 0

  .c-piscina
    background-color: $color-secundary
    padding: 40px
</style>
<template>
  <section>
      <nav-primary />
      <section class="c-global">
        <nav-piscina-secundary class="c-secundary"/>
        <section class="c-piscina">
         <Nuxt :key="$route.fullPath"/>
        </section>
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

  .c-global
    display: flex

  .c-piscina
    background-color: $color-secundary
    width: 100%

</style>
<template>
  <section class="c-primary ">
      <nav-primary />
      <section class="c-global">
        <nav-piscina-secundary class="c-secundary"/>
        <section class="c-piscina">
         <Nuxt :key="$route.fullPath"/>
        </section>
      </section>
      <footer-primary class="footer-primary"/>
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
  
  .c-primary 
    display: flex
    flex-direction: column
    min-height: 100vh
  
  .c-global
    display: flex
    min-height: calc( 100vh - 48px * 2 )
    // min-height: 100vh

  .c-piscina
    background-color: $color-secundary
    width: 100%

  

</style>
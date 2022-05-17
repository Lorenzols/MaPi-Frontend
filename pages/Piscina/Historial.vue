<template>
  <section class="c-history">
      <h1 class="c-history-title">HISTORIAL</h1>
      <chart-lineal idChart="chartph"/>
      <chart-lineal idChart="chartcl"/>
      
  </section>
</template>
<script>
export default {
  middleware: "isAuthenticated"
}
</script>

<style lang="sass" scoped>
  $color-secundary: #522C1D
  .c-history
    width: 70%
    margin: 0 auto
    padding: 40px 0
    &-title
      margin-bottom: 40px
      text-align: center

</style>

<template>
  <section class="container">
      <div class="box-color"></div>
      <section class="c-question">
        <h1>¿Como hacer el mantenimiento a tu piscina?</h1>
        <h3>Por Lorenzo el 13/01/2022 20:28</h3>
      </section>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
  $color-d: #B56D18
  $color-text-primary: white
  .container
    display: flex
    height: fit-content
    padding-top: 40px
    .box-color
      background-color: $color-d
      width: 18px
    .c-question
      padding-left: 16px
      color: $color-text-primary
      
      h1
        margin: 4px 0
        font-size: 24px
        font-weight: normal

      h3
        margin: 4px 0
        font-size: 18px
        font-weight: normal
</style>
<template>
  <section class="container">
      <div class="box-color"></div>
      <section class="c-question">
        <hgroup>
          <h2>Aprende a mantener tu piscina.</h2>
        </hgroup>
      </section>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
  $color-c: white
  $color-text-primary: white

  .container
    display: flex
    height: fit-content
    padding-top: 20px
    .box-color
      background-color: $color-c
      width: 18px
    .c-question
      padding-left: 16px
      color: $color-text-primary

      h2
        margin: 4px 0
        font-size: 16px
        font-weight: normal
</style>
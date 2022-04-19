<template>
  <section class="c-climate">
      <h1 class="c-climate-title">Clima</h1>
      <basic-climate-city sizeimg="180px" :isbigtext="true"/>
      <section class="c-pool">
        <div class="c-pool-climate">
          <h1>20 ºC</h1>
        </div>
        <div class="c-pool-image">
          <img src="~/assets/img/piscina/climate/pool.png" alt="">
        </div>
        <div class="c-pool-water">
        <h1>19 ºC</h1>
        </div>
      </section>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
  .c-climate
    height: calc( 100vh - 48px )
    display: flex
    flex-direction: column
    align-items: center
    // justify-content: center
    gap: 70px
    width: 70%
    margin: 0 auto

    &-title
      margin-top: 40px
  .c-pool
    width: 500px
    position: relative

    &-climate
      position: absolute
      top: 20px
      left: 70px
      h1
        font-size: 30px
    &-image
      width: 100%
      img
        width: 100%
    &-water
      position: absolute
      bottom: 80px
      right: 130px
      background-color: #1D4852
      padding: 5px 10px
      border-radius: 10px
      h1
        font-size: 30px
    
</style>
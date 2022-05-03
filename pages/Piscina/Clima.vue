<template>
  <section class="c-climate">
      <h1 class="c-climate-title">CLIMA</h1>
      <section class="c-data">
        <basic-climate-city sizeimg="180px" :isbigtext="true" class="c-data-climate-city"/>
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
  </section>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
  .c-climate
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    width: 50%
    margin: 0 auto

    &-title
      margin-top: 40px

  .c-data
    display: flex
    align-items: center
    width: 100%
    height: calc( 100% - 72px )
    justify-content: space-evenly

  .c-pool
    width: 500px
    position: relative
    height: fit-content

    &-climate
      position: absolute
      top: 20px
      left: 70px

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
    
</style>
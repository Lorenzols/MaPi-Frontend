<template>
  <section class="c-climate">
      <h1 class="c-climate-title">CLIMA</h1>
      <section class="c-data">
        <basic-climate-city sizeimg="180px" :isbigtext="true" :temApi="temp.apiweather" class="c-data-climate-city"/>
        <section class="c-pool">
          <div class="c-pool-climate">
            <h1>{{temp.tAmbient}} ºC</h1>
          </div>
          <div class="c-pool-image">
            <img src="~/assets/img/piscina/climate/pool.png" alt="">
          </div>
          <div class="c-pool-water">
            <h1>{{temp.tPool}} ºC</h1>
          </div>
        </section>
      </section>
  </section>
</template>

<script>
export default {
  middleware: "isAuthenticated",
    async asyncData(ctx){
        const temp = await ctx.$axios.get("pool/weather")
        
        return{
            temp: temp.data
        }
    }
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
    @media (max-width: 1023px)
      display: block
      margin-top: 40px
    @media (max-width: 767px)
      display: block
      width: fit-content

  .c-pool
    width: 500px
    min-width: 500px
    position: relative
    height: fit-content
    @media (max-width: 767px)
      width: 250px
      min-width: 250px

    &-climate
      position: absolute
      top: 20px
      left: 70px
      @media (max-width: 767px)
        top: 10px
        left: 40px

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
      @media (max-width: 767px)
        bottom: 40px
        right: 70px

  .c-data-climate-city ::v-deep .c-climate-city-image
    @media (max-width: 767px)
      width: fit-content !important
      height: fit-content !important
      img
        width: 80px
        height: 80px
    
</style>
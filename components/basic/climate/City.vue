<template>
  <section class="c-climate-city">
      <div class="c-climate-city-image" :style="'width:'+sizeimg+'; height:'+sizeimg">
          <img src="~/assets/img/piscina/sun.png" alt="City temperature" width="100%" height="100%">
      </div>
      <div class="c-climate-city-c-text">
          <h2>Valencia</h2>
          <h2>30 ºC</h2>
      </div>
  </section>
</template>

<script>
export default {
    props:{
        sizeimg: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="sass" scoped>
    .c-climate-city
        display: flex

        &-c-text
            padding: 0 20px
            display: flex
            flex-direction: column
            justify-content: center
</style>
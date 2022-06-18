<template>
  <section class="c-climate-city">
      <div class="c-climate-city-image" :style="'width:'+sizeimg+'; height:'+sizeimg">
          <img :src="`https://openweathermap.org/img/wn/${temApi.weather[0].icon}@2x.png`" alt="City temperature" width="100%" height="100%">
      </div>
      <div class="c-climate-city-c-text">
          <h2 :class="{'big-text': isbigtext}">{{temApi.name}}</h2>
          <h2 :class="{'big-text': isbigtext}">{{temApi.main.temp}} ºC</h2>
      </div>
  </section>
</template>

<script>
export default {
    props:{
        sizeimg: {
            type: String,
            required: true
        },
        isbigtext: {
            type: Boolean,
            required: false
        },
        temApi: {
            type: Object,
            required: false
        }
    }
}
</script>

<style lang="sass" scoped>
    .c-climate-city
        display: flex
        @media (max-width: 767px)
            width: fit-content
            padding: 20px 0

        &-image
            @media (max-width: 767px)
                width: 80px
                height: 80px 

        &-c-text
            padding: 0 20px
            display: flex
            flex-direction: column
            justify-content: center

    .big-text
        font-size: 24px !important
        
</style>
<template>
  <section class="c-climate">
      <div class="c-climate-image">
          <img :src="'/_nuxt/assets/img/piscina/'+srcimg" alt="Climate" width="100%" height="100%">
      </div>
      <div class="c-climate-text">
          <h2>32 ºC</h2>
      </div>
  </section>
</template>

<script>
export default {
    props:{
        srcimg: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="sass" scoped>
    .c-climate
        display: flex
        margin: 10px 20px

        &-image
            width: 50px
            height: 50px

        &-text
            display: flex
            align-items: center
            margin: 0 5px
</style>
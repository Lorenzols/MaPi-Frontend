<template>
  <section class="c-filtered">
      <h1 class="c-filtered-title">FILTRADO</h1>
      <div class="c-filtered-automatic">
        <h1 class="c-filtered-automatic-text-button">Bomba de agua automatica</h1>
        <basic-button-checkbox />
      </div>
      <div class="c-filtered-schedule">
        <h1 class="c-filtered-schedule-title">Horario de filtrado</h1>
        <pages-pool-filtered-boxtime />
        <div class="c-filtered-schedule-button">
          <button @click="newtime()">Nueva</button>
        </div>
      </div>

      <div class="c-filtered-schedule-new">
        <pages-pool-filtered-boxtime v-for="item in boxtime" :key="item" :close="true"/>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return{
      boxtime: []
    }
  },
  methods: {
    newtime: function(){
      console.log("hola",this.boxtime.length)
      if(this.boxtime.length == 0){
        this.boxtime.push(1)
        console.log("de")
      }else{
        this.boxtime.push(this.boxtime.length + 1)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .c-filtered
    display: flex
    flex-direction: column
    align-items: center
    height: 100%
    padding-bottom: 40px

    &-title
      margin: 40px 0

    &-automatic
      width: 70%
      display: flex
      align-items: center
      gap: 20px
      &-text-button
        margin: 20px 0

    &-schedule
      width: 70%
      &-title
        margin: 10px 0
      &-button
        display: flex
        justify-content: center
        margin: 20px
        button
          background-color: #EA7F54
          border: none
          padding: 5px 15px
          border-radius: 5px
          cursor: pointer
          font-size: 19px
      &-new
        width: 70%
        display: flex
        flex-direction: column
        gap: 20px
      
              

</style>
<template>
  <section class="c-treatment">
    <div class="c-treatment-secundary">
      <hgroup class="c-treatment-secundary-title">
        <h1>TRATAMIENTO DEL AGUA</h1>
      </hgroup>
      <div class="container">
        <section class="c-data">
          <div class="c-data-title">
            <h1 v-if="data.poolStatus">{{data.poolStatus[0].value}}</h1>
            <h1 v-else>0</h1>
          </div>
          <div class="c-data-status">
            <div class="c-data-status-lyrics">
              <h2>{{data.poolStatus[0].name}} {{data.poolStatus[0].status}}</h2>
            </div>
            <div class="c-data-status-current">
              <h2>{{data.poolStatus[0].diference}} {{data.poolStatus[0].name}}</h2>
            </div>
          </div>
          <div class="c-data-pour">
            <h2>{{data.poolStatus[0].dosage}} ml</h2>
          </div>

          <div class="c-data-suitable">
            <div class="c-data-suitable-text">
              <h2>{{data.poolStatus[0].name}} adecuado</h2>
            </div>
            <div class="c-data-suitable-buttons">
              <basic-selection-number valuenumber="7.2" extent="pH" />
            </div>
          </div>

          <div class="c-data-current-amount">
            <hgroup>
              <h1>Cantidad</h1>
            </hgroup>
            <div class="c-data-current-amount-image">
              <img src="~/assets/img/piscina/traetment/drum.png" alt="Drum">
              <div class="c-data-current-amount-image-text">
                <h1>3L</h1>
              </div>
            </div>
            <div class="c-data-current-amount-worth">
              <h1>{{data.poolStatus[0].name}}</h1>
            </div>
          </div>
        </section>
        <section class="c-data">
          <div class="c-data-title">
            <h1 v-if="data.poolStatus">{{data.poolStatus[1].value}}</h1>
            <h1 v-else>0</h1>
          </div>
          <div class="c-data-status">
            <div class="c-data-status-lyrics">
              <h2>{{data.poolStatus[1].name}} {{data.poolStatus[1].status}}</h2>
            </div>
            <div class="c-data-status-current">
              <h2>{{data.poolStatus[1].diference}} {{data.poolStatus[1].name}}</h2>
            </div>
          </div>
          <div class="c-data-pour">
            <h2>{{data.poolStatus[1].dosage}} ml</h2>
          </div>

          <div class="c-data-suitable">
            <div class="c-data-suitable-text">
              <h2>{{data.poolStatus[1].name}} adecuado</h2>
            </div>
            <div class="c-data-suitable-buttons">
              <basic-selection-number valuenumber="1.5" extent="ppm"/>
            </div>
          </div>

          <div class="c-data-current-amount">
            <hgroup>
              <h1>Cantidad</h1>
            </hgroup>
            <div class="c-data-current-amount-image">
              <img src="~/assets/img/piscina/traetment/drum.png" alt="Drum">
              <div class="c-data-current-amount-image-text">
                <h1>3L</h1>
              </div>
            </div>
            <div class="c-data-current-amount-worth">
              <h1>{{data.poolStatus[1].name}}</h1>
            </div>
          </div>
        </section>
      </div>

      <div class="automatic">
        <hgroup>
          <h1>Mantenimiento automático</h1>
        </hgroup>
        <basic-button-checkbox />
      </div>
    </div>

    <section class="c-automatic">
      <div class="c-automatic-worth">
          <div class="c-automatic-worth-status">
            <div class="c-automatic-worth-status-current">
              <h2>1 pH+</h2>
            </div>
            <div class="c-automatic-worth-status-pour">
              <h2>800ml</h2>
            </div>
          </div>

          <div class="c-automatic-worth-modify">
            <h2 class="c-automatic-worth-modify-title">Modificar valores</h2>
            <div class="c-automatic-worth-modify-section">
              <basic-selection-number extent="pH"/>
              <basic-selection-number extent="pH ml"/>
            </div>
          </div>
      </div>

      <div class="c-automatic-worth">
          <div class="c-automatic-worth-status">
            <div class="c-automatic-worth-status-current">
              <h2>0.4 ppm</h2>
            </div>
            <div class="c-automatic-worth-status-pour">
              <h2>450ml</h2>
            </div>
          </div>

          <div class="c-automatic-worth-modify">
            <h2 class="c-automatic-worth-modify-title">Modificar valores</h2>
            <div class="c-automatic-worth-modify-section">
              <basic-selection-number extent="ppm"/>
              <basic-selection-number extent="ppm ml"/>
            </div>
          </div>
      </div>
    </section>

    <section class="c-bombs">
      <h2 class="c-bombs-title">Activar bombas</h2>
      <div class="c-bombs-buttons">
        <div class="c-bombs-buttons-button">
          <h2>pH</h2>
        </div>
        <div class="c-bombs-buttons-button">
          <h2>ppm</h2>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  middleware: "isAuthenticated",
  async asyncData(ctx){
      const result = await ctx.$axios.get("pool/treatment/")
      
      return{
          data: result.data
      }
  },
  mounted(){
    console.log("datos: ", this.data.poolStatus)
  }
}
</script>

<style lang="sass" scoped>
  .c-treatment
    // height: calc( 100vh - 48px )
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

    &-secundary
      width: 70%
      &-title
        text-align: center
        margin-top: 40px

  .container
    display: flex
    justify-content: space-between
    @media (max-width: 767px)
      display: block

  .c-data
    width: 40%
    min-width: 300px
    @media (max-width: 767px)
      min-width: 240px

    &-title
      text-align: center
      margin: 40px

    &-status
      display: flex
      border: 2px solid #844213

      &-lyrics
        width: 30%
        border-right: 2px solid #844213
        text-align: center
        padding: 5px 0

      &-current
        width: 70%
        padding: 5px 0
        text-align: center
    &-pour
      text-align: center
      padding: 5px 0
      border: 2px solid #844213
      margin: 10px 0

    &-suitable
      display: flex

      &-text
        width: 50%
        display: flex
        justify-content: center
        align-items: center
      &-buttons
        width: 50%

    &-current-amount
      hgroup
        text-align: center
        margin-top: 20px
      &-image
        position: relative
        width: fit-content
        margin: 15px auto
        img
          width: 150px
        &-text
          position: absolute
          bottom: 40px
          left: 60px

          h1
            font-size: 36px
      &-worth
        text-align: center

  .automatic
    margin-top: 40px
    margin-bottom: 10px
    display: flex
    gap: 20px
    

  .c-automatic
    width: 70%
    display: flex
    justify-content: space-between
    border: 2px solid #EA7F54
    box-sizing: border-box
    padding: 20px 40px
    @media (max-width: 767px)
      display: block
      
    &-worth
      width: 40%
      @media (max-width: 767px)
        width: 100%
      &-status
        display: flex
        border: 2px solid #844213
        &-current
          width: 50%
          border-right: 2px solid #844213
          text-align: center
          padding: 5px 0
        &-pour
          width: 50%
          text-align: center
          padding: 5px 0
      &-modify
        &-title
          margin-top: 20px
        &-section
          display: flex
          margin: 10px 0
          gap: 20px

  .c-bombs
    width: 70%
    margin: 20px 0
    &-buttons
      display: flex
      gap: 20px
      margin-top: 5px
      &-button
        background-color: #1F0F04
        padding: 4px 15px
        border-radius: 25px
        cursor: pointer
        &:active
          background-color: #844213
</style>
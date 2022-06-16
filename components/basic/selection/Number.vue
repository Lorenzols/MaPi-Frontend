<template>
  <section class="c-number">
      <div class="c-number-text">
          <h2>{{valuenumber}} {{extent}}</h2>
      </div>
      <div class="c-number-buttons">
          <div class="c-number-buttons-button" @click="cambioValor(1)">+</div>
          <div class="c-number-buttons-button" @click="cambioValor(0)">-</div>
      </div>
  </section>
</template>

<script>
export default {
    props:{
        valuenumber:{
            type: String,
            required: false
        },
        extent: {
            type: String,
            required: true
        }
    },
    methods:{
        async cambioValor(signo){
            console.log("Cambiando: ",signo ,this.extent)
            const result = await this.$axios.patch("pool/treatment/ap", {"signo": signo, "producto": this.extent})

            // const result = await this.$axios.get("pool/analysis/")
            // let valueOK = result.data.filter(a => a.name == this.extent)[0].appropriate_value
            this.valuenumber = String(result.data.valueOk[0].appropriate_value)
            // console.log("AQUI: ", result.data.valueOk[0].appropriate_value)

            // console.log(new Date().toLocaleTimeString('es-ES'))
        }
    }
}
</script>

<style lang="sass" scoped>
    .c-number
        border: 2px solid #844213
        display: flex
        height: 60px
        width: 100%
        box-sizing: border-box

        &-text
            width: 50%
            display: flex
            align-items: center
            justify-content: center
            @media (max-width: 767px)
                padding-left: 10px
        &-buttons
            width: 50%
            display: flex
            flex-direction: column
            align-items: center
            justify-content: space-evenly

            &-button
                background-color: #B56D18
                width: 40%
                display: flex
                justify-content: center
                align-items: center
                border-radius: 2px
                cursor: pointer

                &:active
                    background-color: #1F0F04
                    
</style>
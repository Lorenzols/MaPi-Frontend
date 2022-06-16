<template>
  <section class="c-configuration">
    <h1 class="c-configuration-title">CONFIGURACIÓN</h1>
    <section class="c-box">
      <hgroup class="c-box-title">
        <h1>CLIMA</h1>
      </hgroup>
      <section class="box">
        <div class="box-text box-text-primary">
          <h2>Latitud</h2>
        </div>
        <div class="box-text">
          <h2>3232</h2>
        </div>
      </section>

      <section class="box">
        <div class="box-text box-text-primary">
          <h2>Longitud</h2>
        </div>
        <div class="box-text">
          <h2>32142</h2>
        </div>
      </section>
    </section>

    <section class="c-cuenta">
      <hgroup>
        <h1>Cuenta</h1>
      </hgroup>
      <section class="box">
        <div class="box-text box-text-primary">
          <h2>Nombre</h2>
        </div>
        <div class="box-text">
          <h2>{{this.$store.state.auth.user.firstName}}</h2>
        </div>
      </section>
      <section class="box">
        <div class="box-text box-text-primary">
          <h2>Cambiar contraseña</h2>
        </div>
        <div class="box-text">
          <NuxtLink to="/forgotpassword" class="btn-solid">Cambiar</NuxtLink>
        </div>
      </section>
    </section>

    <section class="c-box">
      <hgroup class="c-box-title">
        <h1>Automatico</h1>
      </hgroup>
      <section class="box">
        <div class="box-text box-text-primary">
          <h2>Filtrado</h2>
        </div>
        <div class="box-text">
          <basic-button-checkbox @change.native="interructor('filtering')" nombre="filtering" idp="filtering" :checkedp="data.filtering_auto" />
        </div>
      </section>

      <section class="box">
        <div class="box-text box-text-primary">
          <h2>Tratamiento</h2>
        </div>
        <div class="box-text">
          <basic-button-checkbox @change.native="interructor('treatment')" nombre="treatment" idp="treatment" :checkedp="data.treatment_auto" />
        </div>
      </section>
    </section>

    <section class="c-box">
      <hgroup class="c-box-title">
        <h1>Piscina</h1>
      </hgroup>
      <section class="box">
        <div class="box-text box-text-primary">
          <h2>Metros m³</h2>
        </div>
        <div class="box-text">
          <input class="input-text-config" type="text" id="mc" :value="data.meters_cubics_pool" @change="mc('mc')">
        </div>
      </section>
    </section>

    <section class="c-box" @change="mescla('mlph', 'mcph', dataAnalisys[0].name)">
      <hgroup class="c-box-title">
        <h1>Mescla Ph+</h1>
      </hgroup>
      <section class="box">
        <div class="box-text box-text-primary">
          <h2>ml</h2>
        </div>
        <div class="box-text">
          <input class="input-text-config" type="text" id="mlph" :value="dataAnalisys[0].dosage_recommend_ml">
        </div>
      </section>
      <section class="box">
        <div class="box-text box-text-primary">
          <h2>m³</h2>
        </div>
        <div class="box-text">
          <input class="input-text-config" type="text" id="mcph" :value="dataAnalisys[0].dosage_recommend_mc">
        </div>
      </section>
    </section>

    <section class="c-box" @change="mescla('mlph2', 'mcph2', dataAnalisys[1].name)">
      <hgroup class="c-box-title">
        <h1>Mescla ppm</h1>
      </hgroup>
      <section class="box">
        <div class="box-text box-text-primary">
          <h2>ml</h2>
        </div>
        <div class="box-text">
          <input class="input-text-config" type="text" id="mlph2" :value="dataAnalisys[1].dosage_recommend_ml">
        </div>
      </section>
      <section class="box">
        <div class="box-text box-text-primary">
          <h2>m³</h2>
        </div>
        <div class="box-text">
          <input class="input-text-config" type="text" id="mcph2" :value="dataAnalisys[1].dosage_recommend_mc">
        </div>
      </section>
    </section>

  </section>
</template>

<script>
export default {
  middleware: "isAuthenticated",
  async asyncData(ctx){

    const result = await ctx.$axios.get("pool/configuration")
    console.log("datos: ", result)
    const resultAnalisys = await ctx.$axios.get("pool/treatment/")

    // console.log("DATOS AN: ", resultAnalisys.data[0])
    return{
      data: result.data.configuration[0],
      dataAnalisys: resultAnalisys.data.poolProducts
    }
  },
  methods:{
    async interructor(nombre){
      let check = document.getElementById(nombre).checked
      let result = await this.$axios.patch(`pool/configuration/${nombre}`, {"check": check})
      console.log("Pulsado", check, nombre)
    },
    async mc(nombre){
      let value = document.getElementById(nombre).value
      await this.$axios.patch(`pool/configuration/${nombre}`, {"metersCubics": value})
      console.log("CAMBIO: ", value)
    },
    async mescla(mlid, mcvid, name){
      let mlv = document.getElementById(mlid).value
      let mcv = document.getElementById(mcvid).value
      console.log("OE: ", mlv, mcv)

      await this.$axios.patch(`pool/configuration/ms/${name}/${mlv}/${mcv}`)
    }
  },
  mounted(){
    console.log("EE: ", this.dataA)
  }
}
</script>

<style lang="sass" scoped>
  .c-configuration
    width: 70%
    margin: 0 auto
    padding-top: 40px
    &-title
      text-align: center

  .c-box
    padding: 40px 0
    &-title
      padding: 10px 0
  .box
    display: flex
    border: 2px solid #844213
    width: 400px
    margin-top: 10px
    @media (max-width: 767px)
      width: 100%
    &-text
      padding: 10px 0
      width: 50%
      display: flex
      align-items: center
      justify-content: center
      @media (max-width: 767px)
        padding: 10px 10px
      &-primary
        border-right: 2px solid #844213
        h2
          color: #FFA362
  .btn-solid
    background-color: #EA7F54
    padding: 5px 10px
    border-radius: 5px
    border: none
    text-decoration: none

  .input-text-config
    border: none
    background-color: #522C1D
    font-size: 18px
    text-align: center
    width: 100%
    outline: none
</style>
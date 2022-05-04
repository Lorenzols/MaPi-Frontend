<template>
  <section class="c-configuration">
    <h1 class="c-configuration-title">CONFIGURACIÓN</h1>
    <section class="c-box">
      <hgroup class="c-box-title">
        <h1>CLIMA</h1>
      </hgroup>
      <section class="box">
        <div class="box-text box-text-primary">
          <h2>Lugar del clima</h2>
        </div>
        <div class="box-text">
          <h2>Valencia</h2>
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
          <h2>Lorenzo</h2>
        </div>
      </section>
      <section class="box">
        <div class="box-text box-text-primary">
          <h2>Cambiar contraseña</h2>
        </div>
        <div class="box-text">
          <button class="btn-solid">Cambiar</button>
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
    cursor: pointer
</style>
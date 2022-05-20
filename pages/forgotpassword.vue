<template>
  <section class="c-forgotpassword">
        <hgroup>
            <h1>Cambio de contraseña</h1>
        </hgroup>
        <form class="c-forgotpassword-form" @submit.prevent="forgotm">
            <input type="email" placeholder="E-mail" v-model="forgotpassword.email">

            <button class="btn-primary" type="submit" >Enviar</button>
        </form>
        <div class="c-error">
            <p>{{error}}</p>
        </div>
    </section>
</template>

<script>
export default {
  layout: 'Piscina',
  data() {
    return {
        forgotpassword: {
            email: ""
        },
        error: ''
    }
  },

  methods: {
    forgotm(){
      console.log("Email enviado", this.forgotpassword)
    }
  }
}
</script>

<style lang="sass" scoped>
  .c-forgotpassword
    padding: 20px 40px
    padding-top: 100px
    width: 35vw
    height: 100%
    box-sizing: border-box
    background: #a36142
    @media (max-width: 767px)
      width: 100%

    &-form
      display: flex
      flex-direction: column
      grid-gap: 20px
      margin-top: 30px

      input
        padding: 15px
        outline: none
        border: 2px solid white
        background: #a36142
        border-radius: 5px
        font-size: 20px
        
        &::placeholder
          color: white
          font-size: 22px
.btn
    &-primary
        padding: 15px
        background: #EA7F54
        border: none
        border-radius: 5px
        font-size: 22px
        cursor: pointer

.c-error
    margin-top: 10px
</style>
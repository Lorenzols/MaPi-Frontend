<template>
  <section class="c-error">
    <div>
        <h1>MaPi Error</h1>
        <h2>Ups, Ha habido un error</h2>
        <NuxtLink class="btn-secundary" to="/signup">Inicio</NuxtLink>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
    .c-error
        width: 100vw
        height: 100vh
        display: flex
        justify-content: center
        align-items: center

        div
            h1
                color: orange
                margin-bottom: 2rem
                font-size: 86px
                text-align: center
            h2
                color: black
                margin: 1rem 0
                text-align: center
            
    .btn-secundary
        background: #FFD8AB
        padding: 15px
        width: fit-content
        border-radius: 5px
        color: #522C1D
        font-size: 22px
        text-decoration: none
        display: block
        box-sizing: border-box
        text-align: center
        margin: 0 auto
</style>
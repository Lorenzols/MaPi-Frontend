<template>
    <section class="c-secundary" :class=" !isNavSecundary ? 'p-position' : '' ">
        <section class="c-secundary-nav" v-on:click="click" v-if="isNavSecundary">
            <img src="~/assets/img/piscina/angleLeftWhite.png" alt="">
        </section>
        <section class="c-secundary-nav" v-on:click="click" v-if="!isNavSecundary" :class=" !isNavSecundary ? 'p-arrow' : '' ">
            <img src="~/assets/img/piscina/angleRightWhite.png" alt="">
        </section>
        <ul v-if="isNavSecundary">
            <li> <NuxtLink to="/piscina/analisis">ANALISIS</NuxtLink></li>
            <li> <NuxtLink to="/piscina/clima">CLIMA</NuxtLink></li>
            <li> <NuxtLink to="/piscina/tratamiento">TRATAMIENTO</NuxtLink></li>
            <li> <NuxtLink to="/piscina/filtrado">FILTRADO</NuxtLink></li>
            <li> <NuxtLink to="/piscina/historial">HISTORIAL</NuxtLink></li>
            <li> <NuxtLink to="/piscina/configuracion">CONFIGURACIÓN</NuxtLink></li>
        </ul>
    </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    computed: {
        isNavSecundary() {
            return this.$store.state.navSecundary.isNavSecundary
        }
    },
    methods: {
        ...mapMutations({
            click: 'navSecundary/click'
        })
    }
}
</script>

<style lang="sass" scoped>
    .c-secundary
        width: fit-content
        display: flex
        align-items: center
        padding: 0 25px
        background-color: #a36142
        position: fixed
        top: 0
        bottom: 0
        z-index: 1

        @media (max-width: 767px)
            // position: absolute
            // top: 48px
            // bottom: 48px
            z-index: 1

        ul
            list-style: none

            li
                padding: 4px 0

                a
                    text-decoration: none
                    color: white
        &-nav
            position: absolute
            top: 60px
            right: 20px
            width: 15px
            cursor: pointer
            background-color: #a36142

            img
                width: 100%
    .nuxt-link-exact-active
        font-weight: bold
    
    .p-position
        position: absolute
        height: fit-content
        top: 60px

    .p-arrow
        top: 15px
        left: 10px
        padding: 5px 10px
        border-radius: 4px


</style>
<template>
    <section class="c-secundary">
        <ul>
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
export default {

}
</script>

<style lang="sass" scoped>
    .c-secundary
        width: fit-content
        display: flex
        align-items: center
        padding: 0 20px
        background-color: #a36142

        ul
            list-style: none

            li
                padding: 4px 0

                a
                    text-decoration: none
                    color: white
                
    .nuxt-link-exact-active
        font-weight: bold

</style>
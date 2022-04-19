<template>
    <section class="c-secundary">
        <ul>
            <li> <NuxtLink to="/piscina">ANALISIS</NuxtLink></li>
            <li> <NuxtLink to="/piscina">CLIMA</NuxtLink></li>
            <li> <NuxtLink to="/piscina">TRATAMIENTO</NuxtLink></li>
            <li> <NuxtLink to="/piscina">FILTRADO</NuxtLink></li>
            <li> <NuxtLink to="/piscina/historial">HISTORIAL</NuxtLink></li>
            <li> <NuxtLink to="/piscina">CONFIGURACIÓN</NuxtLink></li>
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
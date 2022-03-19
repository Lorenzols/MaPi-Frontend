<template>
    <section class="container"> 
        <ul>
            <li>Nuevos posts</li>
            <li>Posts más vistos</li>
            <li>Preguntas resueltas</li>
            <li>Preguntas sin resolver</li>
        </ul>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
    $color-secundary: #8C4224
    $color-c: #FFD8AB
    $color-text: #FFD8AB
    $color-text-secundary: #8C4224

    .container
        background-color: $color-secundary
        border-radius: 4px

        ul
            display: flex
            align-items: center
            margin: 0 auto
            color: $color-text
            li
                list-style: none
                padding: 8px
                font-size: 18px

                &:hover
                    background-color: $color-c
                    color: $color-text-secundary
</style>
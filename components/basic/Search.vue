<template>
    <section class="c-search">
        <input type="text" name="search" placeholder="Buscar">
        <div class="c-ico-search">
            <h1>q</h1>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
    $color-primary: #EA7F54
    $color-text-primary: white

    .c-search
        height: 30px
        border: 1.5px solid white
        display: flex
        border-radius: 4px
        margin-top: 40px
        background-color: $color-primary

        input
            width: 70%
            height: 100%
            padding: 0 10px
            margin: 0
            border: 0
            box-sizing: border-box
            background-color: $color-primary
            outline: none
            color: $color-text-primary

            &::placeholder
                color: $color-text-primary
                font-size: 18px

    .c-ico-search
        width: 30%
        background-color: $color-primary
        border-left: 2px solid white
        
        
</style>
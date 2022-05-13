<template>
    <section class="c-signup">
        <hgroup>
            <h1>Inicia sesión</h1>
        </hgroup>
        <form class="c-signup-form">
            <input type="email" placeholder="E-mail">
            <input type="password" placeholder="Contraseña">
            <div class="c-signup-form-rec">
                <p>He olvidado la contraseña</p>
            </div>

            <button class="btn-primary">Iniciar sesión</button>
            
        </form>
        <div class="line"></div>

        <NuxtLink class="btn-secundary" to="/signup">Crear cuenta</NuxtLink>
    </section>
</template>

<script>
export default {
    layout: 'Piscina'
}
</script>

<style lang="sass" scoped>
    .c-signup
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
                font-size: 22px
                
                &::placeholder
                    color: white
                    font-size: 22px
            &-check
                display: flex
                gap: 10px
                align-items: center
    .btn
        &-primary
            padding: 15px
            background: #EA7F54
            border: none
            border-radius: 5px
            font-size: 22px
            cursor: pointer

        &-secundary
            background: #FFD8AB
            padding: 15px
            width: 100%
            border-radius: 5px
            color: #522C1D
            font-size: 22px
            text-decoration: none
            display: block
            box-sizing: border-box
            text-align: center


    .line
        width: 100%
        height: 2px
        background: white
        margin: 20px 0 

</style>
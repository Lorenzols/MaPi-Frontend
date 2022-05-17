<template>
    <nav class="nav">
        <NuxtLink class="nav-logo" to="/piscina/analisis">MaPi</NuxtLink>
        <!-- <ul>
            <li>PISCINA</li>
            <li>BLOG</li>
            <li>TIENDA</li>
        </ul> -->
        <secction class="nav-profile" v-if="this.$store.state.auth.loggedIn">
            <div class="nav-profile-img" v-on:click="submenu()">
                <img src="~/assets/img/layout/cuenta.png" alt="Cuenta">
            </div>
            <ul class="nav-profile-list" :class=" isSubMenu ? 'submenuon' : 'submenuoff'">
                <li class="nav-profile-list-name">
                    <h2>{{this.$store.state.auth.user.firstName}}</h2>
                </li>
                <li class="nav-profile-list-email">
                    <h2>{{this.$store.state.auth.user.email}}</h2>
                </li>
                <li class="nav-profile-list-edit">
                    <div>
                        <NuxtLink to="/piscina/configuracion">Editar perfil</NuxtLink>
                    </div>
                </li>
                <li class="nav-profile-list-logout">
                    <div @click="logout">
                        <h2>Cerrar sesión</h2>
                    </div>
                </li>
            </ul>
        </secction>
        <section v-else>
            <NuxtLink class="nav-signin" to="/signin">Iniciar sesión</NuxtLink>
        </section>
        
  </nav>
</template>

<script>
export default {
    data(){
        return{
            isSubMenu: false
        }
    },
    methods: {
        async logout() {
            await this.$auth.logout();  // this method will logout the user and make token to false on the local storage of the user browser
            this.$router.push("/signin")
        },
        submenu(){
            this.isSubMenu = !this.isSubMenu
        }
    }
}
</script>

<style lang="sass" scoped>
    $color-primary: #EA7F54
    .submenuon
        display: flex !important
    
    .submenuoff
        display: none !important

    .nav
        background-color: $color-primary
        height: 48px
        display: flex
        align-items: center
        color: white
        justify-content: space-between
        padding: 0 25px
        z-index: 2
        position: relative

        &-logo
            font-size: 24px
            font-weight: normal
            text-decoration: none

        &-signin
            margin: 0
            font-size: 22px
            cursor: pointer
            text-decoration: none

        ul
            display: flex
            li
                list-style: none
                margin: 0 30px
                font-size: 18px

        &-profile
            &-img
                width: 100%
                cursor: pointer
                img
                    width: 40px
                    height: 40px

            &-list
                display: flex
                flex-direction: column
                background-color: #EA7F54 
                position: absolute
                right: 0
                top: 48px
                padding: 20px 0px
                border-bottom-left-radius: 5px
                border-bottom-right-radius: 5px
                gap: 10px

                li
                    list-style: none

                &-name
                    text-align: center

                &-edit
                    div
                        a
                            width: 100%
                            text-decoration: none
                            border: 2px solid white
                            padding: 5px 10px
                            text-align: center
                            border-radius: 5px
                            cursor: pointer
                            display: block
                            box-sizing: border-box
                &-logout
                    div
                        width: 100%
                        text-decoration: none
                        border: 2px solid white
                        padding: 5px 10px
                        text-align: center
                        border-radius: 5px
                        cursor: pointer
                        display: block
                        box-sizing: border-box
                
                

            
            
            
</style>
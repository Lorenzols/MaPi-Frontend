<template>
    <div>
        <h1>hola</h1>
    </div>
</template>

<script>
export default {
    middleware: "isAuthenticated",
    computed: {
      getUserInfo() {
          
        return this.$store.getters.getUserInfo;
      }
    },
    mounted(){
        console.log("aa", this.$store.state.auth.loggedIn)
        console.log("Getter", this.$store.getters['session/isAuthenticated'])
    }
  };
</script>

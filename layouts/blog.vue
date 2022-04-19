<template>
    <section>
        <nav-primary/>
        <section class="container">
            <Nuxt />
            <nav-blog-secundary/>
        </section>
        <footer-primary/>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="sass">
    *
        margin: 0
        padding: 0

    .container
        display: flex
</style>
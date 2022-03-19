<template>
  <section class="container-blog">
      <h1>Dentro de la page BLOG</h1>
      <pages-blog-filter/>
      <pages-blog-question/>
      <pages-blog-question/>
      <pages-blog-question/>
  </section>
</template>

<script>
export default {
    layout: 'blog'
}
</script>

<style lang="sass" scoped>
    $color-dark: #522C1D

    .container-blog
        width: 100%
        background-color: $color-dark
        padding: 30px 100px
</style>
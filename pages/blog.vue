<template>
  <section class="container-blog">
      <hgroup>
          <h1>BLOG</h1>
      </hgroup>
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

        hgroup
            text-align: center
            h1
                font-size: 36px
                color: white
                margin: 20px 0
</style>
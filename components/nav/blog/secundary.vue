<template>
  <section class="container-nav">
      <basic-search />

      <section class="container-nav-button">
        <h1>Publicar post</h1>
        <h1>Publicar pregunta</h1>
      </section>

      <section class="new-post">
        <hgroup class="title-new-post-question">
          <h1>Nuevos post</h1>
        </hgroup>
        <pages-blog-newPostQuestion />
        <!-- <pages-blog-newPostQuestion /> -->
      </section>

      <section class="new-question ">
        <hgroup class="title-new-post-question">
          <h1>Nuevas preguntas</h1>
        </hgroup>
        <pages-blog-newPostQuestion />
        <pages-blog-newPostQuestion />
      </section>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
    $color-secundary: #8C4224
    $color-text-primary: white

    .container-nav
        width: 300px
        height: calc( 100vh - 48px * 2)
        background-color: $color-secundary
        padding: 0 15px
        box-sizing: border-box
        position: relative

        &-button
          position: fixed
          top: 250px

          h1
            font-size: 18px
            margin: 8px 0
            color: $color-text-primary
            font-weight: normal

    .title-new-post-question
      color: $color-text-primary
      font-size: 18px
      border-bottom: 2px solid white

      h1
        margin: 4px 0

    .new-post
      position: fixed
      top: 500px
      width: 222px

    .new-question
      position: fixed
      top: 700px
      width: 222px

</style>
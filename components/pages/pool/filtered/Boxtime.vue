<template>
  <section class="c-filtered-schedule-box">
      <div class="c-filtered-schedule-box-close" v-if="close">
          <img src="~/assets/img/piscina/filtered/close.png" alt="" width="100%">
      </div>
    <div class="c-primary">
        <div class="c-filtered-schedule-box-container">
        <div class="c-filtered-schedule-box-container-time">
            <h2>Hora de encendido</h2>
        </div>
        <div class="c-filtered-schedule-box-container-worth">
            <input type="text" placeholder="00:00">
            <h2>h</h2>
        </div>
        </div>

        <div class="c-filtered-schedule-box-container">
        <div class="c-filtered-schedule-box-container-time">
            <h2>Hora de apagado</h2>
        </div>
        <div class="c-filtered-schedule-box-container-worth">
            <input type="text" placeholder="04:00">
            <h2>h</h2>
        </div>
        </div>
    </div>

    <ul class="c-filtered-schedule-box-days">
        <li>
            <h2>Lunes</h2>
            <basic-button-checkbox />
        </li>
        <li>
            <h2>Martes</h2>
            <basic-button-checkbox />
        </li>
        <li>
            <h2>Miercoles</h2>
            <basic-button-checkbox />
        </li>
        <li>
            <h2>Jueves</h2>
            <basic-button-checkbox />
        </li>
        <li>
            <h2>Viernes</h2>
            <basic-button-checkbox />
        </li>
        <li>
            <h2>Sabado</h2>
            <basic-button-checkbox />
        </li>
        <li>
            <h2>Domingo</h2>
            <basic-button-checkbox />
        </li>
    </ul>
</section>
</template>

<script>
export default {
    props:{
        close:{
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="sass" scoped>

    .c-filtered-schedule-box
        width: 100%
        border: 2px solid #EA7F54
        box-sizing: border-box
        padding: 20px 60px
        position: relative

        &-close
            position: absolute
            width: 14px
            top: 8px
            right: 12px
            cursor: pointer

        .c-primary
            display: flex
            justify-content: space-between

        &-container
            width: 40%
            border: 2px solid #844213
            display: flex
            box-sizing: border-box
            &-time
                padding: 5px 0
                text-align: center
                border-right: 2px solid #844213
                width: 60%
            &-worth
                width: 40%
                padding: 5px 0
                display: flex
                justify-content: center
                input
                    background-color: #522C1D
                    outline: none
                    width: 50px
                    display: flex
                    align-items: center
                    border: none
                    padding-top: 4px
                    &::placeholder
                        font-size: 18px
                        color: white
        &-days
            display: flex
            gap: 20px
            margin-top: 20px

            li
                list-style: none
                h2
                    margin-bottom: 5px
</style>
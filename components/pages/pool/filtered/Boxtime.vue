<template>
  <section class="c-filtered-schedule-box">
      <div class="c-filtered-schedule-box-close" v-if="close">
          <img src="~/assets/img/piscina/filtered/close.png" alt="" width="100%">
      </div>
    <div class="c-primary-time">
        <div class="c-filtered-schedule-box-container">
        <div class="c-filtered-schedule-box-container-time">
            <h2>Hora de encendido</h2>
        </div>
        <div class="c-filtered-schedule-box-container-worth">
            <input type="time" :value="timeonI" name="timeon" id="timeon" @change="timeonf('timeon')">
        </div>
        </div>

        <div class="c-filtered-schedule-box-container">
        <div class="c-filtered-schedule-box-container-time">
            <h2>Hora de apagado</h2>
        </div>
        <div class="c-filtered-schedule-box-container-worth">
            <input type="time" :value="timeoffI" name="timeoff" id="timeoff" @change="timeofff('timeoff')">
        </div>
        </div>
    </div>

    <ul class="c-filtered-schedule-box-days">
        <li>
            <h2>Lunes</h2>
            <basic-button-checkbox  @change.native="interructordays('monday')" nombre="monday" idp="monday" :checkedp="bottonDays.monday" />
        </li>
        <li>
            <h2>Martes</h2>
            <basic-button-checkbox  @change.native="interructordays('tuesday')" nombre="tuesday" idp="tuesday" :checkedp="bottonDays.tuesday" />
        </li>
        <li>
            <h2>Miercoles</h2>
            <basic-button-checkbox @change.native="interructordays('wednesday')" nombre="wednesday" idp="wednesday" :checkedp="bottonDays.wednesday"/>
        </li>
        <li>
            <h2>Jueves</h2>
            <basic-button-checkbox @change.native="interructordays('thursday')" nombre="thursday" idp="thursday" :checkedp="bottonDays.thursday"/>
        </li>
        <li>
            <h2>Viernes</h2>
            <basic-button-checkbox @change.native="interructordays('friday')" nombre="friday" idp="friday" :checkedp="bottonDays.friday"/>
        </li>
        <li>
            <h2>Sabado</h2>
            <basic-button-checkbox @change.native="interructordays('saturday')" nombre="saturday" idp="saturday" :checkedp="bottonDays.saturday"/>
        </li>
        <li>
            <h2>Domingo</h2>
            <basic-button-checkbox @change.native="interructordays('sunday')" nombre="sunday" idp="sunday" :checkedp="bottonDays.sunday"/>
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
        },
        timeonI:{
            type: String,
            default: false
        },
        timeoffI:{
            type: String,
            default: false
        },
        bottonDays: {
            type: Object,
            default: false
        }
    },
    data(){
        return{
        }
    },
    methods:{
        async timeonf(id){
        let hora = document.getElementById(id).value
        await this.$axios.patch('pool/filtering/on', {"time": hora})
        console.log("HORA:", hora)
        },
        async timeofff(id){
        let hora = document.getElementById(id).value
        await this.$axios.patch('pool/filtering/off', {"time": hora})
        console.log("HORA:", hora)
        },
        async interructordays(nombre){
            let check = document.getElementById(nombre).checked
            console.log("Pulsado", check, nombre)
            // this.dataConfig.filtering_auto = check
            await this.$axios.patch(`pool/filtering/days/${nombre}/${check}`)
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
        @media (max-width: 767px)
            padding: 20px 30px
            padding-top: 10px

        &-close
            position: absolute
            width: 14px
            top: 8px
            right: 12px
            cursor: pointer

        .c-primary-time
            display: flex
            justify-content: space-between
            @media (max-width: 767px)
                display: block

        &-container
            width: 40%
            border: 2px solid #844213
            display: flex
            box-sizing: border-box
            @media (max-width: 767px)
                width: 100%
                margin-top: 20px
            &-time
                padding: 10px 0
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
                    display: flex
                    align-items: center
                    border: none
                    padding-top: 4px
                    font-size: 18px
        &-days
            display: flex
            gap: 20px
            margin-top: 20px
            flex-wrap: wrap

            li
                list-style: none
                h2
                    margin-bottom: 5px
</style>
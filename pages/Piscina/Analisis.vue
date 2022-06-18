<template>
    <section class="c-analisis" >
        <section class="temperatures">
            <section >
                <basic-climate-city sizeimg="50px" :temApi="temp.apiweather"/>
            </section>
            <section class="c-climate">
                <section class="c-climate">
                    <div class="c-climate-image">
                        <img src="~/assets/img/piscina/palm.png" alt="Climate" width="100%" height="100%">
                    </div>
                    <div class="c-climate-text">
                        <h2>{{temp.tAmbient}} ºC</h2>
                    </div>
                </section>
                <section class="c-climate">
                    <div class="c-climate-image">
                        <img src="~/assets/img/piscina/piscina.png" alt="Climate" width="100%" height="100%">
                    </div>
                    <div class="c-climate-text">
                        <h2>{{temp.tPool}} ºC</h2>
                    </div>
                </section>
            </section>
         </section>
        <hgroup class="title">
                <h1>ANALISIS DEL AGUA</h1>
        </hgroup>
            <section class="c-data">
                <section class="c-data-fact">
                    <section class="c-data-fact-cell">
                        <div class="c-circle">
                            <div class="c-circle-fact circle-color-ph">
                                <h1 v-if="data">{{data[0].value}}</h1>
                                <h1 v-else>0</h1>
                            </div>
                            <h2 v-if="data">{{data[0].name}}</h2>
                            <h2 v-else>Sin datos</h2>
                        </div>
                        <div class="report">
                            <div class="report-lyrics">
                                <h2>{{data[0].status}}</h2>
                            </div>
                            <div class="report-number">
                                <h2>{{data[0].diference}} {{data[0].name}}</h2>
                            </div>
                        </div>
                        <div class="pour">
                            <h2>{{data[0].dosage}} ml</h2>
                        </div> 
                    </section>
                    <section class="c-data-fact-cell">
                        <div class="c-circle">
                            <div class="c-circle-fact circle-color-ppm">
                                <h1 v-if="data">{{data[1].value}}</h1>
                                <h1 v-else>0</h1>
                            </div>
                            <h2 v-if="data">{{data[1].name}}</h2>
                            <h2 v-else>Sin datos</h2>
                        </div>

                        <div class="report">
                            <div class="report-lyrics">
                                <h2>{{data[1].status}}</h2>
                            </div>
                            <div class="report-number">
                                <h2>{{data[1].diference}} {{data[1].name}}</h2>
                            </div>
                        </div>

                        <div class="pour">
                            <h2>{{data[1].dosage}} ml</h2>
                        </div> 
                    </section>
                </section>                
            </section>

    </section>
</template>

<script>
export default {
    middleware: "isAuthenticated",
    computed: {
        isNavSecundary() {
            return this.$store.state.navSecundary.isNavSecundary
        }
    },
    async asyncData(ctx){
        const result = await ctx.$axios.get("pool/analysis/")
        const temp = await ctx.$axios.get("pool/weather")
        
        return{
            data: result.data,
            temp: temp.data
        }
    }
}
</script>

<style lang="sass" scoped>
    .c-analisis
        // height: calc( 100vh - 48px )
        height: 100%
        display: flex
        flex-direction: column
        position: relative
        @media (max-width: 767px)
            margin-bottom: 40px

    .temperatures
        display: flex
        justify-content: space-between
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 15%
        padding: 40px 90px
        box-sizing: border-box
        @media (max-width: 767px)
            top: 80px
            height: fit-content
            padding: 10px
            

    .c-data
        width: 100%
        height: 100%
        display: flex
        align-items: center
        justify-content: center
        @media (max-width: 767px)
            margin-top: 140px

        &-title
            text-align: center
            margin: 40px 0
            h1
                font-size: 36px

        &-fact
            display: flex
            width: 50%
            justify-content: space-evenly
            @media (max-width: 767px)
                display: block
                width: fit-content
            &-cell
                width: 300px
                margin: 0 20px
                @media (max-width: 767px)
                    margin: 0
                    margin-top: 40px
                    width: 100%

                .c-circle
                    .circle-color-ph
                        border-color: #D03DB0
                    .circle-color-ppm
                        border-color: #2A6F9C
                    &-fact
                        width: 200px
                        height: 200px
                        border: 5px solid
                        border-radius: 50%
                        display: flex
                        align-items: center
                        justify-content: center
                        margin: 0 auto
                        @media (max-width: 767px)
                            width: 160px
                            height: 160px

                        h1
                            font-size: 48px

                    h2
                        text-align: center
                        margin-top: 10px
                
                .report
                    display: flex
                    border: 2px solid #844213
                    margin: 20px 0
                    &-lyrics
                        width: 50%
                        border-right: 2px solid #844213
                        padding: 5px 10px
                        display: flex
                        align-items: center
                        justify-content: center
                    &-number
                        width: 50%
                        padding: 5px 10px
                        display: flex
                        align-items: center
                        justify-content: center

                .pour
                    border: 2px solid #844213
                    text-align: center
                    padding: 5px 0
    .c-climate
        display: flex
        margin: 10px 20px
        @media (max-width: 767px)
            margin: 2px

        &-image
            width: 50px
            height: 50px

        &-text
            display: flex
            align-items: center
            margin: 0 5px
    .title
        width: 100%
        text-align: center
        position: absolute
        top: 40px   


</style>
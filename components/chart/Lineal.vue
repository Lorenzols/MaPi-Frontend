<template>
    <section>
        <section>
            <section class="monthChange">
                <button @click="cambiarMes()"><</button>
                <h1>{{letraMes}}</h1>
                <button @click="cambiarMes(1)">></button>
            </section>
        </section>
        <section class="line-chart">
            <canvas :id="idChart" class="line-chart-canvas"></canvas>
            <div class="fondo-line-chart"></div>
        </section>
    </section>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
    data(){
        return{
            dias: [],
            mes: '',
            letraMes: '',
            chart1: {}
        }
    },
    props: {
        idChart:{
            type: String,
            require: true
        }
    },
    computed: {

    },
    methods: {

        cambiarMes(onOff){
            if(onOff == 1){
                this.mes = this.mes + 1
            }else{
                this.mes = this.mes - 1
            }
            
            let dias = []

            let anno = new Date().getFullYear()
            this.letraMes = new Date(anno, this.mes).toLocaleString("es", { month: "long" })

            let diasMes = new Date(2022, this.mes, 0).getDate()
            console.log('Dias de un mes: ', diasMes)

            for(let i = 0; i < diasMes; i++){
                dias.push(i)
            }
            this.chart1.data.labels = dias

            this.chart1.update()
        },
        grafica(){
            
        }
    },
    mounted() {
        console.log("ID: ",this.idChart)
        let mes = new Date().getMonth()
        let anno = new Date().getFullYear()

        let dias = []

        let letraMes = new Date(anno, mes).toLocaleString("es", { month: "long" }) // Muestra el mes en letra
        this.letraMes = letraMes
        console.log('Año', anno)
        console.log('Mes: ',mes)
        console.log('Fecha ', letraMes)


        let diasMes = new Date(2022, 2, 0).getDate()
        console.log('Dias del un mes: ', diasMes)

        for(let i = 1; i <= diasMes; i++){
            dias.push(i)
        }

        var ctx = document.getElementById(this.idChart)
        this.chart1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dias,
            datasets: [{
                label: 'pH',
                data: [6.8, 7.2, 7.2, 6.9, 7.6, 7.2],
                backgroundColor: '#D03DB0',
                borderColor: '#D03DB0',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index',
            },
            scales: {
                y: {
                    min: 6.6,
                    max: 8.2,
                    ticks: {
                        stepSize: 0.4,
                        color: '#FFE6CF'
                    }
                },
                x: {
                    ticks: {
                        color: '#FFE6CF'
                    }
                }
            },
            elements: {
                line:{
                    tension: 0.4
                }
            },
            plugins:{
                legend:{
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        color: '#FFE6CF',
                        font: {
                            size: 18
                        },
                        boxWidth: 8
                    }
                }
            }
        }
        })
    }
}
</script>

<style lang="sass" scoped>
.line-chart
    width: 40%
    height: 300px
    border-radius: 4px
    position: relative
    z-index: 1
    @media (max-width: 767px)
        width: 100%

.line-chart-canvas   
    // z-index: -1

.fondo-line-chart
    position: absolute
    top: 7px
    left: 30px
    right: 23px
    height: 223px
    background-color: #FFE6CF
    z-index: -1
    border: 3px solid #EA7F54
    border-radius: 4px

.monthChange
    display: flex
    button
        padding: 0 px
    h1
        font-size: 20px
        color: white

</style>
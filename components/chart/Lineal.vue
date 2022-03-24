<template>
    <section class="line-chart">
        <canvas id="myChart" class="line-chart-canvas"></canvas>
        <div class="fondo-line-chart"></div>
    </section>
</template>

<script>
import Chart from 'chart.js/auto'

export default {

    computed: {
        rboxChart: function (){
            return this.boxChart()
        }
    },
    methods: {
        boxChart(){
            let chart = document.getElementById("myChart")
            console.log(chart.clientWidth)
        }
    },
    mounted() {
        var ctx = document.getElementById('myChart')
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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

</style>
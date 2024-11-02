<template>
    <div class="chart-container">
      <h4>Number of clicks</h4>
      <line-chart :chart-data="chartData" :options="chartOptions" class="chart"></line-chart>
    </div>
  </template>  

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js'

// Register the required components for Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler)

export default {
  components: {
    'line-chart': Line
  },
  data() {
    return {
      chartData: {
        labels: ['med.trade', 'med.trade', 'med.trade', 'med.trade', 'med.trade'],
        datasets: [
          {
            label: 'Solana',
            backgroundColor: 'rgba(128, 0, 128, 0.1)', // Light purple area fill
            borderColor: '#800080', // Purple line color
            data: [10, 90, 50, 40, 60], // Sample data points for the chart
            fill: true, // Fill under the line
            tension: 0.4 // Smooth line curve
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false, // Disable aspect ratio to allow the chart to resize based on the container
        scales: {
          y: {
            beginAtZero: true // Ensure Y-axis starts at zero
          }
        },
        plugins: {
          legend: {
            display: true, // Show legend
            position: 'top' // Position legend at the top
          },
          tooltip: {
            enabled: true // Enable tooltips for data points
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  width: 100%;
  max-width: 800px; /* Wider chart */
  /* height: 200px; Fixed height */
  position: relative;
  background: white;
  margin: 25px;
}
h4{
    font-size: 25px;
    border-bottom: 1px solid;
    padding: 10px;
}

.chart {
  width: 100%; /* Full width */
  height: 100%; /* Fill the container height */
}

/* Ensure the canvas inside the chart does not increase height */
.chart-container canvas {
  height: 400px !important; /* Fixed height for the canvas */
  width: 100% !important;   /* Ensure full width */
}
@media screen and (max-width:425px) {
    .chart-container{
        width:90%;
    }

    
}
</style>
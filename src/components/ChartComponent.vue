<template>
    <h2>Chart Js</h2>
    <div>
    <line-chart :chart-data="datacollection" :chart-options="options"></line-chart>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs/legacy';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler);

export default {
  components: {
    LineChart: Line
  },
  data() {
    return {
      datacollection: {
        labels: ['med.trade', 'med.trade', 'med.trade', 'med.trade', 'med.trade'],
        datasets: [
          {
            label: 'Solana',
            backgroundColor: 'rgba(155, 89, 182, 0.2)',
            borderColor: '#8e44ad',
            pointBackgroundColor: '#8e44ad',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#8e44ad',
            fill: true,
            tension: 0.4,
            data: [30, 90, 50, 40, 45] // Replace with actual data
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `Highest Click: ${tooltipItem.formattedValue}`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of clicks'
            }
          }
        }
      }
    };
  }
};



</script>

<style>
.chart-container {
  max-width: 800px;
  margin: 0 auto;
}

</style>
<template>
  <apexchart width="100%" height="250" type="radialBar" :options="chartOptions" :series="series" />
  <div class="mt-4 space-y-2">
    <div class="flex justify-between items-center text-sm" v-for="(item, index) in stats" :key="index">
      <div class="flex items-center gap-2">
        <span :style="{ backgroundColor: colors[index] }" class="w-2 h-2 rounded-full"></span>
        <span class="text-gray-600">Income</span>
        <span :class="item.percentage > 0 ? 'text-green-500' : 'text-red-500'"> {{ item.percentage > 0 ? "↗" : "↘" }} {{ item.percentage }}% </span>
      </div>
      <div class="text-gray-800 font-semibold">${{ item.amount.toLocaleString() }}</div>
    </div>
  </div>
</template>

<script setup>
const series = [43.29, 36.16, 40.22, 25.53];

const chartOptions = {
  chart: {
    type: "radialBar",
    offsetY: 0,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        margin: 10,
        size: "60%",
      },
      track: {
        background: "#f0f0f0",
        strokeWidth: "97%",
        margin: 5,
      },
      dataLabels: {
        show: false,
      },
    },
  },
  labels: ["Income A", "Income B", "Income C", "Income D"],
  colors: ["#3B82F6", "#10B981", "#EF4444", "#F97316"],
};

const stats = [
  { percentage: 43.29, amount: 161466.24 },
  { percentage: 36.16, amount: 56411.33 },
  { percentage: 40.22, amount: 81981.22 },
  { percentage: 25.53, amount: 12432.51 },
];

const colors = ["#3B82F6", "#10B981", "#EF4444", "#F97316"];
</script>

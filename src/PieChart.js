import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function PieChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartConfig = {
      type: 'pie',
      data: {
        labels: data.map((item) => item.label),
        datasets: [
          {
            data: data.map((item) => item.value),
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
            ],
          },
        ],
      },
    };

    const chartInstance = new Chart(chartRef.current, chartConfig);

    return () => {
      chartInstance.destroy(); // Cleanup the chart instance when the component unmounts
    };
  }, [data]);

  return (
    <div>
      <h1>Pie Chart</h1>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

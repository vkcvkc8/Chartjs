import React from 'react';
import PieChart from './PieChart';

export default function App() {
  const chartData = [
    { label: 'Label 1', value: 20 },
    { label: 'Label 2', value: 30 },
    { label: 'Label 3', value: 50 },
  ];

  return (
    <div>
      <h1>Hello Chart!</h1>
      <PieChart data={chartData} />
    </div>
  );
}

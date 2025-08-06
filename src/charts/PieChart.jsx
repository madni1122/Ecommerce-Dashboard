import React from 'react';
import { Chart } from 'react-google-charts';
import { useTheme } from '@mui/material/styles';

export const data = [
  ['Task', 'Hours per Day'],
  ['Work', 11],
  ['Eat', 2],
  ['Commute', 2],
  ['Watch TV', 2],
  ['Sleep', 7],
];

export default function PieChart() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const options = {
    title: 'My Daily Activities',
    pieHole: 0.4,
    is3D: false,
    colors: [
      'rgb(53, 138, 148)',
      'rgb(37, 11, 165)',
      'rgb(40, 34, 70)',
      '#f39f2a',
      '#188310',
    ],
    backgroundColor: 'transparent', // Make chart background transparent
    titleTextStyle: {
      color: isDark ? '#fff' : '#000',
      fontSize: 16,
    },
    legend: {
      textStyle: {
        color: isDark ? '#ccc' : '#333',
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: isDark ? '#121212' : '#fff',
      }}
    >
      <Chart
        chartType="PieChart"
        width="100%"
        height="300px"
        data={data}
        options={options}
      />
    </div>
  );
}

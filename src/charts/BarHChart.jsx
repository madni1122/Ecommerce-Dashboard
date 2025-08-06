import React, { useContext } from 'react';
import { Chart } from 'react-google-charts';
import { MyContext } from '../context/DrawerState'; // where isDark is stored

export const data = [
  ['City', '2010 Population', '2000 Population'],
  ['New York City, NY', 8175000, 8008000],
  ['Los Angeles, CA', 3792000, 3694000],
  ['Chicago, IL', 2695000, 2896000],
  ['Houston, TX', 2099000, 1953000],
  ['Philadelphia, PA', 1526000, 1517000],
];

export default function BarHChart() {
  const { isDark } = useContext(MyContext);

  const options = {
    title: 'Population of Largest U.S. Cities',
    chartArea: { width: '47%' },
    backgroundColor: isDark ? '#2c2c3e' : '#fff',
    titleTextStyle: {
      color: isDark ? '#ccc' : '#222',
    },
    hAxis: {
      title: 'Total Population',
      minValue: 0,
      textStyle: {
        color: isDark ? '#bbb' : '#000',
      },
      titleTextStyle: {
        color: isDark ? '#ccc' : '#000',
      },
      gridlines: {
        color: isDark ? '#333' : '#ccc',
      },
    },
    vAxis: {
      title: 'City',
      textStyle: {
        color: isDark ? '#bbb' : '#000',
      },
      titleTextStyle: {
        color: isDark ? '#ccc' : '#000',
      },
    },
    legend: {
      textStyle: {
        color: isDark ? '#aaa' : '#000',
      },
    },
    colors: isDark
      ? ['#4db6ac', '#9575cd']
      : ['rgb(53, 138, 148)', 'rgb(40, 34, 70)'],
  };

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="281px"
      data={data}
      options={options}
    />
  );
}

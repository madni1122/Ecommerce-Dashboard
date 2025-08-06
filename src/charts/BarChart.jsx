import { useContext } from 'react';
import { Chart } from 'react-google-charts';
import { MyContext } from '../context/DrawerState';

const data = [
  ['Year', 'Sales', 'Expenses', 'Profit'],
  ['2014', 1000, 400, 300],
  ['2015', 1170, 460, 350],
  ['2016', 660, 1120, 449],
  ['2017', 1030, 540, 800],
  ['2018', 1250, 600, 650],
  ['2019', 1400, 700, 750],
];

function BarChart() {
  const { isDark } = useContext(MyContext);

  const options = {
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses and Profit over the Years',
    },
    colors: ['rgb(53, 138, 148)', 'rgb(37, 11, 165)', '#188310'],
    backgroundColor: isDark ? '#2c2c3e' : '#fff',
    chartArea: {
      backgroundColor: isDark ? '#2c2c3e' : '#fff',
    },
    hAxis: {
      textStyle: {
        color: isDark ? '#ccc' : '#333',
      },
    },
    vAxis: {
      textStyle: {
        color: isDark ? '#ccc' : '#333',
      },
    },
    legend: {
      textStyle: {
        color: isDark ? '#ccc' : '#333',
      },
    },
    titleTextStyle: {
      color: isDark ? '#fff' : '#000',
    },
  };

  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="60vh"
      data={data}
      options={options}
    />
  );
}

export default BarChart;

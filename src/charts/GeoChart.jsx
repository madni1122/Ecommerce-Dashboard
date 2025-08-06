import React, { useContext, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import { MyContext } from '../context/DrawerState'; // adjust path as needed

export const data = [
  ['Country', 'Popularity'],
  ['Germany', 200],
  ['United States', 300],
  ['Brazil', 400],
  ['Canada', 500],
  ['France', 600],
  ['RU', 700],
  ['Pakistan', 600],
  ['Afghanistan', 400],
];

export default function GeoChart() {
  const { isDark } = useContext(MyContext);

  const options = {
    backgroundColor: isDark ? '#2c2c3e' : '#ffffff',
    datalessRegionColor: isDark ? '#3b3b3b' : '#f5f5f5',
    defaultColor: isDark ? '#80cbc4' : '#3366cc',
    colorAxis: {
      colors: ['#4db6ac', '#00897b', '#004d40'],
    },
    tooltip: {
      textStyle: {
        color: isDark ? '#eee' : '#000',
      },
      showColorCode: true,
      isHtml: true,
    },
    enableRegionInteractivity: true,
    // ✅ force tooltip outside iframe
    forceIFrame: false,
  };

  // Dynamically toggle tooltip theme styles
  useEffect(() => {
    const tooltipStyle = document.createElement('style');
    tooltipStyle.innerHTML = `
      div.google-visualization-tooltip {
        background-color: ${isDark ? '#222' : '#fff'} !important;
        color: ${isDark ? '#eee' : '#000'} !important;
        border: 1px solid ${isDark ? '#444' : '#ccc'} !important;
        border-radius: 4px !important;
        font-size: 13px !important;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2) !important;
      }
    `;
    tooltipStyle.setAttribute('data-geo-tooltip-style', 'true');

    // Remove previous style if exists
    const oldStyle = document.querySelector('[data-geo-tooltip-style]');
    if (oldStyle) oldStyle.remove();
    document.head.appendChild(tooltipStyle);

    return () => {
      tooltipStyle.remove();
    };
  }, [isDark]);

  return (
    <Chart
      chartEvents={[
        {
          eventName: 'select',
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log('Selected : ' + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="265px"
      data={data}
      options={options}
    />
  );
}

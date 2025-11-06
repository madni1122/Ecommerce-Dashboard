import { useMediaQuery, useTheme } from "@mui/material";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { fonts } from "../theme/fonts";
import { useContext } from "react";
import { MyContext } from "../context/DrawerState";

// #region Sample data
const data = [
  {
    name: "Jan",
    Profit: 100,
    Loss: 70,
    amt: 2400,
  },
  {
    name: "Feb",
    Profit: 80,
    Loss: 55,
    amt: 2210,
  },
  {
    name: "Mar",
    Profit: 85,
    Loss: 35,
    amt: 2290,
  },
  {
    name: "Apr",
    Profit: 70,
    Loss: 90,
    amt: 2000,
  },
  {
    name: "May",
    Profit: 80,
    Loss: 55,
    amt: 2181,
  },
  {
    name: "Jun",
    Profit: 50,
    Loss: 25,
    amt: 2500,
  },
  {
    name: "Jul",
    Profit: 70,
    Loss: 40,
    amt: 2100,
  },
  {
    name: "Aug",
    Profit: 85,
    Loss: 55,
    amt: 2100,
  },
  {
    name: "Sep",
    Profit: 80,
    Loss: 60,
    amt: 2100,
  },
];

const smallScreenData = data.filter((val, idx) => idx % 2 === 0);

// #endregion
const SimpleBarChart = () => {
  const { isDark } = useContext(MyContext);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:599px)");
  const primaryClr = theme.palette.primary;
  const LabelClr = theme.palette.barChartLabel.main;
  const descriptionTextClr = theme.palette.descriptionText;
  const graphSecondryClr = theme.palette.graphSecondry;

  const getTickStyle = () => ({
    fontFamily: fonts.lato,
    fontWeight: 500,
    fontSize: 12.3,
    fill: isDark ? LabelClr : descriptionTextClr.light,
  });
  return (
    <BarChart
      barGap={4}
      barCategoryGap={21}
      style={{
        width: "100%",
        maxHeight: "204px",
        aspectRatio: 1.618,
        fontFamily: fonts.lato,
        fontWeight: "medium",
        fontSize: "12.5px",
        color: isDark ? LabelClr : descriptionTextClr.light,
        position: "static",
      }}
      responsive
      data={isSmallScreen ? smallScreenData : data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <Bar
        dataKey="Profit"
        fill={primaryClr.main}
        activeBar={<Rectangle fill={primaryClr.dark} />}
        radius={3}
        barSize={21}
      />
      <Bar
        dataKey="Loss"
        fill={graphSecondryClr.main}
        activeBar={<Rectangle fill={graphSecondryClr.dark} />}
        radius={3}
        barSize={21}
      />

      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        tick={getTickStyle()}
      />
      <YAxis
        width="auto"
        axisLine={false}
        tickLine={false}
        tickFormatter={(val, idx) => (idx === 0 ? val : `${val}k`)}
        tick={getTickStyle()}
      />
      {/* <Legend
        verticalAlign="top"
        align="right"
        iconType="circle"
        iconSize={9}
        formatter={(val) => (
          <span
            style={{
              fontSize: 12,
              color: isDark
                ? descriptionTextClr.main
                : descriptionTextClr.light,
            }}
          >
            {val}
          </span>
        )}
      /> */}
    </BarChart>
  );
};

export default SimpleBarChart;

import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Completed", value: 80 },
  { name: "Remaining", value: 20 },
];

export default function DonutChart({ clr }) {
  const COLORS = [clr, "#E4E8EF"];

  return (
    <PieChart width="100%" height="100%">
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={17}
        outerRadius={31}
        paddingAngle={0}
        startAngle={90}
        endAngle={-270}
        animationDuration={800}
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const TotalSales = () => {
  const data = [
    { name: "Direct", value: 38.6 },
    { name: "Affiliate", value: 30.5 },
    { name: "Sponsored", value: 15.4 },
    { name: "E-mail", value: 4.9 },
  ];
  const COLORS = ["#95A4FC", "#1C1C1C", "#BAEDBD", "#B1E3FF"];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow w-[180px] h-[280px]">
      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-200 mb-4">
        Total Sales
      </h3>
      <PieChart width={150} height={150}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={30} // Reduced inner radius
          outerRadius={50} // Reduced outer radius
          fill="#82ca9d"
          paddingAngle={5}
          // label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            borderRadius: "8px",
            padding: "5px",
            color: "white",
            border: "none",
          }}
          labelClassName="text-white"
          wrapperStyle={{
            zIndex: 10,
          }}
          itemStyle={{
            color: "white !important", // Force white color with !important
          }}
          cursorStyle={{ fill: "rgba(0, 0, 0, 0.1)" }}
        />
        <Legend verticalAlign="bottom" height={26} className="" />
      </PieChart>
    </div>
  );
};

export default TotalSales;

/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const TotalSales = () => {
  const data = [
    { name: "Direct", value: 38.6, sales: "$300.56" },
    { name: "Affiliate", value: 30.5, sales: "$135.18" },
    { name: "Sponsored", value: 15.4, sales: "$154.02" },
    { name: "E-mail", value: 4.9, sales: "$48.96" },
  ];

  const COLORS = ["#95A4FC", "#1C1C1C", "#BAEDBD", "#B1E3FF"];

  // Customizing the Legend content
  const CustomLegend = ({ payload }) => {
    return (
      <div className="flex flex-col space-y-2">
        {payload.map((entry, index) => (
          <div
            key={`legend-item-${index}`}
            className="flex items-center space-x-3"
          >
            {/* Color Circle */}
            <div
              style={{ backgroundColor: entry.payload.fill }}
              className="w-3 h-3 rounded-full"
            ></div>

            {/* Name and Sales next to each other */}
            <div className="flex items-center space-x-8">
              <span className="text-sm text-gray-800 dark:text-gray-200">
                {entry.payload.name}:
              </span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {entry.payload.sales}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow w-[210px] h-[330px]">
      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-200 mb-2">
        Total Sales
      </h3>
      <div className="mb-4">
        {/* Adding margin-bottom to create space */}
        <PieChart width={230} height={230}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={50}
            fill="#82ca9d"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
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
          <Legend content={<CustomLegend />} />
        </PieChart>
      </div>
    </div>
  );
};

export default TotalSales;

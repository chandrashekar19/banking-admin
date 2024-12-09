import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarChartData = [
  { month: "Jan", projections: 20, actuals: 15 },
  { month: "Feb", projections: 25, actuals: 22 },
  { month: "Mar", projections: 23, actuals: 18 },
  { month: "Apr", projections: 28, actuals: 26 },
  { month: "May", projections: 20, actuals: 15 },
  { month: "Jun", projections: 25, actuals: 23 },
];

const RevenueByLocationBarChart = () => {
  return (
    <div className="w-full h-[248px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
        Projections vs Actuals
      </h3>
      <ResponsiveContainer>
        <BarChart data={BarChartData}>
          {/* Add grid for better visualization */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tick={{ fill: "#A0AEC0" }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tickFormatter={(value) => `${value}M`}
            tick={{ fill: "#A0AEC0" }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip formatter={(value) => `${value}M`} />
          {/* Actuals Bar */}
          <Bar
            dataKey="actuals"
            stackId="a"
            fill="#5785A6" // Darker blue color
            barSize={30}
          />
          {/* Projections Bar */}
          <Bar
            dataKey="projections"
            stackId="a"
            fill="#A8C5DA" // Light blue color
            barSize={5}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueByLocationBarChart;

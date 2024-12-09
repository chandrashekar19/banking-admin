import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const FinancialChartData = [
  { month: "Jan", currentWeek: 10000, previousWeek: 12000 },
  { month: "Feb", currentWeek: 15000, previousWeek: 20000 },
  { month: "Mar", currentWeek: 18000, previousWeek: 22000 },
  { month: "Apr", currentWeek: 25000, previousWeek: 23000 },
  { month: "May", currentWeek: 27000, previousWeek: 26000 },
  { month: "Jun", currentWeek: 30000, previousWeek: 28000 },
];

const FinancialChart = () => {
  return (
    <div className="w-[662px] h-[318px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
        Revenue
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={FinancialChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `${value / 1000}M`} />
          <Tooltip formatter={(value) => `$${value}`} />
          {/* Legend positioned at the top */}
          <Legend
            verticalAlign="top"
            height={36}
            layout="horizontal"
            align="center"
            formatter={(value) =>
              value === "currentWeek"
                ? "Current Week ($58,211)"
                : "Previous Week ($68,768)"
            }
          />
          <Line
            type="monotone"
            dataKey="currentWeek"
            stroke="#000"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="previousWeek"
            stroke="#82ca9d"
            strokeWidth={2}
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinancialChart;

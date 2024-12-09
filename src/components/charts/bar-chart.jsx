import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BarChartData } from "../../constants";

const RevenueByLocationBarChart = () => {
  return (
    <div className="w-full h-[248px]  dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-l font-semibold text-gray-900 dark:text-gray-200 mb-1">
        Projections vs Actuals
      </h3>
      <ResponsiveContainer>
        <BarChart data={BarChartData}>
          <CartesianGrid />
          <XAxis dataKey="location" />
          <YAxis tickFormatter={(value) => `${value}M`} />
          <Tooltip />
          <Bar dataKey="revenue" fill="#A8C5DA" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueByLocationBarChart;

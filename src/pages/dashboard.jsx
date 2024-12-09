import { TrendingUp } from "lucide-react";
import {
  FinancialChart,
  GeographicalChart,
  MetricsCard,
  RevenueByLocationBarChart,
  TopSellingProducts,
  TotalSales,
} from "../components";
import { metricsData } from "../constants";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
        {/* Dashboard Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
          Ecommerce
        </h2>

        {/* Top Section: Metrics Cards and Revenue Bar Chart */}
        <div className="flex flex-wrap lg:flex-nowrap gap-4 mb-4">
          {/* Metrics Cards */}
          <div className="flex flex-wrap gap-3 lg:w-1/2">
            {metricsData.map((metric) => (
              <div key={metric.id} className="flex-1 min-w-[180px]">
                <MetricsCard
                  title={metric.title}
                  value={metric.value}
                  change={metric.change}
                  icon={<TrendingUp className="text-black dark:text-white" />}
                  backgroundColor={metric.backgroundColor}
                />
              </div>
            ))}
          </div>

          {/* Revenue by Location Bar Chart */}
          <div className="flex-1">
            <RevenueByLocationBarChart />
          </div>
        </div>

        {/* Middle Section: Financial and Geographical Charts */}
        <div className="flex gap-9">
          <FinancialChart />
          <GeographicalChart />
        </div>
        <br />
        {/* Bottom Section: Top Selling Products and Total Sales */}
        <div className="flex gap-9">
          <TopSellingProducts />
          <TotalSales />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

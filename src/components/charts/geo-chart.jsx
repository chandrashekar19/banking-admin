import { Chart } from "react-google-charts";

const GeographicalChart = () => {
  const data = [
    ["Latitude", "Longitude", "City", "Revenue"],
    [40.7128, -74.006, "New York", 72000],
    [37.7749, -122.4194, "San Francisco", 39000],
    [-33.8688, 151.2093, "Sydney", 25000],
    [1.3521, 103.8198, "Singapore", 61000],
  ];

  const options = {
    region: "world",
    displayMode: "markers",
    colorAxis: { colors: ["blue", "green", "orange", "red"] },
    sizeAxis: { minValue: 0, maxSize: 4 },
    backgroundColor: "transparent",
    datalessRegionColor: "#eaeaea",
    tooltip: { isHtml: false }, // Simpler tooltip
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200 mb-4">
        Revenue by Location
      </h3>
      <Chart
        chartType="GeoChart"
        data={data}
        options={options}
        width="100%"
        height="150px"
      />
      <div className="mt-6">
        <ul className="space-y-2 dark:text-white">
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-1 bg-blue-500"></div> {/* Line fill */}
              <span>New York</span>
            </div>
            <span>72K</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-1 bg-green-500"></div> {/* Line fill */}
              <span>San Francisco</span>
            </div>
            <span>39K</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-1 bg-orange-500"></div> {/* Line fill */}
              <span>Sydney</span>
            </div>
            <span>25K</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-1 bg-red-500"></div> {/* Line fill */}
              <span>Singapore</span>
            </div>
            <span>61K</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GeographicalChart;

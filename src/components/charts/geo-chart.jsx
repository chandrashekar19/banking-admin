import { Chart } from "react-google-charts";

const GeographicalChart = () => {
  const data = [
    ["City", "Revenue"],
    ["New York", 72000],
    ["San Francisco", 39000],
    ["Sydney", 25000],
    ["Singapore", 61000],
  ];

  const options = {
    region: "world",
    displayMode: "markers",
    colorAxis: { colors: ["#c6e2ff", "#003366"] }, // Light to dark gradient
    sizeAxis: { minValue: 0, maxSize: 15 }, // Adjust marker sizes
    backgroundColor: "transparent",
    datalessRegionColor: "#eaeaea",
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">
        Revenue by Location
      </h3>
      <Chart
        chartType="GeoChart"
        data={data}
        options={options}
        width="100%"
        height="150px"
      />
      <div>
        <ul className="space-y-1">
          <li className="flex justify-between">
            <span>New York</span>
            <span>72K</span>
          </li>
          <li className="flex justify-between">
            <span>San Francisco</span>
            <span>39K</span>
          </li>
          <li className="flex justify-between">
            <span>Sydney</span>
            <span>25K</span>
          </li>
          <li className="flex justify-between">
            <span>Singapore</span>
            <span>61K</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GeographicalChart;

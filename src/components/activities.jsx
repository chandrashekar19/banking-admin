import { activities } from "../constants";

const Activities = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg">
      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-200 mb-4">
        Activities
      </h3>
      <ul>
        {activities.map((activity) => (
          <li
            key={activity.id}
            className="flex items-start text-sm text-gray-700 dark:text-gray-300 mb-3"
          >
            {/* Icon */}
            <div className="mr-3">
              <img
                src={activity.icon} // Assuming activity.icon holds the icon path
                alt="Activity Icon"
                className="w-6 h-6 object-contain"
              />
            </div>

            {/* Activity Message and Time */}
            <div>
              <span className="font-semibold">{activity.activity}</span>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {activity.time}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;

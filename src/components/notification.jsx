import { notifications } from "../constants";

const Notifications = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg">
      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-200 mb-4">
        Notifications
      </h3>
      <ul>
        {notifications.map((notify) => (
          <li
            key={notify.id}
            className="flex items-start text-sm text-gray-700 dark:text-gray-300 mb-3"
          >
            {/* Icon */}
            <div className="mr-3">
              <img
                src={notify.icon} // Use notify.icon as the source
                alt="Notification Icon"
                className="w-6 h-6 object-contain dark:hidden"
              />
            </div>

            {/* Message and Time */}
            <div>
              <span className="font-semibold">{notify.message}</span>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {notify.time}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;

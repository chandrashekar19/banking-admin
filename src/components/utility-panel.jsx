import Activities from "./activities";
import Contacts from "./contacts";
import Notifications from "./notification";

const UtilityPanel = () => {
  return (
    <div className="flex flex-col bg-gray-100 dark:bg-gray-800">
      <Notifications />
      <Activities />
      <Contacts />
    </div>
  );
};

export default UtilityPanel;

import PropTypes from "prop-types";

const MetricsCard = ({ title, value, change, icon, backgroundColor }) => {
  return (
    <div className={`p-6 ${backgroundColor} text-white rounded-lg shadow-md`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold dark:text-white text-black">
            {title}
          </h3>
          <p className="text-2xl text-black dark:text-white font-bold">
            {value}
          </p>
        </div>
        <div className="mt-4 flex gap-1">
          <p className="text-[12px] dark:text-white text-black">{change}</p>
          <div className="text-3xl">{icon}</div>
        </div>
      </div>
    </div>
  );
};

MetricsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default MetricsCard;

import PropTypes from "prop-types";
import { Folder, Star, Bell, Clock, Search } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Header = ({ darkMode, setDarkMode }) => {
  const location = useLocation();

  // Breadcrumb hierarchy map
  const breadcrumbMap = {
    default: { label: "Default", parent: "Dashboards" },
    orders: { label: "Orders", parent: "E-commerce" },
    ecommerce: { label: "E-commerce", parent: "Dashboards" },
    projects: { label: "Projects", parent: "Dashboards" },
    courses: { label: "Courses", parent: "Dashboards" },
    dashboard: { label: "Dashboard", parent: null },
  };

  // Generate breadcrumbs dynamically
  const generateBreadcrumbs = () => {
    const paths = location.pathname.split("/").filter((path) => path);
    const breadcrumbs = [];

    paths.forEach((path, index) => {
      const isLast = index === paths.length - 1;
      const routePath = `/${paths.slice(0, index + 1).join("/")}`;
      const { label, parent } = breadcrumbMap[path] || {
        label: path.charAt(0).toUpperCase() + path.slice(1),
        parent: null,
      };

      // Add parent breadcrumb if applicable
      if (parent && index === 0) {
        breadcrumbs.push(
          <span key={`${parent}-${index}`} className="flex items-center">
            <span className="text-gray-600 dark:text-gray-400">{parent}</span>
            <span className="mx-2">/</span>
          </span>
        );
      }

      // Add current breadcrumb
      breadcrumbs.push(
        <span key={routePath} className="flex items-center">
          {!isLast ? (
            <Link
              to={routePath}
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              {label}
            </Link>
          ) : (
            <span className="text-gray-900 dark:text-gray-200">{label}</span>
          )}
          {!isLast && <span className="mx-2">/</span>}
        </span>
      );
    });

    return breadcrumbs;
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow flex items-center justify-between px-6 py-4">
      {/* Left Section: Breadcrumbs and Icons */}
      <div className="flex items-center space-x-4">
        <Folder className="w-5 h-5 text-gray-900 dark:text-gray-200" />
        <Star className="w-5 h-5 text-gray-900 dark:text-gray-200" />
        <nav className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
          {generateBreadcrumbs()}
        </nav>
      </div>

      {/* Right Section: Search, Notifications, and Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-2 top-2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 text-gray-800 dark:text-gray-200"
          />
        </div>

        {/* Notification Icon */}
        <button className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
          <Bell className="w-5 h-5 text-gray-900 dark:text-gray-200" />
        </button>

        {/* Folder Icon */}
        <button className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
          <Folder className="w-5 h-5 text-gray-900 dark:text-gray-200" />
        </button>

        {/* Timer Icon */}
        <button className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
          <Clock className="w-5 h-5 text-gray-900 dark:text-gray-200" />
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Header;

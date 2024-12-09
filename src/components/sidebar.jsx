import { NavLink } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Home,
  ClipboardList,
  User,
  Briefcase,
  Layout,
  Globe,
  BookOpen,
} from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };
  return (
    <div className="w-[212px] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 flex flex-col">
      {/* Add your sidebar content here */}
      <div className="flex items-center p-4 gap-2">
        <img
          src="/byewind.svg"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
        Byewind
      </div>
      <br />
      {/* Navigation */}
      <nav className="flex-1">
        {/* Dashboards Header */}
        <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 px-4 py-2">
          Dashboards
        </div>

        {/* Dashboards Section */}
        <NavLink
          to="/"
          className="flex items-center px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Home className="w-4 h-4 mr-2" />
          Default
        </NavLink>

        {/* eCommerce with Submenu */}
        <div>
          <button
            onClick={() => toggleMenu("ecommerce")}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <div className="flex items-center">
              {openMenus.ecommerce ? (
                <ChevronDown className="w-4 h-4 mr-2" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-2" />
              )}
              <Home className="w-4 h-4 mr-2" />
              eCommerce
            </div>
          </button>
          {openMenus.ecommerce && (
            <div className="pl-8">
              <NavLink
                to="/ecommerce/orders"
                className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Orders
              </NavLink>
              <NavLink
                to="/ecommerce/analytics"
                className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Analytics
              </NavLink>
              <NavLink
                to="/ecommerce/reports"
                className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Reports
              </NavLink>
            </div>
          )}
        </div>

        {/* Projects with Submenu */}
        <div>
          <button
            onClick={() => toggleMenu("projects")}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <div className="flex items-center">
              {openMenus.projects ? (
                <ChevronDown className="w-4 h-4 mr-2" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-2" />
              )}
              <ClipboardList className="w-4 h-4 mr-2" />
              Projects
            </div>
          </button>
          {openMenus.projects && (
            <div className="pl-8">
              <NavLink
                to="/projects/current"
                className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Current Projects
              </NavLink>
              <NavLink
                to="/projects/upcoming"
                className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Upcoming Projects
              </NavLink>
              <NavLink
                to="/projects/completed"
                className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Completed Projects
              </NavLink>
            </div>
          )}
        </div>

        {/* Online Courses with Submenu */}
        <div>
          <button
            onClick={() => toggleMenu("onlineCourses")}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <div className="flex items-center">
              {openMenus.onlineCourses ? (
                <ChevronDown className="w-4 h-4 mr-2" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-2" />
              )}
              <BookOpen className="w-4 h-4 mr-2" />
              Online Courses
            </div>
          </button>
          {openMenus.onlineCourses && (
            <div className="pl-8">
              <NavLink
                to="/courses/web-development"
                className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Web Development
              </NavLink>
              <NavLink
                to="/courses/design"
                className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Design
              </NavLink>
              <NavLink
                to="/courses/marketing"
                className="block py-2 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Marketing
              </NavLink>
            </div>
          )}
        </div>

        {/* Pages Header */}
        <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 px-4 py-2">
          Pages
        </div>

        {/* Pages Section */}
        <NavLink
          to="/account"
          className="flex items-center px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <User className="w-4 h-4 mr-2" />
          Account
        </NavLink>
        <NavLink
          to="/corporate"
          className="flex items-center px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Briefcase className="w-4 h-4 mr-2" />
          Corporate
        </NavLink>
        <NavLink
          to="/blog"
          className="flex items-center px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Layout className="w-4 h-4 mr-2" />
          Blog
        </NavLink>
        <NavLink
          to="/social"
          className="flex items-center px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <Globe className="w-4 h-4 mr-2" />
          Social
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

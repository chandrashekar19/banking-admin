import { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { Sidebar, Header } from "./components";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";
import UtilityPanel from "./components/utility-panel";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Memoize dark mode class for optimization
  const themeClass = useMemo(() => (darkMode ? "dark" : ""), [darkMode]);

  return (
    <div className={themeClass}>
      <div className="flex h-screen bg-light dark:bg-dark-bg hide-scrollbar">
        {" "}
        {/* Apply background color */}
        <Router>
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="flex-1 p-6 overflow-y-auto hide-scrollbar">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </main>
          </div>
          <UtilityPanel />
        </Router>
      </div>
    </div>
  );
};

export default App;

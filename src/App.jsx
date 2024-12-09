import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { Sidebar, Header } from "./components";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";
import UtilityPanel from "./components/utility-panel";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <Router>
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="flex-1 p-6 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/ecommerce/orders" element={<Orders />} />
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

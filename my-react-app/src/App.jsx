import React, { useState } from "react";
import "./App.css";
import DashboardView from "./components/DashboardView";
import PortfolioView from "./components/PortfolioView";
import FreelanceView from "./components/FreelanceView";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="app">
      <header className="app-header">
        <h1>FreelanceHub 🌐</h1>
        <nav>
          <button onClick={() => setActiveTab("dashboard")}>Dashboard</button>
          <button onClick={() => setActiveTab("portfolio")}>Portfolio</button>
          <button onClick={() => setActiveTab("freelance")}>Gigs</button>
          <button onClick={() => setActiveTab("login")}>Login</button>
          <button onClick={() => setActiveTab("signup")}>Signup</button>
        </nav>
      </header>

      <main className="app-body">
        {activeTab === "dashboard" && <DashboardView />}
        {activeTab === "portfolio" && <PortfolioView />}
        {activeTab === "freelance" && <FreelanceView />}
        {activeTab === "login" && <Login />}
        {activeTab === "signup" && <Signup />}
      </main>
    </div>
  );
}

export default App;

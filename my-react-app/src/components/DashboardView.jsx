import React from "react";

const DashboardView = () => {
  return (
    <section className="dashboard">
      <h2>Dashboard Overview</h2>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Active Gigs</h3>
          <p>8 ongoing projects</p>
        </div>
        <div className="card">
          <h3>Earnings</h3>
          <p>$1,540 this month</p>
        </div>
        <div className="card">
          <h3>Notifications</h3>
          <ul>
            <li>New project request from DevStudio</li>
            <li>Payment received from PixelPro</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardView;

"use client";

import DashboardList from "./DashboardList";
import LogoutButton from "./LogoutButton";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <DashboardList title="dashboard" />
      <DashboardList title="settings" />

      <LogoutButton />
    </div>
  );
};

export default Dashboard;

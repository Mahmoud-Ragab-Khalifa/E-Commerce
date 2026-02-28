"use client";

import { useTranslations } from "next-intl";
import DashboardList from "./DashboardList";
import { useAuthStore } from "@/store/authStore";

const Dashboard = () => {
  const t = useTranslations("profile");

  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="flex flex-col gap-6">
      <DashboardList title="dashboard" />
      <DashboardList title="settings" />

      <button
        className="mx-5 relative py-2 px-4 rounded-md ring-1 ring-destructive transition-all duration-300 hover:ring-2 focus:ring-2 focus:outline-none group text-center overflow-hidden z-10 cursor-pointer hover:text-white"
        onClick={logout}
      >
        <span>{t("logout")}</span>

        <span className="absolute start-0 top-0 h-full w-0 group-hover:w-full bg-destructive transition-all duration-300 -z-10 group-focus:w-full" />
      </button>
    </div>
  );
};

export default Dashboard;

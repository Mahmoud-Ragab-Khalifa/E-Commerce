import { useTranslations } from "next-intl";
import DashboardList from "./DashboardList";

const Dashboard = () => {
  const t = useTranslations("profile");

  return (
    <div className="flex flex-col gap-6">
      <DashboardList title="dashboard" />
      <DashboardList title="settings" />

      <div className="mx-5 relative py-2 px-4 rounded-md ring-1 ring-destructive transition-all duration-300 hover:ring-2 focus:ring-2 group text-center overflow-hidden z-10 cursor-pointer hover:text-white">
        <span>{t("logout")}</span>

        <span className="absolute start-0 top-0 h-full w-0 group-hover:w-full bg-destructive transition-all duration-300 -z-10" />
      </div>
    </div>
  );
};

export default Dashboard;

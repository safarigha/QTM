import { useEffect, useState } from "react";
import { useAppDispatch } from "../../configs/servers/store";
import { refreshAccessToken } from "../../configs/servers/auth/authSlice";
import { getAccessToken } from "../../helpers/authToken";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("ListView");

  const dispatch = useAppDispatch();

  useEffect(() => {
    // چک کردن منقضی شدن توکن و فراخوانی درخواست تازه‌سازی توکن
    if (!getAccessToken()) {
      dispatch(refreshAccessToken());
    }
  }, [dispatch]);
  return (
    <div className="flex h-screen items-start mt-[30px] ml-[40px] mb-[39px] ">
      <Sidebar />
      <div className="flex-grow">
        <Header onTabChange={(name) => setActiveTab(name)} />
        {activeTab !== "calenderView" && activeTab !== "managementView" && (
          <Footer />
        )}
      </div>
    </div>
  );
};

export default Dashboard;

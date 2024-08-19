import { useEffect, useState } from "react";
import { useAppDispatch } from "../../configs/servers/store";
import { refreshAccessToken } from "../../configs/servers/auth/authSlice";
import { getAccessToken } from "../../helpers/authToken";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Board: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("ListView");

  const dispatch = useAppDispatch();

  useEffect(() => {
    // چک کردن منقضی شدن توکن و فراخوانی درخواست تازه‌سازی توکن
    if (!getAccessToken()) {
      dispatch(refreshAccessToken());
    }
  }, [dispatch]);
  return (
    <div className="flex items-start mt-[30px] ml-[40px] mb-[39px] mr-[16px]">
      <Sidebar />
      <div className="flex-grow">
        <Header onTabChange={(name) => setActiveTab(name)} />
        {activeTab !== "calenderView" && <Footer />}
      </div>
      {/* <Header />
      <Footer /> */}
    </div>
  );
};

export default Board;

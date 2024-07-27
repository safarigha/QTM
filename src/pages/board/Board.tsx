import { useEffect } from "react";
import { useAppDispatch } from "../../configs/servers/store";
import { refreshAccessToken } from "../../configs/servers/auth/authSlice";
import { getAccessToken } from "../../helpers/authToken";
import Sidbar from "./Sidebar";

const Board: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // چک کردن منقضی شدن توکن و فراخوانی درخواست تازه‌سازی توکن
    if (!getAccessToken()) {
      dispatch(refreshAccessToken());
    }
  }, [dispatch]);
  return (
    <div>
      {/* board */}
      <Sidbar />
    </div>
  );
};

export default Board;

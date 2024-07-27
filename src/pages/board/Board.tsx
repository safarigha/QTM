import { useEffect } from "react";
import { useAppDispatch } from "../../configs/servers/store";
import { refreshAccessToken } from "../../configs/servers/auth/authSlice";
import { getAccessToken } from "../../helpers/authToken";
import LogoTitle from "../../components/commons/LogoTitle";

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
      board
      <LogoTitle />
    </div>
  );
};

export default Board;

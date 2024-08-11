import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../configs/servers/store";
import { fetchAccount } from "../../configs/servers/accountSlice";
import { ISidebarDisplayAccount } from "../../configs/interfaces";
import { useNavigate } from "react-router-dom";

const SidebarDisplayAccount: React.FC<ISidebarDisplayAccount> = ({
  selectedImage,
  className,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: account,
    status,
    error,
  } = useSelector((state: RootState) => state.account);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAccount());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <span className="flex justify-center text-xs">در حال بارگزاری ...</span>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!account || !account.username) {
    return <div>Account details not available</div>;
  }

  const handleClick = () => {
    navigate("/profile");
  };

  return (
    <div className={`flex ${className}`}>
      <div className="w-[36px] h-[33px]  p-[9px 8px 7px 8px] rounded-full bg-yellow-100 text-orange-400 text-md font-bold flex items-center justify-center">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="تصویر انتخاب شده"
            className="rounded-full"
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <span>{account.username.slice(0, 2)}</span>
        )}
      </div>
      <button
        className="mr-2 justify-center items-center font-bold text-sm"
        onClick={handleClick}
      >
        {account.first_name && account.last_name ? (
          <span>{`${account.first_name} ${account.last_name}`}</span>
        ) : (
          <span>{account.email}</span>
        )}
      </button>
    </div>
  );
};

export default SidebarDisplayAccount;

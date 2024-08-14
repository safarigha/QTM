import { BiDoorOpen } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { removeTokens } from "../../helpers/authToken";
import { getErrorMessage } from "../../helpers/errorMessages";
import useToast from "../../hooks/useToast";
import { useDispatch } from "react-redux";
import { resetProjects } from "../../configs/servers/projectSlice";
import { resetWorkspaces } from "../../configs/servers/workspaceSlice";
import { AppDispatch } from "../../configs/servers/store";
import { ISidebarLogoutAccount } from "../../configs/interfaces";
import { resetAccounts } from "../../configs/servers/accountSlice";
import useThemeColor from "../../hooks/useThemeColor";
import { resetThemeColor } from "../../configs/servers/colorSlice";
import { useEffect } from "react";

const clearUserSessionData = () => {
  localStorage.clear();
  sessionStorage.clear();
  document.cookie.split(";").forEach((cookie) => {
    const [name] = cookie.split("=");
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  });
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.removeItem("theme");
};

const SidebarLogoutAccount: React.FC<ISidebarLogoutAccount> = ({
  className,
}) => {
  const { textColor } = useThemeColor();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { showSuccess, showError } = useToast();

  const handleLogout = () => {
    try {
      removeTokens();
      clearUserSessionData();
      dispatch(resetProjects());
      dispatch(resetWorkspaces());
      dispatch(resetAccounts());
      dispatch(resetThemeColor());
      showSuccess("logout");
      navigate("/login");
    } catch (error: any) {
      const statusCode = error.response?.status;
      const errorMessage = getErrorMessage("server", statusCode);
      showError(errorMessage);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      handleLogout();
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <button
      onClick={handleLogout}
      className={`flex ${textColor} focus:outline-none ${className}`}
    >
      <BiDoorOpen className="size-[40px]" />
      <span className="mr-1 mt-1 items-center font-bold text-xl">خروج</span>
    </button>
  );
};

export default SidebarLogoutAccount;

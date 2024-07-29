import { BiDoorOpen } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { removeTokens } from "../../helpers/authToken";
import { getErrorMessage } from "../../helpers/errorMessages";
import useToast from "../../hooks/useToast";
import { useDispatch } from "react-redux";
import { resetProjects } from "../../configs/servers/projectSlice";
import { resetWorkspaces } from "../../configs/servers/workspaceSlice";
export interface ISidebarLogoutAccount {
  className?: string;
}

const SidebarLogoutAccount: React.FC<ISidebarLogoutAccount> = ({
  className,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { showSuccess, showError } = useToast();

  const handleLogout = () => {
    try {
      removeTokens();
      dispatch(resetProjects());
      dispatch(resetWorkspaces());
      showSuccess("logout");
      navigate("/login");
    } catch (error: any) {
      const statusCode = error.response?.status;
      const errorMessage = getErrorMessage("server", statusCode);
      showError(errorMessage);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className={`flex text-brand-primary focus:outline-none ${className}`}
    >
      <BiDoorOpen className="size-[30px]" />
      <span className="mr-[0.5px] justify-center items-center mt-1 font-bold text-md">
        خروج
      </span>
    </button>
  );
};

export default SidebarLogoutAccount;

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { messagesToast } from "../helpers/messagesToast";
import { IToast } from "../configs/interfaces";

const useToast = (): IToast => {
  const showSuccess = (type: "register" | "login") => {
    const message = messagesToast[type].success;
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const showError = (type: "register" | "login") => {
    const message = messagesToast[type].error;
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const showInfo = (message: string) => {
    toast.info(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const showWarning = (message: string) => {
    toast.warn(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return {
    showSuccess,
    showError,
    showInfo,
    showWarning,
  };
};

export const ToastProvider = () => <ToastContainer />;

export default useToast;

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { messagesToast } from "../helpers/messagesToast";
import { IToast } from "../configs/interfaces";

const useToast = (): IToast => {
  const showSuccess = (type: "register" | "login") => {
    const message = messagesToast[type].success;
    toast.success(message, {
      position: "top-center",
      rtl: false,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {
        textAlign: "right",
        direction: "rtl",
      },
    });
  };

  const showError = (message: string) => {
    toast.error(message, {
      position: "top-center",
      rtl: false,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {
        textAlign: "right",
        direction: "rtl",
      },
    });
  };

  const showInfo = (message: string) => {
    toast.info(message, {
      position: "top-center",
      rtl: false,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {
        textAlign: "right",
        direction: "rtl",
      },
    });
  };

  const showWarning = (message: string) => {
    toast.warn(message, {
      position: "top-center",
      rtl: false,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {
        textAlign: "right",
        direction: "rtl",
      },
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

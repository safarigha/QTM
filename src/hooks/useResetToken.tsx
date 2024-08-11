import { useState } from "react";
import { resetPassword } from "../configs/APIs/accountApi";
import { getErrorMessage } from "../helpers/errorMessages";
import useToast from "./useToast";
import useSendEmail from "./useSendEmail";
import { baseUrlApp } from "../configs/URLsPath";

const useResetToken = () => {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const { showSuccess, showError } = useToast();
  const { isSending, error, success, sendEmail } = useSendEmail();

  const requestResetToken = async (email: string) => {
    try {
      const response = await resetPassword({ email });
      const resetUrl = response.data.url;
      const url = new URL(resetUrl);
      const token = url.searchParams.get("token");

      if (token) {
        localStorage.setItem("resetToken", token);
        const resetEmailUrl = `${baseUrlApp}/set-password?token=${token}`;

        await sendEmail(email, resetEmailUrl);
        if (success) {
          showSuccess("resetPassword");
          setIsValidEmail(true);
        }
        if (error) {
          showError(error);
        }
      } else {
        throw new Error("لطفا مجددا اقدام نمایید");
      }
    } catch (error: any) {
      const statusCode = error.response?.status;
      const errorMessage = getErrorMessage("server", statusCode);
      showError(errorMessage);
    }
  };

  return { requestResetToken, isValidEmail, isSending, error, success };
};

export default useResetToken;

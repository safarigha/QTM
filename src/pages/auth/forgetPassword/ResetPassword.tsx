import { useEffect, useState } from "react";
import InputForm from "../../../components/commons/forms/InputForm";
import { resetPassword } from "../../../configs/APIs/accountApi";
import { IField, IResetFormData } from "../../../configs/interfaces";
import { getErrorMessage } from "../../../helpers/errorMessages";
import useToast from "../../../hooks/useToast";
import ResetPasswordSchema from "../../../validations/ResetPasswordShema";
import useSendEmail from "../../../hooks/useSendEmail";
import { baseUrlApp } from "../../../configs/URLsPath";

const ResetPassword: React.FC = () => {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const { showSuccess, showError } = useToast();
  const { isSending, error, success, sendEmail } = useSendEmail();

  const handleResetSubmit = async (data: IResetFormData) => {
    try {
      const response = await resetPassword(data);
      const resetUrl = response.data.url;
      const url = new URL(resetUrl);
      const token = url.searchParams.get("token");

      if (token) {
        localStorage.setItem("resetToken", token);
        const resetEmailUrl = `${baseUrlApp}/set-password?token=${token}`;

        await sendEmail(data.email, resetEmailUrl);
        if (success) {
          showSuccess("resetPassword");
          setIsValidEmail(true);
        }
        if (error) {
          showError(error);
        }
      } else {
        return new Error("لطفا مجددا اقدام نمایید");
      }
    } catch (error: any) {
      const statusCode = error.response?.status;
      const errorMessage = getErrorMessage("server", statusCode);
      showError(errorMessage);
    }
  };

  const fields: IField[] = [
    {
      id: "email",
      type: "email",
      label: "ایمیل",
      name: "user_email",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      {!isValidEmail ? (
        <div className="flex bg-white flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl">
          <p className="font-extrabold text-brand-primary justify-center w-fit pb-2 text-[32px]">
            فراموشی رمز عبور
          </p>
          <InputForm
            fields={fields}
            submitText="دریافت ایمیل بازیابی رمز عبور"
            schema={ResetPasswordSchema}
            onSubmit={handleResetSubmit}
          />
        </div>
      ) : (
        <div className="flex bg-white flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl">
          <p className="font-extrabold text-brand-primary justify-center w-fit pb-2 text-[32px]">
            فراموشی رمز عبور
          </p>
          <p className="mt-2 text-md font-base text-center">
            لینک تغییر رمز عبور به ایمیل شما ارسال شد. لطفا ایمیل خود را بررسی
            کنید.
          </p>
          <p className="text-md font-base text-center">
            در صورت عدم مشاهده، پوشه اسپم‌ها را چک کنید.
          </p>
        </div>
      )}
    </div>
  );
};
export default ResetPassword;

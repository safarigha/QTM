import { useNavigate } from "react-router-dom";
import InputForm from "../../../components/commons/forms/InputForm";
import { setPassword } from "../../../configs/APIs/accountApi";
import { IField, ISetPasswordFormData } from "../../../configs/interfaces";
import { getErrorMessage } from "../../../helpers/errorMessages";
import useToast from "../../../hooks/useToast";
import SetPasswordSchema from "../../../validations/SetPasswordShema";
import useThemeColor from "../../../hooks/useThemeColor";

const SetPassword: React.FC = () => {
  const { textColor } = useThemeColor();

  const navigate = useNavigate();

  const { showSuccess, showError } = useToast();

  const handleSetPasswordSubmit = async (data: ISetPasswordFormData) => {
    const token = localStorage.getItem("resetToken");
    if (!token) {
      showError("لطفاً مجدداً وارد شوید");
      return;
    }
    try {
      const response = await setPassword(token, data);
      showSuccess("setPassword");
      navigate("/login");
    } catch (error: any) {
      const statusCode = error.response?.status;
      const errorMessage = getErrorMessage("server", statusCode);
      showError(errorMessage);
    }
  };

  const fields: IField[] = [
    {
      id: "password",
      type: "password",
      label: "رمز عبور جدید را وارد کنید",
    },
    {
      id: "password1",
      type: "password",
      label: "تکرار رمز عبور",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <div className="flex bg-white flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl">
        <p
          className={`font-extrabold ${textColor} justify-center w-fit pb-2 text-[32px]`}
        >
          تغییر رمز عبور
        </p>
        <InputForm
          fields={fields}
          submitText="اعمال تغییرات"
          schema={SetPasswordSchema}
          onSubmit={handleSetPasswordSubmit}
        />
      </div>
    </div>
  );
};

export default SetPassword;

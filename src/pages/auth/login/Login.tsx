import InputForm from "../../../components/commons/forms/InputForm";
import { registerAccount } from "../../../configs/APIs/accountApi";
import { IField, IRegisterFormData } from "../../../configs/interfaces";
import { getErrorMessage } from "../../../helpers/errorMessages";
import useToast from "../../../hooks/useToast";
import UserRegisterSchema from "../../../validations/UserRegisterShema";

const Login: React.FC = () => {
  const { showSuccess, showError } = useToast();

  const handleRegisterSubmit = async (data: IRegisterFormData) => {
    try {
      const response = await registerAccount(data);
      showSuccess("login");
    } catch (error: any) {
      const statusCode = error.response?.status;
      const errorMessage = getErrorMessage("server", statusCode);
      showError(errorMessage);
    }
  };

  const fields: IField[] = [
    {
      id: "username",
      type: "text",
      label: "نام کاربری",
    },
    {
      id: "password",
      type: "password",
      label: "رمز عبور",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <div className="flex bg-white flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl">
        <p className="font-extrabold text-brand-primary justify-center w-fit pb-2 text-[32px]">
          خوش اومدی! بیا و کارهات رو شروع کن
        </p>
        <InputForm
          fields={fields}
          submitText="ثبت نام"
          schema={UserRegisterSchema}
          onSubmit={handleRegisterSubmit}
          includeCheckbox={true}
          onclick={open}
        />
      </div>
    </div>
  );
};

export default Login;

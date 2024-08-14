import { Link, useNavigate } from "react-router-dom";
import InputForm from "../../../components/commons/forms/InputForm";
import { loginAccount } from "../../../configs/APIs/accountApi";
import { IField, ILoginFormData } from "../../../configs/interfaces";
import { getErrorMessage } from "../../../helpers/errorMessages";
import useToast from "../../../hooks/useToast";
import UserLoginSchema from "../../../validations/UserLoginShema";
import { useAppDispatch } from "../../../configs/servers/store";
import { setToken } from "../../../configs/servers/auth/authSlice";
import useThemeSettings from "../../../hooks/useThemeSetting";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { showSuccess, showError } = useToast();
  const { fetchAndApplyThemeSettings } = useThemeSettings();

  const handleLoginSubmit = async (data: ILoginFormData) => {
    try {
      const response = await loginAccount(data);
      const { access, refresh, expires_in } = response.data;
      dispatch(
        setToken({
          accessToken: access,
          refreshToken: refresh,
          expiresIn: expires_in,
        })
      );

      await fetchAndApplyThemeSettings();
      showSuccess("login");
      navigate("/board");
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
      <div
        className={`flex flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl bg-white`}
      >
        <p
          className={`font-extrabold text-brand-primary justify-center w-fit pb-2 text-[32px]`}
        >
          خوش اومدی! بیا کارهات رو شروع کن
        </p>
        <InputForm
          fields={fields}
          submitText="ورود"
          schema={UserLoginSchema}
          onSubmit={handleLoginSubmit}
        />
        <div className={`mt-4 text-brand-primary text-sm font-bold`}>
          <Link to="/reset-password">رمز عبور خود را فراموش کردم</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

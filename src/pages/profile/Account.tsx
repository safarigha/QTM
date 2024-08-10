import { useDispatch, useSelector } from "react-redux";
import InputForm from "../../components/commons/forms/InputForm";
import { updateAccount } from "../../configs/APIs/accountApi";
import { IAccountFormData } from "../../configs/interfaces";
import { AppDispatch, RootState } from "../../configs/servers/store";
import { getErrorMessage } from "../../helpers/errorMessages";
import useToast from "../../hooks/useToast";
import UserSchema from "../../validations/UserShema";
import { useEffect } from "react";
import { fetchAccount } from "../../configs/servers/accountSlice";

const AccountSchema = UserSchema.pick({
  username: true,
  email: true,
});

const Account: React.FC = () => {
  const {
    data: account,
    status,
    error,
  } = useSelector((state: RootState) => state.account);
  const dispatch = useDispatch<AppDispatch>();
  const { showSuccess, showError } = useToast();

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
    return <span>Error: {error}</span>;
  }

  if (!account || !account.username) {
    return <span>Account details not available</span>;
  }

  const handleFormSubmit = async (data: IAccountFormData) => {
    try {
      const formData = new FormData();
      formData.append("username", account.username);
      formData.append("email", data.email);

      const response = await updateAccount(account.id, formData);
      console.log("Response from API:", response);
      showSuccess("created");
    } catch (error: any) {
      const statusCode = error.response?.status;
      const errorMessage = getErrorMessage("server", statusCode);
      showError(errorMessage);
      console.error("Error during form submission:", errorMessage);
    }
  };

  const fields = [
    {
      id: "email",
      label: "ایمیل",
      type: "email" as const,
    },
    {
      id: "username",
      label: "نام کاربری",
      type: "text" as const,
    },
    {
      id: "currentPassword",
      label: "رمز عبور فعلی",
      type: "password" as const,
    },
    {
      id: "NewPassword",
      label: "رمز عبور جدید",
      type: "password" as const,
    },
    {
      id: "reNewPassword",
      label: "تکرار رمز عبور جدید",
      type: "password" as const,
    },
  ];

  return (
    <div>
      <h1 className="text-center w-[354px] text-brand-primary text-3xl font-bold mb-6">
        اطلاعات حساب
      </h1>
      <InputForm
        fields={fields}
        submitText="ثبت تغییرات"
        schema={AccountSchema}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};
export default Account;

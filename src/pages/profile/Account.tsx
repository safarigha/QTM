import { useDispatch, useSelector } from "react-redux";
import InputForm from "../../components/commons/forms/InputForm";
import { changePassword, updateAccount } from "../../configs/APIs/accountApi";
import { IAccountFormData } from "../../configs/interfaces";
import { AppDispatch, RootState } from "../../configs/servers/store";
import { getErrorMessage } from "../../helpers/errorMessages";
import useToast from "../../hooks/useToast";
import { useEffect } from "react";
import { fetchAccount } from "../../configs/servers/accountSlice";
import ProfileAccountShema from "../../validations/ProfileAccountShema";

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
    return <span className="flex justify-center text-xs">Error: {error}</span>;
  }

  if (!account || !account.username) {
    return (
      <span className="flex justify-center text-xs">
        اطلاعات حساب کاربر در حال بارگزاری ...
      </span>
    );
  }

  const handleFormSubmit = async (data: IAccountFormData) => {
    try {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("email", data.email);
      formData.append("firstname", account.first_name);
      formData.append("lastname", account.last_name);
      formData.append("phonenumber", account.phone_number);
      if (account.thumbnail) formData.append("thumbnail", account.thumbnail);

      await updateAccount(account.id, formData);

      const formDataSetPassword = {
        old_password: data.old_password,
        new_password: data.new_password,
        new_password1: data.new_password1,
      };
      await changePassword(formDataSetPassword);

      showSuccess("created");
    } catch (error: any) {
      const statusCode = error.response?.status;
      const errorMessage = getErrorMessage("server", statusCode);
      showError(errorMessage);
    }
  };

  const fields = [
    {
      id: "email",
      label: "ایمیل",
      type: "email",
      defaultValue: account.email,
    },
    {
      id: "username",
      label: "نام کاربری",
      type: "text",
      defaultValue: account.username,
    },
    {
      id: "old_password",
      label: "رمز عبور فعلی",
      type: "password",
    },
    {
      id: "new_password",
      label: "رمز عبور جدید",
      type: "password",
    },
    {
      id: "new_password1",
      label: "تکرار رمز عبور جدید",
      type: "password",
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
        schema={ProfileAccountShema}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};
export default Account;

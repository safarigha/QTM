import React from "react";
import InputForm from "../../../components/commons/forms/InputForm";
import { IField, IRegisterFormData } from "../../../configs/interfaces";
import UserRegisterSchema from "../../../validations/UserRegisterShema";
import Rules from "./Rules";
import { registerAccount } from "../../../configs/APIs/accountApi";
import useToast from "../../../hooks/useToast";

const Register: React.FC = () => {
  const { showSuccess, showError } = useToast();

  const handleRegisterSubmit = async (data: IRegisterFormData) => {
    try {
      const response = await registerAccount(data); // فرستادن درخواست به API
      console.log("ثبت‌نام با موفقیت انجام شد!", response.data);
      showSuccess("register");
    } catch (error) {
      console.error("خطا در ثبت‌نام:", error);
      showError("register");
    }
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const fields: IField[] = [
    {
      id: "username",
      type: "text",
      label: "نام کاربری",
    },
    {
      id: "email",
      type: "email",
      label: "ایمیل",
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
          همین حالا ثبت‌نام کن
        </p>
        <InputForm
          fields={fields}
          submitText="ثبت نام"
          schema={UserRegisterSchema}
          onSubmit={handleRegisterSubmit}
          includeCheckbox={true}
          onclick={open}
        />
        {isOpen && <Rules onClose={close} />}
      </div>
    </div>
  );
};

export default Register;

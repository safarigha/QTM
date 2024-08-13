import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../../../components/commons/forms/InputForm";
import { IField, IRegisterFormData } from "../../../configs/interfaces";
import UserRegisterSchema from "../../../validations/UserRegisterShema";
import Rules from "./Rules";
import { registerAccount } from "../../../configs/APIs/accountApi";
import useToast from "../../../hooks/useToast";
import { getErrorMessage } from "../../../helpers/errorMessages";

const Register: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();
  const { showSuccess, showError } = useToast();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const handleRegisterSubmit = async (data: IRegisterFormData) => {
    try {
      const response = await registerAccount(data);
      showSuccess("register");
      navigate("/login");
    } catch (error: any) {
      const statusCode = error.response?.status;
      const errorMessage = getErrorMessage("server", statusCode);
      showError(errorMessage);
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
      <div
        className={`flex flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <p
          className={`font-extrabold text-brand-primary justify-center w-fit pb-2 text-[32px]`}
        >
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

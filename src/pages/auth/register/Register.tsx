import React from "react";
import InputForm from "../../../components/commons/forms/InputForm";
import Rules from "./Rules";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import UserRegisterSchema from "../../../validations/UserRegisterShema";
import { IRegisterFormData } from "../../../configs/interfaces";

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(UserRegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      isCheckedRule: false,
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data); // اطلاعات ثبت‌نام شده
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div className="flex items-center justify-center">
      {!isOpen && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex bg-white flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl">
            <p className="font-extrabold text-black justify-center w-fit pb-2 text-[32px]">
              ثبت نام در کوئرا تسک منیجر
            </p>
            <InputForm
              fields={[
                {
                  id: "username",
                  type: "text",
                  label: "نام کاربری",
                  register: register("username"),
                },
                {
                  id: "email",
                  type: "email",
                  label: "ایمیل",
                  register: register("email"),
                },
                {
                  id: "password",
                  type: "password",
                  label: "رمز عبور",
                  register: register("password"),
                },
              ]}
              submitText="ثبت نام"
              errors={errors}
            />
            <div className="flex w-full gap-1 mt-6">
              <input
                type="checkbox"
                {...register("isCheckedRule")}
                className="w-5 ml-1"
              />
              <button
                type="button"
                onClick={open}
                className="underline font-medium"
              >
                قوانین و مقررات
              </button>
              <div className="font-medium">را می‌پذیرم.</div>
            </div>
          </div>
        </form>
      )}
      {isOpen && <Rules onClose={close} />}
    </div>
  );
};

export default Register;

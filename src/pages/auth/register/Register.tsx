import React from "react";
import InputForm from "../../../components/commons/forms/InputForm";
import { IField, IRegisterFormData } from "../../../configs/interfaces";
import UserRegisterSchema from "../../../validations/UserRegisterShema";

const Register: React.FC = () => {
  const handleRegisterSubmit = (data: IRegisterFormData) => {
    console.log(data);
  };

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
          QT Manager
        </p>
        <InputForm
          fields={fields}
          submitText="ثبت نام"
          schema={UserRegisterSchema}
          onSubmit={handleRegisterSubmit}
          includeCheckbox={true}
        />
      </div>
    </div>
  );
};

export default Register;

// import React from "react";
// import InputForm from "../../../components/commons/forms/InputForm";
// import Rules from "./Rules";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import UserRegisterSchema from "../../../validations/UserRegisterShema";
// import { IRegisterFormData } from "../../../configs/interfaces";

// const Register: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<IRegisterFormData>({
//     resolver: zodResolver(UserRegisterSchema),
//     defaultValues: {
//       username: "",
//       email: "",
//       password: "",
//       isCheckedRule: false,
//     },
//   });

//   const onSubmit = (data: IRegisterFormData) => {
//     console.log(data); // اطلاعات ثبت‌نام شده
//   };
//   const fields = [
//     {
//       id: "username",
//       type: "text",
//       label: "نام کاربری",
//       register: register("username"),
//     },
//     {
//       id: "email",
//       type: "email",
//       label: "ایمیل",
//       register: register("email"),
//     },
//     {
//       id: "password",
//       type: "password",
//       label: "رمز عبور",
//       register: register("password"),
//     },
//   ];

//   const [isOpen, setIsOpen] = React.useState(false);
//   const open = () => setIsOpen(true);
//   const close = () => setIsOpen(false);

//   return (
//     <div className="flex items-center justify-center">
//       {!isOpen && (
//         <div className="flex bg-white flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl">
//           <p className="font-extrabold text-brand-primary justify-center w-fit pb-2 text-[32px]">
//             QT Manager
//           </p>
//           <InputForm
//             fields={fields}
//             submitText="ثبت نام"
//             errors={errors}
//             onSubmit={handleSubmit(onSubmit)}
//           />
//           <div className="flex w-full gap-1 mt-6">
//             <input
//               type="checkbox"
//               {...register("isCheckedRule")}
//               className="w-5 ml-1"
//             />
//             <button
//               type="button"
//               onClick={open}
//               className="underline font-medium"
//             >
//               قوانین و مقررات
//             </button>
//             <div className="font-medium">را می‌پذیرم.</div>
//             <div>
//               {errors.isCheckedRule && (
//                 <p className="text-red-500 text-xs mt-1 pr-2">
//                   {errors.isCheckedRule?.message}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//       {isOpen && <Rules onClose={close} />}
//     </div>
//   );
// };

// export default Register;

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Button } from "@headlessui/react";
// import { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// // import { signup as signupUser, reset } from "../../configs/services/authSlice";
// import Inputs from "../../components/basicComponents/Input";
// import Buttons from "../../components/basicComponents/Button";
// import Rule from "./Rule";
// import UserRegisterShema from "../../../validations/UserRegisterShema";

// export interface IFormInput {
//   username: string;
//   email: string;
//   password: string;
//   isChecked?: boolean;
// }

// const Register = (): JSX.Element => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IFormInput>({
//     resolver: yupResolver(UserRegisterShema),
//   });

//   const [isOpen, setIsOpen] = useState(false);

//   function open() {
//     setIsOpen(true);
//   }

//   function close() {
//     setIsOpen(false);
//   }

//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();
//   const { isSuccess, isLoading, isError, message } = useAppSelector(
//     (state) => state.auth
//   );

//   useEffect(() => {
//     if (isError) {
//       toast.dismiss();
//       toast.error(`${message}`, {
//         rtl: true,
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       });
//       dispatch(reset());
//     }
//     if (isSuccess) {
//       toast.dismiss();
//       toast.success(`ثبت نام با موفقیت انجام شد`, {
//         rtl: true,
//         position: "top-center",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       });
//       navigate("/login");
//       dispatch(reset());
//     }
//   }, [isSuccess, isError, message, isLoading, navigate, dispatch]);

//   const onSubmit = (data: IFormInput) => {
//     dispatch(
//       signupUser({
//         username: data.username.toLowerCase(),
//         email: data.email.toLowerCase(),
//         password: data.password,
//         isChecked: data.isChecked,
//       })
//     );
//   };

//   return (
//     <div>
//       {!isOpen && (
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div
//             style={{
//               boxShadow:
//                 "0px 50px 100px -20px rgba(3,35,37,0.25), 0px 30px 60px -30px rgba(0,0,0,0.3)",
//             }}
//             className="flex bg-white flex-col justify-center items-center p-6 w-[640px] rounded-[20px]"
//           >
//             <p className="font-extrabold text-black justify-center w-fit pb-2 text-[32px]">
//               ثبت نام در کوئرا تسک منیجر
//             </p>
//             <div className="py-2 w-full space-y-6">
//               <Inputs
//                 label="نام کاربری"
//                 id="username"
//                 type="text"
//                 {...register("username")}
//               />
//               {errors.username && (
//                 <p className="text-red-500 text-xs mt-2">
//                   {errors.username?.message}
//                 </p>
//               )}
//               <Inputs
//                 label="ایمیل"
//                 id="email"
//                 type="email"
//                 {...register("email")}
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-xs mt-2">
//                   {errors.email?.message}
//                 </p>
//               )}
//               <Inputs
//                 label="رمز عبور"
//                 id="password"
//                 type="password"
//                 {...register("password")}
//               />
//               {errors.password && (
//                 <p className="text-red-500 text-xs mt-2">
//                   {errors.password?.message}
//                 </p>
//               )}
//             </div>

//             <div className="flex w-full gap-1 mt-6">
//               <input
//                 type="checkbox"
//                 {...register("isChecked")}
//                 className="w-5 ml-1"
//               />
//               <Button onClick={open} className="underline font-medium">
//                 قوانین و مقررات
//               </Button>
//               <div className="font-medium">را می‌پذیرم.</div>
//             </div>
//             <Buttons
//               disabled={isLoading}
//               children={`${isLoading ? "در حال ثبت نام ..." : "ثبت نام"}`}
//               classNames={"w-full h-10 mt-10"}
//               type="submit"
//             />
//           </div>
//         </form>
//       )}
//       {isOpen && (
//         <div>
//           <Rule onClose={close} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Register;

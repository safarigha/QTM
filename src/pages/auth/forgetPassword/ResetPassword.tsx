import useResetToken from "../../../hooks/useResetToken";
import InputForm from "../../../components/commons/forms/InputForm";
import { IField, IResetFormData } from "../../../configs/interfaces";
import ResetPasswordSchema from "../../../validations/ResetPasswordShema";

const ResetPassword: React.FC = () => {
  const { requestResetToken, isValidEmail } = useResetToken();

  const handleResetSubmit = async (data: IResetFormData) => {
    await requestResetToken(data.email);
  };

  const fields: IField[] = [
    {
      id: "email",
      type: "email",
      label: "ایمیل",
      name: "user_email",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      {!isValidEmail ? (
        <div className="flex bg-white flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl">
          <p className="font-extrabold text-brand-primary justify-center w-fit pb-2 text-[32px]">
            فراموشی رمز عبور
          </p>
          <InputForm
            fields={fields}
            submitText="دریافت ایمیل بازیابی رمز عبور"
            schema={ResetPasswordSchema}
            onSubmit={handleResetSubmit}
          />
        </div>
      ) : (
        <div className="flex bg-white flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl">
          <p className="font-extrabold text-brand-primary justify-center w-fit pb-2 text-[32px]">
            فراموشی رمز عبور
          </p>
          <p className="mt-2 text-md font-base text-center">
            لینک تغییر رمز عبور به ایمیل شما ارسال شد. لطفا ایمیل خود را بررسی
            کنید.
          </p>
          <p className="text-md font-base text-center">
            در صورت عدم مشاهده، پوشه اسپم‌ها را چک کنید.
          </p>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;

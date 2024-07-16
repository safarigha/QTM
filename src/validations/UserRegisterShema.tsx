import { z, ZodType } from "zod";
import { IRegisterFormData } from "../configs/interfaces";

const UserRegisterSchema: ZodType<IRegisterFormData> = z.object({
  username: z
    .string()
    .nonempty({ message: "وارد کردن نام کاربری الزامی است" })
    .min(3, { message: "نام کاربری باید حداقل 3 کاراکتر باشد" })
    .max(12, { message: "نام کاربری باید حداکثر 12 کاراکتر باشد" }),
  email: z
    .string()
    .nonempty({ message: "وارد کردن ایمیل الزامی است" })
    .email({ message: "ایمیل موردنظر معتبر نیست" }),
  password: z
    .string()
    .nonempty({ message: "وارد کردن رمز عبور الزامی است" })
    .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد" })
    .max(12, { message: "رمز عبور باید حداکثر 12 کاراکتر باشد" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {
      message:
        "رمز عبور باید حداقل شامل یک حرف کوچک، یک حرف بزرگ، یک عدد و یک علامت خاص باشد",
    }),
  isCheckedRule: z.boolean().refine((val) => val === true, {
    message: "قوانین را مطالعه و تایید کنید",
  }),
});

export default UserRegisterSchema;

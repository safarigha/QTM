import { z, ZodType } from "zod";
import { IRegisterFormData } from "../configs/interfaces";

const UserRegisterSchema: ZodType<IRegisterFormData> = z.object({
  username: z
    .string()
    .min(5, { message: "نام کاربری باید حداقل 5 کاراکتر باشد" })
    .nonempty({ message: "نام کاربری الزامی است" }),
  email: z.string().email({ message: "لطفا ایمیل معتبر خود را وارد کنید" }),
  password: z
    .string()
    .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد" })
    .regex(/^[\w.@+-]+$/, {
      message: "رمز عبور فقط می‌تواند شامل حروف، اعداد، و علائم @/./+/-/_ باشد",
    }),
  isCheckedRule: z.boolean().refine((val) => val === true, {
    message: "شما باید قوانین را مطالعه و تایید کنید",
  }),
});

export default UserRegisterSchema;

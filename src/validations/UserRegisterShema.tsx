import { z } from "zod";

const UserRegisterSchema = z.object({
  id: z
    .number({ required_error: "شناسه الزامی است" })
    .int({ message: "شناسه باید یک عدد صحیح باشد" }),
  username: z
    .string({ required_error: "نام کاربری الزامی است" })
    .max(150, { message: "نام کاربری باید حداکثر ۱۵۰ کاراکتر باشد" })
    .regex(/^[\w.@+-]+$/, {
      message:
        "نام کاربری فقط می‌تواند شامل حروف، اعداد، و علامات @/./+/-/_ باشد",
    }),
  email: z
    .string()
    .email({ message: "ایمیل باید معتبر باشد" })
    .max(254, { message: "ایمیل باید حداکثر ۲۵۴ کاراکتر باشد" })
    .nullable(),
  password: z
    .string({ required_error: "رمز عبور الزامی است" })
    .max(255, { message: "رمز عبور باید حداکثر ۲۵۵ کاراکتر باشد" }),
});

export default UserRegisterSchema;

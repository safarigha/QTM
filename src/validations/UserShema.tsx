import { z } from "zod";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneNumberRegex = /^\+?1?\d{9,15}$/;

const UserSchema = z.object({
  username: z
    .string()
    .nonempty({ message: "وارد کردن نام کاربری الزامی است" })
    .max(150, { message: "نام کاربری باید حداکثر ۱۵۰ کاراکتر باشد" })
    .regex(/^[\w.@+-]+$/, {
      message:
        "نام کاربری فقط می‌تواند شامل حروف، اعداد، و علامات @/./+/-/_ باشد",
    }),
  email: z
    .string()
    .nonempty({ message: "وارد کردن ایمیل الزامی است" })
    .email({ message: "ایمیل باید معتبر باشد" })
    .max(254, { message: "ایمیل باید حداکثر ۲۵۴ کاراکتر باشد" })
    .regex(emailRegex, { message: "ساختار ایمیل وارد شده معتبر نیست" }),
  first_name: z
    .string()
    .nonempty({ message: "وارد کردن نام الزامی است" })
    .min(3, { message: "نام باید حداقل 3 کاراکتر باشد" })
    .max(150, { message: "نام باید حداکثر ۱۵۰ کاراکتر باشد" })
    .optional(),
  last_name: z
    .string()
    .nonempty({ message: "وارد کردن نام خانوادگی الزامی است" })
    .min(3, { message: "نام خانوادگی باید حداقل 3 کاراکتر باشد" })
    .max(150, { message: "نام خانوادگی باید حداکثر ۱۵۰ کاراکتر باشد" })
    .optional(),
  phone_number: z
    .string()
    .regex(phoneNumberRegex, {
      message: "تلفن همراه باید یک شماره معتبر باشد",
    })
    .max(11, { message: "تلفن همراه باید حداکثر ۱۱ کاراکتر باشد" })
    .nullable(),
  thumbnail: z.string().url().optional().nullable(),
});

export default UserSchema;

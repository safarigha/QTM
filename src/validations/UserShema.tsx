import { z } from "zod";

const UserSchema = z.object({
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
  first_name: z
    .string()
    .max(150, { message: "نام باید حداکثر ۱۵۰ کاراکتر باشد" })
    .optional(),
  last_name: z
    .string()
    .max(150, { message: "نام خانوادگی باید حداکثر ۱۵۰ کاراکتر باشد" })
    .optional(),
  phone_number: z
    .string()
    .regex(/^\+?1?\d{9,15}$/, {
      message: "تلفن همراه باید یک شماره معتبر باشد",
    })
    .max(11, { message: "تلفن همراه باید حداکثر ۱۱ کاراکتر باشد" })
    .nullable(),
  thumbnail: z
    .string()
    .url({ message: "تصویر پروفایل باید یک URL معتبر باشد" })
    .nullable(),
});

export default UserSchema;

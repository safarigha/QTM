import { z } from "zod";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const phoneNumberRegex = /^\+?1?\d{9,15}$/;

const UserSchema = z.object({
  username: z
    .string()
    .nonempty({ message: "وارد کردن نام کاربری الزامی است" })
    .min(3, { message: "نام کاربری باید حداقل 3 کاراکتر باشد" })
    .max(12, { message: "نام کاربری باید حداکثر 12 کاراکتر باشد" }),
  email: z
    .string()
    .nonempty({ message: "وارد کردن ایمیل الزامی است" })
    .email({ message: "ایمیل موردنظر معتبر نیست" })
    .regex(emailRegex, { message: "ساختار ایمیل وارد شده معتبر نیست" }),
  first_name: z
    .string()
    .nonempty({ message: "وارد کردن نام الزامی است" })
    .min(3, { message: "نام باید حداقل 3 کاراکتر باشد" })
    .max(30, { message: "نام باید حداکثر 30 کاراکتر باشد" })
    .optional(),
  last_name: z
    .string()
    .nonempty({ message: "وارد کردن نام خانوادگی الزامی است" })
    .min(3, { message: "نام خانوادگی باید حداقل 3 کاراکتر باشد" })
    .max(30, { message: "نام خانوادگی باید حداکثر 30 کاراکتر باشد" })
    .optional(),
  phone_number: z
    .string()
    .regex(phoneNumberRegex, {
      message: "تلفن همراه باید یک شماره معتبر باشد",
    })
    .max(11, { message: "تلفن همراه باید حداکثر 11 کاراکتر باشد" })
    .nullable(),
  thumbnail: z.string().url().optional().nullable(),
});

export default UserSchema;

import { z } from "zod";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const ProfileAccountShema = z
  .object({
    email: z
      .string()
      .nonempty({ message: "وارد کردن ایمیل الزامی است" })
      .email({ message: "ایمیل موردنظر معتبر نیست" })
      .regex(emailRegex, { message: "ساختار ایمیل وارد شده معتبر نیست" }),
    username: z
      .string()
      .nonempty({ message: "وارد کردن نام کاربری الزامی است" })
      .min(3, { message: "نام کاربری باید حداقل 3 کاراکتر باشد" })
      .max(12, { message: "نام کاربری باید حداکثر 12 کاراکتر باشد" }),
    old_password: z
      .string()
      .nonempty({ message: "وارد کردن رمز عبور فعلی الزامی است" })
      .min(8, { message: "رمز عبور فعلی حداقل 8 کاراکتر دارد" })
      .max(12, { message: "رمز عبور فعلی حداکثر 12 کاراکتر دارد" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {
        message:
          "رمز عبور فعلی شما حداقل دارای یک حرف کوچک، یک حرف بزرگ، یک عدد و یک علامت خاص می باشد",
      }),
    new_password: z
      .string()
      .nonempty({ message: "وارد کردن رمز عبور جدید الزامی است" })
      .min(8, "رمز عبور جدید باید حداقل 8 کاراکتر داشته باشد")
      .max(12, { message: "رمز عبور جدید باید حداکثر 12 کاراکتر باشد" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {
        message:
          "رمز عبور جدید باید حداقل شامل یک حرف کوچک، یک حرف بزرگ، یک عدد و یک علامت خاص باشد",
      }),
    new_password1: z
      .string()
      .nonempty({ message: "وارد کردن تکرار رمز عبور جدید الزامی است" })
      .min(8, "تکرار رمز عبور جدید باید حداقل 8 کاراکتر داشته باشد")
      .max(12, { message: "تکرار رمز عبور جدید باید حداکثر 12 کاراکتر باشد" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {
        message:
          "تکرار رمز عبور جدید باید حداقل شامل یک حرف کوچک، یک حرف بزرگ، یک عدد و یک علامت خاص باشد",
      }),
  })
  .refine((data) => data.new_password === data.new_password1, {
    message: "رمز عبور جدید و تکرار رمز عبور جدید باید یکسان باشند",
    path: ["new_password1"],
  })
  .refine((data) => data.old_password !== data.new_password, {
    message: "رمز عبور فعلی و رمز عبور جدید نباید یکسان باشند",
    path: ["new_password"],
  });

export default ProfileAccountShema;

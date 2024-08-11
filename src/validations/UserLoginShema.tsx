import { z } from "zod";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

const UserLoginSchema = z.object({
  username: z
    .string()
    .nonempty({ message: "وارد کردن نام کاربری الزامی است" })
    .min(3, { message: "نام کاربری باید حداقل 3 کاراکتر باشد" })
    .max(12, { message: "نام کاربری باید حداکثر 12 کاراکتر باشد" }),
  password: z
    .string()
    .nonempty({ message: "وارد کردن رمز عبور الزامی است" })
    .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد" })
    .max(12, { message: "رمز عبور باید حداکثر 12 کاراکتر باشد" })
    .regex(passwordRegex, {
      message:
        "رمز عبور شما حداقل دارای یک حرف کوچک، یک حرف بزرگ، یک عدد و یک علامت خاص می باشد",
    }),
});

export default UserLoginSchema;

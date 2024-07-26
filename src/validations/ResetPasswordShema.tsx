import { z } from "zod";

const ResetPasswordSchema = z.object({
  email: z
    .string()
    .email()
    .nonempty({ message: "وارد کردن ایمیل الزامی است" })
    .min(2, "ایمیل حداقل باید دو کاراکتر داشته باشد"),
});

export default ResetPasswordSchema;

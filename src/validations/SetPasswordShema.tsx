import { z } from "zod";

const SetPasswordSchema = z
  .object({
    password: z
      .string()
      .nonempty({ message: "وارد کردن رمز عبور الزامی است" })
      .min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد")
      .max(12, { message: "رمز عبور باید حداکثر 12 کاراکتر باشد" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {
        message:
          "رمز عبور باید حداقل شامل یک حرف کوچک، یک حرف بزرگ، یک عدد و یک علامت خاص باشد",
      }),
    password1: z
      .string()
      .nonempty({ message: "وارد کردن رمز عبور الزامی است" })
      .min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد")
      .max(12, { message: "رمز عبور باید حداکثر 12 کاراکتر باشد" })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {
        message:
          "رمز عبور باید حداقل شامل یک حرف کوچک، یک حرف بزرگ، یک عدد و یک علامت خاص باشد",
      }),
  })
  .refine((data) => data.password === data.password1, {
    message: "رمز عبور و تکرار رمز عبور باید یکسان باشند",
    path: ["password1"],
  });

export default SetPasswordSchema;

import { z } from "zod";

const SetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد")
    .max(32, "رمز عبور نمی‌تواند بیشتر از 32 کاراکتر باشد"),
  password1: z
    .string()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد")
    .max(32, "رمز عبور نمی‌تواند بیشتر از 32 کاراکتر باشد"),
});

export default SetPasswordSchema;

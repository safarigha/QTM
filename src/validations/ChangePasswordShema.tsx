import { z } from "zod";

const ChangePasswordSchema = z.object({
  old_password: z.string(),
  new_password: z
    .string()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .max(32, "رمز عبور نمی‌تواند بیشتر از 32 کاراکتر باشد"),
  new_password1: z.string(),
});

export default ChangePasswordSchema;

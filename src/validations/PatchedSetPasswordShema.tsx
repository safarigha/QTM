import { z } from "zod";

const PatchedSetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .max(32, "رمز عبور نمی‌تواند بیشتر از 32 کاراکتر باشد"),
  rePassword: z
    .string()
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .max(32, "رمز عبور نمی‌تواند بیشتر از 32 کاراکتر باشد"),
});

export default PatchedSetPasswordSchema;

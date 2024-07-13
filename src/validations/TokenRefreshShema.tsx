import { z } from "zod";

const TokenRefreshSchema = z.object({
  access: z
    .string({ required_error: "دسترسی الزامی است" })
    .nonempty({ message: "دسترسی نباید خالی باشد" }),
  refresh: z
    .string({ required_error: "توکن رفرش الزامی است" })
    .nonempty({ message: "توکن رفرش نباید خالی باشد" }),
});

export default TokenRefreshSchema;

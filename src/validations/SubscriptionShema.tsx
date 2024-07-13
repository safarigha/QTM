import { z } from "zod";

const SubscriptionSchema = z.object({
  workspace: z
    .number()
    .int()
    .positive({ message: "شناسه فضای کاری باید یک عدد مثبت باشد" }),
  email: z.string().email({ message: "فرمت ایمیل وارد شده صحیح نمی‌باشد" }),
});

export default SubscriptionSchema;

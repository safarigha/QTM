import { z } from "zod";

const SubscriptionInvitationSchema = z.object({
  token: z
    .string()
    .max(1000, "طول توکن نمی‌تواند بیشتر از 1000 کاراکتر باشد")
    .min(1, "توکن الزامی است")
    .refine((value) => /^[A-Za-z0-9-_]+$/.test(value), {
      message:
        "توکن فقط می‌تواند شامل حروف انگلیسی بزرگ و کوچک، اعداد، خط تیره و آندرلاین باشد",
    }),
});

export default SubscriptionInvitationSchema;

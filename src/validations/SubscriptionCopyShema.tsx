import { z } from "zod";

const SubscriptionCopySchema = z.object({
  workspace: z
    .number()
    .int()
    .positive({ message: "شناسه فضای کاری باید یک عدد مثبت باشد" }),
});

export default SubscriptionCopySchema;

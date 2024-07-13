import { z } from "zod";

const WorkspaceMemberCreateSchema = z.object({
  id: z
    .number({ required_error: "شناسه الزامی است" })
    .int({ message: "شناسه باید یک عدد صحیح باشد" }),
  user: z
    .string({ required_error: "نام کاربری الزامی است" })
    .max(150, { message: "نام کاربری باید حداکثر ۱۵۰ کاراکتر باشد" })
    .regex(/^[\w.@+-]+$/, {
      message:
        "نام کاربری فقط می‌تواند شامل حروف، اعداد، و علامات @/./+/-/_ باشد",
    }),
  is_super_access: z.boolean({
    required_error: "مشخص کردن وضعیت مدیر کل الزامی است",
  }),
});

export default WorkspaceMemberCreateSchema;

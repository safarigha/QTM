import { z } from "zod";

const TaskAssigneeCreateSchema = z.object({
  user: z
    .string({ required_error: "نام کاربری الزامی است" })
    .max(150, { message: "نام کاربری باید حداکثر ۱۵۰ کاراکتر باشد" })
    .regex(/^[\w.@+-]+$/, {
      message:
        "نام کاربری فقط می‌تواند شامل حروف، اعداد، و علامات @/./+/-/_ باشد",
    }),
});

export default TaskAssigneeCreateSchema;

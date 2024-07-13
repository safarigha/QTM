import { z } from "zod";

const ProjectMemberCreateSchema = z.object({
  id: z.number().int(),
  user: z
    .string()
    .max(150, "نام کاربری نمی‌تواند بیشتر از 150 کاراکتر باشد")
    .regex(/^[\w.@+-]+$/, {
      message:
        "نام کاربری فقط می‌تواند شامل حروف، اعداد، و علامات @/./+/-/_ باشد",
    }),
});

export default ProjectMemberCreateSchema;

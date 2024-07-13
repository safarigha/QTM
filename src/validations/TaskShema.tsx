import { z } from "zod";

const TaskSchema = z.object({
  id: z
    .number({ required_error: "شناسه الزامی است" })
    .int({ message: "شناسه باید یک عدد صحیح باشد" }),
  name: z
    .string({ required_error: "نام الزامی است" })
    .max(255, "نام نمی‌تواند بیشتر از 255 کاراکتر باشد"),
  description: z
    .string()
    .max(500, "توضیحات نمی‌تواند بیشتر از 500 کاراکتر باشد"),
  deadline: z.string({ required_error: "ددلاین الزامی است" }).date(),
  priority: z
    .number()
    .int()
    .min(-9223372036854776000, "حداقل اولویت -9223372036854776000 است")
    .max(9223372036854776000, "حداکثر اولویت 9223372036854776000 است"),
  attachment: z.string().url().nullable(),
  thumbnail: z.string().url().nullable(),
  order: z
    .number()
    .int()
    .min(-9223372036854776000, "حداقل ترتیب -9223372036854776000 است")
    .max(9223372036854776000, "حداکثر ترتیب 9223372036854776000 است"),
  members: z.string({ required_error: "اعضا الزامی هستند" }),
  created_at: z.string({ required_error: "زمان ایجاد الزامی است" }).date(),
});

export default TaskSchema;

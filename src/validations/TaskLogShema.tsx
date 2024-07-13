import { z } from "zod";

const TaskLogSchema = z.object({
  id: z
    .number({ required_error: "شناسه الزامی است" })
    .int({ message: "شناسه باید یک عدد صحیح باشد" }),
  task: z
    .number({ required_error: "شناسه تسک الزامی است" })
    .int({ message: "شناسه تسک باید یک عدد صحیح باشد" }),
  old_priority: z
    .number()
    .int()
    .max(2147483647, {
      message: "اولویت قدیمی نمی‌تواند بیشتر از 2147483647 باشد",
    })
    .min(-2147483648, {
      message: "اولویت قدیمی نمی‌تواند کمتر از -2147483648 باشد",
    })
    .optional(),
  new_priority: z
    .number()
    .int()
    .max(2147483647, {
      message: "اولویت جدید نمی‌تواند بیشتر از 2147483647 باشد",
    })
    .min(-2147483648, {
      message: "اولویت جدید نمی‌تواند کمتر از -2147483648 باشد",
    })
    .optional(),
});

export default TaskLogSchema;

import { z } from "zod";

const TaskCommentSchema = z.object({
  id: z
    .number({ required_error: "شناسه الزامی است" })
    .int({ message: "شناسه باید یک عدد صحیح باشد" }),
  author: z.number().nullable(),
  attachment: z.string().nullable(),
  text: z
    .string({ required_error: "متن الزامی است" })
    .max(500, { message: "متن نمی‌تواند بیشتر از 500 کاراکتر باشد" }),
});

export default TaskCommentSchema;

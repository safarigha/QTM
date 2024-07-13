import { z } from "zod";

const WorkspaceSchema = z.object({
  id: z
    .number({ required_error: "شناسه الزامی است" })
    .int({ message: "شناسه باید یک عدد صحیح باشد" }),
  name: z
    .string({ required_error: "نام الزامی است" })
    .max(255, { message: "نام باید حداکثر ۲۵۵ کاراکتر باشد" }),
  color: z
    .string()
    .max(256, { message: "رنگ باید حداکثر ۲۵۶ کاراکتر باشد" })
    .optional(),
});

export default WorkspaceSchema;

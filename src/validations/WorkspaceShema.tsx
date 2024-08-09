import { z } from "zod";

const WorkspaceSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "عنوان فضای کاری الزامی است" })
    .min(6, { message: "نام کاربری باید حداقل 6 کاراکتر باشد" })
    .max(255, { message: "عنوان فضای کاری باید حداکثر ۲۵۵ کاراکتر باشد" }),
  color: z
    .string()
    .nonempty({ message: " انتخاب رنگ لیبل فضای کاری الزامی است" }),
});

export default WorkspaceSchema;

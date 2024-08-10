import { z } from "zod";

const WorkspaceSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "عنوان فضای کاری الزامی است" })
    .min(3, { message: "عنوان فضای کاری باید حداقل 3 کاراکتر باشد" })
    .max(255, { message: "عنوان فضای کاری باید حداکثر ۲۵۵ کاراکتر باشد" }),
  color: z
    .string()
    .nonempty({ message: " انتخاب رنگ لیبل فضای کاری الزامی است" }),
});

export default WorkspaceSchema;

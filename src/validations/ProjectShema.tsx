import { z } from "zod";

const ProjectSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "عنوان پروژه الزامی است" })
    .min(3, { message: "عنوان پروژه باید حداقل 3 کاراکتر باشد" })
    .max(255, { message: "عنوان پروژه باید حداکثر ۲۵۵ کاراکتر باشد" }),
});

export default ProjectSchema;

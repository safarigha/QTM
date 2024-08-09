import { z } from "zod";

const ProjectSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "عنوان پروژه الزامی است" })
    .min(6, { message: "عنوان پروژه باید حداقل 6 کاراکتر باشد" })
    .max(255, { message: "عنوان پروژه باید حداکثر ۲۵۵ کاراکتر باشد" }),
});

export default ProjectSchema;

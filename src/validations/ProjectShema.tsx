import { z } from "zod";

const ProjectSchema = z.object({
  id: z.number().int(),
  name: z.string().max(255, "نام نمی‌تواند بیشتر از 255 کاراکتر باشد"),
});

export default ProjectSchema;

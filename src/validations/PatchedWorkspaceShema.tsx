import { z } from "zod";

const PatchedWorkspaceSchema = z.object({
  id: z.number().int(),
  name: z.string().max(255, "نام نمی‌تواند بیشتر از 255 کاراکتر باشد"),
  color: z.string().max(256, "رنگ نمی‌تواند بیشتر از 256 کاراکتر باشد"),
});

export default PatchedWorkspaceSchema;

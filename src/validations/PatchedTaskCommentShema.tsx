import { z } from "zod";

const PatchedTaskCommentSchema = z.object({
  id: z.number().int(),
  author: z.number().int().nullable(),
  attachment: z.string().url().nullable(),
  text: z.string().max(500, "متن نمی‌تواند بیشتر از 500 کاراکتر باشد"),
});

export default PatchedTaskCommentSchema;

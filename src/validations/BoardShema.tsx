import { z } from "zod";

const BoardSchema = z.object({
  id: z.number().int(),
  name: z.string().max(200, "نام نمی‌تواند بیشتر از 200 کاراکتر باشد"),
  order: z
    .number()
    .int()
    .min(
      -9223372036854776000,
      "حداقل مقدار برای ترتیب -9223372036854776000 است"
    )
    .max(
      9223372036854776000,
      "حداکثر مقدار برای ترتیب 9223372036854776000 است"
    ),
  tasks: z.string(),
  tasks_count: z.string(),
  is_archive: z.boolean(),
  color: z
    .string()
    .max(256, "رنگ نمی‌تواند بیشتر از 256 کاراکتر باشد")
    .optional(),
});

export default BoardSchema;

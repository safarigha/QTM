import { z } from "zod";

const PatchedTaskSchema = z.object({
  id: z.number().int(),
  name: z.string().max(255, "نام نمی‌تواند بیشتر از 255 کاراکتر باشد"),
  description: z
    .string()
    .max(500, "توضیحات نمی‌تواند بیشتر از 500 کاراکتر باشد")
    .optional(),
  deadline: z.string().date().optional(), // Assuming $date validation needs customization in Zod
  priority: z
    .number()
    .int()
    .min(
      -9223372036854776000,
      "حداقل مقدار برای اولویت -9223372036854776000 است"
    )
    .max(
      9223372036854776000,
      "حداکثر مقدار برای اولویت 9223372036854776000 است"
    ),
  attachment: z.string().url().nullable().optional(),
  thumbnail: z.string().url().nullable().optional(),
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
  members: z.string().optional(),
  created_at: z.string().date().optional(), // Assuming $date-time validation needs customization in Zod
});

export default PatchedTaskSchema;

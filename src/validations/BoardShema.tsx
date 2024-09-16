import { z } from "zod";

const BoardSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "عنوان برد الزامی است" })
    .min(3, { message: "عنوان برد باید حداقل 3 کاراکتر باشد" })
    .max(255, { message: "عنوان برد باید حداکثر ۲۵۵ کاراکتر باشد" }),
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
  color: z.string().nonempty({ message: " انتخاب رنگ لیبل برد الزامی است" }),
});

export default BoardSchema;

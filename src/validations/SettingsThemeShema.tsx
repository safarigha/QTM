import { z } from "zod";

const SettingsThemeSchema = z.object({
  theme: z
    .string()
    .nonempty({ message: "انتخاب رنگ قالب پوستته و مود شب یا روز الزامی است" })
    .max(10, "رنگ تم نمی‌تواند بیشتر از 10 کاراکتر باشد"),
});

export default SettingsThemeSchema;

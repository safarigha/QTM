import { z } from "zod";

const SettingsThemeSchema = z.object({
  theme: z.string().max(10, "رنگ تم نمی‌تواند بیشتر از 10 کاراکتر باشد"),
});

export default SettingsThemeSchema;

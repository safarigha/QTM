import { useDispatch } from "react-redux";
import { AppDispatch } from "../configs/servers/store";
import { getTailwindColor } from "../helpers/getHexColor";
import { setThemeColor } from "../configs/servers/colorSlice";
import { getSettings } from "../configs/APIs/settingsApi";

const useThemeSettings = () => {
  const dispatch = useDispatch<AppDispatch>();

  const applyThemeSettings = (theme: string) => {
    const [color, mode] = theme.split(",");
    const colorWithHash = `${getTailwindColor(`#${color}`)}`;

    if (mode === "LM") localStorage.setItem("theme", "light");
    if (mode === "DM") localStorage.setItem("theme", "dark");

    document.documentElement.setAttribute(
      "data-theme",
      mode === "LM" ? "light" : "dark"
    );

    dispatch(setThemeColor({ colorClass: colorWithHash, colorName: "" }));
  };

  const fetchAndApplyThemeSettings = async () => {
    try {
      const settingsResponse = await getSettings();
      const responseColorTheme = settingsResponse.data[0]?.theme || "";
      applyThemeSettings(responseColorTheme);
      return responseColorTheme;
    } catch (error) {
      return "اعمال تنظیمات پوسته به مشکل خورده است";
    }
  };

  return { applyThemeSettings, fetchAndApplyThemeSettings };
};

export default useThemeSettings;

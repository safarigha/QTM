import { useDispatch } from "react-redux";
import { AppDispatch } from "../configs/servers/store";
import { getTailwindColor } from "../helpers/getHexColor";
import { setThemeColor } from "../configs/servers/colorSlice";
import { getSettings } from "../configs/APIs/settingsApi";
import { useEffect } from "react";

const useThemeSettings = () => {
  const dispatch = useDispatch<AppDispatch>();

  const applyThemeSettings = (theme: string) => {
    const [color, mode] = theme.split(",");
    const colorWithHash = `${getTailwindColor(`#${color}`)}`;

    if (mode === "LM") localStorage.setItem("theme", "light");
    if (mode === "DM") localStorage.setItem("theme", "dark");
    localStorage.setItem("color", colorWithHash.split("-")[1]);

    document.documentElement.setAttribute(
      "data-theme",
      mode === "LM" ? "light" : "dark"
    );

    dispatch(setThemeColor({ colorClass: colorWithHash, colorName: "" }));
  };

  const loadThemeFromLocalStorage = () => {
    const storedTheme = localStorage.getItem("theme");
    const storedColor = localStorage.getItem("color");

    if (storedTheme && storedColor) {
      let colorClass;
      if (storedColor === "brand") colorClass = `bg-${storedColor}-primary`;
      else colorClass = `bg-${storedColor}-500`;
      dispatch(setThemeColor({ colorClass, colorName: "" }));
      document.documentElement.setAttribute("data-theme", storedTheme);
      return colorClass;
    }
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

  useEffect(() => {
    loadThemeFromLocalStorage();
  }, []);

  return {
    applyThemeSettings,
    fetchAndApplyThemeSettings,
    loadThemeFromLocalStorage,
  };
};

export default useThemeSettings;

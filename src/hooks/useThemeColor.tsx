import { useState, useEffect } from "react";
import useThemeSettings from "./useThemeSetting";

const useThemeColor = () => {
  const { loadThemeFromLocalStorage } = useThemeSettings();
  const [themeColor, setThemeColor] = useState<string>("bg-brand-primary");

  useEffect(() => {
    const color = loadThemeFromLocalStorage() || "bg-brand-primary";
    setThemeColor(color);
  }, [loadThemeFromLocalStorage]);

  const textColor = `text-${themeColor.split("-")[1]}-${
    themeColor.split("-")[2]
  }`;
  const borderColor = `border-${themeColor.split("-")[1]}-${
    themeColor.split("-")[2]
  }`;

  return { themeColor, textColor, borderColor };
};

export default useThemeColor;

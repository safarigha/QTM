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

  const formModeStyle =
    localStorage.getItem("theme") === "dark"
      ? {
          bg: "bg-[#1D232A]",
          text: "text-white",
          border: "border-[#1D232A]",
          code: "#000000",
          textCode: "#FFFFFF",
        }
      : {
          bg: "bg-white",
          text: "text-black",
          border: "border-gray-100",
          code: "#FFFFFF",
          textCode: "#000000",
        };

  return { themeColor, textColor, borderColor, formModeStyle };
};

export default useThemeColor;

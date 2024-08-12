import { RootState } from "../configs/servers/store";
import { useSelector } from "react-redux";

const useThemeColor = () => {
  const { themeColor } = useSelector((state: RootState) => state.color);

  const getThemeClass = (baseClass: string) => {
    return baseClass.replace(/brand-primary/g, themeColor.split("-")[1]);
  };

  const textColor = `text-${themeColor.split("-")[1]}-${
    themeColor.split("-")[2]
  }`;
  const borderColor = `border-${themeColor.split("-")[1]}-${
    themeColor.split("-")[2]
  }`;

  return { getThemeClass, themeColor, textColor, borderColor };
};

export default useThemeColor;

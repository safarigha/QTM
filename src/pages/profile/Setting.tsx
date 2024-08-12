import React from "react";
import BrandColorButton from "../../components/commons/UI/buttons/BrandColorButton";
import ColorCheckboxesList from "../../components/commons/UI/checkbox/ColorCheckboxesList";
import SwitchModeTheme from "../../components/commons/UI/SwitchModeTheme";
import { useDispatch, useSelector } from "react-redux";
import {
  resetThemeColor,
  setThemeColor,
} from "../../configs/servers/colorSlice";
import { AppDispatch, RootState } from "../../configs/servers/store";
import useThemeColor from "../../hooks/useThemeColor";

const Setting: React.FC = () => {
  const { textColor } = useThemeColor();
  const dispatch = useDispatch<AppDispatch>();
  // const { themeColor } = useSelector((state: RootState) => state.color);

  const handleColorChange = (colorClass: string, colorName: string) => {
    dispatch(setThemeColor({ colorClass, colorName }));
  };

  const handleColorDefault = () => {
    dispatch(resetThemeColor());
  };
  return (
    <form className="h-[252px]">
      <h1 className={`text-center ${textColor} text-3xl font-bold mb-6`}>
        تنظیمات
      </h1>
      <span className="mb-2 text-[14px] font-bold">انتخاب رنگ قالب پوسته</span>
      <ColorCheckboxesList
        className="mt-2 mb-4"
        onColorChange={handleColorChange}
      />
      <div className="flex items-center">
        <SwitchModeTheme />
        <BrandColorButton
          type="submit"
          classNames={`h-[35px] mb-2 mr-auto text-white font-semibold shadow-inner shadow-white/10 focus:outline-none`}
          text="بازنشانی به حالت اولیه"
          onClick={() => handleColorDefault()}
        />
      </div>
      <div className="text-center">
        <BrandColorButton
          type="submit"
          classNames={`mt-6 w-[354px] h-10 text-white font-semibold shadow-inner shadow-white/10 focus:outline-none`}
          text="ثبت تغییرات"
        />
      </div>
    </form>
  );
};

export default Setting;

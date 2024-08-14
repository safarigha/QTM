import React, { useState } from "react";
import BrandColorButton from "../../components/commons/UI/buttons/BrandColorButton";
import ColorCheckboxesList from "../../components/commons/UI/checkbox/ColorCheckboxesList";
import SwitchModeTheme from "../../components/commons/UI/SwitchModeTheme";
import { useDispatch } from "react-redux";
import {
  resetThemeColor,
  setThemeColor,
} from "../../configs/servers/colorSlice";
import { AppDispatch } from "../../configs/servers/store";
import useThemeColor from "../../hooks/useThemeColor";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useToast from "../../hooks/useToast";
import { getErrorMessage } from "../../helpers/errorMessages";
import SettingsThemeSchema from "../../validations/SettingsThemeShema";
import { updateSettings } from "../../configs/APIs/settingsApi";
import { getHexColor } from "../../helpers/getHexColor";
import getThemeMode from "../../helpers/getThemeMode";
import { ISettingsFormData } from "../../configs/interfaces";

const Setting: React.FC = () => {
  const { textColor } = useThemeColor();
  const dispatch = useDispatch<AppDispatch>();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const { showSuccess, showError } = useToast();

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ISettingsFormData>({
    resolver: zodResolver(SettingsThemeSchema),
  });

  const setTheme = (color: string) => {
    const updatedTheme = `${color},${getThemeMode()}`;
    setSelectedColor(updatedTheme);
    setValue("theme", updatedTheme);
  };

  const handleColorChange = (colorClass: string, colorName: string) => {
    const hexColor = `${getHexColor(colorClass).split("#")[1]}`;
    setTheme(hexColor);
    dispatch(setThemeColor({ colorClass, colorName }));
  };

  const handleColorDefault = async () => {
    const defaultColor = `208D8E`;
    setTheme(defaultColor);
    dispatch(resetThemeColor());
    try {
      await handleSubmit(handleFormSubmit)();
    } catch (error: any) {
      const statusCode = error.response?.status;
      const errorMessage = getErrorMessage("server", statusCode);
      showError(errorMessage);
    }
  };

  const handleSwitchModeTheme = () => {
    const currentTheme = `${
      selectedColor ? selectedColor.split(",")[0] : "208D8E"
    }`;
    setTheme(currentTheme);
  };

  const handleFormSubmit = async (data: ISettingsFormData) => {
    try {
      await updateSettings(data);
      showSuccess("created");
    } catch (error: any) {
      const statusCode = error.response?.status;
      const errorMessage = getErrorMessage("server", statusCode);
      showError(errorMessage);
    }
  };

  return (
    <form className="h-[252px]" onSubmit={handleSubmit(handleFormSubmit)}>
      <h1 className={`text-center ${textColor} text-3xl font-bold mb-6`}>
        تنظیمات
      </h1>
      <span className="mb-2 text-[14px] font-bold">انتخاب رنگ قالب پوسته</span>
      <ColorCheckboxesList
        className="mt-2 mb-4"
        onColorChange={handleColorChange}
      />
      <div className="flex items-center">
        <SwitchModeTheme onClick={handleSwitchModeTheme} />
        <BrandColorButton
          type="button"
          classNames={`h-[35px] mb-2 mr-auto text-white font-semibold shadow-inner shadow-white/10 focus:outline-none`}
          text="بازنشانی به حالت اولیه"
          onClick={handleColorDefault}
        />
      </div>
      <div className="text-center">
        <BrandColorButton
          type="submit"
          classNames={`mt-6 w-[354px] h-10 text-white font-semibold shadow-inner shadow-white/10 focus:outline-none`}
          text="ثبت تغییرات"
        />
      </div>
      {errors.theme && (
        <p className="text-red-500 text-xs mt-2">
          {errors.theme.message as string}
        </p>
      )}
    </form>
  );
};

export default Setting;

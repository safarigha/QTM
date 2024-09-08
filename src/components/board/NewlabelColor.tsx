import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ColorCheckboxesList from "../commons/UI/checkbox/ColorCheckboxesList";
import BrandColorButton from "../commons/UI/buttons/BrandColorButton";
import {
  INewlabelColor,
  INewWorkspaceFormData,
} from "../../configs/interfaces";
import WorkspaceSchema from "../../validations/WorkspaceShema";
import {
  setCreatorName,
  setLabelColor,
} from "../../configs/servers/formNewWorkspaceSlice";
import { AppDispatch, RootState } from "../../configs/servers/store";
import { useDispatch, useSelector } from "react-redux";
import { GrLinkPrevious } from "react-icons/gr";
import useThemeColor from "../../hooks/useThemeColor";
import { useState } from "react";

const colorWorkspaceSchema = WorkspaceSchema.pick({ color: true });

const NewlabelColor: React.FC<INewlabelColor> = ({ onSuccess, onPrevious }) => {
  const { textColor, formModeStyle } = useThemeColor();

  const dispatch = useDispatch<AppDispatch>();
  const { labelColor, colorName } = useSelector(
    (state: RootState) => state.formNewWorkspace
  );
  const creatorName = useSelector(
    (state: RootState) => state.account.data.username
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<INewWorkspaceFormData>({
    resolver: zodResolver(colorWorkspaceSchema),
  });

  const handleColorChange = (color: string, name: string) => {
    setValue("color", color);
    dispatch(setLabelColor({ colorClass: color, colorName: name }));
    dispatch(setCreatorName(creatorName));
  };

  const handleFormSubmit = (data: any) => {
    onSuccess(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
      <div className="flex items-center justify-center">
        <div
          className={`flex border flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl ${formModeStyle.bg}`}
        >
          <GrLinkPrevious
            onClick={onPrevious}
            className="size-4 transform -translate-x-[287px] -translate-y-[6px]"
          />

          <p
            className={`font-extrabold ${textColor} justify-center w-fit pb-2 text-[32px]`}
          >
            انتخاب رنگ لیبل فضای کاری جدید
          </p>

          <div className="mt-2 flex items-center">
            <div
              className={`w-[80px] h-[80px] flex items-center justify-center rounded-[12px] ml-4 ${labelColor}`}
            >
              <p className="text-white text-center text-sm p-4">
                رنگ {colorName}
              </p>
            </div>
            <div>
              <label className={`${textColor}`}>رنگ فضای کاری</label>
              <ColorCheckboxesList
                className="mt-2"
                onColorChange={handleColorChange}
              />
            </div>
          </div>
          <input
            type="hidden"
            {...register("color")}
            value={labelColor || ""}
          />
          <BrandColorButton
            text="ادامه"
            classNames="mt-6 w-full h-10"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default NewlabelColor;

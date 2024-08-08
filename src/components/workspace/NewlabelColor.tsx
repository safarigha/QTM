import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ColorCheckboxesList from "../commons/UI/checkbox/ColorCheckboxesList";
import { useState } from "react";
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

const colorWorkspaceSchema = WorkspaceSchema.pick({ color: true });

const NewlabelColor: React.FC<INewlabelColor> = ({ onNext }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedColor, setSelectedColor] = useState<string>("bg-gray-500");
  const [colorName, setColorName] = useState<string>("پیش‌فرض");
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
    setSelectedColor(color);
    setColorName(name);
    setValue("color", color);
    dispatch(setLabelColor(color));
    dispatch(setCreatorName(creatorName));
  };

  const handleFormSubmit = (data: any) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
      <div className="flex items-center justify-center">
        <div className="flex bg-white flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl">
          <p className="font-extrabold text-brand-primary justify-center w-fit pb-2 text-[32px]">
            انتخاب رنگ لیبل فضای کاری جدید
          </p>

          <div className="mt-2 flex items-center">
            <div
              className={`w-[80px] h-[80px] flex items-center justify-center rounded-[12px] ml-4 ${selectedColor}`}
            >
              <p className="text-white text-center text-sm p-4">
                رنگ {colorName}
              </p>
            </div>
            <div>
              <label className="text-brand-primary">رنگ فضای کاری</label>
              <ColorCheckboxesList
                className="mt-2"
                onColorChange={handleColorChange}
              />
            </div>
          </div>
          <input
            type="hidden"
            {...register("color")}
            value={selectedColor || ""}
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

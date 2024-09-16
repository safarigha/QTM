import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ColorCheckboxesList from "../commons/UI/checkbox/ColorCheckboxesList";
import BrandColorButton from "../commons/UI/buttons/BrandColorButton";
import { INewlabelColor, INewBoardFormData } from "../../configs/interfaces";
import BoardSchema from "../../validations/BoardShema";
import {
  setCreatorName,
  setLabelColor,
} from "../../configs/servers/formNewBoardSlice";
import { AppDispatch, RootState } from "../../configs/servers/store";
import { useDispatch, useSelector } from "react-redux";
import { GrLinkPrevious } from "react-icons/gr";
import useThemeColor from "../../hooks/useThemeColor";
import { createBoard } from "../../configs/APIs/boardsApi";
import useToast from "../../hooks/useToast";

const colorBoardSchema = BoardSchema.pick({ color: true });
const { showSuccess, showError } = useToast();

const NewlabelColor: React.FC<INewlabelColor> = ({ onSuccess, onPrevious }) => {
  const { textColor, formModeStyle } = useThemeColor();

  const dispatch = useDispatch<AppDispatch>();
  const { labelColor, colorName } = useSelector(
    (state: RootState) => state.formNewBoardspace
  );
  const creatorName = useSelector(
    (state: RootState) => state.account.data.username
  );

  // سلیکتورهای Redux
  const selectCurrentWorkspaceId = (state: RootState) =>
    state.workspaces.currentWorkspaceId;
  const selectCurrentProjectId = (state: RootState) =>
    state.projects.currentProject?.id;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<INewBoardFormData>({
    resolver: zodResolver(colorBoardSchema),
  });

  const handleColorChange = (color: string, name: string) => {
    setValue("color", color);
    dispatch(setLabelColor({ colorClass: color, colorName: name }));
    dispatch(setCreatorName(creatorName));
  };

  const handleFormSubmit = async (data: INewBoardFormData) => {
    const workspaceId = useSelector(selectCurrentWorkspaceId);
    const projectId = useSelector(selectCurrentProjectId);

    if (!workspaceId || !projectId) {
      return `از صحت انتخاب فضای کاری و پروژه برای برد جدید اطمینان حاصل کنید`;
    }

    try {
      await createBoard(workspaceId, projectId, data);
      showSuccess("created");
      // onSuccess();
    } catch (error: any) {
      return `در ایجاد برد جدید با مشکل روبرو شده‌اید`;
    }
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
            انتخاب رنگ لیبل برد جدید
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
              <label className={`${textColor}`}>رنگ برد</label>
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
            text="تائید"
            classNames="mt-6 w-full h-10"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default NewlabelColor;

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import ColorCheckboxesList from "../commons/UI/checkbox/ColorCheckboxesList";
// import BrandColorButton from "../commons/UI/buttons/BrandColorButton";
// import { INewlabelColor, INewBoardFormData } from "../../configs/interfaces";
// import BoardSchema from "../../validations/BoardShema";
// import {
//   setCreatorName,
//   setLabelColor,
// } from "../../configs/servers/formNewBoardSlice";
// import { AppDispatch, RootState } from "../../configs/servers/store";
// import { useDispatch, useSelector } from "react-redux";
// import { GrLinkPrevious } from "react-icons/gr";
// import useThemeColor from "../../hooks/useThemeColor";
// import { createBoard } from "../../configs/APIs/boardsApi";
// import useToast from "../../hooks/useToast";

// const colorBoardSchema = BoardSchema.pick({ color: true });

// const NewlabelColor: React.FC<INewlabelColor> = ({ onSuccess, onPrevious }) => {
//   const { textColor, formModeStyle } = useThemeColor();
//   const { showSuccess, showError } = useToast();

//   const dispatch = useDispatch<AppDispatch>();
//   const { labelColor, colorName } = useSelector(
//     (state: RootState) => state.formNewBoardspace
//   );
//   const creatorName = useSelector(
//     (state: RootState) => state.account.data.username
//   );

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm<INewBoardFormData>({
//     resolver: zodResolver(colorBoardSchema),
//   });

//   const handleColorChange = (color: string, name: string) => {
//     setValue("color", color);
//     dispatch(setLabelColor({ colorClass: color, colorName: name }));
//     dispatch(setCreatorName(creatorName));
//   };

//   const handleFormSubmit = async (data: INewBoardFormData) => {
//     try {
//       const response = await createBoard(data);
//       showSuccess("created");
//       dispatch(fetchWorkspaces());
//       dispatch(setLabelColor({ colorClass: themeColor, colorName: "" }));
//       onSuccess();
//     } catch (error: any) {
//       const statusCode = error.response?.status;
//       const errorMessage = getErrorMessage("server", statusCode);
//       showError(errorMessage);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
//       <div className="flex items-center justify-center">
//         <div
//           className={`flex border flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl ${formModeStyle.bg}`}
//         >
//           <GrLinkPrevious
//             onClick={onPrevious}
//             className="size-4 transform -translate-x-[287px] -translate-y-[6px]"
//           />

//           <p
//             className={`font-extrabold ${textColor} justify-center w-fit pb-2 text-[32px]`}
//           >
//             انتخاب رنگ لیبل برد جدید
//           </p>

//           <div className="mt-2 flex items-center">
//             <div
//               className={`w-[80px] h-[80px] flex items-center justify-center rounded-[12px] ml-4 ${labelColor}`}
//             >
//               <p className="text-white text-center text-sm p-4">
//                 رنگ {colorName}
//               </p>
//             </div>
//             <div>
//               <label className={`${textColor}`}>رنگ برد</label>
//               <ColorCheckboxesList
//                 className="mt-2"
//                 onColorChange={handleColorChange}
//               />
//             </div>
//           </div>
//           <input
//             type="hidden"
//             {...register("color")}
//             value={labelColor || ""}
//           />
//           <BrandColorButton
//             text="تائید"
//             classNames="mt-6 w-full h-10"
//             type="submit"
//           />
//         </div>
//       </div>
//     </form>
//   );
// };

// export default NewlabelColor;

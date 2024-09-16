import {
  IField,
  INewBoardFormData,
  INewBoardSteps,
} from "../../configs/interfaces";
import InputForm from "../commons/forms/InputForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../configs/servers/store";
import useThemeColor from "../../hooks/useThemeColor";
import BoardSchema from "../../validations/BoardShema";
import { setBoardName } from "../../configs/servers/formNewBoardSlice";

const nameBoardSchema = BoardSchema.pick({ name: true });

const NewTitle: React.FC<INewBoardSteps> = ({ onNext }) => {
  const { textColor, formModeStyle } = useThemeColor();

  const dispatch = useDispatch<AppDispatch>();

  const handleContinueSubmit = async (data: INewBoardFormData) => {
    const BoardName = data.name || "";
    dispatch(setBoardName(BoardName));
    onNext(data);
  };

  const fields: IField[] = [
    {
      id: "name",
      type: "text",
      label: "نام برد",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div
        className={`flex border flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl ${formModeStyle.bg}`}
      >
        <p
          className={`font-extrabold ${textColor} justify-center w-fit pb-2 text-[32px]`}
        >
          ایجاد برد جدید
        </p>
        <InputForm
          fields={fields}
          submitText="ادامه"
          schema={nameBoardSchema}
          onSubmit={handleContinueSubmit}
        />
      </div>
    </div>
  );
};

export default NewTitle;

// import {
//   IField,
//   INewBoardFormData,
//   INewBoardSteps,
// } from "../../configs/interfaces";
// import InputForm from "../commons/forms/InputForm";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../configs/servers/store";
// import useThemeColor from "../../hooks/useThemeColor";
// import BoardSchema from "../../validations/BoardShema";
// import { setBoardName } from "../../configs/servers/formNewBoardSlice";

// const nameBoardSchema = BoardSchema.pick({ name: true });

// const NewTitle: React.FC<INewBoardSteps> = ({ onNext }) => {
//   const { textColor, formModeStyle } = useThemeColor();

//   const dispatch = useDispatch<AppDispatch>();

//   const handleContinueSubmit = async (data: INewBoardFormData) => {
//     const BoardName = data.name || "";
//     dispatch(setBoardName(BoardName));
//     onNext(data);
//   };

//   const fields: IField[] = [
//     {
//       id: "name",
//       type: "text",
//       label: "نام برد",
//     },
//   ];

//   return (
//     <div className="flex items-center justify-center">
//       <div
//         className={`flex border flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl ${formModeStyle.bg}`}
//       >
//         <p
//           className={`font-extrabold ${textColor} justify-center w-fit pb-2 text-[32px]`}
//         >
//           ایجاد برد جدید
//         </p>
//         <InputForm
//           fields={fields}
//           submitText="ادامه"
//           schema={nameBoardSchema}
//           onSubmit={handleContinueSubmit}
//         />
//       </div>
//     </div>
//   );
// };

// export default NewTitle;

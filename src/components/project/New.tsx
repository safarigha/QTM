import {
  IField,
  INewWorkspaceFormData,
  INewWorkspaceSteps,
} from "../../configs/interfaces";
import InputForm from "../commons/forms/InputForm";
import WorkspaceSchema from "../../validations/WorkspaceShema";
import { setWorkspaceName } from "../../configs/servers/formNewWorkspaceSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../configs/servers/store";

const nameWorkspaceSchema = WorkspaceSchema.pick({ name: true });

const New: React.FC<INewWorkspaceSteps> = ({ onNext }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleContinueSubmit = async (data: INewWorkspaceFormData) => {
    const workspaceName = data.name || "";
    dispatch(setWorkspaceName(workspaceName));
    onNext(data);
  };

  const fields: IField[] = [
    {
      id: "name",
      type: "text",
      label: "نام پروژه",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="flex border flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl">
        <p className="font-extrabold text-brand-primary justify-center w-fit pb-2 text-[32px]">
          ایجاد پروژه جدید
        </p>
        <InputForm
          fields={fields}
          submitText="ثبت"
          schema={nameWorkspaceSchema}
          onSubmit={handleContinueSubmit}
        />
      </div>
    </div>
  );
};

export default New;

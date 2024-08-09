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
import { useForm } from "react-hook-form";

const nameWorkspaceSchema = WorkspaceSchema.pick({ name: true });

const NewTitle: React.FC<INewWorkspaceSteps> = ({ onNext }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { handleSubmit, register } = useForm<INewWorkspaceFormData>({
    defaultValues: {
      name: "",
    },
  });
  const handleContinueSubmit = async (data: INewWorkspaceFormData) => {
    const workspaceName = data.name || "";
    dispatch(setWorkspaceName(workspaceName));
    onNext(data);
  };

  const fields: IField[] = [
    {
      id: "name",
      type: "text",
      label: "نام فضای کاری",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="flex border flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl">
        <p className="font-extrabold text-brand-primary justify-center w-fit pb-2 text-[32px]">
          ایجاد فضای کاری جدید
        </p>
        <InputForm
          fields={fields}
          submitText="ادامه"
          schema={nameWorkspaceSchema}
          onSubmit={handleContinueSubmit}
        />
      </div>
    </div>
  );
};

export default NewTitle;

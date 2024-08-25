import {
  IField,
  INewProjectFormData,
  NewProjectProps,
} from "../../configs/interfaces";
import InputForm from "../commons/forms/InputForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../configs/servers/store";
import ProjectSchema from "../../validations/ProjectShema";
import useToast from "../../hooks/useToast";
import { getErrorMessage } from "../../helpers/errorMessages";
import { createProject } from "../../configs/APIs/projectsApi";
import CloseButton from "../commons/UI/buttons/CloseButton";
import { useNavigate } from "react-router-dom";
import { fetchProjects } from "../../configs/servers/projectSlice";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useThemeColor from "../../hooks/useThemeColor";

const nameProjectSchema = ProjectSchema.pick({ name: true });

const New: React.FC<NewProjectProps> = ({ onClose, workspaceId }) => {
  const { textColor, formModeStyle } = useThemeColor();

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { showSuccess, showError } = useToast();
  // const workspaceId = useSelector(
  //   (state: RootState) => state.workspaces.currentWorkspaceId
  // );
  const workspace = useSelector((state: RootState) =>
    state.workspaces.workspaces.find((ws) => ws.id === workspaceId)
  );
  const { reset } = useForm<INewProjectFormData>();

  const handleProjectSubmit = async (data: INewProjectFormData) => {
    try {
      if (!workspaceId) {
        return "فضای کاری مورد نطر یافت نمیشود";
      }
      const response = await createProject(workspaceId, data);
      showSuccess("created");
      dispatch(fetchProjects(workspaceId));
      onClose();
      navigate("/dashboard");
    } catch (error: any) {
      const statusCode = error.response?.status;
      const errorMessage = getErrorMessage("server", statusCode);
      showError(errorMessage);
    }
  };

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  const fields: IField[] = [
    {
      id: "name",
      type: "text",
      label: "نام پروژه",
    },
  ];

  return (
    <div className="flex items-center justify-center ">
      <div
        className={`flex border flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl ${formModeStyle.bg}`}
      >
        <CloseButton
          className="transform -translate-y-[8px] translate-x-[290px]"
          onClick={onClose}
        />
        <p
          className={`font-extrabold ${textColor} justify-center w-fit pb-2 text-[32px]`}
        >
          ایجاد پروژه جدید
        </p>
        <InputForm
          fields={fields}
          submitText="ثبت"
          schema={nameProjectSchema}
          onSubmit={handleProjectSubmit}
        />
      </div>
    </div>
  );
};

export default New;

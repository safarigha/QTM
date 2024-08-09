import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../configs/servers/store";
import BrandColorButton from "../commons/UI/buttons/BrandColorButton";
import { createWorkspace } from "../../configs/APIs/workspacesApi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import WorkspaceSchema from "../../validations/WorkspaceShema";
import useToast from "../../hooks/useToast";
import { getErrorMessage } from "../../helpers/errorMessages";
import {
  INewWorkspaceFormData,
  NewDisplayDataProps,
} from "../../configs/interfaces";
import { fetchWorkspaces } from "../../configs/servers/workspaceSlice";
import { setLabelColor } from "../../configs/servers/formNewWorkspaceSlice";
import { GrLinkPrevious } from "react-icons/gr";

const NewDisplayData: React.FC<NewDisplayDataProps> = ({
  onSuccess,
  onPrevious,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const workspaceName = useSelector(
    (state: RootState) => state.formNewWorkspace.workspaceName
  );
  const labelColor = useSelector(
    (state: RootState) => state.formNewWorkspace.labelColor
  );
  const creatorName = useSelector(
    (state: RootState) => state.formNewWorkspace.creatorName
  );

  const { showSuccess, showError } = useToast();

  const { handleSubmit } = useForm<INewWorkspaceFormData>({
    resolver: zodResolver(WorkspaceSchema),
    defaultValues: {
      name: workspaceName,
      color: labelColor || "bg-gray-500",
    },
  });

  const handleFormSubmit = async (data: INewWorkspaceFormData) => {
    try {
      const response = await createWorkspace(data);
      showSuccess("created");
      dispatch(fetchWorkspaces());
      dispatch(setLabelColor("bg-gray-500"));
      onSuccess();
    } catch (error: any) {
      const statusCode = error.response?.status;
      const errorMessage = getErrorMessage("server", statusCode);
      showError(errorMessage);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex items-center justify-center"
    >
      <div className="flex border flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl">
        <GrLinkPrevious
          onClick={onPrevious}
          className="size-4 transform -translate-x-[287px] -translate-y-[6px]"
        />
        <h2 className="font-extrabold text-brand-primary justify-center w-fit pb-2 text-[32px] mb-[30px]">
          مرور اطلاعات
        </h2>
        <div className="w-[453px] border rounded-[8px]">
          <div className="flex font-extrabold	text-md m-4">
            <h3>نام فضای کاری</h3>
            <p className="mr-auto"> {workspaceName}</p>
          </div>
          <div className="flex font-extrabold	text-md m-4">
            <h3> رنگ لیبل</h3>
            <span
              className={`inline-block size-5 rounded-[2px] ${labelColor} mr-auto`}
            ></span>
          </div>
          <div className="flex font-extrabold	text-md m-4">
            <h3>اعضا</h3>
            <p className="mr-auto"> {creatorName}</p>
          </div>
        </div>
        <BrandColorButton
          text="تایید و ایجاد فضای کاری"
          type="submit"
          classNames="mt-[40px] w-[410px] h-[40px]"
        />
      </div>
    </form>
  );
};

export default NewDisplayData;

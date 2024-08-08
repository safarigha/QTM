import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../configs/servers/store";
import BrandColorButton from "../commons/UI/buttons/BrandColorButton";
import { createWorkspace } from "../../configs/APIs/workspacesApi";
import { createWorkspaceMember } from "../../configs/APIs/workspacesMembersApi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import WorkspaceSchema from "../../validations/WorkspaceShema";
import { toast } from "react-toastify";
import { z } from "zod";
import { getErrorMessage } from "../../helpers/errorMessages";
import WorkspaceMemberSchema from "../../validations/WorkspaceMemberShema";

const NewDisplayData: React.FC = () => {
  const workspaceName = useSelector(
    (state: RootState) => state.formNewWorkspace.workspaceName
  );
  const labelColor = useSelector(
    (state: RootState) => state.formNewWorkspace.labelColor
  );
  const creatorName = useSelector(
    (state: RootState) => state.formNewWorkspace.creatorName
  );

  const { handleSubmit } = useForm({
    resolver: zodResolver(WorkspaceSchema),
  });

  const handleFormSubmit = async () => {
    try {
      // اعتبارسنجی داده‌های فضای کاری
      WorkspaceSchema.parse({ name: workspaceName, color: labelColor });

      const workspaceResponse = await createWorkspace({
        name: workspaceName,
        color: labelColor,
      });
      console.log(`Workspace created: ${workspaceResponse.data}`);

      const workspaceId = workspaceResponse.data.id;

      // اعتبارسنجی داده‌های عضو فضای کاری
      WorkspaceMemberSchema.parse({
        user: creatorName,
        is_super_access: true,
      });

      await createWorkspaceMember(workspaceId, {
        user: creatorName,
        is_super_access: true,
      });
      console.log(`Workspace member created for: ${creatorName}`);

      toast.success("فضای کاری با موفقیت ایجاد شد.");
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        // نمایش خطاهای اعتبارسنجی
        error.errors.forEach((validationError) => {
          console.error(validationError.message);
          toast.error(validationError.message);
        });
      } else {
        const statusCode = error.response?.status;
        const errorMessage = getErrorMessage("server", statusCode);
        toast.error(errorMessage);
        console.log(
          `statusCode: ${statusCode} و errorMessage: ${errorMessage}`
        );
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex items-center justify-center"
    >
      <div className="flex bg-white flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl">
        <h2 className="font-extrabold text-brand-primary justify-center w-fit pb-2 text-[32px] mb-[30px]">
          مرور اطلاعات
        </h2>
        <div className="w-[453px] border rounded-[8px]">
          <div className="flex font-extrabold text-md m-4">
            <h3>نام فضای کاری</h3>
            <p className="mr-auto"> {workspaceName}</p>
          </div>
          <div className="flex font-extrabold text-md m-4">
            <h3> رنگ لیبل</h3>
            <span
              className={`inline-block size-5 rounded-[2px] ${labelColor} mr-auto`}
            ></span>
          </div>
          <div className="flex font-extrabold text-md m-4">
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

// import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../../configs/servers/store";
// import BrandColorButton from "../commons/UI/buttons/BrandColorButton";
// import { createWorkspace } from "../../configs/APIs/workspacesApi";
// import { createWorkspaceMember } from "../../configs/APIs/workspacesMembersApi";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import WorkspaceSchema from "../../validations/WorkspaceShema";
// import useToast from "../../hooks/useToast";
// import { getErrorMessage } from "../../helpers/errorMessages";
// import WorkspaceMemberSchema from "../../validations/WorkspaceMemberShema";
// import { z } from "zod";
// import { toast } from "react-toastify";

// const NewDisplayData: React.FC = () => {
//   const workspaceName = useSelector(
//     (state: RootState) => state.formNewWorkspace.workspaceName
//   );
//   const labelColor = useSelector(
//     (state: RootState) => state.formNewWorkspace.labelColor
//   );
//   const creatorName = useSelector(
//     (state: RootState) => state.formNewWorkspace.creatorName
//   );

//   const { showSuccess, showError } = useToast();

//   const { handleSubmit } = useForm({
//     resolver: zodResolver(WorkspaceSchema),
//   });

//   const handleFormSubmit = async () => {
//     try {
//       // اعتبارسنجی داده‌های فضای کاری
//       WorkspaceSchema.parse({ name: workspaceName, color: labelColor });

//       const workspaceResponse = await createWorkspace({
//         name: workspaceName,
//         color: labelColor,
//       });
//       console.log(`Workspace created: ${workspaceResponse.data}`);

//       const workspaceId = workspaceResponse.data.id;

//       // اعتبارسنجی داده‌های عضو فضای کاری
//       WorkspaceMemberSchema.parse({
//         user: creatorName,
//         is_super_access: true,
//       });

//       await createWorkspaceMember(workspaceId, {
//         user: creatorName,
//         is_super_access: true,
//       });
//       console.log(`Workspace member created for: ${creatorName}`);

//       showSuccess("created");
//     } catch (error: any) {
//       if (error instanceof z.ZodError) {
//         // نمایش خطاهای اعتبارسنجی
//         error.errors.forEach((validationError) => {
//           console.error(validationError.message);
//           toast.error(validationError.message);
//         });
//       } else {
//         const statusCode = error.response?.status;
//         const errorMessage = getErrorMessage("server", statusCode);
//         toast.error(errorMessage);
//         console.log(`statusCode: ${statusCode} و errorMessage: ${errorMessage}`);
//       }
//     }
//       // const statusCode = error.response?.status;
//       // const errorMessage = getErrorMessage("server", statusCode);
//       // showError(errorMessage);
//       // console.log(
//       //   `statusCode: ${statusCode} aaand errorMessage: ${errorMessage}`
//       // );
//     }
//   };
//   return (
//     <form
//       onSubmit={handleSubmit(handleFormSubmit)}
//       className="flex items-center justify-center"
//     >
//       <div className="flex bg-white flex-col justify-center items-center p-6 w-[640px] rounded-[20px] shadow-2xl">
//         <h2 className="font-extrabold text-brand-primary justify-center w-fit pb-2 text-[32px] mb-[30px]">
//           مرور اطلاعات
//         </h2>
//         <div className="w-[453px] border rounded-[8px]">
//           <div className="flex font-extrabold	text-md m-4">
//             <h3>نام فضای کاری</h3>
//             <p className="mr-auto"> {workspaceName}</p>
//           </div>
//           <div className="flex font-extrabold	text-md m-4">
//             <h3> رنگ لیبل</h3>
//             <span
//               className={`inline-block size-5 rounded-[2px] ${labelColor} mr-auto`}
//             ></span>
//           </div>
//           <div className="flex font-extrabold	text-md m-4">
//             <h3>اعضا</h3>
//             <p className="mr-auto"> {creatorName}</p>
//           </div>
//         </div>
//         <BrandColorButton
//           text="تایید و ایجاد فضای کاری"
//           type="submit"
//           classNames="mt-[40px] w-[410px] h-[40px]"
//         />
//       </div>
//     </form>
//   );
// };

// export default NewDisplayData;

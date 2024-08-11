import { useDispatch, useSelector } from "react-redux";
import InputForm from "../../components/commons/forms/InputForm";
import { updateAccount } from "../../configs/APIs/accountApi";
import { IPersonalFormData } from "../../configs/interfaces";
import { AppDispatch, RootState } from "../../configs/servers/store";
import { getErrorMessage } from "../../helpers/errorMessages";
import useToast from "../../hooks/useToast";
import UserSchema from "../../validations/UserShema";
import { useEffect, useState } from "react";
import FileManager from "../../helpers/FileManager";
import { fetchAccount } from "../../configs/servers/accountSlice";
import useUploadFile from "../../hooks/useUploadFile";

const PersonalSchema = UserSchema.pick({
  first_name: true,
  last_name: true,
  phone_number: true,
  thumbnail: true,
});

const Personal: React.FC = () => {
  const {
    data: account,
    status,
    error,
  } = useSelector((state: RootState) => state.account);
  const dispatch = useDispatch<AppDispatch>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { showSuccess, showError } = useToast();
  const { uploadImage } = useUploadFile();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAccount());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <span className="flex justify-center text-xs">در حال بارگزاری ...</span>
    );
  }

  if (error) {
    return <span className="flex justify-center text-xs">Error: {error}</span>;
  }

  if (!account || !account.username) {
    return (
      <span className="flex justify-center text-xs">
        اطلاعات کاربر شخصی در حال بارگزاری ...
      </span>
    );
  }

  const handleFormSubmit = async (data: IPersonalFormData) => {
    try {
      let uploadedUrl = null;

      if (selectedFile) {
        uploadedUrl = await uploadImage(selectedFile, "image");
      }

      const formData = new FormData();
      formData.append("username", account.username);
      formData.append("email", account.email);
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("phone_number", data.phone_number);
      formData.append("thumbnail", uploadedUrl || "");
      // if (selectedFile) formData.append("thumbnail", selectedFile);

      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

      // if (selectedFile) {
      //   console.log("Selected file type:", selectedFile.type);
      // }

      const response = await updateAccount(account.id, formData);
      await dispatch(fetchAccount());

      showSuccess("created");
    } catch (error: any) {
      const statusCode = error.response?.status;
      const errorMessage = getErrorMessage("server", statusCode);
      showError(errorMessage);
    }
  };

  const handleImageUpload = (file: File | null) => {
    if (file) {
      setSelectedFile(file);
    }
  };

  const fields = [
    {
      id: "first_name",
      type: "text",
      label: "نام",
      defaultValue: account.first_name,
    },
    {
      id: "last_name",
      type: "text",
      label: "نام خانوادگی",
      defaultValue: account.last_name,
    },
    {
      id: "phone_number",
      type: "text",
      label: "شماره موبایل",
      defaultValue: account.phone_number,
    },
  ];
  return (
    <div>
      <h1 className="text-center text-brand-primary text-3xl font-bold mb-6">
        اطلاعات فردی
      </h1>
      <div className="mb-4 flex items-center">
        <div className="w-[100px] h-[100px] p-[25.71px 22.86px 20px 22.86px] rounded-full bg-yellow-100 text-yellow-400 text-3xl font-bold flex items-center justify-center">
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="تصویر انتخاب شده"
              className="rounded-full"
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <>
              <span>{account.username.slice(0, 2)}</span>
            </>
          )}
        </div>
        <div className="m-4 items-center justify-center">
          <FileManager
            inputId="avatar"
            htmlForLabel="avatar"
            acceptFormat="image/*"
            onFileChange={handleImageUpload}
            buttonLabel="ویرایش تصویر پروفایل"
            buttonClassName="border border-brand-primary bg-transparent text-center text-brand-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[212px] mb-2"
            inputClassName="hidden"
            showSelectedFilePreview={false}
          />
          <p className="text-gray-primary text-xs text-center">
            این تصویر برای عموم قابل نمایش است
          </p>
        </div>
      </div>
      <InputForm
        fields={fields}
        submitText="ثبت تغییرات"
        schema={PersonalSchema}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};
export default Personal;

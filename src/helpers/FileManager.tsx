import { useState } from "react";
import {
  FaRegFileArchive,
  FaRegFileExcel,
  FaRegFileAlt,
  FaRegFileImage,
  FaRegFileWord,
  FaRegFilePdf,
} from "react-icons/fa";

interface FileManagementProps {
  onFileChange: (file: File | null) => void;
  buttonLabel: string | JSX.Element;
  buttonClassName?: string;
  inputClassName: string;
  showSelectedFilePreview: boolean;
  htmlForLabel: string;
  inputId: string;
  acceptFormat: string | { mimeType: string };
  attachIconPostion?: string;
  attachErrorPostion?: string;
}

const formatIcons: Record<string, React.ReactNode> = {
  ".doc": <FaRegFileWord />,
  ".docx": <FaRegFileWord />,
  ".pdf": <FaRegFilePdf />,
  ".jpg": <FaRegFileImage />,
  ".jpeg": <FaRegFileImage />,
  ".png": <FaRegFileImage />,
  ".gif": <FaRegFileImage />,
  ".zip": <FaRegFileArchive />,
  ".rar": <FaRegFileArchive />,
  ".txt": <FaRegFileAlt />,
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": (
    <FaRegFileExcel />
  ),
  "application/vnd.ms-excel": <FaRegFileExcel />,
  ".xlm": <FaRegFileExcel />,
  ".xlsx": <FaRegFileExcel />,
};

const FileManager: React.FC<FileManagementProps> = ({
  onFileChange,
  buttonLabel,
  buttonClassName,
  inputClassName,
  showSelectedFilePreview,
  htmlForLabel,
  inputId,
  acceptFormat = "*/*", // Default value for accept attribute,
  attachIconPostion,
  attachErrorPostion,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFileIcon, setSelectedFileIcon] =
    useState<React.ReactNode | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // اعتبارسنجی نوع فایل با استفاده از acceptFormat
      if (
        typeof acceptFormat === "string" ||
        !acceptFormat.mimeType ||
        file.type === acceptFormat.mimeType
      ) {
        setSelectedFile(file);
        onFileChange(file);

        // پیدا کردن آیکون مرتبط با فرمت فایل
        const fileExtension = `.${file.name.split(".").pop()}`;
        setSelectedFileIcon(formatIcons[fileExtension] || null);
      }
    }
  };

  return (
    <div className="flex flex-row-reverse">
      {showSelectedFilePreview && selectedFile && (
        <p className={`text-red-500 text-xs pr-2 ${attachErrorPostion}`}>
          {selectedFileIcon ? (
            <span className={`size-6 ${attachIconPostion}`}>
              {selectedFileIcon}
            </span>
          ) : (
            `فرمت فایل مجاز نمی‌باشد.`
          )}
        </p>
      )}
      <label htmlFor={htmlForLabel} className={buttonClassName}>
        {buttonLabel}
        <input
          type="file"
          id={inputId}
          accept={
            typeof acceptFormat === "string"
              ? acceptFormat
              : acceptFormat.mimeType
          }
          className={inputClassName}
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default FileManager;

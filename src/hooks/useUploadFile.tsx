import { useState } from "react";
import axios from "axios";

const useUploadFile = () => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (
    file: File,
    type: "image" | "raw"
  ): Promise<string | null> => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default"); // جایگزین با upload preset خودتان
    formData.append("cloud_name", "dnfxr9qgw"); // جایگزین با نام cloud خودتان
    formData.append("resource_type", type);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dnfxr9qgw/${type}/upload`,
        formData
      );
      setUploading(false);
      return response.data.secure_url; // آدرس URL تصویر آپلود شده را برمی‌گرداند
    } catch (error) {
      setUploading(false);
      setError("Error uploading image to Cloudinary");
      console.error("Error uploading image to Cloudinary:", error);
      return null;
    }
  };

  return { uploadImage, uploading, error };
};

export default useUploadFile;

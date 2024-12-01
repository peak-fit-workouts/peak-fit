import React, { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";

type ImageUploadProps = {
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
};

const ImageUpload = ({ imageUrl, setImageUrl }: ImageUploadProps) => {
  const [uploading, setUploading] = useState<boolean>(false);

  const cloudName = "dmkprwzyp";
  const uploadPreset = "peakFit";

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImageUrl(reader.result as string);
    reader.readAsDataURL(file);

    await handleUpload(file);
  };

  const handleUpload = async (file: File) => {
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );

      setImageUrl(response.data.secure_url);
    } catch (error) {
      console.error("Upload failed: ", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <label
        htmlFor="tokenImage"
        className="block text-base font-medium text-textColor mb-1"
      >
        Token Image
      </label>
      <div className="mt-1 flex justify-center items-center px-3 py-1.5 border-2 border-gray-600 border-dashed rounded-md hover:border-bgColor-light transition duration-200 ease-in-out">
        <div className="space-y-1 text-center">
          <div className="flex flex-col items-center">
            <div className="mx-auto h-8 w-8 text-gray-400 mb-2"></div>
            <label
              htmlFor="tokenImage"
              className="cursor-pointer bg-gray-700 rounded-md font-medium   transition duration-150 ease-in-out px-3 py-1.5 hover:text-bgColor-light"
            >
              Upload a file
              <input
                id="tokenImage"
                name="tokenImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                disabled={uploading}
                className="sr-only"
              />
            </label>
            <p className="text-xs  mt-1">PNG, JPG, GIF up to 1MB</p>
            <div className="mx-auto h-8 w-8 text-gray-400 mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;

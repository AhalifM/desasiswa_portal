"use client";

import { Card, CardHeader, CardContent } from "@/components/card/Card";
import { Step } from "@/components/Step";
import { CheckoutStepsLayout } from "@/components/checkout/CheckoutStepsLayout";
import Image from "next/image";
import { useState, useRef } from "react";
import React from "react";

const CheckoutStepOne = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [uploadedImageUrls, setUploadedImageUrls] = useState<string[]>([]);
  const fileInputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      const newFiles = [...files];
      newFiles[index] = selectedFile;
      setFiles(newFiles);

      // Create a temporary URL for preview
      const previewUrl = URL.createObjectURL(selectedFile);

      const newImageUrls = [...uploadedImageUrls];
      newImageUrls[index] = previewUrl;
      setUploadedImageUrls(newImageUrls);
    }
  };

  const handleUpload = async (index: number) => {
    const file = files[index];
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); // Replace with your Cloudinary upload preset

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/your-cloudinary-cloud-name/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.secure_url) {
        setUploadStatus("File uploaded successfully!");
        const newImageUrls = [...uploadedImageUrls];
        newImageUrls[index] = data.secure_url;
        setUploadedImageUrls(newImageUrls);
      } else {
        setUploadStatus(`Upload failed: ${data.message}`);
      }
    } catch (error) {
      setUploadStatus(`Error: ${(error as Error).message}`);
    }
  };

  return (
    <div className="w-full h-full inline-flex items-start justify-center p-6">
      <CheckoutStepsLayout>
        <div className="flex w-full flex-col gap-4">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold">Room Details Verification</h2>
            </CardHeader>
            <CardContent>
              <Step
                back="/student/check-out/stepone"
                next="/student/check-out/steptwo"
                home={false}
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-6">
                  <div className="w-full grid grid-cols-2 gap-6">
                    {/* Repeat for multiple upload slots */}

                    {[0, 1, 2, 3].map((index) => (
                      <div
                        key={index}
                        className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer "
                      >
                        {uploadedImageUrls[index] ? (
                          <div className="mt-4 flex justify-center">
                            <Image
                              width={100}
                              height={40}
                              src={uploadedImageUrls[index]}
                              alt={`File Preview ${index + 1}`}
                              className="max-w-full max-h-48 object-contain"
                            />
                          </div>
                        ) : (
                          <div className=" flex flex-col justify-center items-center">
                            <Image
                              src="/camera.svg"
                              width={40}
                              height={40}
                              alt={`Take photo ${index + 1}`}
                              className="mb-2"
                              onClick={() =>
                                fileInputRefs[index].current?.click()
                              }
                            />
                            <p className="text-gray-500 text-sm font-medium">
                              Take photo {index + 1}
                            </p>
                          </div>
                        )}

                        {/* File Input (Hidden) */}
                        <input
                          type="file"
                          ref={fileInputRefs[index]}
                          onChange={(e) => handleFileChange(e, index)}
                          accept="image/*"
                          className="hidden"
                        />

                        {/* File Preview */}

                        {/* Upload Button */}
                        <button
                          className="py-3 px-4 bg-blue-600 text-white rounded-lg flex items-center justify-center shadow hover:bg-blue-700 transition focus:outline-none mt-4"
                          onClick={() => handleUpload(index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm11 4a1 1 0 10-2 0v3H8a1 1 0 100 2h4v3a1 1 0 102 0V9h3a1 1 0 000-2h-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Upload {index + 1}
                        </button>
                      </div>
                    ))}

                    {/* Upload Status */}
                    {uploadStatus && (
                      <p className="text-center text-sm text-green-600 mt-4">
                        {uploadStatus}
                      </p>
                    )}
                  </div>
                </div>
              </Step>
            </CardContent>
          </Card>
        </div>
      </CheckoutStepsLayout>
    </div>
  );
};

export default CheckoutStepOne;

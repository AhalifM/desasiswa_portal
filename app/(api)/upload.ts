import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "@/lib/cloudinary";

type Data = {
  success: boolean;
  url?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { filePath } = req.body;

  if (!filePath) {
    return res
      .status(400)
      .json({ success: false, message: "File path is required" });
  }

  try {
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      folder: "uploads", // Organize uploads into a folder
    });

    return res
      .status(200)
      .json({ success: true, url: uploadResult.secure_url });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
}

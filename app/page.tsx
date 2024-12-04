// "use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen justify-center flex items-center flex-col gap-6">
      <h1>Welcome to Desasiswa Management</h1>
      <Button asChild>
        <Link href="/sign-in">SignIn</Link>
      </Button>
      <Button asChild>
        <Link href="/sign-up">SignUp</Link>
      </Button>
    </div>
  );
}
// import { useState } from "react";

// export default function Home() {
//   const [file, setFile] = useState<File | null>(null);
//   const [uploadStatus, setUploadStatus] = useState<string | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       setFile(event.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       alert("Please select a file");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("filePath", URL.createObjectURL(file));

//     try {
//       const response = await fetch("/api/upload", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ filePath: URL.createObjectURL(file) }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         setUploadStatus(`File uploaded successfully: ${data.url}`);
//       } else {
//         setUploadStatus(`Upload failed: ${data.message}`);
//       }
//     } catch (error) {
//       setUploadStatus(`Error: ${(error as Error).message}`);
//     }
//   };

//   return (
//     <div>
//       <h1>Upload a File</h1>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {uploadStatus && <p>{uploadStatus}</p>}
//     </div>
//   );
// }

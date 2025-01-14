// "use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen justify-around flex flex-row items-center gap-6">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl">Desasiswa Portal</h1>
        <p className="text-gray-500">
          Your one-stop solution for seamless student hostel management.
          <br /> Stay connected, stay organized!
        </p>
        <div className="flex w-full justify-between space-x-6">
          <Button asChild className="w-full" variant="outline">
            <Link href="/sign-in">SignIn</Link>
          </Button>
          <Button asChild className="w-full">
            <Link href="/sign-up">SignUp</Link>
          </Button>
        </div>
      </div>
      <div>
        <Image
          src="/management.jpg"
          width={500}
          height={500}
          alt="landing"
          className="object-fill"
        />
      </div>
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

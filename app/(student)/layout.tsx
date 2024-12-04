import type { Metadata } from "next";
import "../globals.css";
import StudentSideMenu from "@/components/student/StudentSideMenu";
import StudentTopMenu from "@/components/student/StudentTopMenu";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "For you to stay",
};

export default function StudentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="flex flex-row">
        <StudentSideMenu />
        <div className="flex flex-col w-full">
          <StudentTopMenu />
          <div className="bg-slate-100 h-full justify-center flex items-center">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

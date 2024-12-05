import type { Metadata } from "next";
import "../globals.css";
import AdminSideMenu from "@/components/admin/AdminSideMenu";
import AdminTopMenu from "@/components/admin/AdminTopMenu";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "For you to stay",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="flex flex-row">
        <AdminSideMenu />
        <div className="flex flex-col w-full">
          <AdminTopMenu />
          <div className="bg-slate-100 p-6 h-full justify-center w-full inline-flex items-start">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

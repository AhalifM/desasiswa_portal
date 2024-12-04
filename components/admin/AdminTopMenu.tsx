import React from "react";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";

const AdminTopMenu = () => {
  return (
    <div className="w-full h-[81px] bg-white text-black flex flex-row justify-between items-center p-6">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      <div className="flex flex-row items-center space-x-3">
        {/* <Search /> */}
        <div className="items-center justify-center flex w-full">
          <Button asChild variant="outline">
            <Link href="/student/dashboard">Switch to Student</Link>
          </Button>
        </div>
        <Image src="/bell.svg" width={26} height={26} alt="bell icon" />
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default AdminTopMenu;

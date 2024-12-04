import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StepThree = () => {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col space-y-4">
      <Image src="/completed.svg" width={64} height={64} alt="completed icon" />
      <h2 className="text-gray-950 text-2xl leading-loose font-semibold">
        Check-in Complete!
      </h2>
      <p>Your room check-in has been successfully recorded</p>
      <Button asChild>
        <Link href="/student/dashboard">Return to Dashboard</Link>
      </Button>
    </div>
  );
};

export default StepThree;

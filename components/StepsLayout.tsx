"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dot } from "./icons/Dot";
import { VerticalLine } from "./icons/VerticalLine";

type StepTitleProps = {
  active: boolean;
  title: string;
};

type StepsLayoutProps = {
  children: ReactNode;
};

export const StepTitle = ({ active, title }: StepTitleProps) => {
  return (
    <h2
      className={`text-xl ${
        active
          ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
          : "text-zinc-100"
      }`}
    >
      {title}
    </h2>
  );
};

export const StepsLayout = ({ children }: StepsLayoutProps) => {
  const pathname = usePathname();

  const activeOne = pathname === "/student/check-in/stepone";
  const activeTwo = pathname === "/student/check-in/steptwo";
  const activeThree = pathname === "/student/check-in/stepthree";
  return (
    <article className="flex flex-col w-full justify-start items-center gap-8">
      <div className="flex flex-row px-8 py-6 space-between w-full justify-center ">
        <Link href="/student/check-in/stepone">
          <div className="flex flex-col items-center gap-4">
            {/* <!--dot is highlighted (active) here--> */}
            <Dot active />
            <StepTitle active={activeOne} title="Step 1" />
          </div>
        </Link>
        {/* <!--vertical line is not active--> */}
        <VerticalLine active={activeTwo || activeThree} />
        <Link href="/student/check-in/steptwo">
          <div className="flex flex-col items-center gap-4">
            {/* <!--the second dot is not active--> */}
            <Dot active={activeTwo || activeThree} />
            <StepTitle active={activeTwo} title="Step 2" />
          </div>
        </Link>
        {/* <!--the second vertical line is not active too--> */}
        <VerticalLine active={activeThree} />
        <Link href="/student/check-in/stepthree">
          <div className="flex flex-col items-center gap-4">
            {/* <!--the third dot is not active--> */}
            <Dot active={activeThree} />
            <StepTitle active={activeThree} title="Step 3" />
          </div>
        </Link>
      </div>
      <form className="w-full">{children}</form>
    </article>
  );
};

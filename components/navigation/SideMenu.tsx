"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const SideMenu = () => {
  const [selected, setSelected] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", href: "/administrator/", icon: "dashboard.svg" },
    {
      name: "Room Details",
      href: "/administrator/room-details",
      icon: "room.svg",
    },
    {
      name: "Student Management",
      href: "/administrator/student-management",
      icon: "student.svg",
    },
    // { name: "Forms Management", href: "/forms-management", icon: "forms.svg" },
  ];
  return (
    <div className="w-[320px] h-screen bg-white text-black overflow-y-auto">
      <div className="flex justify-center items-center w-full h-[81px] border-b">
        <h1 className="text-2xl text-black font-bold">Desasiswa Portal</h1>
      </div>
      <div className="flex justify-center items-center p-6 flex-col border-b">
        {/* TODO Add Image */}
        <div className="w-24 h-24 border-4 border-black rounded-full flex items-center justify-center p-2">
          <Image
            src="next.svg"
            width={96}
            height={96}
            alt="profile photo"
            className="object-cover"
          />
        </div>
        <div className="w-full text-center p-6">
          <h1 className="font-semibold text-lg">Admin Name</h1>
          <p className="font-medium text-sm text-[#6B7280]">
            System Administrator
          </p>
        </div>
        <div className="w-[116px] border text-center rounded-full py-1 px-3 text-xs font-medium text-[#2563EB] bg-[#EFF6FF] drop-shadow-md">
          Full Access
        </div>
      </div>
      <div className="flex flex-col justify-center items-start p-4 space-y-2">
        {menuItems.map((item) => (
          <div
            key={item.name}
            onClick={() => setSelected(item.name)}
            className={`w-full px-4 py-3 flex flex-row space-x-3 items-center border rounded-xl cursor-pointer 
              ${
                selected === item.name
                  ? "bg-[#EFF6FF] text-[#2563EB] border-[#EFF6FF]"
                  : "bg-white text-[#4B5563] border-white hover:bg-[#EFF6FF] hover:text-[#2563EB] hover:border-[#EFF6FF]"
              }`}
          >
            <Image
              src={item.icon}
              width={20}
              height={20}
              alt={`${item.name} icon`}
            />
            <Link href={item.href} className="text-base font-normal">
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;

"use client";

import PropertyCard from "@/components/PropertyCard";
import RoomAssignments from "@/components/RoomAssignments";
import React from "react";

export default function AdminHomePage() {
  return (
    <div className="flex flex-col space-y-6 w-full">
      <div className="flex flex-row space-x-6 w-full">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
      <div>
        <RoomAssignments />
      </div>
    </div>
  );
}

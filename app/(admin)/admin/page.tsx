"use client";

import { PropertyCard } from "@/components/PropertyCard";
import RoomAssignments from "@/components/RoomAssignments";
import React from "react";

export default function AdminHomePage() {
  return (
    <div className="flex flex-col space-y-6 w-full">
      <div className="flex flex-row space-x-6 w-full">
        <PropertyCard label="Total Rooms" value={450} icon="/total_rooms.svg" />
        <PropertyCard
          label="Occupied Rooms"
          value={380}
          icon="/occupied_rooms.svg"
        />
        <PropertyCard
          label="Available Rooms"
          value={70}
          icon="/available_rooms.svg"
        />
        <PropertyCard label="Pending Request" value={12} icon="/pending.svg" />
      </div>
      <div>
        <RoomAssignments />
      </div>
    </div>
  );
}

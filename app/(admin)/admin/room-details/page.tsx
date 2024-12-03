import RoomDetailsCard from "@/components/roomdetails/RoomDetailsCard";
import React from "react";

const AdminRoomDetails = () => {
  return (
    <div className="flex flex-col w-full">
      <RoomDetailsCard
        roomData={{
          block: "A",
          floor: 1,
          status: "available",
          lastMaintenance: "1/12/2024",
          facilities: { aircond: true, table: true, wifi: true, Pantry: true },
          occupants: [
            {
              matrixNo: "159751",
              name: "Ryan",
              course: "Computer Science",
              year: "Final",
              contact: "01123567231",
            },
            {
              matrixNo: "159451",
              name: "Alif",
              course: "Software Engineer",
              year: "Final",
              contact: "01123567231",
            },
          ],
          quickStats: {
            roomStatus: "Available",
            averageStay: "2 years",
            maintenance: "1 month ago",
          },
        }}
      />
    </div>
  );
};

export default AdminRoomDetails;

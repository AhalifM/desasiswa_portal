"use client";

// import { PropertyCard } from "@/components/PropertyCard";
// import RoomAssignments from "@/components/RoomAssignments";
// import React from "react";

// export default function AdminHomePage() {
//   return (
//     <div className="flex flex-col space-y-6 w-full">
//       <div className="flex flex-row space-x-6 w-full">
//         <PropertyCard label="Total Rooms" value={450} icon="/total_rooms.svg" />
//         <PropertyCard
//           label="Occupied Rooms"
//           value={380}
//           icon="/occupied_rooms.svg"
//         />
//         <PropertyCard
//           label="Available Rooms"
//           value={70}
//           icon="/available_rooms.svg"
//         />
//         <PropertyCard label="Pending Request" value={12} icon="/pending.svg" />
//       </div>
//       <div>
//         <RoomAssignments />
//       </div>
//     </div>
//   );
// }

import { Room } from "../../../types";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [rooms, setRooms] = useState<Room[]>([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("/api/rooms");
        const data: Room[] = await response.json();
        setRooms(data);
      } catch (error) {
        console.log("Error fetching rooms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {rooms.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Capacity</th>
              <th>Occupied</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room._id}>
                <td>{room.roomNumber}</td>
                <td>{room.capacity}</td>
                <td>{room.isOccupied ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No rooms available yet.</p>
      )}
    </div>
  );
};

export default Dashboard;

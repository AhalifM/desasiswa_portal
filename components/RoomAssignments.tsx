import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/card/Card";

const RoomAssignments = () => {
  const data = [
    {
      room: "1-01",
      students: ["S1", "S2"],
      status: "Occupied",
      lastUpdated: "2 days ago",
      actions: "Manage",
    },
    {
      room: "1-02",
      students: ["S1", "S2"],
      status: "Occupied",
      lastUpdated: "2 days ago",
      actions: "Manage",
    },
    {
      room: "1-03",
      students: ["S1", "S2"],
      status: "Occupied",
      lastUpdated: "2 days ago",
      actions: "Manage",
    },
    {
      room: "1-04",
      students: ["S1", "S2"],
      status: "Occupied",
      lastUpdated: "2 days ago",
      actions: "Manage",
    },
    {
      room: "1-05",
      students: ["S1", "S2"],
      status: "Occupied",
      lastUpdated: "2 days ago",
      actions: "Manage",
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Room Assignments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-center">Room</th>
                <th className="p-4 text-center">Students</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-center">Last Updated</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.room}>
                  <td className="p-4 border-y text-center">{row.room}</td>
                  <td className="p-4 border-y text-center">
                    {row.students.join(", ")}
                  </td>
                  <td className="p-4 border-y text-center items-center flex justify-center">
                    <div className="bg-[#DCFCE7] border-[#DCFCE7] rounded-full w-max py-1 px-4">
                      {row.status}
                    </div>
                  </td>
                  <td className="p-4 border-y text-center">
                    {row.lastUpdated}
                  </td>
                  <td className="p-4 border-y text-center">
                    <button className="text-[#2563EB]">{row.actions}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomAssignments;

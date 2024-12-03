// Select New Room component
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/card/Card";

const SelectNewRoom = () => {
  const rooms = [
    { name: "Room 1-01A", currentOccupant: "None", level: 1 },
    { name: "Room 1-01B", currentOccupant: "None", level: 1 },
    { name: "Room 2-02B", currentOccupant: "Ziqreey Rosley", level: 2 },
    { name: "Room 2-03A", currentOccupant: "Ryan Ooi", level: 2 },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Select New Room</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-y-auto max-h-[400px]">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="flex items-center justify-between px-4 py-3 hover:bg-slate-100 cursor-pointer"
            >
              <div>
                <div className="font-medium">{room.name}</div>
                <div className="text-slate-500 text-sm">
                  Current Occupant: {room.currentOccupant}
                </div>
                <div className="text-slate-500 text-sm">
                  Level: {room.level}
                </div>
              </div>
              <div>
                Select
                {/* <Button variant="primary">Select</Button> */}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <div className="flex justify-end px-6 py-4 border-t">
        Select
        {/* <Button variant="primary">Transfer Room</Button> */}
      </div>
    </Card>
  );
};

export default SelectNewRoom;

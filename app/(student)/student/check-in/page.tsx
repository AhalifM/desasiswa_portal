import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const StudentCheckIn: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold">Room Details Verification</h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-medium">Room Number</p>
            <p>5-12</p>
          </div>
          <div>
            <p className="font-medium">Block</p>
            <p>Block A</p>
          </div>
          <div>
            <p className="font-medium">Room Type</p>
            <p>Double Occupancy</p>
          </div>
          <div>
            <p className="font-medium">Floor</p>
            <p>5th Floor</p>
          </div>
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Confirm Details
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentCheckIn;

import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const StudentDashboard: React.FC = () => {
  return (
    <div className="flex h-screen flex-col w-full">
      <div className="flex-1 p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Welcome back, Ryan!</h1>
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col">
              <p>
                <span className="text-gray-500 leading-light text-sm">
                  Room Number
                </span>
                <br />
                <span className="text-xl font-semibold">5-12</span>
              </p>
            </div>
          </CardContent>
        </Card>
        {/* <Card>
          <CardContent className="p-4">
            <div className="flex flex-col">
              <p>
                Pending Forms
                <br /> <span className="text-lg font-semibold">2</span>
              </p>
            </div>
          </CardContent>
        </Card> */}

        <Card className="p-0">
          <CardHeader className="p-4">
            <h3 className="text-lg font-bold">Recent Activity</h3>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold">Room Registration</p>
                <p className="text-gray-500">2 days ago</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold">Form Submitted</p>
                <p className="text-gray-500">5 days ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;

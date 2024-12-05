// RoomDetails component
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/card/Card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface RoomData {
  block: string;
  floor: number;
  status: string;
  lastMaintenance: string;
  facilities: { [key: string]: boolean };
  occupants: {
    matrixNo: string;
    name: string;
    course: string;
    year: string;
    contact: string;
  }[];
  quickStats: {
    roomStatus: string;
    averageStay: string;
    maintenance: string;
  };
}

const RoomDetailsCard = ({ roomData }: { roomData: RoomData }) => {
  const gridStyles =
    "p-4 bg-gray-50 rounded-xl flex-col justify-start items-start inline-flex";
  const quickStatsStyles =
    "p-4 bg-blue-50 rounded-xl justify-start items-center gap-[0px] flex-col";
  return (
    <div className="space-y-6">
      <div className="flex flex-row gap-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Room 5-12</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <div className={gridStyles}>
                <div className="font-medium">Block</div>
                <div>{roomData.block}</div>
              </div>
              <div className={gridStyles}>
                <div className="font-medium">Floor</div>
                <div>{roomData.floor}</div>
              </div>
              <div className={gridStyles}>
                <div className="font-medium">Status</div>
                <div className="text-green-500">{roomData.status}</div>
              </div>
              <div className={gridStyles}>
                <div className="font-medium">Last Maintenance</div>
                <div>{roomData.lastMaintenance}</div>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-gray-950 text-base font-semibold font-['Inter'] leading-normal">
                Facilities
              </h2>
              <ul className="grid grid-cols-2 gap-6">
                {Object.entries(roomData.facilities).map(
                  ([facility, hasIt]) => (
                    <li
                      key={facility}
                      className="p-3 bg-gray-50 rounded-xl justify-start items-center inline-flex"
                    >
                      {hasIt ? (
                        <>
                          <Image
                            src="/Available.svg"
                            width={20}
                            height={20}
                            alt="available icon"
                          />
                          <span className="ml-2">{facility}</span>
                        </>
                      ) : (
                        `No ${facility}`
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 w-full">
              <div className={quickStatsStyles}>
                <h4 className="font-semibold">Room Status</h4>
                <p className="text-green-500">
                  {roomData.quickStats.roomStatus}
                </p>
              </div>
              <div className={quickStatsStyles}>
                <h4 className="font-semibold">Average Stay</h4>
                <p>{roomData.quickStats.averageStay}</p>
              </div>
              <div className={quickStatsStyles}>
                <h4 className="font-semibold">Maintenance</h4>
                <p
                  className={`${
                    roomData.quickStats.maintenance === "Up to date"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {roomData.quickStats.maintenance}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Current Occupants</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            {roomData.occupants.map((occupant) => (
              <div
                key={occupant.matrixNo}
                className="flex items-center justify-between py-3 border-b"
              >
                <div>
                  <div className="font-medium">{occupant.name}</div>
                  <div className="text-slate-500 text-sm">
                    Matrix No: {occupant.matrixNo}
                  </div>
                  <div className="text-slate-500 text-sm">
                    Course: {occupant.course}, {occupant.year}
                  </div>
                  <div className="text-slate-500 text-sm">
                    Contact: {occupant.contact}
                  </div>
                </div>
                <div>
                  <Button asChild className="bg-[#2563EB] hover:bg-[#1e53c4]">
                    <Link href="/admin/student-management/transfer-room">
                      Transfer Room
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoomDetailsCard;

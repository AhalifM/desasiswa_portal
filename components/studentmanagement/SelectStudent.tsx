// Select Student to Transfer component
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/card/Card";
import { Button } from "../ui/button";
import Link from "next/link";

const SelectStudentToTransfer = () => {
  const students = [
    { name: "John Doe", matrixNo: "A123456", currentRoom: "5-12" },
    { name: "Jane Smith", matrixNo: "A123457", currentRoom: "5-12" },
    { name: "Jane Smith", matrixNo: "A123458", currentRoom: "5-12" },
    { name: "Jane Smith", matrixNo: "A123459", currentRoom: "5-12" },
    { name: "Jane Smith", matrixNo: "A123450", currentRoom: "5-12" },
    { name: "Jane Smith", matrixNo: "A123455", currentRoom: "5-12" },
    { name: "Jane Smith", matrixNo: "A123454", currentRoom: "5-12" },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Select Student to Transfer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-y-auto max-h-[550px]">
          {students.map((student) => (
            <div
              key={student.matrixNo}
              className="flex items-center justify-between px-4 py-3 hover:bg-slate-100 cursor-pointer"
            >
              <div>
                <div className="font-medium">{student.name}</div>
                <div className="text-slate-500 text-sm">
                  Matrix No: {student.matrixNo}
                </div>
                <div className="text-slate-500 text-sm">
                  Current Room: {student.currentRoom}
                </div>
              </div>
              <div>
                <Button
                  asChild
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  <Link href="/admin/student-management/transfer-room">
                    Transfer
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SelectStudentToTransfer;

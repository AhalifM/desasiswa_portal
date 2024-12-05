"use client";

import React, { useState } from "react";

// Define interface for Room type
interface Room {
  id: number;
  roomNo: string;
  block: string;
  occupants: number;
  currentOccupant: string | null;
}

// Define interface for Student type
interface Student {
  id: number;
  name: string;
  matrixNo: string;
  currentRoom: string;
  program: string;
}

const RoomTransferPage = () => {
  const [targetRoom, setTargetRoom] = useState<Room | null>(null);
  const [filterBlock, setFilterBlock] = useState("all");
  const [step, setStep] = useState(1);

  const selectedStudent: Student = {
    id: 1,
    name: "John Doe",
    matrixNo: "A123456",
    currentRoom: "5-12",
    program: "Computer Science",
  };

  const availableRooms: Room[] = [
    {
      id: 1,
      roomNo: "3-15",
      block: "A",
      occupants: 1,
      currentOccupant: "Alex Wong",
    },
    {
      id: 2,
      roomNo: "4-22",
      block: "B",
      occupants: 1,
      currentOccupant: "Sarah Lee",
    },
    { id: 3, roomNo: "6-08", block: "A", occupants: 0, currentOccupant: null },
  ];

  const handleConfirmTransfer = () => {
    setStep(2);
  };

  const filteredRooms = availableRooms.filter(
    (room) => filterBlock === "all" || room.block === filterBlock
  );

  return (
    <div className="w-full bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="px-8 py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold text-black">Room Transfer</h1>
            <div className="flex items-center text-sm text-black">
              <span>{selectedStudent.name}</span>
              {targetRoom && (
                <>
                  <svg
                    className="h-4 w-4 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                  <span>Room {targetRoom.roomNo}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="p-8">
        {step === 1 && (
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-black">
                Select New Room for {selectedStudent.name}
              </h2>
            </div>
            <div className="p-6">
              <div className="flex space-x-4 mb-6">
                <div className="relative flex-1">
                  <svg
                    className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search rooms..."
                    className="w-full pl-10 pr-4 py-2 border rounded-xl bg-gray-50"
                  />
                </div>
                <select
                  className="border rounded-xl px-4 py-2 bg-gray-50 text-black"
                  onChange={(e) => setFilterBlock(e.target.value)}
                >
                  <option value="all">All Blocks</option>
                  <option value="A">Block A</option>
                  <option value="B">Block B</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {filteredRooms.map((room) => (
                  <div
                    key={room.id}
                    className={`p-4 rounded-xl cursor-pointer transition-colors ${
                      targetRoom?.id === room.id
                        ? "bg-blue-50 border-2 border-blue-500"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => setTargetRoom(room)}
                  >
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold text-black">
                        Room {room.roomNo}
                      </h3>
                      <span className="text- text-black">
                        Block {room.block}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {room.occupants === 0 ? (
                        <span className="text-green-600">Empty Room</span>
                      ) : (
                        <>Current Occupant: {room.currentOccupant}</>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {targetRoom && (
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    onClick={() => window.history.back()}
                    className="px-4 py-2 text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleConfirmTransfer}
                    className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
                  >
                    Confirm Transfer
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-12 text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-black">
                Transfer Complete
              </h2>
              <p className="text-gray-600 mb-6">
                {selectedStudent.name} has been transferred to Room{" "}
                {targetRoom?.roomNo}
              </p>
              <button
                onClick={() => window.history.back()}
                className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomTransferPage;

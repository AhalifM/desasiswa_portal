import Image from "next/image";
import React from "react";

const PropertyCard = () => {
  return (
    <div className="drop-shadow-md w-full bg-white px-6 py-3 border-white border rounded-xl flex flex-row justify-between items-center">
      <div className="space-y-2">
        <h2 className="text-sm">Total Rooms</h2>
        <p className="text-2xl font-bold">450</p>
      </div>
      <div className="p-3 bg-[#DCFCE7] rounded-xl">
        <Image
          src="/total_rooms.svg"
          width={24}
          height={24}
          alt="total rooms icon"
        />
      </div>
    </div>
  );
};

export default PropertyCard;

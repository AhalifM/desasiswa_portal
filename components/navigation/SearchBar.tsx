import React from "react";
import Search from "../Search";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="w-full h-[81px] bg-white text-black flex flex-row justify-between items-center p-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex flex-row items-center space-x-3">
        <Search />
        <Image src="/bell.svg" width={26} height={26} alt="bell icon" />
      </div>
    </div>
  );
};

export default SearchBar;

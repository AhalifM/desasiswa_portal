import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div className="flex border border-[#E5E7EB] rounded-xl px-4 py-2 space-x-2 bg-[#F9FAFB]">
      <Image src="/search.svg" width={20} height={20} alt="search icon" />
      <p className="text-[#9CA3AF] text-base font-normal">
        Search rooms or students...
      </p>
    </div>
  );
};

export default Search;

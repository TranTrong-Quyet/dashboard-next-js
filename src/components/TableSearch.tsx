import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div>
      <div className="w-full flex flex-row md:auto items-center gap-4 ring-1 rounded-full pl-2">
        <Image src="/search.png" width={14} height={14} alt="search icon" />
        <input
          type="text"
          placeholder="Search here..."
          className="px-2 py-1 bg-transparent rounded-full"
        />
      </div>
    </div>
  );
};

export default TableSearch;

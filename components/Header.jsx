import Image from "next/image";
import React from "react";
import Light from "../src/assets/header__light.svg";
import Dark from "../src/assets/header__dark.png";
import { SearchRounded } from "@mui/icons-material";

function Header() {
  return (
    <header>
      {/* Left */}
      <div className="flex items-center space-x-2 w-full max-w-xs">
        <Image src={Dark} width={55} height={55} />
        <div
          className="flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4
         rounded w-full"
        >
          <SearchRounded />
          <input
            type="text"
            placeholder="search"
            className="hidden md:inline-flex
            bg-transparent text-sm focus:outline-none"
          />
        </div>
      </div>
      {/* Right */}
    </header>
  );
}

export default Header;

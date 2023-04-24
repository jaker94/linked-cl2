import Image from "next/image";
import React, { useEffect, useState } from "react";
import Light from "../assets/header__light.svg";
import Dark from "../assets/header__dark.png";
import { SearchRounded } from "@mui/icons-material";
import Headerlink from "./Headerlink";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Avatar } from "@mui/material";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

function Header() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  useEffect(() => setMounted(true), []);
  return (
    <header
      className="sticky top-0 z-40 bg-white dark:bg-[#1d2226] 
    flex items-center justify-around py-1.5 px-3 focus-within:shadow-lg"
    >
      {/* Left */}
      <div className="flex items-center space-x-2 w-full max-w-xs">
        {mounted && (
          <>
            {resolvedTheme === "dark" ? (
              <Image src={Dark} height={55} alt="" priority={1} />
            ) : (
              <Image src={Light} height={55} alt="" priority={1} />
            )}
          </>
        )}

        <div className="flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded w-full">
          <SearchRounded />
          <input
            type="text"
            placeholder="Search"
            className="hidden md:inline-flex bg-transparent text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow"
          />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center space-x-6">
        <Headerlink Icon={HomeRoundedIcon} text="Home" feed active />
        <Headerlink Icon={GroupIcon} text="My Network" feed />
        <Headerlink Icon={BusinessCenterIcon} text="Jobs" feed hidden />
        <Headerlink Icon={ChatIcon} text="Messaging" feed />
        <Headerlink Icon={NotificationsIcon} text="Notifications" feed />
        <Headerlink Icon={Avatar} text="Me" feed avatar hidden />
        <Headerlink Icon={AppsOutlinedIcon} text="Work" feed hidden />

        {/* Dark Mode Toggle */}
        {mounted && (
          <div
            className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${
              resolvedTheme === "dark" ? "justify-end" : "justify-start"
            }`}
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <span className="absolute left-0">🌜</span>
            <motion.div
              className="w-5 h-5 bg-white rounded-full z-40"
              layout
              transition={spring}
            />

            <span className="absolute right-0.5">🌞</span>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

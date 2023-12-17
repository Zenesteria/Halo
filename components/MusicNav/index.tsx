"use client";

import {
  FaHome,
  FaChartLine,
  FaCompass,
  FaGripHorizontal,
  FaTicketAlt,
  FaRegCalendarAlt,
  FaRegHeart,
  FaUsers,
  FaRegStar,
  FaBars,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import NavBtn from "./NavBtn";

export default function MusicNav() {
  const notHidden =
    "w-[28vw] min-w-[300px] max-w-[320px]  px-4 flex flex-col h-full bg-white shadow-lg overflow-y-auto overflow-x-hidden absolute top-0 left-0 z-20 xl:relative transition-all duration-700 musicNav";
  const Hidden =
    "w-[5vw] h-[5vh] overflow-y-hidden overflow-x-hidden absolute top-0 left-0 z-20 xl:relative transition-all duration-700";



  
  return (
    <div className="w-[28vw] min-w-[300px] max-w-[320px]  px-4 flex flex-col h-full bg-white shadow-lg overflow-y-auto overflow-x-hidden absolute top-0 left-0 z-20 xl:relative transition-all duration-700 musicNav">
      <FaBars
        className="flex xl:hidden absolute top-0 left-0 barIcon"
        size="20"
      />
      <div className="flex flex-col">
        <div className="flex flex-col w-[20vw] ">
          <h1 className=" my-10 text-3xl">
            Halo<span className=" text-blue-600">fi</span>
          </h1>
          <NavBtn Icon={FaHome} text="Home" />
          <NavBtn  Icon={FaChartLine} text="Trends" />
          <NavBtn  Icon={FaCompass} text="Feed" />
        </div>
        <div className="flex my-4 flex-col">
          <h6 className=" text-gray-400">Discover</h6>
          <NavBtn
            Icon={FaGripHorizontal}
            text="New and Notable"
          />
          <NavBtn
            Icon={FaRegCalendarAlt}
            text="Release Calendar"
          />
          <NavBtn Icon={FaTicketAlt} text="Events" />
        </div>
        <div className="flex my-4 flex-col">
          <h6 className=" text-gray-400">Your Collection</h6>
          <NavBtn
            Icon={FaRegHeart}
            text="Favorite Songs"
          />
          <NavBtn Icon={FaUsers} text="Artist" />
          <NavBtn Icon={FaRegStar} text="Albums" />
        </div>
      </div>
    </div>
  );
}





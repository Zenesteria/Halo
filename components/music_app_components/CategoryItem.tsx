import React from "react";
import { IconType } from "react-icons";

interface compProps {
  Icon: IconType;
  Text: string;
}

export default function Category({ Icon, Text }: compProps) {
  return (
    <button className=" bg-black text-white flex flex-1 min-w-[100px] hover:bg-purple-200 hover:scale-110 max-h-10 items-center justify-center m-2 py-2 px-4 rounded-xl transition-all duration-300 xl:bg-white xl:text-purple-700">
      <Icon /> <span className="font-bold text-xs">{Text}</span>
    </button>
  );
}

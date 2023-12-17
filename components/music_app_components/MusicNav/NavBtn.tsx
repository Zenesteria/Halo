import React from 'react'
import NavIcon from './NavIcon';
import { IconType } from 'react-icons';

interface compProps{
    Icon:IconType
    text:string
}

const NavBtn = ({Icon,text}:compProps) => {
  return (
    <div
      className="rounded-xl bg-white text-black w-full max-w-[285px] flex p-4 items-center hover:bg-purple-200 transition-all duration-300 my-2 cursor-pointer min-w-[250px]">
      <NavIcon Icon={Icon} />
      <span className=" text-sm">{text}</span>
    </div>
  );
};

export default NavBtn

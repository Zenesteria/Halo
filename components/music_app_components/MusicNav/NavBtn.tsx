import React from 'react'
import NavIcon from './NavIcon';
import { IconType } from 'react-icons';
import Link from 'next/link';

interface compProps{
    Icon:IconType
    text:string
    href:string
}

const NavBtn = ({Icon,text, href}:compProps) => {
  return (
    <Link href={href}
      className="rounded-xl bg-white text-black w-full max-w-[285px] flex p-4 items-center hover:bg-purple-200 transition-all duration-300 my-2 cursor-pointer min-w-[200px]">
      <NavIcon Icon={Icon} />
      <span className=" text-sm">{text}</span>
    </Link>
  );
};

export default NavBtn

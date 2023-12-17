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
import NavBtn from "./NavBtn";
import { IconType } from "react-icons";

type NavData = {
  groupName:''|'Discover'|'Your Collection'
  items:{
    text:string
    Icon:IconType
    href:string
  }[]
}[]

let Data:NavData = [
  {
    groupName:'',
    items:[
      {
        text:'Home',
        Icon:FaHome,
        href:'/'
      },
      {
        text:'Trends',
        Icon:FaChartLine,
        href:'/trends'
      },
      {
        text:'Feed',
        Icon:FaCompass,
        href:'/feed'
      },
    ]
  },
  {
    groupName:'Discover',
    items:[
      {
        text:'New and Notable',
        Icon:FaGripHorizontal,
        href:'/new'
      },
      {
        text:'Release Calendar',
        Icon:FaRegCalendarAlt,
        href:'/calendar'
      },
      {
        text:'Events',
        Icon:FaTicketAlt,
        href:'/events'
      },
    ]
  },
  {
    groupName:'Your Collection',
    items:[
      {
        text:'Favorite Songs',
        Icon:FaRegHeart,
        href:'/favorite_songs'
      },
      {
        text:'Trends',
        Icon:FaUsers,
        href:'/artists'
      },
      {
        text:'Albums',
        Icon:FaRegStar,
        href:'/albums'
      },
    ]
  },
]

export default function MusicNav() {
  return (
    <div className="flex-[0.2] min-w-[250px] max-w-[350px] px-4 sm:flex hidden flex-col h-full bg-white shadow-lg overflow-y-auto overflow-x-hidden absolute top-0 left-0 z-20 xl:relative transition-all duration-700 musicNav">
      <FaBars
        className="flex xl:hidden absolute top-0 left-0 barIcon"
        size="20"
      />
      <div className="flex flex-col">
        <div className="flex flex-col w-[20vw] ">
          <h1 className=" mt-10 text-3xl">
            Halo<span className=" text-blue-600">fi</span>
          </h1>
        </div>
        {
          Data.map((group) => {
              return (
                <div key={group.groupName} className="flex my-4 flex-col">
                  {group.groupName?<h6 className=" text-gray-400">{group.groupName}</h6>:null}
                  {
                    group.items.map((item) => {
                        return (
                          <NavBtn
                            key={item.href}
                            Icon={item.Icon}
                            text={item.text}
                            href={item.href}
                          />
                        );
                    })
                  }
                </div>
              );
          })
        }
      </div>
    </div>
  );
}

'use client'

import { useState } from "react";
import { BsPlay } from "react-icons/bs";

export default function Song (){
  const [scrollState, setScrollState] = useState(false);

  return (
    <div className="group text-[0.6rem] flex items-center my-1 rounded-lg w-full h-[20%] mdl:text-sm md:text-base hover:bg-white hover:shadow-md cursor-pointer transition-all duration-300">
      <div className="flex items-center justify-center h-full w-[10%] ">
        <h2 className="w-fit">01</h2>
      </div>
      <div
        className="flex items-center justify-between text-center w-fit max-h-[30px]  overflow-hidden "
        onMouseOver={(e) => setScrollState(true)}
        onMouseLeave={(e) => setScrollState(false)}
      >
        <div className={scrollState ? "flex textSlider" : "flex w-[100px]"}>
          <h3 className="w-fit p-1  max-h-[30px] inline">
            Time is Ticking Out
          </h3>
        </div>
      </div>
      <div className="flex  w-[5%] h-fit ">
        <BsPlay className="scale-0 p-2 mx-auto rounded-full text-[2rem] group-hover:scale-100 hover:text-white hover:bg-purple-400 transition-all duration-300" />
      </div>

      <div className="flex items-center  w-[20%] overflow-hidden">
        <div className="flex w-[200px]">
          <h3 className="w-[200px] p-1">The Peggies</h3>
        </div>
        ...
      </div>
      <div className="flex items-center px-2 w-[10%] ">
        <h3>2:59</h3>
      </div>
      <div className="flex items-center px-2 w-[30%]  overflow-hidden">
        <div className="flex w-[200px]">
          <h3 className="w-[200px]">Wake Up And Small T...</h3>
        </div>
      </div>
    </div>
  );
};

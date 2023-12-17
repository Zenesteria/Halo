import { IconType } from "react-icons";

interface compProps{
    Icon:IconType
    callBack:any
}

export default function PlayBackBtn ({Icon, callBack}:compProps){
  return (
    <div onClick={callBack} className="flex cursor-pointer mx-1 rounded-full hover:border-purple-200  border-transparent border-[1px] hover:bg-purple-100 transition-all duration-300 p-1 items-center w-fit h-fit">
      {
        <Icon className="text-[2rem] bg-purple-400 text-white p-2 rounded-full transition-all duration-300" />
      }
    </div>
  );
};

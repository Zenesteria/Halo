import React from 'react'
import { IconType } from 'react-icons';

interface compProps{
    Icon:IconType
}

export default function NavIcon ({ Icon }:compProps){
  return <Icon className="flex items-center rounded-3xl w-fit mr-4" />;
};

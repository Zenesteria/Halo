'use client'

import TopNav from './music_app_components/TopNav'
import MainSection from './music_app_components/Main'
import SubMain from './music_app_components/subMain'

export default function MusicApp(){
    return(
        <div className="flex h-screen w-full ">
            <div className="flex  ml-auto
             w-full p-4 justify-center">
                <div className="flex flex-col container relative">
                    <TopNav/>
                    <MainSection/>
                </div>
                <SubMain/>
            </div>
        </div>
    )
}









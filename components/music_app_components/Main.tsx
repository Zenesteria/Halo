import {FaFire} from 'react-icons/fa'
import Banner from './Banner'
import SongMenu from './SongMenu'
import MusicControls from './MusicControls'

const Main = () => {
    return(
        <div className="flex w-[100%] justify-center h-full">
            <div className="relative flex w-[100%]  flex-col px-4">
                <div className="flex w-full h-[8%] my-2">
                    <div className="flex flex-col w-fit justify-center">
                        <h6 className='flex text-xs lg:text-sm items-center h-fit'>{"What's Hot"} <FaFire className='mx-1 text-xs'/></h6>
                        <h1 className=' text-[1rem] lg:text-[1.5rem] font-bold'>Trending</h1>
                    </div>
                    <div className="flex ml-auto py-1 px-4 text-xs lg:text-2xl items-end">
                        <h6>{'More >'}</h6>
                    </div>
                </div>

                {/* THE BANNER SECTION */}

                <Banner/>

                {/* ------------------------- */}



                {/* THE MENU SECTION */}

                <SongMenu/>

                {/* ----------------------------- */}

                <MusicControls/>
            </div>
        </div>
    )
}

export default Main;

import {MdMoreHoriz} from 'react-icons/md'

const Artist = () => {
    return(
        <div className="flex items-center p-1 w-full h-[30%]">
            <div className=" w-10 h-10 bg-[url('/images/trackbackdrop.png')] bg-cover bg-center rounded-full"></div>
            <div className="flex flex-col w-fit mx-1 justify-center">
                <h6 className='text-sm font-bold'>Kana Nishino</h6>
                <p className='text-xs text-gray-700'>196 songs in library</p>
            </div>
            <MdMoreHoriz size='20' className='ml-auto'/>
        </div>
    )
}

export default Artist;
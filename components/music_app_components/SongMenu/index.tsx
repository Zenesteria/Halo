import Song from './SongItem';

const SongMenu = () => {
    return(
        <div className="flex flex-col w-full h-[45%]">
            <div className="flex justify-between items-center w-full h-[15%] ">
                <h1 className='font-bold text-2xl'>My Playlist</h1>
                <h6>Show All</h6>
            </div>
            <div className="flex flex-col w-full h-[85%]  overflow-auto py-2">
                <Song/>
                <Song/>
                <Song/>
            </div>
        </div>
    )
}






export default SongMenu;
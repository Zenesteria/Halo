import { useState } from 'react'
import {FaRegHeart,FaHeart} from 'react-icons/fa'
import {BsMusicNoteBeamed, BsArrowsAngleExpand,BsArrowsAngleContract, BsFillPauseCircleFill,BsFillPlayCircleFill, BsShuffle, BsVolumeUp, BsVolumeDown} from 'react-icons/bs'
import {FiRepeat, FiMoreHorizontal} from 'react-icons/fi'
import {BiRewind, BiFastForward} from 'react-icons/bi'
import player from '../../music_app_styles/player.module.css'
import PlayBackBtn from './Playbtn'

const MusicControls = () => {
    const [playing, setPlaying] = useState(true)
    const [like, setLike] = useState(false)
    const [fullScreen, setFullScreen] = useState(false)
    const [repeat, setRepeat] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const liked = 'cursor-pointer rounded-md text-[1rem] mr-1 text-red-500 heart transition-all duration-300'
    const notLiked = 'cursor-pointer rounded-md text-[1rem] mr-1 text-black transition-all duration-300 hover:scale-[1.2]'
    const handleLike = () => {
        if(like){
            setLike(false)
        }
        else{
            setLike(true)
        }
    }
    const handleShuffle = () => {
        if(shuffle){
            setShuffle(false)
        }
        else{
            setShuffle(true)
        }
    } 
    const handleRepeat = () => {
        if(repeat){
            setRepeat(false)
        }
        else{
            setRepeat(true)
        }
    }
    const handleFullScreen = () => {
        let fullScreenElem = document.getElementById('fullScreen')
        if(fullScreen){
            fullScreenElem?.requestFullscreen()
            setFullScreen(true)
        }
        else{
            fullScreenElem?.requestFullscreen()
            setFullScreen(false)
        }
    }
    const handlePlaying = () => {
        if(playing){
            setPlaying(false)
        }
        else{
            setPlaying(true)
        }
    }
    return(
        <div className="flex flex-col justify-between w-full bg-white h-[15%] rounded-2xl shadow-xl">
            <div className="flex w-[90%] mx-auto h-[60%] items-center justify-center">
            <div className="flex flex-col items-center w-fit">
                <div className="hidden mdxs:flex items-center">
                    <div className="flex relative w-fit h-fit">
                        <FaHeart className={like ? liked : notLiked } onClick={handleLike}/>

                    </div>
                    <div className="flex cursor-pointer mx-1 rounded-lg bg-purple-100 hover:bg-purple-300 transition-all duration-300 p-2 items-center w-fit h-fit">
                        <BsMusicNoteBeamed className='text-[1rem]'/>
                    </div>
                    <div className={(!fullScreen ? "flex " : "hidden ") + "cursor-pointer mx-1 rounded-lg bg-purple-100 hover:bg-purple-300 transition-all duration-300 p-2 items-center w-fit h-fit"}>
                        <BsArrowsAngleExpand id='fullScreen' className='text-[1rem]' onClick={handleFullScreen}/>
                    </div>
                    
                </div>
                <FiMoreHorizontal className='mdxs:hidden'/>
            </div>
            <div className="flex items-center justify-center w-[85%]  h-full">
                <PlayBackBtn Icon={FiRepeat} callBack={handleRepeat}/>
                <PlayBackBtn Icon={BiRewind} callBack={() => {}}/>
                {playing ? <BsFillPauseCircleFill className='bg-white rounded-full text-[1.5rem] mdxs:text-[2.5rem] cursor-pointer transition-all hover:bg-black hover:text-white duration-500' onClick={handlePlaying}/> : <BsFillPlayCircleFill className='bg-white rounded-full text-[1.5rem] mdxs:text-[2.5rem] cursor-pointer transition-all hover:bg-black hover:text-white duration-500' onClick={handlePlaying}/>}
                <PlayBackBtn Icon={BiFastForward} callBack={() => {}}/>
                <PlayBackBtn Icon={BsShuffle} callBack={handleShuffle}/>
            </div>
            <div className="flex items-center w-fit">
                <div className="hidden mdxs:flex items-center">
                    <BsVolumeDown className=' mx-1' size='24'/>
                    <input className={player.voltrack} type="range" name="" id="volume" />
                </div>
                <FiMoreHorizontal className='mdxs:hidden'/>
            </div>
            </div>
            <div className="flex items-center m-auto w-[90%] h-[20%]">
                <span>0:00</span>
                <input type="range" className={player.seeker}/>
                <span>0:00</span>
            </div>   
        </div>
    )
}







export default MusicControls;
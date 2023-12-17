import { useState } from 'react'
import {FaRegHeart,FaHeart} from 'react-icons/fa'
import {BsMusicNoteBeamed, BsArrowsAngleExpand,BsArrowsAngleContract, BsFillPauseCircleFill,BsFillPlayCircleFill, BsShuffle, BsVolumeUp, BsVolumeDown} from 'react-icons/bs'
import {FiRepeat, FiMoreHorizontal} from 'react-icons/fi'
import {BiRewind, BiFastForward} from 'react-icons/bi'
import player from '../music_app_styles/player.module.css'

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
            fullScreenElem.requestFullscreen()
            setFullScreen(true)
        }
        else{
            fullScreenElem.requestFullscreen()
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
                <PlayBackBtn icon={<FiRepeat className={repeat ? 'text-[2rem] bg-purple-400 text-white p-2 rounded-full transition-all duration-300' : 'text-[2rem] p-2 rounded-full transition-all duration-300'} onClick={handleRepeat}/>}/>
                <PlayBackBtn icon={<BiRewind className='text-[1.3rem]'/>}/>
                {playing ? <BsFillPauseCircleFill className='bg-white rounded-full text-[1.5rem] mdxs:text-[2.5rem] cursor-pointer transition-all hover:bg-black hover:text-white duration-500' onClick={handlePlaying}/> : <BsFillPlayCircleFill className='bg-white rounded-full text-[1.5rem] mdxs:text-[2.5rem] cursor-pointer transition-all hover:bg-black hover:text-white duration-500' onClick={handlePlaying}/>}
                <PlayBackBtn icon={<BiFastForward className='text-[1.3rem]'/>}/>
                <PlayBackBtn icon={<BsShuffle className={shuffle ? 'text-[2rem] bg-purple-400 text-white p-2 rounded-full transition-all duration-300' : 'text-[2rem] p-2 rounded-full transition-all duration-300'} onClick={handleShuffle}/>}/>
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




const PlayBackBtn = (props) => {
    return(
        <div className="flex cursor-pointer mx-1 rounded-full hover:border-purple-200  border-transparent border-[1px] hover:bg-purple-100 transition-all duration-300 p-1 items-center w-fit h-fit">
            {props.icon}
        </div>
    )
}


export default MusicControls;
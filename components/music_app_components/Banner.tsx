


const Banner = () => {
    return(
        <div className="flex relative w-full 
                h-[30%] bg-cover my-4 rounded-2xl bg-[url('/images/backdropOne.jpg')]">
                    <div className="absolute w-full h-full rounded-2xl  bg-gradient-to-r from-white via-[rgba(255,255,255,0.7)] to-transparent"></div>
                    <div className="flex z-10 flex-col w-fit h-full text-black justify-center px-4">
                        <h6 className=' text-gray-400 mb-2 text-sm'>Artist</h6>
                        <h1 className='font-bold text-2xl mb-4'>
                            On Top <br/>
                            Of The World
                        </h1>
                        <div className="flex items-center">
                            <button className='bg-black text-white text-xs px-5 py-2 h-fit rounded-3xl mr-2 xl:px-10 xl:text-base hover:scale-105 transition-all duration-500'>PLAY</button>
                            <button className='bg-transparent text-black text-xs px-5 py-2 h-fit rounded-3xl mr-2 border-[1px] border-black xl:px-10 xl:text-base hover:bg-black hover:text-white transition-all duration-500 hover:scale-105'>FOLLOW</button>
                        </div>
                    </div>
                </div>
    )
}

export default Banner;
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMuteTrailer } from '../utils/movieSlice'

const VideoTitle = ({title, desc}) => {

  const dispatch = useDispatch()
  const muteStatus = useSelector((store)=> store.movies.isMuted)

  const trailerMuteHandler = ()=>{
    if(muteStatus){
      dispatch(addMuteTrailer(false))
    }else{
      dispatch(addMuteTrailer(true))
    }
  }

  return (
    <div className='w-full  px-6 sm:px-20 absolute  sm:top-0  bg-gradient-to-r from-black h-screen'>
        <div className='w-full p-1 relative top-48 sm:top-72'>
            <h1 className='text-5xl text-wrap text-white font-bold leading-[3.3rem] tracking-tighter md:text-6xl'>{title}</h1>
            <p className='leading-tight my-4 text-white text-wrap font-normal sm:w-1/3 md:w-1/2 lg:w-1/3'>{desc.slice(0,Math.floor(desc.length / 2))}...more</p>
            <div className='flex items-center justify-between'>
              <div className='flex gap-2'>
                  <a className='px-5 py-2 cursor-pointer rounded-md font-semibold text-xl bg-white'>Play</a>
                  <a className='px-5 py-2 cursor-pointer rounded-md font-semibold text-xl bg-gray-400 text-white'>More Info</a>
              </div>
              <div onClick={trailerMuteHandler} className='w-12 h-12 rounded-full border-[1px] border-white text-white font-bold cursor-pointer  flex items-center justify-center'>M</div>

            </div>
        </div>
    </div>
  )
}

export default VideoTitle
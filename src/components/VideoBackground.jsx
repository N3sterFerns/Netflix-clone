import React, { useState } from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'

const VideoBackground = ({movieId}) => {
  useMovieTrailer(movieId)
  const trailer = useSelector((store)=> store.movies?.nowPlayingTrailer)
  const isMuted = useSelector((store)=> store.movies.isMuted)

  return (
    <div className='w-full h-screen bg-slate-600/10 absolute overflow-hidden'>
      <iframe
          className='absolute scale-[5.4] sm:scale-150  w-full h-full inset-0 object-cover pointer-events-none'
          src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&loop=1&playlist=${trailer?.key}&controls=0&modestbranding=1&rel=0${isMuted? "&mute=1": ""}`}
          title='Trailer'
          allow=' autoplay; encrypted-media;'
          allowFullScreen
          
        ></iframe>
    </div>
  )
}

export default VideoBackground
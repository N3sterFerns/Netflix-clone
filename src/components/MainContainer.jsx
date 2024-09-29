import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    // https://image.tmdb.org/t/p/w220_and_h330_face

    const movies = useSelector((store)=> store.movies?.nowPayingMovies)

    if(!movies) return 

    const {title, overview, backdrop_path, id} = movies[Math.floor(Math.random() * movies.length - 1)]

    
    

  return (
    <div className='relative w-full h-screen '>
        <VideoBackground movieId={id} />
        <VideoTitle title={title} desc={overview}/>
    </div>
  )
}

export default MainContainer
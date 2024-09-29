import React, { useEffect } from 'react'
import Header from './Header'
import usePlayingMovies from '../hooks/usePlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRated from "../hooks/useTopRated"
import useUpcoming from "../hooks/useUpcoming"

const Browse = () => {
  // https://api.themoviedb.org/3/movie/now_playing?page=1
  
  
  usePlayingMovies()
  usePopularMovies()
  useTopRated()
  useUpcoming()
  

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies?.nowPayingMovies)
  const popularMovies = useSelector((store)=> store.movies?.popularMovies)
  const topRated = useSelector((store)=> store.movies?.topRated)
  const upcoming = useSelector((store)=> store.movies?.upcomingMovies)
  return (
    <div className='min-h-screen w-full bg-black sm:px-20 px-6'>
      <div className='relative -top-56'>
        <MovieList mainList={true} movies={movies} />
      </div>
      <div className='relative -top-40'>
        <MovieList padding={true} movies={popularMovies} title={"Popular Movies"} />
      </div>
      <div className='relative -top-40'>
        <MovieList padding={true} movies={topRated} title={"Top Rated"} />
      </div>
      <div className='relative -top-40'>
        <MovieList padding={true} movies={upcoming} title={"Upcoming Movies"} />
      </div>
    </div>
  )
}

export default SecondaryContainer
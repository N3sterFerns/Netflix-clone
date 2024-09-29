import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'


const MovieList = ({movies, title="", mainList=false}) => {
  return (
    <div className="">
        {title && (<h1 className='text-4xl text-white font-bold py-10'>{title}</h1>)}
        <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={30}
        pagination={{clickable: true}}
        autoplay={mainList ? {delay: 1000, disableOnInteraction: false}: false}
        breakpoints={{
            // when window width is >= 640px
            390: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: mainList ? 4: 6,
                spaceBetween: 30,
            },
        }}
        >
            {movies?.map((movie)=>(
                <>
                    <SwiperSlide key={movie.id} className='w-40 h-52 rounded-md overflow-hidden hover:scale-125 transition-all duration-500'>
                        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
                    </SwiperSlide>
                </>
            ))}
            
        </Swiper>
    </div>
  )
}

export default MovieList
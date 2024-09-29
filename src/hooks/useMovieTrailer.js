import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../contraints"
import { addNowPlayingTrailer } from "../utils/movieSlice"




const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    // https://api.themoviedb.org/3/movie/movie_id/videos
    const nowPlayingTrailer = () => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
            .then((res) => res.json())
            .then((data) => {
                const getTrailer = data.results.filter((d) => d.type === "Trailer" || d.type === "Teaser")
                if (getTrailer.length > 0) {
                    dispatch(addNowPlayingTrailer(getTrailer[0]))
                } else {
                    data[0]
                }
            })
    }

    useEffect(() => {
        nowPlayingTrailer()
    }, [])
}


export default useMovieTrailer;
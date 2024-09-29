import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../contraints"


const usePlayingMovies = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS)
            .then((res) => res.json())
            .then((data) => {
                dispatch(addNowPlayingMovies(data?.results))
                // console.log(data);
            })

    }, [])

}


export default usePlayingMovies;



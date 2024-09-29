import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../contraints"
import { addTopRatedMovies } from "../utils/movieSlice"


const useTopRated = ()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS)
        .then((res)=>res.json())
        .then((data)=>{
            dispatch(addTopRatedMovies(data.results))
        })
    }, [])
}


export default useTopRated;
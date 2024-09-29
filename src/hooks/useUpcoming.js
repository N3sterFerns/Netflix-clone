import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../contraints"
import { addUpcomingMovies } from "../utils/movieSlice"


const useUpcoming = ()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS)
        .then((res)=>res.json())
        .then((data)=>{
            dispatch(addUpcomingMovies(data.results))
        })
    }, [])
}


export default useUpcoming;
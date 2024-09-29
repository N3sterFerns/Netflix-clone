import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    nowPayingMovies: null,
    nowPlayingTrailer: null,
    popularMovies: null,
    topRated: null,
    upcomingMovies: null,
    isMuted: true,
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addNowPlayingMovies: (state, action)=>{
            state.nowPayingMovies = action.payload;
        },
        addNowPlayingTrailer: (state, action)=>{
            state.nowPlayingTrailer = action.payload;
        },
        addMuteTrailer: (state, action)=>{
            state.isMuted = action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action)=>{
            state.topRated = action.payload;
        },
        addUpcomingMovies: (state, action)=>{
            state.upcomingMovies = action.payload;
        }

    }
})


export const {addNowPlayingMovies, addNowPlayingTrailer, addMuteTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer; 
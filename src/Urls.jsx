import {API_KEY} from './Constants/Constants'
export const originals =`discover/tv?api_key=${API_KEY}&with_networks=213`
export const action =`/discover/movie?api_key=${API_KEY}&with_genres=28`
export const upcoming =`https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=${API_KEY}`
export const topRated =`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`
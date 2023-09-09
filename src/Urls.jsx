
import { API_KEY, baseUrl } from "./Constants/Constants";

export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const upcoming = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=${API_KEY}`;
export const topRated = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`;
export const movieSearch = `${baseUrl}/search/movie?query=blue&api_key=${API_KEY}`;
export const bgimage='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg'

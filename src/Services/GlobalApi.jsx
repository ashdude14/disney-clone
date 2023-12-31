import axios from 'axios';
const movieBaseUrl="https://api.themoviedb.org/3"
const apiKey="af5fce3f491f9c138bf5547028bd9997";
const Url="https://api.themoviedb.org/3/trending/movie/day?api_key="
const getTrendingVideos=axios.get(Url+apiKey);
console.log(Url+apiKey);

export default {
    getTrendingVideos   
}
//https://api.themoviedb.org/3/trending/movie/day?api_key=af5fce3f491f9c138bf5547028bd9997
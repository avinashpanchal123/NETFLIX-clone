import axios from "axios";

/* base url for making request the movies db */

const instance = axios.create( {
    baseURL : "https://api.themoviedb.org/3"
});


export default instance;
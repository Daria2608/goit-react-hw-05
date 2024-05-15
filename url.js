import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDMyOTdlM2Q3ODE5MDFkMWMzMDM3MzMzMzY0NjBiOCIsInN1YiI6IjY2NDMzYzUxNjUxODVkNzE1NGNiNWMxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rf6xYJBVZZEb_TUqV8fPvf97T9iPVbVH2WNWYR669I8'
    },
};



export const getFilms = async () => {
    const response = await axios.get('/trending/movie/day?language=en-US', options)
    // console.log(response.data.results);
    return response.data.results
}

export const getFilmsById = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}`, options)
    // console.log(response.data);
    return response.data
}

export const getCastById = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits`, options)
    // console.log(response);
    return response.data.cast
}

export const getReveiwsById = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews`, options)
    return response.data.results
}

export const searchMovie = async (query) => {
    const response = await axios.get("search/movie", {
   headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDMyOTdlM2Q3ODE5MDFkMWMzMDM3MzMzMzY0NjBiOCIsInN1YiI6IjY2NDMzYzUxNjUxODVkNzE1NGNiNWMxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rf6xYJBVZZEb_TUqV8fPvf97T9iPVbVH2WNWYR669I8'
    },
    params: {
        query, 
    }
    })

    return response.data.results
}
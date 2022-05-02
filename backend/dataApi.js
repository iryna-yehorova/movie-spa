const axios = require('axios')

const http = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        'api_key': process.env.apiKey
    }
  });

async function getPopularMoviesList({page, language}) {
    try {
        const response = await http.get('movie/popular', {
            params: {
                page,
                language
            }
        })
        return response.data
    } catch (err) {
        throw new Error(err.text)
    }
}

async function getMovie(id, language) {
    try {
        const response = await http.get(`/movie/${id}`, {
            params: {
                language
            }
        })
        return response.data
    } catch (err) {
        throw new Error(err.text)
    }
}

async function searchMovie({ language, genre, page }) {
    try {
        const response = await http.get('discover/movie', {
            params: {
                page,
                language,
                with_genres: genre
            }
        })
        return response.data
    } catch (err) {
        throw new Error(err.text)
    }
}

export { 
    getPopularMoviesList,
    getMovie,
    searchMovie
 }

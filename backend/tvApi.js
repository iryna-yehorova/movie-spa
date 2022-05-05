const axios = require('axios')

const http = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        'api_key': process.env.apiKey
    }
  });

async function getPopularTvList({ page, language }) {
    try {
        const response = await http.get('tv/popular', {
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

async function getTv(id, language) {
    try {
        const response = await http.get(`/tv/${id}`, {
            params: {
                language
            }
        })
        return response.data
    } catch (err) {
        throw new Error(err.text)
    }
}

async function searchTv({ language, genre, page }) {
    try {
        const response = await http.get('discover/tv', {
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

async function getGenresTv({ page, language }) {
    try {
        const response = await http.get('genre/tv/list', {
            params: {
                page,
                language
            }
        })
        return response.data.genres
    } catch (err) {
        throw new Error(err.text)
    }
}

async function getRecommendationsTv(id, language) {
    try {
        const response = await http.get(`/tv/${id}/recommendations`, {
            params: {
                language
            }
        })
        return response.data.results
    } catch (err) {
        throw new Error(err.text)
    }
}

export { 
    getPopularTvList,
    getTv,
    searchTv,
    getGenresTv,
    getRecommendationsTv
 }

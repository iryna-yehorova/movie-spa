const axios = require('axios')

const http = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        'api_key': process.env.apiKey
    }
  });

async function getLatestMovies() {
    try {
        const response = await http.get('movie/latest')
        return response.data
    } catch (err) {
        throw new Error(err.text)
    }
}

export { getLatestMovies }
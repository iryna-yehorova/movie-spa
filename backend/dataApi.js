const axios = require('axios')

const http = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        'api_key': process.env.apiKey
    }
  });

async function getPopularMoviesList(page, language) {
    try {
        const response = await http.get('movie/popular', {
            params: {
                page,
                language
            }
        })
        return {
            totalPages: response.data.total_pages,
            items: response.data.results.map(item => {
                return {
                    id: item.id,
                    title: item.original_title,
                    img: item.poster_path
                }
            })
        }
    } catch (err) {
        throw new Error(err.text)
    }
}

export { 
    getPopularMoviesList
 }

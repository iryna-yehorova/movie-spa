<template>
    <Search
        :genre="genre"
        :searchItem="searchItem"
        :getGenresList="getGenresList"
        route="movie-id"
    />
</template>

<script>
import Search from '../../../components/Search.vue'
import * as movieApi from '../../../backend/movieApi'

export default {
    name: 'movie-search-id',
    components: {
        Search
    },
    data() {
        return {
            genre: '',
        }
    },
    created() {
        this.genre = this.$route.params.id
    },
    methods: {
        searchItem(params) {
            return movieApi.searchMovie(params)
        },
        getGenresList(params) {
            return movieApi.getGenres(params)
        }
    }
}
</script>
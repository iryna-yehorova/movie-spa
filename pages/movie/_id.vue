<template>
    <Card 
        :id="id"
        :getData="getData"
        :getRecommended="getRecommended"
        route="movie-id"
        searchRoute="movie-search-id"
    />
</template>

<script>
import * as movieApi from '../../backend/movieApi'

export default {
    name: 'movie-id',
    data() {
        return {
            id: null, 
        }
    },
    created() {
        this.id = this.$route.params.id
    },
    methods: {
        getData(id, language) {
            return movieApi.getMovie(id, language);
        },
        getRecommended(id, language) {
            return movieApi.getRecommendations(id, language)
        }
    }
}
</script>
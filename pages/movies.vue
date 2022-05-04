<template>
  <List
    :getItems="getPopularMoviesList"
    route="movie-id"
  />
</template>

<script>
import * as movieApi from '../backend/movieApi'
import List from '../components/List.vue'

export default {
  name: 'movies',
  components: {
    List
  },
  methods: {
    getPopularMoviesList(params) {
      return movieApi.getPopularMoviesList(params);
    }
  }
}
</script>

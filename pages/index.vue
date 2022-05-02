<template>
  <List
    :getItems="getPopularMoviesList"
  />
</template>

<script>
import * as movieApi from '../backend/movieApi'
import List from '../components/List.vue'

export default {
  name: 'index',
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

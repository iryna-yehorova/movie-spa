<template>
  <List
    :getItems="getPopularMoviesList"
  />
</template>

<script>
import * as dataApi from '../backend/dataApi'
import List from '../components/List.vue'

export default {
  name: 'index',
  components: {
    List
  },
  methods: {
    getPopularMoviesList(params) {
      return dataApi.getPopularMoviesList(params);
    }
  }
}
</script>

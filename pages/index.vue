<template>
  <v-row justify="center" align="center">
    <span>In develop</span>
  </v-row>
</template>

<script>
import * as dataApi from '../backend/dataApi'

export default {
  name: 'home',
  data() {
    return {
      latestMovie: {}
    }
  },
  created() {
    this.getLatestMovies()
  },
  methods: {
    async getLatestMovies() {
      this.latestMovie = await dataApi.getLatestMovies()
    }
  }
}
</script>

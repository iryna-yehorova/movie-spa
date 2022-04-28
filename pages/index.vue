<template>
  <v-row justify="center" align="center">
    <span>In develop</span>
  </v-row>
</template>

<script>
import * as dataApi from '../backend/dataApi'

export default {
  name: 'IndexPage',
  data() {
    return {
      latestMovies: []
    }
  },
  created() {
    this.getLatestMovies()
  },
  methods: {
    async getLatestMovies() {
      this.latestMovies = await dataApi.getLatestMovies()
    }
  }
}
</script>

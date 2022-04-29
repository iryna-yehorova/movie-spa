<template>
  <div>
    <v-row justify="center" align="center">
        <v-card v-for="item in popularList" :key="item.id" width="300" class="ma-3" height="330">
          <v-card-text>
            <v-row align="center" class="d-flex">
              <v-col class="d-flex flex-column justify-center align-center">
                <v-img
                  :src="'https://image.tmdb.org/t/p/w500/' + item.img"
                  alt="Movie image"
                  width="150"
                />
                <p class="headline mt-2 text-center">{{ item.title }}</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
    </v-row>
    <v-row class="text-center d-flex justify-center">
      <v-pagination
        v-model="page"
        color="grey darken-1"
        :length="total"
        total-visible="6"
        class="mt-4"
      ></v-pagination>  
    </v-row>
  </div>
</template>

<script>
import * as dataApi from '../backend/dataApi'

export default {
  name: 'index',
  data() {
    return {
      popularList: [],
      page: 1,
      total: null
    }
  },
  created() {
    this.getPopularMoviesList()
  },
  computed: {
    language() {
      return this.$i18n.locale;
    }
  },
  watch: {
    page() {
      this.getPopularMoviesList()
    },
    language() {
      this.getPopularMoviesList()
    }
  },
  methods: {
    async getPopularMoviesList() {
      const res = await dataApi.getPopularMoviesList(this.page, this.language)
      this.total = res.totalPages
      this.popularList = res.items
    }
  }
}
</script>

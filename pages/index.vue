<template>
  <v-row justify="center">
    <v-col md="2" v-for="(link, index) in links" :key="index" >
      <v-btn
        class="ma-2"
        outlined
      >
         <nuxt-link :to="localePath(link.route)" class="white--text text-decoration-none mx-5">{{ $t(link.name) }}</nuxt-link>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      links: [
        { name: 'indexLinks.movie', route: 'movies' },
        { name: 'indexLinks.tv', route: 'tv' },
      ]
    }
  }
}
</script>

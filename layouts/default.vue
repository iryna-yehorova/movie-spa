<template>
  <v-app>
    <Navbar />
    
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  name: 'DefaultLayout',
}
</script>

<template>
    <div>
        <v-navigation-drawer
            v-if="$vuetify.breakpoint.smAndDown"
            v-model="drawer"
            absolute
            temporary
            app
        >
            <v-list nav dense >
                <v-list-item-group v-model="group" active-class="text--white"> 
                    <v-list-item  v-for="(item, index) in links"  :key="index">
                        <nuxt-link :to="localePath(item.name)" class="white--text text-decoration-none">{{ $t(item.locale) }}</nuxt-link>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar>
            <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click="drawer = !drawer" />
            <v-app-bar-title>Movietime App</v-app-bar-title>

            <v-spacer></v-spacer>

            <v-list nav dense class="d-flex py-0" v-if="$vuetify.breakpoint.mdAndUp" :style="{ backgroundColor: 'transparent'}">
                <v-list-item-group active-class="text--white" class="d-flex ma-0"> 
                    <v-list-item v-for="(item, index) in links" :key="index" :style="{ width: '200px'}" class="d-flex justify-center my-0">
                        <nuxt-link :to="localePath(item.name)" class="white--text text-decoration-none mx-5 text-center">{{ $t(item.locale) }}</nuxt-link>
                    </v-list-item>
                </v-list-item-group>
            </v-list>

            <LanguageSwitcher /> 
        </v-app-bar>
    </div>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
    components: {
        LanguageSwitcher
    },
    data() {
        return {
            group: null,
            drawer: false,
            links: [
                { name: 'index', locale: 'navLinks.index' },
                { name: 'movies', locale: 'navLinks.movies' },
                { name: 'tv', locale: 'navLinks.tv' },
            ]
        }
    },
}
</script>
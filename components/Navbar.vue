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
                <v-list-item-group v-model="group" active-class="deep-blue--text text--white"> 
                    <v-list-item  v-for="(item, index) in links"  :key="index">
                       <v-list-item-title>{{ $t(item.locale)}}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar dark>
            <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title>Movietime App</v-app-bar-title>

            <v-spacer></v-spacer>

            <v-list class="d-flex py-0" v-if="$vuetify.breakpoint.mdAndUp">
                <v-list-item  v-for="(item, index) in links"  :key="index">
                    <v-list-item-title>{{ $t(item.locale)}}</v-list-item-title>
                </v-list-item>
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
                { name: 'home', locale: 'navLinks.home' },
                { name: 'posts', locale: 'navLinks.posts' },
                { name: 'about', locale: 'navLinks.about' },
            ]
        }
    },
}
</script>

<style>

</style>
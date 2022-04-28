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
                    <v-list-item  v-for="(item, index) in list"  :key="index">
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar color="blue" dark>
            <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title>Movietime app</v-app-bar-title>

            <v-spacer></v-spacer>

            <v-list class="d-flex py-0" color="blue" v-if="$vuetify.breakpoint.mdAndUp">
                <v-list-item  v-for="(item, index) in list"  :key="index">
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
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
            list: [
                { name: 'Home' },
                { name: 'Movies' },
                { name: 'Trends'}
            ],
            drawer: false
        }
    }
}
</script>

<style>

</style>
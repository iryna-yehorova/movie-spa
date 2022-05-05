<template>
    <div>
        <v-row justify="center" align="center">
            <v-chip-group v-model="activeGenres" active-class="primary--text" multiple mandatory>
                <v-chip 
                    v-for="genre in genresList"
                    :key="genre.id"
                    class="ma-3 overline"
                    filter
                >
                    {{ genre.name }}
                </v-chip>
             </v-chip-group>
        </v-row>
        <List
            :searchParams="{ genre: searchParam }"
            :getItems="getSearch"
            :route="route"    
        />
    </div>
</template>

<script>
import List from './List.vue'

export default {
    name: 'search',
    props: {
        genre: String,
        searchItem: Function,
        getGenresList: Function,
        route: String
    },
    components: {
        List
    },
    data() {
        return {
            genresList: [],
            activeGenres: []
        }
    },
    computed: {
        language() {
            return this.$i18n.locale
        },
        searchParam() {
            let genreArr = []
            this.activeGenres.forEach(ag => genreArr.push(this.genresList[ag].id))
            return genreArr.join(',')
        }
    },
    watch: {
        genre: {
            handler() {
                this.getGenres()
            },
            immediate: true
        }
    },
    methods: {
        getSearch(params) {
            return this.searchItem(params)
        },
        async getGenres() {
            const params = {
                page: 1,
                language: this.language
            }
            this.genresList = await this.getGenresList(params)
            let active = this.genresList.findIndex(item => item.id === Number(this.genre))
            this.activeGenres.push(active)
        }
    }
}
</script>
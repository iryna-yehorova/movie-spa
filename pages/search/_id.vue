<template>
    <div>
        <v-row justify="center" align="center">
            <v-chip-group v-model="activeGenres" active-class="primary--text" multiple mandatory>
                <v-chip 
                    v-for="genre in genresList"
                    :key="genre.id"
                    class="ma-3"
                    filter
                >
                    {{ genre.name }}
                </v-chip>
             </v-chip-group>
        </v-row>
        <List
            :searchParams="{ genre: searchParam }"
            :getItems="getSearch"    
        />
    </div>
</template>

<script>
import * as movieApi from '../../backend/movieApi'
import List from '../../components/List.vue'

export default {
    name: 'search-id',
    components: {
        List
    },
    data() {
        return {
            genre: '',
            genresList: [],
            activeGenres: []
        }
    },
    created() {
        this.genre = this.$route.params.id
        this.getGenres()
    },
    computed: {
        language() {
            return this.$i18n.locale
        },
        searchParam() {
            let genreArr = []
            this.activeGenres.forEach(ag => genreArr.push(this.genresList[ag].id))
            genreArr = genreArr.join(',')
            return genreArr
        }
    },
    methods: {
        getSearch(params) {
            return movieApi.searchMovie(params)
        },
        async getGenres() {
            const params = {
                page: 1,
                language: this.language
            }
            this.genresList = await movieApi.getGenres(params)
            let active = this.genresList.findIndex(item => item.id === Number(this.genre))
            this.activeGenres.push(active)
        }
    }
}
</script>
<template>
    <div>
        <v-row justify="center" align="center">
            <v-chip-group v-model="activeGenre" active-class="primary--text">
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
            :searchParams="{ genre }"
            :getItems="getSearch"    
        />
    </div>
</template>

<script>
import * as dataApi from '../../backend/dataApi'
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
            activeGenre: []
        }
    },
    created() {
        this.genre = this.$route.params.id
        this.getGenres()
    },
    computed: {
        language() {
            return this.$i18n.locale
        }
    },
    methods: {
        getSearch(params) {
            return dataApi.searchMovie(params)
        },
        async getGenres() {
            const params = {
                page: 1,
                language: this.language
            }
            this.genresList = await dataApi.getGenres(params)
            this.activeGenre = this.genresList.findIndex(item => item.id === Number(this.genre))
        }
    }
}
</script>
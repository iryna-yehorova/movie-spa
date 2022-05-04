<template>
    <Search
        :genre="genre"
        :searchItem="searchItem"
        :getGenresList="getGenresList"
        route="serial-id"
    />
</template>

<script>
import Search from '../../../components/Search.vue'
import * as tvApi from '../../../backend/tvApi'

export default {
    name: 'serial-search-id',
    components: {
        Search
    },
    data() {
        return {
            genre: '',
        }
    },
    created() {
        this.genre = this.$route.params.id
    },
    methods: {
        searchItem(params) {
            return tvApi.searchTv(params)
        },
        getGenresList(params) {
            return tvApi.getGenresTv(params)
        }
    }
}
</script>
<template>
    <List
        :searchParams="{ genre }"
        :getItems="getSearch"    
    />
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
        }
    },
    created() {
        this.genre = this.$route.params.id
    },
    methods: {
        getSearch(params) {
            return dataApi.searchMovie(params)
        }
    }
}
</script>
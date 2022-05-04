<template>
    <Card 
        :id="id"
        :getData="getData"
        :getRecommended="getRecommended"
        route="serial-id"
        searchRoute="serial-search-id"
    />
</template>

<script>
import Card from '../../components/Card.vue'
import * as tvApi from '../../backend/tvApi'

export default {
    name: 'serial-id',
    components: {
        Card
    },
    data() {
        return {
            id: null
        }
    },
    created() {
        this.id = this.$route.params.id
    },
    methods: {
        getData(id, language) {
            return tvApi.getTv(id, language)
        },
        getRecommended(id, language) {
            return tvApi.getRecommendationsTv(id, language)
        }
    }
}

</script>
<template>
    <div>
        <v-row justify="center" align="center">
            <v-card 
                v-for="item in items" 
                :key="item.id" 
                width="300" 
                class="ma-3" 
                height="330" 
                nuxt 
                :to="localePath({ name: route, params: { id: item.id } })"
            >
                <v-card-text>
                    <v-row align="center" class="d-flex">
                        <v-col class="d-flex flex-column justify-center align-center">
                            <v-img
                                :src="'https://image.tmdb.org/t/p/w500/' + item.poster_path"
                                alt="Movie or tv show image"
                                width="150"
                            />
                            <p class="headline mt-2 text-center" v-if="item.title">{{ item.title }}</p>
                            <p class="headline mt-2 text-center" v-else>{{ item.name }}</p>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
        <v-row class="text-center d-flex justify-center">
            <v-pagination
                v-model="page"
                color="grey darken-1"
                :length="total"
                total-visible="10"
                class="mt-4"
            /> 
        </v-row>
    </div>
</template>

<script>
export default {
    props: {
        getItems: Function,
        searchParams: Object,
        route: String
    },
    data() {
        return {
            page: '',
            total: null,
            items: []
        }
    },
    computed: {
        language() {
            return this.$i18n.locale
        }
    },
    watch: {
        page() {
            this.getSearch()
        },
        language() {
            this.getSearch()
        },
        searchParams() {
            this.getSearch()
        }
    },
    created() {
        this.page = 1
    },
    methods: {
        async getSearch() {
            let params = {}

            if (this.searchParams) {
                params = {
                    ...this.searchParams,
                    language: this.language,
                    page: this.page
                }
            } else {
                params = {
                    language: this.language,
                    page: this.page
                }
            }

            const res = await this.getItems(params);

            if (res.results && res.results.length > 0){
                this.items = res.results
            } else {
                this.items = res.items
            }
            this.total = res.total_pages           
        }
    }
}
</script>
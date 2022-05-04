<template>
    <v-card max-height>
        <v-row class="mb-5">
            <v-col cols="4">
                <v-img 
                    :src="'https://image.tmdb.org/t/p/w500/' + item.poster_path"
                    gradient="96deg, rgba(255,255,255,0) 0%, rgba(49,49,80,0.1741071428571429) 45%, rgba(31,31,64,0.19931722689075626) 49%, rgba(16,16,32,0.5970763305322129) 62%, rgba(2,2,3,1) 96%, rgba(0,0,0,1) 100%"
                    :max-height="800"
                    contain
                />
            </v-col>
            <v-col cols="8">
                <v-card-title>
                    <h1 class="text-h3" v-if="item.title">{{ item.title }}</h1>
                    <h1 class="text-h3" v-else>{{ item.name }}</h1>
                </v-card-title>

                <v-card-text>
                    <v-row v-if="item.release_date && item.runtime">
                        <v-col> 
                            <h4 class="subtitle-1">{{ new Date(item.release_date).getFullYear() }}</h4>
                        </v-col>
                        <v-col>
                            <span class="subtitle-1">{{ item.runtime }} min</span>
                        </v-col>
                    </v-row>
                    <v-row v-else>
                        <v-col> 
                            <h4 class="subtitle-1">{{ serialTime }}</h4>
                        </v-col>
                        <v-col >
                            <span class="subtitle-1">{{ serialProduction }}</span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <p class="body-1"> {{ item.overview }}</p>
                    </v-row>
                    <v-row>
                        <v-chip
                            v-for="(genre, index) in item.genres" 
                            :key="index" 
                            class="mx-2 overline"
                            nuxt
                            :to="localePath({ name: searchRoute, params: { id: genre.id } })"
                        >
                            {{ genre.name }}
                        </v-chip>
                    </v-row>
                </v-card-text>
            </v-col>
        </v-row>
        <v-row v-if="recommended && recommended.length > 1">
            <v-col class="ml-5 pl-5">
                <p class="text-h5 ml-8">{{ searchRoute.includes('movie') ? $t('recommendedMovies') : $t('recommendedSerials')}}</p>
            </v-col>
            <v-col>
                <v-slide-group
                    multiple
                    show-arrows
                    class="mb-3"
                >
                    <v-slide-item
                        v-for="recItem in recommended" 
                        :key="recItem.id"
                    >
                        <v-card 
                            height="210"
                            width="180"
                            class="ma-3"
                            nuxt
                            :to="localePath({ name: route, params: { id: recItem.id } })"
                        >
                            <v-card-text class="pa-0">
                                <v-row align="center" class="d-flex">
                                    <v-col class="d-flex flex-column justify-center align-center">
                                        <v-img
                                            :src="'https://image.tmdb.org/t/p/w500/' + recItem.poster_path"
                                            alt="Movie image"
                                            width="100"
                                        />
                                        <p class="caption mt-2 text-center">{{ recItem.title }}</p>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    props: {
        route: String, 
        id: String,
        getData: Function,
        getRecommended: Function,
        searchRoute: String
    },
    data() {
        return {
            item: {},
            recommended: []
        }
    },
    computed: {
        language() {
            return this.$i18n.locale;  
        },
        serialProduction() {
            return this.item.in_production ? 'Filming' : 'Finished'
        },
        serialTime() {
            let first = new Date(this.item.first_air_date).getFullYear();
            let last = new Date(this.item.last_air_date).getFullYear();

            return this.item.in_production 
                ? `${ first } - nowadays`
                : first === last 
                    ? `${ first }`
                    : `${ first } - ${ last }`
        }
    },
    watch: {
        language() {
            this.getDataItem(this.id, this.language)
        },
        id: {
            handler() {
                this.getDataItem(this.id, this.language)
            },
            immediate: true           
        }
    },
    methods: {
        async getDataItem(id, language) {
            console.log(id, language)
            this.item = await this.getData(id, language);
            this.getRecommendedItems(id, language)
        },
        async getRecommendedItems(id, language) {
            this.recommended = await this.getRecommended(id, language)
        }
    }
}
</script>
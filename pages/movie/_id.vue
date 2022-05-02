<template>
    <v-card max-height>
        <v-row class="mb-5">
            <v-col cols="5">
                <v-img 
                    :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
                    gradient="96deg, rgba(255,255,255,0) 0%, rgba(49,49,80,0.1741071428571429) 45%, rgba(31,31,64,0.19931722689075626) 49%, rgba(16,16,32,0.5970763305322129) 62%, rgba(2,2,3,1) 96%, rgba(0,0,0,1) 100%"
                    :max-height="800"
                    contain
                />
            </v-col>
            <v-col cols="auto">
                <v-card-title>
                    <h1>{{ movie.title }}</h1>
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col> 
                            <h4>{{ new Date(movie.release_date).getFullYear() }}</h4>
                        </v-col>
                        <v-col>
                            <span>{{ movie.runtime }} min</span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <p class="display"> {{ movie.overview }}</p>
                    </v-row>
                    <v-row>
                        <v-chip
                            v-for="(genre, index) in movie.genres" 
                            :key="index" 
                            class="mx-2"
                            nuxt
                            :to="localePath({ name: 'search-id', params: { id: genre.id } })"
                        >
                            {{ genre.name }}
                        </v-chip>
                    </v-row>
                </v-card-text>
            </v-col>
        </v-row>
         <v-slide-group
            multiple
            show-arrows
            class="mb-3"
        >
            <v-slide-item
                v-for="item in recommended" 
                :key="item.id"
            >
                <v-card 
                    height="210"
                    width="180"
                    class="ma-3"
                    nuxt
                    :to="localePath({ name: 'movie-id', params: { id: item.id } })"
                >
                    <v-card-text class="pa-0">
                        <v-row align="center" class="d-flex">
                            <v-col class="d-flex flex-column justify-center align-center">
                                <v-img
                                    :src="'https://image.tmdb.org/t/p/w500/' + item.poster_path"
                                    alt="Movie image"
                                    width="100"
                                />
                                <p class="caption mt-2 text-center">{{ item.title }}</p>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </v-card>
</template>

<script>
import * as movieApi from '../../backend/movieApi'

export default {
    data() {
        return {
            id: null, 
            movie: {},
            recommended: []
        }
    },
    created() {
        this.id = this.$route.params.id,
        this.getData(this.id, this.language)
    },
    computed: {
        language() {
            return this.$i18n.locale;  
        }
    },
    watch: {
        language() {
            this.getData(this.id, this.language)
        }
    },
    methods: {
        async getData(id, language) {
            this.movie = await movieApi.getMovie(id, language);
            this.getRecommended()
        },
        async getRecommended() {
            this.recommended = await movieApi.getRecommendations(this.id, this.language)
        }
    }
}
</script>
<template>
    <v-card full-width>
        <v-row>
            <v-col>
                <v-img 
                    :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
                    gradient="96deg, rgba(255,255,255,0) 0%, rgba(49,49,80,0.1741071428571429) 45%, rgba(31,31,64,0.19931722689075626) 49%, rgba(16,16,32,0.5970763305322129) 62%, rgba(2,2,3,1) 96%, rgba(0,0,0,1) 100%"
                    :max-height="900"
                    contain
                />
            </v-col>
            <v-col>
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
                        <span v-for="(genre, index) in movie.genres" :key="index" class="mx-2">{{ genre.name }}</span>
                    </v-row>
                </v-card-text>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import * as dataApi from '../../backend/dataApi'

export default {
    data() {
        return {
            id: null, 
            movie: {},
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
            this.movie = await dataApi.getMovie(id, language)
        }
    }
}
</script>
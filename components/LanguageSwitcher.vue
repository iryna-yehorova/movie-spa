<template>
    <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
            <v-btn class="text-capitalize" v-bind="attrs" v-on="on" text>
                <div v-if="$vuetify.breakpoint.mdAndUp">
                    {{ activeLang.name }}
                    <v-icon small right>mdi-menu-down</v-icon>
                </div>
                <div v-else> {{ activeLang.code }} </div>
            </v-btn>
        </template>
        <v-list dense>
            <v-list-item-group active-class="text--white" class="d-flex-column align-center my-0">
                <v-list-item v-for="(lang, index) in $i18n.locales" :key="index + 10" >
                    <nuxt-link :to="switchLocalePath(lang.code)" class="white--text text-decoration-none mx-5">
                        {{ lang.name }}
                    </nuxt-link>
                </v-list-item>
            </v-list-item-group>              
        </v-list>
    </v-menu>
</template>

<script>
export default {
    computed: {
        activeLang() {
            return this.$i18n.locales.find(l => l.code === this.$i18n.locale)
        }
    }
}
</script>
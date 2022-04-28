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
            <v-list-item v-for="(lang, index) in locales" :key="index + 10" @click="activeLang = lang">
                <v-list-item-title>{{ lang.name }}</v-list-item-title>
            </v-list-item>              
        </v-list>
    </v-menu>
</template>

<script>
export default {
    data: () => ({
        activeLang: {},
        locales: [
            { name: 'English', code: 'EN' },
            { name: 'Deutsch', code: 'DE' },
            { name: 'Русский', code: 'RU' },
        ]
    })
    
}
</script>

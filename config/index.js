import en from '../lang/en-US.js'
import fr from '../lang/fr-FR.js'
import ru from '../lang/ru-RU.js'

export const I18N = {
    locales: [
        { code: 'en', iso: 'en-US', name: 'English' },
        { code: 'fr', iso: 'fr-FR', name: 'Français' },
        { code: 'ru', iso: 'ru-RU', name: 'Русский' }
    ],
    defaultLocale: 'en',
    routes: {
        about: {
            fr: '/a-propos',
            en: '/about-us'
        },
        posts: {
            fr: 'artciles'
        },
        'post/_id': {
            fr: '/article/:id?'
        }
    },
    vueI18n: {
        fallbackLocale: 'en',
        messages: { en, fr, ru }
    }
}
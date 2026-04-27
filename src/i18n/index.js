import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        navbar: {
            title: ''
        }
    },
    th: {
        hero: {
            title: ''
        }
    }
}

export const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'en',
    fallbackLocale: 'en',
    messages
})
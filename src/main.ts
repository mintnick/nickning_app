import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

// i18n
import en from './assets/locales/en.json'
import zh from './assets/locales/zh.json'
const messages = {
  en: en,
  zh: zh
}
const i18n = createI18n({
  locale: "en",
  legacy: false,
  messages,
})

createApp(App)
.use(i18n)
.mount('#app')

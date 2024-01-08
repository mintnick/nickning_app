import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'

// vue-i18n
import { createI18n } from 'vue-i18n'
import en from './assets/locales/en.json'
import zh from './assets/locales/zh.json'
const messages = {
  en: en,
  zh: zh
}
const i18n = createI18n({
  locale: $cookies.get('lang'),
  fallbackLocale: 'en',
  legacy: false,
  messages,
})

// vue-router
import { createRouter, createWebHistory } from 'vue-router'
import Home from './App.vue'

const routes = [
  { path: '/', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// vue-cookies
import VueCookies from 'vue-cookies'

createApp(App)
.use(i18n)
.use(router)
.use(VueCookies, { expires: '1y' })
.mount('#app')

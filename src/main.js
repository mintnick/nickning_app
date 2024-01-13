/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

// vue-i18n
import { createI18n } from 'vue-i18n'
import en from './assets/locales/en.json'
import zh from './assets/locales/zh.json'
const messages = {
  en: en,
  zh: zh
}
const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  legacy: false,
  messages,
})

// vue-router
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import ESM from './components/ESM.vue'
import PageNotFound from './components/PageNotFound.vue'
import Donate from './components/Donate.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/esm', name: 'ESM', component: ESM },
  { path: '/donate', name: 'Donate', component: Donate },
  { path: '/:pathMatch(.*)*', component: PageNotFound }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// vue-cookies
import VueCookies from 'vue-cookies';

import './assets/style.css'

app.use(i18n);
app.use(router);
app.use(VueCookies, { expires: '1y' } );
app.mount('#app')

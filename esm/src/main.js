import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'


createApp(App)
.use(i18n)
.use(Quasar, {
  
})
.mount('#app')

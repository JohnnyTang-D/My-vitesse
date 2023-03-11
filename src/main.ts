import { createPinia } from 'pinia'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import App from './App.vue'
import router from '~/router/router'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia).use(router).mount('#app')

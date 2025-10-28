// src/main.js
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Lenis from 'lenis/vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
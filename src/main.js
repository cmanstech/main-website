// src/main.js
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Lenis from '@studio-freight/lenis'

const app = createApp(App)
app.use(router)

app.mixin({
  mounted() {
    if (this.$root !== this) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smoothWheel: true,
      smoothTouch: false,
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  },
})

app.mount('#app')
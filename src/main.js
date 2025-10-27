import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: App },
  ],
})

const App = createApp(App)
App.use(router)

App.mixin({
  mounted() {
    if (this.$root === this) {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,      
      smoothWheel: true,      
      smoothTouch: false,     
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    }
  },
})

const app = createApp(App).mount('#app')
app.use(router)
app.mount('#app')

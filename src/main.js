import { createApp } from 'vue'
import App from './App.vue'
import VueMobileDetection from 'vue-mobile-detection'
import router from './router'
createApp(App).use(VueMobileDetection).use(router).mount('#app')

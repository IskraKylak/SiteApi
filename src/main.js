import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import VueAxios from 'vue-axios'

import './assets/css/slick.css'
import './assets/css/slick-theme.css'
import './assets/css/aos.css'
import './assets/css/screen.css'

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')

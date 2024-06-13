import { createApp } from 'vue'
import router from "@/router/index.js";
import pinia from "@/stores/index.js";


import App from './App.vue'


const app = createApp(App)

import "normalize.css"
import "@/assets/css/index.css"

app.use(router)
app.use(pinia)
app.mount('#app')

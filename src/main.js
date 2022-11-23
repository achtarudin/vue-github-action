import { createApp } from 'vue'

import './style.css'


import App from './App.vue'
import Main from './Main.vue'

const app = createApp(true ? Main :App)

app.mount('#app')

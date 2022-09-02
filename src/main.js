import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCalendar from "v-calendar";
// import "v-calendar/lib/v-calendar.min.css"

// import './assets/css/tailwind.css'
import 'flowbite'
import './index.css'

// createApp(App).use(router).mount('#app')
createApp(App).use(store).use(router).use(VCalendar, {}).mount('#app')

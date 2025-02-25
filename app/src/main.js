import axios from  './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import icons from './icon'
import store from './store/index.js'

library.add({ ...icons });

const app = createApp(App)

app.config.globalProperties.$axios = axios;

app.component('fontAwesome', FontAwesomeIcon).use(router).use(store).mount('#app')

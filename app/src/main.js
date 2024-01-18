import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import icons from './icon'

library.add({ ...icons });

createApp(App).component('fontAwesome', FontAwesomeIcon).use(router).mount('#app')

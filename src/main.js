import { createApp } from 'vue'

import App from './App.vue'
import router from './routes'
import components from './components'

const app = createApp(App)

app.use(router)
app.use(components)

app.mount('#app')

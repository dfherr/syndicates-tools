import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import routes from './routes';
import App from './App.vue';

const app = createApp(App)

app.use(routes)
app.use(ElementPlus)
app.mount('#app')

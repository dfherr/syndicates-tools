import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import routes from './routes';
import '../element-variables.scss'

createApp(App).use(routes).use(ElementPlus).mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import routes from './routes';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App).use(routes).use(ElementPlus).mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';

// importamos el CSS de Bula
require('@/assets/main.scss');

createApp(App).mount('#app');

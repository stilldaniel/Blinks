import { createApp } from 'vue'
import App from './App.vue'




import router from './router/router'; // Adjust the path to your router file

const app = createApp(App);
app.use(router);
app.mount('#app');
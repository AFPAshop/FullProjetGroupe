import {
    createApp
} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue3 from 'bootstrap-vue-3';
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/style.css';
import './css/style.scss';
// Make BootstrapVue available throughout your project

createApp(App).use(store).use(router).use(BootstrapVue3).use(VueChartkick).mount('#app')
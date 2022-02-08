import {
    createApp
} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue3 from 'bootstrap-vue-3';
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/style.css';
import './css/style.scss';
// Make BootstrapVue available throughout your project

const app = createApp(App);

app.use(store).use(router).use(BootstrapVue3).use(VueChartkick).use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBWJt3ToxBWZvGiSyhfxSoltr_Mny09-Fs',
        libraries: "places",
    },
}).mount('#app')
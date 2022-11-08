import { createApp } from 'vue';
import Vue from "vue"
import App from './App.vue';
import router from "./router";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import  {BootstrapVue,IconsPlugin} from 'bootstrap-vue';
import {createPinia} from 'pinia';
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'

const pinia = createPinia();
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
    .use(pinia)
    .use(router)
    .mount('#app')


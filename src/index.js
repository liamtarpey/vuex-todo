import Vue from 'vue';
import store from './vuex/store.js';
import App from './App.vue';

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});

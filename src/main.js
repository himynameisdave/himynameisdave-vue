// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';

const files = require.context('!svg-sprite-loader!./assets/icons', false, /.*\.svg$/);
files.keys().forEach(files);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
});

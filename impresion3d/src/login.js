import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import "./navbarVue.js"

Vue.use(BootstrapVue)
Vue.use(Vuex)

var loginPage = new Vue({
    el:"#LoginPage"
});

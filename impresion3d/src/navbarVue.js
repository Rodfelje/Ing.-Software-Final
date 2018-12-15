import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
Vue.use(Vuex)

var mainNavBar = new Vue({
    el:"#MainNavBar",
    data:{
        logged: true,
        logUserMsg: "LOG IN",
        logUserLink: "login.html",
        logCartLink: "login.html",
        catalogoLink: "catalogo.html",
        crearLink: "subirArchivo.html",
        homeLink: "index.html",
        profileLink: "profile.html"
    }
})

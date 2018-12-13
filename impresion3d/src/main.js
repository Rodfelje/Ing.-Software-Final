import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
Vue.use(Vuex)

var navMainPageVue = new Vue({
    el:"#NavMainPage",
    data:{
        logged: false,
        logUserMsg: "Log In",
        logUserLink: "./client/login.html",
        logCartLink: "./client/login.html"
    }
})

var mainPageVue = new Vue({
    el:"#MainPage",
    data:{
        popularName1: "Batman" 
    }
})

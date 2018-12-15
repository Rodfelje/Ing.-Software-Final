import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import "./navbarVue.js"
import "./login.js"

Vue.use(BootstrapVue)
Vue.use(Vuex)


var mainPageVue = new Vue({
    el:"#MainPage",
    data:{
        popularName1: "Batman"
    }
})

var uploadFilePage = new Vue({
    el:"#UploadFilePage"
})

var checkboxVue =new Vue({
    el: '#checkboxes',
    data: {
        selected: [],
        options1: [
            {text: 'Art', value: 'art'},
            {text: 'Fashion', value: 'fashion'},
            {text: 'Gadgets', value: 'gadgets'},
            {text: 'Household', value: 'household'},
            {text: 'Learning', value: 'learning'},
            {text: 'Models', value: 'models'},
            {text: 'Tools', value: 'tools'},
            {text: 'Toys', value: 'toys'}
        ],
        options2: [
            {text: 'Newest', value: 'newest'},
            {text: 'Popular', value: 'popular'},
            {text: 'Random', value: 'random'},
            {text: 'Collections', value: 'collections'}
        ]
    }
})

var profilePageVue = new Vue({
    el: "#ProfilePage",
    data:{
	currentUser: "admin",
	fullName: "Doddy Dodorio",
	followers: "27",
	following: "1",
	designRating: "5",
	collectionRating: "2",
	marksRating: "4",
	likesRating: "40",
	description: "Soy un perro. Woof!",
	TwitterAccount: "www.twitter.com/DoddyDodorio",
	WebPage: "www.doddydodorio.com.pe",
	tools: [
	    { name: "Photoshop" },
	    { name: "Illustrator" },
	    { name: "Adobe flash" }
	],
	habilities3D: "Soy bueno usando el mouse aunque tengo patas :D",
	groups: [
            { name: "Universidad Canina" },
	    { name: "Do it by yourself - Dogs" },
	    { name: "Seguidores de Cu chulainn" },
	    { name: "Huellas y sonrisas" }
	],
	designs: [
	    {
	        name: "Star Wars 1",
		filename: "Design01.png"
	    },
	    {
	        name: "Hatsune Miku",
		filename: "Design02.png"
	    }

	]
    }
})

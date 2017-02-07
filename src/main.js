// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入 vue-resource，并使用  
import VueResource from 'vue-resource'  
Vue.use(VueResource) 

import Home from './pages/Home'  
import Detail from './pages/Detail' 


// 定义路由配置  
const routes = [  
    {  
        path: '/',  
        component: Home  
    },  
    {  
        path: '/detail/:id',  
        component: Detail  
    }  
]

const router = new VueRouter({
	routes
});

new Vue({
	el:'#app',
	data(){
		return {
			transitionName:'slide'
		}
	},
	router,
	watch:{
		'$route' (to, from){ 
			const toDepth = to.path.substring(0, to.path.length-2).split('/').length
			
			const fromDepth = from.path.substring(0, from.path.length-2).split('/').length
			this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
		}
	}
})

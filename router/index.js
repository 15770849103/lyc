
import Vue from 'vue'

import VueRouter from 'vue-router'

//起码有一个作用是注册VueRouter里面自带的组件
Vue.use(VueRouter)

import Home from '../src/components/home/Home'
import classify from '../src/components/home/classify'
import cart from '../src/components/home/cart'
import mine from '../src/components/home/mine'
let router = new VueRouter({
    routes: [
        {
        	name: 'home',
            path: '/',
            component: Home
        },
        {
        	name: 'classify',
            path: '/classify',
            component: classify
        },
        {
        	name: 'cart',
            path: '/cart',
            component: cart
        },
        {
        	name: 'mine',
            path: '/mine',
            component: mine
        }
    ]
})

export default router
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Homepage'
import AllProduct from '../views/AllProduct'
import DetailProduct from'../views/DetailProduct'
import Register from '../views/Register'
import Cart from '../views/Customer/CartPage'
import Shipment from '../views/Customer/Shipment'
import Payment from '../views/Customer/Payment' 
import Dashboard from '../views/Merchant/Dashboard'
import ProductCreate from '../views/Merchant/CreateProduct'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/products',
      name:"AllProduct",
      component: AllProduct
    },
    {
      path:'/products/detail',
      name: 'DetailProduct',
      component: DetailProduct
    },
    {
      path:'/register',
      name:'Register',
      component: Register
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart
    },
    {
      path:'/shipment',
      name:'Shipment',
      component:Shipment
    },
    {
      path:'/payment',
      name:'Payment',
      component:Payment
    },
    {
      path: '/merchant',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/product/create',
      name: 'ProductCreate',
      component: ProductCreate
    },
  
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

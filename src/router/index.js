import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login/login.vue'
import Home from '../components/Home/Home.vue'
import Affairs from '../components/Affairs/Affairs.vue'
import HomeRight from '../components/HomeRight/HomeRight.vue'
import Verify from '../components/Verify/Verify.vue'
import Coupon from '../components/Coupon/Coupon.vue'
import Activity from '../components/Activity/Activity.vue'
import Group from '../components/Group/Group.vue'
import Commodity from '../components/Commodity/Commodity.vue'
import Draw from '../components/Draw/Draw.vue'
import Enter from '../components/Enter/Enter.vue'
import Store from '../components/Store/Store.vue'
import Open from '../components/Open/Open.vue'
import Consumption from '../components/Consumption/Consumption.vue'
import Make from '../components/Make/Make.vue'
import activitys from '../components/activitys/activitys.vue'
import Stores from '../components/Stores/Stores.vue'
import Buying from '../components/Buying/Buying.vue'
import Dity from '../components/Dity/Dity.vue'
import Added from '../components/Added/Added.vue'
import activityHou from '../components/activityHou/activityHou.vue'
import Door from '../components/Door/Door.vue'
import Customized from '../components/Customized/Customized.vue'
import Upper from '../components/Upper/Upper.vue'
import Finance from '../components/Finance/Finance.vue'
import Pos from '../components/Pos/Pos.vue'
import Bank from '../components/Bank/Bank.vue'
import Fast from '../components/Fast/Fast.vue'
import Fare from '../components/Fare/Fare.vue'
import Booking from '../components/Booking/Booking.vue'
import Take from '../components/Take/Take.vue'
import Fix from '../components/Fix/Fix.vue'
import Sing from '../components/Sing/Sing.vue'
import Cope from '../components/Cope/Cope.vue'
import Reminder from '../components/Reminder/Reminder.vue'
import Run from '../components/Run/Run.vue'
import BeTo from '../components/BeTo/BeTo.vue'
import bianjia from '../components/Added/bianjia.vue'
import Seach from '../components/Added/Seach.vue'
import ttt from '../components/Added/ttt.vue'

import parent from '@/views/parent.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      redirect:'/Home/HomeRight'
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
    ,{
      path:'/Home',
      component:Home,
      children:[
        {
          path:'Affairs',
          name:'Affairs',
          component:Affairs
        },
        {
          path:'HomeRight',
          name:'HomeRight',
          component:HomeRight
        },
        {
          path:'Verify',
          name:'Verify',
          component:Verify
        },
        {
          path:'Coupon',
          name:'Coupon',
          component:Coupon
        },
        {
          path:'Activity',
          name:'Activity',
          component:Activity
        },
        {
          path:'Group',
          name:'Group',
          component:Group
        },
        {
          path:'Commodity',
          name:'Commodity',
          component:Commodity
        },
        {
          path:'Draw',
          name:'Draw',
          component:Draw
        },
        {
          path:'Enter',
          name:'Enter',
          component:Enter
        },
        {
          path:'Store',
          name:'Store',
          component:Store
        },
        {
          path:'Open',
          name:'Open',
          component:Open
        },
        {
          path:'Consumption',
          name:'Consumption',
          component:Consumption
        },
        {
          path:'Make',
          name:'Make',
          component:Make
        },
        {
          path:'activitys',
          name:'activitys',
          component:activitys
        },
        {
          path:'Stores',
          name:'Stores',
          component:Stores
        },
        {
          path:'Buying',
          name:'Buying',
          component:Buying
        },
        {
          path:'Dity',
          name:'Dity',
          component:Dity
        },
        {
          path:'Added',
          name:'Added',
          component:Added
        },
        {
          path:'activityHou',
          name:'activityHou',
          component:activityHou
        },
        {
          path:'Door',
          name:'Door',
          component:Door
        },
        {
          path:'Customized',
          name:'Customized',
          component:Customized
        },
        {
          path:'Upper',
          name:'Upper',
          component:Upper
        },{
          path:'Finance',
          name:'Finance',
          component:Finance
        }
        ,{
          path:'Pos',
          name:'Pos',
          component:Pos
        },{
          path:'Bank',
          name:'Bank',
          component:Bank
        },{
          path:'Fast',
          name:'Fast',
          component:Fast
        },{
          path:'Fare',
          name:'Fare',
          component:Fare
        },{
          path:'Booking',
          name:'Booking',
          component:Booking
        }
        ,{
          path:'Take',
          name:'Take',
          component:Take
        },{
          path:'Fix',
          name:'Fix',
          component:Fix
        },{
          path:'Sing',
          name:'Sing',
          component:Sing
        },{
          path:'Cope',
          name:'Cope',
          component:Cope
        },{
          path:'Reminder',
          name:'Reminder',
          component:Reminder
        },{
          path:'Run',
          name:'Run',
          component:Run
        },{
          path:'BeTo',
          name:'BeTo',
          component:BeTo
        }
        ,{
          path:'bianjia',
          name:'bianjia',
          component:bianjia
        },{
          path:'Seach',
          name:'Seach',
          component:Seach
        },{
          path:'ttt',
          name:'zj',
          component:ttt
        }
      ]
    },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

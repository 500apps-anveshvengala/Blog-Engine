import Vue from 'vue'
import App from './App.vue'
import addBlog from './components/addBlog.vue'
//import Login from './components/Login.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

// Make BootstrapVue available throughout your project

// Optionally install the BootstrapVue icon components plugin

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
 Vue.use(VueRouter);
const routes =[{
  path:"/addBlog",
  name:"addBlog",
  id:10,
   component:addBlog
 },{
  path:"/",
  name:"Login",
  id:10,

 }

];
 const router=new VueRouter({
  routes
 });

// export default router

new Vue({
  router,
  
  render: h => h(App),
}).$mount('#app')
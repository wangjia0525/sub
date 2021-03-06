// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VurResource from "vue-resource";
import App from './App';
import './common/stylus/index.styl';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';


Vue.use(VueRouter);
Vue.use(VurResource);

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const  routes= [
  { path: '/', component: goods },//默认页面
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller },
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const  router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  linkActiveClass:'active'
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app=new Vue({
  router: router,
  components: { App },
  template: '<App/>'
}).$mount('#app');

//new Vue({
//  el: '#app',
//  router: router,
//  components: { App },
//  template: '<App/>'
//})

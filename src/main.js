// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//import '@/assets/style/reset.css';
//import '@/assets/style/base.css';

Vue.config.productionTip = false
console.log(process.env)

router.beforeEach((to,from,next)=>{
	var menuStatus=store.getters.isShowMenus;
	console.log(menuStatus,'menuStatus')
	if(to.meta&&to.meta.showMenu){
		console.log(store)
		store.commit('changeMenuStatus',true)
	}else{
		store.commit('changeMenuStatus',false)
	}
	
	console.log(to,'to')
	console.log(from,'from')
	console.log(menuStatus,'menuStatus');
	next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
store,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moduleA from './moduleA';
import globalMenu from './globalMenu';

var store=new Vuex.Store({
	modules:{
		a:moduleA,
		globalMenu:globalMenu
	},
	state:{
		aa:'lllllllll',
		num:111000,
		price:300000
	}
})

export default store;
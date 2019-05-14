import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moduleA from './moduleA';

var store=new Vuex.Store({
	modules:{
		a:moduleA
	},
	state:{
		aa:'lllllllll',
		num:111000,
		price:300000
	}
})

export default store;
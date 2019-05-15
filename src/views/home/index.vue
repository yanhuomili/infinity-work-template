<template>
  <div class="home">
    <h1>home</h1>
    <input type="text" placeholder="输入你想要的空间" @click="toSearch"/>
    <ul>
    	<li>{{this.$store.state.aa}}</li>
    	<li>{{this.$store.state.price}}</li>
    	<li>{{this.$store.state.num}}</li>
    	
    	<li>{{this.$store.state.a.price}}</li>
    	<li>{{this.$store.state.a.num}}</li>
    	<li>{{price}}</li>
    	<li>{{pp}}</li>
    	<li>list 列表</li>
    </ul>
    <p>的思考方式离开家附近范围分为非我方</p>
    
    <div>{{testObj.a}}</div>
    <div>{{testObj.b}}</div>
    <div>{{testObj.c}}</div>
    
    
    <button @click="send(600)">send</button>
    <button @click="dispatch">dispatch</button>
    <button @click="addF">add</button>
    <button @click="reduce(100)">reduce</button>
    
    
    
  </div>
</template>

<script>
import JSBridge from '@/jsbridge';
import { fetchAccessTokenByOpenToken, getData } from '@/api/common/common';
import { Toast } from 'mint-ui';
import axios from 'axios';
import axiosInstance from '@/common/axios';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions }	from 'vuex';


export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      openToken: '',
      accessToken: '',
      testObj:{
      	a:'aaa',
      	b:'bbb',
      	c:'ccc'
      }
    }
  },
  beforeCreate(){
  },
  created(){
  	/*判断页面是否在app打开*/
  	var b=JSBridge.Bridge.WebViewJavascriptBridge.setup();
  },
  computed:{
  	pp:()=>{
  		return 600
  	},
  	...mapGetters([
  		'price'
  	])
  	
  },
  mounted(){
//		this.todo();
//		this.test();  	
//		this.instance();
//		this.moniVue();
		console.log(process.env.NODE_ENV,'mounted');
		
  },
  methods:{
  	toSearch(){
  		this.$router.push({path:'/search'});
  	},
  	// 从APP获取openToken
    getOpenTokenFromApp() {
      JSBridge.Common.Caller_Common_Base_getOpenToken('', openToken => {
        if (openToken) {
          this.openToken = openToken;
          this.getAccessTokenByOpenToken(openToken, _this.getCouponsData);
        }
      });
    },
    getAccessTokenByOpenToken(openToken, callback) {
      return fetchAccessTokenByOpenToken(openToken).then(response => {
        if (response.data.code === 0) {
          this.accessToken = response.data.data.accessToken;
          this.$nextTick(() => {
            callback && callback();
          });
        }
      });
    },
    todo() {
//  	axios.post('/api/test1', {
//				firstName: 'Fred',
//				lastName: 'Flintstone'
//			})
//			.then(function (response) {
//				console.log(response.data);
//			})
//			.catch(function (error) {
//				console.log(error);
//			});
			
			
			axios.all([axios.post('/api/test1'), axios.post('/lhh/test2'), axios.post('/hua/test3')])
		  .then(axios.spread(function (a, b, c) {
		  	console.log(a)
		  	console.log(b)
		  	console.log(c)
		    // Both requests are now complete
		  }))
    },
    test() {
    	getData({
    		businessId:46
    	}).then(res=>{
				console.log(res);
			}).catch(err=>{
				console.log(err);
			})
    },
    async instance(){
    	let a=await axiosInstance.post('/test1',{aa:'aaaa'})
    	console.log(a,'aaaa');
    },
    addF(){
    	this.add(300);
    },
    ...mapMutations({
    	add:'add',
    	reduce:'reduce'
    }),
    ...mapActions({
    	send:'send'
    }),
    dispatch(){
    	this.$store.dispatch('send',300);
    },
    moniVue(){
    	class Vue{
    		constructor(options){
    			this.options=options||{};
    		}
    		initData(){
    			this.observe(this.options.data,this.callback)
    		}
    		observe(obj,cb){
	    		Object.keys(obj).forEach((key)=>this.defineReactive(obj,key,obj[key],cb))
	    	}
    		defineReactive(obj,key,value,cb){
		    	Object.defineProperty(obj,key,{
		    		enumerable: true,
		        configurable: true,
		        get: ()=>{
		            /*....依赖收集等....*/
		            /*Github:https://github.com/answershuto*/
		           	console.log(value);
		            return value
		        },
		        set:newVal=> {
		            value = newVal;
		            cb(key,newVal);/*订阅者收到消息的回调*/
		        }
		    	})
	    	}
    		callback(key,value){
	    		console.log(key+'属性的值更改为'+value);
	    	}
    	}
    	
    	var data={
    		a:'aa',
				b:'bb',
				c:'cc'
    	}
    	var Vm=new Vue({
    		el:'#app',
    		data:data
    	})
    	
    	Vm.initData();
    	data.a='123456879'
    	data.b=222222
    	
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.home{
		text-align: center;
		h1{
			width: 100%;
			padding: .1rem;
			font-size: .20rem;
			box-sizing: border-box;
		}
		ul{
			width: 100%;
			font-size: .24rem;
			background: #f1f1f1;
		}
		li{
			padding: .1rem;
		}
		p{
			margin-top: 12px;
			font-size: 12px;
			color: #f60;
		}
		button{
			font-size: .24rem;
		}
	}
	
</style>

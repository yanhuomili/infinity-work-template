var moduleA={
	state:{
		aa:'aaaa',
		num:0,
		price:100
	},
	getters:{
		price:state=>{
			return state.price*3;
		}
	},
	mutations:{
		/*里面只能放同步函数
		 * 提交方式：
		 * 1.store.commit({type:'add',value:100})
		 * 2.store.commit('add',{value:100})
		 */
		add(state,value){
			state.num+=value;
		},
		reduce(state,value){
			if(typeof value!='undefined'){
				state.num-=value;
				console.log(2222);
			}else{
				state.num--;
			}
			
		}
	},
	actions:{
		/*里面可以是同步函数或者异步函数
		 * 提交的是mutations
		 * 提交方式：
		 * 1. store.dispatch('send',{value:200});
		 * 2. store.dispatch({type:'send',value:200});
		 */
		send(context,value){
			setTimeout(()=>{
				context.commit('add',value);
			},800)
		}
	}
}
export default moduleA;
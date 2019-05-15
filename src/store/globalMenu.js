var globalMenu={
	state:{
		isShowMenus:true,
	},
	getters:{
		isShowMenus:state=>{
			return state.isShowMenus;
		}
	},
	mutations:{
		/*里面只能放同步函数
		 * 提交方式：
		 * 1.store.commit({type:'add',100})
		 * 2.store.commit('add',100)
		 */
		changeMenuStatus(state,value=false){
			state.isShowMenus=value;
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
export default globalMenu;
<template>
  <div id="app">
  	<div class="have-bottom-tabs" v-if="isShowMenus">
  		<div class="app-content">
		    <router-view/>
  		</div>
  		<div class="global-menu-fill">
  			只是为了占位
  		</div>
	    <div class="global-menu-wrap">
	    	<ul class="lrs global-menu">
	    		<li>首页</li>
	    		<li>发现</li>
	    		<li>我的</li>
	    	</ul>
	    </div>
  	</div>
  	<div class="no-bottom-tabs" v-else>
    	<router-view/>
  	</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
console.log(mapGetters,'3333333')
export default {
  name: 'App',
  computed:{
	...mapGetters(['isShowMenus','price'])
  }
}
</script>

<style lang="scss">
@import './assets/style/reset.css';
@import './assets/style/base.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
	font-size: .28rem;
}
/*使用display：flex属性，为了解决上下布局时，产生上下盒子相加的高度超过总高度而产生滚动条的问题*/
.have-bottom-tabs{
	width: 100%;
	height: 100VH;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.global-menu-fill{
		visibility: hidden;
		width: 100%;
		height: 1.2rem !important;
	}
	.global-menu-wrap{
		/*visibility: hidden;*/
		width: 100%;
		height: 1.2rem;
		position: fixed;
		bottom: 0;
		left: 0;
		overflow: hidden;
		.global-menu{
			height: 100%;
			box-sizing: border-box;
			padding: .3rem;
			background: #f1f1f1;
			li{
				padding: .1rem .2rem;
				background: #999999;
				color: #f9f9f9;
			}
		}
	}
	.app-content{
		flex: 1;
		overflow-y: auto;
	}
}

</style>

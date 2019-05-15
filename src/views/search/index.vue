<template>
	<div id="search">
		<div class="search-head">
			<div class="search-input lrc">
				<select name="">
					<option value="按时">按时</option>
					<option value="按天">按天</option>
				</select>
				<input v-model="text" type="text" placeholder="请输入你想要的空间"/>
				<span @click="clearText">X</span>
			</div>
		</div>
		<div class="search-content">
			<div class="search-history">
				<div>搜索历史记录：</div>
				<ul class="lrs">
					<li v-for="item in list" @click="fillToInput(item)">{{item}}</li>
				</ul>
			</div>
			<div class="search-hot">
				<div>热门：</div>
				<ul class="lrs">
					<li v-for="item in list" @click="fillToInput(item)">{{item}}</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>
<script>
export default{
	name:'search',
	data(){
		return{
			text:'',
			list:['高德置地春广场','高德置地夏广场','高德置地秋广场','高德置地冬广场','高德置地中广场']
		}
	},
	created(){
		
	},
	mounted(){
		
	},
	methods:{
		fillToInput(val){
			this.text=val;
		},
		clearText(){
			this.text='';
		}
	}
}
</script>
<style scoped lang="scss">
#search{
	.search-input{
		padding: .3rem .2rem;
		select{
			padding: .15rem;
			font-size: .28rem;
			option{
				font-size: .14rem;
				text-align: center;
				text-indent: -.15rem;
			}
		}
		input{
			padding: .1rem;
		}
		span{
			margin-left: .3rem;
		}
	}
	.search-content >div{
		>div{
			padding-bottom: .2rem;
		}
		padding: .3rem;
		ul{
			li{
				border: 1px solid #666;
				border-radius: .1rem;
				padding: .1rem .2rem;
				margin-bottom: .2rem;
			}
		}
	}
}
	
</style>
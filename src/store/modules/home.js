import { reqHome } from '../../api'
import { RECEIVE_HOME } from '../mutation-type'
const state =  {
  homeData: {}
}
const mutations =  {
	[RECEIVE_HOME] (state, homeData) {
		state.homeData = homeData
	}
}
const actions =  {
	async getHome ({commit}) {
		let response = await reqHome()
		let result = response.data
		// console.log(result)
		if(result.code === 0){
			let homeData = result.data
			commit(RECEIVE_HOME, homeData)
		}
	}
}
const getters =  {
	totalArr (state) { // 定义一个数组，将私人定制的数据里面的数组以三个为一组（因为每一个轮播的一屏上面有三个商品）进行切分 
		let arr = []
		if(state.homeData){
			if(state.homeData.personalShop){
				for(var i=0;i<state.homeData.personalShop.length;i+=3){
					arr.push(state.homeData.personalShop.slice(i,i+3));
				}
				return arr
			}
		}
	},
	//  也可以定义在计算属性之中 以限时购为例
	flashSaleModule (state) {
		if(state.homeData){
			return state.homeData.flashSaleModule
		}
	},

	// 新品首发
	newItemList (state) {
		if(state.homeData){
			if(state.homeData.newItemList){
				return state.homeData.newItemList.slice(0,6)
			}
		}
	},
	//人气推荐popularItemList
	popularItemList (state) {
		if(state.homeData){
			return state.homeData.popularItemList
		}
	},
	//定义除了第一个商品剩下的三个商品数组，用于遍历
	popularImg () {
		if(state.homeData){
			if(state.homeData.popularItemList){
				return state.homeData.popularItemList.splice(1,4)
			}
		}
	},
	// 专题精选
	topicList (state) {
		if(state.homeData){
			return state.homeData.topicList
		}
	},
	//众筹zhongChouList
	zhongChouList (state) {
		if(state.homeData){
			return state.homeData.zhongChouList
		}
	},
	//类目热销榜categoryHotSellModule
	categoryList () {
		if(state.homeData){
			if(state.homeData.categoryHotSellModule){
				return state.homeData.categoryHotSellModule.categoryList.splice(0,8)
			}
		}
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
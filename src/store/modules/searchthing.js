import { reqSearchTab,reqRecomment,reqRecManual,reqShowOrder, reqComment } from '../../api'
import { RECEIVE_SEATCHTAB, RECEIVE_RECOMMENT ,RECEIVE_RECMANUAL, RECEIVE_SHOWORDER, RECEIVE_SHOWORDERBOTTOM} from '../mutation-type'
const state = {
	searchTab : [],//头部tab导航栏
	recommment :{},//
	recManual : [],//推荐数据
	showOrder : {},//晒单数据 拉面
	showOrderInfo : {}////晒单数据 详情
}
const mutations = {
	[RECEIVE_SEATCHTAB] (state, searchTab) {
		state.searchTab = searchTab
	},
	[RECEIVE_RECOMMENT] (state,recommment) {
		if(!state.recommment.hasMove){
			state.recommment = recommment
		}else if (state.recommment.hasMove){
			state.recommment.push(...recommment)
		}	
	},
	[RECEIVE_RECMANUAL] (state,recManual) {
		state.recManual = recManual
	},
	[RECEIVE_SHOWORDER] (state, showOrder) {
		state.showOrder = showOrder
	},
	[RECEIVE_SHOWORDERBOTTOM] (state, showOrderInfo) {
		state.showOrderInfo = showOrderInfo
	}
}
const actions = {
	async getSearchTab ({commit}){
		const response = await reqSearchTab()
		let result = response.data
		console.log(result)
		if(result.code === '200'){
			let searchTab = result.data
			commit( RECEIVE_SEATCHTAB, searchTab )
		}
	},
	//获取更多数据
	async getRecomment ({ commit },{page,size}) {
		const response = await reqRecomment(page, size)
		if(response.data.code === '200'){
			let recommment = response.data.data
			commit(RECEIVE_RECOMMENT,recommment)
		}
	},
	//获取第一次数据
	async getRecManual ({ commit }) {
		const response = await reqRecManual()
		if(response.data.code === '200'){
			let recManual = response.data.data
			commit(RECEIVE_RECMANUAL,recManual)
		}
	},
	//晒单数据reqShowOrder
	async getShowOrder({ commit },id=102) {
		const response = await reqShowOrder(id)
		console.log(response.data)
		if(response.data.code === '200'){
			let showOrder = response.data.data
			commit(RECEIVE_SHOWORDER,showOrder)
		}
	},
	//晒单数据reqComment
	async getComment({ commit },{page,size,type}) {
		const response = await reqComment(page,size,type)
		console.log(response.data)
		if(response.data.code === '200'){
			let showOrderInfo = response.data.data
			commit(RECEIVE_SHOWORDERBOTTOM,showOrderInfo)
		}
	},
}
const getters = {
    
}
export default {
    state,
    mutations,
    actions,
    getters
}
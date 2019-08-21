import { reqSearchTab,reqRecomment,reqRecManual } from '../../api'
import { RECEIVE_SEATCHTAB, RECEIVE_RECOMMENT ,RECEIVE_RECMANUAL} from '../mutation-type'
const state = {
	searchTab : [],//头部tab导航栏
	recommment :{},//
	recManual : []//推荐数据
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
	}
}
const getters = {
    
}
export default {
    state,
    mutations,
    actions,
    getters
}
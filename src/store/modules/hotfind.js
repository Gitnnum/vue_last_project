import { reqHotFind, reqKeyWordInit } from '../../api'
import { RECEIVE_HOTWORDS, RECEIVE_HOTINIT } from '../mutation-type'
const state = {
	hotWords : [],//搜索结果
	hotInit : {}//关键字初始化数据
}
const mutations = {
	[RECEIVE_HOTWORDS] (state, hotWords) {
		state.hotWords = hotWords
	},
	[RECEIVE_HOTINIT] (state,hotInit) {
		state.hotInit = hotInit
	}
}
const actions = {
	async getHotWords ({ commit },keywordPrefix) {
		const response = await reqHotFind(keywordPrefix)
		let result = response.data
		if(result.code === '200'){
			let hotWords = result.data
			commit( RECEIVE_HOTWORDS, hotWords )
		}	
	},
	async getHotInit ({commit}){
		const response = await reqKeyWordInit()
		let result = response.data
		console.log(result)
		if(result.code === '200'){
			let hotInit = result.data.defaultKeywords
			commit( RECEIVE_HOTINIT, hotInit )
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
import { reqCategoryList } from '../../api'
import { RECEIVE_CATEGORY } from '../mutation-type'
const state = {
  categoryArr : []
}
const mutations = {
	[RECEIVE_CATEGORY] (state, categoryArr) {
			state.categoryArr = categoryArr
	}
}
const actions = {
	async getCategory ({ commit }) {
		const response = await reqCategoryList()
		let result = response.data
		console.log(result)
		if(result.code === 0){
			let categoryArr = result.data
			commit( RECEIVE_CATEGORY, categoryArr )
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
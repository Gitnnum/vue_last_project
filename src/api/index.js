import ajax from './ajax'
const BASE = '/api'
//获取首页数据（mock）
export const reqHome = ()=> ajax('/mock/home') // 拦截数据

//获取分类数据（mock）
export const reqCategory = ()=> ajax('/mock/category') // 拦截数据 本项目我并没有使用该接口

//获取分类列表数据（mock）reqCategoryList
export const reqCategoryList = () => ajax('/mock/categorylist') // 拦截数据

//关键字搜索接口
//5)	示例url: http://m.you.163.com/xhr/search/searchAutoComplete.json?keywordPrefix=a
//2)	url: http://m.you.163.com/xhr/search/searchAutoComplete.json
export const reqHotFind = (keywordPrefix) => ajax.get(BASE+'/xhr/search/searchAutoComplete.json',{
    params:{keywordPrefix}
})

//关键字初始化  https://m.you.163.com/xhr/search/init.json
export const reqKeyWordInit = () => ajax.post(BASE+'/xhr/search/init.json')

// 识物页面的tab导航栏 https://m.you.163.com/topic/v1/find/getTabs.json
export const reqSearchTab = () => ajax(BASE+'/topic/v1/find/getTabs.json')

//推荐数据 https://m.you.163.com/topic/v1/find/recManual.json
export const reqRecManual = () => ajax(BASE+'/topic/v1/find/recManual.json')

//推荐 数据 url: http://m.you.163.com/topic/v1/find/recAuto.json?page=1&size=5
export const reqRecomment = (page,size) => ajax.get(BASE+'/topic/v1/find/recAuto.json',{
    params:{
        page,
        size
    }
})
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

//晒单数据头部  https://m.you.163.com/topic/v1/look/getCollection.json?id=102
export const reqShowOrder = (id) => ajax({
    url:BASE+'/topic/v1/look/getCollection.json',
    params:{
        id
    }
})
//晒单评论数据  getList.json  http://m.you.163.com/topic/v1/look/getList.json?id=9&size=2&type=1|2|3
//                           http://localhost:8080/api/topic/v1/find/getList.json?page=1&size=20&type=2
export const reqComment = (page,size,type) => ajax.get(BASE+'/topic/v1/look/getList.json',{
    params:{
        page,
        size,
        type
    }
})
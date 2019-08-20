import ajax from './ajax'
const BASE = '/api'
//获取首页数据（mock）
export const reqHome = ()=> ajax('/mock/home') // 拦截数据

//获取分类数据（mock）
export const reqCategory = ()=> ajax('/mock/category') // 拦截数据 本项目我并没有使用该接口

//获取分类列表数据（mock）reqCategoryList
export const reqCategoryList = () => ajax('/mock/categorylist') // 拦截数据
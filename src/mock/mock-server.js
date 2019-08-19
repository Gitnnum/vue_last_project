import Mock from 'mockjs'
import categoryData from './category.json'
import categoryListData from './categoryList.json'
import homeData from './homeData.json'
//定义返回的数据结构{  code:0 , data:data }
Mock.mock('/mock/home', {code:0, data:homeData} )
Mock.mock('/mock/category', {code:0, data:categoryData} )
Mock.mock('/mock/categorylist', {code:0, data:categoryListData} )
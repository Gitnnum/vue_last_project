import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Personal from '../pages/Personal/Personal.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Search from '../pages/Search/Search.vue'
import Hotfind from '../pages/Hotfind/Hotfind.vue'
import UserCenter from '../pages/UserCenter/UserCenter.vue'
import CategoryItem from '../pages/Category/CategoryItem/CategoryItem.vue'
import '../store'
import store from '../store';
export default [
    {
        path:'/home',
        component: Home,
        meta:{
            showFooter:true
        }
    },
    {
			path:'/category',
			component: Category,
			children:[
				{
					path:'/category/detial/:id',
					component: CategoryItem,
					meta:{
						showFooter:true
					}
				}
				// {
				// 	path:'/category',
				// 	// redirect:'/category/detial/'+(store.categoryArr ? store.categoryArr[0].id : '')
				// 	redirect:'/category/detial/1005000'
				// },
			],
			meta:{
					showFooter:true
			}
		},
    {
        path:'/personal',
        component: Personal
    },
    {
        path:'/hotfind',
        component: Hotfind
    },
    {
        path:'/shopCart',
        component: ShopCart,
        meta:{
            showFooter:true
        }
    },
    {
        path:'/search',
        component: Search,
        meta:{
            showFooter:true
        }
    },
    {
        path:'/usercenter',
        component: UserCenter,
        meta:{
            showFooter:true
        }
    },
    {
        path:'/',
        redirect:'/home'
    }
]
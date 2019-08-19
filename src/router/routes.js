import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Personal from '../pages/Personal/Personal.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Search from '../pages/Search/Search.vue'
import Hotfind from '../pages/Hotfind/Hotfind.vue'
import UserCenter from '../pages/UserCenter/UserCenter.vue'
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
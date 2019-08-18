import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Personal from '../pages/Personal/Personal.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Search from '../pages/Search/Search.vue'
export default [
    {
        path:'/home',
        component: Home
    },
    {
        path:'/category',
        component: Category
    },
    {
        path:'/personal',
        component: Personal
    },
    {
        path:'/shopCart',
        component: ShopCart
    },
    {
        path:'/search',
        component: Search
    },
    {
        path:'/',
        redirect:'/home'
    }
]
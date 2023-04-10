import { useRoutes, Navigate } from 'react-router-dom'
import Home from '@/Pages/Home'
import Sort from '@/Pages/Sort'
import ShopCar from '@/Pages/ShopCar'
import UserCenter from '@/Pages/UserCenter'
import Details from '@/Pages/Details/Details'
import Index from '@/Pages/index'

const Router = () => {
    let routes = [
        {
            path: '/',
            element: (<Navigate to='/home'></Navigate>),
        },
        {
            path: '/',
            element: <Index />,
            children: [
                {
                    path: '/home',
                    element: (<Home />)
                },
                {
                    path: '/sort',
                    element: (<Sort />)
                },
                {
                    path: '/shopcar',
                    element: (<ShopCar />)
                },
                {
                    path: '/usercenter',
                    element: (<UserCenter />)
                },

            ]
        },
        {
            path: '/details/:id',
            element: (<Details />)
        }


    ]
    return useRoutes(routes)


}




export default Router
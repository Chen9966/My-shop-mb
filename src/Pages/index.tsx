import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const index: React.FC = () => {
    return (
        <div>
            <div className='home'>
                <ul>
                    <li>
                        <NavLink to='/home'>首页</NavLink>
                    </li>
                    <li>
                        <NavLink to='/sort'>分类</NavLink>
                    </li>
                    <li>
                        <NavLink to='/shopcar'>购物车</NavLink>
                    </li>
                    <li>
                        <NavLink to='/usercenter'>我的</NavLink>
                    </li>
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default index
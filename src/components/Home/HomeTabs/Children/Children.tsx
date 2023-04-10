import React, { useEffect, useState } from 'react'
import { getProduct } from '@/api/home/http'
import style from '../HomeTabs.module.scss'
import { EllipsisOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Children: React.FC = () => {
    let [children, setChildren] = useState([])
    useEffect(() => {
        getProduct({ parent_name: '儿童专区' }).then((res) => {
            setChildren(res.data.res)
        })
    }, [])
    const navigate = useNavigate()
    const goDetails = (id: any): any => {
        console.log(id);
        navigate(`/details/${id}`, {state:{type:'儿童专区'}})
    }
    return (
        <div className={style['tabs-content']}>
            <div className={style['tabs-pane']}>
                <ul className={style['list']}>
                    <div className={style['tabs-list']}>
                        {
                            children.map((item: any, index: any) => {
                                return (
                                    <li key={index} onClick={e => goDetails(item.id)}>
                                        <img src={item.img} alt="" />
                                        <h3>{item.title}</h3>
                                        <p>
                                            <b>
                                                <span>￥{item.price}</span>
                                                <span>￥{item.special_price}</span>

                                            </b>
                                            <EllipsisOutlined style={{ fontSize: '24px' }} />
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Children
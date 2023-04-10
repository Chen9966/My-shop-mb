import React, { useEffect, useState } from 'react'
import { getProduct } from '@/api/home/http'
import style from '../HomeTabs.module.scss'
import { EllipsisOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Accessories: React.FC = () => {
    let [accessories, setAccessories] = useState([])
    useEffect(() => {
        getProduct({ parent_name: '配件' }).then((res) => {
            setAccessories(res.data.res)
        })
    }, [])
    const navigate = useNavigate()
    const goDetails = (id: any): any => {
        console.log(id);
        navigate(`/details/${id}`, {state:{type:'配件'}})
        // navigate(`/details/${id}?type=配件`)
    }
    return (
        <div className={style['tabs-content']}>
            <div className={style['tabs-pane']}>
                <ul className={style['list']}>
                    <div className={style['tabs-list']}>
                        {
                            accessories.map((item: any, index: any) => {
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

export default Accessories
import React, { useEffect, useState } from 'react'
import { getProduct } from '@/api/home/http'
import style from '../HomeTabs.module.scss'
import { EllipsisOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Footwear: React.FC = () => {
    let [footwearList, setFootwearList] = useState([])
    useEffect(() => {
        getProduct({ parent_name: '鞋类' }).then((res) => {
            setFootwearList(res.data.res)
        })
    }, [])
    const navigate = useNavigate()
    const goDetails = (id: any): any => {
        console.log(id);
        // navigate(`/details/${id}?type=鞋类`)
        navigate(`/details/${id}`, {state:{type:'鞋类'}})

    }
    return (
        <div className={style['tabs-content']}>
            <div className={style['tabs-pane']}>
                <ul className={style['list']}>
                    <div className={style['tabs-list']}>
                        {
                            footwearList.map((item: any, index: any) => {
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

export default Footwear
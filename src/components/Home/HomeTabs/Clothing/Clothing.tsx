import React, { useEffect, useState } from 'react'
import { getProduct } from '@/api/home/http'
import style from '../HomeTabs.module.scss'
import { EllipsisOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
// interface parentName {
//     sub_title: String,
//     brand_id: any,
//     spg_id: any,
//     category_id: any,
//     price: Number,
//     special_price: Number
// }
const Clothing: React.FC = () => {
    let [clothing, setClothing] = useState([])
    useEffect(() => {
        getProduct({ parent_name: '服饰' }).then(res => {
            setClothing(res.data.res)
            console.log(clothing);
        })
    }, [])
    const navigate = useNavigate()
    const goDetails = (id: any): any => {
        console.log(id);
        // navigate(`/details/${id}?type=服饰`)
        navigate(`/details/${id}`, {state:{type:'服饰'}})

    }
    return (
        <div className={style['tabs-content']}>
            <div className={style['tabs-pane']}>
                <ul className={style['list']}>
                    <div className={style['tabs-list']}>
                        {
                            clothing.map((item: any, index: any) => {
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

export default Clothing
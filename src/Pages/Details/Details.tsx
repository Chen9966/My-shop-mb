import React, { useEffect, useState } from 'react'
import { getDatilsSpu, getDatilsSku } from '@/api/Details/http'
import { useParams} from 'react-router-dom'
import style from './Details.module.scss'
import DetailsSwiper from '@/components/Details/DetailsSwiper'
import DetailsService from '@/components/Details/DetailsService'
import DetailsRanking from '@/components/Details/DetailsRanking'
import {
    LeftOutlined,
    CustomerServiceOutlined,
    ShareAltOutlined,
    StarOutlined,
    CrownOutlined,
    SearchOutlined,
    LikeOutlined
} from '@ant-design/icons';

const Details: React.FC = () => {
    const params = useParams()
    let id = params.id
    console.log(id);
    
    // 定义响应式数据 res为返回数据的img图片 传递给子组件使用
    let [res, setRes]: any[] = useState([])
    // data为返回的数据
    let [data, setData] = useState([])
    // price为价格数据 传递给子组件使用
    let [price, setPirce] = useState(1)
    useEffect(() => {
        getDatilsSpu({ id: id, }).then((res: any) => {
            console.log(res);
        })
        const req = async () => {
            let { data: data } = await getDatilsSku({ spu_id: id })
            res = JSON.parse(data.data[0].imgs.replace(/\n/g, "\\n").replace(/\r/g, "\\r"))
            setRes(res)
            setData(data.data)
            setPirce(data.data[0].price)
        }
        req()

    }, [])
    const contentStyle: React.CSSProperties = {
        fontSize: '28px',
        color: ' #2f3640',
        marginRight: '4px',
        position: 'relative',
        display: 'inline - block',
        top:25
    };
    const share: React.CSSProperties = {
        fontSize: '28px',
        color: ' #2f3640',
        position: 'absolute',
        display: 'inline - block',
        left: 260,
        top: 10
    }
    const iconsStyle: React.CSSProperties = {
        fontSize: '30px',
        color: ' #2f3640',
        position: 'absolute',
        display: 'inline - block',
        left: 300,
        top: 10
    }
    const starStyle: React.CSSProperties = {
        fontSize: '30px',
        color: ' #2f3640',
        position: 'absolute',
        display: 'inline - block',
        left: 340,
        top: 10
    }
    const expressStyle: React.CSSProperties = {
        marginTop: '2px',
        fontSize: '18px'
    }
    const goBack = () => {
       history.back()
       console.log(123)
    }
    const handler = () => {
        console.log(1)
    }
    return (
        <div className={style['Details']}>
            <div className={style['NavBar']}>
                <div className={style['NavBar-hairline']}>
                    <div className={style['NavBar-content']}>
                        <div className={style['NavBar-left']}>
                            <LeftOutlined style={contentStyle} onClick={e => goBack()} />
                            <div className={style['NavBar-title']}></div>
                        </div>
                        <div className={style['NavBar-right']}>
                            <CustomerServiceOutlined style={share} onClick={e => handler()} />
                            <ShareAltOutlined style={iconsStyle} />
                            <StarOutlined style={starStyle} />
                        </div>
                    </div>
                </div>
            </div>
            <DetailsSwiper res={res}></DetailsSwiper>
            <div className={style['title']}>
                {
                    data.map((item: any) => {
                        return (
                            <div key={item.id}>
                                <p >{item.title}</p>
                                <p>{item.price}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className={style['banner']}>
                <ul>
                    <li>
                        <CrownOutlined style={expressStyle} />
                        <p>鉴别后发货</p>
                    </li>
                    <li>
                        <SearchOutlined style={expressStyle} />
                        <p>逐件查验</p>
                    </li>
                    <li>
                        <LikeOutlined style={expressStyle} />
                        <p>正品保障</p>
                    </li>
                </ul>
            </div>
            <div>
                <DetailsService price={price} ></DetailsService>
                <DetailsRanking></DetailsRanking>
            </div>
        </div>
    )
}

export default Details
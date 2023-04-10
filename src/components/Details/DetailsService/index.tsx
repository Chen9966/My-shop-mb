import React, { useState, useEffect } from 'react'
import style from './index.module.scss'
import { RightOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { Drawer } from 'antd';

const iconStyle: React.CSSProperties = {
    margin: '4px',
    fontSize: '18px'
}
interface props {
    price: number
}
const DetailsService: React.FC<props> = (props: props) => {
    let [open, setOpen] = useState(false)
    // let [price, setPirce] = useState([])
    console.log(props);
    // console.log(props, '??????????');

    //  price = data[0].price
    // setPirce(price)
    // console.log(price);
    let [class1, setclass1] = useState(1)
    const hand = (tab: number) => {
        setclass1(tab)
    }
    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false);
        console.log(11);
    };

    let [openSevice, setOpenService] = useState(false)
    const showDrawerService = () => {
        setOpenService(true)
        console.log(openSevice)
    }
    const onCloseService = () => {
        setOpenService(false)
    }

    let iconsStyle: React.CSSProperties = {
        fontSize: '18px',
        color: '#fff',
        borderRadius: '50%',
        background: '#2f3640',
        marginRight: '10px'
    }
    return (
        <div>
            <div className={style['Installment']}>
                <div className={style['cell']} onClick={e => showDrawer()} >
                    <div className={style['cell-title']}>
                        <span>分期</span>
                    </div>
                    <div className={style['cell-value']}>
                        <span>最低月付{(Math.round(props.price / 12))}元</span>
                    </div>
                    <RightOutlined style={iconStyle} />
                </div>
                <Drawer placement="bottom" onClose={e => onClose()} closable open={open}>
                    <div className={style['drawer_mask']}>
                        <ul>
                            <li className={class1 === 1 ? style.active : ''} onClick={e => hand(1)} >
                                <p>3期分期</p>
                                <span>每期仅需¥{(Math.round(props.price / 3))}元</span>
                            </li >
                            <li className={class1 === 2 ? style.active : ''} onClick={e => hand(2)}>
                                <p>6期分期</p>
                                <span>每期仅需¥{(Math.round(props.price / 6))}元</span>
                            </li>
                            <li className={class1 === 3 ? style.active : ''} onClick={e => hand(3)}>

                                <p>12期分期</p>
                                <span>每期仅需¥{(Math.round(props.price / 12))}元</span>
                            </li>
                        </ul>
                        <button className={style['btn']}>确认分期</button>
                    </div>
                </Drawer>
            </div>
            <div className={style['Params']}>
                <div className={style['cell']} onClick={e => showDrawerService()} >
                    <div className={style['cell-title']}>
                        <span>服务</span>
                    </div>
                    <div className={style['cell-value']}>
                        <span>超时赔付 假一赔三</span>
                    </div>
                    <RightOutlined style={iconStyle} />
                </div>
                <Drawer height='560px' placement="bottom" onClose={e => onCloseService()} closable open={openSevice}>
                    <div className={style['drawerService_mask']}>
                        <ul>
                            <li>
                                <p>
                                    <CheckCircleOutlined style={iconsStyle} />
                                    超时赔付
                                </p>
                                <span>若卖家因未能在规定时间内发货导致交易被关闭,需索赔一定金额给买家。平台还会额外补贴给买家价值170元的组合优惠券</span>
                            </li>
                            <li>
                                <p>
                                    <CheckCircleOutlined style={iconsStyle} />
                                    假一赔三
                                </p>
                                <span>在罕见情况下,若买家买到假货,SKR承诺”先行赔付,假一赔三“,经严格查验和鉴别,确定为假货的商品将被平台召回并绿色销毁</span>
                            </li>
                            <li>
                                <p>
                                    <CheckCircleOutlined style={iconsStyle} />
                                    防伪包装
                                </p>
                                <span>每件鉴别通过的商品将配有官方出具的鉴别证书和防伪扣,包装盒以及品牌胶带组成的”防伪四件套“,鉴别证书唯一的数字ID为鉴别查验通过的商品建立身份识别体系,方便用户验证商品信息</span>
                            </li>
                        </ul>
                    </div>
                </Drawer>
            </div>
            <div className={style['Freight']}>
            <div className={style['cell']}>
                    <div className={style['cell-title']}>
                        <span>运费</span>
                    </div>
                    <div className={style['cell-value']}>
                        <span>回归好礼-包邮</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsService
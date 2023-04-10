import React, { useEffect, useState } from 'react';
import homeStyle from './home.module.scss';
import { SearchOutlined } from '@ant-design/icons';
import { getSwiper } from '@/api/home/http'
import { Carousel } from 'antd';


const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    display: 'inline-block'
};
const HomeBar: React.FC = () => {   
    let [swiperList, setSwiperList]: any[] = useState([])
    useEffect(() => {
        getSwiper().then(res => {
            setSwiperList(res.data.res)
            console.log(swiperList)
        })
    }, [])

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
    return (
        <div className={homeStyle['home-top']}>
            <div className={homeStyle['home-bar']}>
                <div className={homeStyle['content']}>
                    <div className={homeStyle['bar-left']}>
                        <div className={homeStyle['li']}>
                            <div className={homeStyle['home_log']}>
                                <div className={homeStyle['front_img']}></div>
                            </div>
                        </div>
                    </div>
                    <div className={homeStyle['bar-right']}>
                        <SearchOutlined />
                    </div>
                </div>
            </div>
            <div className={homeStyle['my-swiper']}>
                <Carousel afterChange={onChange} >
                    {
                         swiperList.map((item: any) => {
                            return (
                                <div key={item.id}>
                                    <img style={contentStyle} src={item.swiperImg} alt="" />
                                </div>
                            )
                        })
                    }
                </Carousel>



            </div>
        </div>
    )
}
export default HomeBar
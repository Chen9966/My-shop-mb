import React, { useState } from 'react'
import { Carousel, Image } from 'antd';

interface swiper{
   res:[]
}

const DetailsSwiper: React.FC<swiper> = (props:swiper) => {
  return (
    <div>
      <Carousel>
        {
          props.res.map((item: any) => {
            return (
              <Image key={item} src={item.normal}  alt=""/>
            )
          })
        }
      </Carousel>
      
    </div>
  )
}

export default DetailsSwiper
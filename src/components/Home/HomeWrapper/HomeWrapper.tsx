import React from 'react'
import wrapper from './wrapper.module.scss'
import news from "@/assets/imgs/new.png"
import close from "@/assets/imgs/close.png"
import pin from "@/assets/imgs/pin.png"
import kai from "@/assets/imgs/kai.png"

const HomeWrapper: React.FC = () => {
  return (
    <div className={wrapper['icons-wrapper']}>
      <ul>
        <li>
          <img src={news} alt="" />
          <span>新品到着</span>
        </li>
        <li>
          <img src={close} alt="" />
          <span>人气搭配</span>
        </li>
        <li>
          <img src={pin} alt="" />
          <span>折扣专区</span>

        </li>
        <li>
          <img src={kai} alt="" />
          <span>有货拼团</span>
        </li>
      </ul>
    </div>
  )
}

export default HomeWrapper
import React, { useEffect, useState } from 'react'
import { getParentNameList } from '@/api/home/http'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Clothing from './Clothing/Clothing'
import Footwear from './Footwear/Footwear';
import Accessories from './Accessories/Accessories';
import Children from './Children/Children';
// import './HomeTabs.module.scss'

// const { TabPane } = Tabs
const HomeTabs: React.FC = () => {
    let [tabsList, setTabsList]: any[] = useState([])
    useEffect(() => {
        getParentNameList().then(res => {
            console.log(res)
            console.log(res.data.data)
            setTabsList(res.data.data)
        })
    }, [])
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: tabsList[1],
            children: <Footwear />,
        },
        {
            key: '2',
            label: tabsList[0],
            children: <Clothing />,
        },
        {
            key: '3',
            label: tabsList[2],
            children: <Accessories />,
        },
        {
            key: '4',
            label: tabsList[3],
            children: <Children />,
        },
    ]
    return (
        <div className='tabs'>
            <Tabs defaultActiveKey="1" items={items} centered />
        </div>
    )
}

export default HomeTabs
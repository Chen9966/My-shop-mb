import React from 'react'
import HomeBar from '@/components/Home/HomeBar/HomeBar'
import HomeWrapper from '@/components/Home/HomeWrapper/HomeWrapper'
import HomeTabs from '@/components/Home/HomeTabs/HomeTabs'
const Home: React.FC = () => {
    return (
        <div>
            <HomeBar></HomeBar>
            <HomeWrapper></HomeWrapper>
            <HomeTabs></HomeTabs>
        </div>
    )
}
export default Home


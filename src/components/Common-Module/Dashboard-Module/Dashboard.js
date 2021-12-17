import React from 'react'

import Heading from '../../Reusable-Comp/Heading'
import StatsContainer from './StatsContainer'

const Dashboard = (props) => {

    return (
        <>
            <Heading type="h3" title="Overall statistics 📊"/>
            <StatsContainer />
        </>
    )
}

export default Dashboard
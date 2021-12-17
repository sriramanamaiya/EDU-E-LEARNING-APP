import React from 'react'
import { Grid } from '@mui/material'

import Heading from '../../Reusable-Comp/Heading'
import ChartComp from './ChartComp'
import StatsContainer from './StatsContainer'

const Dashboard = (props) => {

    return (
        <>
            <Heading type="h3" title="Overall statistics 📊"/>
            <Grid container spacing={6}>
                <Grid item md={12}>
                    <StatsContainer />
                </Grid>
                <Grid item md={12}>
                    <ChartComp />
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard
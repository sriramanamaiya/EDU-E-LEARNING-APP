import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'

const StatsItem = (props) => {
    const { title, number, md } = props

    return (
        <Grid item md={md}>
            <Paper elevation={4}>
                <Typography variant='h6' align='center'>{title}</Typography>
                <Typography variant='h2' align='center' sx={{ mt : 1 }}>{number}</Typography>
            </Paper>
        </Grid>
    )
}

export default StatsItem
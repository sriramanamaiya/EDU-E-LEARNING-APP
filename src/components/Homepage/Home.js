import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

import elearning from '../../images/elearning-1.jpg'
import Heading from '../Reusable-Comp/Heading'
import Image from '../Reusable-Comp/Image'

const Home = (props) => {

    return (
        <>
            <Box sx={{display:'flex', alignItems : 'center', justifyContent : 'space-between'}}>
                <Image source={elearning} alt="elarning" width="100%" />
                <div>
                    <Heading type="h1" title="Edu E-Learning app" className="about-heading" />
                    <Heading type="h3" title="Learning Made Simple" />
                    <Typography variant="body1">A E-Learning app, where academy tutor can add courses, register students to courses and students can view the course if tutor granted permission.</Typography>
                </div>
            </Box>
        </>
    )
}

export default Home
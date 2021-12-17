import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'

import elearning from '../../images/elearning-1.jpg'
import Heading from '../Reusable-Comp/Heading'
import Image from '../Reusable-Comp/Image'

const Home = (props) => {
    const isLoading = useSelector((state) => {
        return [ state.admin.isLoading, state.student.isLoading ]
    })

    const [ adminIsLoading, studentIsLoading ] = isLoading

    return (
        <>
            { ( !adminIsLoading && !studentIsLoading ) && (
                <Box sx={{display:'flex', alignItems : 'center', justifyContent : 'space-between'}}>
                    <Image source={elearning} alt="elarning" width="100%" />
                    <div>
                        <Heading type="h1" title="Edu E-Learning app" className="about-heading" />
                        <Heading type="h3" title="Learning Made Simple" />
                        <Typography variant="body1">An E-Learning app, where academy tutors can add courses, register students to courses, and students can view the course lectures if the tutor granted permission.</Typography>
                    </div>
                </Box>
            ) }
        </>
    )
}

export default Home
import React from 'react'
import { Box } from '@mui/system'

import Heading from '../Reusable-Comp/Heading'
import LectureComplete from './LectureComplete'

const MediaHeaders = (props) => {
    const { name, students, lectureId } = props

    return (
        <Box sx={{ display: 'flex', alignItems : 'center', justifyContent: 'space-between'}}>
            <Heading type="h3" title={name} />
            <LectureComplete students={students} lectureId={lectureId} />
        </Box>
    )
}

export default MediaHeaders
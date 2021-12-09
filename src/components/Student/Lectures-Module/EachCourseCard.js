import React from 'react'
import { Card, CardActions, CardContent, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import PreviewIcon from '@mui/icons-material/Preview'

const EachCourseCard = (props) => {
    const { _id, name, author, category, description, level  } = props

    return (
        <Card elevation={3} sx={{ width: 220, height : 220 }}>
            <CardContent sx={{display : 'flex', justifyContent : 'center'  }}>
                <Box>
                    <Typography variant="body1" >Name : {name}</Typography>
                    <Typography variant="body1" >Author : {author}</Typography>
                    <Typography variant="body1" >Category : {category}</Typography>
                    <Typography variant="body1" >Description : {description}</Typography>
                    <Typography variant="body1" >Level : {level}</Typography>
                </Box>
            </CardContent>
            <CardActions  sx={{display : 'flex', justifyContent : 'center'  }}>
                <Link to={`/student/lectures/${_id}`}> <PreviewIcon /></Link>
            </CardActions>
        </Card>
    )
}

export default EachCourseCard
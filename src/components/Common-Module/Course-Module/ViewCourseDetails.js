import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import PreviewIcon from '@mui/icons-material/Preview'
import { Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemText } from '@mui/material'

import ButtonComp from '../../Reusable-Comp/ButtonComp'

const ViewCourseDetails = (props) => {
    const { course } = props
    const [ show, setShow ] = useState(false)

    const handleShowClose = () => {
        setShow(false)
    }

    const handleDetails = () => {
        setShow(true)
    }

    return (
        <div>
            <IconButton color="inherit" onClick={handleDetails}>
                <PreviewIcon />
            </IconButton>
            <Dialog fullWidth={true} open={show} onClose={handleShowClose} >
                <DialogTitle>Course Details: </DialogTitle>
                    <DialogContent>
                            <List dense>                            
                                <ListItem>
                                    <ListItemText primary="Name:" />
                                    <ListItemText primary={course.name} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Description" />
                                    <ListItemText primary={course.description} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Duration:" />
                                    <ListItemText primary={course.duration} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Category:" />
                                    <ListItemText primary={course.category} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Validity:" />
                                    <ListItemText primary={course.validity} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Level:" />
                                    <ListItemText primary={course.level} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Author:" />
                                    <ListItemText primary={course.author} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Total Students Enrolled:" />
                                    <ListItemText primary={course.students.length} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Created At" />
                                    <ListItemText primary={course.createdAt} />
                                </ListItem>
                            </List>
                        <DialogActions>
                            <ButtonComp 
                                variant="contained" 
                                handleClick={handleShowClose} 
                                color="secondary" 
                                title="Close" 
                            />
                        </DialogActions>
                    </DialogContent>
            </Dialog>
        </div>
    )
}

export default ViewCourseDetails
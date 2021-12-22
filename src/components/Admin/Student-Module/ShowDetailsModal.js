import React, { useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemText } from '@mui/material'

import ButtonComp from '../../Reusable-Comp/ButtonComp'

const ShowDetailsModal = (props) => {
    const { name, email, isAllowed, courses, updatedAt } = props
    const [ show, setShow ] = useState(false)

    const handleShowClose = () => {
        setShow(false)
    }

    const handleDetails = () => {
        setShow(true)
    }

    return (
        <>
            <ButtonComp variant="outlined" handleClick={handleDetails} title="View Details" size="small" />
            <Dialog fullWidth={true} open={show} onClose={handleShowClose} >
                <DialogTitle>Students Details: </DialogTitle>
                    <DialogContent>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Name:" />
                                    <ListItemText primary={name} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Email:" />
                                    <ListItemText primary={email} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Allowed:" />
                                    <ListItemText primary={isAllowed.toString()} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Courses:" />
                                    <ListItemText primary={courses.length} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="UpdatedAt:" />
                                    <ListItemText primary={new Date(updatedAt).toDateString()} />
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
        </>
    )
}

export default ShowDetailsModal
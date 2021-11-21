import React from 'react'
import { 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle, CircularProgress } from '@mui/material'

const ShowDetailsModal = (props) => {
    const { show, handleShowClose, name } = props

    return (
        <>
            <Dialog fullWidth={true} open={show} onClose={handleShowClose} >
                <DialogTitle></DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                          {/* { student.email } */}
                          
                        </DialogContentText>
                        <StudentsRegister />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleShowClose}>Close</Button>
                    </DialogActions>
            </Dialog>
        </>
    )
}

export default ShowDetailsModal
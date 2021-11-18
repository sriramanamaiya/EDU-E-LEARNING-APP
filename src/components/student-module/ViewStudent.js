import React from 'react'

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CircularProgress } from '@mui/material';

const ViewStudent = (props) => {
    const { show, handleShowClose, student } = props

    return (
        <>
            <Dialog
                fullWidth={true}
                open={show}
                onClose={handleShowClose}
            >
                <DialogTitle>{student.name}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                          { student.email }
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleShowClose}>Close</Button>
                    </DialogActions>
            </Dialog>
        </>
    )
}

export default ViewStudent
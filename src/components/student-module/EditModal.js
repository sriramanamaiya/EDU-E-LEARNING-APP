import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

import StudentsRegister from './StudentsRegister'

const EditModal = (props) => {
    const { show, handleShowClose, id, name, email, allowed } = props

    return (
        <>
            <Dialog fullWidth={true} open={show} onClose={handleShowClose} >
                <DialogTitle>Edit</DialogTitle>
                    <DialogContent>
                        <StudentsRegister id={id} name={name} email={email} allowed={allowed} handleShowClose={handleShowClose} />
                    </DialogContent>
                    {/* <DialogActions>
                        <Button onClick={handleShowClose}>Close</Button>
                    </DialogActions> */}
            </Dialog>
        </>
    )
}

export default EditModal
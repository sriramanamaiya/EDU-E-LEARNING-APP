import React from 'react'
import { Dialog, DialogContent } from '@mui/material'

const Modal = (props) => {
    const { component, show, handleShowClose } = props

    return (
        <>
            <Dialog fullWidth={true} open={show} onClose={handleShowClose} >
                    <DialogContent>
                        { component }
                    </DialogContent>
            </Dialog>
        </>
    )
}

export default Modal
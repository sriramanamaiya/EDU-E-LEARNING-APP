import React from 'react'
import { Dialog, DialogContent } from '@mui/material'

import StudentsRegister from '../Admin/student-module/StudentsRegister'
import RegisterEdit from '../Admin/admin-auth/RegisterEdit'

const EditModal = (props) => {
    const { show, handleShowClose, id, name, email, allowed, role, academyName, academyWebsite } = props

    return (
        <>
            <Dialog fullWidth={true} open={show} onClose={handleShowClose} >
                    <DialogContent>
                        { role ? ( 
                            <RegisterEdit 
                                handleShowClose={handleShowClose} 
                                name={name} 
                                email={email} 
                                role={role} 
                                academyName={academyName} 
                                academyWebsite={academyWebsite} 
                            /> 
                        ) : (
                            <StudentsRegister 
                                id={id} 
                                name={name} 
                                email={email} 
                                allowed={allowed} 
                                handleShowClose={handleShowClose} 
                            />
                        ) }
                    </DialogContent>
            </Dialog>
        </>
    )
}

export default EditModal
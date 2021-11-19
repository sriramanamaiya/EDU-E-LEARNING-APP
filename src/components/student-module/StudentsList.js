import React from 'react'
import { ListItem,ListItemText } from '@mui/material'

import EachStudent from './EachStudent'

const StudentsList = (props) => {
    const { id, name, email, allowed } = props

    return (
        <>
            <ListItem key={id}>
                <ListItemText primary={name} />
                <ListItemText primary={email} />
                <ListItemText primary={allowed.toString()} />
                <EachStudent id={id} name={name} email={email} allowed={allowed} />
            </ListItem>
        </>
    )
}

export default StudentsList
import React from 'react'
import { Box } from '@mui/system'
import { List, ListItem, ListItemText } from '@mui/material'

const MoreDetails = (props) => {
    const { title, description, createdAt } = props
    
    return (
        <Box sx={{ display : 'flex' , justifyContent : 'center' , mt : 2 }}>
            <details>
                <summary>Click here for more info about lecture</summary>
                <List>
                    <ListItem>
                        <ListItemText primary={`Name: ${title}`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Description: ${description}`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Created At: ${new Date(createdAt).toDateString()}`}  />
                    </ListItem>
                </List>
            </details>
        </Box>
    )
}

export default MoreDetails
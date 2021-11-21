import React, { useState } from 'react'
import { Tab, Box } from '@mui/material'
import { TabPanel, TabContext, TabList } from '@mui/lab'

import Login from './Login'

const LoginPage = (props) => {
    const [ value, setValue ] = useState('admin')

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', textAlign : 'center', mt : 1 }}>
            <Box>
                <TabContext value={value} >
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <TabList value={value} onChange={handleChange} >
                            <Tab value="admin" label="Admin" />
                            <Tab value="student" label="Student" />
                        </TabList>
                    </Box>
                    <TabPanel value="admin">
                        <Login role={value} />
                    </TabPanel>
                    <TabPanel value="student">
                        <Login role={value} />
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}

export default LoginPage
import React from 'react'
import { Container } from '@mui/material'

import './App.css'

import RouteComp from './components/NavBar-Comp/NavBar'

const App = (props) => {

    return (
        <Container>
            <RouteComp />
        </Container>
    )
}

export default App
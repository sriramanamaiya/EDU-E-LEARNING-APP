import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './Home'

const NavBar = (props) => {
    
    return (
        <>
            <Route path="/" component={Home} />
        </>
    )
}

export default NavBar
import React from 'react'
import { Link } from 'react-router-dom'

import Heading from '../common-comp/Heading'

const Home = (props) => {

    return (
        <>
            <Heading type="h1" title="E-learning App" />
            <Link to="/" >Home</Link> |
            <Link to="/register">Register</Link> |
            <Link to="/login" >Login</Link> 
        </>
    )
}

export default Home
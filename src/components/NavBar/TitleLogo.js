import React from 'react'
import { Link } from 'react-router-dom'

import Heading from '../Reusable-Comp/Heading'

const TitleLogo = (props) => {

    return (
        <Heading type="h1" title={<Link to="/" className='main-logo'>Edu E-learning App 📚</Link>}/>
    )
}

export default TitleLogo
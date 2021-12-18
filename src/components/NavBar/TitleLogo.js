import React from 'react'
import { Link } from 'react-router-dom'

import Heading from '../Reusable-Comp/Heading'

const TitleLogo = (props) => {

    return (
        <div className='main-logo'>
            <Heading type="h1" title={<Link to="/" >Edu E-learning App 📚</Link>}/>
        </div>
    )
}

export default TitleLogo
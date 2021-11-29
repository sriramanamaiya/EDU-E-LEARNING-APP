import React from 'react'

import notfound from '../../images/not-found.png'
import Image from '../Reusable-Comp/Image'

const NotFound = (props) => {

    return (
        <Image source={notfound} alt="Not-Found-Image" width="100%" />
    )
}

export default NotFound
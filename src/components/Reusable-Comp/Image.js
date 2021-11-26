import React from 'react'

const NotFound = (props) => {
    const { source, alt, width } = props

    return (
        <img src={source} alt={alt} width={width} />
    )
}

export default NotFound
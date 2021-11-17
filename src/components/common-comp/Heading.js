import React from 'react'

const Heading = (props) => {
    const { type, title } = props

    if( type === 'h1' ){
        return <h1>{title}</h1>
    }
}

export default Heading
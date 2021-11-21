import React from 'react'

const Heading = (props) => {
    const { type, title, className } = props

    if( type === 'h1' ){
        return <h1>{title}</h1>
    }else if( type === 'h3' ){
        return <h3 className={className}>{title}</h3>
    }
}

export default Heading
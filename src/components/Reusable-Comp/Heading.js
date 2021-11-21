import React from 'react'

const Heading = (props) => {
    const { type, title, className } = props

    if( type === 'h1' ){
        return <h1>{title}</h1>
    }else if( type === 'h2' ){
        return <h2>{title}</h2>
    } else if( type === 'h3' ){
        return <h3 className={className}>{title}</h3>
    }else if( type === 'h4' ){
        return <h4 className={className}>{title}</h4>
    }
}

export default Heading
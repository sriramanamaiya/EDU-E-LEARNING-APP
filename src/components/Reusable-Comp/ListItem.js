import React from 'react'

const ListItem = (props) => {
    const { className, title} = props

    return (
        <li className={className}>{title}</li>
    )
}

export default ListItem
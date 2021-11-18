import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Account = (props) => {
    const [ toggle, setToggle ] = useState(false)

    const accountDetails = useSelector((state) => {
        return state.admin.data
    })

    console.log(accountDetails)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <ul>
            { Object.keys(accountDetails).length > 0 && (
                <>  
                    { toggle ? (
                        <>
                            <button onClick={handleClick}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <li>Username : {accountDetails.username}</li>
                            <li>Email : {accountDetails.email}</li>
                            <li>Academy Name : {accountDetails.academy.name}</li>
                            { accountDetails.academy.website.trim().length !== 0 && <li>{accountDetails.academy.website}</li> }
                            <button onClick={handleClick}>Edit</button>
                        </>
                    )}
                </>
            ) }
        </ul>
    )
}

export default Account
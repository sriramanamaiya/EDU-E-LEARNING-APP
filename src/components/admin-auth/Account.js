import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import EditAccount from './EditAccount'

const Account = (props) => {
    const [ toggle, setToggle ] = useState(false)

    const accountDetails = useSelector((state) => {
        return state.admin.data
    })

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <ul>
            { Object.keys(accountDetails).length > 0 && (
                <>  
                    { toggle ? (
                        <>
                            <EditAccount role={accountDetails.role} name={accountDetails.username} userEmail={accountDetails.email} academyName = {accountDetails.academy.name} academyWebsite={accountDetails.academy.website} handleToggle={handleToggle} />
                        </>
                    ) : (
                        <>
                            <li>Username : {accountDetails.username}</li>
                            <li>Email : {accountDetails.email}</li>
                            <li>Academy Name : {accountDetails.academy.name}</li>
                            { accountDetails.academy.website.trim().length !== 0 && <li>{accountDetails.academy.website}</li> }
                            <button onClick={handleToggle}>Edit</button>
                        </>
                    )}
                </>
            ) }
        </ul>
    )
}

export default Account
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Heading from '../common-comp/Heading'

import EditAccount from './EditAccount'
import ListItem from '../common-comp/ListItem'
import ButtonComp from '../common-comp/ButtonComp'
import EditModal from '../student-module/EditModal'

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
                            <EditModal 
                                show={toggle} 
                                handleShowClose={handleToggle}  
                                role={accountDetails.role} 
                                name={accountDetails.username} 
                                email={accountDetails.email} 
                                academyName = {accountDetails.academy.name} 
                                academyWebsite={accountDetails.academy.website}  
                            />
                            {/* <EditAccount role={accountDetails.role} name={accountDetails.username} userEmail={accountDetails.email} academyName = {accountDetails.academy.name} academyWebsite={accountDetails.academy.website} handleToggle={handleToggle} /> */}
                        </>
                    ) : (
                        <>
                            <Heading type="h4" title="Admin Account Details:" className="login-heading" />
                            <ListItem title={`Username : ${accountDetails.username}`} className="account-details" />
                            <ListItem title={`Email ID : ${accountDetails.email}`} className="account-details" />
                            <ListItem title={`Academy Name : ${accountDetails.email}`} className="account-details" />
                            { accountDetails.academy.website.trim().length !== 0 && <ListItem title={accountDetails.academy.website} /> }    
                            <ButtonComp  variant="outlined" title="Edit" handleClick={handleToggle}/>
                        </>
                    )}
                </>
            ) }
        </ul>
    )
}

export default Account
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Heading from '../../Reusable-Comp/Heading'
import ListItem from '../../Reusable-Comp/ListItem'
import ButtonComp from '../../Reusable-Comp/ButtonComp'
import EditModal from '../../Reusable-Comp/EditModal'

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
                        </>
                    ) : (
                        <>
                            <Heading type="h4" title="Admin Account Details:" className="heading" />
                            <ListItem 
                                title={`Username : ${accountDetails.username}`} 
                                className="account-details" 
                            />
                            <ListItem 
                                title={`Email ID : ${accountDetails.email}`} 
                                className="account-details" 
                            />
                            <ListItem 
                                title={`Academy Name : ${accountDetails.email}`} 
                                className="account-details" 
                            />
                            { accountDetails.academy.website.trim().length !== 0 && ( 
                                <ListItem title={accountDetails.academy.website} className="account-details" />
                            )}    
                            <ButtonComp  variant="outlined" title="Edit" handleClick={handleToggle}/>
                        </>
                    )}
                </>
            ) }
        </ul>
    )
}

export default Account
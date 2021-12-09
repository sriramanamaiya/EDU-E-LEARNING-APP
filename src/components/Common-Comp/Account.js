import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Heading from '../Reusable-Comp/Heading'
import ListItem from '../Reusable-Comp/ListItem'
import ButtonComp from '../Reusable-Comp/ButtonComp'
import Modal from '../Reusable-Comp/Modal'
import RegisterEdit from '../Admin/Admin-Auth/RegisterEdit'

const Account = (props) => {
    const [ toggle, setToggle ] = useState(false)
    const [ accountDetails, setAccountDetails ] = useState({})

    const data = useSelector((state) => {
        return [ state.admin.data, state.student.accountData ]
    })

    const [ adminAccount, studentAccount ] = data

    useEffect(() => {
        if( adminAccount.role === 'admin' ){
            setAccountDetails(adminAccount)
        }else if( studentAccount.role === 'student' ){
            setAccountDetails(studentAccount)
        }
    },[adminAccount,studentAccount])

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <ul>
            { Object.keys(accountDetails).length > 0 && (
                <>  
                    { toggle ? (
                        <>
                            <Modal 
                                show={toggle} 
                                handleShowClose={handleToggle}  
                                component={<RegisterEdit 
                                    handleShowClose={handleToggle}  
                                    role={accountDetails.role} 
                                    name={accountDetails.username} 
                                    email={accountDetails.email} 
                                    academyName={accountDetails.academy.name} 
                                    academyWebsite={accountDetails.academy.website} 
                                />} 
                            />
                        </>
                    ) : (
                        <>
                            <Heading type="h4" title="Account Details:" className="account-heading" />
                            <ListItem 
                                title={`Username : ${ accountDetails.role === 'admin' ? accountDetails.username : accountDetails.name }`} 
                                className="account-details" 
                            />
                            <ListItem 
                                title={`Email ID : ${accountDetails.email}`} 
                                className="account-details" 
                            />
                            { accountDetails.role === 'admin' && (
                                <>
                                    <ListItem 
                                        title={`Academy Name : ${accountDetails.academy.name}`} 
                                        className="account-details" 
                                    />
                                    { accountDetails.academy.website.trim().length !== 0 && ( 
                                        <ListItem 
                                            title={accountDetails.academy.website} 
                                            className="account-details" 
                                        />
                                    )}
                                    <ButtonComp 
                                        variant="outlined" 
                                        color="secondary" 
                                        sx={{mt : 2}} 
                                        title="Edit" 
                                        handleClick={handleToggle}
                                    />
                                </>
                            ) }    
                        </>
                    )}
                </>
            ) }
        </ul>
    )
}

export default Account
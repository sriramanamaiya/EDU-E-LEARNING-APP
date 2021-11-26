import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'

import { startRegisteradmin, adminAuthErrors, startEditAdminAccount } from '../../../actions/adminAction'

import InputField from '../../Reusable-Comp/InputField'
import ButtonComp from '../../Reusable-Comp/ButtonComp'
import AlertComp from '../../Reusable-Comp/AlertComp'
import Heading from '../../Reusable-Comp/Heading'

const RegisterEdit = (props) => {
    const { history, role, name, email : userEmail, academyName, academyWebsite, handleShowClose } = props
    const dispatch = useDispatch()

    const registerErrors = useSelector((state) => {
        return state.admin.errors
    })

    useEffect(() => {
        if( role ){
            setValues({
                username : name,
                email : userEmail,
                academy : {
                    name : academyName,
                    website : academyWebsite
                }
            })
        }

        return () => {
            dispatch(adminAuthErrors({}))
        }
    },[])

    useEffect(() => {
        setErrors(registerErrors)
    },[registerErrors])

    const handleCancel = () => {
        history.push('/')
    }

    const validationSchema = yup.object({
        username : yup.string().required('Username Cannot be Blank'),
        email : yup.string().email('Invalid Email').required('Required'),
        password : !role && yup.string().min(8,'Password is too short').max(128).required('Required'),
        academy : yup.object({
            name : yup.string().required('Academy Name Required')
        })
    })
    
    const { values, setValues, handleChange, handleSubmit, errors, setErrors, touched, handleBlur } = useFormik({
        initialValues :{
            username : '',
            email : '',
            password : '',
            academy : {
                name : '',
                website : ''
            }
        },
        validationSchema,
        validateOnChange : false,
        onSubmit : (values) => {
            const redirect = () => {
                history.push('/login')
            }
            if( role ){
                dispatch(startEditAdminAccount(values, handleShowClose))
            }else{
                dispatch(startRegisteradmin(values, redirect))
            }
        }
    })

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', textAlign : 'center' }}>
            <form onSubmit={handleSubmit}>
                { role ? (
                    <Heading type="h3" title="Edit ur Account"  /> 
                ) : (
                    <Heading type="h3" title="Register with us ➡️"  />
                )}
                
                { errors.hasOwnProperty('errors') && <AlertComp type="error" title={errors.errors} />}

                <Typography variant="body2" sx={{textAlign : 'left'}} >Admin Details:</Typography>
                <InputField 
                    label="Username" 
                    name="username" 
                    value={values.username} 
                    handleChange={handleChange} 
                    handleBlur={handleBlur}
                    error={ errors.username && touched.username ? true : false } 
                    helperText = { touched.username && errors.username ? errors.username : ''} 
                    margin="normal" 
                    size="small" 
                />

                <InputField 
                    label="Email" 
                    name="email" 
                    value={values.email} 
                    handleChange={handleChange} 
                    handleBlur={handleBlur}
                    error={errors.email && touched.email ? true : false } 
                    helperText = { touched.email && errors.email ? errors.email : ''} 
                    margin="normal" 
                    size="small" 
                />

                { !role && (
                    <InputField 
                        label="Password" 
                        name="password" 
                        type="password"
                        value={values.password} 
                        handleChange={handleChange} 
                        handleBlur={handleBlur}
                        error={ touched.password && errors.password ? true : false } 
                        helperText = { touched.password && errors.password ?  errors.password : ''} 
                        margin="normal" 
                        size="small" 
                    />
                )}

                <Typography variant="body2" sx={{textAlign : 'left'}} >Academy Details:</Typography>
                <InputField 
                    label="Academy Name" 
                    name="academy.name" 
                    value={values.academy.name} 
                    handleChange={handleChange} 
                    handleBlur={handleBlur}
                    error={ 
                        Object.keys(touched).includes('academy') && Object.keys(errors).includes('academy') ? 
                        true : false 
                    } 
                    helperText = { 
                        Object.keys(touched).includes('academy') && Object.keys(errors).includes('academy') ?  
                        errors.academy.name : '' 
                    }
                    margin="normal" 
                    size="small" 
                />

                <InputField 
                    label="Academy website" 
                    name="academy.website" 
                    value={values.academy.website} 
                    handleChange={handleChange} 
                    margin="normal" 
                    size="small" 
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt : 1 }}>
                    { role ? (
                        <>
                            <ButtonComp variant="contained" handleClick={handleSubmit} title="Update" />
                            <ButtonComp 
                                variant="contained" 
                                handleClick={handleShowClose} 
                                title="Cancel" 
                                color="secondary" 
                            />
                        </>
                    ) : (
                        <>
                            <ButtonComp variant="contained" handleClick={handleSubmit} title="Register" />
                            <ButtonComp 
                                variant="contained" 
                                handleClick={handleCancel} 
                                title="Cancel" 
                                color="secondary" 
                            />
                        </>
                    ) }
                </Box>
            </form>
        </Box>
    )
}

export default RegisterEdit
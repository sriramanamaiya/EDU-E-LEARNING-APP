import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/system'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'

import { startLogin, adminAuthErrors } from '../../actions/adminAction'
import { startLoginStudent, studentErrors } from '../../actions/studentAction'

import Heading from '../Reusable-Comp/Heading'
import InputField from '../Reusable-Comp/InputField'
import ButtonComp from '../Reusable-Comp/ButtonComp'
import AlertComp from '../Reusable-Comp/AlertComp'

const Login = (props) => {
    const { history, role } = props
    const [ loggedIn, setLoggedIn ] = useState(false)
    const dispatch = useDispatch()

    const error = useSelector((state) => {
        return [state.admin.errors, state.student.errors]
    })

    const [ adminErrors, studentError ] = error

    useEffect(() => {
        return () => {
            if( role ) {
                dispatch(adminAuthErrors({}))
            }else{
                dispatch(studentErrors({}))
            }
        }
    },[])

    useEffect(() => {
        if( Object.keys(adminErrors).length > 0 || Object.keys(studentError).length > 0 ){
            setLoggedIn(false)
        }
    },[adminErrors,studentError])

    const redirect = () => {
        history.push('/')
    }

    const validationSchema = yup.object({
        email : yup.string().email('Invalid Email').required('Required'),
        password : yup.string().min(8,'Password is too short').max(128).required('Required')
    })

    const { values, handleChange, handleSubmit, errors, setErrors, touched, handleBlur } = useFormik({
        initialValues :{
            email : '',
            password : ''
        },
        validationSchema,
        onSubmit : (values) => {
            if( role ){
                setLoggedIn(true)
                dispatch(adminAuthErrors({}))
                dispatch(startLogin(values,redirect))
            }else{
                setLoggedIn(true)
                dispatch(studentErrors({}))
                dispatch(startLoginStudent(values, redirect))
            }
        }
    })

    return (
        <>
            {( adminErrors.hasOwnProperty('errors') || studentError.hasOwnProperty('errors') ) && (
                <AlertComp type="error" title={ adminErrors.errors ? adminErrors.errors : studentError.errors }/> 
            )}
            <form onSubmit={handleSubmit}>
                <Heading type="h3" title="Login 💻"  className="login-heading" />
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

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt : 1 }}>
                    { loggedIn ? (
                        <LoadingButton loading variant="contained" />
                    ) : (
                        <ButtonComp variant="contained" handleClick={handleSubmit} title="LogIn" />
                    ) }
                    <ButtonComp variant="contained" handleClick={redirect} title="Cancel" color="secondary" />
                </Box>
            </form>
            { role && (
                <Typography variant="body1" sx={{textAlign : 'right', mt : 2 }} >Don't have an account? <Link className="link-color" to="/register">Sign up</Link></Typography>
            )}
        </>
    )
}

export default withRouter(Login)
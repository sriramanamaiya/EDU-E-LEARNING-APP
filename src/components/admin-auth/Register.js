import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { startRegisteradmin, serverMessage } from '../../actions/adminAction'

import InputField from '../common-comp/InputField'
import ButtonComp from '../common-comp/ButtonComp'

const Register = (props) => {
    const { history } = props
    const dispatch = useDispatch()

    const adminErrors = useSelector((state) => {
        return state.admin.message
    })

    useEffect(() => {
        dispatch(serverMessage({}))
    },[])

    useEffect(() => {
        setErrors(adminErrors)
    },[adminErrors])

    const handleCancel = () => {
        history.push('/')
    }

    const validationSchema = yup.object({
        username : yup.string().required('Username Cannot be Blank'),
        email : yup.string().email('Invalid Email').required('Required'),
        password : yup.string().min(8,'Password is too short').max(128).required('Required'),
        academy : yup.object({
            name : yup.string().required('Academy Name Required')
        })
    })

    const { values, handleChange, handleSubmit, errors, setErrors, touched, handleBlur } = useFormik({
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
            dispatch(startRegisteradmin(values, redirect))
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            { errors.hasOwnProperty('errors') && <Alert severity="error">{errors.errors}</Alert> }
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

            <InputField 
                label="Academy Name" 
                name="academy.name" 
                value={values.academy.name} 
                handleChange={handleChange} 
                handleBlur={handleBlur}
                error={ Object.keys(touched).includes('academy') && Object.keys(errors).includes('academy') ? true : false } 
                helperText = { Object.keys(touched).includes('academy') && Object.keys(errors).includes('academy') ?  errors.academy.name : '' }
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

            <ButtonComp variant="contained" handleClick={handleSubmit} title="Submit" />
            <ButtonComp variant="contained" handleClick={handleCancel} title="Cancel" />
        </form>
    )
}

export default Register
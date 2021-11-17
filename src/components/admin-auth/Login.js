import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import { startLogin, serverMessage } from '../../actions/adminAction'

import InputField from '../common-comp/InputField'
import ButtonComp from '../common-comp/ButtonComp'
import AlertComp from '../common-comp/AlertComp'

const Login = (props) => {
    const { history } = props
    const dispatch = useDispatch()

    const loginErrors = useSelector((state) => {
        return state.admin.message
    })

    useEffect(() => {
        return () => {
            dispatch(serverMessage({}))
        }
    },[])

    useEffect(() => {
        setErrors(loginErrors)
    },[loginErrors])

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
        validateOnChange : false,
        onSubmit : (values) => {
            dispatch(startLogin(values,redirect))
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            { errors.hasOwnProperty('notice') && <AlertComp type="success" title={errors.notice} />}
            { errors.hasOwnProperty('errors') && <AlertComp type="error" title={errors.errors} /> }
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

            <ButtonComp variant="contained" handleClick={handleSubmit} title="LogIn" />
            <ButtonComp variant="contained" handleClick={redirect} title="Cancel" />
        </form>
    )
}

export default Login
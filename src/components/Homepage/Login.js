import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/system'
import { withRouter } from 'react-router'

import { startLogin, serverMessage } from '../../actions/adminAction'

import Heading from '../Reusable-Comp/Heading'
import InputField from '../Reusable-Comp/InputField'
import ButtonComp from '../Reusable-Comp/ButtonComp'
import AlertComp from '../Reusable-Comp/AlertComp'

const Login = (props) => {
    const { history, role } = props
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
            if( role === 'admin' ){
                dispatch(startLogin(values,redirect))
            }else{
                alert('Yet to implement the Project')
            }
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            { errors.hasOwnProperty('notice') && <AlertComp type="success" title={errors.notice} />}
            { errors.hasOwnProperty('errors') && <AlertComp type="error" title={errors.errors} /> }
            
            <Heading type="h3" title="Login 💻"  className="heading" />
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
                <ButtonComp variant="contained" handleClick={handleSubmit} title="LogIn" />
                <ButtonComp variant="contained" handleClick={redirect} title="Cancel" color="secondary" />
            </Box>
        </form>
    )
}

export default withRouter(Login)
import React, { useEffect } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { FormControlLabel, Checkbox } from '@mui/material'

import { startStudentRegister, studentServerMessages } from '../../actions/studentsAction'
 
import InputField from'../common-comp/InputField'
import AlertComp from '../common-comp/AlertComp'
import ButtonComp from '../common-comp/ButtonComp'

const StudentsRegister = (props) => {
    const { history } = props

    const dispatch = useDispatch()

    const registerErrors = useSelector((state) => {
        return state.students.message
    })
    
    useEffect(() => {
       return () => {
        dispatch(studentServerMessages({}))
       }
    },[])
    
    useEffect(() => {
        setErrors(registerErrors)
    },[registerErrors])
    
    const handleCancel = () => {
        history.push('/students')
    }

    const validationSchema = yup.object({
        name : yup.string().required('Username Cannot be Blank'),
        email : yup.string().email('Invalid Email').required('Required'),
        password : yup.string().min(8,'Password is too short').max(128).required('Required'),
    })

    const { values, handleChange, handleSubmit, errors, setErrors, touched, handleBlur } = useFormik({
        initialValues :{
            name : '',
            email : '',
            password : '',
            isAllowed : false
        },
        validationSchema,
        validateOnChange : false,
        onSubmit : (values) => {
            const redirect = () => {
                history.push('/students/learners')
            }
            dispatch(startStudentRegister(values, redirect))
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            { errors.hasOwnProperty('errors') && <AlertComp type="error" title={errors.errors} />}
            <InputField 
                label="Name" 
                name="name" 
                value={values.name} 
                handleChange={handleChange} 
                handleBlur={handleBlur}
                error={ errors.name && touched.name ? true : false } 
                helperText = { touched.name && errors.name ? errors.name : ''} 
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

            <FormControlLabel
                label="Allow Student"
                control={
                    <Checkbox 
                        name="isAllowed"
                        checked={values.isAllowed}
                        onChange={handleChange}
                    />
                }
            /><br />
            <ButtonComp variant="contained" handleClick={handleSubmit} title="Register" />
            <ButtonComp variant="contained" handleClick={handleCancel} title="Cancel" />
        </form>
    )
}

export default StudentsRegister
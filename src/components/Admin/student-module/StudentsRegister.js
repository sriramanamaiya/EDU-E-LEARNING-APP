import React, { useEffect } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { FormControlLabel, Checkbox, Box } from '@mui/material'

import { startStudentRegister, studentServerMessages, startEditStudent } from '../../../actions/studentsAction'
 
import Heading from '../../Reusable-Comp/Heading'
import InputField from'../../Reusable-Comp/InputField'
import AlertComp from '../../Reusable-Comp/AlertComp'
import ButtonComp from '../../Reusable-Comp/ButtonComp'

const StudentsRegister = (props) => {
    const { id, name : studentName, email : studentEmail, allowed, handleShowClose } = props
    const { history } = props

    const dispatch = useDispatch()

    const registerErrors = useSelector((state) => {
        return state.students.message
    })
    
    useEffect(() => {
        if( id ){
            setValues({
                name : studentName,
                email : studentEmail,
                isAllowed : allowed
            })
        }

       return () => {
        dispatch(studentServerMessages({}))
       }
    },[])
    
    useEffect(() => {
        setErrors(registerErrors)
    },[registerErrors])
    
    const handleCancel = () => {
        history.push('/admin/students')
    }

    const redirect = () => {
        history.push('/admin/students')
    }

    let validationSchema
    if( id ){
        validationSchema = yup.object({
            name : yup.string().required('Username Cannot be Blank'),
            email : yup.string().email('Invalid Email').required('Required'),
        })
    }else{
        validationSchema = yup.object({
            name : yup.string().required('Username Cannot be Blank'),
            email : yup.string().email('Invalid Email').required('Required'),
            password : yup.string().min(8,'Password is too short').max(128).required('Required'),
        })
    }
    
    const { values, setValues, handleChange, handleSubmit, errors, setErrors, touched, handleBlur } = useFormik({
        initialValues :{
            name : '',
            email : '',
            password : '',
            isAllowed : false
        },
        validationSchema,
        validateOnChange : false,
        onSubmit : (values) => {
            if( id ){
                dispatch(startEditStudent(id,values,handleShowClose))
            }else{
                dispatch(startStudentRegister(values, redirect))
            }
        }
    })

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'background.paper', textAlign : 'center', mt : 2 }}>
        <form onSubmit={handleSubmit}>
            { errors.hasOwnProperty('errors') && <AlertComp type="error" title={errors.errors} />}

            { id ? (
                <Heading type="h3" title="Update Student Info 🧑‍🎓➡️"  className="login-heading" />
            ) : (
                <Heading type="h3" title="Register Students 🧑‍🎓➡️"  className="login-heading" />
            )}

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

            { !id && (
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

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt : 1 }} >
                { id ?  (
                    <>
                        <ButtonComp variant="contained" handleClick={handleSubmit} title="Update" />
                        <ButtonComp variant="contained" handleClick={handleShowClose} title="Cancel" color="secondary" />
                    </>
                ): (
                    <>
                        <ButtonComp variant="contained" handleClick={handleSubmit} title="Register" />
                        <ButtonComp variant="contained" handleClick={handleCancel} title="Cancel" color="secondary" />
                    </>
                )}
            </Box>
        </form>
        </Box>
    )
}

export default StudentsRegister
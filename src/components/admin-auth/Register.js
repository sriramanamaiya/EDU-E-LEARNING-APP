import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Button } from '@mui/material'

import InputField from '../common-comp/InputField'

const Register = (props) => {

    const validationSchema = yup.object({
        username : yup.string().required('Username Cannot be Blank'),
        email : yup.string().email('Invalid EMail').required('Required'),
        password : yup.string().min(6,'Password is too short').max(128).required('Required'),
        academy : yup.object({
            name : yup.string().required('Academy Name Required')
        })
    })

    const { values, handleChange, handleSubmit, errors } = useFormik({
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
            console.log(values)
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            <InputField label="Username" name="username" value={values.username} handleChange={handleChange} error={errors.username ? true : false } helperText = {errors.username} margin="normal" size="small" />

            <InputField label="Email" name="email" value={values.email} handleChange={handleChange} error={errors.email ? true : false } helperText = {errors.email} margin="normal" size="small" />

            <InputField label="Password" name="password" value={values.password} handleChange={handleChange} error={errors.password ? true : false } helperText = {errors.password} margin="normal" size="small" />

            <InputField label="Academy Name" name="academy.name" value={values.academy.name} handleChange={handleChange} error={ Object.keys(errors).includes('academy') && errors.academy.name ? true : false } helperText = {Object.keys(errors).includes('academy')&&errors.academy.name}margin="normal" size="small" />

            <InputField label="Academy website" name="academy.website" value={values.academy.website} handleChange={handleChange} margin="normal" size="small" />

            <Button variant="contained" onClick={handleSubmit}>Add</Button>
        </form>
    )
}

export default Register
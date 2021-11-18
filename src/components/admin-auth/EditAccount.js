import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import { serverMessage, startEditAdminAccount } from '../../actions/adminAction'

import InputField from '../common-comp/InputField'
import ButtonComp from '../common-comp/ButtonComp'
import AlertComp from '../common-comp/AlertComp'

const EditAccount = (props) => {
    const { role , name, userEmail, academyName, academyWebsite, handleToggle } = props

    const dispatch = useDispatch()

    const editErrors = useSelector((state) => {
        return state.admin.message
    })

    useEffect(() => {
        dispatch(serverMessage({}))
    },[])

    useEffect(() => {
        setErrors(editErrors)

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
    },[editErrors, name, userEmail, academyName , academyWebsite])

    let validationSchema
    if( role === "admin" ){
        validationSchema = yup.object({
            username : yup.string().required('Username Cannot be Blank'),
            email : yup.string().email('Invalid Email').required('Required'),
            academy : yup.object({
                name : yup.string().required('Academy Name Required')
            })
        })
    }

    const { values, setValues, handleChange, handleSubmit, errors, setErrors, touched, handleBlur } = useFormik({
        initialValues :{
            username : '',
            email : '',
            academy : {
                name : '',
                website : ''
            }
        },
        validationSchema,
        validateOnChange : false,
        onSubmit : (values) => {
            console.log(role)
            if( role === "admin" ){
                console.log(values)
                dispatch(startEditAdminAccount(values,handleToggle))
            }
        }
    })


    return (
        <form onSubmit={handleSubmit}>
            { errors.hasOwnProperty('errors') && <AlertComp type="error" title={errors.errors} />}
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

            { role === "admin" &&  <ButtonComp variant="contained" handleClick={handleSubmit} title="Update" /> }
            { role === "admin" ? <ButtonComp variant="contained" handleClick={handleToggle} title="Cancel" /> : <ButtonComp variant="contained"  title="Cancel" /> }
        </form>
    )
}

export default EditAccount
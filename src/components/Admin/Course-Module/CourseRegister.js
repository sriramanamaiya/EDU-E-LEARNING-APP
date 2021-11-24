import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker'

import { startCreateCourse, startEditCourse, courseServerMessage } from '../../../actions/courseAction'

import InputField from '../../Reusable-Comp/InputField'
import ButtonComp from '../../Reusable-Comp/ButtonComp'
import AlertComp from '../../Reusable-Comp/AlertComp'
import Heading from '../../Reusable-Comp/Heading'

const CourseRegister = (props) => {
    const { history, role, handleShowClose, _id, name : courseName, description : courseDescription, duration : courseDuration, category : courseCateg, validity : courseValidity, level : courseLevel, author : courseAuthor } = props

    const dispatch = useDispatch()

    const courseErrors = useSelector((state) => {
        return state.course.message
    })

    const courseCategory = ['HTML', 'CSS', 'javascript', 'reactjs', 'nodejs','expressjs', 'mongodb']

    useEffect(() => {
        if( _id ){
            setValues({
                name : courseName,
                description : courseDescription,
                duration : courseDuration,
                category : courseCateg,
                validity : courseValidity,
                level : courseLevel,
                author : courseAuthor
            })
        }

        return () => {
            dispatch(courseServerMessage({}))
        }
    },[])

    useEffect(() => {
        setErrors(courseErrors)
    },[courseErrors])

    const handleCancel = () => {
        history.push('/admin/course')
    }

    const validationSchema = yup.object({
        name : yup.string().required('Required'),
        description : yup.string().required('Required'),
        duration : yup.number().required('Required'),
        category : yup.string().required('Required'),
        validity : yup.string().required('Required'),
        level : yup.string().required('Please select Levels'),
        author : yup.string().required('Please write author name')
    })

    const { values, setValues, handleChange, handleSubmit, errors, setErrors, touched, handleBlur } = useFormik({
        initialValues :{
            name : '',
            description : '',
            duration : '',
            releaseDate : '',
            category : '',
            validity : '',
            level : '',
            author: ''  
        },
        validationSchema,
        validateOnChange : false,
        onSubmit : (values) => {
            if(_id){
                dispatch(startEditCourse(_id,values,handleShowClose))
            }else{
                dispatch(startCreateCourse(values))
            }
        }
    })

    return (
        <Grid container sx={{flexGrow : 1}} justifyContent="center" >
            <form onSubmit={handleSubmit}>
                { _id ? (
                    <Heading type="h3" title="Edit ur Course"  /> 
                    ) : (
                    <Heading type="h3" title="Create Course Here 📖"  />
                )}
                
                { errors.hasOwnProperty('errors') && <AlertComp type="error" title={errors.errors} />}

                <Typography variant="body2" sx={{textAlign : 'left'}} >Add Course Details:</Typography>
                <InputField 
                    label="Course Name" 
                    name="name" 
                    value={values.name} 
                    handleChange={handleChange} 
                    handleBlur={handleBlur}
                    error={ errors.name && touched.name ? true : false } 
                    helperText = { touched.name && errors.name ? errors.name : ''} 
                    margin="normal" 
                    size="small" 
                    required={true}
                />

                <InputField 
                    label="Description" 
                    name="description" 
                    value={values.description} 
                    handleChange={handleChange} 
                    handleBlur={handleBlur}
                    error={errors.description && touched.description ? true : false } 
                    helperText = { touched.description && errors.description ? errors.description : ''} 
                    margin="normal" 
                    size="small" 
                    required={true}
                />

                <InputField 
                    label="Duration" 
                    name="duration" 
                    type="number"
                    value={values.duration} 
                    handleChange={handleChange} 
                    handleBlur={handleBlur}
                    error={errors.duration && touched.duration ? true : false } 
                    helperText = { touched.duration && errors.duration ? errors.duration : ''} 
                    margin="normal" 
                    size="small" 
                    required={true}
                />
                
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Basic example"
                        value={values.releaseDate}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                {/* <InputField 
                    label="Release Date" 
                    name="releaseDate" 
                    value={values.releaseDate} 
                    handleChange={handleChange} 
                    handleBlur={handleBlur}
                    error={errors.releaseDate && touched.releaseDate ? true : false } 
                    helperText = { touched.releaseDate && errors.releaseDate ? errors.releaseDate : ''} 
                    margin="normal" 
                    size="small" 
                /> */}

                {/* <InputField 
                    label="Category" 
                    name="category" 
                    value={values.category} 
                    handleChange={handleChange} 
                    handleBlur={handleBlur}
                    error={errors.category && touched.category ? true : false } 
                    helperText = { touched.category && errors.category ? errors.category : ''} 
                    margin="normal" 
                    size="small" 
                    required={true}
                /> */}

                <TextField 
                    sx={{width : '100%'}} 
                    margin="normal"  
                    required 
                    name="category" 
                    size="small" 
                    label="Select Course Category"
                    error={errors.category && touched.category ? true : false }  
                    helperText={ touched.category && errors.category ? errors.category : ''} 
                    select value={values.category}
                    onBlur={handleBlur} 
                    onChange={handleChange}
                >
                    { courseCategory.map((course) => {
                        return (
                            <MenuItem key={course} value={course}>{course}</MenuItem>
                        )
                    }) }
                </TextField>

                <InputField 
                    label="Validity" 
                    name="validity" 
                    type="number"
                    value={values.validity} 
                    handleChange={handleChange} 
                    handleBlur={handleBlur}
                    error={errors.validity && touched.validity ? true : false } 
                    helperText = { touched.validity && errors.validity ? errors.validity : ''} 
                    margin="normal" 
                    size="small" 
                    required={true}
                />

                <TextField 
                    sx={{width : '100%'}} 
                    margin="normal"  
                    required 
                    name="level" 
                    size="small" 
                    label="Select Course Level"
                    error={errors.level && touched.level ? true : false }  
                    helperText={ touched.level && errors.level ? errors.level : ''} 
                    select value={values.level}
                    onBlur={handleBlur}  
                    onChange={handleChange}
                >
                    <MenuItem value="beginner">Beginner</MenuItem>
                    <MenuItem value="intermediate">Intermediate</MenuItem>
                    <MenuItem value="expert">Expert</MenuItem>
                </TextField>

                <InputField 
                    label="Author*" 
                    name="author" 
                    value={values.author} 
                    handleChange={handleChange} 
                    handleBlur={handleBlur}
                    error={errors.author && touched.author ? true : false } 
                    helperText = { touched.author && errors.author ? errors.author : ''} 
                    margin="normal" 
                    size="small" 
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt : 1 }}>
                    { _id ? (
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
                            <ButtonComp variant="contained" handleClick={handleSubmit} title="Create" />
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
        </Grid>
    )
}

export default CourseRegister
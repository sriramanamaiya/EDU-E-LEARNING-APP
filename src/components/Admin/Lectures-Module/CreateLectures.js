import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material'

import { startCreateLecture } from '../../../actions/lectureAction'

import InputField from '../../Reusable-Comp/InputField'
import ButtonComp from '../../Reusable-Comp/ButtonComp'
import Heading from '../../Reusable-Comp/Heading'

const CreateLectures = (props) => {
    const { history, handleShowClose, id, _id} = props
    console.log(id)

    const dispatch = useDispatch()

    const courseData = useSelector((state) => {
        return state.course.data
    })

    const fileType = ['video','audio','text', 'pdf','img']

    useEffect(() => {
        // if( _id ){
        //     setValues({
        //         name : courseName,
        //         description : courseDescription,
        //         duration : courseDuration,
        //         releaseDate : '',
        //         category : courseCateg,
        //         validity : courseValidity,
        //         level : courseLevel,
        //         author : courseAuthor
        //     })
        // }

        // return () => {
        //     dispatch(courseErrors({}))
        // }
    },[])
    
    // useEffect(() => {
    //     setErrors(error)
    // },[error])

    const handleRedirect = () => {
        history.push('/admin/courses')
    }

    const validationSchema = yup.object({
        title : yup.string().required('Required'),
        description : yup.string().required('Required'),
        assetType : yup.string().required('Required'),
        assetURL : yup.string().required('Required'),
        course : yup.string().required('Required')
    })

    const { values, setValues, handleChange, handleSubmit, errors, setErrors, touched, handleBlur } = useFormik({
        initialValues :{
            title : '',
            description : '',
            assetType : '',
            assetURL : '',
            comments : '',
            students : '',
            course : '',
            isDelete : false
        },
        validationSchema,
        validateOnChange : false,
        onSubmit : (values) => {
            console.log(values)
            dispatch(startCreateLecture(values))
        }
    })
    

    return (
        <Grid container sx={{flexGrow : 1}} justifyContent="center" >
            <form onSubmit={handleSubmit}>
                { _id ? (
                    <Heading type="h3" title="Edit Your Lecture"  /> 
                    ) : (
                    <Heading type="h3" title="Create a lecture 🧑‍🏫"  />
                )}

                <Typography variant="body2" sx={{textAlign : 'left'}} >Add Lecture Details:</Typography>
                <InputField 
                    label="Title" 
                    name="title" 
                    value={values.title} 
                    handleChange={handleChange} 
                    handleBlur={handleBlur}
                    error={ errors.title && touched.title ? true : false } 
                    helperText = { touched.title && errors.title ? errors.title : ''} 
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

                <TextField 
                    sx={{width : '100%'}} 
                    margin="normal"  
                    required 
                    name="assetType" 
                    size="small" 
                    label="Select asset Type"
                    error={errors.assetType && touched.assetType ? true : false }  
                    helperText={ touched.assetType && errors.assetType ? errors.assetType : ''} 
                    select 
                    value={values.assetType}
                    onBlur={handleBlur} 
                    onChange={handleChange}
                >
                    { fileType.map((file) => {
                        return (
                            <MenuItem key={file} value={file}>{file}</MenuItem>
                        )
                    }) }
                </TextField>

                <InputField 
                    label="Asset Url" 
                    name="assetURL" 
                    value={values.assetURL} 
                    handleChange={handleChange} 
                    handleBlur={handleBlur}
                    error={errors.assetURL && touched.assetURL ? true : false } 
                    helperText = { touched.assetURL && errors.assetURL ? errors.assetURL : ''} 
                    margin="normal" 
                    size="small" 
                    required={true}
                />

                <InputField 
                    label="Comments" 
                    name="comments" 
                    value={values.comments} 
                    handleChange={handleChange} 
                    handleBlur={handleBlur}
                    error={errors.comments && touched.comments ? true : false } 
                    helperText = { touched.comments && errors.comments ? errors.comments : ''} 
                    margin="normal" 
                    size="small" 
                />

                <InputField 
                    label="Students" 
                    name="students" 
                    value={values.students} 
                    handleChange={handleChange} 
                    handleBlur={handleBlur}
                    error={errors.students && touched.students ? true : false } 
                    helperText = { touched.students && errors.students ? errors.students : ''} 
                    margin="normal" 
                    size="small" 
                />

                <TextField 
                    sx={{width : '100%'}} 
                    margin="normal"  
                    required 
                    name="course" 
                    size="small" 
                    label="Select Course"
                    error={errors.course && touched.course ? true : false }  
                    helperText={ touched.course && errors.course ? errors.course : ''} 
                    select 
                    value={values.course}
                    onBlur={handleBlur}  
                    onChange={handleChange}
                >
                    { courseData.map((course) => {
                        return (
                            <MenuItem key={course._id} value={course.name}>{course.name}</MenuItem>
                        )
                    })}
                </TextField>
    
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
                                handleClick={handleRedirect} 
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

export default CreateLectures
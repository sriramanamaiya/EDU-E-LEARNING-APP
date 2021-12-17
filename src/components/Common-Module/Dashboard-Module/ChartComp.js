import React from 'react'
import { Box } from '@mui/system'
import { useSelector } from 'react-redux'
import Chart from "react-google-charts"

const ChartComp = (props) => {
    const courses = useSelector((state) => {
        return state.courses.data
    })

    const result = []
    courses.forEach((ele) => {
        result.push([ele.name, ele.students.length])
    })

    return (
        <Box sx={{ display : 'flex', alignItems : 'center', justifyContent : 'center'}}>
            <Chart 
                width={'500px'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Courses', 'Total Students Enrolled']].concat(result)
                }
                options={{
                    colors: ['#4285F4'],
                    chart: {
                    title: 'Course Enrollment Report',
                    subtitle: 'Course, Enrolled Students',
                    },
                }}
            />
        </Box>
    )
}

export default ChartComp 
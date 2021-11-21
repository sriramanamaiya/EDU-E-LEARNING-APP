import React from 'react'
import { Link } from 'react-router-dom'

const Students = (props) => {

    return (
        <div>
            <Link to="/admin/students/register">Register a Student</Link> |
            <Link to="/admin/students/learners">View All Registered Student</Link>
        </div>
    )
}

export default Students
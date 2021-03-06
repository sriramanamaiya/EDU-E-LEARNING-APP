import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Heading from '../../Reusable-Comp/Heading'
import Player from '../../Common-Comp/Player'
import MoreDetails from '../../Common-Comp/MoreDetails'

const MediaContainer = (props) => {
    const { id } = props.match.params

    const lectureData = useSelector((state) => {
        return state.lectures.data
    })

    const findLecture = lectureData.find(lecture => {
        return lecture._id === id
    })

    return (
        <div>
            { findLecture && (
                <>
                    <Heading type="h2" title={findLecture.title} />
                    <Player fileType={findLecture.assetType} url={findLecture.assetURL}  />
                    <MoreDetails {...findLecture} />
                    <Link className="goback" to={`/admin/courses/${findLecture.course}`} >Go Back 🔙</Link>
                </>
            )}
        </div>
    )
}

export default MediaContainer
import React from 'react'

import PdfViewer from '../Reusable-Comp/PdfViewer'
import MediaPlayer from './MediaPlayer'
import Image from '../Reusable-Comp/Image'

const Player = (props) => {
    const { fileType, url } = props

    let player 
    if( fileType === 'pdf' ){
        player = <PdfViewer url={url} />
    }else if( fileType === 'img' ) {
        player = <Image source={url} width="100%" />
    }else{
        player = <MediaPlayer url={url} />
    }

    return (
        player
    )
}

export default Player
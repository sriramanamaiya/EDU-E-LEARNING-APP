import React from 'react'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { Box } from '@mui/system'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

const PdfViewer = (props) => {
    const { url } = props

    const defaultLayoutPluginInstance = defaultLayoutPlugin()

    return (
        <Box sx={{ height : 750 }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer fileUrl={url} plugins={[ defaultLayoutPluginInstance ]}/>
            </Worker>
        </Box>
    )
}

export default PdfViewer